import * as THREE from '../../vendor/three/0.170.0/three.module.js';

// One sculpted honeybee in a transparent, non-interactive scene.
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const canvas = document.createElement('canvas');
canvas.className = 'bee-flight';
canvas.setAttribute('aria-hidden', 'true');
document.body.append(canvas);
let renderer;
try { renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true, powerPreference:'low-power'}); }
catch { canvas.remove(); }
if (renderer) {
  renderer.setClearColor(0,0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40,1,.1,100);
  camera.position.z = 18;
  scene.add(new THREE.HemisphereLight(0xfff5dc,0x4a3420,1.6));
  const key = new THREE.DirectionalLight(0xffe5b0,2.6); key.position.set(-3,5,8); scene.add(key);
  const rim = new THREE.DirectionalLight(0xe0eeff,2); rim.position.set(4,-1,2); scene.add(rim);
  const gold = new THREE.MeshStandardMaterial({color:0xb77a20,roughness:.65});
  const black = new THREE.MeshStandardMaterial({color:0x20170d,roughness:.5});
  const eye = new THREE.MeshStandardMaterial({color:0x090a08,roughness:.27,metalness:.05});
  const wingMat = new THREE.MeshPhysicalMaterial({color:0xe2eef0,transparent:true,opacity:.36,roughness:.22,metalness:.15,side:THREE.DoubleSide,depthWrite:false});
  const sphere = new THREE.SphereGeometry(1,24,16);
  const lineMat = new THREE.LineBasicMaterial({color:0x9a7b42,transparent:true,opacity:.55});
  function ellipsoid(group,mat,x,y,z,sx,sy,sz) {
    const m = new THREE.Mesh(sphere,mat); m.position.set(x,y,z); m.scale.set(sx,sy,sz); group.add(m); return m;
  }
  function line(group,points,material=lineMat) {
    const g = new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p)));
    group.add(new THREE.Line(g,material));
  }
  function tube(group,points,radius,mat) {
    const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));
    group.add(new THREE.Mesh(new THREE.TubeGeometry(curve,12,radius,5,false),mat));
  }
  function bee(seed) {
    const root = new THREE.Group(); scene.add(root);
    // Abdomen: a continuous curved surface with alternating natural bands.
    const points=[];
    for(let j=0;j<=32;j++){const t=j/32;points.push(new THREE.Vector2(.25*Math.sin(Math.PI*t)**.7,(t-.5)*.82));}
    const abdomen = new THREE.Mesh(new THREE.LatheGeometry(points,32),gold);
    abdomen.rotation.z=Math.PI/2; abdomen.position.x=-.37; root.add(abdomen);
    // Pigmented bands follow the shell itself, avoiding raised rubber-ring shapes.
    const shell=abdomen.geometry, colors=[];
    const pos=shell.getAttribute('position');
    for(let i=0;i<pos.count;i++){
      const t=(pos.getY(i)+.41)/.82;
      const stripe=Math.sin((t-.1)*Math.PI*10);
      const c=new THREE.Color(stripe>.12?0x382719:0xb68538);
      c.multiplyScalar(.92+.08*Math.sin(i*12.9898));colors.push(c.r,c.g,c.b);
    }
    shell.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    abdomen.material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.46});
    ellipsoid(root,gold,.07,0,0,.29,.26,.25);
    ellipsoid(root,black,.39,.015,0,.22,.2,.2);
    for(const side of [-1,1]){
      ellipsoid(root,eye,.47,.07,side*.145,.115,.135,.07);
      const antenna=[[.51,.11,side*.1],[.64,.21,side*.15],[.71,.28,side*.23],[.76,.29,side*.25]];
      tube(root,antenna,.012,black);
      for(let j=0;j<3;j++){
        const x=.18-j*.16;
        const joints=[[x,-.12,side*.13],[x-.08,-.27,side*.24],[x-.02,-.4,side*.34],[x+.09,-.45,side*.4]];
        tube(root,joints,.018,black);
        ellipsoid(root,black,...joints[1],.03,.035,.03);
        if(j===2)ellipsoid(root,gold,x-.025,-.35,side*.31,.032,.065,.04);
        for(let k=0;k<4;k++)line(root,[[x-.03,-.32-k*.02,side*.31],[x-.08,-.34-k*.02,side*.37]]);
        line(root,[joints[3],[x+.12,-.48,side*.42],[x+.1,-.49,side*.43]]);
      }
      // Tiny facets break up the eye highlight without turning it metallic.
      for(let k=0;k<95;k++){
        const az=k*2.39996, v=(k+.5)/95, rr=Math.sqrt(1-v*v);
        ellipsoid(root,eye,.47+.113*rr*Math.cos(az),.07+.133*rr*Math.sin(az),side*(.145+.071*v),.007,.007,.005);
      }
    }
    // Fine thorax hairs catch the warm key light; deterministic placement.
    const hairs=[];
    for(let j=0;j<1500;j++){
      const a=j*2.399963, z=1-2*(j+.5)/1500, r=Math.sqrt(1-z*z);
      const x=r*Math.cos(a), y=r*Math.sin(a);
      hairs.push(.07+x*.285,y*.255,z*.245,.07+x*(.308+.02*Math.sin(j)),y*(.275+.016*Math.sin(j)),z*.275);
    }
    const hairGeo=new THREE.BufferGeometry();hairGeo.setAttribute('position',new THREE.Float32BufferAttribute(hairs,3));
    root.add(new THREE.LineSegments(hairGeo,new THREE.LineBasicMaterial({color:0xd9ad59,transparent:true,opacity:.65})));
    const wings=[];
    for(const side of [-1,1])for(let j=0;j<2;j++){
      const pivot=new THREE.Group();pivot.position.set(.05-j*.12,.17,side*.1);root.add(pivot);
      const shape=new THREE.Shape();shape.moveTo(0,0);shape.bezierCurveTo(.2,.22,.2,.82,-.07,.91);shape.bezierCurveTo(-.34,.93,-.42,.32,0,0);
      const membrane=new THREE.Group();membrane.rotation.x=side*Math.PI/2;membrane.scale.setScalar(j?.72:1);pivot.add(membrane);
      const mesh=new THREE.Mesh(new THREE.ShapeGeometry(shape,24),wingMat);membrane.add(mesh);
      const edge=new THREE.BufferGeometry().setFromPoints(shape.getPoints(48).map(p=>new THREE.Vector3(p.x,p.y,.002)));
      membrane.add(new THREE.LineLoop(edge,lineMat));
      for(let k=0;k<4;k++){
        const endX=-.24+k*.105, endY=.72+Math.sin(k)*.1;
        line(membrane,[[0,0,.003],[-.06,.25,.003],[endX,endY,.003]]);
        for(let n=1;n<4;n++){
          const f=n/4;
          line(membrane,[[-.06+(endX+.06)*f,.25+(endY-.25)*f,.004],[-.12+(endX+.06)*f,.29+(endY-.25)*f,.004]]);
        }
      }
      pivot.rotation.y=j*.35;wings.push({pivot,side,j});
    }
    root.scale.setScalar(.68);
    return {root,wings,seed};
  }
  const bees=[bee(0)];
  let width,height,frame=0,last=0,time=0;
  function resize(){width=innerWidth;height=innerHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();}
  resize();addEventListener('resize',resize,{passive:true});
  function tick(now){
    frame=requestAnimationFrame(tick);
    if(now-last<30)return;
    time+=Math.min((now-last)/1000,.05);last=now;
    const t=time, h=6.0,w=h*camera.aspect;
    for(const b of bees){
      const p=b.seed;
      const x=Math.sin(t*.19+p)*w*.8+Math.sin(t*.63+p)*w*.12;
      const y=Math.sin(t*.26+p*2)*h*.75+Math.sin(t*.91+p)*.18;
      const dx=Math.cos(t*.19+p)*w*.152+Math.cos(t*.63+p)*w*.0756;
      const dy=Math.cos(t*.26+p*2)*h*.195+Math.cos(t*.91+p)*.164;
      b.root.position.set(x,y,Math.sin(t*.31+p)*2);
      const heading=Math.atan2(dy,dx);
      const delta=Math.atan2(Math.sin(heading-b.root.rotation.z),Math.cos(heading-b.root.rotation.z));
      b.root.rotation.z+=delta*.12;
      b.root.rotation.x=.25+Math.sin(t*.43+p)*.2;
      b.root.rotation.y=Math.sin(t*.31+p)*.3;
      b.root.scale.setScalar(width<600?.5:.68);
      for(const wing of b.wings)wing.pivot.rotation.x=wing.side*(.15+Math.sin(t*145+p+wing.j*.35)*.65);
    }
    renderer.render(scene,camera);
  }
  function sync(){cancelAnimationFrame(frame);canvas.hidden=reduced.matches;if(!document.hidden&&!reduced.matches){last=performance.now();frame=requestAnimationFrame(tick);}}
  document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);sync();
}
