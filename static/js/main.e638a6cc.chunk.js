(this["webpackJsonphayanmind-infinite-scroll"]=this["webpackJsonphayanmind-infinite-scroll"]||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var i,c,r,a,o=n(0),d=n.n(o),s=n(28),b=n.n(s),l=n(4),j=n(5),u=Object(j.a)(i||(i=Object(l.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video, button {\n    border: 0;\n    font-size: inherit;\n    vertical-align: baseline;\n    word-break: keep-all;\n    -webkit-font-smoothing: antialiased;\n  }\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding: 33px 0;\n\t}\n"]))),m=n(6),h=n.n(m),x=n(15),p=n(7),f=n(16),O=n.n(f),g=n(3),v=n.n(g),w=n(1),y=j.b.div(c||(c=Object(l.a)(["\n  width: 500px;\n  background: #f8f9fa;\n  border: 0.5px solid #ced4da;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 20px;\n  font-size: 18px;\n  margin-bottom: 14px;\n\n  & > div:nth-child(2) {\n    margin: 12px 0;\n  }\n"]))),k=function(){return Object(w.jsx)(g.SkeletonTheme,{color:"#bfbfbf",highlightColor:"#919191",children:Object(w.jsxs)(y,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(v.a,{width:100,style:{marginRight:12}})," ",Object(w.jsx)(v.a,{width:16})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(v.a,{width:45,style:{marginRight:12}})," ",Object(w.jsx)(v.a,{width:145})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(v.a,{width:81}),Object(w.jsx)("br",{}),Object(w.jsx)(v.a,{}),Object(w.jsx)(v.a,{width:200})]})]})})},E=j.b.div(r||(r=Object(l.a)(["\n  width: 500px;\n  background: #f8f9fa;\n  border: 0.5px solid #ced4da;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 20px;\n  font-size: 18px;\n  margin-bottom: 14px;\n"]))),z=j.b.div(a||(a=Object(l.a)(["\n  margin: 12px 0;\n"]))),S=function(){var e=Object(o.useState)(),t=Object(p.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(2),r=Object(p.a)(c,2),a=r[0],d=r[1];Object(o.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10");case 2:t=e.sent,n=t.data,i(Array.from(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=Object(o.useState)(!1),b=Object(p.a)(s,2),l=b[0],j=b[1],u=Object(o.useState)(!0),m=Object(p.a)(u,2),f=m[0],g=m[1];Object(o.useEffect)((function(){var e=function(){f&&(!function(){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),t=Math.max(document.documentElement.scrollTop,document.body.scrollTop);document.documentElement.clientHeight+t>=e/2&&j(!0)}(),g(!1),setTimeout((function(){g(!0)}),1e3))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return Object(o.useEffect)((function(){!l||a>=51||(d(a+1),setTimeout(Object(x.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/comments?_page=".concat(a,"&_limit=10"));case 2:t=e.sent,c=t.data,i(n.concat(c)),j(!1);case 6:case"end":return e.stop()}}),e)}))),500))}),[l]),n?Object(w.jsxs)(w.Fragment,{children:[n.map((function(e){return Object(w.jsxs)(E,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Comment Id"})," ",e.id]}),Object(w.jsxs)(z,{children:[Object(w.jsx)("b",{children:"Email"})," ",e.email]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Comment"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:e.body})]})]},e.id)})),l&&Array(5).fill(0).map((function(e,t){return Object(w.jsx)(k,{})}))]}):Object(w.jsx)("div",{children:"setting data!!!!"})},T=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u,{}),Object(w.jsx)(S,{})]})};b.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.e638a6cc.chunk.js.map