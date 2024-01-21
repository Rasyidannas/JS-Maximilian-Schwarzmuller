(()=>{"use strict";var t,e,r={},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,o),i.exports}o.m=r,o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,r)=>(o.f[r](t,e),e)),[])),o.u=t=>t+".app.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="js-maximilian-schwarzmuller:",o.l=(r,n,i,s)=>{if(t[r])t[r].push(n);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+i){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[n];var u=(e,n)=>{a.onerror=a.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((t=>t(n))),e)return e(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={179:0};o.f.j=(e,r)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=i);var s=o.p+o.u(e),a=new Error;o.l(s,(r=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,n[1](a)}}),"chunk-"+e,e)}};var e=(e,r)=>{var n,i,[s,a,c]=r,l=0;if(s.some((e=>0!==t[e]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);c&&c(o)}for(e&&e(r);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0},r=self.webpackChunkjs_maximilian_schwarzmuller=self.webpackChunkjs_maximilian_schwarzmuller||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();class i{static clearEventListeners(t){const e=t.cloneNode(!0);return t.replaceWith(e),e}static moveElement(t,e){const r=document.getElementById(t);document.querySelector(e).append(r),r.scrollIntoView({behavior:"smooth"})}}class s{hasActiveTooltip=!1;constructor(t,e,r){this.id=t,this.updateProjectListsHandler=e,this.connectMoreInfoButton(),this.connectSwitchButton(r),this.connectDrag()}showMoreInfoHandler(){if(this.hasActiveTooltip)return;const t=document.getElementById(this.id).dataset.extraInfo;o.e(331).then(o.bind(o,331)).then((e=>{new e.Tooltip((()=>{this.hasActiveTooltip=!1}),t,this.id).attach(),this.hasActiveTooltip=!0}))}connectDrag(){const t=document.getElementById(this.id);t.addEventListener("dragstart",(t=>{t.dataTransfer.setData("text/plain",this.id),t.dataTransfer.effectAllowed="move"})),t.addEventListener("dragend",(t=>{console.log(t)}))}connectMoreInfoButton(){document.getElementById(this.id).querySelector("button:first-of-type").addEventListener("click",this.showMoreInfoHandler.bind(this))}connectSwitchButton(t){let e=document.getElementById(this.id).querySelector("button:last-of-type");e=i.clearEventListeners(e),e.textContent="active"===t?"Finish":"Activate",e.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id))}update(t,e){this.updateProjectListsHandler=t,this.connectSwitchButton(e)}}class a{projects=[];constructor(t){this.type=t;const e=document.querySelectorAll(`#${t}-projects li`);for(const t of e)this.projects.push(new s(t.id,this.switchProject.bind(this),this.type));console.log(this.projects),this.connectDroppable()}connectDroppable(){console.log(globalThis),console.log(globalThis.DEFAULT_VALUE);const t=document.querySelector(`#${this.type}-projects ul`);t.addEventListener("dragenter",(e=>{"text/plain"===e.dataTransfer.types[0]&&(t.parentElement.classList.add("droppable"),e.preventDefault())})),t.addEventListener("dragover",(t=>{"text/plain"===t.dataTransfer.types[0]&&t.preventDefault()})),t.addEventListener("dragleave",(e=>{e.relatedTarget.closest(`#${this.type}-projects ul`)!==t&&t.parentElement.classList.remove("droppable")})),t.addEventListener("drop",(e=>{const r=e.dataTransfer.getData("text/plain");this.projects.find((t=>t.id===r))||(document.getElementById(r).querySelector("button:last-of-type").click(),t.parentElement.classList.remove("droppable"))}))}setSwitchHandlerFunction(t){this.switchHandler=t}addProject(t){this.projects.push(t),function(t,e){const r=document.getElementById(t);document.querySelector(e).append(r),r.scrollIntoView({behavior:"smooth"})}(t.id,`#${this.type}-projects ul`),t.update(this.switchProject.bind(this),this.type)}switchProject(t){this.switchHandler(this.projects.find((e=>e.id===t))),this.projects=this.projects.filter((e=>e.id!==t))}}globalThis.DEFAULT_VALUE="RASYID",class{static init(){const t=new a("active"),e=new a("finished");t.setSwitchHandlerFunction(e.addProject.bind(e)),e.setSwitchHandlerFunction(t.addProject.bind(t))}static startAnalytics(){const t=document.createElement("script");t.src="assets/scripts/analytics.js",t.defer=!0,document.head.append(t)}}.init()})();