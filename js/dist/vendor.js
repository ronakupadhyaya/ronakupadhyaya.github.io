!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.baffle=e():t.baffle=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(2),r=function(t){return t&&t.__esModule?t:{default:t}}(i);t.exports=r.default},function(t,e){"use strict";function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function i(t,e){return t.split("").map(e).join("")}function r(t){return t[Math.floor(Math.random()*t.length)]}function o(t,e){for(var n=0,i=t.length;n<i;n++)e(t[n],n)}function a(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return!1!==t})}function s(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.mapString=i,e.sample=r,e.each=o,e.getTruthyIndices=a,e.getElements=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(3),a=function(t){return t&&t.__esModule?t:{default:t}}(o),s={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},u=function(){function t(e,n){i(this,t),this.options=(0,r.extend)(Object.create(s),n),this.elements=(0,r.getElements)(e).map(a.default),this.running=!1}return t.prototype.once=function(){var t=this;return(0,r.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,r.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,r.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,r.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=e/this.options.speed||1,o=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,r.each)(e,function(e){var n=Math.ceil(e.value.length/i);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,r.each)(t.elements,function(t){return t.init()}))},t.options.speed)};return setTimeout(o,n),this},t}();e.default=function(t,e){return new u(t,e)}},function(t,e,n){"use strict";function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),s=function(){function t(e){o(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,a.mapString)(this.value,function(i,r){return n.indexOf(i)>-1?i:t.bitmap[r]?(0,a.sample)(e):i}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,a.getTruthyIndices)(this.bitmap);this.bitmap[(0,a.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}(),u=function(t){function e(n){o(this,e);var r=i(this,t.call(this,n.textContent));return r.element=n,r}return r(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(s);e.default=function(t){return new u(t)}}])}),function(t,e){var n=function(t,e){"use strict";if(e.getElementsByClassName){var n,i=e.documentElement,r=t.Date,o=t.HTMLPictureElement,a=t.addEventListener,s=t.setTimeout,u=t.requestAnimationFrame||s,l=t.requestIdleCallback,c=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],d={},h=Array.prototype.forEach,p=function(t,e){return d[e]||(d[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),d[e].test(t.getAttribute("class")||"")&&d[e]},v=function(t,e){p(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},m=function(t,e){var n;(n=p(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(n," "))},g=function(t,e,n){var i=n?"addEventListener":"removeEventListener";n&&g(t,e),f.forEach(function(n){t[i](n,e)})},y=function(t,n,i,r,o){var a=e.createEvent("CustomEvent");return a.initCustomEvent(n,!r,!o,i||{}),t.dispatchEvent(a),a},b=function(e,i){var r;!o&&(r=t.picturefill||n.pf)?r({reevaluate:!0,elements:[e]}):i&&i.src&&(e.src=i.src)},z=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},A=function(){var t,n,i=[],r=[],o=i,a=function(){var e=o;for(o=i.length?r:i,t=!0,n=!1;e.length;)e.shift()();t=!1},l=function(i,r){t&&!r?i.apply(this,arguments):(o.push(i),n||(n=!0,(e.hidden?s:u)(a)))};return l._lsFlush=a,l}(),E=function(t,e){return e?function(){A(t)}:function(){var e=this,n=arguments;A(function(){t.apply(e,n)})}},x=function(t){var e,n=0,i=666,o=function(){e=!1,n=r.now(),t()},a=l?function(){l(o,{timeout:i}),666!==i&&(i=666)}:E(function(){s(o)},!0);return function(t){var o;(t=!0===t)&&(i=44),e||(e=!0,o=125-(r.now()-n),o<0&&(o=0),t||o<9&&l?a():s(a,o))}},w=function(t){var e,n,i=function(){e=null,t()},o=function(){var t=r.now()-n;t<99?s(o,99-t):(l||i)(i)};return function(){n=r.now(),e||(e=s(o,99))}},_=function(){var o,u,l,f,d,C,_,N,O,L,j,T,S,P,W,I=/^img$/i,B=/^iframe$/i,F="onscroll"in t&&!/glebot/.test(navigator.userAgent),R=0,k=0,$=-1,D=function(t){k--,t&&t.target&&g(t.target,D),(!t||k<0||!t.target)&&(k=0)},H=function(t,n){var r,o=t,a="hidden"==z(e.body,"visibility")||"hidden"!=z(t,"visibility");for(O-=n,T+=n,L-=n,j+=n;a&&(o=o.offsetParent)&&o!=e.body&&o!=i;)(a=(z(o,"opacity")||1)>0)&&"visible"!=z(o,"overflow")&&(r=o.getBoundingClientRect(),a=j>r.left&&L<r.right&&T>r.top-1&&O<r.bottom+1);return a},q=function(){var t,r,a,s,c,f,h,p,v;if((d=n.loadMode)&&k<8&&(t=o.length)){r=0,$++,null==P&&("expand"in n||(n.expand=i.clientHeight>500&&i.clientWidth>500?500:370),S=n.expand,P=S*n.expFactor),R<P&&k<1&&$>2&&d>2&&!e.hidden?(R=P,$=0):R=d>1&&$>1&&k<6?S:0;for(;r<t;r++)if(o[r]&&!o[r]._lazyRace)if(F)if((p=o[r].getAttribute("data-expand"))&&(f=1*p)||(f=R),v!==f&&(_=innerWidth+f*W,N=innerHeight+f,h=-1*f,v=f),a=o[r].getBoundingClientRect(),(T=a.bottom)>=h&&(O=a.top)<=N&&(j=a.right)>=h*W&&(L=a.left)<=_&&(T||j||L||O)&&(l&&k<3&&!p&&(d<3||$<4)||H(o[r],f))){if(Y(o[r]),c=!0,k>9)break}else!c&&l&&!s&&k<4&&$<4&&d>2&&(u[0]||n.preloadAfterLoad)&&(u[0]||!p&&(T||j||L||O||"auto"!=o[r].getAttribute(n.sizesAttr)))&&(s=u[0]||o[r]);else Y(o[r]);s&&!c&&Y(s)}},G=x(q),J=function(t){v(t.target,n.loadedClass),m(t.target,n.loadingClass),g(t.target,Q)},K=E(J),Q=function(t){K({target:t.target})},U=function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}},V=function(t){var e,i,r=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),r&&t.setAttribute("srcset",r),e&&(i=t.parentNode,i.insertBefore(t.cloneNode(),t),i.removeChild(t))},X=E(function(t,e,i,r,o){var a,u,l,d,p,z;(p=y(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(i?v(t,n.autosizesClass):t.setAttribute("sizes",r)),u=t.getAttribute(n.srcsetAttr),a=t.getAttribute(n.srcAttr),o&&(l=t.parentNode,d=l&&c.test(l.nodeName||"")),z=e.firesLoad||"src"in t&&(u||a||d),p={target:t},z&&(g(t,D,!0),clearTimeout(f),f=s(D,2500),v(t,n.loadingClass),g(t,Q,!0)),d&&h.call(l.getElementsByTagName("source"),V),u?t.setAttribute("srcset",u):a&&!d&&(B.test(t.nodeName)?U(t,a):t.src=a),(u||d)&&b(t,{src:a})),t._lazyRace&&delete t._lazyRace,m(t,n.lazyClass),A(function(){(!z||t.complete&&t.naturalWidth>1)&&(z?D(p):k--,J(p))},!0)}),Y=function(t){var e,i=I.test(t.nodeName),r=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),o="auto"==r;(!o&&l||!i||!t.src&&!t.srcset||t.complete||p(t,n.errorClass))&&(e=y(t,"lazyunveilread").detail,o&&M.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,k++,X(t,e,o,r,i))},Z=function(){if(!l){if(r.now()-C<999)return void s(Z,999);var t=w(function(){n.loadMode=3,G()});l=!0,n.loadMode=3,G(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),t()},!0)}};return{_:function(){C=r.now(),o=e.getElementsByClassName(n.lazyClass),u=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),W=n.hFac,a("scroll",G,!0),a("resize",G,!0),t.MutationObserver?new MutationObserver(G).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",G,!0),i.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),a("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,G,!0)}),/d$|^c/.test(e.readyState)?Z():(a("load",Z),e.addEventListener("DOMContentLoaded",G),s(Z,2e4)),o.length?(q(),A._lsFlush()):G()},checkElems:G,unveil:Y}}(),M=function(){var t,i=E(function(t,e,n,i){var r,o,a;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),c.test(e.nodeName||""))for(r=e.getElementsByTagName("source"),o=0,a=r.length;o<a;o++)r[o].setAttribute("sizes",i);n.detail.dataAttr||b(t,n.detail)}),r=function(t,e,n){var r,o=t.parentNode;o&&(n=C(t,o,n),r=y(t,"lazybeforesizes",{width:n,dataAttr:!!e}),r.defaultPrevented||(n=r.detail.width)&&n!==t._lazysizesWidth&&i(t,o,r,n))},o=function(){var e,n=t.length;if(n)for(e=0;e<n;e++)r(t[e])},s=w(o);return{_:function(){t=e.getElementsByClassName(n.autosizesClass),a("resize",s)},checkElems:s,updateElem:r}}(),N=function(){N.i||(N.i=!0,M._(),_._())};return function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=t.lazySizesConfig||t.lazysizesConfig||{};for(e in i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,s(function(){n.init&&N()})}(),{cfg:n,autoSizer:M,loader:_,init:N,uP:b,aC:v,rC:m,hC:p,fire:y,gW:C,rAF:A}}}(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window);
