(this["webpackJsonpcinedantan.com"]=this["webpackJsonpcinedantan.com"]||[]).push([[10],{233:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function i(e){var t=e.top,a=e.bottom;return r.a.createElement("div",{style:{marginTop:t||"50px",marginBottom:a||"0"}})}},234:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(232),l=a.n(i),o=a(30),c=a(242),s=a.n(c),d=a(33),u=a(11),m=a(12),f=a(25),h=a(60),E=r.a.memo((function(e){var t=e.addFavorites,a=e.imdb,n=e.favorites;return r.a.createElement("div",{onClick:function(){return t(a)}},function(e,t){return!!t&&t.indexOf(e)>-1}(a,n)?r.a.createElement(m.a,{type:"heart",style:{fontSize:"40px",color:"rgba(255,255,255,1)"},theme:"twoTone",twoToneColor:"white",className:"glitch"}):r.a.createElement("p",{className:"add-to-my-list"},"+ My List"))})),v=Object(f.b)((function(e){return Object(u.a)({},e)}),(function(e){return{addFavorites:function(t){return e(Object(h.a)(t))}}}))(E),p=a(314);a.d(t,"a",(function(){return y}));var b=function(e){var t=e.identifier,a=e.isDetail;return r.a.createElement(s.a,{src:Object(d.a)(t,!1,"xs"),decode:!1,className:"slider-content-img",style:{height:a?"auto":"45vh",objectFit:a?"":"unset",filter:"blur(2px)"}})};function y(e){var t=e.data,a=e.isDetail,n=t.identifier,i=t.imdb,c=t.rating,u=t.title,f=t.runtime,h=a?"/watch/"+window.btoa(i):i?"/details/"+window.btoa(i):"#";return r.a.createElement(l.a,null,r.a.createElement("div",{className:"dvd-box"},r.a.createElement("div",{style:{height:"65vh",width:"auto",textAlign:"center"}},r.a.createElement(o.a,{to:h},r.a.createElement(s.a,{src:Object(d.a)(n,!0),loader:r.a.createElement(b,{identifier:n,isDetail:a}),decode:!1,className:"slider-content-img",style:{height:a?"auto":"50vh",objectFit:a?"":"unset"}}),a&&r.a.createElement("div",{className:"play-button"},r.a.createElement(m.a,{type:"play-circle",style:{fontSize:"100px",color:"white"}})),r.a.createElement("div",{style:{position:"absolute",left:"10%"}},r.a.createElement(p.a,{character:r.a.createElement(m.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(c/2)}))),r.a.createElement("div",{className:"fav-container"},r.a.createElement(v,{imdb:i})),!a&&r.a.createElement("div",{className:"poster-title"},r.a.createElement("p",{style:{fontSize:"17px",color:"rgba(255,255,255,0.6)",fontWeight:"300",fontFamily:"inherit"}},r.a.createElement("strong",null,u.slice(0,35),u.length>35&&"...")," ",r.a.createElement("br",null),r.a.createElement(m.a,{type:"clock-circle",theme:"filled"})," ",f)))))}},239:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(232),l=a.n(i),o=a(234),c=a(244),s=a.n(c),d={adaptiveHeight:!1,variableWidth:!1,dots:!1,infinite:!1,speed:1e3,lazyLoad:!0,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1680,settings:{slidesToShow:5,slidesToScroll:4,infinite:!1,dots:!1}},{breakpoint:1480,settings:{slidesToShow:4,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};t.a=function(e){var t=e.posters,a=e.title;return r.a.createElement(l.a,{height:200,offset:100,once:!0},r.a.createElement("div",{style:{width:"100%",overflowX:"hidden",overflowY:"hidden",height:"auto"}},r.a.createElement("div",{style:{paddingLeft:"10vw",opacity:.85,marginTop:"70px"}},r.a.createElement("h1",{"data-text":a,className:"glitch",style:{fontSize:"3.5vh",lineHeight:"4vw",color:"white"}},a)),t&&Array.isArray(t)&&t.length>0?r.a.createElement(s.a,d,t.map((function(e,t){return r.a.createElement(o.a,{data:e,key:t+Math.random()})}))):null))}},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),i=a(300),l=a(301),o=a(302),c=a(303),s=a(304),d=a(305),u=a(306),m=a(307),f=a(308),h=a(309),E=a(310),v=a(311);function p(e){var t=e.url,a=void 0===t?window.location.href:t,n=e.title;return r.a.createElement("div",{style:{textAlign:"center"}},n&&r.a.createElement("h2",{style:{color:"rgb(37,38,38)"}},n),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",cursor:"pointer"}},r.a.createElement(i.a,{url:a},r.a.createElement(l.a,{size:32,round:!0})),r.a.createElement(o.a,{url:a},r.a.createElement(c.a,{size:32,round:!0})),r.a.createElement(s.a,{url:a},r.a.createElement(d.a,{size:32,round:!0})),r.a.createElement(u.a,{url:a},r.a.createElement(m.a,{size:32,round:!0})),r.a.createElement(f.a,{url:a},r.a.createElement(h.a,{size:32,round:!0})),r.a.createElement(E.a,{url:a},r.a.createElement(v.a,{size:32,round:!0}))))}},299:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(238),i=a(0),l=a.n(i),o=a(25),c=a(239),s=a(55),d=a(240),u=a(233),m=a(99);t.default=Object(o.b)((function(e){return Object(n.a)({},e)}),(function(e){return{}}))((function(e){var t,a=e.movies,n=e.route,o=(e.favorites,n.match);try{t=o&&o.params?atob(o.params.f):null}catch(p){}var f=Object(i.useState)([]),h=Object(r.a)(f,2),E=h[0],v=h[1];return Object(i.useEffect)((function(){if(t){var e=a.filter((function(e){return t.split(",").indexOf(e.imdb)>-1}));v(e)}}),[a,t]),l.a.createElement("div",{style:{width:"100%",minHeight:"130vh"}},l.a.createElement(m.a,{title:"\ud83c\udfa5 \ud83c\udf7f CineDantan - Favorites"}),l.a.createElement(u.a,{top:"10vh"}),E&&t?l.a.createElement("div",null,l.a.createElement(c.a,{posters:E,title:""}),l.a.createElement(d.a,{url:window.location.href})):l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(s.default,null),l.a.createElement("p",null,"To display your favorites here, Press on the little hearts (bottom right of posters)"," ")))}))}}]);