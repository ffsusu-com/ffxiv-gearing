(()=>{var e,t,r={},o={};function a(e){if(o[e])return o[e].exports;var t=o[e]={exports:{}};return r[e](t,t.exports,a),t.exports}a.m=r,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"lodestone-id.d31e11aa56.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="ffxiv-gearing:",a.l=(r,o,i,n)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==t+i){s=m;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var u=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(o))),t)return t(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={6:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((r,a)=>{o=e[t]=[r,a]}));r.push(o[2]=i);var n=a.p+a.u(t),s=new Error;a.l(n,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{for(var o,i,n=r[0],s=r[1],l=r[2],c=0,d=[];c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(o in s)a.o(s,o)&&(a.m[o]=s[o]);for(l&&l(a),t&&t(r);d.length;)d.shift()()},r=self.webpackChunkffxiv_gearing=self.webpackChunkffxiv_gearing||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(async()=>{const e=new URL(document.currentScript.src.replace(/\?[\d.]*$/,"")+"/../").href;a.p=e;const t={job:null,jobLevel:80,gears:[]},r={6:"PIE",19:"TEN",22:"DHT",27:"CRT",44:"DET",45:"SKS",46:"SPS",10:"GP",11:"CP",70:"CMS",71:"CRL",72:"GTH",73:"PCP"};try{const{characterData:e}=window;if(void 0!==e){const{identifier:r,items:o,materiaData:a}=e.currentSet;t.job=r;for(const e of Object.keys(o)){const r=o[e],i=r.itemID,n=(a[`${e}-${r.itemID}`]||[]).map((e=>{const[t,r]=e.split(":");return[t,Number(r)+1]}));t.gears.push({id:i,materias:n})}}const{filterJobClass:o,equipSelectorList:i,jqsEquipList:n,materiaSelectorList:s,jqsMateriaList:l}=window;if(void 0!==o){const e={mat_hit:"DHT",mat_crit:"CRT",mat_will:"DET",mat_skill_speed:"SKS",mat_spell_speed:"SPS",mat_dodge:"TEN",mat_pie:"PIE",mat_str:"STR",mat_vit:"VIT",mat_dex:"DEX",mat_int:"INT",mat_mnd:"MND",mat_work:"CMS",mat_edit:"CRL",mat_cp:"CP",mat_gain:"GTH",mat_quality:"PCP",mat_gp:"GP"},r=(await a.e(151).then(a.bind(a,6768))).default,c={};for(let e=0;e<r.length;e++)void 0!==r[e]&&(c[r[e]]=e);t.job=o;for(let r=0;r<i.length;r++){const o=i[r],a=n[o].setting.data[n[o].selectedIndex],d=l[s[r]].selectedMateriaData;if(a.data){const r=c[a.data.id];if(void 0!==r){const o=(d||[]).map((t=>[e[t.key],Number(t.level)]));t.gears.push({id:r,materias:o})}}}}if(/\betro\b/i.test(document.title)){let e=document.getElementById("root")._reactRootContainer._internalRoot.current;for(;e.child&&!(e.memoizedProps&&e.memoizedProps.value&&e.memoizedProps.value.store);)e=e.child;const o=e.memoizedProps.value.store.getState(),a={};for(const e of o.materia.materiaSelectOptions)a[e.id]=e;const i={};for(const e of o.food.listResult)i[e.id]=e.item;for(const[e,n]of Object.entries(o.gearsets.gearset)){let{id:s}=n||{};if(s){"food"===e&&(s=i[s]);let n=s;"fingerL"===e&&(n+="L"),"fingerR"===e&&(n+="R");const l=o.gearsets.gearset.materia[n],c=[];if(l)for(const[e,t]of Object.entries(l)){const o=a[t];o.param in r&&(c[e-1]=[r[o.param],o.tier])}t.gears.push({id:s,materias:c})}}t.job=o.jobs.currentJob.abbrev}const c=document.getElementsByTagName("app-gearset-display")[0];if(void 0!==c){const e=c.__ngContext__[c.__ngContext__.length-1],o=await new Promise((t=>{e.gearset$.subscribe((e=>t(e)))})),a={};e.lazyData.data.materias.forEach((e=>{a[e.itemId]=e}));for(const e of Object.values(o))if(e){const o=e.itemId;if(o){const i=e.materias.map((e=>{const t=a[e];if(!t)return null;const o=r[t.baseParamId];return o?[o,t.tier]:null}));t.gears.push({id:o,materias:i})}e.ID&&t.gears.push({id:e.ID,materias:[]})}t.job=e.lazyData.data.jobAbbr[o.job].en}}catch(e){}if(null!==t.job){const r=e+"?import-"+encodeURIComponent(JSON.stringify(t));console.log(r),null===window.open(r)&&prompt("Open this url to import.",r)}else alert("No compatible data found on this site.")})()})();