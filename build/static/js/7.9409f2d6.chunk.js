(this["webpackJsonpcinedantan.com"]=this["webpackJsonpcinedantan.com"]||[]).push([[7],{233:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i(0),o=i.n(n);function r(e){var t=e.top,i=e.bottom;return o.a.createElement("div",{style:{marginTop:t||"50px",marginBottom:i||"0"}})}},234:function(e,t,i){"use strict";var n=i(0),o=i.n(n),r=i(232),s=i.n(r),a=i(30),l=i(242),c=i.n(l),d=i(33),u=i(24),p=i(11),h=i(25),f=i(60);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var m=o.a.memo((function(e){var t=e.addFavorites,i=e.imdb,n=e.favorites;return o.a.createElement("div",{onClick:function(){return t(i)}},function(e,t){return!!t&&t.indexOf(e)>-1}(i,n)?o.a.createElement(p.a,{type:"heart",style:{fontSize:"40px",color:"rgba(255,255,255,1)"},theme:"twoTone",twoToneColor:"white",className:"glitch"}):o.a.createElement("p",{className:"add-to-my-list"},"+ My List"))})),y=Object(h.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){Object(u.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e)}),(function(e){return{addFavorites:function(t){return e(Object(f.a)(t))}}}))(m),b=i(315);i.d(t,"a",(function(){return g}));var w=function(e){var t=e.identifier,i=e.isDetail;return o.a.createElement(c.a,{src:Object(d.a)(t,!1,"xs"),decode:!1,className:"slider-content-img",style:{height:i?"auto":"45vh",objectFit:i?"":"contain",filter:"blur(2px)"}})};function g(e){var t=e.data,i=e.isDetail,n=t.identifier,r=t.imdb,l=t.rating,u=i?"/watch/"+window.btoa(r):r?"/details/"+window.btoa(r):"#";return o.a.createElement(s.a,null," ",o.a.createElement("div",{className:"dvd-box"},o.a.createElement("div",{style:{height:i?"70vh":"50vh",width:"auto",textAlign:"center"}},o.a.createElement(a.a,{to:u},o.a.createElement(c.a,{src:Object(d.a)(n,!0),loader:o.a.createElement(w,{identifier:n,isDetail:i}),decode:!1,className:"slider-content-img",style:{height:i?"auto":"45vh",objectFit:i?"":"contain"}}),i&&o.a.createElement("div",{className:"play-button"},o.a.createElement(p.a,{type:"play-circle",style:{fontSize:"100px",color:"white"}})),o.a.createElement("div",{style:{position:"absolute",left:"10%"}},o.a.createElement(b.a,{character:o.a.createElement(p.a,{type:"heart"}),disabled:!0,defaultValue:Math.abs(l/2)}))),o.a.createElement("div",{className:"fav-container"},o.a.createElement(y,{imdb:r}))))," ")}},239:function(e,t,i){"use strict";var n=i(0),o=i.n(n),r=i(232),s=i.n(r),a=i(234),l=i(244),c=i.n(l),d={adaptiveHeight:!1,variableWidth:!1,dots:!1,infinite:!1,speed:1e3,lazyLoad:!0,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1680,settings:{slidesToShow:5,slidesToScroll:4,infinite:!1,dots:!1}},{breakpoint:1480,settings:{slidesToShow:4,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};t.a=function(e){var t=e.posters,i=e.title;return o.a.createElement(s.a,{height:200,offset:100,once:!0},o.a.createElement("div",{style:{width:"100%",overflowX:"hidden",overflowY:"hidden",height:"auto"}},o.a.createElement("div",{style:{paddingLeft:"10vw",opacity:.85,marginTop:"70px"}},o.a.createElement("h1",{"data-text":i,className:"glitch",style:{fontSize:"3.5vh",lineHeight:"5.5vw",color:"white"}},i)),t&&Array.isArray(t)&&t.length>0?o.a.createElement(c.a,d,t.map((function(e,t){return o.a.createElement(a.a,{data:e,key:t+Math.random()})}))):null))}},253:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),n("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var r=Math.log(n),s=(Math.log(o)-r)/(i-t);return Math.exp(r+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",i=h[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var r=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=s=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(c,1500),a||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},295:function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,o=t.right,r=t.up,s=t.down,l=t.top,c=t.bottom,d=t.big,p=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(l||s?4:0)|(c||r?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(f))return u[f];var v=n||o||r||s||l||c,m=void 0,y=void 0;if(v){if(!p!=!(e&&h)){var b=[o,n,c,l,s,r];n=b[0],o=b[1],l=b[2],c=b[3],r=b[4],s=b[5]}var w=i||(d?"2000px":"100%");m=n?"-"+w:o?w:"0",y=s||l?"-"+w:r||c?w:"0"}return u[f]=(0,a.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,o=(e.out,e.forever),r=e.timeout,s=e.duration,l=void 0===s?a.defaults.duration:s,d=e.delay,u=void 0===d?a.defaults.delay:d,p=e.count,h=void 0===p?a.defaults.count:p,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===r?l:r,delay:u,forever:o,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,c.default)(f,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var r,s=i(1),a=i(253),l=i(296),c=(r=l)&&r.__esModule?r:{default:r},d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},u={};o.propTypes=d,t.default=o,e.exports=t.default},296:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),r.default.Children.count(n)<2?r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=r.default.Children.map(n,(function(n){return r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,n):r.default.createElement("span",null,n))};var r=n(i(0)),s=n(i(297));e.exports=t.default},297:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw r}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(0),c=(n=l)&&n.__esModule?n:{default:n},d=i(1),u=i(253),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,r=i.count,s=i.delay,a=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),s+(a+(t?a:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,r=void 0,s=void 0;if(t.collapseOnly)r=i.duration/3,s=i.delay;else{var a=n>>2,l=a>>1;r=a,s=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+r+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=n.duration,a=n.reverse,l=i.length,d=2*r;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),r=d/2);var p=a?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(a?p--:p++,0,l,r,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,r=n.className,a=n.children,l=this.props.disabled?r:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(i=this.cascade(a),d=s({},o,{opacity:1})):d=this.props.disabled?o:s({},o,this.state.style);var p=s({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?i||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},314:function(e,t,i){"use strict";i.r(t);var n=i(24),o=i(0),r=i.n(o),s=i(25),a=i(239),l=i(233),c=i(99),d=i(295),u=i.n(d),p=i(33);function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}t.default=Object(s.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e)}),(function(e){return{}}))((function(e){var t=e.movies,i=e.moviesCats,n=e.viewingHistory,o=e.favorites,s=n.map((function(e){if(e.played<=.97)return e.imdb})),d=s&&Array.isArray(s)&&s[0],h=o&&Array.isArray(o)&&t&&Array.isArray(t)?Object(p.b)(o,t).map((function(e){return e.related})):[],f=[].concat.apply([],h).filter((function(e){return o.indexOf(e)<0})),v=Object(p.b)(f,t);return r.a.createElement("div",{className:"catalog-screen",style:{maxWidth:"100%"}},r.a.createElement(c.a,null),r.a.createElement("div",{className:"page-border-top"}),d&&r.a.createElement("div",null,r.a.createElement(l.a,{top:"5vh"}),r.a.createElement(a.a,{posters:Object(p.b)(s,t),title:"To be continued"})),v&&v.length>2&&r.a.createElement("div",null,r.a.createElement(l.a,{top:"5vh"}),r.a.createElement(a.a,{posters:v,title:"You might like"})),r.a.createElement(u.a,{top:!0},r.a.createElement(l.a,{top:d||v?"3vh":"5vh"}),i.map((function(e,i){return r.a.createElement(a.a,{key:i,posters:Object(p.e)(t.filter((function(t){return t.genre.indexOf(e)>-1})),"rating"),title:e})})),r.a.createElement(l.a,{top:"6.9vh"})))}))}}]);