(this["webpackJsonphayanmind-infinite-scroll"]=this["webpackJsonphayanmind-infinite-scroll"]||[]).push([[0],{57:function(e,n,t){"use strict";t.r(n);var i,c,r,a,o,s,d,b,l=t(0),j=t.n(l),u=t(28),m=t.n(u),h=t(4),x=t(3),f=Object(x.a)(i||(i=Object(h.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video, button {\n    border: 0;\n    font-size: inherit;\n    vertical-align: baseline;\n    word-break: keep-all;\n  }\n"]))),p=t(7),O=t.n(p),g=t(15),v=t(6),y=t(16),w=t.n(y),k=t(5),E=t.n(k),S=t(1),z=x.b.div(c||(c=Object(h.a)(["\n  width: 500px;\n  background: #f8f9fa;\n  border: 0.5px solid #ced4da;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 20px;\n  font-size: 18px;\n  margin-bottom: 14px;\n\n  & > div:nth-child(2) {\n    margin: 12px 0;\n  }\n"]))),A=function(){return Object(S.jsx)(k.SkeletonTheme,{color:"#bfbfbf",highlightColor:"#A8A8A8",children:Object(S.jsxs)(z,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(E.a,{width:100,style:{marginRight:12}})," ",Object(S.jsx)(E.a,{width:16})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(E.a,{width:45,style:{marginRight:12}})," ",Object(S.jsx)(E.a,{width:145})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(E.a,{width:81}),Object(S.jsx)("br",{}),Object(S.jsx)(E.a,{}),Object(S.jsx)(E.a,{width:200})]})]})})},T=Object(x.c)(r||(r=Object(h.a)(["\n from {transform: rotate(0deg);}\n  to {transform: rotate(720deg);}\n"]))),_=x.b.div(a||(a=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n"]))),C=x.b.div(o||(o=Object(h.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 4px;\n  background: #be90d4;\n  -webkit-animation: "," 1.5s linear infinite;\n  animation: "," 1.5s linear infinite;\n"])),T,T),H=function(){return Object(S.jsx)(_,{children:Object(S.jsx)(C,{})})},M=x.b.div(s||(s=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 33px 0;\n"]))),q=x.b.div(d||(d=Object(h.a)(["\n  width: 500px;\n  background: #f8f9fa;\n  border: 0.5px solid #ced4da;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 20px;\n  font-size: 18px;\n  margin-bottom: 14px;\n"]))),I=x.b.div(b||(b=Object(h.a)(["\n  margin: 12px 0;\n"]))),J=function(){var e=Object(l.useState)(),n=Object(v.a)(e,2),t=n[0],i=n[1],c=Object(l.useState)(2),r=Object(v.a)(c,2),a=r[0],o=r[1];Object(l.useEffect)((function(){(function(){var e=Object(g.a)(O.a.mark((function e(){var n,t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10");case 2:n=e.sent,t=n.data,i(Array.from(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=Object(l.useState)(!1),d=Object(v.a)(s,2),b=d[0],j=d[1],u=Object(l.useState)(!1),m=Object(v.a)(u,2),h=m[0],x=m[1],f=Object(l.useState)(!0),p=Object(v.a)(f,2),y=p[0],k=p[1];Object(l.useEffect)((function(){var e=function(){y&&(!function(){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),n=Math.max(document.documentElement.scrollTop,document.body.scrollTop);document.documentElement.clientHeight+n>=e/2&&j(!0)}(),k(!1),setTimeout((function(){k(!0)}),1e3))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return Object(l.useEffect)((function(){b&&!h&&(o(a+1),setTimeout(Object(g.a)(O.a.mark((function e(){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/comments?_page=".concat(a,"&_limit=10"));case 2:n=e.sent,(c=n.data).length>0?(i(t.concat(c)),j(!1)):x(!0);case 5:case"end":return e.stop()}}),e)}))),500))}),[b]),t?Object(S.jsxs)(M,{children:[t.map((function(e){return Object(S.jsxs)(q,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("b",{children:"Comment Id"}),"\xa0\xa0",e.id]}),Object(S.jsxs)(I,{children:[Object(S.jsx)("b",{children:"Email"}),"\xa0\xa0",e.email]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("b",{children:"Comment"}),Object(S.jsx)("br",{}),Object(S.jsx)("p",{children:e.body})]})]},e.id)})),b&&!h&&Array(5).fill(0).map((function(e,n){return Object(S.jsx)(A,{})}))]}):Object(S.jsx)(H,{})},L=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(f,{}),Object(S.jsx)(J,{})]})};m.a.render(Object(S.jsx)(j.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.f8839606.chunk.js.map