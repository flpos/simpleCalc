(this["webpackJsonpts-react"]=this["webpackJsonpts-react"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(6),i=n.n(c),o=(n(13),{margin:"10px",textAlign:"right",fontSize:"3em",backgroundColor:"#333",color:"#ddd",padding:"10px",borderRadius:"5px"}),u=function(t){return a.a.createElement("div",{style:o,"data-testid":"visor",id:"visor"},t.value||"0")},l={height:"60px",margin:"10px"},s=function(t){return a.a.createElement("button",{style:l,onClick:t.cb},t.text)},d=n(4),f=n(7),m=n(3),g=function(t){return/[0-9]/.test(t)},p=function(){var t=Object(r.useState)([]),e=Object(f.a)(t,2),n=e[0],a=e[1];return{viewDigits:function(){return n.join(" ")},addDigit:Object(r.useCallback)((function(t){var e=n.slice(-1).join();switch(t){case"c":return a([]);case"=":return a(function(t){if(0===t.length)return["0"];if(t.length<=2)return t;var e=g(t[0])?["+"].concat(Object(m.a)(t)):t,n=(e=e.length%2===0?e:e.slice(-1)).filter((function(t){return!g(t)}));return[(e=e.filter((function(t){return g(t)}))).map((function(t,e){return"+"===n[e]?Number(t):Number(-t)})).reduce((function(t,e){return t+e}),0).toString()]}(n));default:!function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map((function(t){return g(t)})).reduce((function(t,e){return t&&e}))}(e,t)?a(Object(d.a)(Array,Object(m.a)(n).concat([t]))):a(Object(d.a)(Array,Object(m.a)(n.slice(0,-1)).concat(["".concat(e).concat(t)])))}}),[n])}},h={margin:"20px auto",width:"600px"},b={display:"grid",gridTemplateColumns:"auto auto auto auto"},v=function(){var t="789+456-123c0=".split(""),e=p(),n=e.addDigit,r=e.viewDigits;return a.a.createElement("main",{style:h},a.a.createElement(u,{value:r()}),a.a.createElement("div",{style:b},t.map((function(t){return a.a.createElement(s,{key:"digit".concat(t),text:t,cb:function(){n(t)}})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d1c7faf4.chunk.js.map