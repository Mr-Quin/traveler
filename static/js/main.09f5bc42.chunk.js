(this.webpackJsonptraveler=this.webpackJsonptraveler||[]).push([[0],{101:function(e,t,n){e.exports=n(123)},105:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(33),i=n.n(o),c=(n(105),n(95)),s=n(19),u=n(5),l=n(0),f=n(51),m=n(26),d=Object(m.a)((function(e,t){return{statics:{},sunRef:void 0,prismColorPrimary:new l.Color("#355cd6"),prismColorSecondary:new l.Color("#6cbca0"),prismPosition:new l.Vector3(0,8,0),cameraPosition:new l.Vector3(0,1.6,20),prismScale:new l.Vector3(1,1.8,1),ringColor:new l.Color("#d7ee9b"),fov:73.7,glRenderer:null,isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),effectsEnabled:!0,quality:window.devicePixelRatio,actions:{setGL:function(t){e({glRenderer:t})},setEnableEffects:function(t){e({effectsEnabled:t})},setQuality:function(t){e({quality:t*window.devicePixelRatio})}}}})),p=n(14),g=n(54),v=function(e){var t=e.count,n=void 0===t?1500:t,o=(Object(g.a)(e,["count"]),Object(a.useRef)()),i=d((function(e){return e.prismColorSecondary})),c=Object(a.useMemo)((function(){return new l.Object3D}),[]),s=Object(a.useMemo)((function(){return Object(p.a)(Array(n)).map((function(){return{d:10*Math.random(),offset:new l.Vector3(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(5*Math.random()),speed:Math.random()/200+.01,scale:Math.min(.1,Math.random()/40)}}))}),[n]);return Object(u.g)((function(){s.forEach((function(e,t){var n=e.offset,a=e.scale,r=e.speed,i=e.d+=r/2,s=Math.cos(i),u=Math.sin(i),l=s+u/100,f=u+Math.cos(2*i)/100,m=s;c.position.set(n.x+l/10,n.y+f/10,n.z+l/10),c.scale.set(a,a,a),c.rotation.set(m,2*m,3*m),c.updateMatrix(),o.current.setMatrixAt(t,c.matrix)})),o.current.instanceMatrix.needsUpdate=!0})),r.a.createElement("instancedMesh",{ref:o,args:[null,null,s.length],position:[0,8,0],frustumCulled:!1},r.a.createElement("icosahedronBufferGeometry",{attach:"geometry",args:[1]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:"#ffffff",emissive:i}))},h=n(10),b=function(e,t){var n=t.axis,a=void 0===n?"y":n,r=t.rate,o=void 0===r?.01:r;return Object(u.g)((function(){e.current.rotation[a]+=o})),e},E=function(e,t){var n=t.axis,a=void 0===n?"y":n,r=t.factor,o=void 0===r?1:r,i=t.defaultValue,c=void 0===i?0:i,s=t.fn,l=void 0===s?"sin":s;return Object(u.g)((function(t){var n=t.clock.getElapsedTime();e.current.position[a]=c+Math[l](n)*o})),e},j=Object(a.forwardRef)((function(e,t){var n=e.count,o=void 0===n?10:n,i=e.height,c=void 0===i?20:i,s=e.rotationOffset,f=void 0===s?10:s,m=d((function(e){return e.ringColor})),g=Object(a.useRef)(),v=Object(a.useMemo)((function(){return new l.Object3D}),[]),h=Object(a.useMemo)((function(){return Object(p.a)(Array(o)).map((function(e,t){return{yPos:t/o,rotation:l.MathUtils.degToRad(t*f)}}))}),[o,f]);return Object(u.g)((function(){h.forEach((function(e,t,n){var a=e.yPos;a>=1&&(e.yPos=0,t<h.length-1?e.rotation=n[t+1].rotation+l.MathUtils.degToRad(f):e.rotation=n[0].rotation+l.MathUtils.degToRad(f));var r=e.yPos+=.001,o=e.rotation+=.001,i=8*Math.sin(Math.PI*a);v.position.set(0,l.MathUtils.lerp(0,c,r),0),v.rotation.set(Math.PI/2,0,o),v.scale.set(i,i,i),v.updateMatrix(),g.current.setMatrixAt(t,v.matrix)})),g.current.instanceMatrix.needsUpdate=!0})),r.a.createElement("group",Object.assign({ref:t},e),r.a.createElement("instancedMesh",{ref:g,args:[null,null,h.length]},r.a.createElement("torusBufferGeometry",{attach:"geometry",args:[1,.002,5,3]}),r.a.createElement("meshStandardMaterial",{attach:"material",roughness:.1,color:m,emissive:m,emissiveIntensity:.5,opacity:.5,transparent:!0,side:l.DoubleSide})))})),O=n(60),y=function(e){return{prismColorPrimary:e.prismColorPrimary,prismColorSecondary:e.prismColorSecondary,prismPosition:e.prismPosition,prismScale:e.prismScale}},w=function(){var e=d(y),t=e.prismColorPrimary,n=e.prismColorSecondary,o=e.prismPosition,i=e.prismScale,c=Object(a.useRef)(),s=Object(a.useRef)(),f=Object(a.useRef)(),m=Object(a.useRef)(),p=Object(a.useMemo)((function(){return new l.SphereBufferGeometry(3.5,4,2)}),[]),g=Object(a.useMemo)((function(){return new l.BoxBufferGeometry(1,1,1).toNonIndexed()}),[]),v=Object(O.b)((function(){return{rotation:[Math.random()*Math.PI*4,Math.random()*Math.PI*4,Math.random()*Math.PI*4],from:{rotation:[0,0,0]},config:{mass:30,tension:10,friction:6}}})),w=Object(h.a)(v,2),x=w[0],M=w[1];return Object(a.useEffect)((function(){var e=setInterval((function(){M({rotation:[Math.random()*Math.PI*4,Math.random()*Math.PI*4,Math.random()*Math.PI*4]})}),3e3);return function(){clearInterval(e)}}),[M]),E(c,{defaultValue:o.y,factor:.5}),b(c,{rate:.005}),Object(u.g)((function(e){var t=e.clock.getElapsedTime();s.current.material.emissiveIntensity=Math.sin(t*Math.PI*.5)/2+1.5,f.current.intensity=s.current.material.emissiveIntensity,f.current.position.y=c.current.position.y,m.current.intensity=s.current.material.emissiveIntensity,m.current.position.y=-c.current.position.y})),r.a.createElement("group",null,r.a.createElement("group",{ref:c,position:o},r.a.createElement("pointLight",{ref:f,distance:20,color:t}),r.a.createElement("pointLight",{ref:m,distance:20,color:t}),r.a.createElement(O.a.mesh,Object.assign({ref:s,geometry:g,scale:[1.4,1.4,1.4]},x),r.a.createElement("meshStandardMaterial",{attach:"material",color:n,emissive:t,side:l.DoubleSide})),r.a.createElement("mesh",{scale:i,geometry:p},r.a.createElement("meshStandardMaterial",{attach:"material",color:n,emissive:t,wireframe:!0})),r.a.createElement("mesh",{scale:i,geometry:p},r.a.createElement("meshPhysicalMaterial",{attach:"material",color:n,opacity:.4,transparent:!0}))),r.a.createElement(j,{position:[o.x,o.y-10,o.z]}))},x=new l.Quaternion(0,1,0,0),M=d.getState().fov,S=Object(m.a)((function(e,t){return{mutations:{rig:void 0,camera:void 0,controls:void 0,target:void 0,threshold:0,speed:0,targetSpeed:0,warping:!1,stopped:!0},actions:{startWarp:function(){return e((function(e){e.mutations.targetSpeed=100,e.mutations.warping=!0}))},stop:function(){return e((function(e){e.mutations.targetSpeed=0,e.mutations.warping=!1,e.mutations.stopped=!0}))},alignTo:function(t){return e((function(e){e.mutations.targetSpeed=5,e.mutations.target=t,e.mutations.stopped=!1}))},warpTo:function(n){t().actions.alignTo(n),setTimeout((function(){e((function(e){e.mutations.threshold=n.diameter/2/Math.tan(Math.PI*M/360)+110})),t().actions.startWarp()}),3e3)}},init:function(n,a,r){var o=t().mutations,i=t().actions;e((function(e){e.mutations.rig=n,e.mutations.camera=a,e.mutations.controls=r})),o.camera.quaternion.copy(o.rig.quaternion).multiply(x),o.camera.position.copy(o.rig.position),Object(u.c)((function(){var e=o.speed,t=o.targetSpeed,n=(o.warping,o.stopped),a=o.rig,r=o.camera,c=(o.controls,o.target),s=o.threshold;if(n)o.speed+=.05*(0-e);else if(!n){var u=(new l.Quaternion).copy(a.quaternion);a.lookAt(c.position);var f=(new l.Quaternion).copy(a.quaternion);l.Quaternion.slerp(u,f,a.quaternion,.03);var m=a.quaternion.clone().multiply(x);r.quaternion.slerp(m,.1),o.speed+=(t-e)*Math.max(e/2e3,.001),a.position.distanceTo(c.position)-c.diameter<s&&i.stop()}a.translateZ(o.speed/20),r.position.copy(a.position)}))}}})),P=d.getState().fov,R=.5/Math.tan(Math.PI*P/360),C=S.getState().mutations,k=function(){var e=Object(a.useRef)({iTime:{value:0},iResolution:{value:new l.Vector2(1,1)},seed:{value:Math.random()/5},uSpeed:{value:0}}),t=Object(u.i)().aspect,n=Object(u.j)((function(){n.current.scale.setX(t),e.current.iResolution.value=new l.Vector2(t,1)}),[t]);return Object(u.g)((function(t){var n=t.clock;e.current.uSpeed.value=C.speed,e.current.iTime.value=n.getElapsedTime()})),r.a.createElement("mesh",{ref:n,position:[0,0,R]},r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1]}),r.a.createElement("shaderMaterial",{attach:"material",args:[{uniforms:e.current,vertexShader:"varying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"uniform vec3 iResolution;\nuniform float iTime;\nuniform float uSpeed;   // a value from 0 to 100\nuniform float seed;\nvarying vec2 vUv;\n\n// adapted from https://www.shadertoy.com/view/Msl3WH\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\n    float time = iTime * 10.0;\n\n    float s = 0.0;\n    float v = 0.0;\n\n    vec2 uv = (-iResolution.xy + 2.0 * fragCoord) / iResolution.y;\n\n    float t = time * 0.005;\n\n    vec3 col = vec3(0.0);\n\n    vec3 init = vec3(0.25 + seed, 0.25 + sin(time * 0.001) * 0.4, time * 0.005);\n\n    for (float r = 0.; r < uSpeed * 1.2; r++) {\n        vec3 p = init + s * vec3(uv, map(uSpeed, 0., 100., 0.135, 0.005));\n\n        p.z = mod(p.z, 2.0);\n\n        for (int i = 0; i < 10; i++) {\n            p = abs(p * 2.04) / dot(p, p) - 0.75;\n        }\n\n        v += length(p * p) * smoothstep(0.0, 0.5, 1.0 - s) * .002;\n\n        col += vec3( + v * 0.5, 0.1 + v * 0.5, 1.2 - s * 0.5) * v * 0.007;\n        s += .01;\n    }\n    fragColor = vec4(col, col.x+col.y+col.z/6.);\n}\n\nvoid main() {\n    mainImage(gl_FragColor, vUv * iResolution.xy);\n}\n"}],transparent:!0,side:l.DoubleSide}))},T=n(96),L=n(43),I=n(80),A=n(97),_=n(81);Object(u.e)({EffectComposer:T.a,ShaderPass:L.a,RenderPass:I.a,UnrealBloomPass:A.a});var U=function(){var e=Object(a.useRef)(),t=Object(u.i)(),n=t.scene,o=t.gl,i=t.size,c=t.camera,s=Object(a.useMemo)((function(){return new l.Vector2(i.width,i.height)}),[i]);return Object(a.useEffect)((function(){e.current.setSize(i.width,i.height)}),[i]),Object(u.g)((function(){return e.current.render()}),2),r.a.createElement("effectComposer",{ref:e,args:[o]},r.a.createElement("renderPass",{attachArray:"passes",scene:n,camera:c}),r.a.createElement("unrealBloomPass",{attachArray:"passes",args:[s,.4,1,.2]}),r.a.createElement("shaderPass",{attachArray:"passes",args:[_.a],"material-uniforms-resolution-value":[1/i.width,1/i.height]}))},V=n(66),G=n.n(V),W=n(67),B=n.n(W),q=n(68),z=n.n(q),D=n(69),F=n.n(D),Q=n(70),H=n.n(Q),N=n(71),J=n.n(N),X=n(72),Y=n.n(X),Z=n(73),$=n.n(Z),K=n(74),ee=n.n(K),te=n(45),ne=new te.a,ae=function(e,t){return e+Math.random()*(t-e)},re=function(){var e=Object(u.h)(l.TextureLoader,J.a),t=(Object(u.h)(l.TextureLoader,Y.a),Object(u.h)(l.TextureLoader,$.a)),n=(Object(u.h)(l.TextureLoader,ee.a),Object(a.useRef)());return Object(a.useEffect)((function(){ne.addElement(new te.b(e,200,0));for(var a=0;a<10;a++){var r=ae(.05,.4),o=ae(16,48),i=(new l.Color).setHSL(ae(0,1),ae(0,.1),.5);ne.addElement(new te.b(t,o,r,i))}for(var c=0;c<5;c++){var s=ae(-.15,-.05),u=ae(16,48),f=(new l.Color).setHSL(ae(0,1),ae(0,.1),.5);ne.addElement(new te.b(t,u,s,f))}return n.current.add(ne),function(){n.current.remove(ne)}}),[]),r.a.createElement("pointLight",{ref:n,color:"#ffffff",intensity:1})},oe=Object(a.forwardRef)((function(e,t){var n=e.children,o=Object(g.a)(e,["children"]),i=o.diameter,c=o.isStar,s=void 0!==c&&c,f=o.texture,m=o.turnRate,d=Object(a.useRef)();b(d,{rate:m});var p=Object(u.h)(l.TextureLoader,f);return r.a.createElement("group",Object.assign({ref:t},o),s?r.a.createElement(re,null):null,r.a.createElement("mesh",{ref:d,scale:[i,i,i]},r.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1,64,32]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:"#eeeeee",map:p,emissive:s?new l.Color("#ffffff"):void 0,emissiveMap:s?p:void 0,emissiveIntensity:s?1:0,roughness:.5})),n)})),ie=Object(m.a)((function(){return{bodies:[{name:"sun",position:new l.Vector3(-800,200,-2e3),diameter:20,texture:B.a,isStar:!0,turnRate:2e-4},{name:"mars",position:new l.Vector3(250,500,-600),diameter:200,texture:z.a,turnRate:-5e-4},{name:"moon1",position:new l.Vector3(-650,5,-400),diameter:30,texture:F.a,turnRate:8e-4},{name:"moon2",position:new l.Vector3(100,-50,400),diameter:30,texture:H.a,turnRate:.001}]}})),ce=ie.getState().bodies,se=function(){Object(u.h)(l.TextureLoader,J.a);return r.a.createElement(r.a.Fragment,null,ce.map((function(e){return r.a.createElement(oe,Object.assign({},e,{key:e.name}))})))},ue=n(82),le=n.n(ue),fe=function(){var e=Object(u.i)(),t=e.scene,n=e.gl,r=Object(u.h)(l.TextureLoader,le.a);return Object(a.useEffect)((function(){var e=new l.WebGLCubeRenderTarget(r.image.height);e.fromEquirectangularTexture(n,r),t.background=e})),null},me=function(){var e=Object(u.i)(),t=e.camera,n=e.gl,o=d((function(e){return e})).cameraPosition,i=Object(a.useRef)();return Object(a.useEffect)((function(){var e=n.xr.isPresenting?n.xr.getCamera(t):t;return i.current.add(e),function(){i.current.remove(e)}}),[n.xr.isPresenting,n.xr,t,i]),r.a.createElement("group",{ref:i,position:o})},de=n(83),pe=n(85),ge=n(84),ve=function(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(h.a)(o,2),c=i[0],s=i[1],u=Object(a.useState)(!1),l=Object(h.a)(u,2),f=l[0],m=l[1],p=d((function(e){return e.glRenderer})),g=d((function(e){return e.actions.setEnableEffects})),v=Object(a.useCallback)((function(){n.click(),g(!1)}),[n,g]);return Object(a.useEffect)((function(){if(navigator.xr&&p){var e=ge.a.createButton(p);r(e),navigator.xr.isSessionSupported("immersive-vr").then((function(e){s(e?"Enter VR":"VR Unavailable")}))}}),[p]),Object(a.useEffect)((function(){m("VR Unavailable"===c)}),[c]),[v,c,f]},he=Object(m.a)((function(e,t){return{audio:!1,toggleAudio:function(){e({audio:!t().audio})}}}));function be(){var e=Object(de.a)(["\n    position: ",";\n    color: #fff;\n    top: ",";\n    bottom: ",";\n    left: ",";\n    right: ",";\n    width: ",";\n    border: ",";\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.1);\n    padding: ",";\n    text-align: center;\n    opacity: 0.8;\n    outline: none;\n    z-index: 999;\n    transition: opacity 0.3s;\n    &:hover {\n        ","\n    }\n"]);return be=function(){return e},e}var Ee=pe.a.button(be(),(function(e){return e.position||"fixed"}),(function(e){return e.top}),(function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.right}),(function(e){return e.width}),(function(e){return e.border&&"1px solid #fff"}),(function(e){return e.padding||"6px 12px"}),(function(e){return e.disabled?null:"opacity:1"})),je=function(){var e=he((function(e){return e.audio})),t=he((function(e){return e.toggleAudio})),n=ve(),a=Object(h.a)(n,3),o=a[0],i=a[1],c=a[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,{as:"a",top:"10px",left:"10px",border:!0,href:"https://github.com/Mr-Quin/traveler",target:"/"},"Source"),r.a.createElement(Ee,{bottom:"20px",left:"10px",border:!0,onClick:t},"Audio: ",e?"On":"Off"),r.a.createElement(Ee,{bottom:"20px",right:"20px",width:"120px",border:!0,onClick:o,disabled:c},i))},Oe=new Audio(G.a),ye=function(){var e=he((function(e){return e.audio}));return Object(a.useEffect)((function(){Oe.loop=!0}),[]),Object(a.useEffect)((function(){e?Oe.play():Oe.pause()}),[e]),null},we=function(e){return{cameraPosition:e.cameraPosition,effectsEnabled:e.effectsEnabled,prismPosition:e.prismPosition,setGL:e.actions.setGL}},xe=function(){var e=d(we),t=e.cameraPosition,n=e.effectsEnabled,o=e.prismPosition,i=e.setGL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{vr:!0,concurrent:!0,gl:{antialias:!0},camera:{fov:70,position:t,near:.01,far:4e3},onCreated:function(e){var t=e.gl;t.setClearColor("#07060c"),i(t)},style:{position:"fixed",height:"100%",width:"100%",top:0,left:0},shadowMap:!0},r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(v,{count:350}),r.a.createElement(w,null),r.a.createElement(se,null),n?r.a.createElement(fe,null):null,r.a.createElement(k,null),r.a.createElement("ambientLight",{args:["#6368e2",.15]}),r.a.createElement(ye,null)),n?r.a.createElement(U,null):null,n?null:r.a.createElement(me,null),r.a.createElement(f.b,{target:o,minDistance:10,touches:{ONE:l.TOUCH.ROTATE,TWO:l.TOUCH.DOLLY_PAN}})),r.a.createElement(je,null))},Me=ie.getState().bodies,Se=function(e){return e.actions.warpTo},Pe=function(e){return e.init},Re=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),o=Object(u.i)().camera,i=S(Se),c=S(Pe);return Object(a.useEffect)((function(){c(t.current,o,n.current)}),[]),Object(a.useEffect)((function(){setTimeout((function(){i(Me[0]),setInterval((function(){i(Me[4*Math.random()<<0])}),2e4)}),2e3)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("group",{ref:t},r.a.createElement("group",null,e.children)))},Ce=function(e){return{cameraPosition:e.cameraPosition,effectsEnabled:e.effectsEnabled,setGL:e.actions.setGL,fov:e.fov}},ke=function(){var e=d(Ce),t=e.cameraPosition,n=e.effectsEnabled,o=e.setGL,i=e.fov;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{vr:!0,concurrent:!0,gl:{antialias:!0},camera:{fov:i,position:t,near:.01,far:4e4},onCreated:function(e){var t=e.gl;t.setClearColor("#07060c"),o(t)},style:{position:"fixed",height:"100%",width:"100%",top:0,left:0},shadowMap:!0},r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(se,null),n?r.a.createElement(fe,null):null,r.a.createElement(Re,null,r.a.createElement(k,null)),r.a.createElement("ambientLight",{args:["#6368e2",.15]}),r.a.createElement(ye,null)),n?r.a.createElement(U,null):null,n?null:r.a.createElement(me,null)),r.a.createElement(f.a,{innerStyles:null,barStyles:null,containerStyles:null,dataStyles:null}),r.a.createElement(je,null))},Te=function(){return r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/traveler"},r.a.createElement(xe,null)),r.a.createElement(s.a,{exact:!0,path:"/traveler/warp"},r.a.createElement(ke,null))))},Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/traveler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/traveler","/service-worker.js");Le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ie(t,e)}))}}()},66:function(e,t,n){e.exports=n.p+"static/media/ambient.51e1df41.ogg"},67:function(e,t,n){e.exports=n.p+"static/media/2k_sun.f8d91fb7.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/2k_makemake_fictional.37998f7c.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/2k_ceres_fictional.e7dce55f.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/2k_haumea_fictional.11888d39.jpg"},71:function(e,t,n){e.exports=n.p+"static/media/lens_flare.5c8678b3.jpg"},72:function(e,t,n){e.exports=n.p+"static/media/lens_flare_disk.9e9a510a.jpg"},73:function(e,t,n){e.exports=n.p+"static/media/lens_flare_blur.15645033.jpg"},74:function(e,t,n){e.exports=n.p+"static/media/lens_flare_ring.2e90f194.jpg"},82:function(e,t,n){e.exports=n.p+"static/media/8k_stars_milky_way.6e6ebeca.jpg"}},[[101,1,2]]]);
//# sourceMappingURL=main.09f5bc42.chunk.js.map