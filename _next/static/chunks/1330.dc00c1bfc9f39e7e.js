"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1330],{17187:function(e){var t,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!==e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"===typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}v(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&v(e,"error",t,n)}(e,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function c(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function a(e,t,n,r){var i,o,s,a;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"===typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=u(e))>0&&s.length>i&&!s.warned){s.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=s.length,a=h,console&&console.warn&&console.warn(a)}return e}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=h.bind(r);return i.listener=n,r.wrapFn=i,i}function l(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):d(i,i.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function d(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var c=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw c.context=s,c}var u=o[e];if(void 0===u)return!1;if("function"===typeof u)r(u,this,t);else{var a=u.length,h=d(u,a);for(n=0;n<a;++n)r(h[n],this,t)}return!0},o.prototype.addListener=function(e,t){return a(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return a(this,e,t,!0)},o.prototype.once=function(e,t){return c(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return l(this,e,!0)},o.prototype.rawListeners=function(e){return l(this,e,!1)},o.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},61330:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function o(e){return i(e)}function s(e,t,n){return s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},s(e,t,n)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.r(t),n.d(t,{eip1193:function(){return j},hooks:function(){return R}});var a=n(828);function h(e,t){return!t||"object"!==((n=t)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t;var n}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}var l=n(17187),p=n.n(l),d=n(1581),v=n(6881),y=n(16441),g=n(82169),m=n(19485);var _=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};const w=new d.Yd("experimental/5.7.0");class b extends(p()){constructor(e,t){super(),v.zG(this,"signer",e),v.zG(this,"provider",t||null)}request(e){return this.send(e.method,e.params||[])}send(e,t){return _(this,void 0,void 0,(function*(){function n(n){return w.throwError(n,d.Yd.errors.UNSUPPORTED_OPERATION,{method:e,params:t})}let r=e=>e;switch(e){case"eth_gasPrice":return(yield this.provider.getGasPrice()).toHexString();case"eth_accounts":{const e=[];if(this.signer){const t=yield this.signer.getAddress();e.push(t)}return e}case"eth_blockNumber":return yield this.provider.getBlockNumber();case"eth_chainId":{const e=yield this.provider.getNetwork();return y.$P(e.chainId)}case"eth_getBalance":return(yield this.provider.getBalance(t[0],t[1])).toHexString();case"eth_getStorageAt":return this.provider.getStorageAt(t[0],t[1],t[2]);case"eth_getTransactionCount":{const e=yield this.provider.getTransactionCount(t[0],t[1]);return y.$P(e)}case"eth_getBlockTransactionCountByHash":case"eth_getBlockTransactionCountByNumber":{const e=yield this.provider.getBlock(t[0]);return y.$P(e.transactions.length)}case"eth_getCode":return yield this.provider.getCode(t[0],t[1]);case"eth_sendRawTransaction":return yield this.provider.sendTransaction(t[0]);case"eth_call":{const e=g.r.hexlifyTransaction(t[0]);return yield this.provider.call(e,t[1])}case"estimateGas":{t[1]&&"latest"!==t[1]&&n("estimateGas does not support blockTag");const e=g.r.hexlifyTransaction(t[0]);return(yield this.provider.estimateGas(e)).toHexString()}case"eth_getBlockByHash":case"eth_getBlockByNumber":return t[1]?yield this.provider.getBlockWithTransactions(t[0]):yield this.provider.getBlock(t[0]);case"eth_getTransactionByHash":return yield this.provider.getTransaction(t[0]);case"eth_getTransactionReceipt":return yield this.provider.getTransactionReceipt(t[0]);case"eth_sign":if(!this.signer)return n("eth_sign requires an account");return(yield this.signer.getAddress())!==m.getAddress(t[0])&&w.throwArgumentError("account mismatch or account not found","params[0]",t[0]),this.signer.signMessage(y.lE(t[1]));case"eth_sendTransaction":{if(!this.signer)return n("eth_sendTransaction requires an account");const e=g.r.hexlifyTransaction(t[0]);return(yield this.signer.sendTransaction(e)).hash}case"eth_getUncleCountByBlockHash":case"eth_getUncleCountByBlockNumber":r=y.$P}if(this.provider.send){return r(yield this.provider.send(e,t))}return n(`unsupported method: ${e}`)}))}}var L=n(77985),O=n(98480),E=n(80234),P=function(e){u(n,e);var t=f(n);function n(){return r(this,n),t.apply(this,arguments)}return n.prototype.request=function(e){return"eth_requestAccounts"===e.method||"eth_accounts"===e.method?Promise.resolve([]):(t=o(n.prototype),r="request",i=this,s(t,r,i)).call(this,e);var t,r,i},n}(b),x=new g.r(E.ns[1][0],1),C=new P(x.getSigner(),x),T=(0,a.Z)((0,L.initializeConnector)((function(e){return new O.EIP1193({actions:e,provider:C})})),2),j=T[0],R=T[1]},98480:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.EIP1193=void 0;const i=n(52538);function o(e){return"string"===typeof e?Number.parseInt(e,16):e}class s extends i.Connector{constructor({actions:e,provider:t,onError:n}){super(e,n),this.provider=t,this.provider.on("connect",(({chainId:e})=>{this.actions.update({chainId:o(e)})})),this.provider.on("disconnect",(e=>{var t;this.actions.resetState(),null===(t=this.onError)||void 0===t||t.call(this,e)})),this.provider.on("chainChanged",(e=>{this.actions.update({chainId:o(e)})})),this.provider.on("accountsChanged",(e=>{this.actions.update({accounts:e})}))}connectEagerly(){return r(this,void 0,void 0,(function*(){const e=this.actions.startActivation();return Promise.all([this.provider.request({method:"eth_chainId"}),this.provider.request({method:"eth_accounts"})]).then((([e,t])=>{this.actions.update({chainId:o(e),accounts:t})})).catch((t=>{throw e(),t}))}))}activate(){return r(this,void 0,void 0,(function*(){const e=this.actions.startActivation();return Promise.all([this.provider.request({method:"eth_chainId"}),this.provider.request({method:"eth_requestAccounts"}).catch((()=>this.provider.request({method:"eth_accounts"})))]).then((([e,t])=>{this.actions.update({chainId:o(e),accounts:t})})).catch((t=>{throw e(),t}))}))}}t.EIP1193=s}}]);