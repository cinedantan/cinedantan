(this["webpackJsonpcinedanton.com"]=this["webpackJsonpcinedanton.com"]||[]).push([[11],{233:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r);function i(e){var t=e.top,a=e.bottom;return n.a.createElement("div",{style:{marginTop:t||"50px",marginBottom:a||"0"}})}},235:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(232),l=a.n(i),o=a(30),c=a(241),s=a.n(c),m=a(33),p=a(24),d=a(11),u=a(25),f=a(60);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var b=n.a.memo((function(e){var t=e.addFavorites,a=e.imdb,r=e.favorites;return n.a.createElement("div",{onClick:function(){return t(a)}},function(e,t){return!!t&&t.indexOf(e)>-1}(a,r)?n.a.createElement(d.a,{type:"heart",style:{fontSize:"40px",color:"rgba(255,255,255,1)"},theme:"twoTone",twoToneColor:"white",className:"glitch"}):n.a.createElement("p",{className:"add-to-my-list"},"+ My List"))})),h=Object(u.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}),(function(e){return{addFavorites:function(t){return e(Object(f.a)(t))}}}))(b),E=a(315);a.d(t,"a",(function(){return w}));var y=function(e){var t=e.identifier,a=e.isDetail;return n.a.createElement(s.a,{src:Object(m.a)(t,!1,"xs"),decode:!1,style:{width:"auto",maxWidth:"100%",height:a?"auto":"45vh",maxHeight:"75vh",borderRadius:"20px",boxShadow:"0px 0px 8px 0px #080707",backgroundColor:"white",marginLeft:"auto",marginRight:"auto",filter:"blur(2px)"}})};function w(e){var t=e.data,a=e.isDetail,r=t.identifier,i=t.imdb,c=t.rating,p=a?"/watch/"+window.btoa(i):i?"/details/"+window.btoa(i):"#";return n.a.createElement(l.a,null," ",n.a.createElement("div",{className:"dvd-box"},n.a.createElement("div",{style:{height:a?"70vh":"50vh",width:"auto"}},n.a.createElement(o.a,{to:p},n.a.createElement(s.a,{src:Object(m.a)(r,!0),loader:n.a.createElement(y,{identifier:r,isDetail:a}),decode:!1,style:{width:"auto",maxWidth:"100%",height:a?"auto":"45vh",maxHeight:"75vh",borderRadius:"20px",boxShadow:"0px 0px 8px 0px #080707",objectFit:a?"":"contain",backgroundColor:"white",marginLeft:"auto",marginRight:"auto"}}),a&&n.a.createElement("div",{className:"play-button"},n.a.createElement(d.a,{type:"play-circle",style:{fontSize:"100px",color:"white"}})),n.a.createElement("div",{style:{position:"absolute",left:"10%"}},n.a.createElement(E.a,{character:n.a.createElement(d.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(c/2)}))),n.a.createElement("div",{className:"fav-container"},n.a.createElement(h,{imdb:i}))))," ")}},313:function(e,t,a){"use strict";a.r(t);var r=a(24),n=a(234),i=a(0),l=a.n(i),o=a(25),c=a(30),s=a(55),m=a(233),p=a(235),d=a(99),u=a(33),f=a(318),g=a(11),b=a(316),h=a(319),E=a(315),y=a(98),w=a(292),v=a.n(w);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.default=Object(o.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}),(function(e){return{}}))((function(e){var t=e.movies,a=e.route.match,r=a&&a.params?window.atob(a.params.q):null,o=Object(i.useState)([]),w=Object(n.a)(o,2),O=w[0],x=w[1],j=function(e){if(e)return Array.isArray(e)?e.map((function(e,t){return l.a.createElement(c.a,{key:e+t,to:"/collection/"+e},l.a.createElement(f.a,{color:"#108ee9",style:{fontWeight:500,fontSize:"15px",lineHeight:"20px",margin:"7px",padding:"5px",cursor:"pointer"}},e))})):l.a.createElement("span",{className:"detail-tags"},l.a.createElement(c.a,{to:"/collection/"+e},l.a.createElement(g.a,{type:"search"})," ",e)," ")};Object(i.useEffect)((function(){if(r){var e=t.filter((function(e){return r===e.imdb}))[0];x(e)}}),[t,r]);var k=O||{},P=k.title,D=k.year,S=k.runtime,N=k.director,R=k.writers,z=k.stars,W=k.genre,B=k.rating,C=k.wiki,A=k.story,H=k.related,I=k.imdb,M=Object(u.b)(H,t),T=M?M.map((function(e){return e.title})):[];return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(d.a,{title:"\ud83c\udfa5 \ud83c\udf7f "+P+" by "+N,description:A?A.slice(0,100)+"...":"",image:Object(u.a)(O.identifier)}),l.a.createElement("div",{className:"page-border-top",style:{zIndex:3}}),O&&O.identifier?l.a.createElement("div",{style:{backgroundImage:"url(".concat(Object(u.a)(O.identifier),")")},className:"detail-bg"}):null,l.a.createElement("div",{style:{position:"fixed",zIndex:2,backgroundColor:"rgba(0,0,0,0.7)",width:"100vw",height:"100vh",top:0,overflowY:"scroll"}},l.a.createElement("div",{style:{margin:"7vw"}},!O&&l.a.createElement(s.default,null),O&&O.identifier?l.a.createElement(b.a,{gutter:16},u.c?l.a.createElement(m.a,{top:"7vh"}):l.a.createElement(h.a,{span:8},l.a.createElement("div",null,l.a.createElement(p.a,{data:O,isDetail:!0}))),l.a.createElement(h.a,{xs:24,sm:24,md:u.c?24:12,lg:u.c?24:12,xl:10},l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"white",fontSize:"35px"}},P,l.a.createElement("div",{style:{float:"right",marginTop:"-20px"}},l.a.createElement(E.a,{character:l.a.createElement(g.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(B/2)})))),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("p",{style:{fontWeight:900}},j(D),"  ",l.a.createElement("span",{style:{paddingRight:"30px",display:"inline"}})," ",S," ")),l.a.createElement("div",{style:{textAlign:"justify",fontSize:"15px",lineHeight:"22px",fontWeight:"100",paddingBottom:"20px"}},l.a.createElement(v.a,{min:200,ideal:500,max:700,text:A})),l.a.createElement("p",null,l.a.createElement("strong",null,"Starring"),": ",z?j(z):null),l.a.createElement("p",null,l.a.createElement("strong",null,"Genres"),": ",W?j(W):""),l.a.createElement("p",null,l.a.createElement("strong",null,"Writers"),": ",R?j(R):""),l.a.createElement("p",null,l.a.createElement("strong",null,"Director"),": ",N?j(N):""),l.a.createElement("p",null,l.a.createElement("strong",null,"Related"),": ",T?j(T):""),l.a.createElement("p",null,l.a.createElement("span",null,"Sources"),": ",l.a.createElement("span",{style:{paddingRight:"5px",display:"inline"}}),l.a.createElement("a",{href:"https://archive.org/details/"+O.identifier,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"Archive.org"),l.a.createElement("span",{style:{paddingRight:"10px",display:"inline"}}),l.a.createElement("a",{href:"https://www.wikidata.org/wiki/"+C,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"WikiData"),l.a.createElement("span",{style:{paddingRight:"10px",display:"inline"}}),l.a.createElement("a",{href:"https://www.wikidata.org/wiki/"+C,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"Wikipedia"),l.a.createElement("span",{style:{paddingRight:"10px",display:"inline"}}),l.a.createElement("a",{href:"https://www.imdb.com/title/"+I,target:"_Blank",rel:"noopener noreferrer nofollow no-follow",className:"detail-tags"},"IMDB")),l.a.createElement(m.a,{bottom:"50px"}),l.a.createElement(c.a,{to:P?"/watch/"+window.btoa(I):null},l.a.createElement(y.a,{type:"primary",block:!0,icon:"caret-right",size:"large"},"Play"))),l.a.createElement(m.a,{bottom:"10vh"})):null)))}))}}]);