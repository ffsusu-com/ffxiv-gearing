(()=>{var e,t,o={},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,a),i.exports}a.m=o,a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[])),a.u=e=>"lodestone-id.6252eb7e68.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="ffxiv-gearing:",a.l=(o,r,i,n)=>{if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+i){s=p;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var m=(t,r)=>{s.onerror=s.onload=null,clearTimeout(u);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={6:0};a.f.j=(t,o)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise(((o,a)=>r=e[t]=[o,a]));o.push(r[2]=i);var n=a.p+a.u(t),s=new Error;a.l(n,(o=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,r[1](s)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,i,n=o[0],s=o[1],c=o[2],l=0;if(n.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);c&&c(a)}for(t&&t(o);l<n.length;l++)i=n[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0},o=self.webpackChunkffxiv_gearing=self.webpackChunkffxiv_gearing||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(async()=>{const e=new URL(document.currentScript.src.replace(/\?[\d.]*$/,"")+"/../").href;a.p=e;const t={job:null,jobLevel:90,gears:[]},o={6:"PIE",19:"TEN",22:"DHT",27:"CRT",44:"DET",45:"SKS",46:"SPS",10:"GP",11:"CP",70:"CMS",71:"CRL",72:"GTH",73:"PCP"};try{const{characterData:e}=window;if(void 0!==e){const{identifier:o,items:r,materiaData:a}=e.currentSet;t.job=o;for(const e of Object.keys(r)){const o=r[e],i=o.itemID,n=(a[`${e}-${o.itemID}`]||[]).map((e=>{const[t,o]=e.split(":");return[t,Number(o)+1]}));t.gears.push({id:i,materias:n})}}const{filterJobClass:r,equipSelectorList:i,jqsEquipList:n,materiaSelectorList:s,jqsMateriaList:c}=window;if(void 0!==r){const e={mat_hit:"DHT",mat_crit:"CRT",mat_will:"DET",mat_skill_speed:"SKS",mat_spell_speed:"SPS",mat_dodge:"TEN",mat_pie:"PIE",mat_str:"STR",mat_vit:"VIT",mat_dex:"DEX",mat_int:"INT",mat_mnd:"MND",mat_work:"CMS",mat_edit:"CRL",mat_cp:"CP",mat_gain:"GTH",mat_quality:"PCP",mat_gp:"GP"},o=(await a.e(151).then(a.bind(a,6768))).default,l={};for(let e=0;e<o.length;e++)void 0!==o[e]&&(l[o[e]]=e);t.job=r;for(let o=0;o<i.length;o++){const r=i[o],a=n[r].setting.data[n[r].selectedIndex],d=c[s[o]].selectedMateriaData;if(a.data){const o=l[a.data.id];if(void 0!==o){const r=(d||[]).map((t=>[e[t.key],Number(t.level)]));t.gears.push({id:o,materias:r})}}}}if(/\betro\b/i.test(document.title)){let e=document.getElementById("root")._reactRootContainer._internalRoot.current;for(;e.child&&!(e.memoizedProps&&e.memoizedProps.value&&e.memoizedProps.value.store);)e=e.child;const r=e.memoizedProps.value.store.getState(),a={};for(const e of r.materia.materiaSelectOptions)a[e.id]=e;const i={};for(const e of r.food.listResult)i[e.id]=e.item;for(const[e,n]of Object.entries(r.gearsets.gearset)){if(!n)continue;let s,{id:c}=n;if(n.baseItemId){c=n.baseItemId,s={};for(let e=0;e<=6;e++){const t=o[n[`param${e}`]],r=n[`param${e}Value`];void 0!==t&&r>0&&(s[t]=r)}}if(c){"food"===e&&(c=i[c]);let n=c;"fingerL"===e&&(n+="L"),"fingerR"===e&&(n+="R");const l=r.gearsets.gearset.materia[n],d=[];if(l)for(const[e,t]of Object.entries(l)){const r=a[t];r.param in o&&(d[e-1]=[o[r.param],r.tier])}t.gears.push({id:c,materias:d,customStats:s})}}t.job=r.jobs.currentJob.abbrev}const l=document.getElementsByTagName("app-gearset-display")[0];if(void 0!==l){const e=window.webpackChunkclient;let r,a;e.push([[-e.length],{},e=>{r=e}]);for(const t of e){if(2!==t.length)continue;const e=Object.keys(t[1]);if(1===e.length&&(({GearsetModule:a}=r(e[0])),void 0!==a))break}const i=a.prototype.constructor.ɵinj.imports.find((e=>e.providers)).providers[0].useValue[0].component,{copyToClipboard:n}=i.prototype;let s;i.prototype.copyToClipboard=function(){s=this},l.querySelector('.page-title [nztype="snippets"]').parentNode.click(),i.prototype.copyToClipboard=n;const c=e=>new Promise((t=>{e.subscribe((e=>t(e)))})),d=await c(s.gearset$),p=await c(s.lazyData.getEntry("materias")),m={};p.forEach((e=>{m[e.itemId]=e}));for(const e of Object.values(d))if(e){const r=e.itemId;if(r){const a=e.materias.map((e=>{const t=m[e];if(!t)return null;const r=o[t.baseParamId];return r?[r,t.tier]:null}));t.gears.push({id:r,materias:a})}e.ID&&t.gears.push({id:e.ID,materias:[]})}const u=await c(s.lazyData.getEntry("jobAbbr"));t.job=u[d.job].en}}catch(e){}if(null!==t.job){const o=e+"?import-"+encodeURIComponent(JSON.stringify(t));console.log(o),null===window.open(o)&&prompt("打开此链接进行导入：",o)}else alert("未能在此页面中找到支持导入的数据。")})()})();