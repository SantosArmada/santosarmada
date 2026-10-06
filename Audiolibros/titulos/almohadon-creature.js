/* El almohadón only: perspective WebGL creature, planted-foot IK and a silent one-shot performance. */
(async function () {
    'use strict';
    const stage=document.getElementById('creatureStage'),canvas=document.getElementById('creatureCanvas');
    const replay=document.getElementById('creatureReplay'),stop=document.getElementById('creatureStop');
    const status=document.getElementById('creatureStatus'),art=document.querySelector('.almohadon-art');
    const biteButton=document.getElementById('creatureBite');
    if(!stage||!canvas||!replay||!stop||!art)return;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let THREE,renderer,scene,camera,creature,feathers,shadow,keyLight;
    let ready=false,active=false,used=false,frame=0,timer=0,observer,still;
    let width=innerWidth,height=innerHeight,viewHeight=1,scale=1,startTime=0,lastTime=0,heading=0;
    let origin,route=[],poorFrames=0,mode='webgl',biteAt=-Infinity;
    const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),ease=t=>t*t*(3-2*t),mix=(a,b,t)=>a+(b-a)*t;
    const clear=()=>{if(renderer)renderer.clear();stage.style.opacity='1';stage.style.background='transparent';};
    function end(message) {
        active=false;cancelAnimationFrame(frame);clearTimeout(timer);clear();
        stage.dataset.phase='idle';stop.hidden=true;if(biteButton)biteButton.hidden=true;replay.disabled=!ready;
        replay.textContent=reduced.matches||mode!=='webgl'?'Mostrar criatura · sin movimiento':'Repetir la escena 3D';
        if(message)status.textContent=message;
    }
    function cancel() {
        used=true;if(still)still.hidden=true;
        end('Escena detenida. Puedes continuar leyendo.');
        if(document.activeElement===stop)replay.focus({preventScroll:true});
    }
    stop.addEventListener('click',cancel);
    if(biteButton)biteButton.addEventListener('click',()=>{if(active)biteAt=performance.now();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&(!stop.hidden||active))cancel();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
    window.addEventListener('pagehide',cancel);
    reduced.addEventListener('change',()=>{
        cancel();status.textContent=reduced.matches?'Movimiento reducido: vista inmóvil, sin salto.':'Escena 3D lista. Incluye un salto hacia la pantalla.';
    });
    function size() {
        width=innerWidth;height=innerHeight;
        if(!renderer)return;
        renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();
        viewHeight=2*camera.position.z*Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
        scale=Math.min(315,width*.56,height*.36)/height*viewHeight/5.2;
    }
    window.addEventListener('resize',()=>{if(active||stage.dataset.phase==='still')cancel();size();});
    function world(x,y) {return new THREE.Vector3((x-width/2)/height*viewHeight,(height/2-y)/height*viewHeight,0);}
    function prepare() {
        let rect=art.getBoundingClientRect();
        if(rect.bottom<100||rect.top>height*.8){art.scrollIntoView({behavior:'instant',block:'center'});rect=art.getBoundingClientRect();}
        origin=world(clamp(rect.left+rect.width*.73,80,width-60),clamp(rect.top+rect.height*.59,140,height*.69));
        route=[origin.clone().add(new THREE.Vector3(0,-scale*.5,0)),
            world(width*.85,height*.67),world(width*.65,height*.78),
            world(width*.23,height*.66),world(width*.18,height*.32),world(width*.52,height*.43)];
        creature.root.position.copy(origin);creature.root.scale.setScalar(scale);creature.root.rotation.set(0,0,0);
        heading=0;creature.resetFeet();creature.update(0,0,'brace');
        feathers.group.position.copy(origin);feathers.group.scale.setScalar(scale*1.25);feathers.group.visible=true;
        shadow.visible=true;keyLight.shadow.needsUpdate=true;
    }
    function path(t) {
        const u=clamp((t-5)/18,0,1)*(route.length-1),i=Math.min(Math.floor(u),route.length-2);
        const f=ease(u-i),p=route[i].clone().lerp(route[i+1],f);
        const d=route[i+1].clone().sub(route[i]);
        return {position:p,heading:Math.atan2(d.y,d.x)+Math.PI/2};
    }
    function draw(now) {
        if(!active)return;
        const t=(now-startTime)/1000,dt=Math.min(.05,(now-lastTime)/1000);lastTime=now;
        const root=creature.root;root.visible=true;root.scale.setScalar(scale);root.rotation.x=0;
        function pinch(seconds) {
            if(seconds<0||seconds>1.3)return 0;
            if(seconds<.65)return ease(seconds/.65);
            if(seconds<.76)return mix(1,-.12,ease((seconds-.65)/.11));
            return mix(-.12,0,ease(clamp((seconds-.96)/.34,0,1)));
        }
        let bite=pinch((now-biteAt)/1000);
        stage.dataset.elapsed=t.toFixed(2);
        if(t<5){
            stage.dataset.phase='emergence';
            const k=ease(clamp((t-1.1)/3.9,0,1));
            root.position.copy(origin).add(new THREE.Vector3(0,-scale*.5*k,-scale*1.9*(1-k)));
            root.visible=t>1.1;root.rotation.x=-.12*(1-k);root.rotation.z=Math.sin(t*1.2)*.05;
            creature.update(t,dt,'brace',0,bite);
            feathers.update(t);
            if(t>4.85)creature.resetFeet();
        } else if(t<23) {
            stage.dataset.phase='crawl';
            const p=path(t);
            const turn=Math.atan2(Math.sin(p.heading-heading),Math.cos(p.heading-heading));
            heading+=turn*(1-Math.exp(-dt*8));
            root.position.copy(p.position);root.rotation.z=heading;
            creature.update(t,dt,'walk',0,bite);feathers.update(t);
        } else if(t<26){
            stage.dataset.phase='watch';feathers.group.visible=false;
            const k=ease(clamp((t-23)/3,0,1));
            root.position.copy(route[route.length-1]).lerp(world(width*.5,height*.49),k);
            root.rotation.z=heading*(1-k);root.rotation.x=-.53*k;
            bite=Math.max(bite,pinch(t-24));
            root.scale.z=scale*(1-.16*k);creature.update(t,dt,'brace',k*.12,bite);
        } else if(t<28.2) {
            stage.dataset.phase='lunge';feathers.group.visible=false;shadow.visible=false;
            const k=clamp((t-26)/.88,0,1),forward=k*k*(2-k);
            root.position.copy(world(width*.5,height*.49));root.position.x*=1-k;root.position.y*=1-k;
            root.position.z=24*forward;root.rotation.set(mix(-.53,-1.30,ease(k)),Math.sin(k*Math.PI)*.045,Math.sin(k*2)*.045);
            bite=pinch(t-26.05);creature.update(t,dt,'jump',ease(k),bite);
            stage.style.background='rgba(4,8,14,'+(forward*.48)+')';
            stage.style.opacity=String(t<27.2?1:clamp((28.2-t),0,1));
        } else {end('La presencia se ha retirado. Puedes repetir la escena 3D.');return;}
        renderer.render(scene,camera);
        stage.dataset.bite= bite>.5?'open':bite<-.03?'snap':'rest';
        // Lower pixel/shadow cost on slower GPUs; never alter the choreography.
        if(dt>.038&&t>1)poorFrames++;else poorFrames=Math.max(0,poorFrames-1);
        if(poorFrames>25&&renderer.getPixelRatio()>1){renderer.setPixelRatio(1);keyLight.castShadow=false;poorFrames=0;}
        stage.dataset.drawCalls=String(renderer.info.render.calls);
        frame=requestAnimationFrame(draw);
    }
    function start() {
        if(!ready)return;
        used=true;if(observer)observer.disconnect();end();if(still)still.hidden=true;
        if(mode!=='webgl'){
            if(!still){still=new Image();still.src='../assets/almohadon-creature-gray-preview.webp';still.alt='';still.className='creature-still';art.appendChild(still);}
            still.hidden=false;stage.dataset.phase='still';stop.hidden=false;
            status.textContent='Vista ilustrada estática: 3D no disponible en este navegador.';return;
        }
        prepare();
        if(reduced.matches){
            creature.root.rotation.x=-.18;creature.root.visible=true;feathers.group.visible=false;
            creature.update(0,0,'brace');renderer.render(scene,camera);
            stage.dataset.phase='still';stop.hidden=false;
            status.textContent='Modelo 3D inmóvil. Sin recorrido ni salto.';return;
        }
        active=true;stop.hidden=false;if(biteButton)biteButton.hidden=false;replay.disabled=true;biteAt=-Infinity;
        status.textContent='Escena 3D en curso. Escape o Detener escena para salir.';
        startTime=lastTime=performance.now();frame=requestAnimationFrame(draw);
    }
    replay.disabled=true;replay.addEventListener('click',start);
    try {
        const model=await import('./almohadon-creature-model.js');
        THREE=model.THREE;
        renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'default'});
        renderer.setPixelRatio(Math.min(devicePixelRatio||1,width<600?1.35:1.6));
        renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
        renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.10;
        renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
        scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(35,width/height,.1,100);camera.position.set(0,0,30);
        scene.add(new THREE.HemisphereLight(0xcbd9dd,0x313a34,1.2));
        keyLight=new THREE.DirectionalLight(0xffe6c9,2.8);keyLight.position.set(-7,8,15);scene.add(keyLight);
        keyLight.castShadow=width>=600;keyLight.shadow.mapSize.set(1024,1024);
        Object.assign(keyLight.shadow.camera,{left:-18,right:18,top:13,bottom:-13,near:.1,far:60});
        keyLight.shadow.bias=-.0005;keyLight.shadow.normalBias=.025;keyLight.shadow.radius=4;
        const rim=new THREE.DirectionalLight(0x88b5dc,1.8);rim.position.set(8,0,5);scene.add(rim);
        const warm=new THREE.DirectionalLight(0xd4c8b0,.6);warm.position.set(-2,-6,8);scene.add(warm);
        const front=new THREE.DirectionalLight(0xe2e6f5,.7);front.position.set(0,-2,30);scene.add(front);
        creature=model.createParasite();scene.add(creature.root);
        feathers=model.createFeathers();scene.add(feathers.group);
        shadow=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({color:0x050508,opacity:.25}));
        shadow.position.z=-.015;shadow.receiveShadow=true;scene.add(shadow);
        size();creature.root.visible=true;feathers.group.visible=true;
        // Compile shader programs before any automatic run to avoid a first-jump stall.
        await renderer.compileAsync(scene,camera);
        creature.root.visible=false;feathers.group.visible=false;renderer.clear();
        ready=true;replay.disabled=false;stage.dataset.renderer='webgl';stage.dataset.legs=String(creature.legs.length);
        canvas.addEventListener('webglcontextlost',event=>{
            event.preventDefault();cancel();mode='fallback';stage.dataset.renderer='static-fallback';
            status.textContent='3D interrumpido. Puedes ver la ilustración sin movimiento.';replay.textContent='Mostrar ilustración';
        });
        if(reduced.matches){
            replay.textContent='Mostrar criatura 3D · sin movimiento';
            status.textContent='Movimiento reducido: sin reproducción automática ni salto.';return;
        }
        status.textContent='Escena 3D lista. Comenzará al entrar el almohadón en pantalla.';
        observer=new IntersectionObserver(entries=>{
            if(entries.some(e=>e.isIntersecting)&&!used&&!document.hidden){
                clearTimeout(timer);timer=setTimeout(()=>{if(!used&&!document.hidden)start();},3500);
            } else clearTimeout(timer);
        },{threshold:.35});observer.observe(art);
    } catch(error) {
        if(renderer)renderer.dispose();renderer=null;mode='fallback';ready=true;
        replay.disabled=false;replay.textContent='Mostrar ilustración · sin movimiento';
        stage.dataset.renderer='static-fallback';
        status.textContent='3D no disponible. La ilustración y el reproductor siguen disponibles.';
        console.warn('Almohadón: using the static creature fallback.',error);
    }
})();
