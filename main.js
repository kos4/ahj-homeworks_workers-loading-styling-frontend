(()=>{"use strict";class r{constructor(r){this.container=r}init(){this.update()}update(){this.container.querySelector(".news__btn-update").addEventListener("click",(()=>{window.location.reload()}))}renderNews(e){if(!Array.isArray(e))return;const n=this.container.querySelector(".news__list");n.innerHTML="",e.forEach((e=>{n.insertAdjacentHTML("beforeend",r.markupItem(e))}))}offline(){this.container.insertAdjacentHTML("beforeend",r.markupOffline())}static markupOffline(){return'\n      <div class="news__offline">\n        <div class="news__offline-text">\n          Не удалось загрузить данные.<br>\n          Проверьте подключение<br>\n          и обновить страницу.\n        </div>\n      </div>\n    '}static markupItem(r){return`\n      <div class="news__item">\n        <div class="news__title">${r.title}</div>\n        <div class="news__flex-block">\n          <picture class="news__picture">\n            <img src="${r.image}" alt="${r.title}" class="news__image">\n          </picture>\n          <div class="news__announcement">${r.announcement}</div>\n        </div>\n      </div>\n    `}}var e=function(r,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])},e(r,n)};function n(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=r}e(r,n),r.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var t=function(){return t=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},t.apply(this,arguments)};function o(r,e,n,t){return new(n||(n=Promise))((function(o,i){function u(r){try{c(t.next(r))}catch(r){i(r)}}function s(r){try{c(t.throw(r))}catch(r){i(r)}}function c(r){var e;r.done?o(r.value):(e=r.value,e instanceof n?e:new n((function(r){r(e)}))).then(u,s)}c((t=t.apply(r,e||[])).next())}))}function i(r,e){var n,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(u=0)),u;)try{if(n=1,t&&(o=2&s[0]?t.return:s[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,s[1])).done)return o;switch(t=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,t=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=e.call(r,u)}catch(r){s=[6,r],t=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}Object.create;function u(r){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&r[e],t=0;if(n)return n.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,i=n.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(t=i.next()).done;)u.push(t.value)}catch(r){o={error:r}}finally{try{t&&!t.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function c(r,e,n){if(n||2===arguments.length)for(var t,o=0,i=e.length;o<i;o++)!t&&o in e||(t||(t=Array.prototype.slice.call(e,0,o)),t[o]=e[o]);return r.concat(t||Array.prototype.slice.call(e))}function a(r){return this instanceof a?(this.v=r,this):new a(r)}function l(r,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,o=n.apply(r,e||[]),i=[];return t={},u("next"),u("throw"),u("return",(function(r){return function(e){return Promise.resolve(e).then(r,l)}})),t[Symbol.asyncIterator]=function(){return this},t;function u(r,e){o[r]&&(t[r]=function(e){return new Promise((function(n,t){i.push([r,e,n,t])>1||s(r,e)}))},e&&(t[r]=e(t[r])))}function s(r,e){try{(n=o[r](e)).value instanceof a?Promise.resolve(n.value.v).then(c,l):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function c(r){s("next",r)}function l(r){s("throw",r)}function f(r,e){r(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function f(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=r[Symbol.asyncIterator];return n?n.call(r):(r=u(r),e={},t("next"),t("throw"),t("return"),e[Symbol.asyncIterator]=function(){return this},e);function t(n){e[n]=r[n]&&function(e){return new Promise((function(t,o){(function(r,e,n,t){Promise.resolve(t).then((function(e){r({value:e,done:n})}),e)})(t,o,(e=r[n](e)).done,e.value)}))}}}Object.create;"function"==typeof SuppressedError&&SuppressedError;function p(r){return"function"==typeof r}function d(r){return function(e){if(function(r){return p(null==r?void 0:r.lift)}(e))return e.lift((function(e){try{return r(e,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}function h(r){var e=r((function(r){Error.call(r),r.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var v=h((function(r){return function(e){r(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(r,e){return e+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function y(r,e){if(r){var n=r.indexOf(e);0<=n&&r.splice(n,1)}}var b=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return r.prototype.unsubscribe=function(){var r,e,n,t,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var a=u(i),l=a.next();!l.done;l=a.next()){l.value.remove(this)}}catch(e){r={error:e}}finally{try{l&&!l.done&&(e=a.return)&&e.call(a)}finally{if(r)throw r.error}}else i.remove(this);var f=this.initialTeardown;if(p(f))try{f()}catch(r){o=r instanceof v?r.errors:[r]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var h=u(d),y=h.next();!y.done;y=h.next()){var b=y.value;try{m(b)}catch(r){o=null!=o?o:[],r instanceof v?o=c(c([],s(o)),s(r.errors)):o.push(r)}}}catch(r){n={error:r}}finally{try{y&&!y.done&&(t=h.return)&&t.call(h)}finally{if(n)throw n.error}}}if(o)throw new v(o)}},r.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)m(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}},r.prototype._hasParent=function(r){var e=this._parentage;return e===r||Array.isArray(e)&&e.includes(r)},r.prototype._addParent=function(r){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(r),e):e?[e,r]:r},r.prototype._removeParent=function(r){var e=this._parentage;e===r?this._parentage=null:Array.isArray(e)&&y(e,r)},r.prototype.remove=function(e){var n=this._finalizers;n&&y(n,e),e instanceof r&&e._removeParent(this)},r.EMPTY=((e=new r).closed=!0,e),r}();b.EMPTY;function w(r){return r instanceof b||r&&"closed"in r&&p(r.remove)&&p(r.add)&&p(r.unsubscribe)}function m(r){p(r)?r():r.unsubscribe()}var g={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},x={setTimeout:function(r,e){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var o=x.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,c([r,e],s(n))):setTimeout.apply(void 0,c([r,e],s(n)))},clearTimeout:function(r){var e=x.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function _(r){x.setTimeout((function(){var e=g.onUnhandledError;if(!e)throw r;e(r)}))}function S(){}var E=T("C",void 0,void 0);function T(r,e,n){return{kind:r,value:e,error:n}}var P=null;var O=function(r){function e(e){var n=r.call(this)||this;return n.isStopped=!1,e?(n.destination=e,w(e)&&e.add(n)):n.destination=I,n}return n(e,r),e.create=function(r,e,n){return new L(r,e,n)},e.prototype.next=function(r){this.isStopped?H(function(r){return T("N",r,void 0)}(r),this):this._next(r)},e.prototype.error=function(r){this.isStopped?H(T("E",void 0,r),this):(this.isStopped=!0,this._error(r))},e.prototype.complete=function(){this.isStopped?H(E,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(r){this.destination.next(r)},e.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(b),j=Function.prototype.bind;function k(r,e){return j.call(r,e)}var A=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var e=this.partialObserver;if(e.next)try{e.next(r)}catch(r){R(r)}},r.prototype.error=function(r){var e=this.partialObserver;if(e.error)try{e.error(r)}catch(r){R(r)}else R(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){R(r)}},r}(),L=function(r){function e(e,n,t){var o,i,u=r.call(this)||this;p(e)||!e?o={next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=t?t:void 0}:u&&g.useDeprecatedNextContext?((i=Object.create(e)).unsubscribe=function(){return u.unsubscribe()},o={next:e.next&&k(e.next,i),error:e.error&&k(e.error,i),complete:e.complete&&k(e.complete,i)}):o=e;return u.destination=new A(o),u}return n(e,r),e}(O);function R(r){var e;g.useDeprecatedSynchronousErrorHandling?(e=r,g.useDeprecatedSynchronousErrorHandling&&P&&(P.errorThrown=!0,P.error=e)):_(r)}function H(r,e){var n=g.onStoppedNotification;n&&x.setTimeout((function(){return n(r,e)}))}var I={closed:!0,next:S,error:function(r){throw r},complete:S};function U(r,e,n,t,o){return new q(r,e,n,t,o)}var q=function(r){function e(e,n,t,o,i,u){var s=r.call(this,e)||this;return s.onFinalize=i,s.shouldUnsubscribe=u,s._next=n?function(r){try{n(r)}catch(r){e.error(r)}}:r.prototype._next,s._error=o?function(r){try{o(r)}catch(r){e.error(r)}finally{this.unsubscribe()}}:r.prototype._error,s._complete=t?function(){try{t()}catch(r){e.error(r)}finally{this.unsubscribe()}}:r.prototype._complete,s}return n(e,r),e.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;r.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},e}(O);function N(r,e){return d((function(n,t){var o=0;n.subscribe(U(t,(function(n){t.next(r.call(e,n,o++))})))}))}var D="function"==typeof Symbol&&Symbol.observable||"@@observable";function C(r){return r}function z(r){return 0===r.length?C:1===r.length?r[0]:function(e){return r.reduce((function(r,e){return e(r)}),e)}}var M=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(e){var n=new r;return n.source=this,n.operator=e,n},r.prototype.subscribe=function(r,e,n){var t,o=this,i=(t=r)&&t instanceof O||function(r){return r&&p(r.next)&&p(r.error)&&p(r.complete)}(t)&&w(t)?r:new L(r,e,n);return function(r){if(g.useDeprecatedSynchronousErrorHandling){var e=!P;if(e&&(P={errorThrown:!1,error:null}),r(),e){var n=P,t=n.errorThrown,o=n.error;if(P=null,t)throw o}}else r()}((function(){var r=o,e=r.operator,n=r.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){r.error(e)}},r.prototype.forEach=function(r,e){var n=this;return new(e=F(e))((function(e,t){var o=new L({next:function(e){try{r(e)}catch(r){t(r),o.unsubscribe()}},error:t,complete:e});n.subscribe(o)}))},r.prototype._subscribe=function(r){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(r)},r.prototype[D]=function(){return this},r.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return z(r)(this)},r.prototype.toPromise=function(r){var e=this;return new(r=F(r))((function(r,n){var t;e.subscribe((function(r){return t=r}),(function(r){return n(r)}),(function(){return r(t)}))}))},r.create=function(e){return new r(e)},r}();function F(r){var e;return null!==(e=null!=r?r:g.Promise)&&void 0!==e?e:Promise}function X(r){switch(r.responseType){case"json":if("response"in r)return r.response;var e=r;return JSON.parse(e.responseText);case"document":return r.responseXML;default:return"response"in r?r.response:(e=r).responseText}}var B=function(r,e,n,t){void 0===t&&(t="download_load"),this.originalEvent=r,this.xhr=e,this.request=n,this.type=t;var o=e.status,i=e.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var u=e.getAllResponseHeaders();this.responseHeaders=u?u.split("\n").reduce((function(r,e){var n=e.indexOf(": ");return r[e.slice(0,n)]=e.slice(n+2),r}),{}):{},this.response=X(e);var s=r.loaded,c=r.total;this.loaded=s,this.total=c},G=h((function(r){return function(r,e,n){var t;this.message=r,this.name="AjaxError",this.xhr=e,this.request=n,this.status=e.status,this.responseType=e.responseType;try{t=X(e)}catch(r){t=e.responseText}this.response=t}})),Y=function(){function r(r,e){return G.call(this,"ajax timeout",r,e),this.name="AjaxTimeoutError",this}return r.prototype=Object.create(G.prototype),r}();function $(r,e){return er({method:"GET",url:r,headers:e})}function J(r,e,n){return er({method:"POST",url:r,body:e,headers:n})}function W(r,e){return er({method:"DELETE",url:r,headers:e})}function V(r,e,n){return er({method:"PUT",url:r,body:e,headers:n})}function K(r,e,n){return er({method:"PATCH",url:r,body:e,headers:n})}var Q=N((function(r){return r.response}));function Z(r,e){return Q(er({method:"GET",url:r,headers:e}))}var rr,er=(rr=function(r){var e;return e="string"==typeof r?{url:r}:r,new M((function(r){var n,o,i,u=t({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},e),s=u.queryParams,c=u.body,a=u.headers,l=u.url;if(!l)throw new TypeError("url is required");if(s)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");i=new URLSearchParams(f[1]),new URLSearchParams(s).forEach((function(r,e){return i.set(e,r)})),l=f[0]+"?"+i}else l=l+"?"+(i=new URLSearchParams(s));var p={};if(a)for(var d in a)a.hasOwnProperty(d)&&(p[d.toLowerCase()]=a[d]);var h=u.crossDomain;h||"x-requested-with"in p||(p["x-requested-with"]="XMLHttpRequest");var v=u.withCredentials,y=u.xsrfCookieName,b=u.xsrfHeaderName;if((v||!h)&&y&&b){var w=null!==(o=null===(n=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))||void 0===n?void 0:n.pop())&&void 0!==o?o:"";w&&(p[b]=w)}var m,g=function(r,e){var n;if(!r||"string"==typeof r||function(r){return"undefined"!=typeof FormData&&r instanceof FormData}(r)||function(r){return"undefined"!=typeof URLSearchParams&&r instanceof URLSearchParams}(r)||function(r){return cr(r,"ArrayBuffer")}(r)||function(r){return cr(r,"File")}(r)||function(r){return cr(r,"Blob")}(r)||function(r){return"undefined"!=typeof ReadableStream&&r instanceof ReadableStream}(r))return r;if(function(r){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(r)}(r))return r.buffer;if("object"==typeof r)return e["content-type"]=null!==(n=e["content-type"])&&void 0!==n?n:"application/json;charset=utf-8",JSON.stringify(r);throw new TypeError("Unknown body type")}(c,p),x=t(t({},u),{url:l,headers:p,body:g});m=e.createXHR?e.createXHR():new XMLHttpRequest;var _=e.progressSubscriber,S=e.includeDownloadProgress,E=void 0!==S&&S,T=e.includeUploadProgress,P=void 0!==T&&T,O=function(e,n){m.addEventListener(e,(function(){var e,t=n();null===(e=null==_?void 0:_.error)||void 0===e||e.call(_,t),r.error(t)}))};O("timeout",(function(){return new Y(m,x)})),O("abort",(function(){return new G("aborted",m,x)}));var j=function(r,e){return new B(e,m,x,r+"_"+e.type)},k=function(e,n,t){e.addEventListener(n,(function(e){r.next(j(t,e))}))};P&&[or,ir,ur].forEach((function(r){return k(m.upload,r,nr)})),_&&[or,ir].forEach((function(r){return m.upload.addEventListener(r,(function(r){var e;return null===(e=null==_?void 0:_.next)||void 0===e?void 0:e.call(_,r)}))})),E&&[or,ir].forEach((function(r){return k(m,r,tr)}));var A=function(e){var n="ajax error"+(e?" "+e:"");r.error(new G(n,m,x))};m.addEventListener("error",(function(r){var e;null===(e=null==_?void 0:_.error)||void 0===e||e.call(_,r),A()})),m.addEventListener(ur,(function(e){var n,t,o=m.status;if(o<400){null===(n=null==_?void 0:_.complete)||void 0===n||n.call(_);var i=void 0;try{i=j(tr,e)}catch(e){return void r.error(e)}r.next(i),r.complete()}else null===(t=null==_?void 0:_.error)||void 0===t||t.call(_,e),A(o)}));var L=x.user,R=x.method,H=x.async;for(var d in L?m.open(R,l,H,L,x.password):m.open(R,l,H),H&&(m.timeout=x.timeout,m.responseType=x.responseType),"withCredentials"in m&&(m.withCredentials=x.withCredentials),p)p.hasOwnProperty(d)&&m.setRequestHeader(d,p[d]);return g?m.send(g):m.send(),function(){m&&4!==m.readyState&&m.abort()}}))},rr.get=$,rr.post=J,rr.delete=W,rr.put=V,rr.patch=K,rr.getJSON=Z,rr),nr="upload",tr="download",or="loadstart",ir="progress",ur="load";var sr=Object.prototype.toString;function cr(r,e){return sr.call(r)==="[object "+e+"]"}var ar=function(r){return r&&"number"==typeof r.length&&"function"!=typeof r};function lr(r){return p(null==r?void 0:r.then)}function fr(r){return p(r[D])}function pr(r){return Symbol.asyncIterator&&p(null==r?void 0:r[Symbol.asyncIterator])}function dr(r){return new TypeError("You provided "+(null!==r&&"object"==typeof r?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var hr="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function vr(r){return p(null==r?void 0:r[hr])}function yr(r){return l(this,arguments,(function(){var e,n,t;return i(this,(function(o){switch(o.label){case 0:e=r.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,a(e.read())];case 3:return n=o.sent(),t=n.value,n.done?[4,a(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,a(t)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function br(r){return p(null==r?void 0:r.getReader)}function wr(r){if(r instanceof M)return r;if(null!=r){if(fr(r))return o=r,new M((function(r){var e=o[D]();if(p(e.subscribe))return e.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(ar(r))return t=r,new M((function(r){for(var e=0;e<t.length&&!r.closed;e++)r.next(t[e]);r.complete()}));if(lr(r))return n=r,new M((function(r){n.then((function(e){r.closed||(r.next(e),r.complete())}),(function(e){return r.error(e)})).then(null,_)}));if(pr(r))return mr(r);if(vr(r))return e=r,new M((function(r){var n,t;try{for(var o=u(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(r.next(s),r.closed)return}}catch(r){n={error:r}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}r.complete()}));if(br(r))return mr(yr(r))}var e,n,t,o;throw dr(r)}function mr(r){return new M((function(e){(function(r,e){var n,t,u,s;return o(this,void 0,void 0,(function(){var o,c;return i(this,(function(i){switch(i.label){case 0:i.trys.push([0,5,6,11]),n=f(r),i.label=1;case 1:return[4,n.next()];case 2:if((t=i.sent()).done)return[3,4];if(o=t.value,e.next(o),e.closed)return[2];i.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=i.sent(),u={error:c},[3,11];case 6:return i.trys.push([6,,9,10]),t&&!t.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:i.sent(),i.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(r,e).catch((function(r){return e.error(r)}))}))}function gr(r){return d((function(e,n){var t,o=null,i=!1;o=e.subscribe(U(n,void 0,void 0,(function(u){t=wr(r(u,gr(r)(e))),o?(o.unsubscribe(),o=null,t.subscribe(n)):i=!0}))),i&&(o.unsubscribe(),o=null,t.subscribe(n))}))}function xr(r){return r[r.length-1]}function _r(r){return(e=xr(r))&&p(e.schedule)?r.pop():void 0;var e}function Sr(r,e,n,t,o){void 0===t&&(t=0),void 0===o&&(o=!1);var i=e.schedule((function(){n(),o?r.add(this.schedule(null,t)):this.unsubscribe()}),t);if(r.add(i),!o)return i}function Er(r,e){return void 0===e&&(e=0),d((function(n,t){n.subscribe(U(t,(function(n){return Sr(t,r,(function(){return t.next(n)}),e)}),(function(){return Sr(t,r,(function(){return t.complete()}),e)}),(function(n){return Sr(t,r,(function(){return t.error(n)}),e)})))}))}function Tr(r,e){return void 0===e&&(e=0),d((function(n,t){t.add(r.schedule((function(){return n.subscribe(t)}),e))}))}function Pr(r,e){if(!r)throw new Error("Iterable cannot be null");return new M((function(n){Sr(n,e,(function(){var t=r[Symbol.asyncIterator]();Sr(n,e,(function(){t.next().then((function(r){r.done?n.complete():n.next(r.value)}))}),0,!0)}))}))}function Or(r,e){if(null!=r){if(fr(r))return function(r,e){return wr(r).pipe(Tr(e),Er(e))}(r,e);if(ar(r))return function(r,e){return new M((function(n){var t=0;return e.schedule((function(){t===r.length?n.complete():(n.next(r[t++]),n.closed||this.schedule())}))}))}(r,e);if(lr(r))return function(r,e){return wr(r).pipe(Tr(e),Er(e))}(r,e);if(pr(r))return Pr(r,e);if(vr(r))return function(r,e){return new M((function(n){var t;return Sr(n,e,(function(){t=r[hr](),Sr(n,e,(function(){var r,e,o;try{e=(r=t.next()).value,o=r.done}catch(r){return void n.error(r)}o?n.complete():n.next(e)}),0,!0)})),function(){return p(null==t?void 0:t.return)&&t.return()}}))}(r,e);if(br(r))return function(r,e){return Pr(yr(r),e)}(r,e)}throw dr(r)}function jr(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return function(r,e){return e?Or(r,e):wr(r)}(r,_r(r))}const kr=document.querySelector(".news__container"),Ar=new class{constructor(){this.host="https://ahj-homeworks-workers-loading-styling.onrender.com"}getNews(e){const n=new r(e);this.createRequest("/",e).subscribe({next:r=>n.renderNews(r.news),error:r=>console.log(r)})}createRequest(e,n){return er({url:this.host+e,crossDomain:!0}).pipe(N((r=>r.response)),gr((e=>{console.log("error: ",e);return new r(n).offline(),jr([])})))}};new r(kr).init(),Ar.getNews(kr),navigator.serviceWorker&&window.addEventListener("load",(async()=>{try{navigator.serviceWorker&&(await navigator.serviceWorker.register("./service-worker.js"),console.log("sw registered"))}catch(r){console.log(r)}}))})();