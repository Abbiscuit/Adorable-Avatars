(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(61)},32:function(e,a,t){},33:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(21),l=t.n(r),s=(t(32),t(3)),o=t(7),m=(t(33),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement(s.b,{to:"/"},c.a.createElement("h1",{className:"logo"},"Adorable Avatar")),c.a.createElement("ul",{className:"nav-item-list"},c.a.createElement(s.b,{to:"/about"},c.a.createElement("li",{className:"nav-item"},"\u30a2\u30d7\u30ea\u306b\u3064\u3044\u3066"))))}),i=function(e){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"No match for ",c.a.createElement("i",null,e.location.pathname)),c.a.createElement(s.b,{to:"/"},"Go Back"))},u=t(10),E=t.n(u),d=t(12),p=t(8),f=t(26),v={display:"block",margin:"0 auto",borderColor:"red"},h=function(){var e=Object(n.useState)(!0),a=Object(p.a)(e,1)[0];return c.a.createElement("div",{className:"sweet-loading",style:{marginTop:"100px"}},c.a.createElement(f.a,{style:v,sizeUnit:"px",size:80,color:"#81bef1",loading:a}))},b=(t(51),function(e){return c.a.createElement(s.b,{to:"/"},c.a.createElement("button",{className:"button"},e.children))}),N=(t(52),function(e){var a=e.match,t=Object(n.useState)([]),r=Object(p.a)(t,2),l=r[0],s=r[1];Object(n.useEffect)(function(){!function(){var e=Object(d.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(a.params.id));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var o=l.id,m=l.name,i=l.username,u=l.email,f=l.phone,v=l.website;return o?c.a.createElement("div",{className:"avatar-card"},c.a.createElement("img",{src:"https://robohash.org/".concat(a.params.id,"?set=set4"),alt:"avatars",className:"card-image"}),c.a.createElement("div",{className:"avatar-profile"},c.a.createElement("h2",{className:"name"},"name: ".concat(m)),c.a.createElement("span",{className:"username"},"username: ".concat(i)),c.a.createElement("span",null,"Email:  ".concat(u)),c.a.createElement("span",null,"Tel:  ".concat(f)),c.a.createElement("span",null,"Web:  ".concat(v))),c.a.createElement(b,null," Back ")):c.a.createElement("div",{className:"avatar-card spinner"},c.a.createElement(h,null))}),g=(t(53),function(){return c.a.createElement("div",{className:"about"},c.a.createElement("h1",{className:"title"},"Adorable Avatar"),c.a.createElement("p",{className:"description"},"\u30b5\u30fc\u30c1\u30dc\u30c3\u30af\u30b9\u306b\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u306b\u30de\u30c3\u30c1\u3059\u308b\u30a2\u30d0\u30bf\u30fc\u9054\u306e\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}),w=(t(54),function(e){var a=e.searchChange;return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"search",placeholder:"\u30a2\u30d0\u30bf\u30fc\u3092\u691c\u7d22",onChange:a,className:"search-box-input"}),c.a.createElement("p",null,"\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u3067\u30bf\u30a4\u30d7\u3057\u3066\u307f\u3088\u3046\uff01"))}),j=t(2),y=(t(55),function(e){var a=e.name,t=e.email,n=e.id;return c.a.createElement(s.b,{to:"/avatars/".concat(n)},c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:"https://robohash.org/".concat(n,"?set=set4"),alt:"avatars",className:"card-image"}),c.a.createElement("div",{className:"card-profile"},c.a.createElement("h2",{className:"card-name"},a),c.a.createElement("p",{className:"card-email"},t))))}),O=t(25),x=t.n(O),k=(t(58),function(e){var a=e.avatars;return c.a.createElement("div",{className:"card-list"},a.map(function(e){var a=Object(j.a)({},e);return c.a.createElement(y,Object.assign({key:x()()},a))}))}),A=(t(59),function(e){return c.a.createElement("div",{className:"scroll"},e.children)}),C=(t(60),function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),o=s[0],m=s[1];Object(n.useEffect)(function(){!function(){var e=Object(d.a)(E.a.mark(function e(){var a,t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var i=t.filter(function(e){return e.name.toLowerCase().includes(o.toLowerCase())});return c.a.createElement("div",{className:"directory"},t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{searchChange:function(e){m(e.target.value)}}),c.a.createElement(A,null,c.a.createElement(k,{avatars:i}))):c.a.createElement("div",{className:"directory"},c.a.createElement(h,null),c.a.createElement("p",null,"Loading Now...")))}),B=function(){return c.a.createElement("div",{className:"homepage"},c.a.createElement(C,null))};var S=function(){return c.a.createElement(s.a,{basename:"/Adorable-Avatars"},c.a.createElement(m,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:B}),c.a.createElement(o.a,{path:"/avatars/:id",component:N}),c.a.createElement(o.a,{path:"/about",component:g}),c.a.createElement(o.a,{component:i}),">"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.df0652f1.chunk.js.map