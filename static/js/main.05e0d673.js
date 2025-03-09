/*! For license information please see main.05e0d673.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:s.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+T(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(j,"$&/")+"/"),R(a,t,i,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+T(s=e[u],u);l+=R(s,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=R(s=s.value,t,i,c=o+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function D(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},z={transition:null},O={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:D,forEach:function(e,t,n){D(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return _.current.useCallback(e,t)},t.useContext=function(e){return _.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return _.current.useDeferredValue(e)},t.useEffect=function(e,t){return _.current.useEffect(e,t)},t.useId=function(){return _.current.useId()},t.useImperativeHandle=function(e,t,n){return _.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return _.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return _.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return _.current.useMemo(e,t)},t.useReducer=function(e,t,n){return _.current.useReducer(e,t,n)},t.useRef=function(e){return _.current.useRef(e)},t.useState=function(e){return _.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return _.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return _.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<i&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,z(S);else{var t=r(c);null!==t&&O(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(P),P=-1),f=!0;var o=h;try{for(x(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!R());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(u)&&i(u),x(n)}else i(u);p=r(u)}if(null!==p)var l=!0;else{var d=r(c);null!==d&&O(w,d.startTime-n),l=!1}return l}finally{p=null,h=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,C=null,P=-1,j=5,T=-1;function R(){return!(t.unstable_now()-T<j)}function D(){if(null!==C){var e=t.unstable_now();T=e;var n=!0;try{n=C(!0,e)}finally{n?k():(E=!1,C=null)}}else E=!1}if("function"===typeof b)k=function(){b(D)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,_=A.port2;A.port1.onmessage=D,k=function(){_.postMessage(null)}}else k=function(){v(D,0)};function z(e){C=e,E||(E=!0,k())}function O(e,n){P=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,z(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(P),P=-1):g=!0,O(w,o-a))):(e.sortIndex=s,n(u,e),m||f||(m=!0,z(S))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var L,F=Object.assign;function N(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var I=!1;function V(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function B(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case R:return"Suspense";case D:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ce(e){if(e=bi(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function Pe(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function je(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Te(e,t){return e(t)}function Re(){}var De=!1;function Ae(e,t,n){if(De)return e(t,n);De=!0;try{return Te(e,t,n)}finally{De=!1,(null!==ke||null!==Ee)&&(Re(),je())}}function _e(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var ze=!1;if(c)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ce){ze=!1}function Me(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Le=!1,Fe=null,Ne=!1,Ie=null,Ve={onError:function(e){Le=!0,Fe=e}};function Be(e,t,n,r,i,o,a,s,l){Le=!1,Fe=null,Me.apply(Ve,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return We(i),e;if(a===r)return We(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Qe=i.unstable_cancelCallback,Xe=i.unstable_shouldYield,Ge=i.unstable_requestPaint,qe=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,Ct,Pt=!1,jt=[],Tt=null,Rt=null,Dt=null,At=new Map,_t=new Map,zt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_t.delete(t.pointerId)}}function Lt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ft(e){var t=yi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$e(n)))return e.blockedOn=t,void Ct(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function It(e,t,n){Nt(e)&&n.delete(t)}function Vt(){Pt=!1,null!==Tt&&Nt(Tt)&&(Tt=null),null!==Rt&&Nt(Rt)&&(Rt=null),null!==Dt&&Nt(Dt)&&(Dt=null),At.forEach(It),_t.forEach(It)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<jt.length){Bt(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Bt(Tt,e),null!==Rt&&Bt(Rt,e),null!==Dt&&Bt(Dt,e),At.forEach(t),_t.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Ft(n),null===n.blockedOn&&zt.shift()}var $t=x.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var i=bt,o=$t.transition;$t.transition=null;try{bt=1,Yt(e,t,n,r)}finally{bt=i,$t.transition=o}}function Kt(e,t,n,r){var i=bt,o=$t.transition;$t.transition=null;try{bt=4,Yt(e,t,n,r)}finally{bt=i,$t.transition=o}}function Yt(e,t,n,r){if(Wt){var i=Xt(e,t,n,r);if(null===i)Wr(e,t,r,Qt,n),Mt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=Lt(Tt,e,t,n,r,i),!0;case"dragenter":return Rt=Lt(Rt,e,t,n,r,i),!0;case"mouseover":return Dt=Lt(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return At.set(o,Lt(At.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_t.set(o,Lt(_t.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==i;){var o=bi(i);if(null!==o&&wt(o),null===(o=Xt(e,t,n,r))&&Wr(e,t,r,Qt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function Xt(e,t,n,r){if(Qt=null,null!==(e=yi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in qt?qt.value:qt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=F({},un,{view:0,detail:0}),pn=on(dn),hn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),fn=on(hn),mn=on(F({},hn,{dataTransfer:0})),gn=on(F({},dn,{relatedTarget:0})),vn=on(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return En}var Pn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=on(Pn),Tn=on(F({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=on(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Dn=on(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),An=F({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_n=on(An),zn=[9,13,27,32],On=c&&"CompositionEvent"in window,Mn=null;c&&"documentMode"in document&&(Mn=document.documentMode);var Ln=c&&"TextEvent"in window&&!Mn,Fn=c&&(!On||Mn&&8<Mn&&11>=Mn),Nn=String.fromCharCode(32),In=!1;function Vn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$n[e.type]:"textarea"===t}function Hn(e,t,n,r){Pe(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Yn=null;function Qn(e){Nr(e,0)}function Xn(e){if(Y(xi(e)))return e}function Gn(e,t){if("change"===e)return t}var qn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;qn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Yn=Kn=null)}function nr(e){if("value"===e.propertyName&&Xn(Yn)){var t=[];Hn(t,Yn,e,we(e)),Ae(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Yn)}function or(e,t){if("click"===e)return Xn(t)}function ar(e,t){if("input"===e||"change"===e)return Xn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cr(n,o);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Pr=Cr("animationend"),jr=Cr("animationiteration"),Tr=Cr("animationstart"),Rr=Cr("transitionend"),Dr=new Map,Ar="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){Dr.set(e,t),l(t,[e])}for(var zr=0;zr<Ar.length;zr++){var Or=Ar[zr];_r(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}_r(Pr,"onAnimationEnd"),_r(jr,"onAnimationIteration"),_r(Tr,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(Rr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,u){if(Be.apply(this,arguments),Le){if(!Le)throw Error(o(198));var c=Fe;Le=!1,Fe=null,Ne||(Ne=!0,Ie=c)}}(r,t,void 0,e),e.currentTarget=null}function Nr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Fr(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Fr(i,s,u),o=l}}}if(Ne)throw e=Ie,Ne=!1,Ie=null,e}function Ir(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||($r(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),$r(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,a.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||Vr(t,!1,e),Vr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function $r(e,t,n,r){switch(Gt(t)){case 1:var i=Ht;break;case 4:i=Kt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Ae((function(){var r=o,i=we(n),a=[];e:{var s=Dr.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":u="focus",l=gn;break;case"focusout":u="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Pr:case jr:case Tr:l=vn;break;case Rr:l=Dn;break;case"scroll":l=pn;break;case"wheel":l=_n;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,p=c?null!==s?s+"Capture":null:s;c=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=_e(f,p))&&c.push(Hr(f,m,h)))),d)break;f=f.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!yi(u)&&!u[fi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?yi(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=fn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:xi(l),h=null==u?s:xi(u),(s=new c(m,f+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,yi(i)===r&&((c=new c(p,f+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(p=u,f=0,h=c=l;h;h=Yr(h))f++;for(h=0,m=p;m;m=Yr(m))h++;for(;0<f-h;)c=Yr(c),f--;for(;0<h-f;)p=Yr(p),h--;for(;f--;){if(c===p||null!==p&&c===p.alternate)break e;c=Yr(c),p=Yr(p)}c=null}else c=null;null!==l&&Qr(a,s,l,c,!1),null!==u&&null!==d&&Qr(a,d,u,c,!0)}if("select"===(l=(s=r?xi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Gn;else if(Wn(s))if(qn)g=ar;else{g=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?xi(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(a,n,i)}var y;if(On)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Vn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Fn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(y=en()):(Zt="value"in(qt=i)?qt.value:qt.textContent,Un=!0)),0<(v=Kr(r,b)).length&&(b=new xn(b,e,null,n,i),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=Bn(n))&&(b.data=y))),(y=Ln?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(In=!0,Nn);case"textInput":return(e=t.data)===Nn&&In?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!On&&Vn(e,t)?(e=en(),Jt=Zt=qt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(i=new xn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Nr(a,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=_e(e,n))&&r.unshift(Hr(e,o,i)),null!=(o=_e(e,t))&&r.push(Hr(e,o,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=_e(n,o))&&a.unshift(Hr(n,l,s)):i||null!=(l=_e(n,o))&&a.push(Hr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Xr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function qr(e){return("string"===typeof e?e:""+e).replace(Xr,"\n").replace(Gr,"")}function Zr(e,t,n){if(t=qr(t),qr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,hi="__reactProps$"+di,fi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[pi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[pi]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[hi]||null}var Si=[],ki=-1;function Ei(e){return{current:e}}function Ci(e){0>ki||(e.current=Si[ki],Si[ki]=null,ki--)}function Pi(e,t){ki++,Si[ki]=e.current,e.current=t}var ji={},Ti=Ei(ji),Ri=Ei(!1),Di=ji;function Ai(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _i(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Ci(Ri),Ci(Ti)}function Oi(e,t,n){if(Ti.current!==ji)throw Error(o(168));Pi(Ti,t),Pi(Ri,n)}function Mi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,$(e)||"Unknown",i));return F({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,Di=Ti.current,Pi(Ti,e),Pi(Ri,Ri.current),!0}function Fi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Mi(e,t,Di),r.__reactInternalMemoizedMergedChildContext=e,Ci(Ri),Ci(Ti),Pi(Ti,e)):Ci(Ri),Pi(Ri,n)}var Ni=null,Ii=!1,Vi=!1;function Bi(e){null===Ni?Ni=[e]:Ni.push(e)}function Ui(){if(!Vi&&null!==Ni){Vi=!0;var e=0,t=bt;try{var n=Ni;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ni=null,Ii=!1}catch(i){throw null!==Ni&&(Ni=Ni.slice(e+1)),Ye(Je,Ui),i}finally{bt=t,Vi=!1}}return null}var $i=[],Wi=0,Hi=null,Ki=0,Yi=[],Qi=0,Xi=null,Gi=1,qi="";function Zi(e,t){$i[Wi++]=Ki,$i[Wi++]=Hi,Hi=e,Ki=t}function Ji(e,t,n){Yi[Qi++]=Gi,Yi[Qi++]=qi,Yi[Qi++]=Xi,Xi=e;var r=Gi;e=qi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Gi=1<<32-at(t)+i|n<<i|r,qi=o+e}else Gi=1<<o|n<<i|r,qi=e}function eo(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function to(e){for(;e===Hi;)Hi=$i[--Wi],$i[Wi]=null,Ki=$i[--Wi],$i[Wi]=null;for(;e===Xi;)Xi=Yi[--Qi],Yi[Qi]=null,qi=Yi[--Qi],Yi[Qi]=null,Gi=Yi[--Qi],Yi[Qi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Au(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xi?{id:Gi,overflow:qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Au(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ui(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return co(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw ho(),Error(o(418));for(;t;)ao(e,t),t=ui(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ui(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=ro;e;)e=ui(e.nextSibling)}function fo(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===_&&bo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Ou(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Nu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Mu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ou(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Nu(t,e.mode,n)).return=e,t;case _:return p(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case S:return n.key===i?c(e,t,n,r):null;case _:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||M(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case _:return f(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,s,l){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return n(i,d),io&&Zi(i,m),u;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return io&&Zi(i,m),u}for(d=r(i,d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Zi(i,m),u}function g(i,s,l,u){var c=M(l);if("function"!==typeof c)throw Error(o(150));if(null==(l=c.call(l)))throw Error(o(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=h(i,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),s=a(b,s,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(i,m),io&&Zi(i,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,u))&&(s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return io&&Zi(i,g),c}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=f(m,i,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),io&&Zi(i,g),c}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===_&&bo(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=vo(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((o=Mu(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Ou(a.type,a.key,a.props,null,r.mode,l)).ref=vo(r,o,a),l.return=r,r=l)}return s(r);case S:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Nu(a,r.mode,l)).return=r,r=o}return s(r);case _:return e(r,o,(c=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(M(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Fu(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=xo(!0),So=xo(!1),ko=Ei(null),Eo=null,Co=null,Po=null;function jo(){Po=Co=Eo=null}function To(e){var t=ko.current;Ci(ko),e._currentValue=t}function Ro(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Do(e,t){Eo=e,Po=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function Ao(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===Eo)throw Error(o(308));Co=e,Eo.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var _o=null;function zo(e){null===_o?_o=[e]:_o.push(e)}function Oo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mo(e,r)}function Mo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Lo=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Io(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mo(e,n)}return null===(i=r.interleaved)?(t.next=t,zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mo(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;Lo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=F({},d,p);break e;case 2:Lo=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Ll|=a,e.lanes=a,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Ho={},Ko=Ei(Ho),Yo=Ei(Ho),Qo=Ei(Ho);function Xo(e){if(e===Ho)throw Error(o(174));return e}function Go(e,t){switch(Pi(Qo,t),Pi(Yo,e),Pi(Ko,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Ko),Pi(Ko,t)}function qo(){Ci(Ko),Ci(Yo),Ci(Qo)}function Zo(e){Xo(Qo.current);var t=Xo(Ko.current),n=le(t,e.type);t!==n&&(Pi(Yo,e),Pi(Ko,n))}function Jo(e){Yo.current===e&&(Ci(Ko),Ci(Yo))}var ea=Ei(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=x.ReactCurrentDispatcher,oa=x.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ua=null,ca=!1,da=!1,pa=0,ha=0;function fa(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Ja:es,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ua=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Za,t=null!==la&&null!==la.next,aa=0,ua=la=sa=null,ca=!1,t)throw Error(o(300));return e}function va(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?sa.memoizedState=ua=e:ua=ua.next=e,ua}function ba(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ua?sa.memoizedState:ua.next;if(null!==t)ua=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ua?sa.memoizedState=ua=e:ua=ua.next=e}return ua}function xa(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=p,s=r):u=u.next=p,sa.lanes|=d,Ll|=d}c=c.next}while(null!==c&&c!==a);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(bs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Ll|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(bs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Ea(e,t){var n=sa,r=ba(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,bs=!0),r=r.queue,La(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Aa(9,Pa.bind(null,n,r,i,t),void 0,null),null===Rl)throw Error(o(349));0!==(30&aa)||Ca(n,t,i)}return i}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pa(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&Ra(e)}function ja(e,t,n){return n((function(){Ta(t)&&Ra(e)}))}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ra(e){var t=Mo(e,1);null!==t&&nu(t,e,1,-1)}function Da(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=Qa.bind(null,sa,e),[t.memoizedState,e]}function Aa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function _a(){return ba().memoizedState}function za(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=Aa(1|t,n,void 0,void 0===r?null:r)}function Oa(e,t,n,r){var i=ba();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Aa(t,n,o,r))}sa.flags|=e,i.memoizedState=Aa(1|t,n,o,r)}function Ma(e,t){return za(8390656,8,e,t)}function La(e,t){return Oa(2048,8,e,t)}function Fa(e,t){return Oa(4,2,e,t)}function Na(e,t){return Oa(4,4,e,t)}function Ia(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Va(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oa(4,4,Ia.bind(null,t,e),n)}function Ba(){}function Ua(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $a(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Ll|=n,e.baseState=!0),t)}function Ha(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{bt=n,oa.transition=r}}function Ka(){return ba().memoizedState}function Ya(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xa(e))Ga(t,n);else if(null!==(n=Oo(e,t,n,r))){nu(n,e,r,eu()),qa(n,t,r)}}function Qa(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))Ga(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,zo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Oo(e,t,i,r))&&(nu(n,e,r,i=eu()),qa(n,t,r))}}function Xa(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ga(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Za={readContext:Ao,useCallback:fa,useContext:fa,useEffect:fa,useImperativeHandle:fa,useInsertionEffect:fa,useLayoutEffect:fa,useMemo:fa,useReducer:fa,useRef:fa,useState:fa,useDebugValue:fa,useDeferredValue:fa,useTransition:fa,useMutableSource:fa,useSyncExternalStore:fa,useId:fa,unstable_isNewReconciler:!1},Ja={readContext:Ao,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Ao,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4194308,4,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ya.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Da,useDebugValue:Ba,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Ha.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Rl)throw Error(o(349));0!==(30&aa)||Ca(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ma(ja.bind(null,r,a,e),[e]),r.flags|=2048,Aa(9,Pa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Rl.identifierPrefix;if(io){var n=qi;t=":"+t+"R"+(n=(Gi&~(1<<32-at(Gi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ao,useCallback:Ua,useContext:Ao,useEffect:La,useImperativeHandle:Va,useInsertionEffect:Fa,useLayoutEffect:Na,useMemo:$a,useReducer:wa,useRef:_a,useState:function(){return wa(xa)},useDebugValue:Ba,useDeferredValue:function(e){return Wa(ba(),la.memoizedState,e)},useTransition:function(){return[wa(xa)[0],ba().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ea,useId:Ka,unstable_isNewReconciler:!1},ts={readContext:Ao,useCallback:Ua,useContext:Ao,useEffect:La,useImperativeHandle:Va,useInsertionEffect:Fa,useLayoutEffect:Na,useMemo:$a,useReducer:Sa,useRef:_a,useState:function(){return Sa(xa)},useDebugValue:Ba,useDeferredValue:function(e){var t=ba();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[Sa(xa)[0],ba().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ea,useId:Ka,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nu(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nu(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Io(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Vo(e,i,r))&&(nu(t,e,r,n),Bo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=ji,o=t.contextType;return"object"===typeof o&&null!==o?o=Ao(o):(i=_i(t)?Di:Ti.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ai(e,i):ji),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Ao(o):(o=_i(t)?Di:Ti.current,i.context=Ai(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=Io(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hl=r),ds(0,t)},n}function fs(e,t,n){(n=Io(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Io(-1,1)).tag=2,Vo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=x.ReactCurrentOwner,bs=!1;function xs(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Do(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||bs?(io&&n&&eo(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Ss(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||_u(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ou(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ks(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=zu(o,r)).ref=t.ref,e.return=t,t.child=e}function ks(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(bs=!0)}}return Ps(e,t,n,r,i)}function Es(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(zl,_l),_l|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(zl,_l),_l|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Pi(zl,_l),_l|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pi(zl,_l),_l|=r;return xs(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,r,i){var o=_i(n)?Di:Ti.current;return o=Ai(t,o),Do(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||bs?(io&&r&&eo(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function js(e,t,n,r,i){if(_i(n)){var o=!0;Li(t)}else o=!1;if(Do(t,i),null===t.stateNode)$s(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ao(u):u=Ai(t,u=_i(n)?Di:Ti.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==u)&&ss(t,a,r,u),Lo=!1;var p=t.memoizedState;a.state=p,$o(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Ri.current||Lo?("function"===typeof c&&(rs(t,n,c,r),l=t.memoizedState),(s=Lo||os(t,n,s,r,p,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,No(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ns(t.type,s),a.props=u,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ao(l):l=Ai(t,l=_i(n)?Di:Ti.current);var h=n.getDerivedStateFromProps;(c="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Lo=!1,p=t.memoizedState,a.state=p,$o(t,r,a,i);var f=t.memoizedState;s!==d||p!==f||Ri.current||Lo?("function"===typeof h&&(rs(t,n,h,r),f=t.memoizedState),(u=Lo||os(t,n,u,r,p,f,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,o,i)}function Ts(e,t,n,r,i,o){Cs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Fi(t,n,!1),Ws(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):xs(e,t,s,o),t.memoizedState=r.state,i&&Fi(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Oi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oi(0,t.context,!1),Go(e,t.containerInfo)}function Ds(e,t,n,r,i){return fo(),mo(i),t.flags|=256,xs(e,t,n,r),t.child}var As,_s,zs,Os,Ms={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fs(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Pi(ea,1&a),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Lu(l,i,0,null),e=Mu(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(n),t.memoizedState=Ms,e):Ns(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Is(e,t,s,r=cs(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Lu({mode:"visible",children:r.children},i,0,null),(a=Mu(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Ms,a);if(0===(1&t.mode))return Is(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Is(e,t,s,r=cs(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(r=Rl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Mo(e,i),nu(r,e,i,-1))}return mu(),Is(e,t,s,r=cs(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ui(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Yi[Qi++]=Gi,Yi[Qi++]=qi,Yi[Qi++]=Xi,Gi=e.id,qi=e.overflow,Xi=t),t=Ns(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=zu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=zu(r,s):(s=Mu(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ms,i}return e=(s=e.child).sibling,i=zu(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ns(e,t){return(t=Lu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Is(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ro(e.return,t,n)}function Bs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pi(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=zu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return _i(t.type)&&zi(),Ks(t),null;case 3:return r=t.stateNode,qo(),Ci(Ri),Ci(Ti),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(au(oo),oo=null))),_s(e,t),Ks(t),null;case 5:Jo(t);var i=Xo(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ks(t),null}if(e=Xo(Ko.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[hi]=a,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)Ir(Mr[i],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":G(r,a),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ir("invalid",r);break;case"textarea":ie(r,a),Ir("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,u,e),i=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Ir("scroll",r)}switch(n){case"input":K(r),J(r,a,!0);break;case"textarea":K(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[hi]=r,As(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),i=r;break;case"iframe":case"object":case"embed":Ir("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)Ir(Mr[i],e);i=r;break;case"source":Ir("error",e),i=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),i=r;break;case"details":Ir("toggle",e),i=r;break;case"input":G(e,r),i=X(e,r),Ir("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ir("invalid",e)}for(a in ye(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Ir("scroll",e):null!=c&&b(e,a,c,l))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)Os(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Xo(Qo.current),Xo(Ko.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Ks(t),null;case 13:if(Ci(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))ho(),fo(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else fo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),a=!1}else null!==oo&&(au(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ol&&(Ol=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return qo(),_s(e,t),null===e&&Ur(t.stateNode.containerInfo),Ks(t),null;case 10:return To(t.type._context),Ks(t),null;case 19:if(Ci(ea),null===(a=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Hs(a,!1);else{if(0!==Ol||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pi(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&qe()>Ul&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Ks(t),null}else 2*qe()-a.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=qe(),t.sibling=null,n=ea.current,Pi(ea,r?1&n|2:1&n),t):(Ks(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&_l)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Qs(e,t){switch(to(t),t.tag){case 1:return _i(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qo(),Ci(Ri),Ci(Ti),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ci(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));fo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(ea),null;case 4:return qo(),null;case 10:return To(t.type._context),null;case 22:case 23:return du(),null;default:return null}}As=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_s=function(){},zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xo(Ko.current);var o,a=null;switch(n){case"input":i=X(e,i),r=X(e,r),a=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ye(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ir("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Os=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xs=!1,Gs=!1,qs="function"===typeof WeakSet?WeakSet:Set,Zs=null;function Js(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[hi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}var cl=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Gs||Js(n,t);case 6:var r=cl,i=dl;cl=null,pl(e,t,n),dl=i,null!==(cl=r)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(cl,n.stateNode));break;case 4:r=cl,i=dl,cl=n.stateNode.containerInfo,dl=!0,pl(e,t,n),cl=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Gs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Gs&&(Js(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Eu(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Gs=(r=Gs)||null!==n.memoizedState,pl(e,t,n),Gs=r):pl(e,t,n);break;default:pl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new qs),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(o(160));hl(a,s,i),cl=null,dl=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Eu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Eu(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Js(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Js(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&q(i,a),be(l,s);var c=be(l,a);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):b(i,d,p,c)}switch(l){case"input":Z(i,a);break;case"textarea":oe(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?ne(i,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=qe())),4&r&&fl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gs=(c=Gs)||d,ml(t,e),Gs=c):ml(t,e),vl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zs=e,d=e.child;null!==d;){for(p=Zs=d;null!==Zs;){switch(f=(h=Zs).child,h.tag){case 0:case 11:case 14:case 15:nl(4,h,h.return);break;case 1:Js(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Js(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==f?(f.return=h,Zs=f):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(u=p.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=me("display",s))}catch(g){Eu(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),vl(e),4&r&&fl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),ul(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Eu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Zs=e,bl(e,t,n)}function bl(e,t,n){for(var r=0!==(1&e.mode);null!==Zs;){var i=Zs,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Xs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Gs;s=Xs;var u=Gs;if(Xs=a,(Gs=l)&&!u)for(Zs=i;null!==Zs;)l=(a=Zs).child,22===a.tag&&null!==a.memoizedState?Sl(i):null!==l?(l.return=a,Zs=l):Sl(i);for(;null!==o;)Zs=o,bl(o,t,n),o=o.sibling;Zs=i,Xs=s,Gs=u}xl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Zs=o):xl(e)}}function xl(e){for(;null!==Zs;){var t=Zs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(o(163))}Gs||512&t.flags&&il(t)}catch(h){Eu(t,t.return,h)}}if(t===e){Zs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zs=n;break}Zs=t.return}}function wl(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zs=n;break}Zs=t.return}}function Sl(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Eu(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Eu(t,i,l)}}var o=t.return;try{il(t)}catch(l){Eu(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Eu(t,a,l)}}}catch(l){Eu(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var kl,El=Math.ceil,Cl=x.ReactCurrentDispatcher,Pl=x.ReactCurrentOwner,jl=x.ReactCurrentBatchConfig,Tl=0,Rl=null,Dl=null,Al=0,_l=0,zl=Ei(0),Ol=0,Ml=null,Ll=0,Fl=0,Nl=0,Il=null,Vl=null,Bl=0,Ul=1/0,$l=null,Wl=!1,Hl=null,Kl=null,Yl=!1,Ql=null,Xl=0,Gl=0,ql=null,Zl=-1,Jl=0;function eu(){return 0!==(6&Tl)?qe():-1!==Zl?Zl:Zl=qe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Al?Al&-Al:null!==go.transition?(0===Jl&&(Jl=mt()),Jl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gl)throw Gl=0,ql=null,Error(o(185));vt(e,n,r),0!==(2&Tl)&&e===Rl||(e===Rl&&(0===(2&Tl)&&(Fl|=n),4===Ol&&su(e,Al)),ru(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Ul=qe()+500,Ii&&Ui()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=pt(e,e===Rl?Al:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Ii=!0,Bi(e)}(lu.bind(null,e)):Bi(lu.bind(null,e)),ai((function(){0===(6&Tl)&&Ui()})),n=null;else{switch(xt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ru(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Zl=-1,Jl=0,0!==(6&Tl))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=pt(e,e===Rl?Al:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var i=Tl;Tl|=2;var a=fu();for(Rl===e&&Al===t||($l=null,Ul=qe()+500,pu(e,t));;)try{yu();break}catch(l){hu(e,l)}jo(),Cl.current=a,Tl=i,null!==Dl?t=0:(Rl=null,Al=0,t=Ol)}if(0!==t){if(2===t&&(0!==(i=ft(e))&&(r=i,t=ou(e,i))),1===t)throw n=Ml,pu(e,0),su(e,r),ru(e,qe()),n;if(6===t)su(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gu(e,r))&&(0!==(a=ft(e))&&(r=a,t=ou(e,a))),1===t))throw n=Ml,pu(e,0),su(e,r),ru(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Vl,$l);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Bl+500-qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,Vl,$l),t);break}wu(e,Vl,$l);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,Vl,$l),r);break}wu(e,Vl,$l);break;default:throw Error(o(329))}}}return ru(e,qe()),e.callbackNode===n?iu.bind(null,e):null}function ou(e,t){var n=Il;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Vl,Vl=n,null!==t&&au(t)),e}function au(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function su(e,t){for(t&=~Nl,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(0!==(6&Tl))throw Error(o(327));Su();var t=pt(e,0);if(0===(1&t))return ru(e,qe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ft(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ml,pu(e,0),su(e,t),ru(e,qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Vl,$l),ru(e,qe()),null}function uu(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Ul=qe()+500,Ii&&Ui())}}function cu(e){null!==Ql&&0===Ql.tag&&0===(6&Tl)&&Su();var t=Tl;Tl|=1;var n=jl.transition,r=bt;try{if(jl.transition=null,bt=1,e)return e()}finally{bt=r,jl.transition=n,0===(6&(Tl=t))&&Ui()}}function du(){_l=zl.current,Ci(zl)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Dl)for(n=Dl.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:qo(),Ci(Ri),Ci(Ti),ra();break;case 5:Jo(r);break;case 4:qo();break;case 13:case 19:Ci(ea);break;case 10:To(r.type._context);break;case 22:case 23:du()}n=n.return}if(Rl=e,Dl=e=zu(e.current,null),Al=_l=t,Ol=0,Ml=null,Nl=Fl=Ll=0,Vl=Il=null,null!==_o){for(t=0;t<_o.length;t++)if(null!==(r=(n=_o[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}_o=null}return e}function hu(e,t){for(;;){var n=Dl;try{if(jo(),ia.current=Za,ca){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(aa=0,ua=la=sa=null,da=!1,pa=0,Pl.current=null,null===n||null===n.return){Ol=1,Ml=t,Dl=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=Al,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=gs(s);if(null!==f){f.flags&=-257,vs(f,s,l,0,t),1&f.mode&&ms(a,c,t),u=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ms(a,c,t),mu();break e}u=Error(o(426))}else if(io&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mo(us(u,l));break e}}a=u=us(u,l),4!==Ol&&(Ol=2),null===Il?Il=[a]:Il.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,hs(0,u,t));break e;case 1:l=u;var y=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Kl||!Kl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,fs(a,l,t));break e}}a=a.return}while(null!==a)}xu(n)}catch(x){t=x,Dl===n&&null!==n&&(Dl=n=n.return);continue}break}}function fu(){var e=Cl.current;return Cl.current=Za,null===e?Za:e}function mu(){0!==Ol&&3!==Ol&&2!==Ol||(Ol=4),null===Rl||0===(268435455&Ll)&&0===(268435455&Fl)||su(Rl,Al)}function gu(e,t){var n=Tl;Tl|=2;var r=fu();for(Rl===e&&Al===t||($l=null,pu(e,t));;)try{vu();break}catch(i){hu(e,i)}if(jo(),Tl=n,Cl.current=r,null!==Dl)throw Error(o(261));return Rl=null,Al=0,Ol}function vu(){for(;null!==Dl;)bu(Dl)}function yu(){for(;null!==Dl&&!Xe();)bu(Dl)}function bu(e){var t=kl(e.alternate,e,_l);e.memoizedProps=e.pendingProps,null===t?xu(e):Dl=t,Pl.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,_l)))return void(Dl=n)}else{if(null!==(n=Qs(n,t)))return n.flags&=32767,void(Dl=n);if(null===e)return Ol=6,void(Dl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Dl=t);Dl=t=e}while(null!==t);0===Ol&&(Ol=5)}function wu(e,t,n){var r=bt,i=jl.transition;try{jl.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Ql);if(0!==(6&Tl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Rl&&(Dl=Rl=null,Al=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,Ru(tt,(function(){return Su(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=jl.transition,jl.transition=null;var s=bt;bt=1;var l=Tl;Tl|=4,Pl.current=null,function(e,t){if(ei=Wt,hr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(u=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++c===i&&(l=s),h===a&&++d===r&&(u=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=tl,tl=!1}(e,n),gl(n,e),fr(ti),Wt=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Ge(),Tl=l,bt=s,jl.transition=a}else e.current=n;if(Yl&&(Yl=!1,Ql=e,Xl=i),a=e.pendingLanes,0===a&&(Kl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Xl)&&0!==e.tag&&Su(),a=e.pendingLanes,0!==(1&a)?e===ql?Gl++:(Gl=0,ql=e):Gl=0,Ui()}(e,t,n,r)}finally{jl.transition=i,bt=r}return null}function Su(){if(null!==Ql){var e=xt(Xl),t=jl.transition,n=bt;try{if(jl.transition=null,bt=16>e?16:e,null===Ql)var r=!1;else{if(e=Ql,Ql=null,Xl=0,0!==(6&Tl))throw Error(o(331));var i=Tl;for(Tl|=4,Zs=e.current;null!==Zs;){var a=Zs,s=a.child;if(0!==(16&Zs.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Zs=c;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Zs=p;else for(;null!==Zs;){var h=(d=Zs).sibling,f=d.return;if(ol(d),d===c){Zs=null;break}if(null!==h){h.return=f,Zs=h;break}Zs=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Zs=s;else e:for(;null!==Zs;){if(0!==(2048&(a=Zs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Zs=y;break e}Zs=a.return}}var b=e.current;for(Zs=b;null!==Zs;){var x=(s=Zs).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Zs=x;else e:for(s=b;null!==Zs;){if(0!==(2048&(l=Zs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(S){Eu(l,l.return,S)}if(l===s){Zs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Zs=w;break e}Zs=l.return}}if(Tl=i,Ui(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{bt=n,jl.transition=t}}return!1}function ku(e,t,n){e=Vo(e,t=hs(0,t=us(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Kl||!Kl.has(r))){t=Vo(t,e=fs(t,e=us(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Al&n)===n&&(4===Ol||3===Ol&&(130023424&Al)===Al&&500>qe()-Bl?pu(e,0):Nl|=n),ru(e,t)}function Pu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Mo(e,t))&&(vt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Pu(e,n)}function Ru(e,t){return Ye(e,t)}function Du(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Au(e,t,n,r){return new Du(e,t,n,r)}function _u(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zu(e,t){var n=e.alternate;return null===n?((n=Au(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)_u(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return Mu(n.children,i,a,t);case E:s=8,i|=8;break;case C:return(e=Au(12,n,t,2|i)).elementType=C,e.lanes=a,e;case R:return(e=Au(13,n,t,i)).elementType=R,e.lanes=a,e;case D:return(e=Au(19,n,t,i)).elementType=D,e.lanes=a,e;case z:return Lu(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case j:s=9;break e;case T:s=11;break e;case A:s=14;break e;case _:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Au(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Mu(e,t,n,r){return(e=Au(7,e,r,t)).lanes=n,e}function Lu(e,t,n,r){return(e=Au(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Au(6,e,null,t)).lanes=n,e}function Nu(e,t,n){return(t=Au(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,o,a,s,l){return e=new Iu(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Au(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Bu(e){if(!e)return ji;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_i(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(_i(n))return Mi(e,n,t)}return t}function Uu(e,t,n,r,i,o,a,s,l){return(e=Vu(n,r,!0,e,0,o,0,s,l)).context=Bu(null),n=e.current,(o=Io(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Vo(n,o,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function $u(e,t,n,r){var i=t.current,o=eu(),a=tu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Io(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Vo(i,t,a))&&(nu(e,i,a,o),Bo(e,i,a)),a}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}kl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)bs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),fo();break;case 5:Zo(t);break;case 1:_i(t.type)&&Li(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pi(ko,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Pi(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fs(e,t,n):(Pi(ea,1&ea.current),null!==(e=Ws(e,t,n))?e.sibling:null);Pi(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return Ws(e,t,n)}(e,t,n);bs=0!==(131072&e.flags)}else bs=!1,io&&0!==(1048576&t.flags)&&Ji(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Ai(t,Ti.current);Do(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_i(r)?(a=!0,Li(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Fo(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return _u(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===A)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Ps(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=Ss(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Rs(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,No(e,t),$o(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ds(e,t,r,n,i=us(Error(o(423)),t));break e}if(r!==i){t=Ds(e,t,r,n,i=us(Error(o(424)),t));break e}for(ro=ui(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fo(),r===i){t=Ws(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&uo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Cs(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Fs(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Pi(ko,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Ri.current){t=Ws(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Io(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Ro(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ro(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Do(t,n),r=r(i=Ao(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),Ss(e,t,r,i=ns(r.type,i),n);case 15:return ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),$s(e,t),t.tag=1,_i(r)?(e=!0,Li(t)):e=!1,Do(t,n),as(t,r,i),ls(t,r,i,n),Ts(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return Es(e,t,n)}throw Error(o(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Xu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Wu(a);s.call(e)}}$u(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Wu(a);o.call(e)}}var a=Uu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=a,e[fi]=a.current,Ur(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wu(l);s.call(e)}}var l=Vu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=l,e[fi]=l.current,Ur(8===e.nodeType?e.parentNode:e),cu((function(){$u(t,l,n,r)})),l}(n,t,e,i,r);return Wu(a)}Xu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));$u(e,t,null,null)},Xu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){$u(null,e,null,null)})),t[fi]=null}},Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,qe()),0===(6&Tl)&&(Ul=qe()+500,Ui()))}break;case 13:cu((function(){var t=Mo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Mo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Mo(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Et=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));Y(r),Z(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,Re=cu;var ec={usingClientEntryPoint:!1,Events:[bi,xi,wi,Pe,je,uu]},tc={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(o(299));var n=!1,r="",i=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,0,n,0,r,i),e[fi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!qu(t))throw Error(o(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Yu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,i,0,a,s),e[fi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xu(t)},t.render=function(e,t,n){if(!qu(t))throw Error(o(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[fi]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".8c48a2dc.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio-showcase:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/portfolio-showcase/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,a=r[0],s=r[1],l=r[2],u=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkportfolio_showcase=self.webpackChunkportfolio_showcase||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391),o=n(950),a=n.t(o,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const l="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?f(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,f=e.Pop,m=null,g=v();function v(){return(c.state||{idx:null}).idx}function y(){f=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:f,location:x.location,delta:n})}function b(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,c.replaceState(s({},c.state,{idx:g}),""));let x={get action(){return f},get location(){return t(o,c)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(l,y),m=e,()=>{o.removeEventListener(l,y),m=null}},createHref:e=>n(o,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let i=p(x.location,t,n);r&&r(i,t),g=v()+1;let s=d(i,g),l=x.createHref(i);try{c.pushState(s,"",l)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(l)}a&&m&&m({action:f,location:x.location,delta:1})},replace:function(t,n){f=e.Replace;let i=p(x.location,t,n);r&&r(i,t),g=v();let o=d(i,g),s=x.createHref(i);c.replaceState(o,"",s),a&&m&&m({action:f,location:x.location,delta:0})},go:e=>c.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let i=_(("string"===typeof t?f(t):t).pathname||"/",n);if(null==i)return null;let o=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=A(i);a=R(o[s],e,r)}return a}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(u(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=F([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),b(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))i(e,t,r);else i(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=x(r.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,S=3,k=2,E=1,C=10,P=-2,j=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=P),t&&(r+=k),n.filter((e=>!j(e))).reduce(((e,t)=>e+(w.test(t)?S:""===t?E:C)),r)}function R(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=D({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=D({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:F([o,c.pathname]),pathnameBase:N(F([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=F([o,c.pathnameBase]))}return a}function D(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function A(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function _(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function O(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function M(e,t){let n=O(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function L(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=f(e):(i=s({},e),u(!i.pathname||!i.pathname.includes("?"),z("?","pathname","search",i)),u(!i.pathname||!i.pathname.includes("#"),z("#","pathname","hash",i)),u(!i.search||!i.search.includes("#"),z("#","search","hash",i)));let o,a=""===e||""===i.pathname,l=a?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?f(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:I(r),hash:V(i)}}(i,o),d=l&&"/"!==l&&l.endsWith("/"),p=(a||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}const F=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],$=(new Set(U),["get",...U]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const H=t.createContext(null);const K=t.createContext(null);const Y=t.createContext(null);const Q=t.createContext(null);const X=t.createContext({outlet:null,matches:[],isDataRoute:!1});const G=t.createContext(null);function q(){return null!=t.useContext(Q)}function Z(){return q()||u(!1),t.useContext(Q).location}function J(e){t.useContext(Y).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(X);return e?function(){let{router:e}=ce(le.UseNavigateStable),n=pe(ue.UseNavigateStable),r=t.useRef(!1);J((()=>{r.current=!0}));let i=t.useCallback((function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,W({fromRouteId:n},i)))}),[e,n]);return i}():function(){q()||u(!1);let e=t.useContext(H),{basename:n,future:r,navigator:i}=t.useContext(Y),{matches:o}=t.useContext(X),{pathname:a}=Z(),s=JSON.stringify(M(o,r.v7_relativeSplatPath)),l=t.useRef(!1);return J((()=>{l.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void i.go(t);let o=L(t,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)}),[n,i,s,a,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(Y),{matches:o}=t.useContext(X),{pathname:a}=Z(),s=JSON.stringify(M(o,i.v7_relativeSplatPath));return t.useMemo((()=>L(e,JSON.parse(s),a,"path"===r)),[e,s,a,r])}function ne(n,r,i,o){q()||u(!1);let{navigator:a,static:s}=t.useContext(Y),{matches:l}=t.useContext(X),c=l[l.length-1],d=c?c.params:{},p=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let h,m=Z();if(r){var g;let e="string"===typeof r?f(r):r;"/"===p||(null==(g=e.pathname)?void 0:g.startsWith(p))||u(!1),h=e}else h=m;let y=h.pathname||"/",b=y;if("/"!==p){let e=p.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=!s&&i&&i.matches&&i.matches.length>0?i.matches:v(n,{pathname:b});let w=se(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:F([p,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:F([p,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,i,o);return r&&w?t.createElement(Q.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:e.Pop}},w):w}function re(){let e=function(){var e;let n=t.useContext(G),r=de(ue.UseRouteError),i=pe(ue.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ie=t.createElement(re,null);class oe extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(X.Provider,{value:this.props.routeContext},t.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext(H);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(X.Provider,{value:n},i)}function se(e,n,r,i){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,l=null==(o=r)?void 0:o.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||u(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,i,o)=>{let a,u=!1,p=null,h=null;var f;r&&(a=l&&i.route.id?l[i.route.id]:void 0,p=i.route.errorElement||ie,c&&(d<0&&0===o?(f="route-fallback",!1||he[f]||(he[f]=!0),u=!0,h=null):d===o&&(u=!0,h=i.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=a?p:u?h:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ae,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?t.createElement(oe,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ue=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ue||{});function ce(e){let n=t.useContext(H);return n||u(!1),n}function de(e){let n=t.useContext(K);return n||u(!1),n}function pe(e){let n=function(){let e=t.useContext(X);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}const he={};function fe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){u(!1)}function ge(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:l=!1,future:c}=n;q()&&u(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo((()=>({basename:d,navigator:s,static:l,future:W({v7_relativeSplatPath:!1},c)})),[d,c,s,l]);"string"===typeof o&&(o=f(o));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:y="default"}=o,b=t.useMemo((()=>{let e=_(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:a}}),[d,h,m,g,v,y,a]);return null==b?null:t.createElement(Y.Provider,{value:p},t.createElement(Q.Provider,{children:i,value:b}))}function ve(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise((()=>{}));t.Component;function ye(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;let o=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,ye(e.props.children,o));e.type!==me&&u(!1),e.props.index&&e.props.children&&u(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ye(e.props.children,o)),r.push(a)})),r}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(_g){}new Map;const Se=r.startTransition;a.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),m((function(e,t){let{pathname:n="/",search:r="",hash:i=""}=f(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),p("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:h(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),s)));let l=a.current,[u,d]=t.useState({action:l.action,location:l.location}),{v7_startTransition:g}=i||{},v=t.useCallback((e=>{g&&Se?Se((()=>d(e))):d(e)}),[d,g]);return t.useLayoutEffect((()=>l.listen(v)),[l,v]),t.useEffect((()=>fe(i)),[i]),t.createElement(ge,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:l,future:i})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=t.forwardRef((function(e,n){let r,{onClick:i,relative:o,reloadDocument:a,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:f}=e,m=xe(e,we),{basename:g}=t.useContext(Y),v=!1;if("string"===typeof d&&Ce.test(d)&&(r=d,Ee))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=_(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(_g){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;q()||u(!1);let{basename:i,navigator:o}=t.useContext(Y),{hash:a,pathname:s,search:l}=te(e,{relative:r}),c=s;return"/"!==i&&(c="/"===s?i:F([i,s])),o.createHref({pathname:c,search:l,hash:a})}(d,{relative:o}),b=function(e,n){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=void 0===n?{}:n,u=ee(),c=Z(),d=te(e,{relative:s});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:h(c)===h(d);u(e,{replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l})}}),[c,u,d,i,o,r,e,a,s,l])}(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:o,viewTransition:f});return t.createElement("a",be({},m,{href:r||y,onClick:v||a?i:function(e){i&&i(e),e.defaultPrevented||b(e)},ref:n,target:c}))}));var je,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(je||(je={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));var Re=function(){return Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Re.apply(this,arguments)};Object.create;function De(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ae=n(324),_e=n.n(Ae),ze="-ms-",Oe="-moz-",Me="-webkit-",Le="comm",Fe="rule",Ne="decl",Ie="@keyframes",Ve=Math.abs,Be=String.fromCharCode,Ue=Object.assign;function $e(e){return e.trim()}function We(e,t){return(e=t.exec(e))?e[0]:e}function He(e,t,n){return e.replace(t,n)}function Ke(e,t,n){return e.indexOf(t,n)}function Ye(e,t){return 0|e.charCodeAt(t)}function Qe(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Ge(e){return e.length}function qe(e,t){return t.push(e),e}function Ze(e,t){return e.filter((function(e){return!We(e,t)}))}var Je=1,et=1,tt=0,nt=0,rt=0,it="";function ot(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Je,column:et,length:a,return:"",siblings:s}}function at(e,t){return Ue(ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function st(e){for(;e.root;)e=at(e.root,{children:[e]});qe(e,e.siblings)}function lt(){return rt=nt>0?Ye(it,--nt):0,et--,10===rt&&(et=1,Je--),rt}function ut(){return rt=nt<tt?Ye(it,nt++):0,et++,10===rt&&(et=1,Je++),rt}function ct(){return Ye(it,nt)}function dt(){return nt}function pt(e,t){return Qe(it,e,t)}function ht(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ft(e){return Je=et=1,tt=Xe(it=e),nt=0,[]}function mt(e){return it="",e}function gt(e){return $e(pt(nt-1,bt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ct())&&rt<33;)ut();return ht(e)>2||ht(rt)>3?"":" "}function yt(e,t){for(;--t&&ut()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return pt(e,dt()+(t<6&&32==ct()&&32==ut()))}function bt(e){for(;ut();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&bt(rt);break;case 40:41===e&&bt(e);break;case 92:ut()}return nt}function xt(e,t){for(;ut()&&e+rt!==57&&(e+rt!==84||47!==ct()););return"/*"+pt(t,nt-1)+"*"+Be(47===e?e:ut())}function wt(e){for(;!ht(ct());)ut();return pt(e,nt)}function St(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function kt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ne:return e.return=e.return||e.value;case Le:return"";case Ie:return e.return=e.value+"{"+St(e.children,r)+"}";case Fe:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=St(e.children,r))?e.return=e.value+"{"+n+"}":""}function Et(e,t,n){switch(function(e,t){return 45^Ye(e,0)?(((t<<2^Ye(e,0))<<2^Ye(e,1))<<2^Ye(e,2))<<2^Ye(e,3):0}(e,t)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Oe+e+ze+e+e;case 5936:switch(Ye(e,t+11)){case 114:return Me+e+ze+He(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+ze+He(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+ze+He(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+ze+e+e;case 6165:return Me+e+ze+"flex-"+e+e;case 5187:return Me+e+He(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+ze+"flex-$1$2")+e;case 5443:return Me+e+ze+"flex-item-"+He(e,/flex-|-self/g,"")+(We(e,/flex-|baseline/)?"":ze+"grid-row-"+He(e,/flex-|-self/g,""))+e;case 4675:return Me+e+ze+"flex-line-pack"+He(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+ze+He(e,"shrink","negative")+e;case 5292:return Me+e+ze+He(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+He(e,"-grow","")+Me+e+ze+He(e,"grow","positive")+e;case 4554:return Me+He(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return He(He(He(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return He(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return He(He(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!We(e,/flex-|baseline/))return ze+"grid-column-align"+Qe(e,t)+e;break;case 2592:case 3360:return ze+He(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,We(e.props,/grid-\w+-end/)}))?~Ke(e+(n=n[t].value),"span",0)?e:ze+He(e,"-start","")+e+ze+"grid-row-span:"+(~Ke(n,"span",0)?We(n,/\d+/):+We(n,/\d+/)-+We(e,/\d+/))+";":ze+He(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return We(e.props,/grid-\w+-start/)}))?e:ze+He(He(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return He(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(Ye(e,t+1)){case 109:if(45!==Ye(e,t+4))break;case 102:return He(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Oe+(108==Ye(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch",0)?Et(He(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return He(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,s){return ze+n+":"+r+s+(i?ze+n+"-span:"+(o?a:+a-+r)+s:"")+e}));case 4949:if(121===Ye(e,t+6))return He(e,":",":"+Me)+e;break;case 6444:switch(Ye(e,45===Ye(e,14)?18:11)){case 120:return He(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(45===Ye(e,14)?"inline-":"")+"box$3$1"+Me+"$2$3$1"+ze+"$2box$3")+e;case 100:return He(e,":",":"+ze)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return He(e,"scroll-","scroll-snap-")+e}return e}function Ct(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ne:return void(e.return=Et(e.value,e.length,n));case Ie:return St([at(e,{value:He(e.value,"@","@"+Me)})],r);case Fe:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(We(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":st(at(e,{props:[He(t,/:(read-\w+)/,":-moz-$1")]})),st(at(e,{props:[t]})),Ue(e,{props:Ze(n,r)});break;case"::placeholder":st(at(e,{props:[He(t,/:(plac\w+)/,":"+Me+"input-$1")]})),st(at(e,{props:[He(t,/:(plac\w+)/,":-moz-$1")]})),st(at(e,{props:[He(t,/:(plac\w+)/,ze+"input-$1")]})),st(at(e,{props:[t]})),Ue(e,{props:Ze(n,r)})}return""}))}}function Pt(e){return mt(jt("",null,null,null,[""],e=ft(e),0,[0],e))}function jt(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,p=0,h=0,f=0,m=1,g=1,v=1,y=0,b="",x=i,w=o,S=r,k=b;g;)switch(f=y,y=ut()){case 40:if(108!=f&&58==Ye(k,d-1)){-1!=Ke(k+=He(gt(y),"&","&\f"),"&\f",Ve(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=gt(y);break;case 9:case 10:case 13:case 32:k+=vt(f);break;case 92:k+=yt(dt()-1,7);continue;case 47:switch(ct()){case 42:case 47:qe(Rt(xt(ut(),dt()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[u++]=Xe(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=He(k,/\f/g,"")),h>0&&Xe(k)-d&&qe(h>32?Dt(k+";",r,n,d-1,l):Dt(He(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(qe(S=Tt(k,t,n,u,c,i,s,b,x=[],w=[],d,o),o),123===y)if(0===c)jt(k,t,S,S,x,o,d,s,w);else switch(99===p&&110===Ye(k,3)?100:p){case 100:case 108:case 109:case 115:jt(e,S,S,r&&qe(Tt(e,S,S,0,0,i,s,b,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:jt(k,S,S,S,[""],w,0,s,w)}}u=c=h=0,m=v=1,b=k="",d=a;break;case 58:d=1+Xe(k),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==lt())continue;switch(k+=Be(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(Xe(k)-1)*v,v=1;break;case 64:45===ct()&&(k+=gt(ut())),p=ct(),c=d=Xe(b=k+=wt(dt())),y++;break;case 45:45===f&&2==Xe(k)&&(m=0)}}return o}function Tt(e,t,n,r,i,o,a,s,l,u,c,d){for(var p=i-1,h=0===i?o:[""],f=Ge(h),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Qe(e,p+1,p=Ve(g=a[m])),x=e;y<f;++y)(x=$e(g>0?h[y]+" "+b:He(b,/&\f/g,h[y])))&&(l[v++]=x);return ot(e,t,n,0===i?Fe:s,l,u,c,d)}function Rt(e,t,n,r){return ot(e,t,n,Le,Be(rt),Qe(e,2,-2),0,r)}function Dt(e,t,n,r,i){return ot(e,t,n,Ne,Qe(e,0,r),Qe(e,r+1,-1),r,i)}var At={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",zt="active",Ot="data-styled-version",Mt="6.1.15",Lt="/*!sc*/\n",Ft="undefined"!=typeof window&&"HTMLElement"in window,Nt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio-showcase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),It=(new Set,Object.freeze([])),Vt=Object.freeze({});function Bt(e,t,n){return void 0===n&&(n=Vt),e.theme!==n.theme&&e.theme||t||n.theme}var Ut=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$t=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wt=/(^-|-$)/g;function Ht(e){return e.replace($t,"-").replace(Wt,"")}var Kt=/(a)(d)/gi,Yt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yt(t%52)+n;return(Yt(t%52)+n).replace(Kt,"$1-$2")}var Xt,Gt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},qt=function(e){return Gt(5381,e)};function Zt(e){return Qt(qt(e)>>>0)}function Jt(e){return e.displayName||e.name||"Component"}function en(e){return"string"==typeof e&&!0}var tn="function"==typeof Symbol&&Symbol.for,nn=tn?Symbol.for("react.memo"):60115,rn=tn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ln=((Xt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xt[nn]=sn,Xt);function un(e){return("type"in(t=e)&&t.type.$$typeof)===nn?sn:"$$typeof"in e?ln[e.$$typeof]:on;var t}var cn=Object.defineProperty,dn=Object.getOwnPropertyNames,pn=Object.getOwnPropertySymbols,hn=Object.getOwnPropertyDescriptor,fn=Object.getPrototypeOf,mn=Object.prototype;function gn(e,t,n){if("string"!=typeof t){if(mn){var r=fn(t);r&&r!==mn&&gn(e,r,n)}var i=dn(t);pn&&(i=i.concat(pn(t)));for(var o=un(e),a=un(t),s=0;s<i.length;++s){var l=i[s];if(!(l in an||n&&n[l]||a&&l in a||o&&l in o)){var u=hn(t,l);try{cn(e,l,u)}catch(e){}}}}return e}function vn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!wn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(wn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function kn(e,t){Object.defineProperty(e,"toString",{value:t})}function En(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw En(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Lt);return t},e}(),Pn=new Map,jn=new Map,Tn=1,Rn=function(e){if(Pn.has(e))return Pn.get(e);for(;jn.has(Tn);)Tn++;var t=Tn++;return Pn.set(e,t),jn.set(t,e),t},Dn=function(e,t){Tn=t+1,Pn.set(e,t),jn.set(t,e)},An="style[".concat(_t,"][").concat(Ot,'="').concat(Mt,'"]'),_n=new RegExp("^".concat(_t,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zn=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},On=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Lt),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(_n);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(Dn(c,u),zn(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Mn=function(e){for(var t=document.querySelectorAll(An),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(_t)!==zt&&(On(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ln(){return n.nc}var Fn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(_t,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(_t,zt),r.setAttribute(Ot,Mt);var a=Ln();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Nn=function(){function e(e){this.element=Fn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw En(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),In=function(){function e(e){this.element=Fn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Vn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Bn=Ft,Un={isServer:!Ft,useCSSOMInjection:!Nt},$n=function(){function e(e,t,n){void 0===e&&(e=Vt),void 0===t&&(t={});var r=this;this.options=Re(Re({},Un),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ft&&Bn&&(Bn=!1,Mn(this)),kn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return jn.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(_t,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Lt)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return Rn(e)},e.prototype.rehydrate=function(){!this.server&&Ft&&Mn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Vn(n):t?new Nn(n):new In(n)}(this.options),new Cn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Rn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Rn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Rn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wn=/&/g,Hn=/^\s*\/\/.*$/gm;function Kn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Kn(e.children,t)),e}))}function Yn(e){var t,n,r,i=void 0===e?Vt:e,o=i.options,a=void 0===o?Vt:o,s=i.plugins,l=void 0===s?It:s,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===Fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Wn,n).replace(r,u))})),a.prefix&&c.push(Ct),c.push(kt);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Hn,""),u=Pt(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(u=Kn(u,a.namespace));var d,p=[];return St(u,function(e){var t=Ge(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||En(15),Gt(e,t.name)}),5381).toString():"",d}var Qn=new $n,Xn=Yn(),Gn=t.createContext({shouldForwardProp:void 0,styleSheet:Qn,stylis:Xn}),qn=(Gn.Consumer,t.createContext(void 0));function Zn(){return(0,t.useContext)(Gn)}function Jn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=Zn().styleSheet,a=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)((function(){return Yn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){_e()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return t.createElement(Gn.Provider,{value:l},t.createElement(qn.Provider,{value:s},e.children))}var er=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Xn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,kn(this,(function(){throw En(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Xn),this.name+e.hash},e}(),tr=function(e){return e>="A"&&e<="Z"};function nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},ir=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!rr(o)&&(Array.isArray(o)&&o.isCss||vn(o)?r.push("".concat(nr(i),":"),o,";"):wn(o)?r.push.apply(r,De(De(["".concat(i," {")],ir(o),!1),["}"],!1)):r.push("".concat(nr(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in At||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function or(e,t,n,r){return rr(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:vn(e)?!vn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:or(e(t),t,n,r):e instanceof er?n?(e.inject(n,r),[e.getName(r)]):[e]:wn(e)?ir(e):Array.isArray(e)?Array.prototype.concat.apply(It,e.map((function(e){return or(e,t,n,r)}))):[e.toString()];var i}function ar(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!yn(n))return!1}return!0}var sr=qt(Mt),lr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ar(e),this.componentId=t,this.baseHash=Gt(sr,t),this.baseStyle=n,$n.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=bn(r,this.staticRulesId);else{var i=xn(or(this.rules,e,t,n)),o=Qt(Gt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=bn(r,o),this.staticRulesId=o}else{for(var s=Gt(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=xn(or(c,e,t,n));s=Gt(s,d+u),l+=d}}if(l){var p=Qt(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=bn(r,p)}}return r},e}(),ur=t.createContext(void 0);ur.Consumer;var cr={};new Set;function dr(e,n,r){var i=yn(e),o=e,a=!en(e),s=n.attrs,l=void 0===s?It:s,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Ht(e);cr[n]=(cr[n]||0)+1;var r="".concat(n,"-").concat(Zt(Mt+n+cr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,p=void 0===d?function(e){return en(e)?"styled.".concat(e):"Styled(".concat(Jt(e),")")}(e):d,h=n.displayName&&n.componentId?"".concat(Ht(n.displayName),"-").concat(n.componentId):n.componentId||c,f=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new lr(r,h,i?o.componentStyle:void 0);function b(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=t.useContext(ur),d=Zn(),p=e.shouldForwardProp||d.shouldForwardProp,h=Bt(n,c,a)||Vt,f=function(e,t,n){for(var r,i=Re(Re({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=vn(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?bn(i[s],a[s]):"style"===s?Re(Re({},i[s]),a[s]):a[s]}return t.className&&(i.className=bn(i.className,t.className)),i}(i,n,h),m=f.as||u,g={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===h||("forwardedAs"===v?g.as=f.forwardedAs:p&&!p(v,m)||(g[v]=f[v]));var y=function(e,t){var n=Zn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,f),b=bn(s,l);return y&&(b+=" "+y),f.className&&(b+=" "+f.className),g[en(m)&&!Ut.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=p;var x=t.forwardRef(b);return x.attrs=f,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=i?bn(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=h,x.target=i?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Sn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),kn(x,(function(){return".".concat(x.styledComponentId)})),a&&gn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function pr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var hr=function(e){return Object.assign(e,{isCss:!0})};function fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||wn(e))return hr(or(pr(It,De([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?or(r):hr(or(pr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=Vt),!t)throw En(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,fr.apply(void 0,De([r],i,!1)))};return r.attrs=function(r){return mr(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Re(Re({},n),r))},r}var gr=function(e){return mr(dr,e)},vr=gr;Ut.forEach((function(e){vr[e]=gr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ar(e),$n.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(xn(or(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&$n.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ln(),r=xn([n&&'nonce="'.concat(n,'"'),"".concat(_t,'="true"'),"".concat(Ot,'="').concat(Mt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw En(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw En(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[_t]="",n[Ot]=Mt,n.dangerouslySetInnerHTML={__html:r},n),o=Ln();return o&&(i.nonce=o),[t.createElement("style",Re({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new $n({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw En(2);return t.createElement(Jn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw En(3)}})(),"__sc-".concat(_t,"__");function yr(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function br(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const xr=e=>Array.isArray(e);function wr(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Sr(e){return"string"===typeof e||Array.isArray(e)}function kr(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function Er(e,t,n,r){if("function"===typeof t){const[i,o]=kr(r);t=t(void 0!==n?n:e.custom,i,o)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,o]=kr(r);t=t(void 0!==n?n:e.custom,i,o)}return t}function Cr(e,t,n){const r=e.getProps();return Er(r,t,void 0!==n?n:r.custom,e)}const Pr=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jr=["initial",...Pr];function Tr(e){let t;return()=>(void 0===t&&(t=e()),t)}const Rr=Tr((()=>void 0!==window.ScrollTimeline));class Dr{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>"finished"in e?e.finished:e)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Rr()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Ar extends Dr{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function _r(e,t){return e?e[t]||e.default||e:void 0}const zr=2e4;function Or(e){let t=0;let n=e.next(t);for(;!n.done&&t<zr;)t+=50,n=e.next(t);return t>=zr?1/0:t}function Mr(e){return"function"===typeof e}function Lr(e,t){e.timeline=t,e.onfinish=null}const Fr=e=>Array.isArray(e)&&"number"===typeof e[0],Nr={linearEasing:void 0};function Ir(e,t){const n=Tr(e);return()=>{var e;return null!==(e=Nr[t])&&void 0!==e?e:n()}}const Vr=Ir((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(_g){return!1}return!0}),"linearEasing"),Br=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},Ur=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Br(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function $r(e){return Boolean("function"===typeof e&&Vr()||!e||"string"===typeof e&&(e in Hr||Vr())||Fr(e)||Array.isArray(e)&&e.every($r))}const Wr=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Hr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Wr([0,.65,.55,1]),circOut:Wr([.55,0,1,.45]),backIn:Wr([.31,.01,.66,-.59]),backOut:Wr([.33,1.53,.69,.99])};function Kr(e,t){return e?"function"===typeof e&&Vr()?Ur(e,t):Fr(e)?Wr(e):Array.isArray(e)?e.map((e=>Kr(e,t)||Hr.easeOut)):Hr[e]:void 0}const Yr={x:!1,y:!1};function Qr(){return Yr.x||Yr.y}function Xr(e,t){const n=function(e,t,n){var r;if(e instanceof Element)return[e];if("string"===typeof e){let i=document;t&&(i=t.current);const o=null!==(r=null===n||void 0===n?void 0:n[e])&&void 0!==r?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Gr(e){return t=>{"touch"===t.pointerType||Qr()||e(t)}}const qr=(e,t)=>!!t&&(e===t||qr(e,t.parentElement)),Zr=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary,Jr=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const ei=new WeakSet;function ti(e){return t=>{"Enter"===t.key&&e(t)}}function ni(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function ri(e){return Zr(e)&&!Qr()}function ii(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=Xr(e,n),a=e=>{const r=e.currentTarget;if(!ri(e)||ei.has(r))return;ei.add(r);const o=t(e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),ri(e)&&ei.has(r)&&(ei.delete(r),"function"===typeof o&&o(e,{success:t}))},s=e=>{a(e,n.useGlobalTarget||qr(r,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach((e=>{(function(e){return Jr.has(e.tagName)||-1!==e.tabIndex})(e)||null!==e.getAttribute("tabindex")||(e.tabIndex=0);(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,i),e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=ti((()=>{if(ei.has(n))return;ni(n,"down");const e=ti((()=>{ni(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>ni(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i)),i)})),o}const oi=e=>1e3*e,ai=e=>e/1e3,si=e=>e;const li=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ui=new Set(li),ci=new Set(["width","height","top","left","right","bottom",...li]),di=e=>xr(e)?e[e.length-1]||0:e,pi=!1,hi=!1;const fi=["read","resolveKeyframes","update","preRender","render","postRender"];function mi(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=fi.reduce(((e,t)=>(e[t]=function(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(t){o.has(t)&&(l.schedule(t),e()),t(a)}const l={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&r?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),i.has(e)||i.add(e),e},cancel:e=>{n.delete(e),o.delete(e)},process:e=>{a=e,r?i=!0:(r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,l.process(e)))}};return l}(o),e)),{}),{read:s,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:p}=a,h=()=>{const o=hi?i.timestamp:performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),c.process(i),d.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},f=fi.reduce(((t,o)=>{const s=a[o];return t[o]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(h)),s.schedule(t,o,a)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<fi.length;t++)a[fi[t]].cancel(e)},state:i,steps:a}}const{schedule:gi,cancel:vi,state:yi,steps:bi}=mi("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:si,!0);let xi;function wi(){xi=void 0}const Si={now:()=>(void 0===xi&&Si.set(yi.isProcessing||hi?yi.timestamp:performance.now()),xi),set:e=>{xi=e,queueMicrotask(wi)}};function ki(e,t){-1===e.indexOf(t)&&e.push(t)}function Ei(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ci{constructor(){this.subscriptions=[]}add(e){return ki(this.subscriptions,e),()=>Ei(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Pi(e,t){return t?e*(1e3/t):0}const ji={current:void 0};class Ti{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Si.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Si.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ci);const n=this.events[e].add(t);return"change"===e?()=>{n(),gi.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ji.current&&ji.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Si.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Pi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ri(e,t){return new Ti(e,t)}function Di(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ri(n))}const Ai=e=>Boolean(e&&e.getVelocity);function _i(e,t){const n=e.getValue("willChange");if(r=n,Boolean(Ai(r)&&r.add))return n.add(t);var r}const zi=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Oi="data-"+zi("framerAppearId");function Mi(e){return e.props[Oi]}const Li=!1,Fi=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Ni(e,t,n,r){if(e===t&&n===r)return si;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=Fi(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:Fi(i(e),t,r)}const Ii=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vi=e=>t=>1-e(1-t),Bi=Ni(.33,1.53,.69,.99),Ui=Vi(Bi),$i=Ii(Ui),Wi=e=>(e*=2)<1?.5*Ui(e):.5*(2-Math.pow(2,-10*(e-1))),Hi=e=>1-Math.sin(Math.acos(e)),Ki=Vi(Hi),Yi=Ii(Hi),Qi=e=>/^0[^.\s]+$/u.test(e);const Xi=(e,t,n)=>n>t?t:n<e?e:n,Gi={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},qi={...Gi,transform:e=>Xi(0,1,e)},Zi={...Gi,default:1},Ji=e=>Math.round(1e5*e)/1e5,eo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const to=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,no=(e,t)=>n=>Boolean("string"===typeof n&&to.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),ro=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,o,a,s]=r.match(eo);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},io={...Gi,transform:e=>Math.round((e=>Xi(0,255,e))(e))},oo={test:no("rgb","red"),parse:ro("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+io.transform(t)+", "+io.transform(n)+", "+io.transform(r)+", "+Ji(qi.transform(i))+")"}};const ao={test:no("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:oo.transform},so=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),lo=so("deg"),uo=so("%"),co=so("px"),po=so("vh"),ho=so("vw"),fo={...uo,parse:e=>uo.parse(e)/100,transform:e=>uo.transform(100*e)},mo={test:no("hsl","hue"),parse:ro("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+uo.transform(Ji(n))+", "+uo.transform(Ji(r))+", "+Ji(qi.transform(i))+")"}},go={test:e=>oo.test(e)||ao.test(e)||mo.test(e),parse:e=>oo.test(e)?oo.parse(e):mo.test(e)?mo.parse(e):ao.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?oo.transform(e):mo.transform(e)},vo=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const yo="number",bo="color",xo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(xo,(e=>(go.test(e)?(r.color.push(o),i.push(bo),n.push(go.parse(e))):e.startsWith("var(")?(r.var.push(o),i.push("var"),n.push(e)):(r.number.push(o),i.push(yo),n.push(parseFloat(e))),++o,"${}"))).split("${}");return{values:n,split:a,indexes:r,types:i}}function So(e){return wo(e).values}function ko(e){const{split:t,types:n}=wo(e),r=t.length;return e=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],void 0!==e[o]){const t=n[o];i+=t===yo?Ji(e[o]):t===bo?go.transform(e[o]):e[o]}return i}}const Eo=e=>"number"===typeof e?0:e;const Co={test:function(e){var t,n;return isNaN(e)&&"string"===typeof e&&((null===(t=e.match(eo))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(vo))||void 0===n?void 0:n.length)||0)>0},parse:So,createTransformer:ko,getAnimatableNone:function(e){const t=So(e);return ko(e)(t.map(Eo))}},Po=new Set(["brightness","contrast","saturate","opacity"]);function jo(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(eo)||[];if(!r)return e;const i=n.replace(r,"");let o=Po.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const To=/\b([a-z-]*)\(.*?\)/gu,Ro={...Co,getAnimatableNone:e=>{const t=e.match(To);return t?t.map(jo).join(" "):e}},Do={borderWidth:co,borderTopWidth:co,borderRightWidth:co,borderBottomWidth:co,borderLeftWidth:co,borderRadius:co,radius:co,borderTopLeftRadius:co,borderTopRightRadius:co,borderBottomRightRadius:co,borderBottomLeftRadius:co,width:co,maxWidth:co,height:co,maxHeight:co,top:co,right:co,bottom:co,left:co,padding:co,paddingTop:co,paddingRight:co,paddingBottom:co,paddingLeft:co,margin:co,marginTop:co,marginRight:co,marginBottom:co,marginLeft:co,backgroundPositionX:co,backgroundPositionY:co},Ao={rotate:lo,rotateX:lo,rotateY:lo,rotateZ:lo,scale:Zi,scaleX:Zi,scaleY:Zi,scaleZ:Zi,skew:lo,skewX:lo,skewY:lo,distance:co,translateX:co,translateY:co,translateZ:co,x:co,y:co,z:co,perspective:co,transformPerspective:co,opacity:qi,originX:fo,originY:fo,originZ:co},_o={...Gi,transform:Math.round},zo={...Do,...Ao,zIndex:_o,size:co,fillOpacity:qi,strokeOpacity:qi,numOctaves:_o},Oo={...zo,color:go,backgroundColor:go,outlineColor:go,fill:go,stroke:go,borderColor:go,borderTopColor:go,borderRightColor:go,borderBottomColor:go,borderLeftColor:go,filter:Ro,WebkitFilter:Ro},Mo=e=>Oo[e];function Lo(e,t){let n=Mo(e);return n!==Ro&&(n=Co),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Fo=new Set(["auto","none","0"]);const No=e=>e===Gi||e===co,Io=(e,t)=>parseFloat(e.split(", ")[t]),Vo=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/u);if(o)return Io(o[1],t);{const t=i.match(/^matrix\((.+)\)$/u);return t?Io(t[1],e):0}},Bo=new Set(["x","y","z"]),Uo=li.filter((e=>!Bo.has(e)));const $o={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:Vo(4,13),y:Vo(5,14)};$o.translateX=$o.x,$o.translateY=$o.y;const Wo=new Set;let Ho=!1,Ko=!1;function Yo(){if(Ko){const e=Array.from(Wo).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Uo.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;var i;null===(i=e.getValue(n))||void 0===i||i.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Ko=!1,Ho=!1,Wo.forEach((e=>e.complete())),Wo.clear()}function Qo(){Wo.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Ko=!0)}))}class Xo{constructor(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Wo.add(this),Ho||(Ho=!0,gi.read(Qo),gi.resolveKeyframes(Yo))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=null===r||void 0===r?void 0:r.get(),o=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,o);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Wo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Wo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}let Go=si,qo=si;const Zo=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Jo=e=>t=>"string"===typeof t&&t.startsWith(e),ea=Jo("--"),ta=Jo("var(--"),na=e=>!!ta(e)&&ra.test(e.split("/*")[0].trim()),ra=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ia=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oa(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;qo(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=ia.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${null!==n&&void 0!==n?n:r}`,i]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return Zo(e)?parseFloat(e):e}return na(i)?oa(i,t,n+1):i}const aa=e=>t=>t.test(e),sa=[Gi,co,uo,lo,ho,po,{test:e=>"auto"===e,parse:e=>e}],la=e=>sa.find(aa(e));class ua extends Xo{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),na(n))){const r=oa(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!ci.has(n)||2!==e.length)return;const[r,i]=e,o=la(r),a=la(i);if(o!==a)if(No(o)&&No(a))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||Qi(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!Fo.has(t)&&wo(t).values.length&&(r=e[i]),i++}if(r&&n)for(const o of t)e[o]=Lo(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$o[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=$o[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[n,r]=e;t.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const ca=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Co.test(e)&&"0"!==e||e.startsWith("url(")));function da(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const o=e[e.length-1],a=ca(i,t),s=ca(o,t);return Go(a===s,`You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),!(!a||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Mr(n))&&r)}const pa=e=>null!==e;function ha(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const o=e.filter(pa),a=r&&"loop"!==i&&r%2===1?0:o.length-1;return a&&void 0!==n?n:o[a]}class fa{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Si.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Qo(),Yo()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Si.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:o,onComplete:a,onUpdate:s,isGenerator:l}=this.options;if(!l&&!da(e,n,r,i)){if(Li||!o)return s&&s(ha(e,this.options,t)),a&&a(),void this.resolveFinishedPromise();this.options.duration=0}const u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const ma=(e,t,n)=>e+(t-e)*n;function ga(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function va(e,t){return n=>n>0?t:e}const ya=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ba=[ao,oo,mo];function xa(e){const t=(e=>ba.find((t=>t.test(e))))(e);if(Go(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let n=t.parse(e);return t===mo&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=ga(i,e,t+1/3),a=ga(i,e,t),s=ga(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const wa=(e,t)=>{const n=xa(e),r=xa(t);if(!n||!r)return va(e,t);const i={...n};return e=>(i.red=ya(n.red,r.red,e),i.green=ya(n.green,r.green,e),i.blue=ya(n.blue,r.blue,e),i.alpha=ma(n.alpha,r.alpha,e),oo.transform(i))},Sa=(e,t)=>n=>t(e(n)),ka=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Sa)},Ea=new Set(["none","hidden"]);function Ca(e,t){return n=>ma(e,t,n)}function Pa(e){return"number"===typeof e?Ca:"string"===typeof e?na(e)?va:go.test(e)?wa:Ra:Array.isArray(e)?ja:"object"===typeof e?go.test(e)?wa:Ta:va}function ja(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>Pa(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ta(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Pa(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const Ra=(e,t)=>{const n=Co.createTransformer(t),r=wo(e),i=wo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ea.has(e)&&!i.values.length||Ea.has(t)&&!r.values.length?function(e,t){return Ea.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):ka(ja(function(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=null!==(n=e.values[s])&&void 0!==n?n:0;r[o]=l,i[a]++}return r}(r,i),i.values),n):(Go(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),va(e,t))};function Da(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return ma(e,t,n);return Pa(e)(e,t)}function Aa(e,t,n){const r=Math.max(t-5,0);return Pi(n-e(r),t-r)}const _a={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},za=.001;function Oa(e){let t,n,{duration:r=_a.duration,bounce:i=_a.bounce,velocity:o=_a.velocity,mass:a=_a.mass}=e;Go(r<=oi(_a.maxDuration),"Spring duration must be 10 seconds or less");let s=1-i;s=Xi(_a.minDamping,_a.maxDamping,s),r=Xi(_a.minDuration,_a.maxDuration,ai(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=La(e,s),l=Math.exp(-n);return za-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),u=La(Math.pow(e,2),s);return(-t(e)+za>0?-1:1)*((i-a)*l)/u}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Ma;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=oi(r),isNaN(l))return{stiffness:_a.stiffness,damping:_a.damping,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const Ma=12;function La(e,t){return e*Math.sqrt(1-t*t)}const Fa=["duration","bounce"],Na=["stiffness","damping","mass"];function Ia(e,t){return t.some((t=>void 0!==e[t]))}function Va(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_a.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_a.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:_a.velocity,stiffness:_a.stiffness,damping:_a.damping,mass:_a.mass,isResolvedFromDuration:!1,...e};if(!Ia(e,Na)&&Ia(e,Fa))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,o=2*Xi(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:_a.mass,stiffness:i,damping:o}}else{const n=Oa(e);t={...t,...n,mass:_a.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-ai(n.velocity||0)}),f=p||0,m=u/(2*Math.sqrt(l*c)),g=a-o,v=ai(Math.sqrt(l/c)),y=Math.abs(g)<5;let b;if(r||(r=y?_a.restSpeed.granular:_a.restSpeed.default),i||(i=y?_a.restDelta.granular:_a.restDelta.default),m<1){const e=La(v,m);b=t=>{const n=Math.exp(-m*v*t);return a-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>a-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:h&&d||null,next:e=>{const t=b(e);if(h)s.done=e>=d;else{let n=0;m<1&&(n=0===e?oi(f):Aa(b,e,t));const o=Math.abs(n)<=r,l=Math.abs(a-t)<=i;s.done=o&&l}return s.value=s.done?a:t,s},toString:()=>{const e=Math.min(Or(x),zr),t=Ur((t=>x.next(e*t).value),e,30);return e+"ms "+t}};return x}function Ba(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:u,restDelta:c=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?u:void 0===u||Math.abs(l-e)<Math.abs(u-e)?l:u;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);h.done=Math.abs(t)<=c,h.value=h.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==u&&e>u)(h.value)&&(w=e,S=Va({keyframes:[h.value,f(h.value)],velocity:Aa(b,e,h.value),damping:o,stiffness:a,restDelta:c,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,x(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&x(e),h)}}}const Ua=Ni(.42,0,1,1),$a=Ni(0,0,.58,1),Wa=Ni(.42,0,.58,1),Ha={linear:si,easeIn:Ua,easeInOut:Wa,easeOut:$a,circIn:Hi,circInOut:Yi,circOut:Ki,backIn:Ui,backInOut:$i,backOut:Bi,anticipate:Wi},Ka=e=>{if(Fr(e)){qo(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Ni(t,n,r,i)}return"string"===typeof e?(qo(void 0!==Ha[e],`Invalid easing type '${e}'`),Ha[e]):e};function Ya(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(qo(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Da,o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||si:t;n=ka(e,n)}r.push(n)}return r}(t,r,i),l=s.length,u=n=>{if(a&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Br(e[r],e[r+1],n);return s[r](i)};return n?t=>u(Xi(e[0],e[o-1],t)):u}function Qa(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Br(0,t,r);e.push(ma(n,1,i))}}(t,e.length-1),t}function Xa(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Ka):Ka(i),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Qa(n),t),l=Ya(s,n,{ease:Array.isArray(o)?o:(u=n,c=o,u.map((()=>c||Wa)).splice(0,u.length-1))});var u,c;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}const Ga=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>gi.update(t,!0),stop:()=>vi(t),now:()=>yi.isProcessing?yi.timestamp:Si.now()}},qa={decay:Ba,inertia:Ba,tween:Xa,keyframes:Xa,spring:Va},Za=e=>e/100;class Ja extends fa{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,o=(null===r||void 0===r?void 0:r.KeyframeResolver)||Xo;this.resolver=new o(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:o=0}=this.options,a=Mr(t)?t:qa[t]||Xa;let s,l;a!==Xa&&"number"!==typeof e[0]&&(s=ka(Za,Da(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});"mirror"===i&&(l=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),null===u.calculatedDuration&&(u.calculatedDuration=Or(u));const{calculatedDuration:c}=u,d=c+r;return{generator:u,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:c,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:s,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:p,repeatType:h,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,b=i;if(p){const e=Math.min(this.currentTime,u)/c;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,p+1);Boolean(t%2)&&("reverse"===h?(n=1-n,f&&(n-=f/c)):"mirror"===h&&(b=o)),y=Xi(0,1,n)*c}const x=v?{done:!1,value:s[0]}:b.next(y);a&&(x.value=a(x.value));let{done:w}=x;v||null===l||(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&void 0!==r&&(x.value=ha(s,this.options,r)),m&&m(x.value),S&&this.finish(),x}get duration(){const{resolved:e}=this;return e?ai(e.calculatedDuration):0}get time(){return ai(this.currentTime)}set time(e){e=oi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ai(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Ga,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=null!==n&&void 0!==n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const es=new Set(["opacity","clipPath","filter","transform"]);const ts=Tr((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const ns={anticipate:Wi,backInOut:$i,circInOut:Yi};class rs extends fa{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new ua(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:o,motionValue:a,name:s,startTime:l}=this.options;if(!a.owner||!a.owner.current)return!1;var u;if("string"===typeof i&&Vr()&&i in ns&&(i=ns[i]),Mr((u=this.options).type)||"spring"===u.type||!$r(u.ease)){const{onComplete:t,onUpdate:a,motionValue:s,element:l,...u}=this.options,c=function(e,t){const n=new Ja({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<2e4;)r=n.sample(o),i.push(r.value),o+=10;return{times:void 0,keyframes:i,duration:o-10,ease:"linear"}}(e,u);1===(e=c.keyframes).length&&(e[1]=e[0]),n=c.duration,r=c.times,i=c.ease,o="keyframes"}const c=function(e,t,n){let{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const u={[t]:n};l&&(u.offset=l);const c=Kr(s,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(a.owner.current,s,e,{...this.options,duration:n,times:r,ease:i});return c.startTime=null!==l&&void 0!==l?l:this.calcStartTime(),this.pendingTimeline?(Lr(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:n}=this.options;a.set(ha(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:n,times:r,type:o,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return ai(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return ai(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=oi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return si;const{animation:n}=t;Lr(n,e)}else this.pendingTimeline=e;return si}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:o,times:a}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...u}=this.options,c=new Ja({...u,keyframes:n,duration:r,type:i,ease:o,times:a,isGenerator:!0}),d=oi(this.time);e.setWithVelocity(c.sample(d-10).value,c.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:a}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return ts()&&n&&es.has(n)&&!s&&!l&&!r&&"mirror"!==i&&0!==o&&"inertia"!==a}}const is={type:"spring",stiffness:500,damping:25,restSpeed:10},os={type:"keyframes",duration:.8},as={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ss=(e,t)=>{let{keyframes:n}=t;return n.length>2?os:ui.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:is:as};const ls=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;return a=>{const s=_r(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u-=oi(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:u,elapsed:c,...d}=e;return!!Object.keys(d).length})(s)||(c={...c,...ss(e,c)}),c.duration&&(c.duration=oi(c.duration)),c.repeatDelay&&(c.repeatDelay=oi(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if((!1===c.type||0===c.duration&&!c.repeatDelay)&&(c.duration=0,0===c.delay&&(d=!0)),(Li||pi)&&(d=!0,c.duration=0,c.delay=0),d&&!o&&void 0!==t.get()){const e=ha(c.keyframes,s);if(void 0!==e)return gi.update((()=>{c.onUpdate(e),c.onComplete()})),new Ar([])}return!o&&rs.supports(c)?new rs(c):new Ja(c)}};function us(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function cs(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const t=e.getValue(d,null!==(o=e.latestValues[d])&&void 0!==o?o:null),r=l[d];if(void 0===r||c&&us(c,d))continue;const i={delay:n,..._r(a||{},d)};let s=!1;if(window.MotionHandoffAnimation){const t=Mi(e);if(t){const e=window.MotionHandoffAnimation(t,d,gi);null!==e&&(i.startTime=e,s=!0)}}_i(e,d),t.start(ls(d,t,r,e.shouldReduceMotion&&ci.has(d)?{type:!1}:i,e,s));const p=t.animation;p&&u.push(p)}return s&&Promise.all(u).then((()=>{gi.update((()=>{s&&function(e,t){const n=Cr(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o)Di(e,a,di(o[a]))}(e,s)}))})),u}function ds(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r;const i=Cr(e,t,"exit"===n.type?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(cs(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(ps).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push(ds(e,t,{...o,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,i+r,a,s,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[e,t]="beforeChildren"===l?[a,s]:[s,a];return e().then((()=>t()))}return Promise.all([a(),s(n.delay)])}function ps(e,t){return e.sortNodePosition(t)}const hs=jr.length;function fs(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&fs(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<hs;n++){const r=jr[n],i=e.props[r];(Sr(i)||!1===i)&&(t[r]=i)}return t}const ms=[...Pr].reverse(),gs=Pr.length;function vs(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>ds(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=ds(e,t,r);else{const i="function"===typeof t?Cr(e,t,r.custom):t;n=Promise.all(cs(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function ys(e){let t=vs(e),n=ws(),r=!0;const i=t=>(n,r)=>{var i;const o=Cr(e,r,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(o){const{transition:e,transitionEnd:t,...r}=o;n={...n,...r,...t}}return n};function o(o){const{props:a}=e,s=fs(e.parent)||{},l=[],u=new Set;let c={},d=1/0;for(let t=0;t<gs;t++){const p=ms[t],h=n[p],f=void 0!==a[p]?a[p]:s[p],m=Sr(f),g=p===o?h.isActive:null;!1===g&&(d=t);let v=f===s[p]&&f!==a[p]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...c},!h.isActive&&null===g||!f&&!h.prevProp||br(f)||"boolean"===typeof f)continue;const y=bs(h.prevProp,f);let b=y||p===o&&h.isActive&&!v&&m||t>d&&m,x=!1;const w=Array.isArray(f)?f:[f];let S=w.reduce(i(p),{});!1===g&&(S={});const{prevResolvedValues:k={}}=h,E={...k,...S},C=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in E){const t=S[e],n=k[e];if(c.hasOwnProperty(e))continue;let r=!1;r=xr(t)&&xr(n)?!wr(t,n):t!==n,r?void 0!==t&&null!==t?C(e):u.add(e):void 0!==t&&u.has(e)?C(e):h.protectedKeys[e]=!0}h.prevProp=f,h.prevResolvedValues=S,h.isActive&&(c={...c,...S}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(v&&y)||x)&&l.push(...w.map((e=>({animation:e,options:{type:p}}))))}if(u.size){const t={};u.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=null!==r&&void 0!==r?r:null})),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==a.initial&&a.initial!==a.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,r){var i;if(n[t].isActive===r)return Promise.resolve();null===(i=e.variantChildren)||void 0===i||i.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const a=o(t);for(const e in n)n[e].protectedKeys={};return a},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=ws(),r=!0}}}function bs(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!wr(t,e)}function xs(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ws(){return{animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()}}class Ss{constructor(e){this.isMounted=!1,this.node=e}update(){}}let ks=0;const Es={animation:{Feature:class extends Ss{constructor(e){super(e),e.animationState||(e.animationState=ys(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();br(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends Ss{constructor(){super(...arguments),this.id=ks++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}};function Cs(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ps(e){return{point:{x:e.pageX,y:e.pageY}}}function js(e,t,n,r){return Cs(e,t,(e=>t=>Zr(t)&&e(t,Ps(t)))(n),r)}const Ts=(e,t)=>Math.abs(e-t);class Rs{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=_s(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ts(e.x,t.x),r=Ts(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=yi;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ds(t,this.transformPagePoint),gi.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=_s("pointercancel"===e.type?this.lastMoveEventInfo:Ds(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!Zr(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const o=Ds(Ps(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=yi;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,_s(o,this.history)),this.removeListeners=ka(js(this.contextWindow,"pointermove",this.handlePointerMove),js(this.contextWindow,"pointerup",this.handlePointerUp),js(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),vi(this.updatePoint)}}function Ds(e,t){return t?{point:t(e.point)}:e}function As(e,t){return{x:e.x-t.x,y:e.y-t.y}}function _s(e,t){let{point:n}=e;return{point:n,delta:As(n,Os(t)),offset:As(n,zs(t)),velocity:Ms(t,.1)}}function zs(e){return e[0]}function Os(e){return e[e.length-1]}function Ms(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Os(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>oi(t)));)n--;if(!r)return{x:0,y:0};const o=ai(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ls(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Fs(e){return e.max-e.min}function Ns(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=ma(t.min,t.max,e.origin),e.scale=Fs(n)/Fs(t),e.translate=ma(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Is(e,t,n,r){Ns(e.x,t.x,n.x,r?r.originX:void 0),Ns(e.y,t.y,n.y,r?r.originY:void 0)}function Vs(e,t,n){e.min=n.min+t.min,e.max=e.min+Fs(t)}function Bs(e,t,n){e.min=t.min-n.min,e.max=e.min+Fs(t)}function Us(e,t,n){Bs(e.x,t.x,n.x),Bs(e.y,t.y,n.y)}function $s(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Ws(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Hs=.35;function Ks(e,t,n){return{min:Ys(e,t),max:Ys(e,n)}}function Ys(e,t){return"number"===typeof e?e:e[t]||0}const Qs=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Xs(e){return[e("x"),e("y")]}function Gs(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function qs(e){return void 0===e||1===e}function Zs(e){let{scale:t,scaleX:n,scaleY:r}=e;return!qs(t)||!qs(n)||!qs(r)}function Js(e){return Zs(e)||el(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function el(e){return tl(e.x)||tl(e.y)}function tl(e){return e&&"0%"!==e}function nl(e,t,n){return n+t*(e-n)}function rl(e,t,n,r,i){return void 0!==i&&(e=nl(e,i,r)),nl(e,n,r)+t}function il(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=rl(e.min,t,n,r,i),e.max=rl(e.max,t,n,r,i)}function ol(e,t){let{x:n,y:r}=t;il(e.x,n.translate,n.scale,n.originPoint),il(e.y,r.translate,r.scale,r.originPoint)}const al=.999999999999,sl=1.0000000000001;function ll(e,t){e.min=e.min+t,e.max=e.max+t}function ul(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;il(e,t,n,ma(e.min,e.max,i),r)}function cl(e,t){ul(e.x,t.x,t.scaleX,t.scale,t.originX),ul(e.y,t.y,t.scaleY,t.scale,t.originY)}function dl(e,t){return Gs(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const pl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},hl=new WeakMap;class fl{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Rs(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ps(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?Yr[o]?null:(Yr[o]=!0,()=>{Yr[o]=!1}):Yr.x||Yr.y?null:(Yr.x=Yr.y=!0,()=>{Yr.x=Yr.y=!1}),!this.openDragLock))return;var o;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xs((e=>{let t=this.getAxisMotionValue(e).get()||0;if(uo.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Fs(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&gi.postRender((()=>i(e,t))),_i(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Xs((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:pl(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&gi.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!ml(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?ma(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?ma(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Ls(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:$s(e.x,r,o),y:$s(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hs;return!1===e?e=0:!0===e&&(e=Hs),{x:Ks(e,"left","right"),y:Ks(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Xs((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ls(e))return!1;const n=e.current;qo(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=dl(e,n),{scroll:i}=t;return i&&(ll(r.x,i.offset.x),ll(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:Ws(e.x,t.x),y:Ws(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Gs(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=Xs((a=>{if(!ml(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return _i(this.visualElement,e),n.start(ls(e,n,0,t,this.visualElement,!1))}stopAnimation(){Xs((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Xs((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Xs((t=>{const{drag:n}=this.getProps();if(!ml(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-ma(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ls(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Xs((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Fs(e),i=Fs(t);return i>r?n=Br(t.min,t.max-r,e.min):r>i&&(n=Br(e.min,e.max-i,t.min)),Xi(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Xs((t=>{if(!ml(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(ma(i,o,r[t]))}))}addListeners(){if(!this.visualElement.current)return;hl.set(this.visualElement,this);const e=js(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Ls(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),gi.read(t);const i=Cs(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Xs((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=Hs,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function ml(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const gl=e=>(t,n)=>{e&&gi.postRender((()=>e(t,n)))};var vl=n(579);const yl=(0,t.createContext)(null);const bl=(0,t.createContext)({}),xl=(0,t.createContext)({}),wl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sl(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const kl={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!co.test(e))return e;e=parseFloat(e)}return`${Sl(e,t.target.x)}% ${Sl(e,t.target.y)}%`}},El={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=Co.parse(e);if(o.length>5)return i;const a=Co.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,u=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=u;const c=ma(l,u,.5);return"number"===typeof o[2+s]&&(o[2+s]/=c),"number"===typeof o[3+s]&&(o[3+s]/=c),a(o)}},Cl={};const{schedule:Pl,cancel:jl}=mi(queueMicrotask,!1);class Tl extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var o;o=Dl,Object.assign(Cl,o),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),wl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o?(o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||gi.postRender((()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Pl.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Rl(e){const[n,r]=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,t.useContext)(yl);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:o}=n,a=(0,t.useId)();(0,t.useEffect)((()=>{e&&o(a)}),[e]);const s=(0,t.useCallback)((()=>e&&i&&i(a)),[a,i,e]);return!r&&i?[!1,s]:[!0]}(),i=(0,t.useContext)(bl);return(0,vl.jsx)(Tl,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(xl),isPresent:n,safeToRemove:r})}const Dl={borderRadius:{...kl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kl,borderTopRightRadius:kl,borderBottomLeftRadius:kl,borderBottomRightRadius:kl,boxShadow:El};const Al=(e,t)=>e.depth-t.depth;class _l{constructor(){this.children=[],this.isDirty=!1}add(e){ki(this.children,e),this.isDirty=!0}remove(e){Ei(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Al),this.isDirty=!1,this.children.forEach(e)}}function zl(e,t){const n=Si.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(vi(r),e(a-t))};return gi.read(r,!0),()=>vi(r)}function Ol(e){const t=Ai(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Ml=["TopLeft","TopRight","BottomLeft","BottomRight"],Ll=Ml.length,Fl=e=>"string"===typeof e?parseFloat(e):e,Nl=e=>"number"===typeof e||co.test(e);function Il(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Vl=Ul(0,.5,Ki),Bl=Ul(.5,.95,si);function Ul(e,t,n){return r=>r<e?0:r>t?1:n(Br(e,t,r))}function $l(e,t){e.min=t.min,e.max=t.max}function Wl(e,t){$l(e.x,t.x),$l(e.y,t.y)}function Hl(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Kl(e,t,n,r,i){return e=nl(e-=t,1/n,r),void 0!==i&&(e=nl(e,1/i,r)),e}function Yl(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;uo.test(t)&&(t=parseFloat(t),t=ma(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=ma(o.min,o.max,r);e===o&&(s-=t),e.min=Kl(e.min,t,n,s,i),e.max=Kl(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const Ql=["x","scaleX","originX"],Xl=["y","scaleY","originY"];function Gl(e,t,n,r){Yl(e.x,t,Ql,n?n.x:void 0,r?r.x:void 0),Yl(e.y,t,Xl,n?n.y:void 0,r?r.y:void 0)}function ql(e){return 0===e.translate&&1===e.scale}function Zl(e){return ql(e.x)&&ql(e.y)}function Jl(e,t){return e.min===t.min&&e.max===t.max}function eu(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function tu(e,t){return eu(e.x,t.x)&&eu(e.y,t.y)}function nu(e){return Fs(e.x)/Fs(e.y)}function ru(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class iu{constructor(){this.members=[]}add(e){ki(this.members,e),e.scheduleRender()}remove(e){if(Ei(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ou={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},au="undefined"!==typeof window&&void 0!==window.MotionDebug,su=["","X","Y","Z"],lu={visibility:"hidden"};let uu=0;function cu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function du(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Mi(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",gi,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&du(r)}function pu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=uu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,au&&(ou.totalNodes=ou.resolvedTargetDeltas=ou.recalculatedProjection=0),this.nodes.forEach(mu),this.nodes.forEach(Su),this.nodes.forEach(ku),this.nodes.forEach(gu),au&&window.MotionDebug.record(ou)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new _l)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ci),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(o||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=zl(r,250),wl.hasAnimatedSinceResize&&(wl.hasAnimatedSinceResize=!1,this.nodes.forEach(wu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||o)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||Ru,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),u=!this.targetLayout||!tu(this.targetLayout,i)||r,c=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||c||n&&(u||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={..._r(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||wu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,vi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Eu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&du(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(yu);this.isUpdating||this.nodes.forEach(bu),this.isUpdating=!1,this.nodes.forEach(xu),this.nodes.forEach(hu),this.nodes.forEach(fu),this.clearAllSnapshots();const e=Si.now();yi.delta=Xi(0,1e3/60,e-yi.timestamp),yi.timestamp=e,yi.isProcessing=!0,bi.update.process(yi),bi.preRender.process(yi),bi.render.process(yi),yi.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vu),this.sharedNodes.forEach(Cu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,gi.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){gi.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Zl(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Js(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),_u((r=n).x),_u(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const n=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Ou))){const{scroll:e}=this.root;e&&(ll(n.x,e.offset.x),ll(n.y,e.offset.y))}return n}removeElementScroll(e){var t;const n={x:{min:0,max:0},y:{min:0,max:0}};if(Wl(n,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return n;for(let r=0;r<this.path.length;r++){const t=this.path[r],{scroll:i,options:o}=t;t!==this.root&&i&&o.layoutScroll&&(i.wasRoot&&Wl(n,e),ll(n.x,i.offset.x),ll(n.y,i.offset.y))}return n}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Wl(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&cl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Js(e.latestValues)&&cl(n,e.latestValues)}return Js(this.latestValues)&&cl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Wl(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Js(e.latestValues))continue;Zs(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Wl(r,e.measurePageBox()),Gl(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Js(this.latestValues)&&Gl(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yi.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=yi.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Us(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Wl(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,Vs(a.x,s.x,l.x),Vs(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Wl(this.target,this.layout.layoutBox),ol(this.target,this.targetDelta)):Wl(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Us(this.relativeTargetOrigin,this.target,e.target),Wl(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}au&&ou.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Zs(this.parent.latestValues)&&!el(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===yi.timestamp&&(r=!1),r)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;Wl(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:i}=o.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&cl(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,ol(e,a)),r&&Js(o.latestValues)&&cl(e,o.latestValues))}t.x<sl&&t.x>al&&(t.x=1),t.y<sl&&t.y>al&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(Hl(this.prevProjectionDelta.x,this.projectionDelta.x),Hl(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Is(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===a&&this.treeScale.y===s&&ru(this.projectionDelta.x,this.prevProjectionDelta.x)&&ru(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),au&&ou.recalculatedProjection++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(s&&!u&&!0===this.options.crossfade&&!this.path.some(Tu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Pu(o.x,e.x,n),Pu(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Us(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){ju(e.x,t.x,n.x,r),ju(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return Jl(e.x,t.x)&&Jl(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Wl(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=ma(0,void 0!==n.opacity?n.opacity:1,Vl(r)),e.opacityExit=ma(void 0!==t.opacity?t.opacity:1,0,Bl(r))):o&&(e.opacity=ma(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<Ll;a++){const i=`border${Ml[a]}Radius`;let o=Il(t,i),s=Il(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||Nl(o)===Nl(s)?(e[i]=Math.max(ma(Fl(o),Fl(s),r),0),(uo.test(s)||uo.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=ma(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(vi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=gi.update((()=>{wl.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=Ai(e)?e:Ri(e);return r.start(ls("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&zu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Fs(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Fs(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Wl(t,n),cl(t,i),Is(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new iu);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&cu("z",e,r,this.animationValues);for(let i=0;i<su.length;i++)cu(`rotate${su[i]}`,e,r,this.animationValues),cu(`skew${su[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return lu;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=Ol(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Ol(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Js(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(null===n||void 0===n?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:a,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),o&&(r+=`rotateY(${o}deg) `),a&&(r+=`skewX(${a}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const u in Cl){if(void 0===a[u])continue;const{correct:e,applyTo:t}=Cl[u],n="none"===r.transform?a[u]:e(a[u],o);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[u]=n}return this.options.layoutId&&(r.pointerEvents=o===this?Ol(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(yu),this.root.sharedNodes.clear()}}}function hu(e){e.updateLayout()}function fu(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;"size"===i?Xs((e=>{const r=o?n.measuredBox[e]:n.layoutBox[e],i=Fs(r);r.min=t[e].min,r.max=r.min+i})):zu(i,n.layoutBox,t)&&Xs((r=>{const i=o?n.measuredBox[r]:n.layoutBox[r],a=Fs(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Is(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?Is(s,e.applyTransform(r,!0),n.measuredBox):Is(s,t,n.layoutBox);const l=!Zl(a);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};Us(a,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Us(s,t,o.layoutBox),tu(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function mu(e){au&&ou.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function gu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function vu(e){e.clearSnapshot()}function yu(e){e.clearMeasurements()}function bu(e){e.isLayoutDirty=!1}function xu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function wu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Su(e){e.resolveTargetDelta()}function ku(e){e.calcProjection()}function Eu(e){e.resetSkewAndRotation()}function Cu(e){e.removeLeadSnapshot()}function Pu(e,t,n){e.translate=ma(t.translate,0,n),e.scale=ma(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ju(e,t,n,r){e.min=ma(t.min,n.min,r),e.max=ma(t.max,n.max,r)}function Tu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Ru={duration:.45,ease:[.4,0,.1,1]},Du=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Au=Du("applewebkit/")&&!Du("chrome/")?Math.round:si;function _u(e){e.min=Au(e.min),e.max=Au(e.max)}function zu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=nu(t),i=nu(n),o=.2,!(Math.abs(r-i)<=o));var r,i,o}function Ou(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const Mu=pu({attachResizeListener:(e,t)=>Cs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lu={current:void 0},Fu=pu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lu.current){const e=new Mu({});e.mount(window),e.setOptions({layoutScroll:!0}),Lu.current=e}return Lu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Nu={pan:{Feature:class extends Ss{constructor(){super(...arguments),this.removePointerDownListener=si}onPointerDown(e){this.session=new Rs(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:gl(e),onStart:gl(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&gi.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=js(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Ss{constructor(e){super(e),this.removeGroupControls=si,this.removeListeners=si,this.controls=new fl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||si}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Fu,MeasureLayout:Rl}};function Iu(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&gi.postRender((()=>i(t,Ps(t))))}function Vu(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&gi.postRender((()=>i(t,Ps(t))))}const Bu=new WeakMap,Uu=new WeakMap,$u=e=>{const t=Bu.get(e.target);t&&t(e)},Wu=e=>{e.forEach($u)};function Hu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Uu.has(r)||Uu.set(r,{});const i=Uu.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(Wu,{root:t,...n})),i[o]}(t);return Bu.set(e,n),r.observe(e),()=>{Bu.delete(e),r.unobserve(e)}}const Ku={some:0,all:1};const Yu={inView:{Feature:class extends Ss{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Ku[r]};return Hu(this.node.current,o,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Ss{mount(){const{current:e}=this.node;e&&(this.unmount=ii(e,(e=>(Vu(this.node,e,"Start"),(e,t)=>{let{success:n}=t;return Vu(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Ss{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(_g){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ka(Cs(this.node.current,"focus",(()=>this.onFocus())),Cs(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Ss{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=Xr(e,n),a=Gr((e=>{const{target:n}=e,r=t(e);if("function"!==typeof r||!n)return;const o=Gr((e=>{r(e),n.removeEventListener("pointerleave",o)}));n.addEventListener("pointerleave",o,i)}));return r.forEach((e=>{e.addEventListener("pointerenter",a,i)})),o}(e,(e=>(Iu(this.node,e,"Start"),e=>Iu(this.node,e,"End")))))}unmount(){}}}},Qu={layout:{ProjectionNode:Fu,MeasureLayout:Rl}},Xu=(0,t.createContext)({strict:!1}),Gu=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),qu=(0,t.createContext)({});function Zu(e){return br(e.animate)||jr.some((t=>Sr(e[t])))}function Ju(e){return Boolean(Zu(e)||e.variants)}function ec(e){const{initial:n,animate:r}=function(e,t){if(Zu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Sr(t)?t:void 0,animate:Sr(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(qu));return(0,t.useMemo)((()=>({initial:n,animate:r})),[tc(n),tc(r)])}function tc(e){return Array.isArray(e)?e.join(" "):e}const nc="undefined"!==typeof window,rc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ic={};for(const n in rc)ic[n]={isEnabled:e=>rc[n].some((t=>!!e[t]))};const oc=Symbol.for("motionComponentSymbol");function ac(e,n,r){return(0,t.useCallback)((t=>{t&&e.onMount&&e.onMount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):Ls(r)&&(r.current=t))}),[n])}const sc=nc?t.useLayoutEffect:t.useEffect;function lc(e,n,r,i,o){var a,s;const{visualElement:l}=(0,t.useContext)(qu),u=(0,t.useContext)(Xu),c=(0,t.useContext)(yl),d=(0,t.useContext)(Gu).reducedMotion,p=(0,t.useRef)(null);i=i||u.renderer,!p.current&&i&&(p.current=i(e,{visualState:n,parent:l,props:r,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:d}));const h=p.current,f=(0,t.useContext)(xl);!h||h.projection||!o||"html"!==h.type&&"svg"!==h.type||function(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:uc(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:Boolean(a)||s&&Ls(s),visualElement:e,animationType:"string"===typeof o?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}(p.current,r,o,f);const m=(0,t.useRef)(!1);(0,t.useInsertionEffect)((()=>{h&&m.current&&h.update(r,c)}));const g=r[Oi],v=(0,t.useRef)(Boolean(g)&&!(null===(a=window.MotionHandoffIsComplete)||void 0===a?void 0:a.call(window,g))&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,g)));return sc((()=>{h&&(m.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Pl.render(h.render),v.current&&h.animationState&&h.animationState.animateChanges())})),(0,t.useEffect)((()=>{h&&(!v.current&&h.animationState&&h.animationState.animateChanges(),v.current&&(queueMicrotask((()=>{var e;null===(e=window.MotionHandoffMarkAsComplete)||void 0===e||e.call(window,g)})),v.current=!1))})),h}function uc(e){if(e)return!1!==e.options.allowProjection?e.projection:uc(e.parent)}function cc(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:o,Component:a}=e;var s,l;function u(e,n){let s;const l={...(0,t.useContext)(Gu),...e,layoutId:dc(e)},{isStatic:u}=l,c=ec(e),d=o(e,u);if(!u&&nc){!function(){(0,t.useContext)(Xu).strict;0}();const e=function(e){const{drag:t,layout:n}=ic;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===n||void 0===n?void 0:n.isEnabled(e))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=e.MeasureLayout,c.visualElement=lc(a,d,l,r,e.ProjectionNode)}return(0,vl.jsxs)(qu.Provider,{value:c,children:[s&&c.visualElement?(0,vl.jsx)(s,{visualElement:c.visualElement,...l}):null,i(a,e,ac(d,c.visualElement,n),d,u,c.visualElement)]})}n&&function(e){for(const t in e)ic[t]={...ic[t],...e[t]}}(n),u.displayName=`motion.${"string"===typeof a?a:`create(${null!==(l=null!==(s=a.displayName)&&void 0!==s?s:a.name)&&void 0!==l?l:""})`}`;const c=(0,t.forwardRef)(u);return c[oc]=a,c}function dc(e){let{layoutId:n}=e;const r=(0,t.useContext)(bl).id;return r&&void 0!==n?r+"-"+n:n}const pc=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hc(e){return"string"===typeof e&&!e.includes("-")&&!!(pc.indexOf(e)>-1||/[A-Z]/u.test(e))}const fc=e=>(n,r)=>{const i=(0,t.useContext)(qu),o=(0,t.useContext)(yl),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o,onUpdate:a}=e;const s={latestValues:mc(t,n,r,i),renderState:o()};return a&&(s.onMount=e=>a({props:t,current:e,...s}),s.onUpdate=e=>a(e)),s}(e,n,i,o);return r?a():function(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}(a)};function mc(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=Ol(o[p]);let{initial:a,animate:s}=e;const l=Zu(e),u=Ju(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;const d=c?s:a;if(d&&"boolean"!==typeof d&&!br(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=Er(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[c?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const gc=(e,t)=>t&&"number"===typeof e?t.transform(e):e,vc={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yc=li.length;function bc(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const e=t[l];if(ui.has(l))a=!0;else if(ea(l))i[l]=e;else{const t=gc(e,zo[l]);l.startsWith("origin")?(s=!0,o[l]=t):r[l]=t}}if(t.transform||(a||n?r.transform=function(e,t,n){let r="",i=!0;for(let o=0;o<yc;o++){const a=li[o],s=e[a];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(a.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=gc(s,zo[a]);l||(i=!1,r+=`${vc[a]||a}(${e}) `),n&&(t[a]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=o;r.transformOrigin=`${e} ${t} ${n}`}}const xc={offset:"stroke-dashoffset",array:"stroke-dasharray"},wc={offset:"strokeDashoffset",array:"strokeDasharray"};function Sc(e,t,n){return"string"===typeof e?e:co.transform(t+n*e)}function kc(e,t,n,r){let{attrX:i,attrY:o,attrScale:a,originX:s,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...p}=t;if(bc(e,p,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:f,dimensions:m}=e;h.transform&&(m&&(f.transform=h.transform),delete h.transform),m&&(void 0!==s||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${Sc(t,e.x,e.width)} ${Sc(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(h.x=i),void 0!==o&&(h.y=o),void 0!==a&&(h.scale=a),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?xc:wc;e[o.offset]=co.transform(-r);const a=co.transform(t),s=co.transform(n);e[o.array]=`${a} ${s}`}(h,u,c,d,!1)}const Ec=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Cc=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Pc=e=>"string"===typeof e&&"svg"===e.toLowerCase();function jc(e,t,n,r){let{style:i,vars:o}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const a in o)e.style.setProperty(a,o[a])}const Tc=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rc(e,t,n,r){jc(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Tc.has(i)?i:zi(i),t.attrs[i])}function Dc(e,t){let{layout:n,layoutId:r}=t;return ui.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Cl[e]||"opacity"===e)}function Ac(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(Ai(i[a])||t.style&&Ai(t.style[a])||Dc(a,e)||void 0!==(null===(r=null===n||void 0===n?void 0:n.getValue(a))||void 0===r?void 0:r.liveStyle))&&(o[a]=i[a]);return o}function _c(e,t,n){const r=Ac(e,t,n);for(const i in e)if(Ai(e[i])||Ai(t[i])){r[-1!==li.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const zc=["x","y","width","height","cx","cy","r"],Oc={useVisualState:fc({scrapeMotionValuesFromProps:_c,createRenderState:Cc,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:i,latestValues:o}=e;if(!r)return;let a=!!t.drag;if(!a)for(const l in o)if(ui.has(l)){a=!0;break}if(!a)return;let s=!n;if(n)for(let l=0;l<zc.length;l++){const e=zc[l];t[e]!==n[e]&&(s=!0)}s&&gi.read((()=>{!function(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(_g){t.dimensions={x:0,y:0,width:0,height:0}}}(r,i),gi.render((()=>{kc(i,o,Pc(r.tagName),t.transformTemplate),Rc(r,i)}))}))}})},Mc={useVisualState:fc({scrapeMotionValuesFromProps:Ac,createRenderState:Ec})};function Lc(e,t,n){for(const r in t)Ai(t[r])||Dc(r,n)||(e[r]=t[r])}function Fc(e,n){const r={};return Lc(r,e.style||{},e),Object.assign(r,function(e,n){let{transformTemplate:r}=e;return(0,t.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return bc(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(e,n)),r}function Nc(e,t){const n={},r=Fc(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Ic=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vc(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ic.has(e)}let Bc=e=>!Vc(e);try{(Uc=require("@emotion/is-prop-valid").default)&&(Bc=e=>e.startsWith("on")?!Vc(e):Uc(e))}catch(zg){}var Uc;function $c(e,n,r,i){const o=(0,t.useMemo)((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return kc(t,n,Pc(i),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};Lc(t,e.style,e),o.style={...t,...o.style}}return o}function Wc(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,o,a)=>{let{latestValues:s}=o;const l=(hc(n)?$c:Nc)(r,s,a,n),u=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Bc(i)||!0===n&&Vc(i)||!t&&!Vc(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),c=n!==t.Fragment?{...u,...l,ref:i}:{},{children:d}=r,p=(0,t.useMemo)((()=>Ai(d)?d.get():d),[d]);return(0,t.createElement)(n,{...c,children:p})}}function Hc(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return cc({...hc(n)?Oc:Mc,preloadedFeatures:e,useRender:Wc(r),createVisualElement:t,Component:n})}}const Kc={current:null},Yc={current:!1};const Qc=[...sa,go,Co],Xc=new WeakMap;const Gc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qc{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xo,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Si.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,gi.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=a;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(o),this.isControllingVariants=Zu(n),this.isVariantNode=Ju(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const e=p[h];void 0!==l[h]&&Ai(e)&&e.set(l[h],!1)}}mount(e){this.current=e,Xc.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Yc.current||function(){if(Yc.current=!0,nc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Kc.current=e.matches;e.addListener(t),t()}else Kc.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Kc.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xc.delete(this.current),this.projection&&this.projection.unmount(),vi(this.notifyUpdate),vi(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=ui.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&gi.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),o&&o(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in ic){const t=ic[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Gc.length;n++){const t=Gc[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ai(i))e.addValue(r,i);else if(Ai(o))e.addValue(r,Ri(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,Ri(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Ri(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){var n;let r=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==r&&null!==r&&("string"===typeof r&&(Zo(r)||Qi(r))?r=parseFloat(r):!(e=>Qc.find(aa(e)))(r)&&Co.test(t)&&(r=Lo(e,t)),this.setBaseTarget(e,Ai(r)?r.get():r)),Ai(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let r;if("string"===typeof n||"object"===typeof n){const i=Er(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(r=i[e])}if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Ai(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new Ci),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Zc extends qc{constructor(){super(...arguments),this.KeyframeResolver=ua}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ai(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Jc extends Zc{constructor(){super(...arguments),this.type="html",this.renderInstance=jc}readValueFromInstance(e,t){if(ui.has(t)){const e=Mo(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(ea(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return dl(e,n)}build(e,t,n){bc(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ac(e,t,n)}}class ed extends Zc{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qs}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ui.has(t)){const e=Mo(t);return e&&e.default||0}return t=Tc.has(t)?t:zi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return _c(e,t,n)}build(e,t,n){kc(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){Rc(e,t,0,r)}mount(e){this.isSVGTag=Pc(e.tagName),super.mount(e)}}const td=(e,n)=>hc(e)?new ed(n):new Jc(n,{allowProjection:e!==t.Fragment}),nd=Hc({...Es,...Yu,...Nu,...Qu},td),rd=yr(nd),id=vr.div`
  min-height: 100vh;
  background: #0f172a;
  color: white;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,od=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
  z-index: 0;
`,ad=vr.div`
  position: relative;
  z-index: 1;
`,sd=vr.header`
  text-align: left;
  margin-bottom: 3rem;
  padding-top: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    margin-bottom: 6rem;
    padding-top: 4rem;
    padding: 4rem 2rem;
  }
`,ld=vr(rd.h1)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
`,ud=vr(rd.div)`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  span {
    color: #7c3aed;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(45deg, #7c3aed, #ec4899);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`,cd=(vr.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,vr.span`
  font-size: 1.5rem;
  color: #4ECDC4;
  margin-right: 1rem;
  font-family: monospace;
`,vr(rd.section)`
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 8rem;
  }
`),dd=vr.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 3rem;
    padding: 0 2rem;
  }
`,pd=vr(rd.div)`
  font-size: 2rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,hd=vr.h2`
  font-size: 1.75rem;
  color: #fff;
  position: relative;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);

    @media (min-width: 768px) {
      bottom: -10px;
      width: 60px;
      height: 3px;
    }
  }
`,fd=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin: 3rem auto 0;
    padding: 0 2rem;
  }
`,md=vr(rd.div)`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(124, 58, 237, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #7c3aed;
    box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.3);

    @media (min-width: 768px) {
      transform: translateY(-10px);
    }
  }
`,gd=vr(Pe)`
  text-decoration: none;
  color: white;
`,vd=vr.div`
  padding: 1.25rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,yd=vr.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    gap: 1rem;
  }
`,bd=vr.span`
  font-size: 1rem;
  color: #7c3aed;
  font-family: monospace;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,xd=vr.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,wd=vr(rd.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
  filter: grayscale(30%);

  @media (min-width: 768px) {
    height: 250px;
  }

  &:hover {
    transform: scale(1.03);
    filter: grayscale(0%);

    @media (min-width: 768px) {
      transform: scale(1.05);
    }
  }
`,Sd=vr(rd.span)`
  color: #7c3aed;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.75rem;
  position: relative;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`,kd=[{profession:"Web Developer",icon:"\ud83d\udc68\u200d\ud83d\udcbb",variants:[{title:"Modern Minimalist",description:"Clean and minimal design focusing on code and projects. Perfect for showcasing your development skills and project portfolio.",path:"/web-dev-1",image:"https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#61DAFB"},{title:"Creative Developer",description:"Bold and interactive design showcasing web innovations. Ideal for creative developers who push the boundaries of web technology.",path:"/web-dev-2",image:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#FF6B6B"}]},{profession:"Software Developer",icon:"\ud83d\ude80",variants:[{title:"Tech Professional",description:"Enterprise-focused design highlighting software architecture and complex system designs. Perfect for senior developers.",path:"/software-dev-1",image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#4ECDC4"},{title:"Innovation Leader",description:"Dynamic portfolio showcasing cutting-edge projects and technological innovation. Ideal for tech leads and architects.",path:"/software-dev-2",image:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#A8E6CF"}]},{profession:"Digital Marketer",icon:"\ud83d\udcc8",variants:[{title:"Data-Driven Marketer",description:"Analytics-focused design with campaign showcases and performance metrics. Perfect for performance marketers.",path:"/digital-marketing-1",image:"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#FFD93D"},{title:"Creative Strategist",description:"Visual-centric portfolio highlighting brand stories and creative campaigns. Ideal for creative directors and strategists.",path:"/digital-marketing-2",image:"https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#FF8B94"}]},{profession:"Banker",icon:"\ud83d\udcbc",variants:[{title:"Professional Finance",description:"Corporate and trustworthy design showcasing financial expertise and portfolio management skills. Perfect for investment bankers.",path:"/banker-1",image:"https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#2C3E50"},{title:"Modern Banker",description:"Contemporary design focusing on fintech innovation and modern banking solutions. Ideal for fintech professionals.",path:"/banker-2",image:"https://images.pexels.com/photos/7654579/pexels-photo-7654579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#3498DB"}]},{profession:"Teacher",icon:"\ud83d\udc69\u200d\ud83c\udfeb",variants:[{title:"Education Leader",description:"Professional portfolio highlighting academic excellence and teaching methodology. Perfect for educational leaders.",path:"/teacher-1",image:"https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#9B59B6"},{title:"Modern Educator",description:"Interactive design showcasing innovative teaching approaches and digital learning solutions. Ideal for EdTech specialists.",path:"/teacher-2",image:"https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",color:"#E74C3C"}]}],Ed=()=>(0,vl.jsxs)(id,{children:[(0,vl.jsx)(od,{}),(0,vl.jsxs)(ad,{children:[(0,vl.jsxs)(sd,{children:[(0,vl.jsx)(ld,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"Portfolio Excellence"}),(0,vl.jsxs)(ud,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:"easeOut"},children:["Explore ",(0,vl.jsx)("span",{children:"10 unique portfolio designs"})," across 5 professions. Choose your perfect presentation style and showcase your professional journey."]})]}),kd.map(((e,t)=>(0,vl.jsxs)(cd,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.1*t,ease:"easeOut"},children:[(0,vl.jsxs)(dd,{children:[(0,vl.jsx)(pd,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.2*t},children:e.icon}),(0,vl.jsx)(hd,{children:e.profession})]}),(0,vl.jsx)(fd,{children:e.variants.map(((e,n)=>(0,vl.jsx)(gd,{to:e.path,children:(0,vl.jsxs)(md,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*(2*t+n),ease:"easeOut"},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,vl.jsx)(wd,{src:e.image,alt:e.title,whileHover:{scale:1.05,filter:"grayscale(0%)"}}),(0,vl.jsxs)(vd,{children:[(0,vl.jsxs)(yd,{children:[(0,vl.jsx)(bd,{children:String(n+1).padStart(2,"0")}),e.title]}),(0,vl.jsx)(xd,{children:e.description}),(0,vl.jsx)(Sd,{whileHover:{x:5},transition:{duration:.2},children:"View Portfolio"})]})]})},n)))})]},t)))]})]}),Cd=vr.div`
  min-height: 100vh;
  background: #1a1b1e;
  color: #ffffff;
`,Pd=vr.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 27, 30, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`,jd=vr.div`
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  color: #61DAFB;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,Td=vr.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`,Rd=vr.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`,Dd=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 27, 30, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateX(${e=>e.$isOpen?"0":"100%"});
  transition: transform 0.3s ease;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`,Ad=vr.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    color: #61DAFB;
  }
`,_d=vr.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 15%;
  }
`,zd=vr(rd.p)`
  color: #61DAFB;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,Od=vr(rd.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`,Md=vr(rd.h2)`
  font-size: 2rem;
  color: #8892b0;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`,Ld=vr(rd.p)`
  color: #8892b0;
  font-size: 1rem;
  max-width: 500px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,Fd=vr(rd.a)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid #61DAFB;
  color: #61DAFB;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  &:hover {
    background: rgba(97, 218, 251, 0.1);
  }
`,Nd=vr.section`
  padding: 4rem 1.5rem;

  @media (min-width: 768px) {
    padding: 8rem 15%;
  }
`,Id=vr.h3`
  font-size: 1.75rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 100px;
    background: #233554;
    margin-left: 20px;

    @media (min-width: 768px) {
      width: 300px;
    }
  }
`,Vd=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`,Bd=vr(rd.div)`
  background: #233554;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`,Ud=vr.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 200px;
  }
`,$d=vr.div`
  padding: 1.25rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`,Wd=vr.h4`
  color: #ccd6f6;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Hd=vr.p`
  color: #8892b0;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }
`,Kd=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: #61DAFB;

  @media (min-width: 768px) {
    gap: 1rem;
    font-size: 0.8rem;
  }
`,Yd=vr.span`
  background: #1a1b1e;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`,Qd=[{title:"E-commerce Platform",description:"Built a scalable e-commerce platform using microservices architecture, handling 100K+ daily users.",image:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",tech:["React","Node.js","MongoDB","Docker","AWS"]},{title:"Social Media Dashboard",description:"Developed a real-time analytics dashboard for social media management and content scheduling.",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",tech:["Vue.js","GraphQL","PostgreSQL","Redis","D3.js"]},{title:"AI-Powered Chat App",description:"Created an intelligent chat application with natural language processing and real-time translation.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",tech:["TypeScript","OpenAI API","WebSocket","Express","MongoDB"]}],Xd=()=>{const[e,n]=(0,t.useState)(!1);return(0,vl.jsxs)(Cd,{children:[(0,vl.jsxs)(Pd,{children:[(0,vl.jsx)(jd,{children:"<JD />"}),(0,vl.jsxs)(Td,{children:[(0,vl.jsx)(Ad,{href:"#about",children:"About"}),(0,vl.jsx)(Ad,{href:"#projects",children:"Projects"}),(0,vl.jsx)(Ad,{href:"#contact",children:"Contact"})]}),(0,vl.jsx)(Rd,{onClick:()=>n(!e),children:"\u2630"})]}),(0,vl.jsxs)(Dd,{$isOpen:e,children:[(0,vl.jsx)(Ad,{href:"#about",onClick:()=>n(!1),children:"About"}),(0,vl.jsx)(Ad,{href:"#projects",onClick:()=>n(!1),children:"Projects"}),(0,vl.jsx)(Ad,{href:"#contact",onClick:()=>n(!1),children:"Contact"})]}),(0,vl.jsxs)(_d,{children:[(0,vl.jsx)(zd,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Hi, my name is"}),(0,vl.jsx)(Od,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:"John Developer."}),(0,vl.jsx)(Md,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"I build things for the web."}),(0,vl.jsx)(Ld,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:"I'm a web developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products."}),(0,vl.jsx)(Fd,{href:"#projects",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},children:"Check out my work"})]}),(0,vl.jsxs)(Nd,{id:"projects",children:[(0,vl.jsx)(Id,{children:"Some Things I've Built"}),(0,vl.jsx)(Vd,{children:Qd.map(((e,t)=>(0,vl.jsxs)(Bd,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Ud,{src:e.image,alt:e.title}),(0,vl.jsxs)($d,{children:[(0,vl.jsx)(Wd,{children:e.title}),(0,vl.jsx)(Hd,{children:e.description}),(0,vl.jsx)(Kd,{children:e.tech.map(((e,t)=>(0,vl.jsx)(Yd,{children:e},t)))})]})]},t)))})]})]})},Gd=vr.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
`,qd=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%);
  z-index: 0;
`,Zd=vr.div`
  position: relative;
  z-index: 1;
`,Jd=vr.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,ep=vr(rd.div)`
  max-width: 800px;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,tp=vr(rd.h1)`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`,np=vr(rd.p)`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`,rp=vr.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    padding: 4rem 2rem;
  }
`,ip=vr(rd.div)`
  grid-column: 1 / -1;
  aspect-ratio: 16/9;
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.5s ease;

  @media (min-width: 1024px) {
    grid-column: span 4;
    aspect-ratio: 1;
    border-radius: 20px;

    ${e=>e.$isExpanded&&"\n      grid-column: span 8;\n      aspect-ratio: 16/9;\n    "}
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    grid-column: span 1;
    
    ${e=>e.$isExpanded&&"\n      grid-column: 1 / -1;\n    "}
  }
`,op=vr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,ap=vr(rd.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,sp=vr.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`,lp=vr.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`,up=vr(rd.p)`
  color: #ccc;
  margin-bottom: 0.75rem;
  line-height: 1.5;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1rem;
  }
`,cp=vr(rd.div)`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`,dp=vr(rd.span)`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-size: 0.75rem;
  color: #4ECDC4;

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
  }
`,pp=[{title:"Interactive Dashboard",description:"A real-time analytics dashboard with customizable widgets, dark/light themes, and data visualization using D3.js.",image:"https://source.unsplash.com/random/800x600?dashboard,data",tech:["React","D3.js","Socket.io","Material-UI"],color:"#FF6B6B"},{title:"Social Platform",description:"A modern social media platform with real-time messaging, story features, and AI-powered content recommendations.",image:"https://source.unsplash.com/random/800x600?social,mobile",tech:["Next.js","GraphQL","PostgreSQL","TailwindCSS"],color:"#4ECDC4"},{title:"3D Portfolio",description:"An interactive 3D portfolio website using Three.js with custom animations and particle effects.",image:"https://source.unsplash.com/random/800x600?3d,design",tech:["Three.js","React Three Fiber","GSAP","Blender"],color:"#FFD93D"},{title:"Game Platform",description:"A browser-based gaming platform with multiplayer support, leaderboards, and achievements system.",image:"https://source.unsplash.com/random/800x600?gaming,computer",tech:["Phaser.js","WebRTC","Firebase","TypeScript"],color:"#6C5CE7"}],hp=()=>{const[e,n]=(0,t.useState)(null);return(0,vl.jsxs)(Gd,{children:[(0,vl.jsx)(qd,{}),(0,vl.jsxs)(Zd,{children:[(0,vl.jsx)(Jd,{children:(0,vl.jsxs)(ep,{children:[(0,vl.jsx)(tp,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Creative Web Developer"}),(0,vl.jsx)(np,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:"Crafting immersive digital experiences through code and creativity"})]})}),(0,vl.jsx)(rp,{children:pp.map(((t,r)=>(0,vl.jsxs)(ip,{$isExpanded:e===r,onClick:()=>n(e===r?null:r),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2*r},children:[(0,vl.jsx)(op,{src:t.image,alt:t.title}),(0,vl.jsxs)(ap,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},children:[(0,vl.jsxs)(sp,{children:[(0,vl.jsx)(lp,{style:{color:t.color},children:t.title}),e===r&&(0,vl.jsx)(rd.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:(0,vl.jsx)(up,{children:t.description})})]}),(0,vl.jsx)(cp,{children:t.tech.map(((e,t)=>(0,vl.jsx)(dp,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.1+.1*t},children:e},t)))})]})]},r)))})]})]})},fp=vr.div`
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
`,mp=vr.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`,gp=vr.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f172a;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,vp=vr.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`,yp=vr.button`
  background: none;
  border: none;
  color: #0f172a;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`,bp=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(248, 250, 252, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateX(${e=>e.$isOpen?"0":"100%"});
  transition: transform 0.3s ease;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`,xp=vr.a`
  color: #64748b;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    color: #0f172a;
  }
`,wp=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  margin-top: 60px;

  @media (min-width: 768px) {
    padding: 0 10%;
  }
`,Sp=vr.div`
  max-width: 800px;
  width: 100%;
`,kp=vr(rd.h1)`
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`,Ep=vr(rd.h2)`
  font-size: 1.4rem;
  color: #475569;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`,Cp=vr(rd.div)`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`,Pp=vr.span`
  padding: 0.375rem 0.75rem;
  background: white;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #475569;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`,jp=vr.section`
  padding: 3rem 1.5rem;
  background: white;

  @media (min-width: 768px) {
    padding: 6rem 10%;
  }
`,Tp=vr.h2`
  font-size: 2rem;
  color: #0f172a;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: #3b82f6;
    border-radius: 2px;

    @media (min-width: 768px) {
      bottom: -10px;
      width: 60px;
      height: 4px;
    }
  }
`,Rp=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
`,Dp=vr(rd.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`,Ap=vr.div`
  height: 180px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 200px;
  }
`,_p=vr.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,zp=vr.h3`
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Op=vr.p`
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Mp=vr.div`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`,Lp=vr.span`
  padding: 0.2rem 0.5rem;
  background: #f1f5f9;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #475569;

  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }
`,Fp=vr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
`,Np=vr(rd.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 10px;
  }
`,Ip=vr.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  margin-bottom: 0.375rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`,Vp=vr.div`
  font-size: 0.875rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,Bp=[{value:"5+",label:"Years Experience"},{value:"50+",label:"Projects Completed"},{value:"30+",label:"Happy Clients"},{value:"99%",label:"Success Rate"}],Up=["JavaScript","TypeScript","React","Node.js","Python","AWS","Docker","GraphQL","MongoDB","PostgreSQL"],$p=[{title:"E-commerce Platform",description:"Built a scalable e-commerce platform using microservices architecture, handling 100K+ daily users.",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",tags:["Node.js","React","MongoDB","Docker","AWS"]},{title:"AI-Powered Analytics",description:"Developed a machine learning platform for real-time data analytics and predictive modeling.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",tags:["Python","TensorFlow","React","FastAPI","PostgreSQL"]},{title:"Blockchain Wallet",description:"Created a secure cryptocurrency wallet with multi-signature support and real-time trading.",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",tags:["Solidity","React","Node.js","Web3.js","TypeScript"]}],Wp=()=>{const[e,n]=(0,t.useState)(!1);return(0,vl.jsxs)(fp,{children:[(0,vl.jsxs)(mp,{children:[(0,vl.jsx)(gp,{children:"DEVELOPER"}),(0,vl.jsxs)(vp,{children:[(0,vl.jsx)(xp,{href:"#about",children:"About"}),(0,vl.jsx)(xp,{href:"#projects",children:"Projects"}),(0,vl.jsx)(xp,{href:"#skills",children:"Skills"}),(0,vl.jsx)(xp,{href:"#contact",children:"Contact"})]}),(0,vl.jsx)(yp,{onClick:()=>n(!e),children:"\u2630"})]}),(0,vl.jsxs)(bp,{$isOpen:e,children:[(0,vl.jsx)(xp,{href:"#about",onClick:()=>n(!1),children:"About"}),(0,vl.jsx)(xp,{href:"#projects",onClick:()=>n(!1),children:"Projects"}),(0,vl.jsx)(xp,{href:"#skills",onClick:()=>n(!1),children:"Skills"}),(0,vl.jsx)(xp,{href:"#contact",onClick:()=>n(!1),children:"Contact"})]}),(0,vl.jsx)(wp,{children:(0,vl.jsxs)(Sp,{children:[(0,vl.jsx)(kp,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Full Stack Software Developer"}),(0,vl.jsx)(Ep,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:"Building scalable solutions for complex problems"}),(0,vl.jsx)(Cp,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:Up.map(((e,t)=>(0,vl.jsx)(Pp,{children:e},t)))})]})}),(0,vl.jsxs)(jp,{children:[(0,vl.jsx)(Tp,{children:"Key Metrics"}),(0,vl.jsx)(Fp,{children:Bp.map(((e,t)=>(0,vl.jsxs)(Np,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Ip,{children:e.value}),(0,vl.jsx)(Vp,{children:e.label})]},t)))})]}),(0,vl.jsxs)(jp,{id:"projects",children:[(0,vl.jsx)(Tp,{children:"Featured Projects"}),(0,vl.jsx)(Rp,{children:$p.map(((e,t)=>(0,vl.jsxs)(Dp,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Ap,{$image:e.image}),(0,vl.jsxs)(_p,{children:[(0,vl.jsx)(zp,{children:e.title}),(0,vl.jsx)(Op,{children:e.description}),(0,vl.jsx)(Mp,{children:e.tags.map(((e,t)=>(0,vl.jsx)(Lp,{children:e},t)))})]})]},t)))})]})]})},Hp=vr.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
`,Kp=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 10%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 90% 90%, rgba(80, 200, 255, 0.1) 0%, transparent 50%);
  z-index: 0;
`,Yp=vr.div`
  position: relative;
  z-index: 1;
`,Qp=vr(rd.nav)`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Xp=vr.div`
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(45deg, #64ffda, #50c8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,Gp=vr.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`,qp=vr.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`,Zp=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateX(${e=>e.$isOpen?"0":"100%"});
  transition: transform 0.3s ease;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`,Jp=vr(rd.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #64ffda, #50c8ff);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,eh=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,th=vr(rd.div)`
  max-width: 800px;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,nh=vr(rd.h1)`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(45deg, #64ffda, #50c8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`,rh=vr(rd.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`,ih=vr(rd.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    gap: 1rem;
    margin: 2rem 0;
  }
`,oh=vr(rd.div)`
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,ah=vr.section`
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`,sh=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`,lh=vr(rd.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 2rem;
  }

  ${e=>e.$isActive&&"\n    background: rgba(255, 255, 255, 0.1);\n  "}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #64ffda, #50c8ff);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;

    @media (min-width: 768px) {
      height: 4px;
    }
  }

  &:hover::before {
    transform: scaleX(1);
  }
`,uh=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,ch=vr.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1rem;
  }
`,dh=vr(rd.div)`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 10px;
  }
`,ph=vr.h4`
  font-size: 0.9rem;
  color: #64ffda;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,hh=vr.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`,fh=[{title:"Neural Network Visualizer",description:"Interactive tool for visualizing and experimenting with neural network architectures in real-time.",tech:["React","TensorFlow.js","Three.js","WebGL"],demo:"\n// Neural Network Configuration\n{\n  layers: [\n    { type: 'input', neurons: 784 },\n    { type: 'conv2d', filters: 32 },\n    { type: 'maxpool2d' },\n    { type: 'dense', neurons: 10 }\n  ]\n}"},{title:"Quantum Computing Simulator",description:"Web-based quantum circuit simulator supporting multiple qubits and quantum gates.",tech:["TypeScript","WebAssembly","Rust","WebGL"],demo:"\n// Quantum Circuit\ncircuit.addGate('h', 0)  // Hadamard\ncircuit.addGate('cx', [0, 1])  // CNOT\ncircuit.measure([0, 1])"},{title:"Blockchain Explorer",description:"Real-time blockchain visualization and analysis tool with smart contract integration.",tech:["Next.js","Ethers.js","Web3.js","D3.js"],demo:"\n// Smart Contract Interaction\nconst contract = new ethers.Contract(\n  address,\n  abi,\n  provider\n);\n\nawait contract.connect(signer)\n  .transfer(recipient, amount);"}],mh=()=>{const[e,n]=(0,t.useState)(null),[r,i]=(0,t.useState)(!1);return(0,vl.jsxs)(Hp,{children:[(0,vl.jsx)(Kp,{}),(0,vl.jsxs)(Yp,{children:[(0,vl.jsxs)(Qp,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[(0,vl.jsx)(Xp,{children:"INNOVATE"}),(0,vl.jsxs)(Gp,{children:[(0,vl.jsx)(Jp,{href:"#about",children:"About"}),(0,vl.jsx)(Jp,{href:"#projects",children:"Projects"}),(0,vl.jsx)(Jp,{href:"#contact",children:"Contact"})]}),(0,vl.jsx)(qp,{onClick:()=>i(!r),children:"\u2630"})]}),(0,vl.jsxs)(Zp,{$isOpen:r,children:[(0,vl.jsx)(Jp,{href:"#about",onClick:()=>i(!1),children:"About"}),(0,vl.jsx)(Jp,{href:"#projects",onClick:()=>i(!1),children:"Projects"}),(0,vl.jsx)(Jp,{href:"#contact",onClick:()=>i(!1),children:"Contact"})]}),(0,vl.jsx)(eh,{children:(0,vl.jsxs)(th,{children:[(0,vl.jsx)(nh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Innovation Through Code"}),(0,vl.jsx)(rh,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:"Pushing the boundaries of technology with cutting-edge solutions"}),(0,vl.jsx)(ih,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.4},children:["TypeScript","React","Node.js","Python","TensorFlow","WebGL","Rust","WebAssembly","Blockchain","Cloud Native"].map(((e,t)=>(0,vl.jsx)(oh,{whileHover:{scale:1.05},whileTap:{scale:.95},children:e},t)))})]})}),(0,vl.jsx)(ah,{id:"projects",children:(0,vl.jsx)(sh,{children:fh.map(((t,r)=>(0,vl.jsxs)(lh,{$isActive:e===r,onClick:()=>n(e===r?null:r),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2*r},children:[(0,vl.jsx)(uh,{children:t.title}),(0,vl.jsx)(ch,{children:t.description}),(0,vl.jsx)(ih,{children:t.tech.map(((e,t)=>(0,vl.jsx)(oh,{whileHover:{scale:1.05},whileTap:{scale:.95},children:e},t)))}),e===r&&(0,vl.jsx)(rd.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:(0,vl.jsxs)(dh,{children:[(0,vl.jsx)(ph,{children:"Demo Code"}),(0,vl.jsx)(hh,{children:t.demo})]})})]},r)))})})]})]})},gh=vr.div`
  min-height: 100vh;
  background: #ffffff;
  color: #2c3e50;
`,vh=vr.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`,yh=vr.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #3498db;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,bh=vr.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`,xh=vr.button`
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`,wh=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateX(${e=>e.$isOpen?"0":"100%"});
  transition: transform 0.3s ease;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`,Sh=vr.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    color: #3498db;
  }
`,kh=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin-top: 60px;

  @media (min-width: 768px) {
    padding: 0 10%;
  }
`,Eh=vr.div`
  max-width: 800px;
  width: 100%;
`,Ch=vr(rd.h1)`
  font-size: 2.25rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`,Ph=vr(rd.h2)`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,jh=vr(rd.p)`
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`,Th=vr.section`
  padding: 3rem 1.5rem;
  background: white;

  @media (min-width: 768px) {
    padding: 6rem 10%;
  }
`,Rh=vr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
`,Dh=vr(rd.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 10px;
  }
`,Ah=vr.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`,_h=vr.div`
  font-size: 0.9rem;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,zh=vr.section`
  padding: 3rem 1.5rem;
  background: #f8f9fa;

  @media (min-width: 768px) {
    padding: 6rem 10%;
  }
`,Oh=vr.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`,Mh=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`,Lh=vr(rd.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`,Fh=vr.div`
  height: 180px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
  overflow: hidden;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
    height: 200px;
    border-radius: 10px 10px 0 0;
  }
`,Nh=vr.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Ih=vr.h3`
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Vh=(vr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`,vr.div`
  text-align: center;
  
  span {
    display: block;
    &:first-child {
      font-size: 1.25rem;
      font-weight: bold;
      color: #3498db;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }
    &:last-child {
      font-size: 0.8rem;
      color: #7f8c8d;

      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`),Bh=vr.p`
  color: #7f8c8d;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`,Uh=[{value:"500%",label:"Average ROI"},{value:"15M+",label:"Social Media Reach"},{value:"8.5%",label:"Conversion Rate"},{value:"250+",label:"Successful Campaigns"}],$h=[{title:"Sustainable Fashion Campaign",description:"Led a viral social media campaign for an eco-friendly fashion brand, resulting in 200% increase in engagement.",image:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop",metrics:{reach:"2.5M+",engagement:"28%",conversion:"12%",roi:"320%"}},{title:"Tech Startup Launch",description:"Orchestrated a multi-channel marketing campaign for a SaaS startup's product launch.",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",metrics:{reach:"1.8M+",engagement:"32%",conversion:"15%",roi:"450%"}},{title:"Food Delivery App",description:"Created and executed a localized digital marketing strategy for a food delivery service.",image:"https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop",metrics:{reach:"850K+",engagement:"25%",conversion:"18%",roi:"280%"}}],Wh=()=>{const[e,n]=(0,t.useState)(!1);return(0,vl.jsxs)(gh,{children:[(0,vl.jsxs)(vh,{children:[(0,vl.jsx)(yh,{children:"DataDriven"}),(0,vl.jsxs)(bh,{children:[(0,vl.jsx)(Sh,{href:"#about",children:"About"}),(0,vl.jsx)(Sh,{href:"#metrics",children:"Metrics"}),(0,vl.jsx)(Sh,{href:"#campaigns",children:"Campaigns"}),(0,vl.jsx)(Sh,{href:"#contact",children:"Contact"})]}),(0,vl.jsx)(xh,{onClick:()=>n(!e),children:"\u2630"})]}),(0,vl.jsxs)(wh,{$isOpen:e,children:[(0,vl.jsx)(Sh,{href:"#about",onClick:()=>n(!1),children:"About"}),(0,vl.jsx)(Sh,{href:"#metrics",onClick:()=>n(!1),children:"Metrics"}),(0,vl.jsx)(Sh,{href:"#campaigns",onClick:()=>n(!1),children:"Campaigns"}),(0,vl.jsx)(Sh,{href:"#contact",onClick:()=>n(!1),children:"Contact"})]}),(0,vl.jsx)(kh,{children:(0,vl.jsxs)(Eh,{children:[(0,vl.jsx)(Ch,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Data-Driven Digital Marketing Excellence"}),(0,vl.jsx)(Ph,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:"Transforming Insights into Results"}),(0,vl.jsx)(jh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Experienced digital marketer specializing in data analytics, conversion optimization, and ROI-focused campaign management. Proven track record of driving measurable results across multiple industries."})]})}),(0,vl.jsxs)(Th,{id:"metrics",children:[(0,vl.jsx)(Oh,{children:"Key Performance Metrics"}),(0,vl.jsx)(Rh,{children:Uh.map(((e,t)=>(0,vl.jsxs)(Dh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Ah,{children:e.value}),(0,vl.jsx)(_h,{children:e.label})]},t)))})]}),(0,vl.jsxs)(zh,{id:"campaigns",children:[(0,vl.jsx)(Oh,{children:"Featured Campaigns"}),(0,vl.jsx)(Mh,{children:$h.map(((e,t)=>(0,vl.jsxs)(Lh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Fh,{$image:e.image}),(0,vl.jsxs)(Nh,{children:[(0,vl.jsx)(Ih,{children:e.title}),(0,vl.jsx)(Bh,{children:e.description}),(0,vl.jsxs)(Rh,{children:[(0,vl.jsxs)(Vh,{children:[(0,vl.jsx)(Ah,{children:e.metrics.reach}),(0,vl.jsx)(_h,{children:"Reach"})]}),(0,vl.jsxs)(Vh,{children:[(0,vl.jsx)(Ah,{children:e.metrics.engagement}),(0,vl.jsx)(_h,{children:"Engagement"})]}),(0,vl.jsxs)(Vh,{children:[(0,vl.jsx)(Ah,{children:e.metrics.conversion}),(0,vl.jsx)(_h,{children:"Conversion"})]}),(0,vl.jsxs)(Vh,{children:[(0,vl.jsx)(Ah,{children:e.metrics.roi}),(0,vl.jsx)(_h,{children:"ROI"})]})]})]})]},t)))})]})]})},Hh=vr.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  overflow-x: hidden;
`,Kh=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 139, 148, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 217, 61, 0.15) 0%, transparent 50%);
  z-index: 0;
`,Yh=vr.div`
  position: relative;
  z-index: 1;
`,Qh=vr(rd.nav)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
`,Xh=vr.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #FF8B94, #FFD93D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Gh=vr.div`
  display: flex;
  gap: 2rem;
`,qh=vr(rd.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #FF8B94, #FFD93D);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,Zh=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`,Jh=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://source.unsplash.com/random/1920x1080?creative,marketing') center/cover;
  filter: brightness(0.3);
`,ef=vr(rd.div)`
  max-width: 800px;
  position: relative;
  z-index: 1;
`,tf=vr(rd.h1)`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF8B94, #FFD93D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`,nf=vr(rd.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`,rf=vr.section`
  padding: 6rem 2rem;
`,of=vr.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #FF8B94, #FFD93D);
  }
`,af=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,sf=vr(rd.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  height: 400px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }

  ${e=>e.$isActive&&"\n    grid-column: 1 / -1;\n    height: 600px;\n  "}
`,lf=vr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${sf}:hover & {
    transform: scale(1.05);
  }
`,uf=vr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
`,cf=vr.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`,df=vr(rd.div)`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`,pf=vr.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`,hf=vr.div`
  text-align: center;

  span {
    display: block;
    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #FFD93D;
    }
    &:last-child {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`,ff=vr.div`
  margin-top: 1.5rem;
`,mf=vr.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`,gf=vr.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,vf=[{title:"Social Media Growth Campaign",description:"Increased brand awareness and engagement through targeted social media campaigns.",stats:[{value:"500K+",label:"Reach"},{value:"25%",label:"Engagement"},{value:"10K+",label:"Shares"},{value:"2M+",label:"Impressions"}],image:"https://source.unsplash.com/random/1200x800?social,media"},{title:"Content Marketing Strategy",description:"Developed and executed comprehensive content strategy across multiple platforms.",stats:[{value:"300K+",label:"Views"},{value:"20%",label:"Conversion"},{value:"5K+",label:"Leads"},{value:"1.5M+",label:"Reach"}],image:"https://source.unsplash.com/random/1200x800?content,marketing"},{title:"Email Marketing Campaign",description:"Optimized email campaigns resulting in increased open rates and conversions.",stats:[{value:"45%",label:"Open Rate"},{value:"15%",label:"CTR"},{value:"8K+",label:"Subscribers"},{value:"30%",label:"Growth"}],image:"https://source.unsplash.com/random/1200x800?email,marketing"}],yf=()=>{const[e,n]=(0,t.useState)(null);return(0,vl.jsxs)(Hh,{children:[(0,vl.jsx)(Kh,{}),(0,vl.jsxs)(Yh,{children:[(0,vl.jsxs)(Qh,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[(0,vl.jsx)(Xh,{children:"CREATIVE"}),(0,vl.jsxs)(Gh,{children:[(0,vl.jsx)(qh,{href:"#about",children:"About"}),(0,vl.jsx)(qh,{href:"#campaigns",children:"Campaigns"}),(0,vl.jsx)(qh,{href:"#contact",children:"Contact"})]})]}),(0,vl.jsxs)(Zh,{children:[(0,vl.jsx)(Jh,{}),(0,vl.jsxs)(ef,{children:[(0,vl.jsx)(tf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Crafting Digital Stories"}),(0,vl.jsx)(nf,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:"Where creativity meets strategy to build compelling brand narratives"})]})]}),(0,vl.jsxs)(rf,{id:"campaigns",children:[(0,vl.jsx)(of,{children:"Featured Campaigns"}),(0,vl.jsx)(af,{children:vf.map(((t,r)=>(0,vl.jsxs)(sf,{$isActive:e===r,onClick:()=>n(e===r?null:r),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2*r},children:[(0,vl.jsx)(lf,{src:t.image,alt:t.title}),(0,vl.jsxs)(uf,{children:[(0,vl.jsx)(cf,{children:t.title}),(e===r||null===e)&&(0,vl.jsx)(rd.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:(0,vl.jsx)(df,{children:t.description})}),(0,vl.jsx)(ff,{children:e===r&&(0,vl.jsx)(rd.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:(0,vl.jsx)(pf,{children:t.stats.map(((e,t)=>(0,vl.jsxs)(hf,{children:[(0,vl.jsx)(mf,{children:e.value}),(0,vl.jsx)(gf,{children:e.label})]},t)))})})})]})]},r)))})]})]})]})},bf=vr.div`
  min-height: 100vh;
  background: #ffffff;
  color: #2c3e50;
`,xf=vr.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,wf=vr.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Times New Roman', serif;
`,Sf=vr.div`
  display: flex;
  gap: 2rem;
`,kf=vr.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #34495e;
  }
`,Ef=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`,Cf=vr.div`
  max-width: 800px;
`,Pf=vr(rd.h1)`
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: 'Times New Roman', serif;
`,jf=vr(rd.h2)`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 2rem;
  font-family: 'Times New Roman', serif;
`,Tf=vr(rd.p)`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 2rem;
`,Rf=vr.section`
  padding: 6rem 10%;
  background: white;
`,Df=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Af=vr(rd.div)`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 3px solid #2c3e50;
`,_f=vr.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'Times New Roman', serif;
`,zf=vr.div`
  font-size: 1rem;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Of=vr.section`
  padding: 6rem 10%;
  background: #f8f9fa;
`,Mf=vr.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Times New Roman', serif;
`,Lf=vr.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #2c3e50;
  }
`,Ff=vr(rd.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 3rem;
  width: 50%;
  position: relative;

  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #2c3e50;
    border-radius: 50%;
  }

  &:nth-child(even)::before {
    right: auto;
    left: -8px;
  }
`,Nf=vr.div`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
`,If=vr.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-family: 'Times New Roman', serif;
`,Vf=vr.h3`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 1rem;
`,Bf=vr.p`
  color: #7f8c8d;
  line-height: 1.6;
`,Uf=vr.section`
  padding: 6rem 10%;
  background: white;
`,$f=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Wf=vr(rd.div)`
  background: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #2c3e50;
`,Hf=vr.div`
  padding: 2rem;
`,Kf=vr.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'Times New Roman', serif;
`,Yf=vr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`,Qf=vr.div`
  text-align: center;
  
  span {
    display: block;
    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      font-family: 'Times New Roman', serif;
    }
    &:last-child {
      font-size: 0.9rem;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`,Xf=vr.div`
  height: 200px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,Gf=[{value:"$2.5B+",label:"Assets Under Management"},{value:"15+",label:"Years Experience"},{value:"98%",label:"Client Retention"},{value:"250+",label:"High-Net-Worth Clients"}],qf=[{year:"2020 - Present",title:"Senior Investment Manager",description:"Leading a team of financial advisors managing portfolios for high-net-worth individuals and institutional clients."},{year:"2015 - 2020",title:"Portfolio Manager",description:"Developed and implemented investment strategies resulting in consistent above-market returns for client portfolios."},{year:"2010 - 2015",title:"Investment Analyst",description:"Conducted comprehensive market research and financial analysis to identify investment opportunities."}],Zf=[{title:"Conservative Growth Fund",image:"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop",metrics:{return:"12.5%",risk:"Low",assets:"$800M",clients:"85+"}},{title:"High-Yield Bond Portfolio",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",metrics:{return:"8.2%",risk:"Medium",assets:"$1.2B",clients:"120+"}},{title:"Global Equity Fund",image:"https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop",metrics:{return:"15.8%",risk:"High",assets:"$500M",clients:"45+"}}],Jf=()=>(0,vl.jsxs)(bf,{children:[(0,vl.jsxs)(xf,{children:[(0,vl.jsx)(wf,{children:"MORGAN STANLEY"}),(0,vl.jsxs)(Sf,{children:[(0,vl.jsx)(kf,{href:"#about",children:"About"}),(0,vl.jsx)(kf,{href:"#experience",children:"Experience"}),(0,vl.jsx)(kf,{href:"#portfolio",children:"Portfolio"}),(0,vl.jsx)(kf,{href:"#contact",children:"Contact"})]})]}),(0,vl.jsx)(Ef,{children:(0,vl.jsxs)(Cf,{children:[(0,vl.jsx)(Pf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Professional Wealth Management"}),(0,vl.jsx)(jf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:"Building Long-Term Financial Success"}),(0,vl.jsx)(Tf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Senior Investment Manager with over 15 years of experience in wealth management and portfolio optimization. Specializing in high-net-worth individual and institutional client services."})]})}),(0,vl.jsxs)(Rf,{id:"stats",children:[(0,vl.jsx)(Mf,{children:"Key Performance Indicators"}),(0,vl.jsx)(Df,{children:Gf.map(((e,t)=>(0,vl.jsxs)(Af,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(_f,{children:e.value}),(0,vl.jsx)(zf,{children:e.label})]},t)))})]}),(0,vl.jsxs)(Of,{id:"experience",children:[(0,vl.jsx)(Mf,{children:"Professional Experience"}),(0,vl.jsx)(Lf,{children:qf.map(((e,t)=>(0,vl.jsx)(Ff,{initial:{opacity:0,x:t%2===0?50:-50},animate:{opacity:1,x:0},transition:{delay:.2*t},children:(0,vl.jsxs)(Nf,{children:[(0,vl.jsx)(If,{children:e.year}),(0,vl.jsx)(Vf,{children:e.title}),(0,vl.jsx)(Bf,{children:e.description})]})},t)))})]}),(0,vl.jsxs)(Uf,{id:"portfolio",children:[(0,vl.jsx)(Mf,{children:"Investment Portfolios"}),(0,vl.jsx)($f,{children:Zf.map(((e,t)=>(0,vl.jsxs)(Wf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Xf,{$image:e.image}),(0,vl.jsxs)(Hf,{children:[(0,vl.jsx)(Kf,{children:e.title}),(0,vl.jsxs)(Yf,{children:[(0,vl.jsxs)(Qf,{children:[(0,vl.jsx)("span",{children:e.metrics.return}),(0,vl.jsx)("span",{children:"Annual Return"})]}),(0,vl.jsxs)(Qf,{children:[(0,vl.jsx)("span",{children:e.metrics.risk}),(0,vl.jsx)("span",{children:"Risk Level"})]}),(0,vl.jsxs)(Qf,{children:[(0,vl.jsx)("span",{children:e.metrics.assets}),(0,vl.jsx)("span",{children:"AUM"})]}),(0,vl.jsxs)(Qf,{children:[(0,vl.jsx)("span",{children:e.metrics.clients}),(0,vl.jsx)("span",{children:"Clients"})]})]})]})]},t)))})]})]}),em=vr.div`
  min-height: 100vh;
  background: #0f172a;
  color: #ffffff;
  overflow-x: hidden;
`,tm=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%);
  z-index: 0;
`,nm=vr.div`
  position: relative;
  z-index: 1;
`,rm=vr(rd.nav)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
`,im=vr.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #38bdf8, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,om=vr.div`
  display: flex;
  gap: 2rem;
`,am=vr(rd.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #38bdf8, #22d3ee);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,sm=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  position: relative;
`,lm=vr(rd.div)`
  max-width: 800px;
`,um=vr(rd.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #38bdf8, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`,cm=vr(rd.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`,dm=vr.section`
  padding: 6rem 2rem;
`,pm=vr.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #38bdf8, #22d3ee);
  }
`,hm=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,fm=vr(rd.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #38bdf8, #22d3ee);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  ${e=>e.$isActive&&"\n    background: rgba(255, 255, 255, 0.1);\n  "}
`,mm=vr.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`,gm=vr.div`
  height: 150px;
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(56, 189, 248, 0.1) 0%,
      rgba(34, 211, 238, 0.1) 100%
    );
  }
`,vm=vr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`,ym=vr.div`
  text-align: center;

  span {
    display: block;
    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #38bdf8;
    }
    &:last-child {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`,bm=vr.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.02);
`,xm=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,wm=vr(rd.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
`,Sm=vr.div`
  font-size: 2.5rem;
  color: #38bdf8;
  margin-bottom: 1rem;
`,km=vr.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`,Em=vr.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`,Cm=[{title:"Cryptocurrency Market",metrics:{volume:"$2.8B",change:"+12.5%",trades:"15K+",users:"50K+"}},{title:"Stock Trading",metrics:{volume:"$5.2B",change:"+8.2%",trades:"25K+",users:"75K+"}},{title:"Forex Exchange",metrics:{volume:"$3.5B",change:"+5.8%",trades:"20K+",users:"45K+"}}],Pm=[{icon:"\ud83d\udcb3",title:"Digital Banking",description:"Next-generation banking solutions with instant transfers, smart analytics, and AI-powered insights."},{icon:"\ud83d\udcca",title:"Robo-Advisory",description:"Automated portfolio management using advanced algorithms and machine learning."},{icon:"\ud83d\udd12",title:"Blockchain Solutions",description:"Secure and transparent financial transactions using cutting-edge blockchain technology."},{icon:"\ud83d\udcf1",title:"Mobile Trading",description:"Advanced trading platform with real-time market data and instant execution."}],jm=()=>{const[e,n]=(0,t.useState)(null);return(0,vl.jsxs)(em,{children:[(0,vl.jsx)(tm,{}),(0,vl.jsxs)(nm,{children:[(0,vl.jsxs)(rm,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[(0,vl.jsx)(im,{children:"FINTECH"}),(0,vl.jsxs)(om,{children:[(0,vl.jsx)(am,{href:"#about",children:"About"}),(0,vl.jsx)(am,{href:"#markets",children:"Markets"}),(0,vl.jsx)(am,{href:"#services",children:"Services"}),(0,vl.jsx)(am,{href:"#contact",children:"Contact"})]})]}),(0,vl.jsx)(sm,{children:(0,vl.jsxs)(lm,{children:[(0,vl.jsx)(um,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"The Future of Finance"}),(0,vl.jsx)(cm,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:"Innovative financial solutions powered by cutting-edge technology"})]})}),(0,vl.jsxs)(dm,{id:"markets",children:[(0,vl.jsx)(pm,{children:"Market Overview"}),(0,vl.jsx)(hm,{children:Cm.map(((t,r)=>(0,vl.jsxs)(fm,{$isActive:e===r,onClick:()=>n(e===r?null:r),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2*r},children:[(0,vl.jsx)(mm,{children:t.title}),(0,vl.jsx)(gm,{}),(0,vl.jsxs)(vm,{children:[(0,vl.jsxs)(ym,{children:[(0,vl.jsx)("span",{children:t.metrics.volume}),(0,vl.jsx)("span",{children:"Volume"})]}),(0,vl.jsxs)(ym,{children:[(0,vl.jsx)("span",{children:t.metrics.change}),(0,vl.jsx)("span",{children:"24h Change"})]}),(0,vl.jsxs)(ym,{children:[(0,vl.jsx)("span",{children:t.metrics.trades}),(0,vl.jsx)("span",{children:"Trades"})]}),(0,vl.jsxs)(ym,{children:[(0,vl.jsx)("span",{children:t.metrics.users}),(0,vl.jsx)("span",{children:"Active Users"})]})]})]},r)))})]}),(0,vl.jsxs)(bm,{id:"services",children:[(0,vl.jsx)(pm,{children:"Digital Services"}),(0,vl.jsx)(xm,{children:Pm.map(((e,t)=>(0,vl.jsxs)(wm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Sm,{children:e.icon}),(0,vl.jsx)(km,{children:e.title}),(0,vl.jsx)(Em,{children:e.description})]},t)))})]})]})]})},Tm=vr.div`
  min-height: 100vh;
  background: #f5f5f5;
  color: #333;
  font-family: 'Georgia', serif;
`,Rm=vr.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`,Dm=vr.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
`,Am=vr.div`
  display: flex;
  gap: 2rem;
`,_m=vr.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`,zm=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  margin-top: 60px;
`,Om=vr.div`
  max-width: 800px;
`,Mm=vr(rd.h1)`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
`,Lm=vr(rd.h2)`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 2rem;
  font-style: italic;
`,Fm=vr(rd.blockquote)`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid #3498db;
`,Nm=vr.section`
  padding: 6rem 10%;
  background: white;
`,Im=vr.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: #3498db;
  }
`,Vm=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Bm=vr(rd.div)`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #3498db;
`,Um=vr.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`,$m=vr.p`
  color: #7f8c8d;
  line-height: 1.6;
`,Wm=vr.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #3498db;
  }
`,Hm=vr(rd.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 3rem;
  width: 50%;
  position: relative;

  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #3498db;
    border-radius: 50%;
  }

  &:nth-child(even)::before {
    right: auto;
    left: -8px;
  }
`,Km=vr.div`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
`,Ym=vr.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.5rem;
`,Qm=vr.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`,Xm=vr.p`
  color: #7f8c8d;
  line-height: 1.6;
`,Gm=[{title:"Student-Centered Learning",content:"Creating an environment where students are active participants in their learning journey, fostering critical thinking and independence."},{title:"Inclusive Education",content:"Ensuring every student feels valued and supported, adapting teaching methods to accommodate diverse learning styles and needs."},{title:"Growth Mindset",content:"Encouraging students to view challenges as opportunities for growth and learning, developing resilience and perseverance."}],qm=[{year:"2018 - Present",title:"Lead English Teacher",description:"Developing and implementing innovative curriculum for advanced placement English courses. Mentoring new teachers and leading department initiatives."},{year:"2015 - 2018",title:"English Teacher",description:"Created engaging lesson plans that improved student engagement and test scores by 25%. Integrated technology into classroom instruction."},{year:"2013 - 2015",title:"Student Teacher",description:"Assisted in classroom management and lesson planning. Developed strong foundations in educational theory and practice."}],Zm=[{title:"Teacher of the Year 2020",content:"Recognized for excellence in teaching and student engagement."},{title:"Published Educator",content:"Multiple articles published in leading educational journals on innovative teaching methods."},{title:"Department Lead",content:"Successfully led the English department through curriculum modernization."}],Jm=()=>(0,vl.jsxs)(Tm,{children:[(0,vl.jsxs)(Rm,{children:[(0,vl.jsx)(Dm,{children:"EDUCATOR"}),(0,vl.jsxs)(Am,{children:[(0,vl.jsx)(_m,{href:"#about",children:"About"}),(0,vl.jsx)(_m,{href:"#philosophy",children:"Philosophy"}),(0,vl.jsx)(_m,{href:"#experience",children:"Experience"}),(0,vl.jsx)(_m,{href:"#achievements",children:"Achievements"})]})]}),(0,vl.jsx)(zm,{children:(0,vl.jsxs)(Om,{children:[(0,vl.jsx)(Mm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Inspiring Minds, Shaping Futures"}),(0,vl.jsx)(Lm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:"Dedicated English Teacher & Educational Leader"}),(0,vl.jsx)(Fm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:'"Education is not the filling of a pail, but the lighting of a fire." - W.B. Yeats'})]})}),(0,vl.jsxs)(Nm,{id:"philosophy",children:[(0,vl.jsx)(Im,{children:"Teaching Philosophy"}),(0,vl.jsx)(Vm,{children:Gm.map(((e,t)=>(0,vl.jsxs)(Bm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Um,{children:e.title}),(0,vl.jsx)($m,{children:e.content})]},t)))})]}),(0,vl.jsxs)(Nm,{id:"experience",children:[(0,vl.jsx)(Im,{children:"Professional Experience"}),(0,vl.jsx)(Wm,{children:qm.map(((e,t)=>(0,vl.jsx)(Hm,{initial:{opacity:0,x:t%2===0?50:-50},animate:{opacity:1,x:0},transition:{delay:.2*t},children:(0,vl.jsxs)(Km,{children:[(0,vl.jsx)(Ym,{children:e.year}),(0,vl.jsx)(Qm,{children:e.title}),(0,vl.jsx)(Xm,{children:e.description})]})},t)))})]}),(0,vl.jsxs)(Nm,{id:"achievements",children:[(0,vl.jsx)(Im,{children:"Achievements"}),(0,vl.jsx)(Vm,{children:Zm.map(((e,t)=>(0,vl.jsxs)(Bm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(Um,{children:e.title}),(0,vl.jsx)($m,{children:e.content})]},t)))})]})]}),eg=vr.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
`,tg=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
  z-index: 0;
`,ng=vr.div`
  position: relative;
  z-index: 1;
`,rg=vr(rd.nav)`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`,ig=vr.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,og=vr.div`
  display: flex;
  gap: 2rem;
`,ag=vr.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,sg=vr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`,lg=vr(rd.div)`
  max-width: 800px;
`,ug=vr(rd.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`,cg=vr(rd.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`,dg=vr.section`
  padding: 6rem 2rem;
`,pg=vr.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
  }
`,hg=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,fg=vr(rd.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  ${e=>e.$isActive&&"\n    background: rgba(255, 255, 255, 0.1);\n  "}
`,mg=vr.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`,gg=vr.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`,vg=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`,yg=vr(rd.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
`,bg=vr.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,xg=vr.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`,wg=vr.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`,Sg=vr.div`
  width: ${e=>e.$level}%;
  height: 100%;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  border-radius: 2px;
`,kg=vr.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`,Eg=vr.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
  color: #fff;
`,Cg=vr.div`
  height: 200px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  margin: -2rem -2rem 1rem -2rem;
`,Pg=[{icon:"\ud83d\udcbb",title:"Virtual Learning",level:95},{icon:"\ud83c\udfa5",title:"Video Production",level:85},{icon:"\ud83d\udcf1",title:"EdTech Tools",level:90},{icon:"\ud83e\udd1d",title:"Online Engagement",level:92},{icon:"\ud83d\udcca",title:"Data Analytics",level:88},{icon:"\ud83c\udfae",title:"Gamification",level:85}],jg=[{title:"Digital Storytelling",content:"Interactive course combining multimedia elements to enhance student engagement in literature and creative writing.",image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop",tech:["Video Production","Interactive Media","Creative Writing"]},{title:"Virtual Science Lab",content:"Immersive online laboratory experiences using AR/VR technology for hands-on learning in science.",image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",tech:["AR/VR","3D Modeling","Lab Simulations"]},{title:"Global Classroom",content:"Collaborative projects connecting students worldwide through virtual exchange programs.",image:"https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop",tech:["Video Conferencing","Cultural Exchange","Project Management"]}],Tg=[{title:"EdTech Innovation Award",content:"Recognized for pioneering virtual reality applications in classroom teaching."},{title:"Digital Learning Lead",content:"Spearheaded the school's transition to hybrid learning during the pandemic."},{title:"Online Course Creator",content:"Developed successful online courses with over 10,000 student enrollments."}],Rg=()=>{const[e,n]=(0,t.useState)(null);return(0,vl.jsxs)(eg,{children:[(0,vl.jsx)(tg,{}),(0,vl.jsxs)(ng,{children:[(0,vl.jsxs)(rg,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[(0,vl.jsx)(ig,{children:"DIGITAL EDUCATOR"}),(0,vl.jsxs)(og,{children:[(0,vl.jsx)(ag,{href:"#about",children:"About"}),(0,vl.jsx)(ag,{href:"#skills",children:"Skills"}),(0,vl.jsx)(ag,{href:"#courses",children:"Courses"}),(0,vl.jsx)(ag,{href:"#achievements",children:"Achievements"})]})]}),(0,vl.jsx)(sg,{children:(0,vl.jsxs)(lg,{children:[(0,vl.jsx)(ug,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Modern Education Reimagined"}),(0,vl.jsx)(cg,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:"Transforming learning through technology and innovation"})]})}),(0,vl.jsxs)(dg,{id:"skills",children:[(0,vl.jsx)(pg,{children:"Digital Teaching Skills"}),(0,vl.jsx)(vg,{children:Pg.map(((e,t)=>(0,vl.jsxs)(yg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(bg,{children:e.icon}),(0,vl.jsx)(xg,{children:e.title}),(0,vl.jsx)(wg,{children:(0,vl.jsx)(Sg,{$level:e.level})})]},t)))})]}),(0,vl.jsxs)(dg,{id:"courses",children:[(0,vl.jsx)(pg,{children:"Interactive Courses"}),(0,vl.jsx)(hg,{children:jg.map(((t,r)=>(0,vl.jsxs)(fg,{$isActive:e===r,onClick:()=>n(e===r?null:r),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*r},children:[(0,vl.jsx)(Cg,{$image:t.image}),(0,vl.jsx)(mg,{children:t.title}),(0,vl.jsx)(gg,{children:t.content}),(0,vl.jsx)(kg,{children:t.tech.map(((e,t)=>(0,vl.jsx)(Eg,{children:e},t)))})]},r)))})]}),(0,vl.jsxs)(dg,{id:"achievements",children:[(0,vl.jsx)(pg,{children:"Digital Achievements"}),(0,vl.jsx)(hg,{children:Tg.map(((e,t)=>(0,vl.jsxs)(fg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,vl.jsx)(mg,{children:e.title}),(0,vl.jsx)(gg,{children:e.content})]},t)))})]})]})]})};const Dg=function(){return(0,vl.jsx)(ke,{children:(0,vl.jsxs)(ve,{children:[(0,vl.jsx)(me,{path:"/",element:(0,vl.jsx)(Ed,{})}),(0,vl.jsx)(me,{path:"/web-dev-1",element:(0,vl.jsx)(Xd,{})}),(0,vl.jsx)(me,{path:"/web-dev-2",element:(0,vl.jsx)(hp,{})}),(0,vl.jsx)(me,{path:"/software-dev-1",element:(0,vl.jsx)(Wp,{})}),(0,vl.jsx)(me,{path:"/software-dev-2",element:(0,vl.jsx)(mh,{})}),(0,vl.jsx)(me,{path:"/digital-marketing-1",element:(0,vl.jsx)(Wh,{})}),(0,vl.jsx)(me,{path:"/digital-marketing-2",element:(0,vl.jsx)(yf,{})}),(0,vl.jsx)(me,{path:"/banker-1",element:(0,vl.jsx)(Jf,{})}),(0,vl.jsx)(me,{path:"/banker-2",element:(0,vl.jsx)(jm,{})}),(0,vl.jsx)(me,{path:"/teacher-1",element:(0,vl.jsx)(Jm,{})}),(0,vl.jsx)(me,{path:"/teacher-2",element:(0,vl.jsx)(Rg,{})})]})})},Ag=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)}))};i.createRoot(document.getElementById("root")).render((0,vl.jsx)(t.StrictMode,{children:(0,vl.jsx)(Dg,{})})),Ag()})()})();
//# sourceMappingURL=main.05e0d673.js.map