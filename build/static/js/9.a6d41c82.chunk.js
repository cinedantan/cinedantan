(this["webpackJsonpcinedanton.com"]=this["webpackJsonpcinedanton.com"]||[]).push([[9],{233:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(0),r=a.n(i);function n(e){var t=e.top,a=e.bottom;return r.a.createElement("div",{style:{marginTop:t||"50px",marginBottom:a||"0"}})}},235:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(232),o=a.n(n),s=a(30),c=a(241),l=a.n(c),p=a(33),m=a(24),d=a(11),u=a(25),x=a(60);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var y=r.a.memo((function(e){var t=e.addFavorites,a=e.imdb,i=e.favorites;return r.a.createElement("div",{onClick:function(){return t(a)}},function(e,t){return!!t&&t.indexOf(e)>-1}(a,i)?r.a.createElement(d.a,{type:"heart",style:{fontSize:"40px",color:"rgba(255,255,255,1)"},theme:"twoTone",twoToneColor:"white",className:"glitch"}):r.a.createElement("p",{className:"add-to-my-list"},"+ My List"))})),f=Object(u.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}),(function(e){return{addFavorites:function(t){return e(Object(x.a)(t))}}}))(y),k=a(315);a.d(t,"a",(function(){return E}));var b=function(e){var t=e.identifier,a=e.isDetail;return r.a.createElement(l.a,{src:Object(p.a)(t,!1,"xs"),decode:!1,style:{width:"auto",maxWidth:"100%",height:a?"auto":"45vh",maxHeight:"75vh",borderRadius:"20px",boxShadow:"0px 0px 8px 0px #080707",backgroundColor:"white",marginLeft:"auto",marginRight:"auto",filter:"blur(2px)"}})};function E(e){var t=e.data,a=e.isDetail,i=t.identifier,n=t.imdb,c=t.rating,m=a?"/watch/"+window.btoa(n):n?"/details/"+window.btoa(n):"#";return r.a.createElement(o.a,null," ",r.a.createElement("div",{className:"dvd-box"},r.a.createElement("div",{style:{height:a?"70vh":"50vh",width:"auto"}},r.a.createElement(s.a,{to:m},r.a.createElement(l.a,{src:Object(p.a)(i,!0),loader:r.a.createElement(b,{identifier:i,isDetail:a}),decode:!1,style:{width:"auto",maxWidth:"100%",height:a?"auto":"45vh",maxHeight:"75vh",borderRadius:"20px",boxShadow:"0px 0px 8px 0px #080707",objectFit:a?"":"contain",backgroundColor:"white",marginLeft:"auto",marginRight:"auto"}}),a&&r.a.createElement("div",{className:"play-button"},r.a.createElement(d.a,{type:"play-circle",style:{fontSize:"100px",color:"white"}})),r.a.createElement("div",{style:{position:"absolute",left:"10%"}},r.a.createElement(k.a,{character:r.a.createElement(d.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(c/2)}))),r.a.createElement("div",{className:"fav-container"},r.a.createElement(f,{imdb:n}))))," ")}},239:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(232),o=a.n(n),s=a(235),c=a(243),l=a.n(c),p={adaptiveHeight:!1,variableWidth:!1,dots:!1,infinite:!1,speed:1e3,lazyLoad:!0,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1680,settings:{slidesToShow:5,slidesToScroll:4,infinite:!1,dots:!1}},{breakpoint:1480,settings:{slidesToShow:4,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};t.a=function(e){var t=e.posters,a=e.title;return r.a.createElement(o.a,{height:200,offset:100,once:!0},r.a.createElement("div",{style:{width:"100%",overflowX:"hidden",overflowY:"hidden",height:"auto"}},r.a.createElement("div",{style:{paddingLeft:"10vw",opacity:.85,marginTop:"70px"}},r.a.createElement("h1",{"data-text":a,className:"glitch",style:{fontSize:"3.5vh",lineHeight:"5.5vw",color:"white"}},a)),t&&Array.isArray(t)&&t.length>0?r.a.createElement(l.a,p,t.map((function(e,t){return r.a.createElement(s.a,{data:e,key:t+Math.random()})}))):null))}},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var i=a(0),r=a.n(i),n=a(301),o=a(302),s=a(303),c=a(304),l=a(305),p=a(306),m=a(307),d=a(308),u=a(309),x=a(310),h=a(311),y=a(312);function f(e){var t=e.url,a=e.title;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:{color:"rgb(37,38,38)"}},a||"Share your Selection"),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",cursor:"alias"}},r.a.createElement(n.a,{url:t},r.a.createElement(o.a,{size:32,round:!0})),r.a.createElement(s.a,{url:t},r.a.createElement(c.a,{size:32,round:!0})),r.a.createElement(l.a,{url:t},r.a.createElement(p.a,{size:32,round:!0})),r.a.createElement(m.a,{url:t},r.a.createElement(d.a,{size:32,round:!0})),r.a.createElement(u.a,{url:t},r.a.createElement(x.a,{size:32,round:!0})),r.a.createElement(h.a,{url:t},r.a.createElement(y.a,{size:32,round:!0}))))}},298:function(e){e.exports=JSON.parse('{"v":"5.4.1","fr":29.9700012207031,"ip":0,"op":318.000012952406,"w":300,"h":300,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 32 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.694,"y":0.565},"o":{"x":0.19,"y":0},"n":"0p694_0p565_0p19_0","t":21.229,"s":[146.493,151.529,0],"e":[149.999,145.536,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.798,"y":0.854},"o":{"x":0.19,"y":0},"n":"0p798_0p854_0p19_0","t":46.405,"s":[149.999,145.536,0],"e":[157.493,144.029,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.689,"y":0.661},"o":{"x":0.19,"y":0},"n":"0p689_0p661_0p19_0","t":64.385,"s":[157.493,144.029,0],"e":[155.841,151.86,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.19,"y":0},"n":"0p833_1_0p19_0","t":89.561,"s":[155.841,151.86,0],"e":[146.493,151.529,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.694,"y":0.565},"o":{"x":0.19,"y":0},"n":"0p694_0p565_0p19_0","t":111.139,"s":[146.493,151.529,0],"e":[149.999,145.536,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.798,"y":0.854},"o":{"x":0.19,"y":0},"n":"0p798_0p854_0p19_0","t":136.315,"s":[149.999,145.536,0],"e":[157.493,144.029,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.689,"y":0.661},"o":{"x":0.19,"y":0},"n":"0p689_0p661_0p19_0","t":154.295,"s":[157.493,144.029,0],"e":[155.841,151.86,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.19,"y":0},"n":"0p833_1_0p19_0","t":179.471,"s":[155.841,151.86,0],"e":[146.493,151.529,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.694,"y":0.565},"o":{"x":0.19,"y":0},"n":"0p694_0p565_0p19_0","t":201.049,"s":[146.493,151.529,0],"e":[149.999,145.536,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.798,"y":0.854},"o":{"x":0.19,"y":0},"n":"0p798_0p854_0p19_0","t":226.225,"s":[149.999,145.536,0],"e":[157.493,144.029,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.689,"y":0.661},"o":{"x":0.19,"y":0},"n":"0p689_0p661_0p19_0","t":244.205,"s":[157.493,144.029,0],"e":[155.841,151.86,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.19,"y":0},"n":"0p833_1_0p19_0","t":269.381,"s":[155.841,151.86,0],"e":[146.493,151.529,0],"to":[0,0,0],"ti":[0,0,0]},{"t":290.958761850993}],"ix":2},"a":{"a":0,"k":[62.389,64.235,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.424,1.418],[1.424,-1.418]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[0]},{"t":27.4725011189779}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[100]},{"t":27.4725011189779}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":1,"ml":10,"ml2":{"a":0,"k":10,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[47.995,79.671],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[2.653,-2.79],[0,0],[2.79,2.653],[0,0],[-2.654,2.79],[0,0],[-2.79,-2.653]],"o":[[2.79,2.653],[0,0],[-2.653,2.79],[0,0],[-2.79,-2.653],[0,0],[2.653,-2.79],[0,0]],"v":[[17.87,-18.369],[18.117,-8.473],[-7.551,18.52],[-17.447,18.769],[-17.868,18.369],[-18.117,8.473],[7.553,-18.52],[17.449,-18.769]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[0]},{"t":27.4725011189779}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[100]},{"t":27.4725011189779}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":1,"ml":10,"ml2":{"a":0,"k":10,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[28.27,99.549],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-12.961],[12.963,0],[0,12.962],[-12.962,0]],"o":[[0,12.962],[-12.962,0],[0,-12.961],[12.963,0]],"v":[[23.47,-0.001],[-0.001,23.47],[-23.47,-0.001],[-0.001,-23.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[47]},{"t":27.4725011189779}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[72]},{"t":27.4725011189779}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[77.095,47.683],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-22.192],[22.192,0],[0,22.193],[-22.193,0]],"o":[[0,22.193],[-22.193,0],[0,-22.192],[22.192,0]],"v":[[40.184,0],[-0.001,40.183],[-40.184,0],[-0.001,-40.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[0]},{"t":27.4725011189779}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.43],"y":[0]},"n":["0p25_1_0p43_0"],"t":0,"s":[100],"e":[100]},{"t":27.4725011189779}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[77.095,47.683],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":318.431262969971,"st":0,"bm":0}],"markers":[]}')},317:function(e,t,a){"use strict";a.r(t);var i=a(24),r=a(234),n=a(0),o=a.n(n),s=a(25),c=a(239),l=a(118),p=a.n(l),m={loop:!0,autoplay:!0,animationData:a(298),rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};function d(){return o.a.createElement(p.a,{options:m,height:400,width:400})}var u=a(101),x=a(233),h=a(99),y=a(33),f=a(244),k=a(299);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var E=new(a.n(k).a)({profile:"fast",depth:5,async:!0}),v=!1;t.default=Object(s.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}),(function(e){return{}}))((function(e){var t=e.movies,a=e.searchQ,i=e.route.match,s=i&&i.params?i.params.q:null,l=Object(n.useState)(null),p=Object(r.a)(l,2),m=p[0],k=p[1],b=Object(n.useState)([]),g=Object(r.a)(b,2),_=g[0],w=g[1];return Object(n.useEffect)((function(){if(!v)for(var e=0;e<t.length;e++){var a=t[e],i=a.title,r=a.imdb,n=a.year,o=a.director,s=a.writers,c=a.stars,l=a.genre,p=a.story;E.add(r,JSON.stringify({imdb:r,title:i,year:n,director:o,writers:s,stars:c,genre:l,story:p})),e===t.length-1&&(v=!0)}}),[t]),Object(n.useEffect)((function(){k(a)}),[a]),Object(n.useEffect)((function(){m&&E.search(m,{limit:100},(function(e){var a=e.map((function(e){return Object(y.b)(e,t)}));w(a)}))}),[m,t]),Object(n.useEffect)((function(){s&&!m&&k(s)}),[s,t,m]),o.a.createElement("div",{style:{width:"100%",minHeight:"150vh"}},o.a.createElement(h.a,{title:"Collection [ "+(m+" ]"||!1),description:_.map((function(e){return e.title+" by "+e.director}))+"...",image:_&&_[0]?Object(y.a)(_[0].identifier):null}),o.a.createElement("div",{className:"page-border-top"}),o.a.createElement(x.a,{top:"7vh"}),y.c?o.a.createElement("div",{style:{padding:"50px",position:"fixed",bottom:0,backgroundColor:"#141312",width:"100%",zIndex:99999999999,borderTop:"1px solid white"}},o.a.createElement(u.a,null)):null,m?o.a.createElement("div",null,o.a.createElement(c.a,{posters:_,title:m,isSearch:!0}),_&&0===_.length?o.a.createElement(d,null):null,o.a.createElement(f.a,{url:window.location.href,title:"Share your Findings"})):o.a.createElement(d,null))}))}}]);