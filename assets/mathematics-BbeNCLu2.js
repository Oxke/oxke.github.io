import{r as d,R as k,j as p,T as _}from"./index-B4hv2jWY.js";var L=function(){return(L=Object.assign||function(e){for(var o,t=1,i=arguments.length;t<i;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e}).apply(this,arguments)},J,O,S=d.createContext(void 0),A="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",I="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",F=function(a){var o=a.config,t=a.version,t=t===void 0?3:t,i=a.src,i=i===void 0?t===2?A:I:i,r=a.onStartup,E=a.onLoad,l=a.asyncLoad,y=l!==void 0&&l,w=a.onError,l=a.typesettingOptions,g=a.renderMode,g=g===void 0?"post":g,P=a.hideUntilTypeset,a=a.children,n=d.useContext(S);if((n==null?void 0:n.version)!==void 0&&(n==null?void 0:n.version)!==t)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(t===2&&O!==void 0||t===3&&J!==void 0)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var j=d.useRef(n),n=d.useRef((n==null?void 0:n.version)||null);if(n.current===null)n.current=t;else if(n.current!==t)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var u=i||(t===2?A:I);function M(c,v){o&&(window.MathJax=o);var h=document.createElement("script");h.type="text/javascript",h.src=u,h.async=y,h.addEventListener("load",function(){var m=window.MathJax;r&&r(m),c(m),E&&E()}),h.addEventListener("error",function(m){return v(m)}),document.getElementsByTagName("head")[0].appendChild(h)}return j.current===void 0&&(n={typesettingOptions:l,renderMode:g,hideUntilTypeset:P},t===2?J===void 0&&(typeof window<"u"?(J=new Promise(M)).catch(function(c){if(!w)throw Error("Failed to download MathJax version 2 from '".concat(u,"' due to: ").concat(JSON.stringify(c)));w(c)}):(J=Promise.reject()).catch(function(c){})):O===void 0&&(typeof window<"u"?(O=new Promise(M)).catch(function(c){if(!w)throw Error("Failed to download MathJax version 3 from '".concat(u,"' due to: ").concat(c));w(c)}):(O=Promise.reject()).catch(function(c){})),j.current=L(L({},n),t===2?{version:2,promise:J}:{version:3,promise:O})),k.createElement(S.Provider,{value:j.current},a)},x=function(){return(x=Object.assign||function(e){for(var o,t=1,i=arguments.length;t<i;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e}).apply(this,arguments)},U=function(e,o){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},C=function(e){return"Typesetting failed: ".concat(e.message!==void 0?e.message:JSON.stringify(e))},H=function(e){function o(){var b;M==="every"&&h&&c==="post"&&n.current!==null&&(n.current.style.visibility=(b=(b=a.style)==null?void 0:b.visibility)!=null?b:"visible"),m.current||(M==="first"&&n.current!==null&&(n.current.style.visibility="visible"),r&&r(),m.current=!0),E&&E(),T.current=!1}var i=e.inline,t=i!==void 0&&i,i=e.hideUntilTypeset,r=e.onInitTypeset,E=e.onTypeset,y=e.text,w=e.dynamic,l=e.typesettingOptions,g=e.renderMode,P=e.children,a=U(e,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),j=d.useRef(""),n=d.useRef(null),u=d.useContext(S),M=i??(u==null?void 0:u.hideUntilTypeset),c=g??(u==null?void 0:u.renderMode),v=l??(u==null?void 0:u.typesettingOptions),h=w!==!1&&(w||!1),m=d.useRef(!1),T=d.useRef(!1);return!T.current&&n.current!==null&&h&&M==="every"&&c==="post"&&(n.current.style.visibility="hidden"),(typeof window<"u"?d.useLayoutEffect:d.useEffect)(function(){if((h||!m.current)&&n.current!==null){if(!u)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if(c==="pre"){if(!(typeof(b=y)=="string"&&0<b.length))throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(y,'"'));if(!l||!l.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(u.version===2)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}c!=="post"&&y===j.current||T.current||(T.current=!0,u.version===3?u.promise.then(function(s){var R;c==="pre"?(R=function(f){j.current=y,s.startup.document.clear(),s.startup.document.updateDocument(),n.current!==null&&(n.current.innerHTML=f.outerHTML),o()},l.fn.endsWith("Promise")?s.startup.promise.then(function(){return s[v.fn](y,x(x({},(v==null?void 0:v.options)||{}),{display:!t}))}).then(R).catch(function(f){throw o(),Error(C(f))}):s.startup.promise.then(function(){var f=s[v.fn](y,x(x({},(v==null?void 0:v.options)||{}),{display:!t}));R(f)}).catch(function(f){throw o(),Error(C(f))})):s.startup.promise.then(function(){return s.typesetClear([n.current]),s.typesetPromise([n.current])}).then(o).catch(function(f){throw o(),Error(C(f))})}).catch(function(s){throw o(),Error(C(s))}):u.promise.then(function(s){s.Hub.Queue(["Typeset",s.Hub,n.current]),s.Hub.Queue(o)}).catch(function(s){throw o(),Error(C(s))}))}var b}),k.createElement("span",x({},a,{style:x(x({display:t?"inline":"block"},a.style),{visibility:M?"hidden":(e=a.style)==null?void 0:e.visibility}),ref:n}),P)};function D({onClickButtons:e}){return p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["After my first year studying"," ",p.jsx(_,{onClick:e,text:"ai"})," I decided that I wanted to have a deeper understanding of many of the topics we were studying. Seeing many friends in collegio study mathematics motivated me to start math too, as my second degree."]}),p.jsxs("p",{children:["Even though I don't attend in person a lot of courses, I've decided to take notes in LaTeX in real time and upload them on a"," ",p.jsx(_,{href:"https://github.com/oxke/appunti",text:"Github repo"})]})," ",p.jsx("p",{children:p.jsxs(F,{children:["Particularly well curated are the notes of the"," ",p.jsx(_,{href:"https://github.com/Oxke/appunti/tree/main/Analisi4",text:"Analisi 4"})," ","course (integration, Measure Theory,"," ",p.jsx(H,{inline:!0,children:"\\(L^p\\)"})," spaces) which I attended in the first semester of the Academic year 2024-2025,"]})})]})}export{D as default};
