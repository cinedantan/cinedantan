(this["webpackJsonpcinedantan.com"]=this["webpackJsonpcinedantan.com"]||[]).push([[11],{233:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function l(e){var t=e.top,a=e.bottom;return r.a.createElement("div",{style:{marginTop:t||"50px",marginBottom:a||"0"}})}},234:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(232),i=a.n(l),c=a(30),o=a(242),m=a.n(o),s=a(33),d=a(11),u=a(12),E=a(25),p=a(60),f=r.a.memo((function(e){var t=e.addFavorites,a=e.imdb,n=e.favorites;return r.a.createElement("div",{onClick:function(){return t(a)}},function(e,t){return!!t&&t.indexOf(e)>-1}(a,n)?r.a.createElement(u.a,{type:"heart",style:{fontSize:"40px",color:"rgba(255,255,255,1)"},theme:"twoTone",twoToneColor:"white",className:"glitch"}):r.a.createElement("p",{className:"add-to-my-list"},"+ My List"))})),g=Object(E.b)((function(e){return Object(d.a)({},e)}),(function(e){return{addFavorites:function(t){return e(Object(p.a)(t))}}}))(f),h=a(314);a.d(t,"a",(function(){return b}));var y=function(e){var t=e.identifier,a=e.isDetail;return r.a.createElement(m.a,{src:Object(s.a)(t,!1,"xs"),decode:!1,className:"slider-content-img",style:{height:a?"auto":"45vh",objectFit:a?"":"unset",filter:"blur(2px)"}})};function b(e){var t=e.data,a=e.isDetail,n=t.identifier,l=t.imdb,o=t.rating,d=t.title,E=t.runtime,p=a?"/watch/"+window.btoa(l):l?"/details/"+window.btoa(l):"#";return r.a.createElement(i.a,null,r.a.createElement("div",{className:"dvd-box"},r.a.createElement("div",{style:{height:"65vh",width:"auto",textAlign:"center"}},r.a.createElement(c.a,{to:p},r.a.createElement(m.a,{src:Object(s.a)(n,!0),loader:r.a.createElement(y,{identifier:n,isDetail:a}),decode:!1,className:"slider-content-img",style:{height:a?"auto":"50vh",objectFit:a?"":"unset"}}),a&&r.a.createElement("div",{className:"play-button"},r.a.createElement(u.a,{type:"play-circle",style:{fontSize:"100px",color:"white"}})),r.a.createElement("div",{style:{position:"absolute",left:"10%"}},r.a.createElement(h.a,{character:r.a.createElement(u.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(o/2)}))),r.a.createElement("div",{className:"fav-container"},r.a.createElement(g,{imdb:l})),!a&&r.a.createElement("div",{className:"poster-title"},r.a.createElement("p",{style:{fontSize:"17px",color:"rgba(255,255,255,0.6)",fontWeight:"300",fontFamily:"inherit"}},r.a.createElement("strong",null,d.slice(0,35),d.length>35&&"...")," ",r.a.createElement("br",null),r.a.createElement(u.a,{type:"clock-circle",theme:"filled"})," ",E)))))}},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),r=a.n(n),l=a(300),i=a(301),c=a(302),o=a(303),m=a(304),s=a(305),d=a(306),u=a(307),E=a(308),p=a(309),f=a(310),g=a(311);function h(e){var t=e.url,a=void 0===t?window.location.href:t,n=e.title;return r.a.createElement("div",{style:{textAlign:"center"}},n&&r.a.createElement("h2",{style:{color:"rgb(37,38,38)"}},n),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",cursor:"pointer"}},r.a.createElement(l.a,{url:a},r.a.createElement(i.a,{size:32,round:!0})),r.a.createElement(c.a,{url:a},r.a.createElement(o.a,{size:32,round:!0})),r.a.createElement(m.a,{url:a},r.a.createElement(s.a,{size:32,round:!0})),r.a.createElement(d.a,{url:a},r.a.createElement(u.a,{size:32,round:!0})),r.a.createElement(E.a,{url:a},r.a.createElement(p.a,{size:32,round:!0})),r.a.createElement(f.a,{url:a},r.a.createElement(g.a,{size:32,round:!0}))))}},312:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(238),l=a(0),i=a.n(l),c=a(25),o=a(30),m=a(55),s=a(233),d=a(234),u=a(99),E=a(33),p=a(318),f=a(12),g=a(315),h=a(316),y=a(314),b=a(98),v=a(291),w=a.n(v),x=a(240);t.default=Object(c.b)((function(e){return Object(n.a)({},e)}),(function(e){return{}}))((function(e){var t=e.movies,a=e.route.match,n=a&&a.params?window.atob(a.params.q):null,c=Object(l.useState)([]),v=Object(r.a)(c,2),k=v[0],j=v[1],z=function(e){if(e)return Array.isArray(e)?e.map((function(e,t){return i.a.createElement(o.a,{key:e+t,to:"/collection/"+e},i.a.createElement(p.a,{color:"#108ee9",style:{fontWeight:500,fontSize:"15px",lineHeight:"20px",margin:"7px",padding:"5px",cursor:"pointer"}},e))})):i.a.createElement("span",{className:"detail-tags"},i.a.createElement(o.a,{to:"/collection/"+e},i.a.createElement(f.a,{type:"search"})," ",e)," ")};Object(l.useEffect)((function(){if(n){var e=t.filter((function(e){return n===e.imdb}))[0];j(e)}}),[t,n]);var N=k||{},O=N.title,S=N.year,B=N.runtime,D=N.director,W=N.writers,A=N.stars,R=N.genre,F=N.rating,C=N.wiki,I=N.story,M=N.related,T=N.imdb,_=Object(E.b)(M,t),H=_?_.map((function(e){return e.title})):[];return i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(u.a,{title:"\ud83c\udfa5 \ud83c\udf7f "+O+" by "+D,description:I?I.slice(0,100)+"...":"",image:Object(E.a)(k.identifier)}),i.a.createElement("div",{className:"page-border-top",style:{zIndex:3}}),k&&k.identifier?i.a.createElement("div",{style:{backgroundImage:"url(".concat(Object(E.a)(k.identifier),")")},className:"detail-bg"}):null,i.a.createElement("div",{style:{position:"fixed",zIndex:2,backgroundColor:"rgba(0,0,0,0.7)",width:"100vw",height:"100vh",top:0,overflowY:"scroll"}},i.a.createElement("div",{style:{margin:"7vw"}},!k&&i.a.createElement(m.default,null),k&&k.identifier?i.a.createElement(g.a,{gutter:16},E.c?i.a.createElement(s.a,{top:"7vh"}):i.a.createElement(h.a,{span:8},i.a.createElement("div",null,i.a.createElement(d.a,{data:k,isDetail:!0}))),i.a.createElement(h.a,{xs:24,sm:24,md:E.c?24:12,lg:E.c?24:12,xl:10},i.a.createElement("div",null,i.a.createElement("h1",{style:{color:"white",fontSize:"35px"}},O,i.a.createElement("div",{style:{float:"right",marginTop:"-20px"}},i.a.createElement(y.a,{character:i.a.createElement(f.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(F/2)})))),E.c&&i.a.createElement("div",null,i.a.createElement(s.a,{bottom:"5vh"}),i.a.createElement(o.a,{to:O?"/watch/"+window.btoa(T):null},i.a.createElement(b.a,{type:"primary",block:!0,icon:"caret-right",size:"large"},"Play")),i.a.createElement(s.a,{bottom:"5vh"})),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("p",{style:{fontWeight:900}},z(S)," ",i.a.createElement("span",{style:{paddingRight:"30px",display:"inline"}})," ",B," ")),i.a.createElement("div",{style:{textAlign:"justify",fontSize:"15px",lineHeight:"22px",fontWeight:"100",paddingBottom:"20px"}},i.a.createElement(w.a,{min:200,ideal:500,max:700,text:I})),i.a.createElement("p",null,i.a.createElement("strong",null,"Starring"),":"," ",A?z(A):null),i.a.createElement("p",null,i.a.createElement("strong",null,"Genres"),":"," ",R?z(R):""),i.a.createElement("p",null,i.a.createElement("strong",null,"Writers"),":"," ",W?z(W):""),i.a.createElement("p",null,i.a.createElement("strong",null,"Director"),":"," ",D?z(D):""),i.a.createElement("p",null,i.a.createElement("strong",null,"Related"),":"," ",H?z(H):""),i.a.createElement("p",null,i.a.createElement("span",null,"Sources"),":"," ",i.a.createElement("span",{style:{paddingRight:"5px",display:"inline"}}),i.a.createElement("a",{href:"https://archive.org/details/"+k.identifier,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"Archive.org"),i.a.createElement("span",{style:{paddingRight:"10px",display:"inline"}}),i.a.createElement("a",{href:"https://www.wikidata.org/wiki/"+C,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"WikiData"),i.a.createElement("span",{style:{paddingRight:"10px",display:"inline"}}),i.a.createElement("a",{href:"https://www.wikidata.org/wiki/"+C,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"Wikipedia"),i.a.createElement("span",{style:{paddingRight:"10px",display:"inline"}}),i.a.createElement("a",{href:"https://www.imdb.com/title/"+T,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"IMDB")),i.a.createElement(s.a,{bottom:"50px"}),i.a.createElement(o.a,{to:O?"/watch/"+window.btoa(T):null},i.a.createElement(b.a,{type:"primary",block:!0,icon:"caret-right",size:"large"},"Play")),i.a.createElement(s.a,{top:"30px"}),i.a.createElement(x.a,null),E.c?i.a.createElement(s.a,{bottom:"25vh"}):i.a.createElement(s.a,{bottom:"10vh"}))):null)))}))}}]);