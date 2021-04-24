(this["webpackJsonpshowcase-sort-react"]=this["webpackJsonpshowcase-sort-react"]||[]).push([[0],{29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),s=(n(29),n(6)),o=n(36),j=n(37),u=n(22),l=n(39),b=n(41),d=n(38),h=n(8),O=(n(21),n(1));var p=function(e){var t,n=e.array,a=e.a,r=e.b,c=e.done,i=e.end,s=void 0!==i&&i,l=e.heading,b=n.map((function(e,t){var n=t===a?{border:"medium solid #0f0"}:{backgroundColor:"#ddd"},c=t===r?{outline:"medium solid #f00"}:{backgroundColor:"#ddd"};return Object(O.jsx)("span",{style:Object(h.a)(Object(h.a)({margin:"0.5em",padding:"1em",display:"inline-block"},n),c),children:e},t)}));return Object(O.jsxs)(o.a,{fluid:!0,children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:l})})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(O.Fragment,{children:b})})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:(null===e||void 0===e||null===(t=e.debug)||void 0===t?void 0:t.shouldDebug)?JSON.stringify(e.debug.state,null,4):null})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:c&&!s?Object(O.jsx)("span",{style:{margin:"0.5em",padding:"1em",backgroundColor:"green",display:"inline-block"},children:"Done!"}):""})})]})},x=n(40);var g=function(e){return Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{className:"col-md-3",children:Object(O.jsxs)(x.a,{children:[Object(O.jsxs)(x.a.Group,{controlId:"formInputSizeRange",children:[Object(O.jsx)(x.a.Label,{children:"Range (5-25)"}),Object(O.jsx)(x.a.Control,{type:"range",value:e.inputSize,min:5,max:25,onChange:function(t){return e.updateRange(parseInt(t.target.value))}})]}),Object(O.jsxs)(x.a.Group,{controlId:"formVisualisationSpeedRange",children:[Object(O.jsx)(x.a.Label,{children:"Visualisation speed (100-2500) lower is faster"}),Object(O.jsx)(x.a.Control,{type:"range",value:e.visualisationSpeed,min:100,max:2500,step:250,onChange:function(t){return e.updateVisualisationSpeed(parseInt(t.target.value))}})]}),Object(O.jsxs)(x.a.Group,{controlId:"formDebugCheckbox",children:[Object(O.jsx)(x.a.Label,{children:"Debugging (check to see state)"}),Object(O.jsx)(x.a.Check,{type:"checkbox",label:"Debug",onChange:function(){return e.setDebug(!e.debug)}})]})]})})})};function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Array(e).fill(0).map((function(e){return Math.floor(100*Math.random())}));return{original:t,array:t.map((function(e){return e})),i:0,j:1,compareI:0,compareJ:1,comparisons:0,swaps:0,done:!1,size:e}}var f=function(){var e=Object(a.useState)(5),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(m(n)),i=Object(s.a)(c,2),o=i[0],l=i[1],b=Object(a.useState)(500),x=Object(s.a)(b,2),f=x[0],v=x[1],S=Object(a.useState)(!1),y=Object(s.a)(S,2),k=y[0],I=y[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){o.done?clearTimeout(e):l(function(e){var t=e.array,n=e.i,a=e.j,r=e.compareI,c=e.compareJ,i=e.comparisons,s=e.swaps,o=e.original,j=e.size;c>j-1&&(r=0,c=1,n++);var u=t[r],l=t[c];u>l&&(s++,t[r]=l,t[c]=u),i++,r++,c++;var b=function(e){return e.reduce((function(t,n,a){return t&&n<(e[a+1]||1/0)}),!0)}(t)||n>j;return b&&(r=-1,c=-1),Object(h.a)(Object(h.a)({},e),{},{array:t,i:n,j:a,compareI:r,compareJ:c,comparisons:i,swaps:s,done:b,original:o})}(o))}),500);return function(){return clearTimeout(e)}})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Bubble sort"}),Object(O.jsx)("p",{children:"Use the range slider to increase/decrease the number of numbers in bubble sort visualisation."}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"https://en.wikipedia.org/wiki/Bubble_sort",children:"Learn more about bubble sort"})})]}),Object(O.jsx)(g,{inputSize:n,updateRange:function(e){r(e),l(m(e))},debug:k,setDebug:I,visualisationSpeed:f,updateVisualisationSpeed:function(e){v(e),l(m(n))}}),Object(O.jsx)(j.a,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(p,{array:o.original,a:-1,b:-1,done:o.done,heading:"Initial state of the array",end:!0}),Object(O.jsx)("hr",{})]})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(p,{array:o.array,a:o.compareI-1,b:o.compareJ-1,done:o.done,heading:"Working"})})})]})};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Array(e).fill(0).map((function(e){return Math.floor(100*Math.random())}));return{original:t,array:t.map((function(e){return e})),i:0,j:1,compareI:0,compareJ:1,comparisons:0,swaps:0,done:!1,size:e}}var S=function(){var e=Object(a.useState)(5),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(v(n)),i=Object(s.a)(c,2),o=i[0],l=i[1],b=Object(a.useState)(500),x=Object(s.a)(b,2),m=x[0],f=x[1],S=Object(a.useState)(!1),y=Object(s.a)(S,2),k=y[0],I=y[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){o.done?clearTimeout(e):l(function(e){var t=e.array,n=e.i,a=e.j,r=e.compareI,c=e.compareJ,i=e.comparisons,s=e.swaps,o=e.original,j=e.size;if(c>j-1){var u=t[n];t[n]=t[r],t[r]=u,s++,r=++n,c=n+1}t[r]>t[c]&&(r=c),c++,i++;var l=function(e){return e.reduce((function(t,n,a){return t&&n<(e[a+1]||1/0)}),!0)}(t)||n>j;return l&&(r=-1,c=-1),Object(h.a)(Object(h.a)({},e),{},{array:t,i:n,j:a,compareI:r,compareJ:c,comparisons:i,swaps:s,done:l,original:o})}(o))}),m);return function(){return clearTimeout(e)}})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Selection sort"}),Object(O.jsx)("p",{children:"Use the range slider to increase/decrease the number of numbers in selection sort visualisation."}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"https://en.wikipedia.org/wiki/Selection_sort",children:"Learn more about selection sort"})})]}),Object(O.jsx)(g,{inputSize:n,updateRange:function(e){r(e),l(v(e))},debug:k,setDebug:I,visualisationSpeed:m,updateVisualisationSpeed:function(e){f(e),l(v(n))}}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)("hr",{})})}),Object(O.jsx)(j.a,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(p,{array:o.original,a:-1,b:-1,done:o.done,heading:"Initial state of the array",end:!0}),Object(O.jsx)("hr",{})]})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(p,{array:o.array,a:o.compareI,b:o.compareJ-1,done:o.done,heading:"Working",debug:{shouldDebug:k,state:o}})})})]})};var y=function(){var e=Object(a.useState)(Object(O.jsx)(k,{})),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)(o.a,{fluid:!0,className:"App",children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(l.a,{bg:"danger",variant:"dark",children:[Object(O.jsx)(l.a.Brand,{href:"/",children:"Sorting visualisations"}),Object(O.jsxs)(b.a,{className:"mr-auto",children:[Object(O.jsx)(b.a.Link,{onClick:function(){return r(Object(O.jsx)(f,{}))},children:"Bubble"}),Object(O.jsx)(b.a.Link,{onClick:function(){return r(Object(O.jsx)(S,{}))},children:"Selection"})]})]})})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{children:n})})]})};function k(){return Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Hello to sorting visualisations"}),Object(O.jsx)("p",{children:"Click on the links to go see the visualisation."})]})}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),I()}},[[34,1,2]]]);
//# sourceMappingURL=main.9e72f0cb.chunk.js.map