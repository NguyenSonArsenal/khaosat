/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},e=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},i=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},n=t=>{const e=i(t);return e&&document.querySelector(e)?e:null},s=t=>{const e=i(t);return e?document.querySelector(e):null},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),a=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?t.findOne(e):null,l=(t,e,i)=>{Object.keys(i).forEach(n=>{const s=i[n],o=e[n],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)})},c=t=>!(!r(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),d=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d(t.parentNode):null},u=()=>{},f=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],g=()=>"rtl"===document.documentElement.dir,_=t=>{var e;e=()=>{const e=p();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",()=>{m.forEach(t=>t())}),m.push(e)):e()},b=t=>{"function"==typeof t&&t()},v=(t,e,i=!0)=>{if(!i)return void b(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let s=!1;const r=({target:i})=>{i===e&&(s=!0,e.removeEventListener("transitionend",r),b(t))};e.addEventListener("transitionend",r),setTimeout(()=>{s||o(e)},n)},y=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},w=/[^.]*(?=\..*)\.|.*/,E=/\..*/,A=/::\d+$/,T={};let O=1;const C={mouseenter:"mouseover",mouseleave:"mouseout"},k=/^(mouseenter|mouseleave)/i,L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function x(t,e){return e&&`${e}::${O++}`||t.uidEvent||O++}function D(t){const e=x(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function S(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function I(t,e,i){const n="string"==typeof e,s=n?i:e;let o=M(t);return L.has(o)||(o=t),[n,s,o]}function N(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),k.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=I(e,i,n),l=D(t),c=l[a]||(l[a]={}),h=S(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=x(r,e.replace(w,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function j(t,e,i,n,s){const o=S(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function M(t){return t=t.replace(E,""),C[t]||t}const P={on(t,e,i,n){N(t,e,i,n,!1)},one(t,e,i,n){N(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=I(e,i,n),a=r!==e,l=D(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void j(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach(o=>{if(o.includes(n)){const n=s[o];j(t,e,i,n.originalHandler,n.delegationSelector)}})}(t,l,i,e.slice(1))});const h=l[r]||{};Object.keys(h).forEach(i=>{const n=i.replace(A,"");if(!a||e.includes(n)){const e=h[i];j(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=p(),s=M(e),o=e!==s,r=L.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(d,t,{get:()=>i[t]})}),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},H=new Map;var R={set(t,e,i){H.has(t)||H.set(t,new Map);const n=H.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>H.has(t)&&H.get(t).get(e)||null,remove(t,e){if(!H.has(t))return;const i=H.get(t);i.delete(e),0===i.size&&H.delete(t)}};class B{constructor(t){(t=a(t))&&(this._element=t,R.set(this._element,this.constructor.DATA_KEY,this))}dispose(){R.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,i=!0){v(t,e,i)}static getInstance(t){return R.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}class W extends B{static get NAME(){return"alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return P.trigger(t,"close.bs.alert")}_removeElement(t){t.classList.remove("show");const e=t.classList.contains("fade");this._queueCallback(()=>this._destroyElement(t),t,e)}_destroyElement(t){t.remove(),P.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}P.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',W.handleDismiss(new W)),_(W);class q extends B{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function z(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function $(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}P.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');q.getOrCreateInstance(e).toggle()}),_(q);const U={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+$(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+$(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=z(t.dataset[i])}),e},getDataAttribute:(t,e)=>z(t.getAttribute("data-bs-"+$(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},V={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",X="prev",Y="left",Q="right",G={ArrowLeft:Q,ArrowRight:Y};class Z extends B{constructor(e,i){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(i),this._indicatorsElement=t.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return F}static get NAME(){return"carousel"}next(){this._slide(K)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(X)}pause(e){e||(this._isPaused=!0),t.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=t.findOne(".active.carousel-item",this._element);const i=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void P.one(this._element,"slid.bs.carousel",()=>this.to(e));if(i===e)return this.pause(),void this.cycle();const n=e>i?K:X;this._slide(n,this._items[e])}_getConfig(t){return t={...F,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("carousel",t,V),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Q:Y)}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),P.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};t.find(".carousel-item img",this._element).forEach(t=>{P.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(P.on(this._element,"pointerdown.bs.carousel",t=>e(t)),P.on(this._element,"pointerup.bs.carousel",t=>n(t)),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.carousel",t=>e(t)),P.on(this._element,"touchmove.bs.carousel",t=>i(t)),P.on(this._element,"touchend.bs.carousel",t=>n(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=G[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(e){return this._items=e&&e.parentNode?t.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(t,e){const i=t===K;return y(this._items,e,i,this._config.wrap)}_triggerSlideEvent(e,i){const n=this._getItemIndex(e),s=this._getItemIndex(t.findOne(".active.carousel-item",this._element));return P.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:i,from:s,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const i=t.findOne(".active",this._indicatorsElement);i.classList.remove("active"),i.removeAttribute("aria-current");const n=t.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add("active"),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||t.findOne(".active.carousel-item",this._element);if(!e)return;const i=Number.parseInt(e.getAttribute("data-bs-interval"),10);i?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=i):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,i){const n=this._directionToOrder(e),s=t.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=i||this._getItemByOrder(n,s),a=this._getItemIndex(r),l=Boolean(this._interval),c=n===K,h=c?"carousel-item-start":"carousel-item-end",d=c?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,u).defaultPrevented)return;if(!s||!r)return;this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const p=()=>{P.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:u,from:o,to:a})};if(this._element.classList.contains("slide")){r.classList.add(d),f(r),s.classList.add(h),r.classList.add(h);const t=()=>{r.classList.remove(h,d),r.classList.add("active"),s.classList.remove("active",d,h),this._isSliding=!1,setTimeout(p,0)};this._queueCallback(t,s,!0)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,p();l&&this.cycle()}_directionToOrder(t){return[Q,Y].includes(t)?g()?t===Y?X:K:t===Y?K:X:t}_orderToDirection(t){return[K,X].includes(t)?g()?t===X?Y:Q:t===X?Q:Y:t}static carouselInterface(t,e){const i=Z.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Z.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...U.getDataAttributes(e),...U.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Z.carouselInterface(e,i),n&&Z.getInstance(e).to(n),t.preventDefault()}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Z.dataApiClickHandler),P.on(window,"load.bs.carousel.data-api",()=>{const e=t.find('[data-bs-ride="carousel"]');for(let t=0,i=e.length;t<i;t++)Z.carouselInterface(e[t],Z.getInstance(e[t]))}),_(Z);const J={toggle:!0,parent:""},tt={toggle:"boolean",parent:"(string|element)"};class et extends B{constructor(e,i){super(e),this._isTransitioning=!1,this._config=this._getConfig(i),this._triggerArray=t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=t.find('[data-bs-toggle="collapse"]');for(let e=0,i=s.length;e<i;e++){const i=s[e],o=n(i),r=t.find(o).filter(t=>t===this._element);null!==o&&r.length&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return J}static get NAME(){return"collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let e,i;this._parent&&(e=t.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===e.length&&(e=null));const n=t.findOne(this._selector);if(e){const t=e.find(t=>n!==t);if(i=t?et.getInstance(t):null,i&&i._isTransitioning)return}if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e&&e.forEach(t=>{n!==t&&et.collapseInterface(t,"hide"),i||R.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1));this._queueCallback(()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),P.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",f(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="",this._queueCallback(()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),P.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...J,...t}).toggle=Boolean(t.toggle),l("collapse",t,tt),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:e}=this._config;e=a(e);const i=`[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;return t.find(i,e).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),e}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=et.getInstance(t);const n={...J,...U.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&n.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(n.toggle=!1),i||(i=new et(t,n)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){et.collapseInterface(this,t)}))}}P.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const i=U.getDataAttributes(this),s=n(this);t.find(s).forEach(t=>{const e=et.getInstance(t);let n;e?(null===e._parent&&"string"==typeof i.parent&&(e._config.parent=i.parent,e._parent=e._getParent()),n="toggle"):n=i,et.collapseInterface(t,n)})})),_(et);var it="top",nt="bottom",st="right",ot="left",rt=[it,nt,st,ot],at=rt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),lt=[].concat(rt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),ct=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ht(t){return t?(t.nodeName||"").toLowerCase():null}function dt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ut(t){return t instanceof dt(t).Element||t instanceof Element}function ft(t){return t instanceof dt(t).HTMLElement||t instanceof HTMLElement}function pt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof dt(t).ShadowRoot||t instanceof ShadowRoot)}var mt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];ft(s)&&ht(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});ft(n)&&ht(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function gt(t){return t.split("-")[0]}function _t(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function bt(t){var e=_t(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function vt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&pt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function yt(t){return dt(t).getComputedStyle(t)}function wt(t){return["table","td","th"].indexOf(ht(t))>=0}function Et(t){return((ut(t)?t.ownerDocument:t.document)||window.document).documentElement}function At(t){return"html"===ht(t)?t:t.assignedSlot||t.parentNode||(pt(t)?t.host:null)||Et(t)}function Tt(t){return ft(t)&&"fixed"!==yt(t).position?t.offsetParent:null}function Ot(t){for(var e=dt(t),i=Tt(t);i&&wt(i)&&"static"===yt(i).position;)i=Tt(i);return i&&("html"===ht(i)||"body"===ht(i)&&"static"===yt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ft(t)&&"fixed"===yt(t).position)return null;for(var i=At(t);ft(i)&&["html","body"].indexOf(ht(i))<0;){var n=yt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ct(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var kt=Math.max,Lt=Math.min,xt=Math.round;function Dt(t,e,i){return kt(t,Lt(e,i))}function St(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function It(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Nt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=gt(i.placement),l=Ct(a),c=[ot,st].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return St("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:It(t,rt))}(s.padding,i),d=bt(o),u="y"===l?it:ot,f="y"===l?nt:st,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ot(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=Dt(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&vt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,h=!0===c?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:xt(xt(e*n)/n)||0,y:xt(xt(i*n)/n)||0}}(o):"function"==typeof c?c(o):o,d=h.x,u=void 0===d?0:d,f=h.y,p=void 0===f?0:f,m=o.hasOwnProperty("x"),g=o.hasOwnProperty("y"),_=ot,b=it,v=window;if(l){var y=Ot(i),w="clientHeight",E="clientWidth";y===dt(i)&&"static"!==yt(y=Et(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,s===it&&(b=nt,p-=y[w]-n.height,p*=a?1:-1),s===ot&&(_=st,u-=y[E]-n.width,u*=a?1:-1)}var A,T=Object.assign({position:r},l&&jt);return a?Object.assign({},T,((A={})[b]=g?"0":"",A[_]=m?"0":"",A.transform=(v.devicePixelRatio||1)<2?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",A)):Object.assign({},T,((e={})[b]=g?p+"px":"",e[_]=m?u+"px":"",e.transform="",e))}var Pt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Mt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Mt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},Ht={passive:!0},Rt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=dt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,Ht)})),a&&l.addEventListener("resize",i.update,Ht),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,Ht)})),a&&l.removeEventListener("resize",i.update,Ht)}},data:{}},Bt={left:"right",right:"left",bottom:"top",top:"bottom"};function Wt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Bt[t]}))}var qt={start:"end",end:"start"};function zt(t){return t.replace(/start|end/g,(function(t){return qt[t]}))}function $t(t){var e=dt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ut(t){return _t(Et(t)).left+$t(t).scrollLeft}function Ft(t){var e=yt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Vt(t,e){var i;void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(ht(e))>=0?e.ownerDocument.body:ft(e)&&Ft(e)?e:t(At(e))}(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=dt(n),r=s?[o].concat(o.visualViewport||[],Ft(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Vt(At(r)))}function Kt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Xt(t,e){return"viewport"===e?Kt(function(t){var e=dt(t),i=Et(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+Ut(t),y:a}}(t)):ft(e)?function(t){var e=_t(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Kt(function(t){var e,i=Et(t),n=$t(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ut(t),l=-n.scrollTop;return"rtl"===yt(s||i).direction&&(a+=kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Et(t)))}function Yt(t){return t.split("-")[1]}function Qt(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?gt(s):null,r=s?Yt(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case it:e={x:a,y:i.y-n.height};break;case nt:e={x:a,y:i.y+i.height};break;case st:e={x:i.x+i.width,y:l};break;case ot:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ct(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[h]/2-n[h]/2);break;case"end":e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Gt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,h=void 0===c?"popper":c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=St("number"!=typeof p?p:It(p,rt)),g="popper"===h?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[u?g:h],y=function(t,e,i){var n="clippingParents"===e?function(t){var e=Vt(At(t)),i=["absolute","fixed"].indexOf(yt(t).position)>=0&&ft(t)?Ot(t):t;return ut(i)?e.filter((function(t){return ut(t)&&vt(t,i)&&"body"!==ht(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Xt(t,i);return e.top=kt(n.top,e.top),e.right=Lt(n.right,e.right),e.bottom=Lt(n.bottom,e.bottom),e.left=kt(n.left,e.left),e}),Xt(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(ut(v)?v:v.contextElement||Et(t.elements.popper),r,l),w=_t(_),E=Qt({reference:w,element:b,strategy:"absolute",placement:s}),A=Kt(Object.assign({},b,E)),T="popper"===h?A:w,O={top:y.top-T.top+m.top,bottom:T.bottom-y.bottom+m.bottom,left:y.left-T.left+m.left,right:T.right-y.right+m.right},C=t.modifiersData.offset;if("popper"===h&&C){var k=C[s];Object.keys(O).forEach((function(t){var e=[st,nt].indexOf(t)>=0?1:-1,i=[it,nt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function Zt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?lt:l,h=Yt(n),d=h?a?at:at.filter((function(t){return Yt(t)===h})):rt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Gt(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[gt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}var Jt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=gt(g),b=l||(_!==g&&p?function(t){if("auto"===gt(t))return[];var e=Wt(t);return[zt(t),e,zt(e)]}(g):[Wt(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat("auto"===gt(i)?Zt(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=gt(C),L="start"===Yt(C),x=[it,nt].indexOf(k)>=0,D=x?"width":"height",S=Gt(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=x?L?st:ot:L?nt:it;y[D]>w[D]&&(I=Wt(I));var N=Wt(I),j=[];if(o&&j.push(S[k]<=0),a&&j.push(S[I]<=0,S[N]<=0),j.every((function(t){return t}))){T=C,A=!1;break}E.set(C,j)}if(A)for(var M=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},P=p?3:1;P>0&&"break"!==M(P);P--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function te(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ee(t){return[it,st,nt,ot].some((function(e){return t[e]>=0}))}var ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Gt(e,{elementContext:"reference"}),a=Gt(e,{altBoundary:!0}),l=te(r,n),c=te(a,s,o),h=ee(l),d=ee(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=lt.reduce((function(t,i){return t[i]=function(t,e,i){var n=gt(t),s=[ot,it].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[ot,st].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Qt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=Gt(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=gt(e.placement),b=Yt(e.placement),v=!b,y=Ct(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?it:ot,L="y"===y?nt:st,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],I=E[y]-g[L],N=f?-T[x]/2:0,j="start"===b?A[x]:T[x],M="start"===b?-T[x]:-A[x],P=e.elements.arrow,H=f&&P?bt(P):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},B=R[k],W=R[L],q=Dt(0,A[x],H[x]),z=v?A[x]/2-N-q-B-O:j-q-B-O,$=v?-A[x]/2+N+q+W+O:M+q+W+O,U=e.elements.arrow&&Ot(e.elements.arrow),F=U?"y"===y?U.clientTop||0:U.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+z-V-F,X=E[y]+$-V;if(o){var Y=Dt(f?Lt(S,K):S,D,f?kt(I,X):I);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?it:ot,G="x"===y?nt:st,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=Dt(f?Lt(J,K):J,Z,f?kt(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function re(t,e,i){void 0===i&&(i=!1);var n,s,o=Et(e),r=_t(t),a=ft(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==ht(e)||Ft(o))&&(l=(n=e)!==dt(n)&&ft(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:$t(n)),ft(e)?((c=_t(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Ut(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function le(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ce(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?ae:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){d(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:ut(t)?Vt(t):t.contextElement?Vt(t.contextElement):[],popper:Vt(e)};var s,r,c=function(t){var e=function(t){var e=new Map,i=new Set,n=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(s){i.add(s.name),[].concat(s.requires||[],s.requiresIfExists||[]).forEach((function(n){if(!i.has(n)){var s=e.get(n);s&&t(s)}})),n.push(s)}(t)})),n}(t);return ct.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((s=[].concat(n,a.options.modifiers),r=s.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(le(e,i)){a.rects={reference:re(e,Ot(i),"fixed"===a.options.strategy),popper:bt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!le(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var he=ce(),de=ce({defaultModifiers:[Rt,se,Pt,mt]}),ue=ce({defaultModifiers:[Rt,se,Pt,mt,ne,Jt,oe,Nt,ie]}),fe=Object.freeze({__proto__:null,popperGenerator:ce,detectOverflow:Gt,createPopperBase:he,createPopper:ue,createPopperLite:de,top:it,bottom:nt,right:st,left:ot,auto:"auto",basePlacements:rt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:at,placements:lt,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:ct,applyStyles:mt,arrow:Nt,computeStyles:Pt,eventListeners:Rt,flip:Jt,hide:ie,offset:ne,popperOffsets:se,preventOverflow:oe});const pe=new RegExp("ArrowUp|ArrowDown|Escape"),me=g()?"top-end":"top-start",ge=g()?"top-start":"top-end",_e=g()?"bottom-end":"bottom-start",be=g()?"bottom-start":"bottom-end",ve=g()?"left-start":"right-start",ye=g()?"right-start":"left-start",we={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ee={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ae extends B{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return we}static get DefaultType(){return Ee}static get NAME(){return"dropdown"}toggle(){h(this._element)||(this._element.classList.contains("show")?this.hide():this.show())}show(){if(h(this._element)||this._menu.classList.contains("show"))return;const t=Ae.getParentFromElement(this._element),e={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)U.setDataAttribute(this._menu,"popper","none");else{if(void 0===fe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?e=a(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=ue(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>P.on(t,"mouseover",u)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),P.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(h(this._element)||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){P.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_completeHide(t){P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...U.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return t.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ve;if(t.classList.contains("dropstart"))return ye;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ge:me:e?be:_e}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:e,target:i}){const n=t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(c);n.length&&y(n,i,"ArrowDown"===e,!n.includes(i)).focus()}static dropdownInterface(t,e){const i=Ae.getOrCreateInstance(t,e);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){Ae.dropdownInterface(this,t)}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const i=t.find('[data-bs-toggle="dropdown"]');for(let t=0,n=i.length;t<n;t++){const n=Ae.getInstance(i[t]);if(!n||!1===n._config.autoClose)continue;if(!n._element.classList.contains("show"))continue;const s={relatedTarget:n._element};if(e){const t=e.composedPath(),i=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(s.clickEvent=e)}n._completeHide(s)}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!pe.test(e.key))return;const i=this.classList.contains("show");if(!i&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),h(this))return;const n=()=>this.matches('[data-bs-toggle="dropdown"]')?this:t.prev(this,'[data-bs-toggle="dropdown"]')[0];return"Escape"===e.key?(n().focus(),void Ae.clearMenus()):"ArrowUp"===e.key||"ArrowDown"===e.key?(i||n().click(),void Ae.getInstance(n())._selectMenuItem(e)):void(i&&"Space"!==e.key||Ae.clearMenus())}}P.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',Ae.dataApiKeydownHandler),P.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",Ae.dataApiKeydownHandler),P.on(document,"click.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),Ae.dropdownInterface(this)})),_(Ae);class Te{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(s))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&U.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=U.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(U.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(e,i){r(e)?i(e):t.find(e,this._element).forEach(i)}isOverflowing(){return this.getWidth()>0}}const Oe={isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ce={isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class ke{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&f(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(()=>{b(t)})):b(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),b(t)})):b(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className="modal-backdrop",this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...Oe,..."object"==typeof t?t:{}}).rootElement=a(t.rootElement),l("backdrop",t,Ce),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),P.on(this._getElement(),"mousedown.bs.backdrop",()=>{b(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(P.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){v(t,this._getElement(),this._config.isAnimated)}}const Le={backdrop:!0,keyboard:!0,focus:!0},xe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class De extends B{constructor(e,i){super(e),this._config=this._getConfig(i),this._dialog=t.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Te}static get Default(){return Le}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,"show.bs.modal",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),P.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),P.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{P.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&["A","AREA"].includes(t.target.tagName)&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(P.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),P.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),P.off(this._element,"click.dismiss.bs.modal"),P.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(t=>P.off(t,".bs.modal")),this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.modal")}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ke({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(t){return t={...Le,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("modal",t,xe),t}_showElement(e){const i=this._isAnimated(),n=t.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),i&&f(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus(),this._queueCallback(()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,i)}_enforceFocus(){P.off(document,"focusin.bs.modal"),P.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?P.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):P.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?P.on(window,"resize.bs.modal",()=>this._adjustDialog()):P.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,"hidden.bs.modal")})}_showBackdrop(t){P.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains("modal-static")||(n||(i.overflowY="hidden"),t.add("modal-static"),this._queueCallback(()=>{t.remove("modal-static"),n||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!g()||i&&!t&&g())&&(this._element.style.paddingLeft=e+"px"),(i&&!t&&!g()||!i&&t&&g())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=De.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,"show.bs.modal",t=>{t.defaultPrevented||P.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})}),De.getOrCreateInstance(e).toggle(this)})),_(De);const Se={backdrop:!0,keyboard:!0,scroll:!1},Ie={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Ne extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return Se}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||((new Te).hide(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(()=>{P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(P.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Te).reset(),P.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)))}dispose(){this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.offcanvas")}_getConfig(t){return t={...Se,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Ie),t}_initializeBackDrop(){return new ke({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(t){P.off(document,"focusin.bs.offcanvas"),P.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){P.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),P.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=Ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const i=s(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),h(this))return;P.one(i,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const n=t.findOne(".offcanvas.show");n&&n!==i&&Ne.getInstance(n).hide(),Ne.getOrCreateInstance(i).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",()=>t.find(".offcanvas.show").forEach(t=>Ne.getOrCreateInstance(t).show())),_(Ne);const je=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Me=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,Pe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,He=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!je.has(i)||Boolean(Me.test(t.nodeValue)||Pe.test(t.nodeValue));const n=e.filter(t=>t instanceof RegExp);for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Re(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],n=i.nodeName.toLowerCase();if(!s.includes(n)){i.remove();continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[n]||[]);r.forEach(t=>{He(t,a)||i.removeAttribute(t.nodeName)})}return n.body.innerHTML}const Be=new RegExp("(^|\\s)bs-tooltip\\S+","g"),We=new Set(["sanitize","allowList","sanitizeFn"]),qe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ze={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},$e={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ue={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Fe extends B{constructor(t,e){if(void 0===fe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return $e}static get NAME(){return"tooltip"}static get Event(){return Ue}static get DefaultType(){return qe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.Event.SHOW),i=d(this._element),n=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(t.defaultPrevented||!n)return;const s=this.getTipElement(),o=e(this.constructor.NAME);s.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this.setContent(),this._config.animation&&s.classList.add("fade");const r="function"==typeof this._config.placement?this._config.placement.call(this,s,this._element):this._config.placement,a=this._getAttachment(r);this._addAttachmentClass(a);const{container:l}=this._config;R.set(s,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.appendChild(s),P.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ue(this._element,s,this._getPopperConfig(a)),s.classList.add("show");const c="function"==typeof this._config.customClass?this._config.customClass():this._config.customClass;c&&s.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{P.on(t,"mouseover",u)});const h=this.tip.classList.contains("fade");this._queueCallback(()=>{const t=this._hoverState;this._hoverState=null,P.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)},this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement();if(P.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))},this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this._config.template,this.tip=t.children[0],this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".tooltip-inner",e),this.getTitle()),e.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return r(e)?(e=a(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Re(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this._config.title?this._config.title.call(this._element):this._config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||R.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),R.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getAttachment(t){return ze[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if("click"===t)P.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;P.on(this._element,e,this._config.selector,t=>this._enter(t)),P.on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=U.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{We.has(t)&&delete e[t]}),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:a(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Re(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this._config)for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Be);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){const e=Fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Fe);const Ve=new RegExp("(^|\\s)bs-popover\\S+","g"),Ke={...Fe.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Xe={...Fe.DefaultType,content:"(string|element|function)"},Ye={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Qe extends Fe{static get Default(){return Ke}static get NAME(){return"popover"}static get Event(){return Ye}static get DefaultType(){return Xe}isWithContent(){return this.getTitle()||this._getContent()}getTipElement(){return this.tip||(this.tip=super.getTipElement(),this.getTitle()||t.findOne(".popover-header",this.tip).remove(),this._getContent()||t.findOne(".popover-body",this.tip).remove()),this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".popover-header",e),this.getTitle());let i=this._getContent();"function"==typeof i&&(i=i.call(this._element)),this.setElementContent(t.findOne(".popover-body",e),i),e.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this._config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ve);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){const e=Qe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Qe);const Ge={offset:10,method:"auto",target:""},Ze={offset:"number",method:"string",target:"(string|element)"};class Je extends B{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,P.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return Ge}static get NAME(){return"scrollspy"}refresh(){const e=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?e:this._config.method,s="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.find(this._selector).map(e=>{const o=n(e),r=o?t.findOne(o):null;if(r){const t=r.getBoundingClientRect();if(t.width||t.height)return[U[i](r).top+s,o]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){P.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){if("string"!=typeof(t={...Ge,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target&&r(t.target)){let{id:i}=t.target;i||(i=e("scrollspy"),t.target.id=i),t.target="#"+i}return l("scrollspy",t,Ze),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(e){this._activeTarget=e,this._clear();const i=this._selector.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=t.findOne(i.join(","));n.classList.contains("dropdown-item")?(t.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"),n.classList.add("active")):(n.classList.add("active"),t.parents(n,".nav, .list-group").forEach(e=>{t.prev(e,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),t.prev(e,".nav-item").forEach(e=>{t.children(e,".nav-link").forEach(t=>t.classList.add("active"))})})),P.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){t.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",()=>{t.find('[data-bs-spy="scroll"]').forEach(t=>new Je(t))}),_(Je);class ti extends B{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let e;const i=s(this._element),n=this._element.closest(".nav, .list-group");if(n){const i="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";e=t.find(i,n),e=e[e.length-1]}const o=e?P.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(P.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==o&&o.defaultPrevented)return;this._activate(this._element,n);const r=()=>{P.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),P.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};i?this._activate(i,i.parentNode,r):r()}_activate(e,i,n){const s=(!i||"UL"!==i.nodeName&&"OL"!==i.nodeName?t.children(i,".active"):t.find(":scope > li > .active",i))[0],o=n&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(e,s,n);s&&o?(s.classList.remove("show"),this._queueCallback(r,e,!0)):r()}_transitionComplete(e,i,n){if(i){i.classList.remove("active");const e=t.findOne(":scope > .dropdown-menu .active",i.parentNode);e&&e.classList.remove("active"),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),f(e),e.classList.contains("fade")&&e.classList.add("show");let s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")){const i=e.closest(".dropdown");i&&t.find(".dropdown-toggle",i).forEach(t=>t.classList.add("active")),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=ti.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this)||ti.getOrCreateInstance(this).show()})),_(ti);const ei={animation:"boolean",autohide:"boolean",delay:"number"},ii={animation:!0,autohide:!0,delay:5e3};class ni extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ei}static get Default(){return ii}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),f(this._element),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains("show")&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.remove("show"),this._queueCallback(()=>{this._element.classList.add("hide"),P.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),super.dispose()}_getConfig(t){return t={...ii,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide()),P.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),P.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"focusout.bs.toast",t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return _(ni),{Alert:W,Button:q,Carousel:Z,Collapse:et,Dropdown:Ae,Modal:De,Offcanvas:Ne,Popover:Qe,ScrollSpy:Je,Tab:ti,Toast:ni,Tooltip:Fe}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

!function () {
  var t = {
    4155: function (t, e, i) {
      var n = i(3609);
      !function (t, e, i, n) {
        "use strict";
        if (t.console = t.console || {
          info: function (t) {
          }
        }, i && !i.fn.fancybox) {
          var o, s, a, r, l = {
              closeExisting: !1,
              loop: !1,
              gutter: 50,
              keyboard: !0,
              preventCaptionOverlap: !0,
              arrows: !0,
              infobar: !0,
              smallBtn: "auto",
              toolbar: "auto",
              buttons: ["zoom", "slideShow", "thumbs", "close"],
              idleTime: 3,
              protect: !1,
              modal: !1,
              image: {preload: !1},
              ajax: {settings: {data: {fancybox: !0}}},
              iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {scrolling: "auto"}
              },
              video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0
              },
              defaultType: "image",
              animationEffect: "zoom",
              animationDuration: 366,
              zoomOpacity: "auto",
              transitionEffect: "fade",
              transitionDuration: 366,
              slideClass: "",
              baseClass: "",
              baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
              spinnerTpl: '<div class="fancybox-loading"></div>',
              errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
              btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
              },
              parentEl: "body",
              hideScrollbar: !0,
              autoFocus: !0,
              backFocus: !0,
              trapFocus: !0,
              fullScreen: {autoStart: !1},
              touch: {vertical: !0, momentum: !0},
              hash: null,
              media: {},
              slideShow: {autoStart: !1, speed: 3e3},
              thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
              wheel: "auto",
              onInit: i.noop,
              beforeLoad: i.noop,
              afterLoad: i.noop,
              beforeShow: i.noop,
              afterShow: i.noop,
              beforeClose: i.noop,
              afterClose: i.noop,
              onActivate: i.noop,
              onDeactivate: i.noop,
              clickContent: function (t, e) {
                return "image" === t.type && "zoom"
              },
              clickSlide: "close",
              clickOutside: "close",
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
              mobile: {
                preventCaptionOverlap: !1, idleTime: !1, clickContent: function (t, e) {
                  return "image" === t.type && "toggleControls"
                }, clickSlide: function (t, e) {
                  return "image" === t.type ? "toggleControls" : "close"
                }, dblclickContent: function (t, e) {
                  return "image" === t.type && "zoom"
                }, dblclickSlide: function (t, e) {
                  return "image" === t.type && "zoom"
                }
              },
              lang: "en",
              i18n: {
                en: {
                  CLOSE: "Close",
                  NEXT: "Next",
                  PREV: "Previous",
                  ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                  PLAY_START: "Start slideshow",
                  PLAY_STOP: "Pause slideshow",
                  FULL_SCREEN: "Full screen",
                  THUMBS: "Thumbnails",
                  DOWNLOAD: "Download",
                  SHARE: "Share",
                  ZOOM: "Zoom"
                },
                de: {
                  CLOSE: "Schlie&szlig;en",
                  NEXT: "Weiter",
                  PREV: "Zur&uuml;ck",
                  ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                  PLAY_START: "Diaschau starten",
                  PLAY_STOP: "Diaschau beenden",
                  FULL_SCREEN: "Vollbild",
                  THUMBS: "Vorschaubilder",
                  DOWNLOAD: "Herunterladen",
                  SHARE: "Teilen",
                  ZOOM: "Vergr&ouml;&szlig;ern"
                }
              }
            }, c = i(t), d = i(e), h = 0,
            u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
              return t.setTimeout(e, 1e3 / 60)
            },
            f = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
              t.clearTimeout(e)
            }, p = function () {
              var t, i = e.createElement("fakeelement"), o = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
              };
              for (t in o) if (i.style[t] !== n) return o[t];
              return "transitionend"
            }(), g = function (t) {
              return t && t.length && t[0].offsetHeight
            }, m = function (t, e) {
              var n = i.extend(!0, {}, t, e);
              return i.each(e, (function (t, e) {
                i.isArray(e) && (n[t] = e)
              })), n
            }, v = function (t, e, n) {
              var o = this;
              o.opts = m({index: n}, i.fancybox.defaults), i.isPlainObject(e) && (o.opts = m(o.opts, e)), i.fancybox.isMobile && (o.opts = m(o.opts, o.opts.mobile)), o.id = o.opts.id || ++h, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(t), o.group.length && o.init()
            };
          i.extend(v.prototype, {
            init: function () {
              var n, o, s = this, a = s.group[s.currIndex].opts;
              a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), o = "", i.each(a.buttons, (function (t, e) {
                o += a.btnTpl[e] || ""
              })), n = i(s.translate(s, a.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(a.baseClass).data("FancyBox", s).appendTo(a.parentEl), s.$refs = {container: n}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function (t) {
                s.$refs[t] = n.find(".fancybox-" + t)
              })), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
            }, translate: function (t, e) {
              var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
              return e.replace(/\{\{(\w+)\}\}/g, (function (t, e) {
                return i[e] === n ? t : i[e]
              }))
            }, addContent: function (t) {
              var e, o = this, s = i.makeArray(t);
              i.each(s, (function (t, e) {
                var s, a, r, l, c, d = {}, h = {};
                i.isPlainObject(e) ? (d = e, h = e.opts || e) : "object" === i.type(e) && i(e).length ? (h = (s = i(e)).data() || {}, (h = i.extend(!0, {}, h, h.options)).$orig = s, d.src = o.opts.src || h.src || s.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
                  type: "html",
                  src: e + ""
                }, d.opts = i.extend(!0, {}, o.opts, h), i.isArray(h.buttons) && (d.opts.buttons = h.buttons), i.fancybox.isMobile && d.opts.mobile && (d.opts = m(d.opts, d.opts.mobile)), a = d.type || d.opts.type, l = d.src || "", !a && l && ((r = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", d = i.extend(!0, d, {
                  contentType: "pdf",
                  opts: {iframe: {preload: !1}}
                })) : "#" === l.charAt(0) && (a = "inline")), a ? d.type = a : o.trigger("objectNeedsType", d), d.contentType || (d.contentType = i.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = o.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = i.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.$thumb = d.opts.$thumb || null, d.opts.$trigger && d.index === o.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"), d.$thumb.length && (d.opts.$orig = d.opts.$trigger)), d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")), d.$thumb && !d.$thumb.length && (d.$thumb = null), d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null), "function" === i.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [o, d])), "function" === i.type(o.opts.caption) && (d.opts.caption = o.opts.caption.apply(e, [o, d])), d.opts.caption instanceof i || (d.opts.caption = d.opts.caption === n ? "" : d.opts.caption + ""), "ajax" === d.type && (c = l.split(/\s+/, 2)).length > 1 && (d.src = c.shift(), d.opts.filter = c.shift()), d.opts.modal && (d.opts = i.extend(!0, d.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1
                })), o.group.push(d)
              })), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
            }, addEvents: function () {
              var e = this;
              e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function (t) {
                t.stopPropagation(), t.preventDefault(), e.close(t)
              })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous()
              })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function (t) {
                t.stopPropagation(), t.preventDefault(), e.next()
              })).on("click.fb", "[data-fancybox-zoom]", (function (t) {
                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
              })), c.on("orientationchange.fb resize.fb", (function (t) {
                t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && f(e.requestId), e.requestId = u((function () {
                  e.update(t)
                }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function () {
                  e.$refs.stage.show(), e.update(t)
                }), i.fancybox.isMobile ? 600 : 250))
              })), d.on("keydown.fb", (function (t) {
                var n = (i.fancybox ? i.fancybox.getInstance() : null).current, o = t.keyCode || t.which;
                if (9 != o) {
                  if (!(!n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio,select"))) return 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o)
                } else n.opts.trapFocus && e.focus(t)
              })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, d.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function (t) {
                e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
              })), e.idleInterval = t.setInterval((function () {
                e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
              }), 1e3))
            }, removeEvents: function () {
              var e = this;
              c.off("orientationchange.fb resize.fb"), d.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            }, previous: function (t) {
              return this.jumpTo(this.currPos - 1, t)
            }, next: function (t) {
              return this.jumpTo(this.currPos + 1, t)
            }, jumpTo: function (t, e) {
              var o, s, a, r, l, c, d, h, u, f = this, p = f.group.length;
              if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= p)) return !1;
                if (o = f.firstRun = !Object.keys(f.slides).length, l = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, r = f.createSlide(t), p > 1 && ((a || r.index < p - 1) && f.createSlide(t + 1), (a || r.index > 0) && f.createSlide(t - 1)), f.current = r, f.currIndex = r.index, f.currPos = r.pos, f.trigger("beforeShow", o), f.updateControls(), r.forcedDuration = n, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), s = f.isMoved(r), r.$slide.addClass("fancybox-slide--current"), o) return r.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(r), void f.preload("image");
                c = i.fancybox.getTranslate(l.$slide), d = i.fancybox.getTranslate(f.$refs.stage), i.each(f.slides, (function (t, e) {
                  i.fancybox.stop(e.$slide, !0)
                })), l.pos !== r.pos && (l.isComplete = !1), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), s ? (u = c.left - (l.pos * c.width + l.pos * l.opts.gutter), i.each(f.slides, (function (t, n) {
                  n.$slide.removeClass("fancybox-animated").removeClass((function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                  }));
                  var o = n.pos * c.width + n.pos * n.opts.gutter;
                  i.fancybox.setTranslate(n.$slide, {
                    top: 0,
                    left: o - d.left + u
                  }), n.pos !== r.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > r.pos ? "next" : "previous")), g(n.$slide), i.fancybox.animate(n.$slide, {
                    top: 0,
                    left: (n.pos - r.pos) * c.width + (n.pos - r.pos) * n.opts.gutter
                  }, e, (function () {
                    n.$slide.css({
                      transform: "",
                      opacity: ""
                    }).removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === f.currPos && f.complete()
                  }))
                }))) : e && r.opts.transitionEffect && (h = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, l.$slide.addClass("fancybox-slide--" + (l.pos > r.pos ? "next" : "previous")), i.fancybox.animate(l.$slide, h, e, (function () {
                  l.$slide.removeClass(h).removeClass("fancybox-slide--next fancybox-slide--previous")
                }), !1)), r.isLoaded ? f.revealContent(r) : f.loadSlide(r), f.preload("image")
              }
            }, createSlide: function (t) {
              var e, n, o = this;
              return n = (n = t % o.group.length) < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = i.extend(!0, {}, o.group[n], {
                pos: t,
                $slide: e,
                isLoaded: !1
              }), o.updateSlide(o.slides[t])), o.slides[t]
            }, scaleToActual: function (t, e, o) {
              var s, a, r, l, c, d = this, h = d.current, u = h.$content, f = i.fancybox.getTranslate(h.$slide).width,
                p = i.fancybox.getTranslate(h.$slide).height, g = h.width, m = h.height;
              d.isAnimating || d.isMoved() || !u || "image" != h.type || !h.isLoaded || h.hasError || (d.isAnimating = !0, i.fancybox.stop(u), t = t === n ? .5 * f : t, e = e === n ? .5 * p : e, (s = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(h.$slide).top, s.left -= i.fancybox.getTranslate(h.$slide).left, l = g / s.width, c = m / s.height, a = .5 * f - .5 * g, r = .5 * p - .5 * m, g > f && ((a = s.left * l - (t * l - t)) > 0 && (a = 0), a < f - g && (a = f - g)), m > p && ((r = s.top * c - (e * c - e)) > 0 && (r = 0), r < p - m && (r = p - m)), d.updateCursor(g, m), i.fancybox.animate(u, {
                top: r,
                left: a,
                scaleX: l,
                scaleY: c
              }, o || 366, (function () {
                d.isAnimating = !1
              })), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            }, scaleToFit: function (t) {
              var e, n = this, o = n.current, s = o.$content;
              n.isAnimating || n.isMoved() || !s || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0, i.fancybox.stop(s), e = n.getFitPos(o), n.updateCursor(e.width, e.height), i.fancybox.animate(s, {
                top: e.top,
                left: e.left,
                scaleX: e.width / s.width(),
                scaleY: e.height / s.height()
              }, t || 366, (function () {
                n.isAnimating = !1
              })))
            }, getFitPos: function (t) {
              var e, n, o, s, a = t.$content, r = t.$slide, l = t.width || t.opts.width, c = t.height || t.opts.height,
                d = {};
              return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, n = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), n -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = n), (l *= o = Math.min(1, e / l, n / c)) > e - .5 && (l = e), (c *= o) > n - .5 && (c = n), "image" === t.type ? (d.top = Math.floor(.5 * (n - c)) + parseFloat(r.css("paddingTop")), d.left = Math.floor(.5 * (e - l)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (c > l / (s = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)), d.width = l, d.height = c, d)
            }, update: function (t) {
              var e = this;
              i.each(e.slides, (function (i, n) {
                e.updateSlide(n, t)
              }))
            }, updateSlide: function (t, e) {
              var n = this, o = t && t.$content, s = t.width || t.opts.width, a = t.height || t.opts.height,
                r = t.$slide;
              n.adjustCaption(t), o && (s || a || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(o), i.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), n.trigger("onUpdate", t, e)
            }, centerSlide: function (t) {
              var e = this, o = e.current, s = o.$slide;
              !e.isClosing && o && (s.siblings().css({
                transform: "",
                opacity: ""
              }), s.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(s, {
                top: 0,
                left: 0,
                opacity: 1
              }, t === n ? 0 : t, (function () {
                s.css({transform: "", opacity: ""}), o.isComplete || e.complete()
              }), !1))
            }, isMoved: function (t) {
              var e, n, o = t || this.current;
              return !!o && (n = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
            }, updateCursor: function (t, e) {
              var n, o, s = this, a = s.current, r = s.$refs.container;
              a && !s.isClosing && s.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(n = s.canPan(t, e)) || s.isZoomable(), r.toggleClass("fancybox-is-zoomable", o), i("[data-fancybox-zoom]").prop("disabled", !o), n ? r.addClass("fancybox-can-pan") : o && ("zoom" === a.opts.clickContent || i.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? r.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || s.group.length > 1) && "video" !== a.contentType && r.addClass("fancybox-can-swipe"))
            }, isZoomable: function () {
              var t, e = this, i = e.current;
              if (i && !e.isClosing && "image" === i.type && !i.hasError) {
                if (!i.isLoaded) return !0;
                if ((t = e.getFitPos(i)) && (i.width > t.width || i.height > t.height)) return !0
              }
              return !1
            }, isScaledDown: function (t, e) {
              var o = !1, s = this.current, a = s.$content;
              return t !== n && e !== n ? o = t < s.width && e < s.height : a && (o = (o = i.fancybox.getTranslate(a)).width < s.width && o.height < s.height), o
            }, canPan: function (t, e) {
              var o = this.current, s = null, a = !1;
              return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (a = this.getFitPos(o), t !== n && e !== n ? s = {
                width: t,
                height: e
              } : o.isComplete && (s = i.fancybox.getTranslate(o.$content)), s && a && (a = Math.abs(s.width - a.width) > 1.5 || Math.abs(s.height - a.height) > 1.5)), a
            }, loadSlide: function (t) {
              var e, n, o, s = this;
              if (!t.isLoading && !t.isLoaded) {
                if (t.isLoading = !0, !1 === s.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                switch (e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                  case"image":
                    s.setImage(t);
                    break;
                  case"iframe":
                    s.setIframe(t);
                    break;
                  case"html":
                    s.setContent(t, t.src || t.content);
                    break;
                  case"video":
                    s.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                    break;
                  case"inline":
                    i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                    break;
                  case"ajax":
                    s.showLoading(t), o = i.ajax(i.extend({}, t.opts.ajax.settings, {
                      url: t.src,
                      success: function (e, i) {
                        "success" === i && s.setContent(t, e)
                      },
                      error: function (e, i) {
                        e && "abort" !== i && s.setError(t)
                      }
                    })), n.one("onReset", (function () {
                      o.abort()
                    }));
                    break;
                  default:
                    s.setError(t)
                }
                return !0
              }
            }, setImage: function (t) {
              var n, o = this;
              setTimeout((function () {
                var e = t.$image;
                o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
              }), 50), o.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (n = e.createElement("img")).onerror = function () {
                i(this).remove(), t.$ghost = null
              }, n.onload = function () {
                o.afterLoad(t)
              }, t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t)
            }, checkSrcset: function (e) {
              var i, n, o, s, a = e.opts.srcset || e.opts.image.srcset;
              if (a) {
                o = t.devicePixelRatio || 1, s = t.innerWidth * o, (n = a.split(",").map((function (t) {
                  var e = {};
                  return t.trim().split(/\s+/).forEach((function (t, i) {
                    var n = parseInt(t.substring(0, t.length - 1), 10);
                    if (0 === i) return e.url = t;
                    n && (e.value = n, e.postfix = t[t.length - 1])
                  })), e
                }))).sort((function (t, e) {
                  return t.value - e.value
                }));
                for (var r = 0; r < n.length; r++) {
                  var l = n[r];
                  if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= o) {
                    i = l;
                    break
                  }
                }
                !i && n.length && (i = n[n.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a)
              }
            }, setBigImage: function (t) {
              var n = this, o = e.createElement("img"), s = i(o);
              t.$image = s.one("error", (function () {
                n.setError(t)
              })).one("load", (function () {
                var e;
                t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && c.width() / c.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), s.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function () {
                  t.$ghost && !n.isClosing && t.$ghost.hide()
                }), Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
              })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error")
            }, resolveImageSlideSize: function (t, e, i) {
              var n = parseInt(t.opts.width, 10), o = parseInt(t.opts.height, 10);
              t.width = e, t.height = i, n > 0 && (t.width = n, t.height = Math.floor(n * i / e)), o > 0 && (t.width = Math.floor(o * e / i), t.height = o)
            }, setIframe: function (t) {
              var e, o = this, s = t.opts.iframe, a = t.$slide;
              t.$content = i('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(t.$content), s.preload ? (o.showLoading(t), e.on("load.fb error.fb", (function (e) {
                this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
              })), a.on("refresh.fb", (function () {
                var i, o = t.$content, r = s.css.width, l = s.css.height;
                if (1 === e[0].isReady) {
                  try {
                    i = e.contents().find("body")
                  } catch (t) {
                  }
                  i && i.length && i.children().length && (a.css("overflow", "visible"), o.css({
                    width: "100%",
                    "max-width": "100%",
                    height: "9999px"
                  }), r === n && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), o.css("width", r || "").css("max-width", ""), l === n && (l = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), o.css("height", l || ""), a.css("overflow", "auto")), o.removeClass("fancybox-is-hidden")
                }
              }))) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", (function () {
                try {
                  i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                } catch (t) {
                }
                i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
              }))
            }, setContent: function (t, e) {
              var n, o = this;
              o.isClosing || (o.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof i && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function () {
                i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
              })), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
            }, setError: function (t) {
              t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            }, showLoading: function (t) {
              var e = this;
              (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            }, hideLoading: function (t) {
              (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
            }, afterLoad: function (t) {
              var e = this;
              e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function (t) {
                return 2 == t.button && t.preventDefault(), !0
              })), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
            }, adjustCaption: function (t) {
              var e, i = this, n = t || i.current, o = n.opts.caption, s = n.opts.preventCaptionOverlap,
                a = i.$refs.caption, r = !1;
              a.toggleClass("fancybox-caption--separate", s), s && o && o.length && (n.pos !== i.currPos ? ((e = a.clone().appendTo(a.parent())).children().eq(0).empty().html(o), r = e.outerHeight(!0), e.empty().remove()) : i.$caption && (r = i.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", r || ""))
            }, adjustLayout: function (t) {
              var e, i, n, o, s = t || this.current;
              s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (i = o), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", i))
            }, revealContent: function (t) {
              var e, o, s, a, r = this, l = t.$slide, c = !1, d = !1, h = r.isMoved(t), u = t.isRevealed;
              return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(t.forcedDuration === n ? s : t.forcedDuration, 10), !h && t.pos === r.currPos && s || (e = !1), "zoom" === e && (t.pos === r.currPos && s && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? c = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, c.scaleX = c.width / d.width, c.scaleY = c.height / d.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - d.width / d.height) > .1), a && (d.opacity = .1, c.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), g(t.$content), void i.fancybox.animate(t.$content, c, s, (function () {
                r.isAnimating = !1, r.complete()
              }))) : (r.updateSlide(t), e ? (i.fancybox.stop(l), o = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, l.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), g(l), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(l, "fancybox-slide--current", s, (function () {
                l.removeClass(o).css({transform: "", opacity: ""}), t.pos === r.currPos && r.complete()
              }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !h || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete())))
            }, getThumbPos: function (t) {
              var n, o, s, a, r, l, c = t.$thumb;
              return !(!c || !function (t) {
                var n, o;
                return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), n = {
                  x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                  y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, o = e.elementFromPoint(n.x, n.y) === t, i(".fancybox-container").css("pointer-events", ""), o)
              }(c[0])) && (o = i.fancybox.getTranslate(c), s = parseFloat(c.css("border-top-width") || 0), a = parseFloat(c.css("border-right-width") || 0), r = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), n = {
                top: o.top + s,
                left: o.left + l,
                width: o.width - a - l,
                height: o.height - s - r,
                scaleX: 1,
                scaleY: 1
              }, o.width > 0 && o.height > 0 && n)
            }, complete: function () {
              var t, e = this, n = e.current, o = {};
              !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), e.preload("inline"), g(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, (function (t, n) {
                n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
              })), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function () {
                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
              })), n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), n.$slide.scrollTop(0).scrollLeft(0))
            }, preload: function (t) {
              var e, i, n = this;
              n.group.length < 2 || (i = n.slides[n.currPos + 1], (e = n.slides[n.currPos - 1]) && e.type === t && n.loadSlide(e), i && i.type === t && n.loadSlide(i))
            }, focus: function (t, n) {
              var o, s, a = this,
                r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
              a.isClosing || ((o = (o = !t && a.current && a.current.isComplete ? a.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : a.$refs.container.find("*:visible")).filter(r).filter((function () {
                return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
              }))).length ? (s = o.index(e.activeElement), t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : a.$refs.container.trigger("focus"))
            }, activate: function () {
              var t = this;
              i(".fancybox-container").each((function () {
                var e = i(this).data("FancyBox");
                e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
              })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            }, close: function (t, e) {
              var n, o, s, a, r, l, c, d = this, h = d.current, f = function () {
                d.cleanUp(t)
              };
              return !d.isClosing && (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, u((function () {
                d.update()
              })), !1) : (d.removeEvents(), s = h.$content, n = h.opts.animationEffect, o = i.isNumeric(e) ? e : n ? h.opts.animationDuration : 0, h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(h.$slide) : n = !1, h.$slide.siblings().trigger("onReset").remove(), o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), d.hideLoading(h), d.hideControls(!0), d.updateCursor(), "zoom" !== n || s && o && "image" === h.type && !d.isMoved() && !h.hasError && (c = d.getThumbPos(h)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), l = {
                top: (a = i.fancybox.getTranslate(s)).top,
                left: a.left,
                scaleX: a.width / c.width,
                scaleY: a.height / c.height,
                width: c.width,
                height: c.height
              }, "auto" == (r = h.opts.zoomOpacity) && (r = Math.abs(h.width / h.height - c.width / c.height) > .1), r && (c.opacity = 0), i.fancybox.setTranslate(s, l), g(s), i.fancybox.animate(s, c, o, f), !0) : (n && o ? i.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, f) : !0 === t ? setTimeout(f, o) : f(), !0)))
            }, cleanUp: function (e) {
              var n, o, s, a = this, r = a.current.opts.$orig;
              a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = a.$trigger), r && r.length && (o = t.scrollX, s = t.scrollY, r.trigger("focus"), i("html, body").scrollTop(s).scrollLeft(o))), a.current = null, (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
            }, trigger: function (t, e) {
              var n, o = Array.prototype.slice.call(arguments, 1), s = this, a = e && e.opts ? e : s.current;
              if (a ? o.unshift(a) : a = s, o.unshift(s), i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, o)), !1 === n) return n;
              "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : d.trigger(t + ".fb", o)
            }, updateControls: function () {
              var t = this, n = t.current, o = n.index, s = t.$refs.container, a = t.$refs.caption, r = n.opts.caption;
              n.$slide.trigger("refresh"), r && r.length ? (t.$caption = a, a.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(o + 1), s.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0), s.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= t.group.length - 1), "image" === n.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            }, hideControls: function (t) {
              var e = ["infobar", "toolbar", "nav"];
              !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map((function (t) {
                return "fancybox-show-" + t
              })).join(" ")), this.hasHiddenControls = !0
            }, showControls: function () {
              var t = this, e = t.current ? t.current.opts : t.opts, i = t.$refs.container;
              t.hasHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            }, toggleControls: function () {
              this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
          }), i.fancybox = {
            version: "3.5.7",
            defaults: l,
            getInstance: function (t) {
              var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                n = Array.prototype.slice.call(arguments, 1);
              return e instanceof v && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
            },
            open: function (t, e, i) {
              return new v(t, e, i)
            },
            close: function (t) {
              var e = this.getInstance();
              e && (e.close(), !0 === t && this.close(t))
            },
            destroy: function () {
              this.close(!0), d.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (o = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(o) && t.getComputedStyle(o).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
            getTranslate: function (t) {
              var e;
              return !(!t || !t.length) && {
                top: (e = t[0].getBoundingClientRect()).top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity"))
              }
            },
            setTranslate: function (t, e) {
              var i = "", o = {};
              if (t && e) return e.left === n && e.top === n || (i = (e.left === n ? t.position().left : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== n && e.scaleY !== n ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== n && (i += " scaleX(" + e.scaleX + ")"), i.length && (o.transform = i), e.opacity !== n && (o.opacity = e.opacity), e.width !== n && (o.width = e.width), e.height !== n && (o.height = e.height), t.css(o)
            },
            animate: function (t, e, o, s, a) {
              var r, l = this;
              i.isFunction(o) && (s = o, o = null), l.stop(t), r = l.getTranslate(t), t.on(p, (function (c) {
                (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (l.stop(t), i.isNumeric(o) && t.css("transition-duration", ""), i.isPlainObject(e) ? e.scaleX !== n && e.scaleY !== n && l.setTranslate(t, {
                  top: e.top,
                  left: e.left,
                  width: r.width * e.scaleX,
                  height: r.height * e.scaleY,
                  scaleX: 1,
                  scaleY: 1
                }) : !0 !== a && t.removeClass(e), i.isFunction(s) && s(c))
              })), i.isNumeric(o) && t.css("transition-duration", o + "ms"), i.isPlainObject(e) ? (e.scaleX !== n && e.scaleY !== n && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function () {
                t.trigger(p)
              }), o + 33))
            },
            stop: function (t, e) {
              t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(p), t.off(p).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
          }, i.fn.fancybox = function (t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {options: t}, b) : this.off("click.fb-start").on("click.fb-start", {
              items: this,
              options: t
            }, b), this
          }, d.on("click.fb-start", "[data-fancybox]", b), d.on("click.fb-start", "[data-fancybox-trigger]", (function (t) {
            i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: i(this)})
          })), s = ".fancybox-button", a = "fancybox-focus", r = null, d.on("mousedown mouseup focus blur", s, (function (t) {
            switch (t.type) {
              case"mousedown":
                r = i(this);
                break;
              case"mouseup":
                r = null;
                break;
              case"focusin":
                i(s).removeClass(a), i(this).is(r) || i(this).is("[disabled]") || i(this).addClass(a);
                break;
              case"focusout":
                i(s).removeClass(a)
            }
          }))
        }

        function b(t, e) {
          var n, o, s, a = [], r = 0;
          t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = m(t.data.options, e)), n = e.$target || i(t.currentTarget).trigger("blur"), (s = i.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n) || (a = e.selector ? i(e.selector) : (o = n.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]') : [n], (r = i(a).index(n)) < 0 && (r = 0), (s = i.fancybox.open(a, e, r)).$trigger = n))
        }
      }(window, document, n), function (t) {
        "use strict";
        var e = {
          youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
          },
          vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
          },
          instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
          },
          gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
              return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
          },
          gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
              return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
          }
        }, i = function (e, i, n) {
          if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, (function (t, i) {
            e = e.replace("$" + t, i || "")
          })), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
        };
        t(document).on("objectNeedsType.fb", (function (n, o, s) {
          var a, r, l, c, d, h, u, f = s.src || "", p = !1;
          a = t.extend(!0, {}, e, s.opts.media), t.each(a, (function (e, n) {
            if (l = f.match(n.matcher)) {
              if (p = n.type, u = e, h = {}, n.paramPlace && l[n.paramPlace]) {
                "?" == (d = l[n.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                for (var o = 0; o < d.length; ++o) {
                  var a = d[o].split("=", 2);
                  2 == a.length && (h[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                }
              }
              return c = t.extend(!0, {}, n.params, s.opts[e], h), f = "function" === t.type(n.url) ? n.url.call(this, l, c, s) : i(n.url, l, c), r = "function" === t.type(n.thumb) ? n.thumb.call(this, l, c, s) : i(n.thumb, l), "youtube" === e ? f = f.replace(/&t=((\d+)m)?(\d+)s/, (function (t, e, i, n) {
                return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
              })) : "vimeo" === e && (f = f.replace("&%23", "#")), !1
            }
          })), p ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = r), "iframe" === p && (s.opts = t.extend(!0, s.opts, {
            iframe: {
              preload: !1,
              attr: {scrolling: "no"}
            }
          })), t.extend(s, {
            type: p,
            src: f,
            origSrc: s.src,
            contentSource: u,
            contentType: "image" === p ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
          })) : f && (s.type = s.opts.defaultType)
        }));
        var n = {
          youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
          vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
          load: function (t) {
            var e, i = this;
            this[t].loaded ? setTimeout((function () {
              i.done(t)
            })) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
              i[t].loaded = !0, i.done(t)
            } : e.onload = function () {
              i[t].loaded = !0, i.done(t)
            }, document.body.appendChild(e))
          },
          done: function (e) {
            var i, n;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
              events: {
                onStateChange: function (t) {
                  0 == t.data && i.next()
                }
              }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", (function () {
              i.next()
            })))
          }
        };
        t(document).on({
          "afterShow.fb": function (t, e, i) {
            e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource)
          }
        })
      }(n), function (t, e, i) {
        "use strict";
        var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60)
          },
          o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e)
          }, s = function (e) {
            var i = [];
            for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({
              x: e[n].pageX,
              y: e[n].pageY
            }) : e[n].clientX && i.push({x: e[n].clientX, y: e[n].clientY});
            return i
          }, a = function (t, e, i) {
            return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
          }, r = function (t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++) if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
            return !1
          }, l = function (e) {
            for (var i, n, o, s, a, r = !1; i = e.get(0), n = void 0, o = void 0, s = void 0, a = void 0, n = t.getComputedStyle(i)["overflow-y"], o = t.getComputedStyle(i)["overflow-x"], s = ("scroll" === n || "auto" === n) && i.scrollHeight > i.clientHeight, a = ("scroll" === o || "auto" === o) && i.scrollWidth > i.clientWidth, !(r = s || a) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");) ;
            return r
          }, c = function (t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
          };
        c.prototype.destroy = function () {
          var t = this;
          t.$container.off(".fb.touch"), i(e).off(".fb.touch"), t.requestId && (o(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
        }, c.prototype.ontouchstart = function (n) {
          var o = this, c = i(n.target), d = o.instance, h = d.current, u = h.$slide, f = h.$content,
            p = "touchstart" == n.type;
          if (p && o.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && u.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(n.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!h || d.isAnimating || h.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
            o.realPoints = o.startPoints = s(n), o.startPoints.length && (h.touch && n.stopPropagation(), o.startEvent = n, o.canTap = !0, o.$target = c, o.$content = f, o.opts = h.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = d.canPan(), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u[0].clientWidth), o.canvasHeight = Math.round(u[0].clientHeight), o.contentLastPos = null, o.contentStartPos = i.fancybox.getTranslate(o.$content) || {
              top: 0,
              left: 0
            }, o.sliderStartPos = i.fancybox.getTranslate(u), o.stagePos = i.fancybox.getTranslate(d.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, i(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (c.is(o.$stage) || o.$stage.find(c).length) || (c.is(".fancybox-image") && n.preventDefault(), i.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (o.isScrollable = l(c) || l(c.parent()), i.fancybox.isMobile && o.isScrollable || n.preventDefault(), (1 === o.startPoints.length || h.hasError) && (o.canPan ? (i.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === h.type && (h.isLoaded || h.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, i.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = a(o.startPoints[0], o.startPoints[1]))))
          }
        }, c.prototype.onscroll = function (t) {
          this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
        }, c.prototype.ontouchmove = function (t) {
          var e = this;
          void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? e.isScrolling ? e.canTap = !1 : (e.newPoints = s(t), (e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))) : e.ontouchend(t)
        }, c.prototype.onSwipe = function (e) {
          var s, a = this, r = a.instance, l = a.isSwiping, c = a.sliderStartPos.left || 0;
          if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = {
            top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
            left: c
          }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = n((function () {
            a.sliderLastPos && (i.each(a.instance.slides, (function (t, e) {
              var n = e.pos - a.instance.currPos;
              i.fancybox.setTranslate(e.$slide, {
                top: a.sliderLastPos.top,
                left: a.sliderLastPos.left + n * a.canvasWidth + n * e.opts.gutter
              })
            })), a.$container.addClass("fancybox-is-sliding"))
          })); else if (Math.abs(a.distance) > 10) {
            if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void (a.isScrolling = !0);
            r.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(r.slides, (function (t, e) {
              var n, o;
              i.fancybox.stop(e.$slide), n = i.fancybox.getTranslate(e.$slide), o = i.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                transform: "",
                opacity: "",
                "transition-duration": ""
              }).removeClass("fancybox-animated").removeClass((function (t, e) {
                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
              })), e.pos === r.current.pos && (a.sliderStartPos.top = n.top - o.top, a.sliderStartPos.left = n.left - o.left), i.fancybox.setTranslate(e.$slide, {
                top: n.top - o.top,
                left: n.left - o.left
              })
            })), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
          }
        }, c.prototype.onPan = function () {
          var t = this;
          a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), t.requestId = n((function () {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
          })))
        }, c.prototype.limitMovement = function () {
          var t, e, i, n, o, s, a = this, r = a.canvasWidth, l = a.canvasHeight, c = a.distanceX, d = a.distanceY,
            h = a.contentStartPos, u = h.left, f = h.top, p = h.width, g = h.height;
          return o = p > r ? u + c : u, s = f + d, t = Math.max(0, .5 * r - .5 * p), e = Math.max(0, .5 * l - .5 * g), i = Math.min(r - p, .5 * r - .5 * p), n = Math.min(l - g, .5 * l - .5 * g), c > 0 && o > t && (o = t - 1 + Math.pow(-t + u + c, .8) || 0), c < 0 && o < i && (o = i + 1 - Math.pow(i - u - c, .8) || 0), d > 0 && s > e && (s = e - 1 + Math.pow(-e + f + d, .8) || 0), d < 0 && s < n && (s = n + 1 - Math.pow(n - f - d, .8) || 0), {
            top: s,
            left: o
          }
        }, c.prototype.limitPosition = function (t, e, i, n) {
          var o = this.canvasWidth, s = this.canvasHeight;
          return t = i > o ? (t = t > 0 ? 0 : t) < o - i ? o - i : t : Math.max(0, o / 2 - i / 2), {
            top: e = n > s ? (e = e > 0 ? 0 : e) < s - n ? s - n : e : Math.max(0, s / 2 - n / 2),
            left: t
          }
        }, c.prototype.onZoom = function () {
          var e = this, s = e.contentStartPos, r = s.width, l = s.height, c = s.left, d = s.top,
            h = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, u = Math.floor(r * h),
            f = Math.floor(l * h), p = (r - u) * e.percentageOfImageAtPinchPointX,
            g = (l - f) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(), b = m - e.centerPointStartX,
            y = {top: d + (g + (v - e.centerPointStartY)), left: c + (p + b), scaleX: h, scaleY: h};
          e.canTap = !1, e.newWidth = u, e.newHeight = f, e.contentLastPos = y, e.requestId && o(e.requestId), e.requestId = n((function () {
            i.fancybox.setTranslate(e.$content, e.contentLastPos)
          }))
        }, c.prototype.ontouchend = function (t) {
          var n = this, a = n.isSwiping, r = n.isPanning, l = n.isZooming, c = n.isScrolling;
          if (n.endPoints = s(t), n.dMs = Math.max((new Date).getTime() - n.startTime, 1), n.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", n.onscroll, !0), n.requestId && (o(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.isScrolling = !1, n.instance.isDragging = !1, n.canTap) return n.onTap(t);
          n.speed = 100, n.velocityX = n.distanceX / n.dMs * .5, n.velocityY = n.distanceY / n.dMs * .5, r ? n.endPanning() : l ? n.endZooming() : n.endSwiping(a, c)
        }, c.prototype.endSwiping = function (t, e) {
          var n = this, o = !1, s = n.instance.group.length, a = Math.abs(n.distanceX),
            r = "x" == t && s > 1 && (n.dMs > 130 && a > 10 || a > 50);
          n.sliderLastPos = null, "y" == t && !e && Math.abs(n.distanceY) > 50 ? (i.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
          }, 200), o = n.instance.close(!0, 250)) : r && n.distanceX > 0 ? o = n.instance.previous(300) : r && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != t && "y" != t || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
        }, c.prototype.endPanning = function () {
          var t, e, n, o = this;
          o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX, e = o.contentLastPos.top + 500 * o.velocityY), (n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, n.height = o.contentStartPos.height, i.fancybox.animate(o.$content, n, 366))
        }, c.prototype.endZooming = function () {
          var t, e, n, o, s = this, a = s.instance.current, r = s.newWidth, l = s.newHeight;
          s.contentLastPos && (t = s.contentLastPos.left, o = {
            top: e = s.contentLastPos.top,
            left: t,
            width: r,
            height: l,
            scaleX: 1,
            scaleY: 1
          }, i.fancybox.setTranslate(s.$content, o), r < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : r > a.width || l > a.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(t, e, r, l), i.fancybox.animate(s.$content, n, 150)))
        }, c.prototype.onTap = function (e) {
          var n, o = this, a = i(e.target), r = o.instance, l = r.current, c = e && s(e) || o.startPoints,
            d = c[0] ? c[0].x - i(t).scrollLeft() - o.stagePos.left : 0,
            h = c[0] ? c[0].y - i(t).scrollTop() - o.stagePos.top : 0, u = function (t) {
              var n = l.opts[t];
              if (i.isFunction(n) && (n = n.apply(r, [l, e])), n) switch (n) {
                case"close":
                  r.close(o.startEvent);
                  break;
                case"toggleControls":
                  r.toggleControls();
                  break;
                case"next":
                  r.next();
                  break;
                case"nextOrClose":
                  r.group.length > 1 ? r.next() : r.close(o.startEvent);
                  break;
                case"zoom":
                  "image" == l.type && (l.isLoaded || l.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, h) : r.group.length < 2 && r.close(o.startEvent))
              }
            };
          if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(d > a[0].clientWidth + a.offset().left))) {
            if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside"; else if (a.is(".fancybox-slide")) n = "Slide"; else {
              if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
              n = "Content"
            }
            if (o.tapped) {
              if (clearTimeout(o.tapped), o.tapped = null, Math.abs(d - o.tapX) > 50 || Math.abs(h - o.tapY) > 50) return this;
              u("dblclick" + n)
            } else o.tapX = d, o.tapY = h, l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? o.tapped = setTimeout((function () {
              o.tapped = null, r.isAnimating || u("click" + n)
            }), 500) : u("click" + n);
            return this
          }
        }, i(e).on("onActivate.fb", (function (t, e) {
          e && !e.Guestures && (e.Guestures = new c(e))
        })).on("beforeClose.fb", (function (t, e) {
          e && e.Guestures && e.Guestures.destroy()
        }))
      }(window, document, n), function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
          btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
          slideShow: {autoStart: !1, speed: 3e3, progress: !0}
        });
        var i = function (t) {
          this.instance = t, this.init()
        };
        e.extend(i.prototype, {
          timer: null, isActive: !1, $button: null, init: function () {
            var t = this, i = t.instance, n = i.group[i.currIndex].opts.slideShow;
            t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", (function () {
              t.toggle()
            })), i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
          }, set: function (t) {
            var i = this, n = i.instance, o = n.current;
            o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? i.isActive && "video" !== o.contentType && (i.$progress && e.fancybox.animate(i.$progress.show(), {scaleX: 1}, o.opts.slideShow.speed), i.timer = setTimeout((function () {
              n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }), o.opts.slideShow.speed)) : (i.stop(), n.idleSecondsCounter = 0, n.showControls())
          }, clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
          }, start: function () {
            var t = this, e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
          }, stop: function () {
            var t = this, e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
          }, toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
          }
        }), e(t).on({
          "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e))
          }, "beforeShow.fb": function (t, e, i, n) {
            var o = e && e.SlideShow;
            n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
          }, "afterShow.fb": function (t, e, i) {
            var n = e && e.SlideShow;
            n && n.isActive && n.set()
          }, "afterKeydown.fb": function (i, n, o, s, a) {
            var r = n && n.SlideShow;
            !r || !o.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (s.preventDefault(), r.toggle())
          }, "beforeClose.fb onDeactivate.fb": function (t, e) {
            var i = e && e.SlideShow;
            i && i.stop()
          }
        }), e(t).on("visibilitychange", (function () {
          var i = e.fancybox.getInstance(), n = i && i.SlideShow;
          n && n.isActive && (t.hidden ? n.clear() : n.set())
        }))
      }(document, n), function (t, e) {
        "use strict";
        var i = function () {
          for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = {}, n = 0; n < e.length; n++) {
            var o = e[n];
            if (o && o[1] in t) {
              for (var s = 0; s < o.length; s++) i[e[0][s]] = o[s];
              return i
            }
          }
          return !1
        }();
        if (i) {
          var n = {
            request: function (e) {
              (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
              t[i.exitFullscreen]()
            }, toggle: function (e) {
              e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            }, isFullscreen: function () {
              return Boolean(t[i.fullscreenElement])
            }, enabled: function () {
              return Boolean(t[i.fullscreenEnabled])
            }
          };
          e.extend(!0, e.fancybox.defaults, {
            btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
            fullScreen: {autoStart: !1}
          }), e(t).on(i.fullscreenchange, (function () {
            var t = n.isFullscreen(), i = e.fancybox.getInstance();
            i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1, i.update(!0, !0, 0), i.isComplete || i.complete()), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
          }))
        }
        e(t).on({
          "onInit.fb": function (t, e) {
            i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function (t) {
              t.stopPropagation(), t.preventDefault(), n.toggle()
            })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
          }, "afterKeydown.fb": function (t, e, i, n, o) {
            e && e.FullScreen && 70 === o && (n.preventDefault(), e.FullScreen.toggle())
          }, "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
          }
        })
      }(document, n), function (t, e) {
        "use strict";
        var i = "fancybox-thumbs", n = i + "-active";
        e.fancybox.defaults = e.extend(!0, {
          btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
          thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
        }, e.fancybox.defaults);
        var o = function (t) {
          this.init(t)
        };
        e.extend(o.prototype, {
          $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (t) {
            var e = this, i = t.group, n = 0;
            e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, s = i.length; o < s && (i[o].thumb && n++, !(n > 1)); o++) ;
            n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function () {
              e.toggle()
            })), e.isActive = !0) : e.$button.hide()
          }, create: function () {
            var t, n = this, o = n.instance, s = n.opts.parentEl, a = [];
            n.$grid || (n.$grid = e('<div class="' + i + " " + i + "-" + n.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)), n.$grid.on("click", "a", (function () {
              o.jumpTo(e(this).attr("data-index"))
            }))), n.$list || (n.$list = e('<div class="' + i + '__list">').appendTo(n.$grid)), e.each(o.group, (function (e, i) {
              (t = i.thumb) || "image" !== i.type || (t = i.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            })), n.$list[0].innerHTML = a.join(""), "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + o.group.length * n.$list.children().eq(0).outerWidth(!0))
          }, focus: function (t) {
            var e, i, o = this, s = o.$list, a = o.$grid;
            o.instance.current && (i = (e = s.children().removeClass(n).filter('[data-index="' + o.instance.current.index + '"]').addClass(n)).position(), "y" === o.opts.axis && (i.top < 0 || i.top > s.height() - e.outerHeight()) ? s.stop().animate({scrollTop: s.scrollTop() + i.top}, t) : "x" === o.opts.axis && (i.left < a.scrollLeft() || i.left > a.scrollLeft() + (a.width() - e.outerWidth())) && s.parent().stop().animate({scrollLeft: i.left}, t))
          }, update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
          }, hide: function () {
            this.isVisible = !1, this.update()
          }, show: function () {
            this.isVisible = !0, this.update()
          }, toggle: function () {
            this.isVisible = !this.isVisible, this.update()
          }
        }), e(t).on({
          "onInit.fb": function (t, e) {
            var i;
            e && !e.Thumbs && (i = new o(e)).isActive && !0 === i.opts.autoStart && i.show()
          }, "beforeShow.fb": function (t, e, i, n) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(n ? 0 : 250)
          }, "afterKeydown.fb": function (t, e, i, n, o) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === o && (n.preventDefault(), s.toggle())
          }, "beforeClose.fb": function (t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
          }
        })
      }(document, n), function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
          btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
          share: {
            url: function (t, e) {
              return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
          }
        }), e(t).on("click", "[data-fancybox-share]", (function () {
          var t, i, n, o, s = e.fancybox.getInstance(), a = s.current || null;
          a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [s, a])), i = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (n = t, o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
          }, String(n).replace(/[&<>"'`=\/]/g, (function (t) {
            return o[t]
          })))).replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : ""), e.fancybox.open({
            src: s.translate(s, i),
            type: "html",
            opts: {
              touch: !1, animationEffect: !1, afterLoad: function (t, e) {
                s.$refs.container.one("beforeClose.fb", (function () {
                  t.close(null, 0)
                })), e.$content.find(".fancybox-share__button").click((function () {
                  return window.open(this.href, "Share", "width=550, height=450"), !1
                }))
              }, mobile: {autoFocus: !1}
            }
          }))
        }))
      }(document, n), function (t, e, i) {
        "use strict";

        function n() {
          var e = t.location.hash.substr(1), i = e.split("-"),
            n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
          return {hash: e, index: n < 1 ? 1 : n, gallery: i.join("-")}
        }

        function o(t) {
          "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
        }

        function s(t) {
          var e, i;
          return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
        }

        i.escapeSelector || (i.escapeSelector = function (t) {
          return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
          }))
        }), i((function () {
          !1 !== i.fancybox.defaults.hash && (i(e).on({
            "onInit.fb": function (t, e) {
              var i, o;
              !1 !== e.group[e.currIndex].opts.hash && (i = n(), (o = s(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1))
            }, "beforeShow.fb": function (i, n, o, a) {
              var r;
              o && !1 !== o.opts.hash && (r = s(n)) && (n.currentHash = r + (n.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + n.currentHash && (a && !n.origHash && (n.origHash = t.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout((function () {
                "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash), a && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash, n.hashTimer = null
              }), 300)))
            }, "beforeClose.fb": function (i, n, o) {
              o && !1 !== o.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash), n.currentHash = null)
            }
          }), i(t).on("hashchange.fb", (function () {
            var t = n(), e = null;
            i.each(i(".fancybox-container").get().reverse(), (function (t, n) {
              var o = i(n).data("FancyBox");
              if (o && o.currentHash) return e = o, !1
            })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t)
          })), setTimeout((function () {
            i.fancybox.getInstance() || o(n())
          }), 50))
        }))
      }(window, document, n), function (t, e) {
        "use strict";
        var i = (new Date).getTime();
        e(t).on({
          "onInit.fb": function (t, e, n) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function (t) {
              var n = e.current, o = (new Date).getTime();
              e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(), t.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - i < 250 || (i = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            }))
          }
        })
      }(document, n)
    }, 9741: function (t, e, i) {
      var n, o;
      !function (s, a) {
        "use strict";
        void 0 === (o = "function" == typeof (n = a) ? n.call(e, i, e, t) : n) || (t.exports = o)
      }(window, (function () {
        "use strict";
        var t = function () {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
          }
        }();
        return function (e, i) {
          return e[t](i)
        }
      }))
    }, 7158: function (t, e, i) {
      var n, o;
      "undefined" != typeof window && window, void 0 === (o = "function" == typeof (n = function () {
        "use strict";

        function t() {
        }

        var e = t.prototype;
        return e.on = function (t, e) {
          if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
          }
        }, e.once = function (t, e) {
          if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
          }
        }, e.off = function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
          }
        }, e.emitEvent = function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
              var s = i[o];
              n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
            }
            return this
          }
        }, e.allOff = function () {
          delete this._events, delete this._onceEvents
        }, t
      }) ? n.call(e, i, e, t) : n) || (t.exports = o)
    }, 9047: function (t, e, i) {
      var n, o;
      !function (s, a) {
        n = [i(9741)], void 0 === (o = function (t) {
          return function (t, e) {
            "use strict";
            var i = {
              extend: function (t, e) {
                for (var i in e) t[i] = e[i];
                return t
              }, modulo: function (t, e) {
                return (t % e + e) % e
              }
            }, n = Array.prototype.slice;
            i.makeArray = function (t) {
              return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
            }, i.removeFrom = function (t, e) {
              var i = t.indexOf(e);
              -1 != i && t.splice(i, 1)
            }, i.getParent = function (t, i) {
              for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
            }, i.getQueryElement = function (t) {
              return "string" == typeof t ? document.querySelector(t) : t
            }, i.handleEvent = function (t) {
              var e = "on" + t.type;
              this[e] && this[e](t)
            }, i.filterFindElements = function (t, n) {
              t = i.makeArray(t);
              var o = [];
              return t.forEach((function (t) {
                if (t instanceof HTMLElement) if (n) {
                  e(t, n) && o.push(t);
                  for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
                } else o.push(t)
              })), o
            }, i.debounceMethod = function (t, e, i) {
              i = i || 100;
              var n = t.prototype[e], o = e + "Timeout";
              t.prototype[e] = function () {
                var t = this[o];
                clearTimeout(t);
                var e = arguments, s = this;
                this[o] = setTimeout((function () {
                  n.apply(s, e), delete s[o]
                }), i)
              }
            }, i.docReady = function (t) {
              var e = document.readyState;
              "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
            }, i.toDashed = function (t) {
              return t.replace(/(.)([A-Z])/g, (function (t, e, i) {
                return e + "-" + i
              })).toLowerCase()
            };
            var o = t.console;
            return i.htmlInit = function (e, n) {
              i.docReady((function () {
                var s = i.toDashed(n), a = "data-" + s, r = document.querySelectorAll("[" + a + "]"),
                  l = document.querySelectorAll(".js-" + s), c = i.makeArray(r).concat(i.makeArray(l)),
                  d = a + "-options", h = t.jQuery;
                c.forEach((function (t) {
                  var i, s = t.getAttribute(a) || t.getAttribute(d);
                  try {
                    i = s && JSON.parse(s)
                  } catch (e) {
                    return void (o && o.error("Error parsing " + a + " on " + t.className + ": " + e))
                  }
                  var r = new e(t, i);
                  h && h.data(t, n, r)
                }))
              }))
            }, i
          }(s, t)
        }.apply(e, n)) || (t.exports = o)
      }(window)
    }, 3597: function (t, e, i) {
      var n, o;
      window, n = [i(7217), i(9047)], void 0 === (o = function (t, e) {
        return function (t, e, i) {
          "use strict";

          function n(t) {
            var e = document.createDocumentFragment();
            return t.forEach((function (t) {
              e.appendChild(t.element)
            })), e
          }

          var o = e.prototype;
          return o.insert = function (t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
              var o = this.cells.length;
              e = void 0 === e ? o : e;
              var s = n(i), a = e == o;
              if (a) this.slider.appendChild(s); else {
                var r = this.cells[e].element;
                this.slider.insertBefore(s, r)
              }
              if (0 === e) this.cells = i.concat(this.cells); else if (a) this.cells = this.cells.concat(i); else {
                var l = this.cells.splice(e, o - e);
                this.cells = this.cells.concat(i).concat(l)
              }
              this._sizeCells(i), this.cellChange(e, !0)
            }
          }, o.append = function (t) {
            this.insert(t, this.cells.length)
          }, o.prepend = function (t) {
            this.insert(t, 0)
          }, o.remove = function (t) {
            var e = this.getCells(t);
            if (e && e.length) {
              var n = this.cells.length - 1;
              e.forEach((function (t) {
                t.remove();
                var e = this.cells.indexOf(t);
                n = Math.min(e, n), i.removeFrom(this.cells, t)
              }), this), this.cellChange(n, !0)
            }
          }, o.cellSizeChange = function (t) {
            var e = this.getCell(t);
            if (e) {
              e.getSize();
              var i = this.cells.indexOf(e);
              this.cellChange(i)
            }
          }, o.cellChange = function (t, e) {
            var i = this.selectedElement;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
            var n = this.getCell(i);
            n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
          }, e
        }(0, t, e)
      }.apply(e, n)) || (t.exports = o)
    }, 7880: function (t, e, i) {
      var n, o;
      window, n = [i(9047)], void 0 === (o = function (t) {
        return function (t, e) {
          "use strict";
          var i = {
            startAnimation: function () {
              this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
            }, animate: function () {
              this.applyDragForce(), this.applySelectedAttraction();
              var t = this.x;
              if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                requestAnimationFrame((function () {
                  e.animate()
                }))
              }
            }, positionSlider: function () {
              var t = this.x;
              this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
            }, setTranslateX: function (t, e) {
              t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
              var i = this.getPositionValue(t);
              this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
            }, dispatchScrollEvent: function () {
              var t = this.slides[0];
              if (t) {
                var e = -this.x - t.target, i = e / this.slidesWidth;
                this.dispatchEvent("scroll", null, [i, e])
              }
            }, positionSliderAtSelected: function () {
              this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
            }, getPositionValue: function (t) {
              return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
            }, settle: function (t) {
              !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
            }, shiftWrapCells: function (t) {
              var e = this.cursorPosition + t;
              this._shiftCells(this.beforeShiftCells, e, -1);
              var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
              this._shiftCells(this.afterShiftCells, i, 1)
            }, _shiftCells: function (t, e, i) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n], s = e > 0 ? i : 0;
                o.wrapShift(s), e -= o.size.outerWidth
              }
            }, _unshiftCells: function (t) {
              if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
            }, integratePhysics: function () {
              this.x += this.velocity, this.velocity *= this.getFrictionFactor()
            }, applyForce: function (t) {
              this.velocity += t
            }, getFrictionFactor: function () {
              return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
            }, getRestingPosition: function () {
              return this.x + this.velocity / (1 - this.getFrictionFactor())
            }, applyDragForce: function () {
              if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t)
              }
            }, applySelectedAttraction: function () {
              if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t)
              }
            }
          };
          return i
        }(0, t)
      }.apply(e, n)) || (t.exports = o)
    }, 7229: function (t, e, i) {
      var n, o;
      window, n = [i(6131)], void 0 === (o = function (t) {
        return function (t, e) {
          "use strict";

          function i(t, e) {
            this.element = t, this.parent = e, this.create()
          }

          var n = i.prototype;
          return n.create = function () {
            this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
          }, n.destroy = function () {
            this.unselect(), this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = "", this.element.removeAttribute("aria-hidden")
          }, n.getSize = function () {
            this.size = e(this.element)
          }, n.setPosition = function (t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
          }, n.updateTarget = n.setDefaultTarget = function () {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
          }, n.renderPosition = function (t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
          }, n.select = function () {
            this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
          }, n.unselect = function () {
            this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
          }, n.wrapShift = function (t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
          }, n.remove = function () {
            this.element.parentNode.removeChild(this.element)
          }, i
        }(0, t)
      }.apply(e, n)) || (t.exports = o)
    }, 9690: function (t, e, i) {
      var n, o;
      !function (s, a) {
        n = [i(7217), i(4842), i(9047)], void 0 === (o = function (t, e, i) {
          return function (t, e, i, n) {
            "use strict";
            n.extend(e.defaults, {draggable: ">1", dragThreshold: 3}), e.createMethods.push("_createDrag");
            var o = e.prototype;
            n.extend(o, i.prototype), o._touchActionValue = "pan-y";
            var s = "createTouch" in document, a = !1;
            o._createDrag = function () {
              this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !a && (t.addEventListener("touchmove", (function () {
              })), a = !0)
            }, o.onActivateDrag = function () {
              this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
            }, o.onDeactivateDrag = function () {
              this.unbindHandles(), this.element.classList.remove("is-draggable")
            }, o.updateDraggable = function () {
              ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
            }, o.bindDrag = function () {
              this.options.draggable = !0, this.updateDraggable()
            }, o.unbindDrag = function () {
              this.options.draggable = !1, this.updateDraggable()
            }, o._uiChangeDrag = function () {
              delete this.isFreeScrolling
            }, o.pointerDown = function (e, i) {
              this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
            }, o._pointerDownDefault = function (t, e) {
              this.pointerDownPointer = {
                pageX: e.pageX,
                pageY: e.pageY
              }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
            };
            var r = {INPUT: !0, TEXTAREA: !0, SELECT: !0};

            function l() {
              return {x: t.pageXOffset, y: t.pageYOffset}
            }

            return o.pointerDownFocus = function (t) {
              r[t.target.nodeName] || this.focus()
            }, o._pointerDownPreventDefault = function (t) {
              var e = "touchstart" == t.type, i = "touch" == t.pointerType, n = r[t.target.nodeName];
              e || i || n || t.preventDefault()
            }, o.hasDragStarted = function (t) {
              return Math.abs(t.x) > this.options.dragThreshold
            }, o.pointerUp = function (t, e) {
              delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
            }, o.pointerDone = function () {
              t.removeEventListener("scroll", this), delete this.pointerDownScroll
            }, o.dragStart = function (e, i) {
              this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
            }, o.pointerMove = function (t, e) {
              var i = this._dragPointerMove(t, e);
              this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
            }, o.dragMove = function (t, e, i) {
              if (this.isDraggable) {
                t.preventDefault(), this.previousDragX = this.dragX;
                var n = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (i.x %= this.slideableWidth);
                var o = this.dragStartPosition + i.x * n;
                if (!this.options.wrapAround && this.slides.length) {
                  var s = Math.max(-this.slides[0].target, this.dragStartPosition);
                  o = o > s ? .5 * (o + s) : o;
                  var a = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                  o = o < a ? .5 * (o + a) : o
                }
                this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
              }
            }, o.dragEnd = function (t, e) {
              if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var i = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                  var n = this.getRestingPosition();
                  this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
              }
            }, o.dragEndRestingSelect = function () {
              var t = this.getRestingPosition(), e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1);
              return i.distance < n.distance ? i.index : n.index
            }, o._getClosestResting = function (t, e, i) {
              for (var n = this.selectedIndex, o = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function (t, e) {
                return t <= e
              } : function (t, e) {
                return t < e
              }; s(e, o) && (n += i, o = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
              return {distance: o, index: n - i}
            }, o.getSlideDistance = function (t, e) {
              var i = this.slides.length, o = this.options.wrapAround && i > 1, s = o ? n.modulo(e, i) : e,
                a = this.slides[s];
              if (!a) return null;
              var r = o ? this.slideableWidth * Math.floor(e / i) : 0;
              return t - (a.target + r)
            }, o.dragEndBoostSelect = function () {
              if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
              var t = this.getSlideDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
              return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
            }, o.staticClick = function (t, e) {
              var i = this.getParentCell(t.target), n = i && i.element, o = i && this.cells.indexOf(i);
              this.dispatchEvent("staticClick", t, [e, n, o])
            }, o.onscroll = function () {
              var t = l(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y;
              (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
            }, e
          }(s, t, e, i)
        }.apply(e, n)) || (t.exports = o)
      }(window)
    }, 7217: function (t, e, i) {
      var n, o;
      !function (s, a) {
        n = [i(7158), i(6131), i(9047), i(7229), i(9714), i(7880)], void 0 === (o = function (t, e, i, n, o, a) {
          return function (t, e, i, n, o, s, a) {
            "use strict";
            var r = t.jQuery, l = t.getComputedStyle, c = t.console;

            function d(t, e) {
              for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
            }

            var h = 0, u = {};

            function f(t, e) {
              var i = n.getQueryElement(t);
              if (i) {
                if (this.element = i, this.element.flickityGUID) {
                  var o = u[this.element.flickityGUID];
                  return o && o.option(e), o
                }
                r && (this.$element = r(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
              } else c && c.error("Bad element for Flickity: " + (i || t))
            }

            f.defaults = {
              accessibility: !0,
              cellAlign: "center",
              freeScrollFriction: .075,
              friction: .28,
              namespaceJQueryEvents: !0,
              percentPosition: !0,
              resize: !0,
              selectedAttraction: .025,
              setGallerySize: !0
            }, f.createMethods = [];
            var p = f.prototype;
            n.extend(p, e.prototype), p._create = function () {
              var e = this.guid = ++h;
              for (var i in this.element.flickityGUID = e, u[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                var n = this.options.on[i];
                this.on(i, n)
              }
              f.createMethods.forEach((function (t) {
                this[t]()
              }), this), this.options.watchCSS ? this.watchCSS() : this.activate()
            }, p.option = function (t) {
              n.extend(this.options, t)
            }, p.activate = function () {
              this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), d(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
            }, p._createSlider = function () {
              var t = document.createElement("div");
              t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
            }, p._filterFindCellElements = function (t) {
              return n.filterFindElements(t, this.options.cellSelector)
            }, p.reloadCells = function () {
              this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
            }, p._makeCells = function (t) {
              return this._filterFindCellElements(t).map((function (t) {
                return new o(t, this)
              }), this)
            }, p.getLastCell = function () {
              return this.cells[this.cells.length - 1]
            }, p.getLastSlide = function () {
              return this.slides[this.slides.length - 1]
            }, p.positionCells = function () {
              this._sizeCells(this.cells), this._positionCells(0)
            }, p._positionCells = function (t) {
              t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
              var e = 0;
              if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
              }
              for (var n = this.cells.length, o = t; o < n; o++) {
                var s = this.cells[o];
                s.setPosition(e), e += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
              }
              this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
            }, p._sizeCells = function (t) {
              t.forEach((function (t) {
                t.getSize()
              }))
            }, p.updateSlides = function () {
              if (this.slides = [], this.cells.length) {
                var t = new s(this);
                this.slides.push(t);
                var e = "left" == this.originSide ? "marginRight" : "marginLeft", i = this._getCanCellFit();
                this.cells.forEach((function (n, o) {
                  if (t.cells.length) {
                    var a = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                    i.call(this, o, a) || (t.updateTarget(), t = new s(this), this.slides.push(t)), t.addCell(n)
                  } else t.addCell(n)
                }), this), t.updateTarget(), this.updateSelectedSlide()
              }
            }, p._getCanCellFit = function () {
              var t = this.options.groupCells;
              if (!t) return function () {
                return !1
              };
              if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function (t) {
                  return t % e != 0
                }
              }
              var i = "string" == typeof t && t.match(/^(\d+)%$/), n = i ? parseInt(i[1], 10) / 100 : 1;
              return function (t, e) {
                return e <= (this.size.innerWidth + 1) * n
              }
            }, p._init = p.reposition = function () {
              this.positionCells(), this.positionSliderAtSelected()
            }, p.getSize = function () {
              this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
            };
            var g = {center: {left: .5, right: .5}, left: {left: 0, right: 1}, right: {right: 0, left: 1}};
            p.setCellAlign = function () {
              var t = g[this.options.cellAlign];
              this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
            }, p.setGallerySize = function () {
              if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
              }
            }, p._getWrapShiftCells = function () {
              if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition, e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
              }
            }, p._getGapCells = function (t, e, i) {
              for (var n = []; t > 0;) {
                var o = this.cells[e];
                if (!o) break;
                n.push(o), e += i, t -= o.size.outerWidth
              }
              return n
            }, p._containSlides = function () {
              if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft, e = t ? "marginRight" : "marginLeft",
                  i = t ? "marginLeft" : "marginRight", n = this.slideableWidth - this.getLastCell().size[i],
                  o = n < this.size.innerWidth, s = this.cursorPosition + this.cells[0].size[e],
                  a = n - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach((function (t) {
                  o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, s), t.target = Math.min(t.target, a))
                }), this)
              }
            }, p.dispatchEvent = function (t, e, i) {
              var n = e ? [e].concat(i) : i;
              if (this.emitEvent(t, n), r && this.$element) {
                var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                if (e) {
                  var s = new r.Event(e);
                  s.type = t, o = s
                }
                this.$element.trigger(o, i)
              }
            }, p.select = function (t, e, i) {
              if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                var o = this.selectedIndex;
                this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != o && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
              }
            }, p._wrapSelect = function (t) {
              var e = this.slides.length;
              if (!(this.options.wrapAround && e > 1)) return t;
              var i = n.modulo(t, e), o = Math.abs(i - this.selectedIndex), s = Math.abs(i + e - this.selectedIndex),
                a = Math.abs(i - e - this.selectedIndex);
              !this.isDragSelect && s < o ? t += e : !this.isDragSelect && a < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
            }, p.previous = function (t, e) {
              this.select(this.selectedIndex - 1, t, e)
            }, p.next = function (t, e) {
              this.select(this.selectedIndex + 1, t, e)
            }, p.updateSelectedSlide = function () {
              var t = this.slides[this.selectedIndex];
              t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
            }, p.unselectSelectedSlide = function () {
              this.selectedSlide && this.selectedSlide.unselect()
            }, p.selectInitialIndex = function () {
              var t = this.options.initialIndex;
              if (this.isInitActivated) this.select(this.selectedIndex, !1, !0); else {
                if (t && "string" == typeof t) if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
                var e = 0;
                t && this.slides[t] && (e = t), this.select(e, !1, !0)
              }
            }, p.selectCell = function (t, e, i) {
              var n = this.queryCell(t);
              if (n) {
                var o = this.getCellSlideIndex(n);
                this.select(o, e, i)
              }
            }, p.getCellSlideIndex = function (t) {
              for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t)) return e
              }
            }, p.getCell = function (t) {
              for (var e = 0; e < this.cells.length; e++) {
                var i = this.cells[e];
                if (i.element == t) return i
              }
            }, p.getCells = function (t) {
              t = n.makeArray(t);
              var e = [];
              return t.forEach((function (t) {
                var i = this.getCell(t);
                i && e.push(i)
              }), this), e
            }, p.getCellElements = function () {
              return this.cells.map((function (t) {
                return t.element
              }))
            }, p.getParentCell = function (t) {
              var e = this.getCell(t);
              return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
            }, p.getAdjacentCellElements = function (t, e) {
              if (!t) return this.selectedSlide.getCellElements();
              e = void 0 === e ? this.selectedIndex : e;
              var i = this.slides.length;
              if (1 + 2 * t >= i) return this.getCellElements();
              for (var o = [], s = e - t; s <= e + t; s++) {
                var a = this.options.wrapAround ? n.modulo(s, i) : s, r = this.slides[a];
                r && (o = o.concat(r.getCellElements()))
              }
              return o
            }, p.queryCell = function (t) {
              if ("number" == typeof t) return this.cells[t];
              if ("string" == typeof t) {
                if (t.match(/^[#.]?[\d/]/)) return;
                t = this.element.querySelector(t)
              }
              return this.getCell(t)
            }, p.uiChange = function () {
              this.emitEvent("uiChange")
            }, p.childUIPointerDown = function (t) {
              "touchstart" != t.type && t.preventDefault(), this.focus()
            }, p.onresize = function () {
              this.watchCSS(), this.resize()
            }, n.debounceMethod(f, "onresize", 150), p.resize = function () {
              if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
              }
            }, p.watchCSS = function () {
              this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
            }, p.onkeydown = function (t) {
              var e = document.activeElement && document.activeElement != this.element;
              if (this.options.accessibility && !e) {
                var i = f.keyboardHandlers[t.keyCode];
                i && i.call(this)
              }
            }, f.keyboardHandlers = {
              37: function () {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
              }, 39: function () {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[t]()
              }
            }, p.focus = function () {
              var e = t.pageYOffset;
              this.element.focus({preventScroll: !0}), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
            }, p.deactivate = function () {
              this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function (t) {
                t.destroy()
              })), this.element.removeChild(this.viewport), d(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
            }, p.destroy = function () {
              this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), r && this.$element && r.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
            }, n.extend(p, a), f.data = function (t) {
              var e = (t = n.getQueryElement(t)) && t.flickityGUID;
              return e && u[e]
            }, n.htmlInit(f, "flickity"), r && r.bridget && r.bridget("flickity", f);
            return f.setJQuery = function (t) {
              r = t
            }, f.Cell = o, f.Slide = s, f
          }(s, t, e, i, n, o, a)
        }.apply(e, n)) || (t.exports = o)
      }(window)
    }, 2442: function (t, e, i) {
      var n, o, s;
      window, o = [i(7217), i(9690), i(2410), i(7573), i(8516), i(3597), i(7227)], void 0 === (s = "function" == typeof (n = function (t) {
        return t
      }) ? n.apply(e, o) : n) || (t.exports = s)
    }, 7227: function (t, e, i) {
      var n, o;
      window, n = [i(7217), i(9047)], void 0 === (o = function (t, e) {
        return function (t, e, i) {
          "use strict";
          e.createMethods.push("_createLazyload");
          var n = e.prototype;

          function o(t) {
            if ("IMG" == t.nodeName) {
              var e = t.getAttribute("data-flickity-lazyload"), n = t.getAttribute("data-flickity-lazyload-src"),
                o = t.getAttribute("data-flickity-lazyload-srcset");
              if (e || n || o) return [t]
            }
            var s = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
              a = t.querySelectorAll(s);
            return i.makeArray(a)
          }

          function s(t, e) {
            this.img = t, this.flickity = e, this.load()
          }

          return n._createLazyload = function () {
            this.on("select", this.lazyLoad)
          }, n.lazyLoad = function () {
            var t = this.options.lazyLoad;
            if (t) {
              var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [];
              i.forEach((function (t) {
                var e = o(t);
                n = n.concat(e)
              })), n.forEach((function (t) {
                new s(t, this)
              }), this)
            }
          }, s.prototype.handleEvent = i.handleEvent, s.prototype.load = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
              e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
          }, s.prototype.onload = function (t) {
            this.complete(t, "flickity-lazyloaded")
          }, s.prototype.onerror = function (t) {
            this.complete(t, "flickity-lazyerror")
          }, s.prototype.complete = function (t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var i = this.flickity.getParentCell(this.img), n = i && i.element;
            this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
          }, e.LazyLoader = s, e
        }(0, t, e)
      }.apply(e, n)) || (t.exports = o)
    }, 7573: function (t, e, i) {
      var n, o;
      window, n = [i(7217), i(4704), i(9047)], void 0 === (o = function (t, e, i) {
        return function (t, e, i, n) {
          "use strict";

          function o(t) {
            this.parent = t, this._create()
          }

          o.prototype = Object.create(i.prototype), o.prototype._create = function () {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
          }, o.prototype.activate = function () {
            this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
          }, o.prototype.deactivate = function () {
            this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
          }, o.prototype.setDots = function () {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
          }, o.prototype.addDots = function (t) {
            for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, s = n; s < o; s++) {
              var a = document.createElement("li");
              a.className = "dot", a.setAttribute("aria-label", "Page dot " + (s + 1)), e.appendChild(a), i.push(a)
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
          }, o.prototype.removeDots = function (t) {
            this.dots.splice(this.dots.length - t, t).forEach((function (t) {
              this.holder.removeChild(t)
            }), this)
          }, o.prototype.updateSelected = function () {
            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
          }, o.prototype.onTap = o.prototype.onClick = function (t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
              this.parent.uiChange();
              var i = this.dots.indexOf(e);
              this.parent.select(i)
            }
          }, o.prototype.destroy = function () {
            this.deactivate(), this.allOff()
          }, e.PageDots = o, n.extend(e.defaults, {pageDots: !0}), e.createMethods.push("_createPageDots");
          var s = e.prototype;
          return s._createPageDots = function () {
            this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
          }, s.activatePageDots = function () {
            this.pageDots.activate()
          }, s.updateSelectedPageDots = function () {
            this.pageDots.updateSelected()
          }, s.updatePageDots = function () {
            this.pageDots.setDots()
          }, s.deactivatePageDots = function () {
            this.pageDots.deactivate()
          }, e.PageDots = o, e
        }(0, t, e, i)
      }.apply(e, n)) || (t.exports = o)
    }, 8516: function (t, e, i) {
      var n, o;
      window, n = [i(7158), i(9047), i(7217)], void 0 === (o = function (t, e, i) {
        return function (t, e, i) {
          "use strict";

          function n(t) {
            this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
          }

          n.prototype = Object.create(t.prototype), n.prototype.play = function () {
            "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
          }, n.prototype.tick = function () {
            if ("playing" == this.state) {
              var t = this.parent.options.autoPlay;
              t = "number" == typeof t ? t : 3e3;
              var e = this;
              this.clear(), this.timeout = setTimeout((function () {
                e.parent.next(!0), e.tick()
              }), t)
            }
          }, n.prototype.stop = function () {
            this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
          }, n.prototype.clear = function () {
            clearTimeout(this.timeout)
          }, n.prototype.pause = function () {
            "playing" == this.state && (this.state = "paused", this.clear())
          }, n.prototype.unpause = function () {
            "paused" == this.state && this.play()
          }, n.prototype.visibilityChange = function () {
            this[document.hidden ? "pause" : "unpause"]()
          }, n.prototype.visibilityPlay = function () {
            this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
          }, e.extend(i.defaults, {pauseAutoPlayOnHover: !0}), i.createMethods.push("_createPlayer");
          var o = i.prototype;
          return o._createPlayer = function () {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
          }, o.activatePlayer = function () {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
          }, o.playPlayer = function () {
            this.player.play()
          }, o.stopPlayer = function () {
            this.player.stop()
          }, o.pausePlayer = function () {
            this.player.pause()
          }, o.unpausePlayer = function () {
            this.player.unpause()
          }, o.deactivatePlayer = function () {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
          }, o.onmouseenter = function () {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
          }, o.onmouseleave = function () {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
          }, i.Player = n, i
        }(t, e, i)
      }.apply(e, n)) || (t.exports = o)
    }, 2410: function (t, e, i) {
      var n, o;
      window, n = [i(7217), i(4704), i(9047)], void 0 === (o = function (t, e, i) {
        return function (t, e, i, n) {
          "use strict";
          var o = "http://www.w3.org/2000/svg";

          function s(t, e) {
            this.direction = t, this.parent = e, this._create()
          }

          function a(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
          }

          s.prototype = Object.create(i.prototype), s.prototype._create = function () {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var i = this.createSVG();
            e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
          }, s.prototype.activate = function () {
            this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
          }, s.prototype.deactivate = function () {
            this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
          }, s.prototype.createSVG = function () {
            var t = document.createElementNS(o, "svg");
            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(o, "path"), i = a(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
          }, s.prototype.handleEvent = n.handleEvent, s.prototype.onclick = function () {
            if (this.isEnabled) {
              this.parent.uiChange();
              var t = this.isPrevious ? "previous" : "next";
              this.parent[t]()
            }
          }, s.prototype.enable = function () {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
          }, s.prototype.disable = function () {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
          }, s.prototype.update = function () {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1) this.enable(); else {
              var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e;
              this[this.parent.selectedIndex == i ? "disable" : "enable"]()
            }
          }, s.prototype.destroy = function () {
            this.deactivate(), this.allOff()
          }, n.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30}
          }), e.createMethods.push("_createPrevNextButtons");
          var r = e.prototype;
          return r._createPrevNextButtons = function () {
            this.options.prevNextButtons && (this.prevButton = new s(-1, this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons))
          }, r.activatePrevNextButtons = function () {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
          }, r.deactivatePrevNextButtons = function () {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
          }, e.PrevNextButton = s, e
        }(0, t, e, i)
      }.apply(e, n)) || (t.exports = o)
    }, 9714: function (t, e, i) {
      var n, o;
      window, void 0 === (o = "function" == typeof (n = function () {
        "use strict";

        function t(t) {
          this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }

        var e = t.prototype;
        return e.addCell = function (t) {
          if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
          }
        }, e.updateTarget = function () {
          var t = this.isOriginLeft ? "marginRight" : "marginLeft", e = this.getLastCell(), i = e ? e.size[t] : 0,
            n = this.outerWidth - (this.firstMargin + i);
          this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, e.getLastCell = function () {
          return this.cells[this.cells.length - 1]
        }, e.select = function () {
          this.cells.forEach((function (t) {
            t.select()
          }))
        }, e.unselect = function () {
          this.cells.forEach((function (t) {
            t.unselect()
          }))
        }, e.getCellElements = function () {
          return this.cells.map((function (t) {
            return t.element
          }))
        }, t
      }) ? n.call(e, i, e, t) : n) || (t.exports = o)
    }, 6131: function (t, e, i) {
      var n, o;
      window, void 0 === (o = "function" == typeof (n = function () {
        "use strict";

        function t(t) {
          var e = parseFloat(t);
          return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e() {
        }

        var i = "undefined" == typeof console ? e : function (t) {
          },
          n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
          o = n.length;

        function s() {
          for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          }, e = 0; e < o; e++) t[n[e]] = 0;
          return t
        }

        function a(t) {
          var e = getComputedStyle(t);
          return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        var r, l = !1;

        function c() {
          if (!l) {
            l = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = a(e);
            r = 200 == Math.round(t(n.width)), d.isBoxSizeOuter = r, i.removeChild(e)
          }
        }

        function d(e) {
          if (c(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var i = a(e);
            if ("none" == i.display) return s();
            var l = {};
            l.width = e.offsetWidth, l.height = e.offsetHeight;
            for (var d = l.isBorderBox = "border-box" == i.boxSizing, h = 0; h < o; h++) {
              var u = n[h], f = i[u], p = parseFloat(f);
              l[u] = isNaN(p) ? 0 : p
            }
            var g = l.paddingLeft + l.paddingRight, m = l.paddingTop + l.paddingBottom,
              v = l.marginLeft + l.marginRight, b = l.marginTop + l.marginBottom,
              y = l.borderLeftWidth + l.borderRightWidth, x = l.borderTopWidth + l.borderBottomWidth, w = d && r,
              S = t(i.width);
            !1 !== S && (l.width = S + (w ? 0 : g + y));
            var C = t(i.height);
            return !1 !== C && (l.height = C + (w ? 0 : m + x)), l.innerWidth = l.width - (g + y), l.innerHeight = l.height - (m + x), l.outerWidth = l.width + v, l.outerHeight = l.height + b, l
          }
        }

        return d
      }) ? n.call(e, i, e, t) : n) || (t.exports = o)
    }, 8831: function (t, e, i) {
      var n, o;
      !function (s, a) {
        n = [i(3609)], void 0 === (o = function (t) {
          return function (t, e) {
            "use strict";
            var i = Array.prototype.slice, n = t.console, o = void 0 === n ? function () {
            } : function (t) {
              n.error(t)
            };

            function s(n, s, r) {
              function l(t, e, i) {
                var s, a = "$()." + n + '("' + e + '")';
                return t.each((function (t, l) {
                  var c = r.data(l, n);
                  if (c) {
                    var d = c[e];
                    if (d && "_" != e.charAt(0)) {
                      var h = d.apply(c, i);
                      s = void 0 === s ? h : s
                    } else o(a + " is not a valid method")
                  } else o(n + " not initialized. Cannot call methods, i.e. " + a)
                })), void 0 !== s ? s : t
              }

              function c(t, e) {
                t.each((function (t, i) {
                  var o = r.data(i, n);
                  o ? (o.option(e), o._init()) : (o = new s(i, e), r.data(i, n, o))
                }))
              }

              (r = r || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
                r.isPlainObject(t) && (this.options = r.extend(!0, this.options, t))
              }), r.fn[n] = function (t) {
                return "string" == typeof t ? l(this, t, i.call(arguments, 1)) : (c(this, t), this)
              }, a(r))
            }

            function a(t) {
              !t || t && t.bridget || (t.bridget = s)
            }

            return a(e || t.jQuery), s
          }(s, t)
        }.apply(e, n)) || (t.exports = o)
      }(window)
    }, 450: function (t, e, i) {
      var n, o, s;
      o = [i(3609)], void 0 === (s = "function" == typeof (n = function (t) {
        var e, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          s = Array.prototype.slice;
        if (t.event.fixHooks) for (var a = n.length; a;) t.event.fixHooks[n[--a]] = t.event.mouseHooks;
        var r = t.event.special.mousewheel = {
          version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var e = o.length; e;) this.addEventListener(o[--e], l, !1); else this.onmousewheel = l;
            t.data(this, "mousewheel-line-height", r.getLineHeight(this)), t.data(this, "mousewheel-page-height", r.getPageHeight(this))
          }, teardown: function () {
            if (this.removeEventListener) for (var e = o.length; e;) this.removeEventListener(o[--e], l, !1); else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
          }, getLineHeight: function (e) {
            var i = t(e), n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
          }, getPageHeight: function (e) {
            return t(e).height()
          }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
        };

        function l(n) {
          var o = n || window.event, a = s.call(arguments, 1), l = 0, h = 0, u = 0, f = 0, p = 0, g = 0;
          if ((n = t.event.fix(o)).type = "mousewheel", "detail" in o && (u = -1 * o.detail), "wheelDelta" in o && (u = o.wheelDelta), "wheelDeltaY" in o && (u = o.wheelDeltaY), "wheelDeltaX" in o && (h = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (h = -1 * u, u = 0), l = 0 === u ? h : u, "deltaY" in o && (l = u = -1 * o.deltaY), "deltaX" in o && (h = o.deltaX, 0 === u && (l = -1 * h)), 0 !== u || 0 !== h) {
            if (1 === o.deltaMode) {
              var m = t.data(this, "mousewheel-line-height");
              l *= m, u *= m, h *= m
            } else if (2 === o.deltaMode) {
              var v = t.data(this, "mousewheel-page-height");
              l *= v, u *= v, h *= v
            }
            if (f = Math.max(Math.abs(u), Math.abs(h)), (!i || f < i) && (i = f, d(o, f) && (i /= 40)), d(o, f) && (l /= 40, h /= 40, u /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / i), h = Math[h >= 1 ? "floor" : "ceil"](h / i), u = Math[u >= 1 ? "floor" : "ceil"](u / i), r.settings.normalizeOffset && this.getBoundingClientRect) {
              var b = this.getBoundingClientRect();
              p = n.clientX - b.left, g = n.clientY - b.top
            }
            return n.deltaX = h, n.deltaY = u, n.deltaFactor = i, n.offsetX = p, n.offsetY = g, n.deltaMode = 0, a.unshift(n, l, h, u), e && clearTimeout(e), e = setTimeout(c, 200), (t.event.dispatch || t.event.handle).apply(this, a)
          }
        }

        function c() {
          i = null
        }

        function d(t, e) {
          return r.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }

        t.fn.extend({
          mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
          }, unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
          }
        })
      }) ? n.apply(e, o) : n) || (t.exports = s)
    }, 1232: function (t, e, i) {
      var n, o, s;
      o = [i(3609)], void 0 === (s = "function" == typeof (n = function (e) {
        var n, o, s, a, r;
        n = function () {
          var t, i = "mCustomScrollbar", n = "mCS", o = ".mCustomScrollbar", s = {
              setTop: 0,
              setLeft: 0,
              axis: "y",
              scrollbarPosition: "inside",
              scrollInertia: 950,
              autoDraggerLength: !0,
              alwaysShowScrollbar: 0,
              snapOffset: 0,
              mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
              },
              scrollButtons: {scrollType: "stepless", scrollAmount: "auto"},
              keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
              contentTouchScroll: 25,
              documentTouchScroll: !0,
              advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
              },
              theme: "light",
              callbacks: {onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0}
            }, a = 0, r = {}, l = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            h = {
              init: function (t) {
                t = e.extend(!0, {}, s, t);
                var i = u.call(this);
                if (t.live) {
                  var l = t.liveSelector || this.selector || o, c = e(l);
                  if ("off" === t.live) return void p(l);
                  r[l] = setTimeout((function () {
                    c.mCustomScrollbar(t), "once" === t.live && c.length && p(l)
                  }), 500)
                } else p(l);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : g(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                  enable: !0,
                  scrollAmount: "auto",
                  axis: "y",
                  preventDefault: !1,
                  deltaFactor: "auto",
                  normalizeDelta: !1,
                  invert: !1
                }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = m(t.scrollButtons.scrollType), f(t), e(i).each((function () {
                  var i = e(this);
                  if (!i.data(n)) {
                    i.data(n, {
                      idx: ++a,
                      opt: t,
                      scrollRatio: {y: null, x: null},
                      overflowed: null,
                      contentReset: {y: null, x: null},
                      bindEvents: !1,
                      tweenRunning: !1,
                      sequential: {},
                      langDir: i.css("direction"),
                      cbOffsets: null,
                      trigger: null,
                      poll: {size: {o: 0, n: 0}, img: {o: 0, n: 0}, change: {o: 0, n: 0}}
                    });
                    var o = i.data(n), s = o.opt, r = i.data("mcs-axis"), l = i.data("mcs-scrollbar-position"),
                      c = i.data("mcs-theme");
                    r && (s.axis = r), l && (s.scrollbarPosition = l), c && (s.theme = c, f(s)), v.call(this), o && s.callbacks.onCreate && "function" == typeof s.callbacks.onCreate && s.callbacks.onCreate.call(this), e("#mCSB_" + o.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), h.update.call(null, i)
                  }
                }))
              }, update: function (t, i) {
                var o = t || u.call(this);
                return e(o).each((function () {
                  var t = e(this);
                  if (t.data(n)) {
                    var o = t.data(n), s = o.opt, a = e("#mCSB_" + o.idx + "_container"), r = e("#mCSB_" + o.idx),
                      l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                    if (!a.length) return;
                    o.tweenRunning && V(t), i && o && s.callbacks.onBeforeUpdate && "function" == typeof s.callbacks.onBeforeUpdate && s.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), r.css("max-height", "none"), r.height() !== t.height() && r.css("max-height", t.height()), y.call(this), "y" === s.axis || s.advanced.autoExpandHorizontalScroll || a.css("width", b(a)), o.overflowed = _.call(this), D.call(this), s.autoDraggerLength && w.call(this), S.call(this), P.call(this);
                    var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                    "x" !== s.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (G(t, c[0].toString(), {
                      dir: "y",
                      dur: 0,
                      overwrite: "none"
                    }), o.contentReset.y = null) : (T.call(this), "y" === s.axis ? E.call(this) : "yx" === s.axis && o.overflowed[1] && G(t, c[1].toString(), {
                      dir: "x",
                      dur: 0,
                      overwrite: "none"
                    }))), "y" !== s.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (G(t, c[1].toString(), {
                      dir: "x",
                      dur: 0,
                      overwrite: "none"
                    }), o.contentReset.x = null) : (T.call(this), "x" === s.axis ? E.call(this) : "yx" === s.axis && o.overflowed[0] && G(t, c[0].toString(), {
                      dir: "y",
                      dur: 0,
                      overwrite: "none"
                    }))), i && o && (2 === i && s.callbacks.onImageLoad && "function" == typeof s.callbacks.onImageLoad ? s.callbacks.onImageLoad.call(this) : 3 === i && s.callbacks.onSelectorChange && "function" == typeof s.callbacks.onSelectorChange ? s.callbacks.onSelectorChange.call(this) : s.callbacks.onUpdate && "function" == typeof s.callbacks.onUpdate && s.callbacks.onUpdate.call(this)), N.call(this)
                  }
                }))
              }, scrollTo: function (t, i) {
                if (void 0 !== t && null != t) {
                  var o = u.call(this);
                  return e(o).each((function () {
                    var o = e(this);
                    if (o.data(n)) {
                      var s = o.data(n), a = s.opt, r = {
                          trigger: "external",
                          scrollInertia: a.scrollInertia,
                          scrollEasing: "mcsEaseInOut",
                          moveDragger: !1,
                          timeout: 60,
                          callbacks: !0,
                          onStart: !0,
                          onUpdate: !0,
                          onComplete: !0
                        }, l = e.extend(!0, {}, r, i), c = j.call(this, t),
                        d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                      c[0] = q.call(this, c[0], "y"), c[1] = q.call(this, c[1], "x"), l.moveDragger && (c[0] *= s.scrollRatio.y, c[1] *= s.scrollRatio.x), l.dur = ot() ? 0 : d, setTimeout((function () {
                        null !== c[0] && void 0 !== c[0] && "x" !== a.axis && s.overflowed[0] && (l.dir = "y", l.overwrite = "all", G(o, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== a.axis && s.overflowed[1] && (l.dir = "x", l.overwrite = "none", G(o, c[1].toString(), l))
                      }), l.timeout)
                    }
                  }))
                }
              }, stop: function () {
                var t = u.call(this);
                return e(t).each((function () {
                  var t = e(this);
                  t.data(n) && V(t)
                }))
              }, disable: function (t) {
                var i = u.call(this);
                return e(i).each((function () {
                  var i = e(this);
                  i.data(n) && (i.data(n), N.call(this, "remove"), E.call(this), t && T.call(this), D.call(this, !0), i.addClass(d[3]))
                }))
              }, destroy: function () {
                var t = u.call(this);
                return e(t).each((function () {
                  var o = e(this);
                  if (o.data(n)) {
                    var s = o.data(n), a = s.opt, r = e("#mCSB_" + s.idx), l = e("#mCSB_" + s.idx + "_container"),
                      c = e(".mCSB_" + s.idx + "_scrollbar");
                    a.live && p(a.liveSelector || e(t).selector), N.call(this, "remove"), E.call(this), T.call(this), o.removeData(n), J(this, "mcs"), c.remove(), l.find("img." + d[2]).removeClass(d[2]), r.replaceWith(l.contents()), o.removeClass(i + " _" + n + "_" + s.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                  }
                }))
              }
            }, u = function () {
              return "object" != typeof e(this) || e(this).length < 1 ? o : this
            }, f = function (t) {
              var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                o = ["minimal", "minimal-dark"], s = ["minimal", "minimal-dark"], a = ["minimal", "minimal-dark"];
              t.autoDraggerLength = !(e.inArray(t.theme, i) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, n) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, o) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, s) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, a) > -1 ? "outside" : t.scrollbarPosition
            }, p = function (t) {
              r[t] && (clearTimeout(r[t]), J(r, t))
            }, g = function (t) {
              return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
            }, m = function (t) {
              return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
            }, v = function () {
              var t = e(this), o = t.data(n), s = o.opt, a = s.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                r = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                l = "yx" === s.axis ? "mCSB_vertical_horizontal" : "x" === s.axis ? "mCSB_horizontal" : "mCSB_vertical",
                c = "yx" === s.axis ? r[0] + r[1] : "x" === s.axis ? r[1] : r[0],
                h = "yx" === s.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                u = s.autoHideScrollbar ? " " + d[6] : "", f = "x" !== s.axis && "rtl" === o.langDir ? " " + d[7] : "";
              s.setWidth && t.css("width", s.setWidth), s.setHeight && t.css("height", s.setHeight), s.setLeft = "y" !== s.axis && "rtl" === o.langDir ? "989999px" : s.setLeft, t.addClass(i + " _" + n + "_" + o.idx + u + f).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + s.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + s.setTop + "; left:" + s.setLeft + ";' dir='" + o.langDir + "' /></div>");
              var p = e("#mCSB_" + o.idx), g = e("#mCSB_" + o.idx + "_container");
              "y" === s.axis || s.advanced.autoExpandHorizontalScroll || g.css("width", b(g)), "outside" === s.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), p.addClass("mCSB_outside").after(c)) : (p.addClass("mCSB_inside").append(c), g.wrap(h)), x.call(this);
              var m = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
              m[0].css("min-height", m[0].height()), m[1].css("min-width", m[1].width())
            }, b = function (t) {
              var i = [t[0].scrollWidth, Math.max.apply(Math, t.children().map((function () {
                return e(this).outerWidth(!0)
              })).get())], n = t.parent().width();
              return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
            }, y = function () {
              var t = e(this).data(n), i = t.opt, o = e("#mCSB_" + t.idx + "_container");
              if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
                o.css({width: "auto", "min-width": 0, "overflow-x": "scroll"});
                var s = Math.ceil(o[0].scrollWidth);
                3 === i.advanced.autoExpandHorizontalScroll || 2 !== i.advanced.autoExpandHorizontalScroll && s > o.parent().width() ? o.css({
                  width: s,
                  "min-width": "100%",
                  "overflow-x": "inherit"
                }) : o.css({
                  "overflow-x": "inherit",
                  position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                  width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                  "min-width": "100%",
                  position: "relative"
                }).unwrap()
              }
            }, x = function () {
              var t = e(this).data(n), i = t.opt, o = e(".mCSB_" + t.idx + "_scrollbar:first"),
                s = it(i.scrollButtons.tabindex) ? "tabindex='" + i.scrollButtons.tabindex + "'" : "",
                a = ["<a href='#' class='" + d[13] + "' " + s + " />", "<a href='#' class='" + d[14] + "' " + s + " />", "<a href='#' class='" + d[15] + "' " + s + " />", "<a href='#' class='" + d[16] + "' " + s + " />"],
                r = ["x" === i.axis ? a[2] : a[0], "x" === i.axis ? a[3] : a[1], a[2], a[3]];
              i.scrollButtons.enable && o.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3])
            }, w = function () {
              var t = e(this).data(n), i = e("#mCSB_" + t.idx), o = e("#mCSB_" + t.idx + "_container"),
                s = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                a = [i.height() / o.outerHeight(!1), i.width() / o.outerWidth(!1)],
                r = [parseInt(s[0].css("min-height")), Math.round(a[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(a[1] * s[1].parent().width())],
                c = l && r[1] < r[0] ? r[0] : r[1], d = l && r[3] < r[2] ? r[2] : r[3];
              s[0].css({
                height: c,
                "max-height": s[0].parent().height() - 10
              }).find(".mCSB_dragger_bar").css({"line-height": r[0] + "px"}), s[1].css({
                width: d,
                "max-width": s[1].parent().width() - 10
              })
            }, S = function () {
              var t = e(this).data(n), i = e("#mCSB_" + t.idx), o = e("#mCSB_" + t.idx + "_container"),
                s = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                a = [o.outerHeight(!1) - i.height(), o.outerWidth(!1) - i.width()],
                r = [a[0] / (s[0].parent().height() - s[0].height()), a[1] / (s[1].parent().width() - s[1].width())];
              t.scrollRatio = {y: r[0], x: r[1]}
            }, C = function (t, e, i) {
              var n = i ? d[0] + "_expanded" : "", o = t.closest(".mCSB_scrollTools");
              "active" === e ? (t.toggleClass(d[0] + " " + n), o.toggleClass(d[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(d[0]), o.removeClass(d[1])) : (t.addClass(d[0]), o.addClass(d[1])))
            }, _ = function () {
              var t = e(this).data(n), i = e("#mCSB_" + t.idx), o = e("#mCSB_" + t.idx + "_container"),
                s = null == t.overflowed ? o.height() : o.outerHeight(!1),
                a = null == t.overflowed ? o.width() : o.outerWidth(!1), r = o[0].scrollHeight, l = o[0].scrollWidth;
              return r > s && (s = r), l > a && (a = l), [s > i.height(), a > i.width()]
            }, T = function () {
              var t = e(this), i = t.data(n), o = i.opt, s = e("#mCSB_" + i.idx), a = e("#mCSB_" + i.idx + "_container"),
                r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
              if (V(t), ("x" !== o.axis && !i.overflowed[0] || "y" === o.axis && i.overflowed[0]) && (r[0].add(a).css("top", 0), G(t, "_resetY")), "y" !== o.axis && !i.overflowed[1] || "x" === o.axis && i.overflowed[1]) {
                var l = dx = 0;
                "rtl" === i.langDir && (l = s.width() - a.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), a.css("left", l), r[1].css("left", dx), G(t, "_resetX")
              }
            }, P = function () {
              var t = e(this), i = t.data(n), o = i.opt;
              if (!i.bindEvents) {
                if ($.call(this), o.contentTouchScroll && M.call(this), A.call(this), o.mouseWheel.enable) {
                  function s() {
                    a = setTimeout((function () {
                      e.event.special.mousewheel ? (clearTimeout(a), L.call(t[0])) : s()
                    }), 100)
                  }

                  var a;
                  s()
                }
                F.call(this), H.call(this), o.advanced.autoScrollOnFocus && R.call(this), o.scrollButtons.enable && W.call(this), o.keyboard.enable && X.call(this), i.bindEvents = !0
              }
            }, E = function () {
              var t = e(this), i = t.data(n), o = i.opt, s = n + "_" + i.idx, a = ".mCSB_" + i.idx + "_scrollbar",
                r = e("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + a + " ." + d[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + a + ">a"),
                l = e("#mCSB_" + i.idx + "_container");
              o.advanced.releaseDraggableSelectors && r.add(e(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && r.add(e(o.advanced.extraDraggableSelectors)), i.bindEvents && (e(document).add(e(!B() || top.document)).unbind("." + s), r.each((function () {
                e(this).unbind("." + s)
              })), clearTimeout(t[0]._focusTimeout), J(t[0], "_focusTimeout"), clearTimeout(i.sequential.step), J(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), J(l[0], "onCompleteTimeout"), i.bindEvents = !1)
            }, D = function (t) {
              var i = e(this), o = i.data(n), s = o.opt, a = e("#mCSB_" + o.idx + "_container_wrapper"),
                r = a.length ? a : e("#mCSB_" + o.idx + "_container"),
                l = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
              "x" !== s.axis && (o.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(d[8] + " " + d[10])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && c[0].css("display", "none"), r.removeClass(d[10])) : (l[0].css("display", "none"), r.addClass(d[10])), r.addClass(d[8]))), "y" !== s.axis && (o.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(d[9] + " " + d[11])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && c[1].css("display", "none"), r.removeClass(d[11])) : (l[1].css("display", "none"), r.addClass(d[11])), r.addClass(d[9]))), o.overflowed[0] || o.overflowed[1] ? i.removeClass(d[5]) : i.addClass(d[5])
            }, k = function (t) {
              var i = t.type,
                n = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                o = B() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
              switch (i) {
                case"pointerdown":
                case"MSPointerDown":
                case"pointermove":
                case"MSPointerMove":
                case"pointerup":
                case"MSPointerUp":
                  return n ? [t.originalEvent.pageY - n[0] + o[0], t.originalEvent.pageX - n[1] + o[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                case"touchstart":
                case"touchmove":
                case"touchend":
                  var s = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                    a = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                  return t.target.ownerDocument !== document ? [s.screenY, s.screenX, a > 1] : [s.pageY, s.pageX, a > 1];
                default:
                  return n ? [t.pageY - n[0] + o[0], t.pageX - n[1] + o[1], !1] : [t.pageY, t.pageX, !1]
              }
            }, $ = function () {
              var t, i, o, s = e(this), a = s.data(n), r = a.opt, d = n + "_" + a.idx,
                h = ["mCSB_" + a.idx + "_dragger_vertical", "mCSB_" + a.idx + "_dragger_horizontal"],
                u = e("#mCSB_" + a.idx + "_container"), f = e("#" + h[0] + ",#" + h[1]),
                p = r.advanced.releaseDraggableSelectors ? f.add(e(r.advanced.releaseDraggableSelectors)) : f,
                g = r.advanced.extraDraggableSelectors ? e(!B() || top.document).add(e(r.advanced.extraDraggableSelectors)) : e(!B() || top.document);

              function m(e, i, n, o) {
                if (u[0].idleTimer = r.scrollInertia < 233 ? 250 : 0, t.attr("id") === h[1]) var l = "x",
                  c = (t[0].offsetLeft - i + o) * a.scrollRatio.x; else l = "y", c = (t[0].offsetTop - e + n) * a.scrollRatio.y;
                G(s, c.toString(), {dir: l, drag: !0})
              }

              f.bind("contextmenu." + d, (function (t) {
                t.preventDefault()
              })).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, (function (n) {
                if (n.stopImmediatePropagation(), n.preventDefault(), tt(n)) {
                  c = !0, l && (document.onselectstart = function () {
                    return !1
                  }), z.call(u, !1), V(s);
                  var a = (t = e(this)).offset(), d = k(n)[0] - a.top, h = k(n)[1] - a.left, f = t.height() + a.top,
                    p = t.width() + a.left;
                  d < f && d > 0 && h < p && h > 0 && (i = d, o = h), C(t, "active", r.autoExpandScrollbar)
                }
              })).bind("touchmove." + d, (function (e) {
                e.stopImmediatePropagation(), e.preventDefault();
                var n = t.offset(), s = k(e)[0] - n.top, a = k(e)[1] - n.left;
                m(i, o, s, a)
              })), e(document).add(g).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, (function (e) {
                if (t) {
                  var n = t.offset(), s = k(e)[0] - n.top, a = k(e)[1] - n.left;
                  if (i === s && o === a) return;
                  m(i, o, s, a)
                }
              })).add(p).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, (function (e) {
                t && (C(t, "active", r.autoExpandScrollbar), t = null), c = !1, l && (document.onselectstart = null), z.call(u, !0)
              }))
            }, M = function () {
              var i, o, s, a, r, l, d, h, u, f, p, g, m, v, b = e(this), y = b.data(n), x = y.opt, w = n + "_" + y.idx,
                S = e("#mCSB_" + y.idx), C = e("#mCSB_" + y.idx + "_container"),
                _ = [e("#mCSB_" + y.idx + "_dragger_vertical"), e("#mCSB_" + y.idx + "_dragger_horizontal")], T = [],
                P = [], E = 0, D = "yx" === x.axis ? "none" : "all", $ = [], M = C.find("iframe"),
                A = ["touchstart." + w + " pointerdown." + w + " MSPointerDown." + w, "touchmove." + w + " pointermove." + w + " MSPointerMove." + w, "touchend." + w + " pointerup." + w + " MSPointerUp." + w],
                L = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;

              function I(e) {
                if (!et(e) || c || k(e)[2]) t = 0; else {
                  t = 1, m = 0, v = 0, i = 1, b.removeClass("mCS_touch_action");
                  var n = C.offset();
                  o = k(e)[0] - n.top, s = k(e)[1] - n.left, $ = [k(e)[0], k(e)[1]]
                }
              }

              function z(t) {
                if (et(t) && !c && !k(t)[2] && (x.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!v || m) && i)) {
                  d = Q();
                  var e = S.offset(), n = k(t)[0] - e.top, a = k(t)[1] - e.left, r = "mcsLinearOut";
                  if (T.push(n), P.push(a), $[2] = Math.abs(k(t)[0] - $[0]), $[3] = Math.abs(k(t)[1] - $[1]), y.overflowed[0]) var l = _[0].parent().height() - _[0].height(),
                    h = o - n > 0 && n - o > -l * y.scrollRatio.y && (2 * $[3] < $[2] || "yx" === x.axis);
                  if (y.overflowed[1]) var u = _[1].parent().width() - _[1].width(),
                    f = s - a > 0 && a - s > -u * y.scrollRatio.x && (2 * $[2] < $[3] || "yx" === x.axis);
                  h || f ? (L || t.preventDefault(), m = 1) : (v = 1, b.addClass("mCS_touch_action")), L && t.preventDefault(), p = "yx" === x.axis ? [o - n, s - a] : "x" === x.axis ? [null, s - a] : [o - n, null], C[0].idleTimer = 250, y.overflowed[0] && H(p[0], E, r, "y", "all", !0), y.overflowed[1] && H(p[1], E, r, "x", D, !0)
                }
              }

              function O(e) {
                if (!et(e) || c || k(e)[2]) t = 0; else {
                  t = 1, e.stopImmediatePropagation(), V(b), l = Q();
                  var i = S.offset();
                  a = k(e)[0] - i.top, r = k(e)[1] - i.left, T = [], P = []
                }
              }

              function F(t) {
                if (et(t) && !c && !k(t)[2]) {
                  i = 0, t.stopImmediatePropagation(), m = 0, v = 0, h = Q();
                  var e = S.offset(), n = k(t)[0] - e.top, o = k(t)[1] - e.left;
                  if (!(h - d > 30)) {
                    var s = "mcsEaseOut", b = (f = 1e3 / (h - l)) < 2.5,
                      w = b ? [T[T.length - 2], P[P.length - 2]] : [0, 0];
                    u = b ? [n - w[0], o - w[1]] : [n - a, o - r];
                    var _ = [Math.abs(u[0]), Math.abs(u[1])];
                    f = b ? [Math.abs(u[0] / 4), Math.abs(u[1] / 4)] : [f, f];
                    var E = [Math.abs(C[0].offsetTop) - u[0] * R(_[0] / f[0], f[0]), Math.abs(C[0].offsetLeft) - u[1] * R(_[1] / f[1], f[1])];
                    p = "yx" === x.axis ? [E[0], E[1]] : "x" === x.axis ? [null, E[1]] : [E[0], null], g = [4 * _[0] + x.scrollInertia, 4 * _[1] + x.scrollInertia];
                    var $ = parseInt(x.contentTouchScroll) || 0;
                    p[0] = _[0] > $ ? p[0] : 0, p[1] = _[1] > $ ? p[1] : 0, y.overflowed[0] && H(p[0], g[0], s, "y", D, !1), y.overflowed[1] && H(p[1], g[1], s, "x", D, !1)
                  }
                }
              }

              function R(t, e) {
                var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
              }

              function H(t, e, i, n, o, s) {
                t && G(b, t.toString(), {dur: e, scrollEasing: i, dir: n, overwrite: o, drag: s})
              }

              C.bind(A[0], (function (t) {
                I(t)
              })).bind(A[1], (function (t) {
                z(t)
              })), S.bind(A[0], (function (t) {
                O(t)
              })).bind(A[2], (function (t) {
                F(t)
              })), M.length && M.each((function () {
                e(this).bind("load", (function () {
                  B(this) && e(this.contentDocument || this.contentWindow.document).bind(A[0], (function (t) {
                    I(t), O(t)
                  })).bind(A[1], (function (t) {
                    z(t)
                  })).bind(A[2], (function (t) {
                    F(t)
                  }))
                }))
              }))
            }, A = function () {
              var i, o = e(this), s = o.data(n), a = s.opt, r = s.sequential, l = n + "_" + s.idx,
                d = e("#mCSB_" + s.idx + "_container"), h = d.parent();

              function u() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
              }

              function f(t, e, n) {
                r.type = n && i ? "stepped" : "stepless", r.scrollAmount = 10, Y(o, t, e, "mcsLinearOut", n ? 60 : null)
              }

              d.bind("mousedown." + l, (function (e) {
                t || i || (i = 1, c = !0)
              })).add(document).bind("mousemove." + l, (function (e) {
                if (!t && i && u()) {
                  var n = d.offset(), o = k(e)[0] - n.top + d[0].offsetTop, l = k(e)[1] - n.left + d[0].offsetLeft;
                  o > 0 && o < h.height() && l > 0 && l < h.width() ? r.step && f("off", null, "stepped") : ("x" !== a.axis && s.overflowed[0] && (o < 0 ? f("on", 38) : o > h.height() && f("on", 40)), "y" !== a.axis && s.overflowed[1] && (l < 0 ? f("on", 37) : l > h.width() && f("on", 39)))
                }
              })).bind("mouseup." + l + " dragend." + l, (function (e) {
                t || (i && (i = 0, f("off", null)), c = !1)
              }))
            }, L = function () {
              if (e(this).data(n)) {
                var t = e(this), i = t.data(n), o = i.opt, s = n + "_" + i.idx, a = e("#mCSB_" + i.idx),
                  r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                  c = e("#mCSB_" + i.idx + "_container").find("iframe");
                c.length && c.each((function () {
                  e(this).bind("load", (function () {
                    B(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, (function (t, e) {
                      d(t, e)
                    }))
                  }))
                })), a.bind("mousewheel." + s, (function (t, e) {
                  d(t, e)
                }))
              }

              function d(n, s) {
                if (V(t), !O(t, n.target)) {
                  var c = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && n.deltaFactor < 100 ? 100 : n.deltaFactor || 100,
                    d = o.scrollInertia;
                  if ("x" === o.axis || "x" === o.mouseWheel.axis) var h = "x",
                    u = [Math.round(c * i.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                    f = "auto" !== o.mouseWheel.scrollAmount ? u[1] : u[0] >= a.width() ? .9 * a.width() : u[0],
                    p = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetLeft), g = r[1][0].offsetLeft,
                    m = r[1].parent().width() - r[1].width(),
                    v = "y" === o.mouseWheel.axis ? n.deltaY || s : n.deltaX; else h = "y", u = [Math.round(c * i.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)], f = "auto" !== o.mouseWheel.scrollAmount ? u[1] : u[0] >= a.height() ? .9 * a.height() : u[0], p = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetTop), g = r[0][0].offsetTop, m = r[0].parent().height() - r[0].height(), v = n.deltaY || s;
                  "y" === h && !i.overflowed[0] || "x" === h && !i.overflowed[1] || ((o.mouseWheel.invert || n.webkitDirectionInvertedFromDevice) && (v = -v), o.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (v > 0 && 0 !== g || v < 0 && g !== m || o.mouseWheel.preventDefault) && (n.stopImmediatePropagation(), n.preventDefault()), n.deltaFactor < 5 && !o.mouseWheel.normalizeDelta && (f = n.deltaFactor, d = 17), G(t, (p - v * f).toString(), {
                    dir: h,
                    dur: d
                  }))
                }
              }
            }, I = new Object, B = function (t) {
              var i = !1, n = !1, o = null;
              if (void 0 === t ? n = "#empty" : void 0 !== e(t).attr("id") && (n = e(t).attr("id")), !1 !== n && void 0 !== I[n]) return I[n];
              if (t) {
                try {
                  o = (t.contentDocument || t.contentWindow.document).body.innerHTML
                } catch (t) {
                }
                i = null !== o
              } else {
                try {
                  o = top.document.body.innerHTML
                } catch (t) {
                }
                i = null !== o
              }
              return !1 !== n && (I[n] = i), i
            }, z = function (t) {
              var e = this.find("iframe");
              if (e.length) {
                var i = t ? "auto" : "none";
                e.css("pointer-events", i)
              }
            }, O = function (t, i) {
              var o = i.nodeName.toLowerCase(), s = t.data(n).opt.mouseWheel.disableOver, a = ["select", "textarea"];
              return e.inArray(o, s) > -1 && !(e.inArray(o, a) > -1 && !e(i).is(":focus"))
            }, F = function () {
              var t, i = e(this), o = i.data(n), s = n + "_" + o.idx, a = e("#mCSB_" + o.idx + "_container"),
                r = a.parent();
              e(".mCSB_" + o.idx + "_scrollbar ." + d[12]).bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s, (function (i) {
                c = !0, e(i.target).hasClass("mCSB_dragger") || (t = 1)
              })).bind("touchend." + s + " pointerup." + s + " MSPointerUp." + s, (function (t) {
                c = !1
              })).bind("click." + s, (function (n) {
                if (t && (t = 0, e(n.target).hasClass(d[12]) || e(n.target).hasClass("mCSB_draggerRail"))) {
                  V(i);
                  var s = e(this), l = s.find(".mCSB_dragger");
                  if (s.parent(".mCSB_scrollTools_horizontal").length > 0) {
                    if (!o.overflowed[1]) return;
                    var c = "x", h = n.pageX > l.offset().left ? -1 : 1,
                      u = Math.abs(a[0].offsetLeft) - h * (.9 * r.width())
                  } else {
                    if (!o.overflowed[0]) return;
                    c = "y", h = n.pageY > l.offset().top ? -1 : 1, u = Math.abs(a[0].offsetTop) - h * (.9 * r.height())
                  }
                  G(i, u.toString(), {dir: c, scrollEasing: "mcsEaseInOut"})
                }
              }))
            }, R = function () {
              var t = e(this), i = t.data(n), o = i.opt, s = n + "_" + i.idx, a = e("#mCSB_" + i.idx + "_container"),
                r = a.parent();
              a.bind("focusin." + s, (function (i) {
                var n = e(document.activeElement), s = a.find(".mCustomScrollBox").length, l = 0;
                n.is(o.advanced.autoScrollOnFocus) && (V(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = s ? (l + 17) * s : 0, t[0]._focusTimeout = setTimeout((function () {
                  var e = [nt(n)[0], nt(n)[1]], i = [a[0].offsetTop, a[0].offsetLeft],
                    s = [i[0] + e[0] >= 0 && i[0] + e[0] < r.height() - n.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < r.width() - n.outerWidth(!1)],
                    c = "yx" !== o.axis || s[0] || s[1] ? "all" : "none";
                  "x" === o.axis || s[0] || G(t, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: l
                  }), "y" === o.axis || s[1] || G(t, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: l
                  })
                }), t[0]._focusTimer))
              }))
            }, H = function () {
              var t = e(this).data(n), i = n + "_" + t.idx, o = e("#mCSB_" + t.idx + "_container").parent();
              o.bind("scroll." + i, (function (i) {
                0 === o.scrollTop() && 0 === o.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
              }))
            }, W = function () {
              var t = e(this), i = t.data(n), o = i.opt, s = i.sequential, a = n + "_" + i.idx,
                r = ".mCSB_" + i.idx + "_scrollbar";
              e(r + ">a").bind("contextmenu." + a, (function (t) {
                t.preventDefault()
              })).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, (function (n) {
                if (n.preventDefault(), tt(n)) {
                  var a = e(this).attr("class");
                  switch (s.type = o.scrollButtons.scrollType, n.type) {
                    case"mousedown":
                    case"touchstart":
                    case"pointerdown":
                    case"MSPointerDown":
                      if ("stepped" === s.type) return;
                      c = !0, i.tweenRunning = !1, r("on", a);
                      break;
                    case"mouseup":
                    case"touchend":
                    case"pointerup":
                    case"MSPointerUp":
                    case"mouseout":
                    case"pointerout":
                    case"MSPointerOut":
                      if ("stepped" === s.type) return;
                      c = !1, s.dir && r("off", a);
                      break;
                    case"click":
                      if ("stepped" !== s.type || i.tweenRunning) return;
                      r("on", a)
                  }
                }

                function r(e, i) {
                  s.scrollAmount = o.scrollButtons.scrollAmount, Y(t, e, i)
                }
              }))
            }, X = function () {
              var t = e(this), i = t.data(n), o = i.opt, s = i.sequential, a = n + "_" + i.idx, r = e("#mCSB_" + i.idx),
                l = e("#mCSB_" + i.idx + "_container"), c = l.parent(),
                d = "input,textarea,select,datalist,keygen,[contenteditable='true']", h = l.find("iframe"),
                u = ["blur." + a + " keydown." + a + " keyup." + a];

              function f(n) {
                switch (n.type) {
                  case"blur":
                    i.tweenRunning && s.dir && p("off", null);
                    break;
                  case"keydown":
                  case"keyup":
                    var a = n.keyCode ? n.keyCode : n.which, r = "on";
                    if ("x" !== o.axis && (38 === a || 40 === a) || "y" !== o.axis && (37 === a || 39 === a)) {
                      if ((38 === a || 40 === a) && !i.overflowed[0] || (37 === a || 39 === a) && !i.overflowed[1]) return;
                      "keyup" === n.type && (r = "off"), e(document.activeElement).is(d) || (n.preventDefault(), n.stopImmediatePropagation(), p(r, a))
                    } else if (33 === a || 34 === a) {
                      if ((i.overflowed[0] || i.overflowed[1]) && (n.preventDefault(), n.stopImmediatePropagation()), "keyup" === n.type) {
                        V(t);
                        var h = 34 === a ? -1 : 1;
                        if ("x" === o.axis || "yx" === o.axis && i.overflowed[1] && !i.overflowed[0]) var u = "x",
                          f = Math.abs(l[0].offsetLeft) - h * (.9 * c.width()); else u = "y", f = Math.abs(l[0].offsetTop) - h * (.9 * c.height());
                        G(t, f.toString(), {dir: u, scrollEasing: "mcsEaseInOut"})
                      }
                    } else 35 !== a && 36 !== a || e(document.activeElement).is(d) || ((i.overflowed[0] || i.overflowed[1]) && (n.preventDefault(), n.stopImmediatePropagation()), "keyup" !== n.type) || ("x" === o.axis || "yx" === o.axis && i.overflowed[1] && !i.overflowed[0] ? (u = "x", f = 35 === a ? Math.abs(c.width() - l.outerWidth(!1)) : 0) : (u = "y", f = 35 === a ? Math.abs(c.height() - l.outerHeight(!1)) : 0), G(t, f.toString(), {
                      dir: u,
                      scrollEasing: "mcsEaseInOut"
                    }))
                }

                function p(e, n) {
                  s.type = o.keyboard.scrollType, s.scrollAmount = o.keyboard.scrollAmount, "stepped" === s.type && i.tweenRunning || Y(t, e, n)
                }
              }

              h.length && h.each((function () {
                e(this).bind("load", (function () {
                  B(this) && e(this.contentDocument || this.contentWindow.document).bind(u[0], (function (t) {
                    f(t)
                  }))
                }))
              })), r.attr("tabindex", "0").bind(u[0], (function (t) {
                f(t)
              }))
            }, Y = function (t, i, o, s, a) {
              var r = t.data(n), l = r.opt, c = r.sequential, h = e("#mCSB_" + r.idx + "_container"),
                u = "stepped" === c.type, f = l.scrollInertia < 26 ? 26 : l.scrollInertia,
                p = l.scrollInertia < 1 ? 17 : l.scrollInertia;
              switch (i) {
                case"on":
                  if (c.dir = [o === d[16] || o === d[15] || 39 === o || 37 === o ? "x" : "y", o === d[13] || o === d[15] || 38 === o || 37 === o ? -1 : 1], V(t), it(o) && "stepped" === c.type) return;
                  g(u);
                  break;
                case"off":
                  m(), (u || r.tweenRunning && c.dir) && g(!0)
              }

              function g(e) {
                l.snapAmount && (c.scrollAmount = l.snapAmount instanceof Array ? "x" === c.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
                var i = "stepped" !== c.type, n = a || (e ? i ? f / 1.5 : p : 1e3 / 60), o = e ? i ? 7.5 : 40 : 2.5,
                  d = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                  u = [r.scrollRatio.y > 10 ? 10 : r.scrollRatio.y, r.scrollRatio.x > 10 ? 10 : r.scrollRatio.x],
                  m = "x" === c.dir[0] ? d[1] + c.dir[1] * (u[1] * o) : d[0] + c.dir[1] * (u[0] * o),
                  v = "x" === c.dir[0] ? d[1] + c.dir[1] * parseInt(c.scrollAmount) : d[0] + c.dir[1] * parseInt(c.scrollAmount),
                  b = "auto" !== c.scrollAmount ? v : m, y = s || (e ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                  x = !!e;
                e && n < 17 && (b = "x" === c.dir[0] ? d[1] : d[0]), G(t, b.toString(), {
                  dir: c.dir[0],
                  scrollEasing: y,
                  dur: n,
                  onComplete: x
                }), e ? c.dir = !1 : (clearTimeout(c.step), c.step = setTimeout((function () {
                  g()
                }), n))
              }

              function m() {
                clearTimeout(c.step), J(c, "step"), V(t)
              }
            }, j = function (t) {
              var i = e(this).data(n).opt, o = [];
              return "function" == typeof t && (t = t()), t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === i.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === i.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === i.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
            }, q = function (t, i) {
              if (null != t && void 0 !== t) {
                var o = e(this), s = o.data(n), a = s.opt, r = e("#mCSB_" + s.idx + "_container"), l = r.parent(),
                  c = typeof t;
                i || (i = "x" === a.axis ? "x" : "y");
                var d = "x" === i ? r.outerWidth(!1) - l.width() : r.outerHeight(!1) - l.height(),
                  u = "x" === i ? r[0].offsetLeft : r[0].offsetTop, f = "x" === i ? "left" : "top";
                switch (c) {
                  case"function":
                    return t();
                  case"object":
                    if (!(g = t.jquery ? t : e(t)).length) return;
                    return "x" === i ? nt(g)[1] : nt(g)[0];
                  case"string":
                  case"number":
                    if (it(t)) return Math.abs(t);
                    if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-=")) return Math.abs(u - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                      var p = u + parseInt(t.split("+=")[1]);
                      return p >= 0 ? 0 : Math.abs(p)
                    }
                    if (-1 !== t.indexOf("px") && it(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t) return 0;
                    if ("bottom" === t) return Math.abs(l.height() - r.outerHeight(!1));
                    if ("right" === t) return Math.abs(l.width() - r.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                      var g = r.find(":" + t);
                      return "x" === i ? nt(g)[1] : nt(g)[0]
                    }
                    return e(t).length ? "x" === i ? nt(e(t))[1] : nt(e(t))[0] : (r.css(f, t), void h.update.call(null, o[0]))
                }
              }
            }, N = function (t) {
              var i = e(this), o = i.data(n), s = o.opt, a = e("#mCSB_" + o.idx + "_container");
              if (t) return clearTimeout(a[0].autoUpdate), void J(a[0], "autoUpdate");

              function r() {
                clearTimeout(a[0].autoUpdate), 0 !== i.parents("html").length ? a[0].autoUpdate = setTimeout((function () {
                  return s.advanced.updateOnSelectorChange && (o.poll.change.n = c(), o.poll.change.n !== o.poll.change.o) ? (o.poll.change.o = o.poll.change.n, void u(3)) : s.advanced.updateOnContentResize && (o.poll.size.n = i[0].scrollHeight + i[0].scrollWidth + a[0].offsetHeight + i[0].offsetHeight + i[0].offsetWidth, o.poll.size.n !== o.poll.size.o) ? (o.poll.size.o = o.poll.size.n, void u(1)) : !s.advanced.updateOnImageLoad || "auto" === s.advanced.updateOnImageLoad && "y" === s.axis || (o.poll.img.n = a.find("img").length, o.poll.img.n === o.poll.img.o) ? void ((s.advanced.updateOnSelectorChange || s.advanced.updateOnContentResize || s.advanced.updateOnImageLoad) && r()) : (o.poll.img.o = o.poll.img.n, void a.find("img").each((function () {
                    l(this)
                  })))
                }), s.advanced.autoUpdateTimeout) : i = null
              }

              function l(t) {
                if (e(t).hasClass(d[2])) u(); else {
                  var i = new Image;
                  i.onload = n(i, o), i.src = t.src
                }

                function n(t, e) {
                  return function () {
                    return e.apply(t, arguments)
                  }
                }

                function o() {
                  this.onload = null, e(t).addClass(d[2]), u(2)
                }
              }

              function c() {
                !0 === s.advanced.updateOnSelectorChange && (s.advanced.updateOnSelectorChange = "*");
                var t = 0, e = a.find(s.advanced.updateOnSelectorChange);
                return s.advanced.updateOnSelectorChange && e.length > 0 && e.each((function () {
                  t += this.offsetHeight + this.offsetWidth
                })), t
              }

              function u(t) {
                clearTimeout(a[0].autoUpdate), h.update.call(null, i[0], t)
              }

              r()
            }, U = function (t, e, i) {
              return Math.round(t / e) * e - i
            }, V = function (t) {
              var i = t.data(n);
              e("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal").each((function () {
                K.call(this)
              }))
            }, G = function (t, i, o) {
              var s = t.data(n), a = s.opt, r = {
                  trigger: "internal",
                  dir: "y",
                  scrollEasing: "mcsEaseOut",
                  drag: !1,
                  dur: a.scrollInertia,
                  overwrite: "all",
                  callbacks: !0,
                  onStart: !0,
                  onUpdate: !0,
                  onComplete: !0
                }, l = [(o = e.extend(r, o)).dur, o.drag ? 0 : o.dur], c = e("#mCSB_" + s.idx),
                d = e("#mCSB_" + s.idx + "_container"), h = d.parent(),
                u = a.callbacks.onTotalScrollOffset ? j.call(t, a.callbacks.onTotalScrollOffset) : [0, 0],
                f = a.callbacks.onTotalScrollBackOffset ? j.call(t, a.callbacks.onTotalScrollBackOffset) : [0, 0];
              if (s.trigger = o.trigger, 0 === h.scrollTop() && 0 === h.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), h.scrollTop(0).scrollLeft(0)), "_resetY" !== i || s.contentReset.y || (T("onOverflowYNone") && a.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== i || s.contentReset.x || (T("onOverflowXNone") && a.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (T("onOverflowY") && a.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (T("onOverflowX") && a.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), a.snapAmount) {
                  var p = a.snapAmount instanceof Array ? "x" === o.dir ? a.snapAmount[1] : a.snapAmount[0] : a.snapAmount;
                  i = U(i, p, a.snapOffset)
                }
                switch (o.dir) {
                  case"x":
                    var g = e("#mCSB_" + s.idx + "_dragger_horizontal"), m = "left", v = d[0].offsetLeft,
                      b = [c.width() - d.outerWidth(!1), g.parent().width() - g.width()],
                      y = [i, 0 === i ? 0 : i / s.scrollRatio.x], x = u[1], w = f[1], S = x > 0 ? x / s.scrollRatio.x : 0,
                      _ = w > 0 ? w / s.scrollRatio.x : 0;
                    break;
                  case"y":
                    g = e("#mCSB_" + s.idx + "_dragger_vertical"), m = "top", v = d[0].offsetTop, b = [c.height() - d.outerHeight(!1), g.parent().height() - g.height()], y = [i, 0 === i ? 0 : i / s.scrollRatio.y], x = u[0], w = f[0], S = x > 0 ? x / s.scrollRatio.y : 0, _ = w > 0 ? w / s.scrollRatio.y : 0
                }
                y[1] < 0 || 0 === y[0] && 0 === y[1] ? y = [0, 0] : y[1] >= b[1] ? y = [b[0], b[1]] : y[0] = -y[0], t[0].mcs || (E(), T("onInit") && a.callbacks.onInit.call(t[0])), clearTimeout(d[0].onCompleteTimeout), Z(g[0], m, Math.round(y[1]), l[1], o.scrollEasing), !s.tweenRunning && (0 === v && y[0] >= 0 || v === b[0] && y[0] <= b[0]) || Z(d[0], m, Math.round(y[0]), l[0], o.scrollEasing, o.overwrite, {
                  onStart: function () {
                    o.callbacks && o.onStart && !s.tweenRunning && (T("onScrollStart") && (E(), a.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(g), s.cbOffsets = P())
                  }, onUpdate: function () {
                    o.callbacks && o.onUpdate && T("whileScrolling") && (E(), a.callbacks.whileScrolling.call(t[0]))
                  }, onComplete: function () {
                    if (o.callbacks && o.onComplete) {
                      "yx" === a.axis && clearTimeout(d[0].onCompleteTimeout);
                      var e = d[0].idleTimer || 0;
                      d[0].onCompleteTimeout = setTimeout((function () {
                        T("onScroll") && (E(), a.callbacks.onScroll.call(t[0])), T("onTotalScroll") && y[1] >= b[1] - S && s.cbOffsets[0] && (E(), a.callbacks.onTotalScroll.call(t[0])), T("onTotalScrollBack") && y[1] <= _ && s.cbOffsets[1] && (E(), a.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, d[0].idleTimer = 0, C(g, "hide")
                      }), e)
                    }
                  }
                })
              }

              function T(t) {
                return s && a.callbacks[t] && "function" == typeof a.callbacks[t]
              }

              function P() {
                return [a.callbacks.alwaysTriggerOffsets || v >= b[0] + x, a.callbacks.alwaysTriggerOffsets || v <= -w]
              }

              function E() {
                var e = [d[0].offsetTop, d[0].offsetLeft], i = [g[0].offsetTop, g[0].offsetLeft],
                  n = [d.outerHeight(!1), d.outerWidth(!1)], s = [c.height(), c.width()];
                t[0].mcs = {
                  content: d,
                  top: e[0],
                  left: e[1],
                  draggerTop: i[0],
                  draggerLeft: i[1],
                  topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - s[0])),
                  leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - s[1])),
                  direction: o.dir
                }
              }
            }, Z = function (t, e, i, n, o, s, a) {
              t._mTween || (t._mTween = {top: {}, left: {}});
              var r, l, c = (a = a || {}).onStart || function () {
              }, d = a.onUpdate || function () {
              }, h = a.onComplete || function () {
              }, u = Q(), f = 0, p = t.offsetTop, g = t.style, m = t._mTween[e];
              "left" === e && (p = t.offsetLeft);
              var v = i - p;

              function b() {
                m.stop || (f || c.call(), f = Q() - u, y(), f >= m.time && (m.time = f > m.time ? f + r - (f - m.time) : f + r - 1, m.time < f + 1 && (m.time = f + 1)), m.time < n ? m.id = l(b) : h.call())
              }

              function y() {
                n > 0 ? (m.currVal = S(m.time, p, v, n, o), g[e] = Math.round(m.currVal) + "px") : g[e] = i + "px", d.call()
              }

              function x() {
                r = 1e3 / 60, m.time = f + r, l = window.requestAnimationFrame ? window.requestAnimationFrame : function (t) {
                  return y(), setTimeout(t, .01)
                }, m.id = l(b)
              }

              function w() {
                null != m.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(m.id) : clearTimeout(m.id), m.id = null)
              }

              function S(t, e, i, n, o) {
                switch (o) {
                  case"linear":
                  case"mcsLinear":
                    return i * t / n + e;
                  case"mcsLinearOut":
                    return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                  case"easeInOutSmooth":
                    return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                  case"easeInOutStrong":
                    return (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                  case"easeInOut":
                  case"mcsEaseInOut":
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                  case"easeOutSmooth":
                    return t /= n, -i * (--t * t * t * t - 1) + e;
                  case"easeOutStrong":
                    return i * (1 - Math.pow(2, -10 * t / n)) + e;
                  case"easeOut":
                  case"mcsEaseOut":
                  default:
                    var s = (t /= n) * t, a = s * t;
                    return e + i * (.499999999999997 * a * s + -2.5 * s * s + 5.5 * a + -6.5 * s + 4 * t)
                }
              }

              m.stop = 0, "none" !== s && w(), x()
            }, Q = function () {
              return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            }, K = function () {
              var t = this;
              t._mTween || (t._mTween = {top: {}, left: {}});
              for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                var n = e[i];
                t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
              }
            }, J = function (t, e) {
              try {
                delete t[e]
              } catch (i) {
                t[e] = null
              }
            }, tt = function (t) {
              return !(t.which && 1 !== t.which)
            }, et = function (t) {
              var e = t.originalEvent.pointerType;
              return !(e && "touch" !== e && 2 !== e)
            }, it = function (t) {
              return !isNaN(parseFloat(t)) && isFinite(t)
            }, nt = function (t) {
              var e = t.parents(".mCSB_container");
              return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
            }, ot = function () {
              var t = e();
              return !!t && document[t];

              function e() {
                var t = ["webkit", "moz", "ms", "o"];
                if ("hidden" in document) return "hidden";
                for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                return null
              }
            };
          e.fn[i] = function (t) {
            return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
          }, e[i] = function (t) {
            return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
          }, e[i].defaults = s, window[i] = !0, e(window).bind("load", (function () {
            e(o)[i](), e.extend(e.expr[":"], {
              mcsInView: e.expr[":"].mcsInView || function (t) {
                var i, n, o = e(t), s = o.parents(".mCSB_container");
                if (s.length) return i = s.parent(), (n = [s[0].offsetTop, s[0].offsetLeft])[0] + nt(o)[0] >= 0 && n[0] + nt(o)[0] < i.height() - o.outerHeight(!1) && n[1] + nt(o)[1] >= 0 && n[1] + nt(o)[1] < i.width() - o.outerWidth(!1)
              }, mcsInSight: e.expr[":"].mcsInSight || function (t, i, n) {
                var o, s, a, r, l = e(t), c = l.parents(".mCSB_container"),
                  d = "exact" === n[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                if (c.length) return o = [l.outerHeight(!1), l.outerWidth(!1)], a = [c[0].offsetTop + nt(l)[0], c[0].offsetLeft + nt(l)[1]], s = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], r = [o[0] < s[0] ? d[0] : d[1], o[1] < s[1] ? d[0] : d[1]], a[0] - s[0] * r[0][0] < 0 && a[0] + o[0] - s[0] * r[0][1] >= 0 && a[1] - s[1] * r[1][0] < 0 && a[1] + o[1] - s[1] * r[1][1] >= 0
              }, mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                var i = e(t).data(n);
                if (i) return i.overflowed[0] || i.overflowed[1]
              }
            })
          }))
        }, o = i.amdO, s = t.exports, a = "https:" == document.location.protocol ? "https:" : "http:", r = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js", o || (s ? i(450)(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + a + "//" + r + "%3E%3C/script%3E"))), n()
      }) ? n.apply(e, o) : n) || (t.exports = s)
    }, 4842: function (t, e, i) {
      var n, o;
      !function (s, a) {
        n = [i(4704)], void 0 === (o = function (t) {
          return function (t, e) {
            "use strict";

            function i() {
            }

            var n = i.prototype = Object.create(e.prototype);
            n.bindHandles = function () {
              this._bindHandles(!0)
            }, n.unbindHandles = function () {
              this._bindHandles(!1)
            }, n._bindHandles = function (e) {
              for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                var s = this.handles[o];
                this._bindStartEvent(s, e), s[i]("click", this), t.PointerEvent && (s.style.touchAction = n)
              }
            }, n._touchActionValue = "none", n.pointerDown = function (t, e) {
              this.okayPointerDown(t) && (this.pointerDownPointer = {
                pageX: e.pageX,
                pageY: e.pageY
              }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
            };
            var o = {TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0},
              s = {radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0};
            return n.okayPointerDown = function (t) {
              var e = o[t.target.nodeName], i = s[t.target.type], n = !e || i;
              return n || this._pointerReset(), n
            }, n.pointerDownBlur = function () {
              var t = document.activeElement;
              t && t.blur && t != document.body && t.blur()
            }, n.pointerMove = function (t, e) {
              var i = this._dragPointerMove(t, e);
              this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
            }, n._dragPointerMove = function (t, e) {
              var i = {x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY};
              return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
            }, n.hasDragStarted = function (t) {
              return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
            }, n.pointerUp = function (t, e) {
              this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
            }, n._dragPointerUp = function (t, e) {
              this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
            }, n._dragStart = function (t, e) {
              this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
            }, n.dragStart = function (t, e) {
              this.emitEvent("dragStart", [t, e])
            }, n._dragMove = function (t, e, i) {
              this.isDragging && this.dragMove(t, e, i)
            }, n.dragMove = function (t, e, i) {
              t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
            }, n._dragEnd = function (t, e) {
              this.isDragging = !1, setTimeout(function () {
                delete this.isPreventingClicks
              }.bind(this)), this.dragEnd(t, e)
            }, n.dragEnd = function (t, e) {
              this.emitEvent("dragEnd", [t, e])
            }, n.onclick = function (t) {
              this.isPreventingClicks && t.preventDefault()
            }, n._staticClick = function (t, e) {
              this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
                delete this.isIgnoringMouseUp
              }.bind(this), 400)))
            }, n.staticClick = function (t, e) {
              this.emitEvent("staticClick", [t, e])
            }, i.getPointerPoint = e.getPointerPoint, i
          }(s, t)
        }.apply(e, n)) || (t.exports = o)
      }(window)
    }, 4704: function (t, e, i) {
      var n, o;
      !function (s, a) {
        n = [i(7158)], void 0 === (o = function (t) {
          return function (t, e) {
            "use strict";

            function i() {
            }

            function n() {
            }

            var o = n.prototype = Object.create(e.prototype);
            o.bindStartEvent = function (t) {
              this._bindStartEvent(t, !0)
            }, o.unbindStartEvent = function (t) {
              this._bindStartEvent(t, !1)
            }, o._bindStartEvent = function (e, i) {
              var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener", o = "mousedown";
              t.PointerEvent ? o = "pointerdown" : "ontouchstart" in t && (o = "touchstart"), e[n](o, this)
            }, o.handleEvent = function (t) {
              var e = "on" + t.type;
              this[e] && this[e](t)
            }, o.getTouch = function (t) {
              for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (i.identifier == this.pointerIdentifier) return i
              }
            }, o.onmousedown = function (t) {
              var e = t.button;
              e && 0 !== e && 1 !== e || this._pointerDown(t, t)
            }, o.ontouchstart = function (t) {
              this._pointerDown(t, t.changedTouches[0])
            }, o.onpointerdown = function (t) {
              this._pointerDown(t, t)
            }, o._pointerDown = function (t, e) {
              t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
            }, o.pointerDown = function (t, e) {
              this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
            };
            var s = {
              mousedown: ["mousemove", "mouseup"],
              touchstart: ["touchmove", "touchend", "touchcancel"],
              pointerdown: ["pointermove", "pointerup", "pointercancel"]
            };
            return o._bindPostStartEvents = function (e) {
              if (e) {
                var i = s[e.type];
                i.forEach((function (e) {
                  t.addEventListener(e, this)
                }), this), this._boundPointerEvents = i
              }
            }, o._unbindPostStartEvents = function () {
              this._boundPointerEvents && (this._boundPointerEvents.forEach((function (e) {
                t.removeEventListener(e, this)
              }), this), delete this._boundPointerEvents)
            }, o.onmousemove = function (t) {
              this._pointerMove(t, t)
            }, o.onpointermove = function (t) {
              t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
            }, o.ontouchmove = function (t) {
              var e = this.getTouch(t.changedTouches);
              e && this._pointerMove(t, e)
            }, o._pointerMove = function (t, e) {
              this.pointerMove(t, e)
            }, o.pointerMove = function (t, e) {
              this.emitEvent("pointerMove", [t, e])
            }, o.onmouseup = function (t) {
              this._pointerUp(t, t)
            }, o.onpointerup = function (t) {
              t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
            }, o.ontouchend = function (t) {
              var e = this.getTouch(t.changedTouches);
              e && this._pointerUp(t, e)
            }, o._pointerUp = function (t, e) {
              this._pointerDone(), this.pointerUp(t, e)
            }, o.pointerUp = function (t, e) {
              this.emitEvent("pointerUp", [t, e])
            }, o._pointerDone = function () {
              this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
            }, o._pointerReset = function () {
              this.isPointerDown = !1, delete this.pointerIdentifier
            }, o.pointerDone = i, o.onpointercancel = function (t) {
              t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
            }, o.ontouchcancel = function (t) {
              var e = this.getTouch(t.changedTouches);
              e && this._pointerCancel(t, e)
            }, o._pointerCancel = function (t, e) {
              this._pointerDone(), this.pointerCancel(t, e)
            }, o.pointerCancel = function (t, e) {
              this.emitEvent("pointerCancel", [t, e])
            }, n.getPointerPoint = function (t) {
              return {x: t.pageX, y: t.pageY}
            }, n
          }(s, t)
        }.apply(e, n)) || (t.exports = o)
      }(window)
    }, 3609: function (t) {
      "use strict";
      t.exports = jQuery
    }
  }, e = {};

  function i(n) {
    if (e[n]) return e[n].exports;
    var o = e[n] = {exports: {}};
    return t[n].call(o.exports, o, o.exports, i), o.exports
  }

  i.m = t, i.amdO = {}, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return i.d(e, {a: e}), e
  }, i.d = function (t, e) {
    for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, function () {
    var t = {736: 0}, e = [[3609], [2442], [8831], [4155], [1232], [450]], n = function () {
    };

    function o() {
      for (var n, o = 0; o < e.length; o++) {
        for (var s = e[o], a = !0, r = 1; r < s.length; r++) {
          var l = s[r];
          0 !== t[l] && (a = !1)
        }
        a && (e.splice(o--, 1), n = i(i.s = s[0]))
      }
      return 0 === e.length && (i.x(), i.x = function () {
      }), n
    }

    i.x = function () {
      i.x = function () {
      }, a = a.slice();
      for (var t = 0; t < a.length; t++) s(a[t]);
      return (n = o)()
    };
    var s = function (o) {
      for (var s, a, l = o[0], c = o[1], d = o[2], h = o[3], u = 0, f = []; u < l.length; u++) a = l[u], i.o(t, a) && t[a] && f.push(t[a][0]), t[a] = 0;
      for (s in c) i.o(c, s) && (i.m[s] = c[s]);
      for (d && d(i), r(o); f.length;) f.shift()();
      return h && e.push.apply(e, h), n()
    }, a = self.webpackChunkwebpack5 = self.webpackChunkwebpack5 || [], r = a.push.bind(a);
    a.push = s
  }(), i.x()
}();

(self.webpackChunkwebpack5 = self.webpackChunkwebpack5 || []).push([[143], {
  5262: function (e, t, n) {
    var a = {
      "./accordion": 5145,
      "./accordion.js": 5145,
      "./carousel": 5389,
      "./carousel.js": 5389,
      "./customScroll": 3744,
      "./customScroll.js": 3744,
      "./fancybox": 4571,
      "./fancybox.js": 4571,
      "./footer": 9845,
      "./footer.js": 9845,
      "./header": 7321,
      "./header.js": 7321,
      "./heroBanner": 1560,
      "./heroBanner.js": 1560,
      "./lazyload": 8075,
      "./lazyload.js": 8075,
      "./popup": 4611,
      "./popup.js": 4611,
      "./scrollTo": 8279,
      "./scrollTo.js": 8279,
      "./selectBox": 4267,
      "./selectBox.js": 4267,
      "./tabs": 8735,
      "./tabs.js": 8735,
      "./toggle": 7865,
      "./toggle.js": 7865
    };

    function o(e) {
      var t = i(e);
      return n(t)
    }

    function i(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      return a[e]
    }

    o.keys = function () {
      return Object.keys(a)
    }, o.resolve = i, e.exports = o, o.id = 5262
  }, 4986: function (e, t, n) {
    window.$ = window.jQuery = n(3609), document.addEventListener("DOMContentLoaded", (function (e) {
      window.myApp = {}, function (e) {
        for (var t = 0; t < e.length; t++) new (n(5262)("./".concat(e[t])).default)
      }(function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var a = e[n];
          -1 === t.indexOf(a.toString()) && t.push(a)
        }
        return t
      }(function () {
        for (var e = document.querySelectorAll("[data-module]"), t = [], n = 0; n < e.length; n++) for (var a = e[n].getAttribute("data-module").split(" "), o = 0; o < a.length; o++) 0 != a[o].trim().length && t.push(a[o]);
        return t
      }()))
    }))
  }, 5145: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.ele = ".js-accordion", this.init()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          var e = this;
          a(this.ele).each((function (t, n) {
            e.controller(n, a(n).attr("data-accordion-show1"))
          }))
        }
      }, {
        key: "controller", value: function (e, t) {
          var n = a(e).find(".js-accordion-item-btn"), o = "true" == t;
          n.on("click", (function () {
            a(this).closest(".js-accordion-item").toggleClass("is-opened").find(".js-accordion-item-content").stop().slideToggle(), !0 === o && a(this).closest(".js-accordion-item").siblings().removeClass("is-opened").find(".js-accordion-item-content").slideUp()
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 5389: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return c
      }
    });
    var a = n(8831), o = n.n(a), i = n(2442), r = n.n(i), s = n(3609);

    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    r().setJQuery(s), o()("flickity", r(), s);
    var c = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.mainSlider(), this.articleCarousel(), this.onLoad(), myApp.updateSlider = this.updateSlider.bind(this.data), myApp.updateSliderDraggable = this.updateDraggable.bind(this.data)
      }

      var t, n, a;
      return t = e, (n = [{
        key: "onLoad", value: function () {
          var e = this;
          s(window).on("load", (function (t) {
            setTimeout((function (t) {
              e.updateSlider()
            }), 10)
          }))
        }
      }, {
        key: "mainSlider", value: function () {
          s(".js-slider").length > 0 && s(".js-slider").flickity({pageDots: !0, prevNextButtons: !0, draggable: !0})
        }
      }, {
        key: "articleCarousel", value: function () {
          s(".article-carousel.flickity-enabled").each((function (e, t) {
            var n;
            s(window).on("resize", (function () {
              s(t).find(".flickity-viewport").css("height", ""), (n = r().data(t)).resize(), n.reposition()
            }))
          }))
        }
      }, {
        key: "updateSlider", value: function (e) {
          var t, n;
          (n = e ? s(e).find(".flickity-enabled") : s(".flickity-enabled")).length > 0 && n.each((function (e, n) {
            void 0 !== s(n).data("flickity") ? (s(n).flickity("resize"), s(n).flickity("reposition")) : ((t = r().data(n)).resize(), t.reposition())
          }))
        }
      }, {
        key: "updateDraggable", value: function (e) {
          var t;
          (t = e ? s(e).find(".flickity-enabled") : s(".flickity-enabled")).length > 0 && t.each((function (e, t) {
            void 0 !== s(t).data("flickity") ? s(t).flickity("updateDraggable") : r().data(t).updateDraggable()
          }))
        }
      }]) && l(t.prototype, n), a && l(t, a), e
    }()
  }, 3744: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return r
      }
    });
    n(450), n(1232);
    var a = n(3609);

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var r = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        o(this, e), this.data = n, this.options = t, this.initEvents(), myApp.dataXHR = this.getData.bind(this.data)
      }

      var t, n, r;
      return t = e, (n = [{
        key: "getData", value: function (e) {
          this.data = e
        }
      }, {
        key: "initEvents", value: function () {
          a(".js-custom-scroll").mCustomScrollbar(), a(".js-custom-scroll-outside").mCustomScrollbar({scrollbarPosition: "outside"})
        }
      }]) && i(t.prototype, n), r && i(t, r), e
    }()
  }, 4571: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    n(4155);
    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.video()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "video", value: function () {
          a(".js-fancybox-video").fancybox({
            smallBtn: !1,
            btnTpl: {
              close: '<button data-fancybox-close class="fancybox-close-btn popup__close"> <span></span> </button>',
              zoom: "  ",
              play: " ",
              arrowLeft: '<button data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left" title="Previous"><div><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.9237 0L14.4901 1.41563L18.0694 4.94531H0V7.05469H18.0694L14.4901 10.5844L15.9237 12L22 6L15.9237 0Z" fill="white"/> </svg></div></button> ',
              arrowRight: '<button data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right" title="Next"><div><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.9237 0L14.4901 1.41563L18.0694 4.94531H0V7.05469H18.0694L14.4901 10.5844L15.9237 12L22 6L15.9237 0Z" fill="white"/> </svg> </div></button>'
            },
            beforeShow: function () {
            },
            afterClose: function () {
            }
          })
        }
      }, {
        key: "fancyBoxHasText", value: function () {
          a(".fancybox").fancybox({
            autoPlay: !0,
            btnTpl: {close: '<button data-fancybox-close class="fancybox-close-btn popup__close"> <span></span> </button>'},
            baseTpl: '<div class="fancybox-container pop-up-video-caption" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="bg-white text-center"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div><div class="fancybox-stage"></div></div></div></div>',
            beforeShow: function () {
              window.innerWidth > 1199 && (a("html").css({"padding-right": 17}), a(".header").css({width: "calc(100% - 17px)"}), a(".header-sticky").css({
                width: "calc(100% - 17px)",
                transition: "0s"
              }))
            },
            afterClose: function () {
              window.innerWidth > 1199 && (a("html, body").removeClass("popup-active").removeAttr("style"), a(".header").removeAttr("style"), a(".header-sticky").css({
                width: "100%",
                transition: "0s"
              }), setTimeout((function () {
                a(".header-sticky").removeAttr("style")
              }), 300))
            }
          })
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 9845: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.expBtn = ".footer__expand-btn", this.navMB()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "navMB", value: function () {
          a(this.expBtn).on("click", (function (e) {
            var t = a(e.currentTarget), n = t.closest("li");
            n.hasClass("is-opened") ? (t.siblings("ul").slideUp(), n.removeClass("is-opened")) : (t.siblings("ul").slideDown(), n.addClass("is-opened"))
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 7321: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.header = ".header", this.hbg = ".header-mobile__hbg-btn", this.close = ".header-mobile__close-btn", this.menu = ".mobile-menu", this.expBtn = ".main-menu-mobile__expand-btn", this.searchMbBtn = ".header-mobile__search-btn", this.searchMB = ".header__top", this.headerStickyEle = ".header", this.menuInit(), window.innerWidth > 1199 ? (this.headerSticky(), this.search()) : (this.menuControllerMB(), this.searchMo())
      }

      var t, n, i;
      return t = e, (n = [{
        key: "menuInit", value: function () {
        }
      }, {
        key: "menuController", value: function () {
        }
      }, {
        key: "headerSticky", value: function () {
          var e = a(this.headerStickyEle), t = a(".header__main").offset().top;
          a(window).on("scroll", (function () {
            a(window).scrollTop() > t ? e.addClass("is-sticky") : e.removeClass("is-sticky")
          }))
        }
      }, {
        key: "search", value: function () {
          var e = a(".header-search");
          a(".header-search__btn").on("click", (function (t) {
            return !!e.hasClass("is-opened") || (e.addClass("is-opened"), !1)
          })), a(document).on("click", (function (t) {
            t.currentTarget, 0 === a(t.target).closest(".header-search").length && e.removeClass("is-opened")
          }))
        }
      }, {
        key: "searchMo", value: function () {
          var e = a(".header-mobile__search");
          a(".header-mobile__search-btn").on("click", (function (t) {
            return !!e.hasClass("is-opened") || (e.addClass("is-opened"), a(".header-mobile__logo-mb").css("opacity", "0"), !1)
          })), a(document).on("click", (function (t) {
            t.currentTarget, 0 === a(t.target).closest(".header-mobile__search").length && (e.removeClass("is-opened"), a(".header-mobile__logo-mb").removeAttr("style"))
          }))
        }
      }, {
        key: "menuControllerMB", value: function () {
          var e = this, t = (a(this.header), a(this.hbg)), n = a(this.close), o = a(this.expBtn);
          a(this.searchMbBtn), t.on("click", (function (t) {
            a(t.currentTarget).hasClass("is-opened") ? e.closeMenu(e.hbg, e.menu) : e.openMenu(e.hbg, e.menu)
          })), n.on("click", (function (t) {
            a(t.currentTarget), e.closeMenu(e.hbg, e.menu)
          })), o.on("click", (function (e) {
            var t = a(e.currentTarget), n = t.closest("li");
            n.hasClass("is-opened") ? (t.siblings("ul").slideUp(), n.removeClass("is-opened")) : (t.siblings("ul").slideDown(), n.addClass("is-opened"))
          })), a(".main-menu-mobile a").on("click", (function (t) {
            a(t.currentTarget).attr("href").split("#")[1] && e.closeMenu(e.hbg, e.menu)
          }))
        }
      }, {
        key: "openMenu", value: function (e, t) {
          var n = a(t), o = a(e), i = a(this.close);
          if (a(".popup").hide(), n.addClass("is-opened"), o.addClass("is-opened"), i.addClass("is-opened"), a("html, body").addClass("popup-active").css({overflow: "hidden"}), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var r = a(window).scrollTop();
            a("body").addClass("body-fixed").attr("last-posY", r), a("body").css("top", -r)
          }
        }
      }, {
        key: "closeMenu", value: function (e, t) {
          var n = a(t), o = a(e), i = a(this.close);
          if (n.removeClass("is-opened"), o.removeClass("is-opened"), i.removeClass("is-opened"), a("html, body").removeClass("popup-active").removeAttr("style"), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var r = a("body").attr("last-posY");
            a("body").removeClass("body-fixed").removeAttr("style"), a(window).scrollTop(r)
          }
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 1560: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return c
      }
    });
    var a = n(8831), o = n.n(a), i = n(2442), r = n.n(i), s = n(3609);

    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    r().setJQuery(s), o()("flickity", r(), s);
    var c = function () {
      function e() {
        var t = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.ele = ".hero-banner__list", this.init(), s(window).on("load", (function () {
          t.playBtnPosition()
        }))
      }

      var t, n, a;
      return t = e, (n = [{
        key: "init", value: function () {
          var e, t = "", n = s(".hero-banner__play-btn"), a = new (r())(this.ele, {
            prevNextButtons: !1,
            autoPlay: 4500,
            pauseAutoPlayOnHover: !1,
            wrapAround: !0,
            adaptiveHeight: !0,
            on: {
              ready: function () {
                o(0)
              }
            }
          });

          function o(a) {
            (e = s(".hero-banner__cell").eq(a)).find(".hero-banner__video__link").length > 0 ? (t = e.find(".hero-banner__video__link").attr("href"), n.attr("href", t).addClass("is-visible")) : n.removeClass("is-visible")
          }

          a.on("change", (function (e) {
            o(e)
          })), s(window).on("load", (function () {
            a.resize(), a.reposition()
          }))
        }
      }, {
        key: "pauseAllVideo", value: function () {
        }
      }, {
        key: "playBtnPosition", value: function () {
          var e = s(".hero-banner .flickity-page-dots"), t = s(".hero-banner__play-btn"), n = 0, a = 0, o = 0;

          function i() {
            n = e.offset().left + 30, a = e.offset().top + 10, window.innerWidth < 1200 && (a -= 60), o = e.width(), t.css({
              left: n + o,
              top: a
            })
          }

          s(".hero-banner__video__link").length > 0 && i(), s(window).on("resize", (function () {
            i(), setTimeout((function () {
              i()
            }), 300)
          }))
        }
      }]) && l(t.prototype, n), a && l(t, a), e
    }()
  }, 8075: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return s
      }
    });
    var a = n(7059), o = n.n(a), i = n(3609);

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var s = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init(), myApp.reInitLozad = this.init.bind(this)
      }

      var t, n, a;
      return t = e, (n = [{
        key: "init", value: function () {
          (!1 in window && !1 in window && !1 in window.IntersectionObserverEntry.prototype || 1 == this.isIE11()) && i(".lozad").each((function () {
            i(this).addClass("loaded"), i(this).attr("data-src") && i(this).attr("src", i(this).attr("data-src")), i(this).attr("data-background-image") && i(this).css("background-image", "url(".concat(i(this).attr("data-background-image"), ")"))
          })), o()(".lozad", {
            rootMargin: "0px 0px", loaded: function (e) {
              i(e).attr("data-background-image") && e.classList.add("loaded"), e.onload = function () {
                e.classList.add("loaded")
              }
            }
          }).observe(), i("html").hasClass("ie11") && i(".lozad").addClass("loaded")
        }
      }, {
        key: "isIE11", value: function () {
          return !!("Microsoft Internet Explorer" == navigator.appName || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/) || void 0 !== i.browser && 1 == i.browser.msi)
        }
      }]) && r(t.prototype, n), a && r(t, a), e
    }()
  }, 4611: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.action(), myApp.openPopup = this.openPopup.bind(this), myApp.closePopup = this.closePopup.bind(this)
      }

      var t, n, i;
      return t = e, (n = [{
        key: "openPopup", value: function (e) {
          if (a(".popup").hide(), a(e).fadeIn(200).addClass("is-opened"), a(window).width() < window.innerWidth && (a("html").css({"padding-right": 17}), a("html, body").addClass("popup-is-overflowing")), a("html, body").addClass("popup-active").css({overflow: "hidden"}), a(e).attr("data-url")) {
            var t = a(e).data("url");
            window.history.pushState({urlPath: ""}, "", t)
          }
          if (1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var n = a(window).scrollTop();
            a("body").addClass("body-fixed").attr("last-posY", n), a("body").css("top", -n)
          }
          a(".popup .flickity-enabled").flickity("resize")
        }
      }, {
        key: "closePopup", value: function (e) {
          if (a(e).find(".popup__content"), a(e).find(".popup__close"), a(".wrapper"), a(e).fadeOut(300).removeClass("is-opened"), setTimeout((function () {
            a("html, body").removeClass("popup-active popup-is-overflowing").removeAttr("style"), a(e).hasClass("js-close-youtube") && a(e).find("iframe").remove()
          }), 300), a(e).attr("data-url") && (a(e).data("url"), window.history.pushState({urlPath: ""}, "", " ")), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var t = a("body").attr("last-posY");
            a("body").removeClass("body-fixed").removeAttr("style"), a(window).scrollTop(t)
          }
        }
      }, {
        key: "action", value: function () {
          var e = this;
          a(document).on("click", ".popup__close, .js-popup-close", (function (t) {
            var n = t.currentTarget, o = "#" + a(n).parents(".popup").attr("id");
            e.closePopup(o), t.preventDefault()
          })), a(".popup").click((function (t) {
            var n = t.currentTarget;
            if (0 === a(t.target).closest(".popup__container").length) {
              if (a(n).hasClass("disable-outside-close")) return !1;
              var o = "#" + a(t.target).closest(".popup").attr("id");
              e.closePopup(o)
            }
          })), a(document).on("click", ".js-popup-open", (function (t) {
            var n = t.currentTarget, o = a(n).attr("href") ? a(n).attr("href") : a(n).attr("data-target");
            e.openPopup(o), a(n).hasClass("js-active-part") && e.activePart(o, a(n).closest(".parts-gallery__item ").index()), t.preventDefault()
          }))
        }
      }, {
        key: "activePart", value: function (e, t) {
          a(e).find(".popup-parts__carousel").flickity("select", t, !1, !0)
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 8279: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init(), this.scrollToTop(), myApp.scrollTo = this.scrollTo.bind(this)
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          var e, t, n = this;
          a(".js-scroll-to").on("click", (function (o) {
            var i = a(o.currentTarget);
            return e = (e = i.attr("data-href") ? i.attr("data-href") : i.attr("data-target")).substring(e.indexOf("#")), t = i.attr("data-offset") ? i.attr("data-offset") : 0, n.scrollTo(e, t), o.preventDefault(), !1
          }))
        }
      }, {
        key: "scrollTo", value: function (e, t) {
          var n = 0, o = a(".header__menu").outerHeight();
          t && (n = parseInt(t)), window.innerWidth < 1200 && (o = a(".header-mobile").outerHeight()), window.innerWidth < 992 && a(".research-achievements__nav").length > 0 && (o = a(".header-mobile").outerHeight() + a(".research-achievements__nav").outerHeight()), a("body,html").stop().animate({scrollTop: a(e).offset().top + n - o}, 800)
        }
      }, {
        key: "scrollToTop", value: function () {
          var e = a(".js-scroll-to-top"), t = window.innerHeight;
          a(window).on("scroll", (function (n) {
            a(window).scrollTop() > t ? e.addClass("is-shown") : e.removeClass("is-shown")
          })), e.on("click", (function (e) {
            a("body,html").stop().animate({scrollTop: 0}, 800)
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 4267: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.ele = ".js-selectBox", this.eleClass = "select-box", this.init(), this.controller(), this.clickBodyToHideDropDown(), myApp.selectBoxInit = this.init.bind(this), myApp.selectBoxDestroy = this.destroy.bind(this), myApp.selectBoxReInit = this.reInit.bind(this)
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          var e = this;
          a(this.ele).each((function (t, n) {
            0 != a(n).find(e.eleClass + "__select").length || a(n).hasClass(e.eleClass + "__select") || e.initSelect(n)
          }))
        }
      }, {
        key: "initSelect", value: function (e) {
          var t, n = a(e), o = n.children(), i = n.children("option:selected");
          for (n.addClass(this.eleClass + "__select").wrap('<div class="'.concat(this.eleClass, '"></div>')), n.before('<span class="'.concat(this.eleClass, '__current">').concat(i.text(), "</span>")), n.before('<ul class="'.concat(this.eleClass, '__dropdown"></ul>')), t = 0; t < o.length; t++) t != i.index() ? n.prev("ul").append('<li data-value="'.concat(o.eq(t).attr("value"), '">').concat(o.eq(t).text(), "</li>")) : n.prev("ul").append('<li class="active" data-value="'.concat(o.eq(t).attr("value"), '">').concat(o.eq(t).text(), "</li>"))
        }
      }, {
        key: "controller", value: function () {
          var e = this;
          a("." + this.eleClass).find("li").on("click", (function (t) {
            var n = a(t.currentTarget);
            n.closest("." + e.eleClass).find(".".concat(e.eleClass, "__select")).val(n.attr("data-value")).trigger("change")
          })), a("." + this.eleClass).find(".".concat(this.eleClass, "__current")).on("click", (function (t) {
            var n = a(t.currentTarget).closest("." + e.eleClass);
            n.hasClass("open") ? a(".".concat(e.eleClass, ".open")).removeClass("open") : (a(".".concat(e.eleClass, ".open")).removeClass("open"), n.addClass("open"))
          })), a(this.ele).on("change", (function (t) {
            var n = a(t.currentTarget), o = n.val();
            n.siblings(".".concat(e.eleClass, "__dropdown")).find('li[data-value="' + o + '"]').addClass("active").siblings("li").removeClass("active"), n.siblings(".".concat(e.eleClass, "__current")).html(n.siblings(".".concat(e.eleClass, "__dropdown")).find(".active").html())
          }))
        }
      }, {
        key: "clickBodyToHideDropDown", value: function () {
          var e = this;
          a(document).on("click", (function (t) {
            0 == a(t.target).closest(".".concat(e.eleClass, "__current")).length && a(".".concat(e.eleClass)).removeClass("open")
          }))
        }
      }, {
        key: "destroy", value: function () {
          var e = a(this.ele).removeClass(this.eleClass + "__select");
          e.siblings().remove(), e.unwrap()
        }
      }, {
        key: "reInit", value: function () {
          this.destroy(), this.init(), this.controller()
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 8735: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init(), this.controller()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          a(".tabs").each((function () {
            var e = a(this).find(".tabs__nav > li"), t = a(this).find(".tabs__content > li");
            0 === e.filter(".active").length && e.eq(0).addClass("active"), 0 === t.filter(".active").length && t.filter(":first-child").addClass("active")
          }))
        }
      }, {
        key: "controller", value: function () {
          var e = this;
          a(".tabs__nav a, .tabs__nav button").click((function (t) {
            var n = a(t.currentTarget).attr("href") ? a(t.currentTarget).attr("href") : a(t.currentTarget).attr("data-target"),
              o = a(t.currentTarget).closest(".tabs");
            e.changeTab(o, n), t.preventDefault()
          }))
        }
      }, {
        key: "changeTab", value: function (e, t) {
          var n = e.find('.tabs__nav a[href="' + t + '"], .tabs__nav button[data-target="' + t + '"], .tabs__nav button[href="' + t + '"]');
          "LI" == n.parent().prop("tagName") ? n.parent().addClass("active").siblings().removeClass("active") : n.addClass("active").siblings().removeClass("active"), e.find(t).fadeIn().css("display", "block").siblings().hide(), a(e).find(t).find(".flickity-slider").length > 0 && (myApp.updateSlider(e), myApp.updateSliderDraggable(e))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 7865: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.toggleClass(), this.toggleSlide()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "toggleClass", value: function () {
          var e, t;
          a(".js-toggle-class").on("click", (function (n) {
            (t = a(n.currentTarget)).toggleClass("is-toggled"), e = t.attr("data-target") ? t.attr("data-target") : t.attr("href"), a(e).toggleClass("is-toggled")
          }))
        }
      }, {
        key: "toggleSlide", value: function () {
          var e, t;
          a(".js-toggle-slide").on("click", (function (n) {
            (t = a(n.currentTarget)).toggleClass("is-toggled"), e = t.attr("data-target") ? t.attr("data-target") : t.attr("href"), a(e).toggleClass("is-toggled").stop().slideToggle();
            var o = t.attr("text-open"), i = t.attr("text-close");
            if (i && o) {
              var r = t.hasClass("is-toggled") ? i : o;
              t.find(".js-toggle-slide-text-update").text(r)
            }
            n.preventDefault()
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 7059: function (e) {
    e.exports = function () {
      "use strict";
      var e = "undefined" != typeof document && document.documentMode, t = {
        rootMargin: "0px", threshold: 0, load: function (t) {
          if ("picture" === t.nodeName.toLowerCase()) {
            var n = t.querySelector("img"), a = !1;
            null === n && (n = document.createElement("img"), a = !0), e && t.getAttribute("data-iesrc") && (n.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (n.alt = t.getAttribute("data-alt")), a && t.append(n)
          }
          if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
            for (var o = t.children, i = void 0, r = 0; r <= o.length - 1; r++) (i = o[r].getAttribute("data-src")) && (o[r].src = i);
            t.load()
          }
          t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
          var s = ",";
          if (t.getAttribute("data-background-delimiter") && (s = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(s).join("'),url('") + "')"; else if (t.getAttribute("data-background-image-set")) {
            var l = t.getAttribute("data-background-image-set").split(s), c = l[0].substr(0, l[0].indexOf(" ")) || l[0];
            c = -1 === c.indexOf("url(") ? "url(" + c + ")" : c, 1 === l.length ? t.style.backgroundImage = c : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + c + "; background-image: -webkit-image-set(" + l + "); background-image: image-set(" + l + ")")
          }
          t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
        }, loaded: function () {
        }
      };

      function n(e) {
        e.setAttribute("data-loaded", !0)
      }

      var a = function (e) {
        return "true" === e.getAttribute("data-loaded")
      }, o = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
        return e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e)
      };
      return function () {
        var e, i, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
          s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, l = Object.assign({}, t, s),
          c = l.root, u = l.rootMargin, d = l.threshold, f = l.load, p = l.loaded, h = void 0;
        "undefined" != typeof window && window.IntersectionObserver && (h = new IntersectionObserver((e = f, i = p, function (t, o) {
          t.forEach((function (t) {
            (0 < t.intersectionRatio || t.isIntersecting) && (o.unobserve(t.target), a(t.target) || (e(t.target), n(t.target), i(t.target)))
          }))
        }), {root: c, rootMargin: u, threshold: d}));
        for (var v, b = o(r, c), g = 0; g < b.length; g++) (v = b[g]).getAttribute("data-placeholder-background") && (v.style.background = v.getAttribute("data-placeholder-background"));
        return {
          observe: function () {
            for (var e = o(r, c), t = 0; t < e.length; t++) a(e[t]) || (h ? h.observe(e[t]) : (f(e[t]), n(e[t]), p(e[t])))
          }, triggerLoad: function (e) {
            a(e) || (f(e), n(e), p(e))
          }, observer: h
        }
      }
    }()
  }
}, 0, [[4986, 736]]]);

$(document).ready(function () {
  CommonController.init();
});

window.onscroll = function() {
  scrollFunction()
};
// When the user scrolls down 20px from the top of the document, show the button to-top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('.to-top-btn').show();
  } else {
    $('.to-top-btn').hide();
  }
}
// End handle toggle btn to-top


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if(lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

var CommonController = {
  init: function () {
    CommonController.collapseMenu();
    CommonController.hanldeClickScrollToTop();
    CommonController.changeLanguage();
    CommonController.changeLanguage2();
  },

  collapseMenu: function () {
    $("#toggle-navbar").click(function(e){
      e.preventDefault()
      const element = $("#nav-items");
      if (element.hasClass("block")) {
        element.removeClass("block");
        element.addClass("hidden");
      } else {
        element.addClass("block");
        element.removeClass("hidden");
      }
    });
  },

  hanldeClickScrollToTop: function () {
    $('.to-top-btn').click(function (speed) {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
  },

  changeLanguage: function (lang) {
    $('.multi_lang').click(function () {
      var lang = $(this).data("text");
      let langOrigin = $("input[name='my_language']").val();

      if (lang == langOrigin) {
        return;
      }

      var url = $('input[name="url-change-language"]').val();
      var csrf = $('meta[name="csrf-token"]').attr('content');

      let data = {
        'lang': lang
      };

      // showLoading();

      $.ajax({
        type: 'POST',
        url: url,
        headers: {'X-CSRF-TOKEN': csrf},
        data: data,
        cache: false,
        success: function (response) {
          if (response.status == 200) {
            console.log('Change language successfully ... ')
          } else {
            console.log('Change language error ... ')
          }
          // hideLoading();
          location.reload();
        },
        error: function (e) {
          console.log('Change language error ... ')
          // hideLoading();
        }
      });
    })
  },
  // change language with library: stichoza/google-translate-php
  changeLanguage2: function() {
    var url = $('#changeLang').val();
    $(".multi_lang").click(function(){
      var lang = $(this).data("text");
      window.location.href = url + "?locale="+ lang;
    });
  },
};
