import * as THREE from '../../vendor/three/0.170.0/three.module.js';
export { THREE };

// A deterministic, genuinely volumetric model. No creature image is used as a mesh.
export function createParasite() {
    let seed = 7619;
    const rand = () => { seed = (1664525*seed+1013904223) >>> 0; return seed/4294967296; };
    const v = (x=0,y=0,z=0) => new THREE.Vector3(x,y,z);
    const root = new THREE.Group();
    const torso = new THREE.Group();
    root.add(torso);
    const materials = {
        shell:new THREE.MeshPhysicalMaterial({color:0x73786f,roughness:.55,metalness:0,clearcoat:.22,clearcoatRoughness:.48}),
        joint:new THREE.MeshStandardMaterial({color:0x555d54,roughness:.66,metalness:0}),
        fang:new THREE.MeshPhysicalMaterial({color:0x343b35,roughness:.31,metalness:.05,clearcoat:.45}),
        eye:new THREE.MeshPhysicalMaterial({color:0x11070a,roughness:.09,metalness:.08,clearcoat:1}),
        hair:new THREE.LineBasicMaterial({vertexColors:true,transparent:true,opacity:.73})
    };
    // Fine chitin grain: generated material texture, not a photograph or sprite.
    const grainCanvas=document.createElement('canvas'); grainCanvas.width=grainCanvas.height=256;
    const gctx=grainCanvas.getContext('2d'), pixels=gctx.createImageData(256,256);
    for(let i=0;i<pixels.data.length;i+=4) {
        const q=90+rand()*95; pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=q;pixels.data[i+3]=255;
    }
    gctx.putImageData(pixels,0,0);
    const grain=new THREE.CanvasTexture(grainCanvas);grain.wrapS=grain.wrapT=THREE.RepeatWrapping;grain.repeat.set(5,5);
    materials.shell.bumpMap=grain;materials.shell.bumpScale=.032;
    function hairGeometry(points,colors) {
        const geo=new THREE.BufferGeometry();
        geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
        geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
        return new THREE.LineSegments(geo,materials.hair);
    }
    function ellipsoid(parent,radii,position,count,folded=false) {
        const geo=new THREE.SphereGeometry(1,80,56);
        const pos=geo.attributes.position,colors=[];
        const dark=new THREE.Color(0x444b48),pale=new THREE.Color(0x949b96),crease=new THREE.Color(0x616a65);
        for(let i=0;i<pos.count;i++){
            const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);
            const rings=folded?Math.pow(.5+.5*Math.sin(y*31+Math.sin(x*5)*.45),9):0;
            const noise=Math.sin(x*31+y*19+z*7)*Math.sin(y*27-z*31)*.010-rings*.036;
            pos.setXYZ(i,x*radii.x*(1+noise),y*radii.y*(1+noise),z*radii.z*(1+noise));
            const vein=Math.sin(y*18+x*9+Math.sin(z*13)*1.2);
            const mottling=.60+.13*Math.sin(x*21+z*16)*Math.sin(y*13);
            const color=dark.clone().lerp(pale,mottling).lerp(crease,rings*.58);
            colors.push(color.r,color.g,color.b);
        }
        geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.computeVertexNormals();
        const material=materials.shell.clone();material.color.set(0xffffff);material.vertexColors=true;
        const mesh=new THREE.Mesh(geo,material);mesh.position.copy(position);mesh.castShadow=true;parent.add(mesh);
        const hp=[],hc=[],hairDark=new THREE.Color(0x4e554a),tip=new THREE.Color(0xa3aa98);
        for(let i=0;i<count;i++){
            const z=rand()*2-1,a=rand()*Math.PI*2,r=Math.sqrt(1-z*z);
            const unit=v(r*Math.cos(a),r*Math.sin(a),z);
            const point=v(unit.x*radii.x,unit.y*radii.y,unit.z*radii.z);
            const normal=v(unit.x/radii.x,unit.y/radii.y,unit.z/radii.z).normalize();
            const length=.018+Math.pow(rand(),3)*.055;
            const end=point.clone().addScaledVector(normal,length);end.y+=length*.38;
            const mid=point.clone().lerp(end,.53).add(v(0,.008,.012));
            hp.push(...point,...mid,...mid,...end);
            const col=hairDark.clone().lerp(tip,rand()*.5);
            hc.push(...hairDark,...col,...col,...tip.clone().multiplyScalar(.75));
        }
        mesh.add(hairGeometry(hp,hc));
        return mesh;
    }
    const abdomen=ellipsoid(torso,v(1.43,1.57,.92),v(0,.35,.96),850,true);
    const carapace=ellipsoid(torso,v(.99,.86,.48),v(0,-.74,.73),300,true);
    const head=ellipsoid(torso,v(.55,.39,.31),v(0,-1.37,.64),140);
    // Recessed lateral pores break up the swollen cuticle, without a spider's markings.
    const poreMaterial=new THREE.MeshStandardMaterial({color:0x414943,roughness:.83});
    for(let side=-1;side<=1;side+=2)for(let i=0;i<9;i++) {
        const y=-.78+i*.27,relative=(y-.35)/1.57;
        const pore=new THREE.Mesh(new THREE.SphereGeometry(1,10,8),poreMaterial);
        pore.scale.set(.032,.067,.017);
        pore.position.set(side*1.43*Math.sqrt(1-relative*relative)*.93,y,1.28);
        pore.rotation.y=side*.9;torso.add(pore);
    }
    // Small lateral sensory spots, not the spider's eight-eye mask.
    for(let i=0;i<2;i++){
        const side=i===0?-1:1;
        const eye=new THREE.Mesh(new THREE.SphereGeometry(.045,18,14),materials.eye);
        eye.position.set(side*.41,-1.53,.83);eye.scale.y=.72;
        torso.add(eye);
    }
    function taperedCurve(points,radius,material) {
        const curve=new THREE.CatmullRomCurve3(points);
        const geo=new THREE.TubeGeometry(curve,22,radius,8,false);
        const p=geo.attributes.position;
        for(let i=0;i<=22;i++){
            const center=curve.getPointAt(i/22),taper=Math.pow(1-i/22,.65)*.96+.025;
            for(let j=0;j<=8;j++){const n=i*9+j;p.setXYZ(n,center.x+(p.getX(n)-center.x)*taper,center.y+(p.getY(n)-center.y)*taper,center.z+(p.getZ(n)-center.z)*taper);}
        }
        geo.computeVertexNormals();const mesh=new THREE.Mesh(geo,material);mesh.castShadow=true;return mesh;
    }
    const fangs=[],palps=[];
    [-1,1].forEach(side=>{
        const group=new THREE.Group();group.position.set(side*.27,-1.57,.61);torso.add(group);
        group.add(taperedCurve([v(),v(side*.13,-.20,.02),v(side*.08,-.46,-.03),v(-side*.23,-.59,.04)],.18,materials.fang));
        for(let i=0;i<3;i++)group.add(taperedCurve([v(side*.10,-.19-i*.085,.025),v(-side*.09,-.23-i*.085,.05)],.045,materials.fang));
        fangs.push({group,side});
        const palp=new THREE.Group();palp.position.set(side*.49,-1.2,.55);torso.add(palp);
        palp.add(taperedCurve([v(),v(side*.12,-.14,.04),v(side*.19,-.31,-.06),v(side*.12,-.43,-.16)],.085,materials.shell));
        palps.push({group:palp,side});
    });
    function segment(radius,lengthScale=1) {
        const group=new THREE.Group();
        const geo=new THREE.CylinderGeometry(radius*.48,radius,1,12,8,false);
        geo.translate(0,.5,0);
        const p=geo.attributes.position;
        for(let i=0;i<p.count;i++){
            const y=p.getY(i),ring=(1+.055*Math.cos(y*43))*(.82+.28*Math.sin(y*Math.PI));
            p.setX(i,p.getX(i)*ring+Math.sin(y*Math.PI)*radius*.38);
            p.setZ(i,p.getZ(i)*ring*.82);
        }
        geo.computeVertexNormals();
        const mesh=new THREE.Mesh(geo,materials.shell);mesh.castShadow=true;group.add(mesh);
        const points=[],colors=[],c1=new THREE.Color(0x434c43),c2=new THREE.Color(0x959e90);
        for(let i=0;i<30;i++){
            const y=rand(),a=rand()*Math.PI*2,r=radius*(1-y*.52);
            const start=v(Math.cos(a)*r,y,Math.sin(a)*r),len=.018+rand()*.045;
            const end=start.clone().add(v(Math.cos(a)*len,Math.min(.025,len*.2),Math.sin(a)*len));
            points.push(...start,...end);colors.push(...c1,...c2.clone().multiplyScalar(.5+rand()*.5));
        }
        group.add(hairGeometry(points,colors));root.add(group);return group;
    }
    const legs=[];
    [-1,1].forEach((side,s)=>{
        for(let i=0;i<8;i++){
            const y=-1.02+i*.33;
            const hip=v(side*(.84+Math.sin(i/7*Math.PI)*.29),y,.57);
            const rest=v(hip.x+side*(.94+Math.sin(i/7*Math.PI)*.22),y+(i-3.5)*.16,.025);
            const joint=new THREE.Mesh(new THREE.SphereGeometry(.13,14,10),materials.joint);joint.castShadow=true;root.add(joint);
            joint.scale.set(.83,.57,.85);
            legs.push({side,index:i,group:(i+s*2)%4,hip,rest,foot:v(),from:v(),target:v(),swing:-1,
                coxa:segment(.15),femur:segment(.145),tibia:segment(.095),joint,
                toe:taperedCurve([v(),v(0,-.08,.015),v(0,-.15,.03)],.055,materials.fang)});
            root.add(legs[legs.length-1].toe);
        }
    });
    const up=v(0,1,0),a=v(),b=v(),dir=v(),bend=v(),knee=v(),coxaEnd=v(),footLocal=v(),ideal=v();
    function bone(mesh,start,end){
        dir.subVectors(end,start);mesh.position.copy(start);
        mesh.quaternion.setFromUnitVectors(up,dir.clone().normalize());
        mesh.scale.set(1,dir.length(),1);
    }
    function resetFeet() {
        root.updateMatrixWorld(true);
        legs.forEach(l=>{l.foot.copy(root.localToWorld(l.rest.clone()));l.foot.z=0;l.swing=-1;});
    }
    let lastPosition=v(),travel=0;
    function update(t,dt,mode='walk',jump=0,bite=0) {
        const velocity=root.position.clone().sub(lastPosition).divideScalar(Math.max(dt,.001));
        if(dt===0)velocity.set(0,0,0);
        const distance=root.position.distanceTo(lastPosition);lastPosition.copy(root.position);
        if(mode==='walk'&&distance<2)travel+=distance/Math.max(.01,root.scale.x);
        const gait=travel*6;
        const activity=mode==='walk'?Math.min(1,velocity.length()/(root.scale.x*2.8)): .18;
        torso.position.z=Math.sin(gait*2)*.035*activity;
        torso.rotation.y=Math.sin(gait)*.023*activity;
        abdomen.scale.set(1+Math.sin(t*2.1)*.009,1,1+Math.sin(t*2.1)*.015);
        fangs.forEach(f=>{f.group.rotation.z=f.side*(.05+Math.sin(t*2.8)*.025+jump*.12+bite*.75);f.group.rotation.x=bite*.10;});
        palps.forEach(p=>{p.group.rotation.z=p.side*(Math.sin(t*4+p.side)*.10+jump*.35);p.group.rotation.x=Math.sin(t*3.3+p.side)*.11;});
        root.updateMatrixWorld(true);
        const activeGroup=Math.floor(gait)%4;
        legs.forEach(l=>{
            ideal.copy(l.rest);root.localToWorld(ideal);ideal.z=0;
            if(mode==='walk'){
                const error=l.foot.distanceTo(ideal)/root.scale.x;
                if(l.swing<0&&((l.group===activeGroup&&error>.26)||error>.73)){
                    l.swing=0;l.from.copy(l.foot);l.target.copy(ideal).addScaledVector(velocity,.055);l.target.z=0;
                }
                if(l.swing>=0){
                    l.swing=Math.min(1,l.swing+dt/.18);
                    const u=l.swing*l.swing*(3-2*l.swing);
                    l.foot.lerpVectors(l.from,l.target,u);l.foot.z=Math.sin(l.swing*Math.PI)*root.scale.x*.27;
                    if(l.swing===1){l.foot.copy(l.target);l.swing=-1;}
                }
                footLocal.copy(l.foot);root.worldToLocal(footLocal);
            } else {
                footLocal.copy(l.rest);
                footLocal.x*=1-jump*.18;
                footLocal.y+=l.index<4?-jump*.25:jump*.18;
                footLocal.z+=jump*(l.index<4?.65:.32)+Math.sin(t*4-l.index*.8)*.065;
            }
            a.copy(l.hip);
            coxaEnd.copy(a).add(v(l.side*.16,(l.index-3.5)*.018,.045));
            b.copy(footLocal).sub(coxaEnd);
            const distance=Math.max(.01,b.length()),L1=.875,L2=1.14;
            b.normalize();
            const reach=Math.min(distance,L1+L2-.005);
            // Keep the new limb lengths exactly half the original; never stretch a tibia.
            footLocal.copy(coxaEnd).addScaledVector(b,reach);
            const along=(L1*L1-L2*L2+reach*reach)/(2*reach);
            const height=Math.sqrt(Math.max(.01,L1*L1-along*along));
            bend.set(l.side*.20,0,1).addScaledVector(b,-b.dot(v(l.side*.20,0,1))).normalize();
            knee.copy(coxaEnd).addScaledVector(b,along).addScaledVector(bend,height);
            bone(l.coxa,a,coxaEnd);bone(l.femur,coxaEnd,knee);bone(l.tibia,knee,footLocal);
            l.joint.position.copy(knee);l.toe.position.copy(footLocal);
            l.toe.rotation.z=-l.side*.45;
        });
    }
    return {root,resetFeet,update,legs,
        dispose(){root.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){o.material.dispose();}});grain.dispose();}
    };
}

export function createFeathers() {
    const group=new THREE.Group(),items=[];
    const canvas=document.createElement('canvas');canvas.width=128;canvas.height=384;
    const c=canvas.getContext('2d');
    for(let y=24;y<350;y+=2){
        const u=(y-24)/326,w=Math.sin(u*Math.PI)*45*(.85+.12*Math.sin(y*7));
        c.strokeStyle='rgba(235,228,207,'+(.35+.4*Math.sin(u*Math.PI))+')';c.lineWidth=1;
        c.beginPath();c.moveTo(62+4*Math.sin(u*3),y+12);c.quadraticCurveTo(62-w*.55,y-8,62-w,y-20);c.stroke();
        c.beginPath();c.moveTo(64,y+12);c.quadraticCurveTo(64+w*.45,y-7,64+w,y-24);c.stroke();
    }
    c.strokeStyle='#ede3cf';c.lineWidth=1.6;c.beginPath();c.moveTo(64,375);c.quadraticCurveTo(69,180,61,12);c.stroke();
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    const material=new THREE.MeshStandardMaterial({map:texture,transparent:true,alphaTest:.035,side:THREE.DoubleSide,roughness:.95,depthWrite:false});
    for(let i=0;i<38;i++){
        const geo=new THREE.PlaneGeometry(.42,1.4,3,12),p=geo.attributes.position;
        for(let j=0;j<p.count;j++)p.setZ(j,.16*Math.sin(p.getY(j)*2)+p.getX(j)*p.getX(j)*.5);
        geo.computeVertexNormals();
        const mesh=new THREE.Mesh(geo,material.clone()),a=i*2.39996;
        const r=.3+(i%7)*.14;
        const base=new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r*.6,.7+(i%4)*.15);
        mesh.position.copy(base);mesh.rotation.set(Math.sin(i*3)*.3,Math.cos(i*8)*.5,i*5.17);group.add(mesh);
        items.push({mesh,base,a});
    }
    return {group,update(t){
        const burst=THREE.MathUtils.smoothstep(t,1.8,5.2);
        items.forEach(({mesh,base,a},i)=>{
            mesh.position.copy(base).add(new THREE.Vector3(Math.cos(a)*burst*2.6,Math.sin(a)*burst*2.2-burst*burst,.6*burst));
            mesh.rotation.z+=Math.sin(t*3+i)*.001+burst*.008;
            mesh.material.opacity=t<4?1:THREE.MathUtils.clamp((7-t)/3,0,1);
            mesh.visible=t<7;
        });
    }};
}
