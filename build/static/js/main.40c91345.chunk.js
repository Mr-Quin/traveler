(this.webpackJsonptraveler=this.webpackJsonptraveler||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(28),i=n.n(o),c=(n(90),n(7)),s=n(46),l=n(39),u=n(0),f=Object(l.a)((function(e,t){return{prismColorPrimary:new u.Color("#355cd6"),prismColorSecondary:new u.Color("#6cbca0"),prismPosition:new u.Vector3(0,8,0),cameraPosition:new u.Vector3(0,1.6,20),prismScale:new u.Vector3(1,1.8,1),ringColor:new u.Color("#d7ee9b"),groundColor:new u.Color("#555555"),marsPosition:new u.Vector3(250,500,-600),moon1Position:new u.Vector3(-650,5,-400),moon2Position:new u.Vector3(100,-50,400),glRenderer:null,isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),effectsEnabled:!0,quality:window.devicePixelRatio,actions:{setGL:function(t){e({glRenderer:t})},setEnableEffects:function(t){e({effectsEnabled:t})},setQuality:function(t){e({quality:t*window.devicePixelRatio})}}}})),m=n(80),d=function(e){var t=e.count,n=void 0===t?1500:t,o=(Object(m.a)(e,["count"]),Object(r.useRef)()),i=f((function(e){return e.prismColorSecondary})),s=Object(r.useMemo)((function(){return new u.Object3D}),[]),l=Object(r.useMemo)((function(){return new Array(n).fill(null).map((function(){return{d:10*Math.random(),offset:new u.Vector3(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(5*Math.random()),speed:Math.random()/200+.01,scale:Math.min(.1,Math.random()/40)}}))}),[n]);return Object(c.g)((function(){l.forEach((function(e,t){var n=e.offset,r=e.scale,a=e.speed,i=e.d+=a/2,c=Math.cos(i)+Math.sin(i)/100,l=Math.sin(i)+Math.cos(2*i)/100,u=Math.cos(i);s.position.set(n.x+c/10,n.y+l/10,n.z+c/10),s.scale.set(r,r,r),s.rotation.set(u,2*u,3*u),s.updateMatrix(),o.current.setMatrixAt(t,s.matrix)})),o.current.instanceMatrix.needsUpdate=!0})),a.a.createElement("instancedMesh",{ref:o,args:[null,null,l.length],position:[0,8,0],frustumCulled:!1},a.a.createElement("icosahedronBufferGeometry",{attach:"geometry",args:[1]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"#ffffff",emissive:i}))},h=n(9),p=function(e,t){var n=t.axis,r=void 0===n?"y":n,a=t.rate,o=void 0===a?.01:a;return Object(c.g)((function(){e.current.rotation[r]+=o})),e},g=function(e,t){var n=t.axis,r=void 0===n?"y":n,a=t.factor,o=void 0===a?1:a,i=t.defaultValue,s=void 0===i?0:i,l=t.fn,u=void 0===l?"sin":l;return Object(c.g)((function(t){var n=t.clock.getElapsedTime();e.current.position[r]=s+Math[u](n)*o})),e},b=Object(r.forwardRef)((function(e,t){var n=e.count,o=void 0===n?10:n,i=e.height,s=void 0===i?20:i,l=e.rotationOffset,m=void 0===l?10:l,d=f((function(e){return e.ringColor})),h=Object(r.useRef)(),p=Object(r.useMemo)((function(){return new u.Object3D}),[]),g=Object(r.useMemo)((function(){return new Array(o).fill(null).map((function(e,t){return{z:t/o,r:u.MathUtils.degToRad(t*m)}}))}),[o,m]);return Object(c.g)((function(){g.forEach((function(e,t,n){var r=e.z;r>=1&&(e.z=0,t<g.length-1?e.r=n[t+1].r+u.MathUtils.degToRad(m):e.r=n[0].r+u.MathUtils.degToRad(m));var a=e.z+=.001,o=e.r+=.001,i=8*Math.sin(Math.PI*r);p.position.set(0,u.MathUtils.lerp(0,s,a),0),p.rotation.set(Math.PI/2,0,o),p.scale.set(i,i,i),p.updateMatrix(),h.current.setMatrixAt(t,p.matrix)})),h.current.instanceMatrix.needsUpdate=!0})),a.a.createElement("group",Object.assign({ref:t},e),a.a.createElement("instancedMesh",{ref:h,args:[null,null,g.length]},a.a.createElement("torusBufferGeometry",{attach:"geometry",args:[1,.002,5,3]}),a.a.createElement("meshStandardMaterial",{attach:"material",roughness:.1,color:d,emissive:d,emissiveIntensity:.5,opacity:.5,transparent:!0,side:u.DoubleSide})))})),v=n(52),E=function(e){Object.assign({},e);var t=f((function(e){return e})),n=t.prismColorPrimary,o=t.prismColorSecondary,i=t.prismPosition,s=t.prismScale,l=Object(r.useRef)(),m=Object(r.useRef)(),d=Object(r.useRef)(),E=Object(r.useRef)(),O=Object(r.useMemo)((function(){return new u.SphereBufferGeometry(3.5,4,2)}),[]),j=Object(r.useMemo)((function(){return new u.BoxBufferGeometry(1,1,1).toNonIndexed()}),[]),y=Object(v.b)((function(){return{rotation:[Math.random()*Math.PI*4,Math.random()*Math.PI*4,Math.random()*Math.PI*4],scale:[1.4,1.4,1.4],from:{rotation:[0,0,0],scale:[1.4,1.4,1.4]},config:{mass:30,tension:10,friction:6}}})),M=Object(h.a)(y,2),w=M[0],x=M[1];return Object(r.useEffect)((function(){var e=setInterval((function(){x({rotation:[Math.random()*Math.PI*4,Math.random()*Math.PI*4,Math.random()*Math.PI*4]})}),3e3);return function(){clearInterval(e)}}),[x]),g(l,{defaultValue:i.y,factor:.5}),p(l,{rate:.005}),Object(c.g)((function(e){var t=e.clock.getElapsedTime();m.current.material.emissiveIntensity=Math.sin(t*Math.PI*.5)/2+1.5,d.current.intensity=m.current.material.emissiveIntensity,d.current.position.y=l.current.position.y,E.current.intensity=m.current.material.emissiveIntensity,E.current.position.y=-l.current.position.y})),a.a.createElement("group",null,a.a.createElement("group",{ref:l,position:i},a.a.createElement("pointLight",{ref:d,distance:20,color:n}),a.a.createElement("pointLight",{ref:E,distance:20,color:n}),a.a.createElement(v.a.mesh,Object.assign({ref:m,geometry:j},w),a.a.createElement("meshStandardMaterial",{attach:"material",color:o,emissive:n,side:u.DoubleSide})),a.a.createElement("mesh",{scale:s,geometry:O},a.a.createElement("meshStandardMaterial",{attach:"material",color:o,emissive:n,wireframe:!0})),a.a.createElement("mesh",{scale:s,geometry:O},a.a.createElement("meshPhysicalMaterial",{attach:"material",color:o,opacity:.4,transparent:!0}))),a.a.createElement(b,{position:[i.x,i.y-10,i.z]}))},O=n(81),j=n(36),y=n(63),M=n(82),w=n(64);Object(c.e)({EffectComposer:O.a,ShaderPass:j.a,RenderPass:y.a,UnrealBloomPass:M.a});var x=function(e){Object.assign({},e);var t=Object(r.useRef)(),n=Object(c.i)(),o=n.scene,i=n.gl,s=n.size,l=n.camera,f=Object(r.useMemo)((function(){return new u.Vector2(s.width,s.height)}),[s]);return Object(r.useEffect)((function(){t.current.setSize(s.width,s.height)}),[s]),Object(c.g)((function(){return t.current.render()}),2),a.a.createElement("effectComposer",{ref:t,args:[i]},a.a.createElement("renderPass",{attachArray:"passes",scene:o,camera:l}),a.a.createElement("unrealBloomPass",{attachArray:"passes",args:[f,2,1,.2]}),a.a.createElement("shaderPass",{attachArray:"passes",args:[w.a],"material-uniforms-resolution-value":[1/s.width,1/s.height]}))},P=n(65),R=n.n(P),S=n(66),k=n.n(S),C=n(67),T=n.n(C),A=n(68),I=n.n(A),L=function(e,t,n){var r=n.axis,a=void 0===r?new u.Vector3(0,1,0):r,o=n.rate,i=void 0===o?.01:o;return Object(c.g)((function(){e.current.position.sub(t.current.position),e.current.position.applyAxisAngle(a,i),e.current.position.add(t.current.position)})),e},U=function(e){Object.assign({},e);var t=Object(r.useRef)(),n=Object(r.useRef)(),o=Object(r.useRef)(),i=Object(r.useRef)(),s=f((function(e){return e})),l=s.marsPosition,m=s.moon1Position,d=s.moon2Position,g=Object(r.useState)(),b=Object(h.a)(g,2),v=b[0],E=b[1],O=Object(c.h)(u.TextureLoader,R.a),j=Object(c.h)(u.TextureLoader,k.a),y=Object(c.h)(u.TextureLoader,I.a),M=Object(c.h)(u.TextureLoader,T.a);return Object(r.useEffect)((function(){v&&(i.current.target=v)}),[v]),p(t,{rate:-2e-4}),p(n,{rate:-6e-4}),p(o,{rate:5e-4}),L(n,t,{axis:new u.Vector3(-.55,1,0).normalize(),rate:4e-5}),L(o,t,{axis:new u.Vector3(3.667,1,0).normalize(),rate:2e-5}),a.a.createElement(a.a.Fragment,null,a.a.createElement("group",{ref:t,position:l,rotation:[u.MathUtils.degToRad(30),0,u.MathUtils.degToRad(5)]},a.a.createElement("mesh",{scale:[200,200,200],onUpdate:function(e){return E(e)}},a.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1,64,32]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"#eeeeee",map:j}))),a.a.createElement("group",{ref:n,position:m},a.a.createElement("mesh",{scale:[30,30,30]},a.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1,64,32]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"#eeeeee",map:y}))),a.a.createElement("group",{ref:o,position:d},a.a.createElement("mesh",{scale:[30,30,30]},a.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1,64,32]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"#888888",map:M}))),a.a.createElement("group",{position:[-800,200,-2e3]},a.a.createElement("pointLight",{ref:i,color:"#ffe3bf",intensity:1}),a.a.createElement("mesh",{scale:[20,20,20]},a.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1,64,32]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"#ffffff",emissiveMap:O,emissive:new u.Color("#ffffff"),emissiveIntensity:1.5}))))},V=n(43),B=n(44);function z(){var e=Object(V.a)(["\n    color: white;\n    background: rgba(0, 0, 0, 0.1);\n    padding: 6px 12px;\n    border-radius: 5px;\n    border: 1px solid white;\n    opacity: 0.8;\n"]);return z=function(){return e},e}var G=B.a.div(z()),_=function(){var e=f((function(e){return e.prismPosition}));return a.a.createElement("group",null,a.a.createElement("mesh",{position:e},a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[0,0,0]}),a.a.createElement(s.a,{center:!0},a.a.createElement(G,null,"Loading..."))))},W=n(78),D=n.n(W),N=function(){var e=Object(c.i)(),t=e.scene,n=e.gl,a=Object(c.h)(u.TextureLoader,D.a);return Object(r.useEffect)((function(){var e=new u.WebGLCubeRenderTarget(a.image.height);e.fromEquirectangularTexture(n,a),t.background=e})),null},q=function(){var e=Object(c.i)(),t=e.camera,n=e.gl,o=f((function(e){return e})).cameraPosition,i=Object(r.useRef)();return Object(r.useEffect)((function(){var e=n.xr.isPresenting?n.xr.getCamera(t):t;return i.current.add(e),function(){i.current.remove(e)}}),[n.xr.isPresenting,n.xr,t,i]),a.a.createElement("group",{ref:i,position:o})},F=n(79),H=function(){var e=Object(r.useState)(),t=Object(h.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),i=Object(h.a)(o,2),c=i[0],s=i[1],l=Object(r.useState)(!1),u=Object(h.a)(l,2),m=u[0],d=u[1],p=f((function(e){return e.glRenderer})),g=f((function(e){return e.actions.setEnableEffects})),b=Object(r.useCallback)((function(){n.click(),g(!1)}),[n]);return Object(r.useEffect)((function(){if(navigator.xr&&p){var e=F.a.createButton(p);a(e),navigator.xr.isSessionSupported("immersive-vr").then((function(e){s(e?"Enter VR":"VR Unavailable")}))}}),[p]),Object(r.useEffect)((function(){d("VR Unavailable"===c)}),[c]),[b,c,m]};function J(){var e=Object(V.a)(["\n    position: ",";\n    color: #fff;\n    top: ",";\n    bottom: ",";\n    left: ",";\n    right: ",";\n    width: ",";\n    border: ",";\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.1);\n    padding: ",";\n    text-align: center;\n    opacity: 0.8;\n    outline: none;\n    z-index: 999;\n    transition: opacity 0.3s;\n    &:hover {\n        ","\n    }\n"]);return J=function(){return e},e}var Q=B.a.button(J(),(function(e){return e.position||"fixed"}),(function(e){return e.top}),(function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.right}),(function(e){return e.width}),(function(e){return e.border&&"1px solid #fff"}),(function(e){return e.padding||"6px 12px"}),(function(e){return e.disabled?null:"opacity:1"})),Y=function(){var e=H(),t=Object(h.a)(e,3),n=t[0],r=t[1],o=t[2];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,{as:"a",top:"10px",left:"10px",border:!0,href:"https://github.com/Mr-Quin/traveler",target:"/"},"Source"),a.a.createElement(Q,{bottom:"20px",right:"20px",width:"120px",border:!0,onClick:n,disabled:o},r))},$=function(){var e=f((function(e){return e})),t=(e.isMobile,e.cameraPosition),n=e.effectsEnabled,o=e.prismPosition,i=e.actions.setGL;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{vr:!0,concurrent:!0,gl:{antialias:!0},camera:{fov:70,position:t,near:.01,far:4e3},onCreated:function(e){var t=e.gl;t.setClearColor("#07060c"),i(t)},style:{position:"fixed",height:"100%",width:"100%",top:0,left:0},shadowMap:!0},a.a.createElement(r.Suspense,{fallback:a.a.createElement(_,null)},a.a.createElement(d,{count:350}),a.a.createElement(E,null),a.a.createElement(U,null),n?a.a.createElement(N,null):null,a.a.createElement("ambientLight",{args:["#6368e2",.15]})),n?a.a.createElement(x,null):null,n?null:a.a.createElement(q,null),a.a.createElement(s.b,{target:o,minDistance:10,maxDistance:125,touches:{ONE:u.TOUCH.ROTATE,TWO:u.TOUCH.DOLLY_PAN}})),a.a.createElement(Y,null))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/traveler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/traveler","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},65:function(e,t,n){e.exports=n.p+"static/media/2k_sun.f8d91fb7.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/2k_makemake_fictional.37998f7c.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/2k_haumea_fictional.11888d39.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/2k_ceres_fictional.e7dce55f.jpg"},78:function(e,t,n){e.exports=n.p+"static/media/8k_stars_milky_way.6e6ebeca.jpg"},86:function(e,t,n){e.exports=n(105)},90:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.40c91345.chunk.js.map