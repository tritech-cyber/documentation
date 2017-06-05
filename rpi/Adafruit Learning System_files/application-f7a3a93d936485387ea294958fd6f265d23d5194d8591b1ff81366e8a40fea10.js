;window.Modernizr=(function(window,document,undefined){var version='2.6.2',Modernizr={},enableClasses=true,docElement=document.documentElement,mod='modernizr',modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement('input'),smile=':)',toString={}.toString,prefixes=' -webkit- -moz- -o- -ms- '.split(' '),omPrefixes='Webkit Moz O ms',cssomPrefixes=omPrefixes.split(' '),domPrefixes=omPrefixes.toLowerCase().split(' '),ns={'svg':'http://www.w3.org/2000/svg'},tests={},inputs={},attrs={},classes=[],slice=classes.slice,featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement('div'),body=document.body,fakeBody=body||document.createElement('body');if(parseInt(nodes,10)){while(nodes--){node=document.createElement('div');node.id=testnames?testnames[nodes]:mod+(nodes+ 1);div.appendChild(node);}}
style=['&#173;','<style id="s',mod,'">',rule,'</style>'].join('');div.id=mod;(body?div:fakeBody).innerHTML+=style;fakeBody.appendChild(div);if(!body){fakeBody.style.background='';fakeBody.style.overflow='hidden';docOverflow=docElement.style.overflow;docElement.style.overflow='hidden';docElement.appendChild(fakeBody);}
ret=callback(div,rule);if(!body){fakeBody.parentNode.removeChild(fakeBody);docElement.style.overflow=docOverflow;}else{div.parentNode.removeChild(div);}
return!!ret;},isEventSupported=(function(){var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};function isEventSupported(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||'div');eventName='on'+ eventName;var isSupported=eventName in element;if(!isSupported){if(!element.setAttribute){element=document.createElement('div');}
if(element.setAttribute&&element.removeAttribute){element.setAttribute(eventName,'');isSupported=is(element[eventName],'function');if(!is(element[eventName],'undefined')){element[eventName]=undefined;}
element.removeAttribute(eventName);}}
element=null;return isSupported;}
return isEventSupported;})(),_hasOwnProperty=({}).hasOwnProperty,hasOwnProp;if(!is(_hasOwnProperty,'undefined')&&!is(_hasOwnProperty.call,'undefined')){hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property);};}
else{hasOwnProp=function(object,property){return((property in object)&&is(object.constructor.prototype[property],'undefined'));};}
if(!Function.prototype.bind){Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function"){throw new TypeError();}
var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F();var result=target.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result){return result;}
return self;}else{return target.apply(that,args.concat(slice.call(arguments)));}};return bound;};}
function setCss(str){mStyle.cssText=str;}
function setCssAll(str1,str2){return setCss(prefixes.join(str1+';')+(str2||''));}
function is(obj,type){return typeof obj===type;}
function contains(str,substr){return!!~(''+ str).indexOf(substr);}
function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined){return prefixed=='pfx'?prop:true;}}
return false;}
function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined){if(elem===false)return props[i];if(is(item,'function')){return item.bind(elem||obj);}
return item;}}
return false;}
function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+ prop.slice(1),props=(prop+' '+ cssomPrefixes.join(ucProp+' ')+ ucProp).split(' ');if(is(prefixed,"string")||is(prefixed,"undefined")){return testProps(props,prefixed);}else{props=(prop+' '+(domPrefixes).join(ucProp+' ')+ ucProp).split(' ');return testDOMProps(props,prefixed,elem);}}tests['flexbox']=function(){return testPropsAll('flexWrap');};tests['canvas']=function(){var elem=document.createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'));};tests['canvastext']=function(){return!!(Modernizr['canvas']&&is(document.createElement('canvas').getContext('2d').fillText,'function'));};tests['webgl']=function(){return!!window.WebGLRenderingContext;};tests['touch']=function(){var bool;if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){bool=true;}else{injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''),function(node){bool=node.offsetTop===9;});}
return bool;};tests['geolocation']=function(){return'geolocation'in navigator;};tests['postmessage']=function(){return!!window.postMessage;};tests['websqldatabase']=function(){return!!window.openDatabase;};tests['indexedDB']=function(){return!!testPropsAll("indexedDB",window);};tests['hashchange']=function(){return isEventSupported('hashchange',window)&&(document.documentMode===undefined||document.documentMode>7);};tests['history']=function(){return!!(window.history&&history.pushState);};tests['draganddrop']=function(){var div=document.createElement('div');return('draggable'in div)||('ondragstart'in div&&'ondrop'in div);};tests['websockets']=function(){return'WebSocket'in window||'MozWebSocket'in window;};tests['rgba']=function(){setCss('background-color:rgba(150,255,150,.5)');return contains(mStyle.backgroundColor,'rgba');};tests['hsla']=function(){setCss('background-color:hsla(120,40%,100%,.5)');return contains(mStyle.backgroundColor,'rgba')||contains(mStyle.backgroundColor,'hsla');};tests['multiplebgs']=function(){setCss('background:url(https://),url(https://),red url(https://)');return(/(url\s*\(.*?){3}/).test(mStyle.background);};tests['backgroundsize']=function(){return testPropsAll('backgroundSize');};tests['borderimage']=function(){return testPropsAll('borderImage');};tests['borderradius']=function(){return testPropsAll('borderRadius');};tests['boxshadow']=function(){return testPropsAll('boxShadow');};tests['textshadow']=function(){return document.createElement('div').style.textShadow==='';};tests['opacity']=function(){setCssAll('opacity:.55');return(/^0.55$/).test(mStyle.opacity);};tests['cssanimations']=function(){return testPropsAll('animationName');};tests['csscolumns']=function(){return testPropsAll('columnCount');};tests['cssgradients']=function(){var str1='background-image:',str2='gradient(linear,left top,right bottom,from(#9f9),to(white));',str3='linear-gradient(left top,#9f9, white);';setCss((str1+'-webkit- '.split(' ').join(str2+ str1)+
prefixes.join(str3+ str1)).slice(0,-str1.length));return contains(mStyle.backgroundImage,'gradient');};tests['cssreflections']=function(){return testPropsAll('boxReflect');};tests['csstransforms']=function(){return!!testPropsAll('transform');};tests['csstransforms3d']=function(){var ret=!!testPropsAll('perspective');if(ret&&'webkitPerspective'in docElement.style){injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',function(node,rule){ret=node.offsetLeft===9&&node.offsetHeight===3;});}
return ret;};tests['csstransitions']=function(){return testPropsAll('transition');};tests['fontface']=function(){var bool;injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById('smodernizr'),sheet=style.sheet||style.styleSheet,cssText=sheet?(sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||''):'';bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(' ')[0])===0;});return bool;};tests['generatedcontent']=function(){var bool;injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''),function(node){bool=node.offsetHeight>=3;});return bool;};tests['video']=function(){var elem=document.createElement('video'),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,'');bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');}}catch(e){}
return bool;};tests['audio']=function(){var elem=document.createElement('audio'),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');bool.mp3=elem.canPlayType('audio/mpeg;').replace(/^no$/,'');bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');bool.m4a=(elem.canPlayType('audio/x-m4a;')||elem.canPlayType('audio/aac;')).replace(/^no$/,'');}}catch(e){}
return bool;};tests['localstorage']=function(){try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return true;}catch(e){return false;}};tests['sessionstorage']=function(){try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return true;}catch(e){return false;}};tests['webworkers']=function(){return!!window.Worker;};tests['applicationcache']=function(){return!!window.applicationCache;};tests['svg']=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,'svg').createSVGRect;};tests['inlinesvg']=function(){var div=document.createElement('div');div.innerHTML='<svg/>';return(div.firstChild&&div.firstChild.namespaceURI)==ns.svg;};tests['smil']=function(){return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns.svg,'animate')));};tests['svgclippaths']=function(){return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns.svg,'clipPath')));};function webforms(){Modernizr['input']=(function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem);}
if(attrs.list){attrs.list=!!(document.createElement('datalist')&&window.HTMLDataListElement);}
return attrs;})('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));Modernizr['inputtypes']=(function(props){for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){inputElem.setAttribute('type',inputElemType=props[i]);bool=inputElem.type!=='text';if(bool){inputElem.value=smile;inputElem.style.cssText='position:absolute;visibility:hidden;';if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=='textfield'&&(inputElem.offsetHeight!==0);docElement.removeChild(inputElem);}else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){bool=inputElem.checkValidity&&inputElem.checkValidity()===false;}else{bool=inputElem.value!=smile;}}
inputs[props[i]]=!!bool;}
return inputs;})('search tel url email datetime date month week time datetime-local number range color'.split(' '));}
for(var feature in tests){if(hasOwnProp(tests,feature)){featureName=feature.toLowerCase();Modernizr[featureName]=tests[feature]();classes.push((Modernizr[featureName]?'':'no-')+ featureName);}}
Modernizr.input||webforms();Modernizr.addTest=function(feature,test){if(typeof feature=='object'){for(var key in feature){if(hasOwnProp(feature,key)){Modernizr.addTest(key,feature[key]);}}}else{feature=feature.toLowerCase();if(Modernizr[feature]!==undefined){return Modernizr;}
test=typeof test=='function'?test():test;if(typeof enableClasses!=="undefined"&&enableClasses){docElement.className+=' '+(test?'':'no-')+ feature;}
Modernizr[feature]=test;}
return Modernizr;};setCss('');modElem=inputElem=null;;(function(window,document){var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+ cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements;}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data;}
return data;}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName);}
if(!data){data=getExpandoData(ownerDocument);}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode();}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();}else{node=data.createElem(nodeName);}
return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node;}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment();}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i]);}
return clone;}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag();}
ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName);}
return createElement(nodeName,ownerDocument,data);};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+
getElements().join().replace(/\w+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+ nodeName+'")';})+');return n}')(html5,data.frag);}function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document;}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}'+'mark{background:#FF0;color:#000}');}
if(!supportsUnknownElements){shivMethods(ownerDocument,data);}
return ownerDocument;}var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video','shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document);}(this,document));Modernizr._version=version;Modernizr._prefixes=prefixes;Modernizr._domPrefixes=domPrefixes;Modernizr._cssomPrefixes=cssomPrefixes;Modernizr.hasEvent=isEventSupported;Modernizr.testProp=function(prop){return testProps([prop]);};Modernizr.testAllProps=testPropsAll;Modernizr.testStyles=injectElementWithStyles;Modernizr.prefixed=function(prop,obj,elem){if(!obj){return testPropsAll(prop,'pfx');}else{return testPropsAll(prop,obj,elem);}};docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,'$1$2')+
(enableClasses?' js '+ classes.join(' '):'');return Modernizr;})(this,this.document);(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};;(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var deletedIds=[];var slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
version="1.11.2",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+ this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:deletedIds.sort,splice:deletedIds.splice};jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+ Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!jQuery.isArray(obj)&&(obj- parseFloat(obj)+ 1)>=0;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
if(support.ownLast){for(key in obj){return hasOwn.call(obj,key);}}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(indexOf){return indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+ i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++];}
if(len!==len){while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:function(){return+(new Date());},support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+ name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length- 1)in obj;}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+ 1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+ whitespace+"*("+ characterEncoding+")(?:"+ whitespace+"*([*^$|!~]?=)"+ whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ identifier+"))|)"+ whitespace+"*\\]",pseudos=":("+ characterEncoding+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+ attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+ whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ whitespace+"+$","g"),rcomma=new RegExp("^"+ whitespace+"*,"+ whitespace+"*"),rcombinators=new RegExp("^"+ whitespace+"*([>+~]|"+ whitespace+")"+ whitespace+"*"),rattributeQuotes=new RegExp("="+ whitespace+"*([^\\]'\"]*?)"+ whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+ identifier+"$"),matchExpr={"ID":new RegExp("^#("+ characterEncoding+")"),"CLASS":new RegExp("^\\.("+ characterEncoding+")"),"TAG":new RegExp("^("+ characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+ attributes),"PSEUDO":new RegExp("^"+ pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+ whitespace+"*(?:([+-]|)"+ whitespace+"*(\\d+)|))"+ whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+ booleans+")$","i"),"needsContext":new RegExp("^"+ whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+ whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+ whitespace+"?|("+ whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+ escaped- 0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+ 0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j- 1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];nodeType=context.nodeType;if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType!==1&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+ nid+"'] ";i=groups.length;while(i--){groups[i]=nid+ toSelector(groups[i]);}
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=doc.documentElement;parent=doc.defaultView;if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
documentIsHTML=!isXML(doc);support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(doc.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+ expando+"'></a>"+"<select id='"+ expando+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+ whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+ whitespace+"*(?:value|"+ booleans+")");}
if(!div.querySelectorAll("[id~="+ expando+"-]").length){rbuggyQSA.push("~=");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!div.querySelectorAll("a#"+ expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+ whitespace+"*[*^$|!~]?=");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)- indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)- indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+ msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+ match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+ match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length- excess)- unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+ whitespace+")"+ className+"("+ whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+ result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+ 1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+ pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+ lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length- 1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+ length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+ length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+ length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{outerCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i- 1).concat({value:tokens[i- 2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context!==document&&context;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+ setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+ expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+ selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,document=window.document,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length- 1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});jQuery.fn.extend({has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.unique(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret);}
if(rparentsprev.test(name)){ret=ret.reverse();}}
return this.pushStack(ret);};});var rnotwhite=(/\S+/g);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];firingLength=0;return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}}
function completed(){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};var strundefined=typeof undefined;var i;for(i in jQuery(support)){break;}
support.ownLast=i!=="0";support.inlineBlockNeedsLayout=false;jQuery(function(){var val,div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout=val=div.offsetWidth===3;if(val){body.style.zoom=1;}}
body.removeChild(container);});(function(){var div=document.createElement("div");if(support.deleteExpando==null){support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}}
div=null;})();jQuery.acceptData=function(elem){var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],nodeType=+elem.nodeType||1;return nodeType!==1&&nodeType!==9?false:!noData||noData!==true&&elem.getAttribute("classid")===noData;};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+ key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
if(!id){if(isNode){id=elem[internalKey]=deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
i=name.length;while(i--){delete thisCache[name[i]];}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
jQuery.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;};var rcheckableType=(/^(?:checkbox|radio)$/i);(function(){var input=document.createElement("input"),div=document.createElement("div"),fragment=document.createDocumentFragment();div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";input.type="checkbox";input.checked=true;fragment.appendChild(input);support.appendChecked=input.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;fragment.appendChild(div);div.innerHTML="<input type='radio' checked='checked' name='t'/>";support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;support.noCloneEvent=true;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
if(support.deleteExpando==null){support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}}})();(function(){var i,eventName,div=document.createElement("div");for(i in{submit:true,change:true,focusin:true}){eventName="on"+ i;if(!(support[i+"Bubbles"]=eventName in window)){div.setAttribute(eventName,"t");support[i+"Bubbles"]=div.attributes[eventName].expando===false;}}
div=null;})();var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+ type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+ types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+ namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+ jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+ type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+ namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+ type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+ type;if(elem.detachEvent){if(typeof elem[name]===strundefined){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
jQuery._data(doc,fix,(attaches||0)+ 1);},teardown:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix)- 1;if(!attaches){doc.removeEventListener(orig,handler,true);jQuery._removeData(doc,fix);}else{jQuery._data(doc,fix,attaches);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+ handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+ nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+ elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+ elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!support.noCloneEvent||!support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+ elem.replace(rxhtmlTag,"<$1></$2>")+ wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
deletedIds.push(id);}}}}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(support.htmlSerialize||!rnoshimcache.test(value))&&(support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var arg=arguments[0];this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}});return arg&&(arg.length||arg.nodeType)?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback){args=concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l- 1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length- 1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length- 1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={};function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
(function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks=function(){if(shrinkWrapBlocksVal!=null){return shrinkWrapBlocksVal;}
shrinkWrapBlocksVal=false;var div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width="5px";shrinkWrapBlocksVal=div.offsetWidth!==3;}
body.removeChild(container);return shrinkWrapBlocksVal;};})();var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+ pnum+")(?!px)[a-z%]+$","i");var getStyles,curCSS,rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles=function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);}
return window.getComputedStyle(elem,null);};curCSS=function(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret===undefined?ret:ret+"";};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,computed){var left,rs,rsLeft,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed[name]:undefined;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===undefined?ret:ret+""||"auto";};}
function addGetHookIf(conditionFn,hookFn){return{get:function(){var condition=conditionFn();if(condition==null){return;}
if(condition){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
(function(){var div,style,a,pixelPositionVal,boxSizingReliableVal,reliableHiddenOffsetsVal,reliableMarginRightVal;div=document.createElement("div");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];style=a&&a.style;if(!style){return;}
style.cssText="float:left;opacity:.5";support.opacity=style.opacity==="0.5";support.cssFloat=!!style.cssFloat;div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";support.boxSizing=style.boxSizing===""||style.MozBoxSizing===""||style.WebkitBoxSizing==="";jQuery.extend(support,{reliableHiddenOffsets:function(){if(reliableHiddenOffsetsVal==null){computeStyleTests();}
return reliableHiddenOffsetsVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return boxSizingReliableVal;},pixelPosition:function(){if(pixelPositionVal==null){computeStyleTests();}
return pixelPositionVal;},reliableMarginRight:function(){if(reliableMarginRightVal==null){computeStyleTests();}
return reliableMarginRightVal;}});function computeStyleTests(){var div,body,container,contents;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";pixelPositionVal=boxSizingReliableVal=false;reliableMarginRightVal=true;if(window.getComputedStyle){pixelPositionVal=(window.getComputedStyle(div,null)||{}).top!=="1%";boxSizingReliableVal=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";contents=div.appendChild(document.createElement("div"));contents.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight=contents.style.width="0";div.style.width="1px";reliableMarginRightVal=!parseFloat((window.getComputedStyle(contents,null)||{}).marginRight);div.removeChild(contents);}
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";contents=div.getElementsByTagName("td");contents[0].style.cssText="margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;if(reliableHiddenOffsetsVal){contents[0].style.display="";contents[1].style.display="none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;}
body.removeChild(container);}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};var
ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+ pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+ pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+ name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+ capName;if(name in style){return name;}}
return origName;}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+ cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+ cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+ cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+ cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+ cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+ 1)*ret[2]+ parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+ value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+ opacity;}};}
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+ suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+ cssExpand[i]+ suffix]=parts[i]||parts[i- 2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+ suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end- this.start)*eased+ this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+ tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5- Math.cos(p*Math.PI)/ 2;
}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+ pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+ unit);}while(scale!==(scale=tween.cur()/ target) && scale !== 1 && --maxIterations );
}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+ 1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2- includeWidth){which=cssExpand[i];attrs["margin"+ which]=attrs["padding"+ which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+ animation.duration- currentTime),temp=remaining/animation.duration||0,percent=1- temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});};(function(){var input,div,select,a,opt;div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px";support.getSetAttribute=div.className!=="t";support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";})();var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem));}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+ 1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>=0){try{option.selected=optionSet=true;}catch(_){option.scrollHeight;}}else{option.selected=false;}}
if(!optionSet){elem.selectedIndex=-1;}
return options;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=support.getSetAttribute,getSetInput=support.input;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+ name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+ name)]=elem[name]=true;}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;}:function(elem,name,isXML){if(!isXML){return elem[jQuery.camelCase("default-"+ name)]?name.toLowerCase():null;}};});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";if(name==="value"||value===elem.getAttribute(name)){return value;}}};attrHandle.id=attrHandle.name=attrHandle.coords=function(elem,name,isXML){var ret;if(!isXML){return(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;}};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);if(ret&&ret.specified){return ret.value;}},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
if(!support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}}});if(!support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!support.enctype){jQuery.propFix.enctype="encoding";}
var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+ elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+ clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+ elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+ clazz+" ")>=0){cur=cur.replace(" "+ clazz+" "," ");}}
finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(type===strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+ selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+ this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var nonce=jQuery.now();var rquery=(/\?/);var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON=function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data+"");}
var requireNonComma,depth=null,str=jQuery.trim(data+"");return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){if(requireNonComma&&comma){depth=0;}
if(depth===0){return token;}
requireNonComma=open||comma;depth+=!close-!open;return"";}))?(Function("return "+ str))():jQuery.error("Invalid JSON: "+ data);};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+ data);}
return xml;};var
ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType.charAt(0)==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+ dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+ current]||converters["* "+ current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+ tmp[0]]||converters["* "+ tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+ prev+" to "+ current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+ s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+ nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+ allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!support.reliableHiddenOffsets()&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+ name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+ encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&createStandardXHR()||createActiveXHR();}:createStandardXHR;var xhrId=0,xhrCallbacks={},xhrSupported=jQuery.ajaxSettings.xhr();if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key](undefined,true);}});}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(options){if(!options.crossDomain||support.cors){var callback;return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){if(headers[i]!==undefined){xhr.setRequestHeader(i,headers[i]+"");}}
xhr.send((options.hasContent&&options.data)||null);callback=function(_,isAbort){var status,statusText,responses;if(callback&&(isAbort||xhr.readyState===4)){delete xhrCallbacks[id];callback=undefined;xhr.onreadystatechange=jQuery.noop;if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&options.isLocal&&!options.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}
if(responses){complete(status,statusText,responses,xhr.getAllResponseHeaders());}};if(!options.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{xhr.onreadystatechange=xhrCallbacks[id]=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+ callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+ s.jsonp+"="+ callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=jQuery.trim(url.slice(off,url.length));url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top- curOffset.top)+ curTop;}
if(options.left!=null){props.left=(options.left- curOffset.left)+ curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};},position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top- parentOffset.top- jQuery.css(elem,"marginTop",true),left:offset.left- parentOffset.left- jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+ name,content:type,"":"outer"+ name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+ name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+ name],doc["scroll"+ name],elem.body["offset"+ name],doc["offset"+ name],doc["client"+ name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery;}
return jQuery;}));(function($,undefined){if($.rails!==undefined){$.error('jquery-ujs has already been loaded!');}
var rails;var $document=$(document);$.rails=rails={linkClickSelector:'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',buttonClickSelector:'button[data-remote]:not(form button), button[data-confirm]:not(form button)',inputChangeSelector:'select[data-remote], input[data-remote], textarea[data-remote]',formSubmitSelector:'form',formInputClickSelector:'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',disableSelector:'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',enableSelector:'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',requiredInputSelector:'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',fileInputSelector:'input[type=file]',linkDisableSelector:'a[data-disable-with], a[data-disable]',buttonDisableSelector:'button[data-remote][data-disable-with], button[data-remote][data-disable]',CSRFProtection:function(xhr){var token=$('meta[name="csrf-token"]').attr('content');if(token)xhr.setRequestHeader('X-CSRF-Token',token);},refreshCSRFTokens:function(){var csrfToken=$('meta[name=csrf-token]').attr('content');var csrfParam=$('meta[name=csrf-param]').attr('content');$('form input[name="'+ csrfParam+'"]').val(csrfToken);},fire:function(obj,name,data){var event=$.Event(name);obj.trigger(event,data);return event.result!==false;},confirm:function(message){return confirm(message);},ajax:function(options){return $.ajax(options);},href:function(element){return element[0].href;},handleRemote:function(element){var method,url,data,withCredentials,dataType,options;if(rails.fire(element,'ajax:before')){withCredentials=element.data('with-credentials')||null;dataType=element.data('type')||($.ajaxSettings&&$.ajaxSettings.dataType);if(element.is('form')){method=element.attr('method');url=element.attr('action');data=element.serializeArray();var button=element.data('ujs:submit-button');if(button){data.push(button);element.data('ujs:submit-button',null);}}else if(element.is(rails.inputChangeSelector)){method=element.data('method');url=element.data('url');data=element.serialize();if(element.data('params'))data=data+"&"+ element.data('params');}else if(element.is(rails.buttonClickSelector)){method=element.data('method')||'get';url=element.data('url');data=element.serialize();if(element.data('params'))data=data+"&"+ element.data('params');}else{method=element.data('method');url=rails.href(element);data=element.data('params')||null;}
options={type:method||'GET',data:data,dataType:dataType,beforeSend:function(xhr,settings){if(settings.dataType===undefined){xhr.setRequestHeader('accept','*/*;q=0.5, '+ settings.accepts.script);}
if(rails.fire(element,'ajax:beforeSend',[xhr,settings])){element.trigger('ajax:send',xhr);}else{return false;}},success:function(data,status,xhr){element.trigger('ajax:success',[data,status,xhr]);},complete:function(xhr,status){element.trigger('ajax:complete',[xhr,status]);},error:function(xhr,status,error){element.trigger('ajax:error',[xhr,status,error]);},crossDomain:rails.isCrossDomain(url)};if(withCredentials){options.xhrFields={withCredentials:withCredentials};}
if(url){options.url=url;}
return rails.ajax(options);}else{return false;}},isCrossDomain:function(url){var originAnchor=document.createElement("a");originAnchor.href=location.href;var urlAnchor=document.createElement("a");try{urlAnchor.href=url;urlAnchor.href=urlAnchor.href;return!urlAnchor.protocol||!urlAnchor.host||(originAnchor.protocol+"//"+ originAnchor.host!==urlAnchor.protocol+"//"+ urlAnchor.host);}catch(e){return true;}},handleMethod:function(link){var href=rails.href(link),method=link.data('method'),target=link.attr('target'),csrfToken=$('meta[name=csrf-token]').attr('content'),csrfParam=$('meta[name=csrf-param]').attr('content'),form=$('<form method="post" action="'+ href+'"></form>'),metadataInput='<input name="_method" value="'+ method+'" type="hidden" />';if(csrfParam!==undefined&&csrfToken!==undefined&&!rails.isCrossDomain(href)){metadataInput+='<input name="'+ csrfParam+'" value="'+ csrfToken+'" type="hidden" />';}
if(target){form.attr('target',target);}
form.hide().append(metadataInput).appendTo('body');form.submit();},formElements:function(form,selector){return form.is('form')?$(form[0].elements).filter(selector):form.find(selector);},disableFormElements:function(form){rails.formElements(form,rails.disableSelector).each(function(){rails.disableFormElement($(this));});},disableFormElement:function(element){var method,replacement;method=element.is('button')?'html':'val';replacement=element.data('disable-with');element.data('ujs:enable-with',element[method]());if(replacement!==undefined){element[method](replacement);}
element.prop('disabled',true);},enableFormElements:function(form){rails.formElements(form,rails.enableSelector).each(function(){rails.enableFormElement($(this));});},enableFormElement:function(element){var method=element.is('button')?'html':'val';if(element.data('ujs:enable-with'))element[method](element.data('ujs:enable-with'));element.prop('disabled',false);},allowAction:function(element){var message=element.data('confirm'),answer=false,callback;if(!message){return true;}
if(rails.fire(element,'confirm')){answer=rails.confirm(message);callback=rails.fire(element,'confirm:complete',[answer]);}
return answer&&callback;},blankInputs:function(form,specifiedSelector,nonBlank){var inputs=$(),input,valueToCheck,selector=specifiedSelector||'input,textarea',allInputs=form.find(selector);allInputs.each(function(){input=$(this);valueToCheck=input.is('input[type=checkbox],input[type=radio]')?input.is(':checked'):input.val();if(!valueToCheck===!nonBlank){if(input.is('input[type=radio]')&&allInputs.filter('input[type=radio]:checked[name="'+ input.attr('name')+'"]').length){return true;}
inputs=inputs.add(input);}});return inputs.length?inputs:false;},nonBlankInputs:function(form,specifiedSelector){return rails.blankInputs(form,specifiedSelector,true);},stopEverything:function(e){$(e.target).trigger('ujs:everythingStopped');e.stopImmediatePropagation();return false;},disableElement:function(element){var replacement=element.data('disable-with');element.data('ujs:enable-with',element.html());if(replacement!==undefined){element.html(replacement);}
element.bind('click.railsDisable',function(e){return rails.stopEverything(e);});},enableElement:function(element){if(element.data('ujs:enable-with')!==undefined){element.html(element.data('ujs:enable-with'));element.removeData('ujs:enable-with');}
element.unbind('click.railsDisable');}};if(rails.fire($document,'rails:attachBindings')){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain){rails.CSRFProtection(xhr);}});$(window).on("pageshow.rails",function(){$($.rails.enableSelector).each(function(){var element=$(this);if(element.data("ujs:enable-with")){$.rails.enableFormElement(element);}});$($.rails.linkDisableSelector).each(function(){var element=$(this);if(element.data("ujs:enable-with")){$.rails.enableElement(element);}});});$document.delegate(rails.linkDisableSelector,'ajax:complete',function(){rails.enableElement($(this));});$document.delegate(rails.buttonDisableSelector,'ajax:complete',function(){rails.enableFormElement($(this));});$document.delegate(rails.linkClickSelector,'click.rails',function(e){var link=$(this),method=link.data('method'),data=link.data('params'),metaClick=e.metaKey||e.ctrlKey;if(!rails.allowAction(link))return rails.stopEverything(e);if(!metaClick&&link.is(rails.linkDisableSelector))rails.disableElement(link);if(link.data('remote')!==undefined){if(metaClick&&(!method||method==='GET')&&!data){return true;}
var handleRemote=rails.handleRemote(link);if(handleRemote===false){rails.enableElement(link);}else{handleRemote.fail(function(){rails.enableElement(link);});}
return false;}else if(method){rails.handleMethod(link);return false;}});$document.delegate(rails.buttonClickSelector,'click.rails',function(e){var button=$(this);if(!rails.allowAction(button))return rails.stopEverything(e);if(button.is(rails.buttonDisableSelector))rails.disableFormElement(button);var handleRemote=rails.handleRemote(button);if(handleRemote===false){rails.enableFormElement(button);}else{handleRemote.fail(function(){rails.enableFormElement(button);});}
return false;});$document.delegate(rails.inputChangeSelector,'change.rails',function(e){var link=$(this);if(!rails.allowAction(link))return rails.stopEverything(e);rails.handleRemote(link);return false;});$document.delegate(rails.formSubmitSelector,'submit.rails',function(e){var form=$(this),remote=form.data('remote')!==undefined,blankRequiredInputs,nonBlankFileInputs;if(!rails.allowAction(form))return rails.stopEverything(e);if(form.attr('novalidate')==undefined){blankRequiredInputs=rails.blankInputs(form,rails.requiredInputSelector);if(blankRequiredInputs&&rails.fire(form,'ajax:aborted:required',[blankRequiredInputs])){return rails.stopEverything(e);}}
if(remote){nonBlankFileInputs=rails.nonBlankInputs(form,rails.fileInputSelector);if(nonBlankFileInputs){setTimeout(function(){rails.disableFormElements(form);},13);var aborted=rails.fire(form,'ajax:aborted:file',[nonBlankFileInputs]);if(!aborted){setTimeout(function(){rails.enableFormElements(form);},13);}
return aborted;}
rails.handleRemote(form);return false;}else{setTimeout(function(){rails.disableFormElements(form);},13);}});$document.delegate(rails.formInputClickSelector,'click.rails',function(event){var button=$(this);if(!rails.allowAction(button))return rails.stopEverything(event);var name=button.attr('name'),data=name?{name:name,value:button.val()}:null;button.closest('form').data('ujs:submit-button',data);});$document.delegate(rails.formSubmitSelector,'ajax:send.rails',function(event){if(this==event.target)rails.disableFormElements($(this));});$document.delegate(rails.formSubmitSelector,'ajax:complete.rails',function(event){if(this==event.target)rails.enableFormElements($(this));});$(function(){rails.refreshCSRFTokens();});}})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(i,a){return e.isFunction(a)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=a.apply(this,arguments),this._super=s,this._superApply=n,i}}(),t):(l[i]=a,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&e.effects.effect[o]?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}})})(jQuery);(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement('div');div.innerHTML='<p>x</p><style id="fit-vids-style">'+ css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='vine.co']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector);}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not("object object");$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+ Math.floor(Math.random()*999999);$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);(function(){function EventEmitter(){}
var proto=EventEmitter.prototype;var exports=this;var originalGlobalValue=exports.EventEmitter;function indexOfListener(listeners,listener){var i=listeners.length;while(i--){if(listeners[i].listener===listener){return i;}}
return-1;}
function alias(name){return function aliasClosure(){return this[name].apply(this,arguments);};}
proto.getListeners=function getListeners(evt){var events=this._getEvents();var response;var key;if(typeof evt==='object'){response={};for(key in events){if(events.hasOwnProperty(key)&&evt.test(key)){response[key]=events[key];}}}
else{response=events[evt]||(events[evt]=[]);}
return response;};proto.flattenListeners=function flattenListeners(listeners){var flatListeners=[];var i;for(i=0;i<listeners.length;i+=1){flatListeners.push(listeners[i].listener);}
return flatListeners;};proto.getListenersAsObject=function getListenersAsObject(evt){var listeners=this.getListeners(evt);var response;if(listeners instanceof Array){response={};response[evt]=listeners;}
return response||listeners;};proto.addListener=function addListener(evt,listener){var listeners=this.getListenersAsObject(evt);var listenerIsWrapped=typeof listener==='object';var key;for(key in listeners){if(listeners.hasOwnProperty(key)&&indexOfListener(listeners[key],listener)===-1){listeners[key].push(listenerIsWrapped?listener:{listener:listener,once:false});}}
return this;};proto.on=alias('addListener');proto.addOnceListener=function addOnceListener(evt,listener){return this.addListener(evt,{listener:listener,once:true});};proto.once=alias('addOnceListener');proto.defineEvent=function defineEvent(evt){this.getListeners(evt);return this;};proto.defineEvents=function defineEvents(evts){for(var i=0;i<evts.length;i+=1){this.defineEvent(evts[i]);}
return this;};proto.removeListener=function removeListener(evt,listener){var listeners=this.getListenersAsObject(evt);var index;var key;for(key in listeners){if(listeners.hasOwnProperty(key)){index=indexOfListener(listeners[key],listener);if(index!==-1){listeners[key].splice(index,1);}}}
return this;};proto.off=alias('removeListener');proto.addListeners=function addListeners(evt,listeners){return this.manipulateListeners(false,evt,listeners);};proto.removeListeners=function removeListeners(evt,listeners){return this.manipulateListeners(true,evt,listeners);};proto.manipulateListeners=function manipulateListeners(remove,evt,listeners){var i;var value;var single=remove?this.removeListener:this.addListener;var multiple=remove?this.removeListeners:this.addListeners;if(typeof evt==='object'&&!(evt instanceof RegExp)){for(i in evt){if(evt.hasOwnProperty(i)&&(value=evt[i])){if(typeof value==='function'){single.call(this,i,value);}
else{multiple.call(this,i,value);}}}}
else{i=listeners.length;while(i--){single.call(this,evt,listeners[i]);}}
return this;};proto.removeEvent=function removeEvent(evt){var type=typeof evt;var events=this._getEvents();var key;if(type==='string'){delete events[evt];}
else if(type==='object'){for(key in events){if(events.hasOwnProperty(key)&&evt.test(key)){delete events[key];}}}
else{delete this._events;}
return this;};proto.removeAllListeners=alias('removeEvent');proto.emitEvent=function emitEvent(evt,args){var listeners=this.getListenersAsObject(evt);var listener;var i;var key;var response;for(key in listeners){if(listeners.hasOwnProperty(key)){i=listeners[key].length;while(i--){listener=listeners[key][i];if(listener.once===true){this.removeListener(evt,listener.listener);}
response=listener.listener.apply(this,args||[]);if(response===this._getOnceReturnValue()){this.removeListener(evt,listener.listener);}}}}
return this;};proto.trigger=alias('emitEvent');proto.emit=function emit(evt){var args=Array.prototype.slice.call(arguments,1);return this.emitEvent(evt,args);};proto.setOnceReturnValue=function setOnceReturnValue(value){this._onceReturnValue=value;return this;};proto._getOnceReturnValue=function _getOnceReturnValue(){if(this.hasOwnProperty('_onceReturnValue')){return this._onceReturnValue;}
else{return true;}};proto._getEvents=function _getEvents(){return this._events||(this._events={});};EventEmitter.noConflict=function noConflict(){exports.EventEmitter=originalGlobalValue;return EventEmitter;};if(typeof define==='function'&&define.amd){define('eventEmitter/EventEmitter',[],function(){return EventEmitter;});}
else if(typeof module==='object'&&module.exports){module.exports=EventEmitter;}
else{this.EventEmitter=EventEmitter;}}.call(this));(function(window){var docElem=document.documentElement;var bind=function(){};function getIEEvent(obj){var event=window.event;event.target=event.target||event.srcElement||obj;return event;}
if(docElem.addEventListener){bind=function(obj,type,fn){obj.addEventListener(type,fn,false);};}else if(docElem.attachEvent){bind=function(obj,type,fn){obj[type+ fn]=fn.handleEvent?function(){var event=getIEEvent(obj);fn.handleEvent.call(fn,event);}:function(){var event=getIEEvent(obj);fn.call(obj,event);};obj.attachEvent("on"+ type,obj[type+ fn]);};}
var unbind=function(){};if(docElem.removeEventListener){unbind=function(obj,type,fn){obj.removeEventListener(type,fn,false);};}else if(docElem.detachEvent){unbind=function(obj,type,fn){obj.detachEvent("on"+ type,obj[type+ fn]);try{delete obj[type+ fn];}catch(err){obj[type+ fn]=undefined;}};}
var eventie={bind:bind,unbind:unbind};if(typeof define==='function'&&define.amd){define('eventie/eventie',eventie);}else{window.eventie=eventie;}})(this);(function(window,factory){if(typeof define==='function'&&define.amd){define(['eventEmitter/EventEmitter','eventie/eventie'],function(EventEmitter,eventie){return factory(window,EventEmitter,eventie);});}else if(typeof exports==='object'){module.exports=factory(window,require('eventEmitter'),require('eventie'));}else{window.imagesLoaded=factory(window,window.EventEmitter,window.eventie);}})(this,function factory(window,EventEmitter,eventie){var $=window.jQuery;var console=window.console;var hasConsole=typeof console!=='undefined';function extend(a,b){for(var prop in b){a[prop]=b[prop];}
return a;}
var objToString=Object.prototype.toString;function isArray(obj){return objToString.call(obj)==='[object Array]';}
function makeArray(obj){var ary=[];if(isArray(obj)){ary=obj;}else if(typeof obj.length==='number'){for(var i=0,len=obj.length;i<len;i++){ary.push(obj[i]);}}else{ary.push(obj);}
return ary;}
function ImagesLoaded(elem,options,onAlways){if(!(this instanceof ImagesLoaded)){return new ImagesLoaded(elem,options);}
if(typeof elem==='string'){elem=document.querySelectorAll(elem);}
this.elements=makeArray(elem);this.options=extend({},this.options);if(typeof options==='function'){onAlways=options;}else{extend(this.options,options);}
if(onAlways){this.on('always',onAlways);}
this.getImages();if($){this.jqDeferred=new $.Deferred();}
var _this=this;setTimeout(function(){_this.check();});}
ImagesLoaded.prototype=new EventEmitter();ImagesLoaded.prototype.options={};ImagesLoaded.prototype.getImages=function(){this.images=[];for(var i=0,len=this.elements.length;i<len;i++){var elem=this.elements[i];if(elem.nodeName==='IMG'){this.addImage(elem);}
var childElems=elem.querySelectorAll('img');for(var j=0,jLen=childElems.length;j<jLen;j++){var img=childElems[j];this.addImage(img);}}};ImagesLoaded.prototype.addImage=function(img){var loadingImage=new LoadingImage(img);this.images.push(loadingImage);};ImagesLoaded.prototype.check=function(){var _this=this;var checkedCount=0;var length=this.images.length;this.hasAnyBroken=false;if(!length){this.complete();return;}
function onConfirm(image,message){if(_this.options.debug&&hasConsole){console.log('confirm',image,message);}
_this.progress(image);checkedCount++;if(checkedCount===length){_this.complete();}
return true;}
for(var i=0;i<length;i++){var loadingImage=this.images[i];loadingImage.on('confirm',onConfirm);loadingImage.check();}};ImagesLoaded.prototype.progress=function(image){this.hasAnyBroken=this.hasAnyBroken||!image.isLoaded;var _this=this;setTimeout(function(){_this.emit('progress',_this,image);if(_this.jqDeferred&&_this.jqDeferred.notify){_this.jqDeferred.notify(_this,image);}});};ImagesLoaded.prototype.complete=function(){var eventName=this.hasAnyBroken?'fail':'done';this.isComplete=true;var _this=this;setTimeout(function(){_this.emit(eventName,_this);_this.emit('always',_this);if(_this.jqDeferred){var jqMethod=_this.hasAnyBroken?'reject':'resolve';_this.jqDeferred[jqMethod](_this);}});};if($){$.fn.imagesLoaded=function(options,callback){var instance=new ImagesLoaded(this,options,callback);return instance.jqDeferred.promise($(this));};}
function LoadingImage(img){this.img=img;}
LoadingImage.prototype=new EventEmitter();LoadingImage.prototype.check=function(){var resource=cache[this.img.src]||new Resource(this.img.src);if(resource.isConfirmed){this.confirm(resource.isLoaded,'cached was confirmed');return;}
if(this.img.complete&&this.img.naturalWidth!==undefined){this.confirm(this.img.naturalWidth!==0,'naturalWidth');return;}
var _this=this;resource.on('confirm',function(resrc,message){_this.confirm(resrc.isLoaded,message);return true;});resource.check();};LoadingImage.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emit('confirm',this,message);};var cache={};function Resource(src){this.src=src;cache[src]=this;}
Resource.prototype=new EventEmitter();Resource.prototype.check=function(){if(this.isChecked){return;}
var proxyImage=new Image();eventie.bind(proxyImage,'load',this);eventie.bind(proxyImage,'error',this);proxyImage.src=this.src;this.isChecked=true;};Resource.prototype.handleEvent=function(event){var method='on'+ event.type;if(this[method]){this[method](event);}};Resource.prototype.onload=function(event){this.confirm(true,'onload');this.unbindProxyEvents(event);};Resource.prototype.onerror=function(event){this.confirm(false,'onerror');this.unbindProxyEvents(event);};Resource.prototype.confirm=function(isLoaded,message){this.isConfirmed=true;this.isLoaded=isLoaded;this.emit('confirm',this,message);};Resource.prototype.unbindProxyEvents=function(event){eventie.unbind(event.target,'load',this);eventie.unbind(event.target,'error',this);};return ImagesLoaded;});(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('jquery-bridget/jquery-bridget',['jquery'],function(jQuery){factory(window,jQuery);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('jquery'));}else{window.jQueryBridget=factory(window,window.jQuery);}}(window,function factory(window,jQuery){'use strict';var arraySlice=Array.prototype.slice;var console=window.console;var logError=typeof console=='undefined'?function(){}:function(message){console.error(message);};function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return;}
if(!PluginClass.prototype.option){PluginClass.prototype.option=function(opts){if(!$.isPlainObject(opts)){return;}
this.options=$.extend(true,this.options,opts);};}
$.fn[namespace]=function(arg0){if(typeof arg0=='string'){var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args);}
plainCall(this,arg0);return this;};function methodCall($elems,methodName,args){var returnValue;var pluginMethodStr='$().'+ namespace+'("'+ methodName+'")';$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(!instance){logError(namespace+' not initialized. Cannot call methods, i.e. '+
pluginMethodStr);return;}
var method=instance[methodName];if(!method||methodName.charAt(0)=='_'){logError(pluginMethodStr+' is not a valid method');return;}
var value=method.apply(instance,args);returnValue=returnValue===undefined?value:returnValue;});return returnValue!==undefined?returnValue:$elems;}
function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){instance.option(options);instance._init();}else{instance=new PluginClass(elem,options);$.data(elem,namespace,instance);}});}
updateJQuery($);}
function updateJQuery($){if(!$||($&&$.bridget)){return;}
$.bridget=jQueryBridget;}
updateJQuery(jQuery||window.jQuery);return jQueryBridget;}));(function(global,factory){if(typeof define=='function'&&define.amd){define('ev-emitter/ev-emitter',factory);}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{global.EvEmitter=factory();}}(this,function(){function EvEmitter(){}
var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return;}
var events=this._events=this._events||{};var listeners=events[eventName]=events[eventName]||[];if(listeners.indexOf(listener)==-1){listeners.push(listener);}
return this;};proto.once=function(eventName,listener){if(!eventName||!listener){return;}
this.on(eventName,listener);var onceEvents=this._onceEvents=this._onceEvents||{};var onceListeners=onceEvents[eventName]=onceEvents[eventName]||[];onceListeners[listener]=true;return this;};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}
var index=listeners.indexOf(listener);if(index!=-1){listeners.splice(index,1);}
return this;};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}
var i=0;var listener=listeners[i];args=args||[];var onceListeners=this._onceEvents&&this._onceEvents[eventName];while(listener){var isOnce=onceListeners&&onceListeners[listener];if(isOnce){this.off(eventName,listener);delete onceListeners[listener];}
listener.apply(this,args);i+=isOnce?0:1;listener=listeners[i];}
return this;};return EvEmitter;}));(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('get-size/get-size',[],function(){return factory();});}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{window.getSize=factory();}})(window,function factory(){'use strict';function getStyleSize(value){var num=parseFloat(value);var isValid=value.indexOf('%')==-1&&!isNaN(num);return isValid&&num;}
function noop(){}
var logError=typeof console=='undefined'?noop:function(message){console.error(message);};var measurements=['paddingLeft','paddingRight','paddingTop','paddingBottom','marginLeft','marginRight','marginTop','marginBottom','borderLeftWidth','borderRightWidth','borderTopWidth','borderBottomWidth'];var measurementsLength=measurements.length;function getZeroSize(){var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];size[measurement]=0;}
return size;}
function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError('Style returned '+ style+'. Are you running this code in a hidden iframe on Firefox? '+'See http://bit.ly/getsizebug1');}
return style;}
var isSetup=false;var isBoxSizeOuter;function setup(){if(isSetup){return;}
isSetup=true;var div=document.createElement('div');div.style.width='200px';div.style.padding='1px 2px 3px 4px';div.style.borderStyle='solid';div.style.borderWidth='1px 2px 3px 4px';div.style.boxSizing='border-box';var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);getSize.isBoxSizeOuter=isBoxSizeOuter=getStyleSize(style.width)==200;body.removeChild(div);}
function getSize(elem){setup();if(typeof elem=='string'){elem=document.querySelector(elem);}
if(!elem||typeof elem!='object'||!elem.nodeType){return;}
var style=getStyle(elem);if(style.display=='none'){return getZeroSize();}
var size={};size.width=elem.offsetWidth;size.height=elem.offsetHeight;var isBorderBox=size.isBorderBox=style.boxSizing=='border-box';for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];var value=style[measurement];var num=parseFloat(value);size[measurement]=!isNaN(num)?num:0;}
var paddingWidth=size.paddingLeft+ size.paddingRight;var paddingHeight=size.paddingTop+ size.paddingBottom;var marginWidth=size.marginLeft+ size.marginRight;var marginHeight=size.marginTop+ size.marginBottom;var borderWidth=size.borderLeftWidth+ size.borderRightWidth;var borderHeight=size.borderTopWidth+ size.borderBottomWidth;var isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter;var styleWidth=getStyleSize(style.width);if(styleWidth!==false){size.width=styleWidth+
(isBorderBoxSizeOuter?0:paddingWidth+ borderWidth);}
var styleHeight=getStyleSize(style.height);if(styleHeight!==false){size.height=styleHeight+
(isBorderBoxSizeOuter?0:paddingHeight+ borderHeight);}
size.innerWidth=size.width-(paddingWidth+ borderWidth);size.innerHeight=size.height-(paddingHeight+ borderHeight);size.outerWidth=size.width+ marginWidth;size.outerHeight=size.height+ marginHeight;return size;}
return getSize;});(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('matches-selector/matches-selector',factory);}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{window.matchesSelector=factory();}}(window,function factory(){'use strict';var matchesMethod=(function(){var ElemProto=Element.prototype;if(ElemProto.matches){return'matches';}
if(ElemProto.matchesSelector){return'matchesSelector';}
var prefixes=['webkit','moz','ms','o'];for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var method=prefix+'MatchesSelector';if(ElemProto[method]){return method;}}})();return function matchesSelector(elem,selector){return elem[matchesMethod](selector);};}));(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('fizzy-ui-utils/utils',['matches-selector/matches-selector'],function(matchesSelector){return factory(window,matchesSelector);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('desandro-matches-selector'));}else{window.fizzyUIUtils=factory(window,window.matchesSelector);}}(window,function factory(window,matchesSelector){var utils={};utils.extend=function(a,b){for(var prop in b){a[prop]=b[prop];}
return a;};utils.modulo=function(num,div){return((num%div)+ div)%div;};utils.makeArray=function(obj){var ary=[];if(Array.isArray(obj)){ary=obj;}else if(obj&&typeof obj.length=='number'){for(var i=0;i<obj.length;i++){ary.push(obj[i]);}}else{ary.push(obj);}
return ary;};utils.removeFrom=function(ary,obj){var index=ary.indexOf(obj);if(index!=-1){ary.splice(index,1);}};utils.getParent=function(elem,selector){while(elem!=document.body){elem=elem.parentNode;if(matchesSelector(elem,selector)){return elem;}}};utils.getQueryElement=function(elem){if(typeof elem=='string'){return document.querySelector(elem);}
return elem;};utils.handleEvent=function(event){var method='on'+ event.type;if(this[method]){this[method](event);}};utils.filterFindElements=function(elems,selector){elems=utils.makeArray(elems);var ffElems=[];elems.forEach(function(elem){if(!(elem instanceof HTMLElement)){return;}
if(!selector){ffElems.push(elem);return;}
if(matchesSelector(elem,selector)){ffElems.push(elem);}
var childElems=elem.querySelectorAll(selector);for(var i=0;i<childElems.length;i++){ffElems.push(childElems[i]);}});return ffElems;};utils.debounceMethod=function(_class,methodName,threshold){var method=_class.prototype[methodName];var timeoutName=methodName+'Timeout';_class.prototype[methodName]=function(){var timeout=this[timeoutName];if(timeout){clearTimeout(timeout);}
var args=arguments;var _this=this;this[timeoutName]=setTimeout(function(){method.apply(_this,args);delete _this[timeoutName];},threshold||100);};};utils.docReady=function(callback){if(document.readyState=='complete'){callback();}else{document.addEventListener('DOMContentLoaded',callback);}};utils.toDashed=function(str){return str.replace(/(.)([A-Z])/g,function(match,$1,$2){return $1+'-'+ $2;}).toLowerCase();};var console=window.console;utils.htmlInit=function(WidgetClass,namespace){utils.docReady(function(){var dashedNamespace=utils.toDashed(namespace);var dataAttr='data-'+ dashedNamespace;var dataAttrElems=document.querySelectorAll('['+ dataAttr+']');var jsDashElems=document.querySelectorAll('.js-'+ dashedNamespace);var elems=utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));var dataOptionsAttr=dataAttr+'-options';var jQuery=window.jQuery;elems.forEach(function(elem){var attr=elem.getAttribute(dataAttr)||elem.getAttribute(dataOptionsAttr);var options;try{options=attr&&JSON.parse(attr);}catch(error){if(console){console.error('Error parsing '+ dataAttr+' on '+ elem.className+': '+ error);}
return;}
var instance=new WidgetClass(elem,options);if(jQuery){jQuery.data(elem,namespace,instance);}});});};return utils;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('outlayer/item',['ev-emitter/ev-emitter','get-size/get-size'],function(EvEmitter,getSize){return factory(window,EvEmitter,getSize);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('ev-emitter'),require('get-size'));}else{window.Outlayer={};window.Outlayer.Item=factory(window,window.EvEmitter,window.getSize);}}(window,function factory(window,EvEmitter,getSize){'use strict';function isEmptyObj(obj){for(var prop in obj){return false;}
prop=null;return true;}
var docElemStyle=document.documentElement.style;var transitionProperty=typeof docElemStyle.transition=='string'?'transition':'WebkitTransition';var transformProperty=typeof docElemStyle.transform=='string'?'transform':'WebkitTransform';var transitionEndEvent={WebkitTransition:'webkitTransitionEnd',transition:'transitionend'}[transitionProperty ];

// cache all vendor properties
var vendorProperties = [
  transformProperty,
  transitionProperty,
  transitionProperty + 'Duration',
  transitionProperty + 'Property'
];

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  // convert percent to pixels
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' +
  toDashedAll( vendorProperties.transform || 'transform' );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

proto.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.0.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  queue.forEach( function( obj ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }, this );
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  items.forEach( function( item ) {
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  items.forEach( function( item ) {
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/*!
 * Masonry v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = colGroup.indexOf( minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 */
 
/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function decode(s) {
    if (config.raw) {
      return s;
    }
    try {
      // If we can't decode the cookie, ignore it, it's unusable.
      return decodeURIComponent(s.replace(pluses, ' '));
    } catch(e) {}
  }

  function decodeAndParse(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    s = decode(s);

    try {
      // If we can't parse the cookie, ignore it, it's unusable.
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }

  var config = $.cookie = function (key, value, options) {

    // Write
    if (value !== undefined) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = config.json ? JSON.stringify(value) : String(value);

      return (document.cookie = [
        config.raw ? key : encodeURIComponent(key),
        '=',
        config.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        result = decodeAndParse(cookie);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = decodeAndParse(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) !== undefined) {
      // Must not alter options, thus extending a fresh object...
      $.cookie(key, '', $.extend({}, options, { expires: -1 }));
      return true;
    }
    return false;
  };

}));
/*!
 * jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @addyosmani
 * Further changes: @peolanha
 * Licensed under the MIT license
 */



;(function ( $, window, document, undefined ) {


    $.wildCart = {
        'tldn' : location.host.replace('learn', 'www').replace('forums', 'www'),
        'wildCartServer' : 'http'+(window.location.protocol === 'https:' ? 's' : '' )+'://' + location.host.replace('learn', 'www').replace('forums', 'www') + '/api/wildCart.php',
        'cart': {
        },
        'cart_totals': {
        },
        'cart_subscribers' : Array(),
        updateCart : function(cart){
            this.cart = cart;
            this.updateCartTotals();
            for (var index in this.cart_subscribers){
                _self = this.cart_subscribers[index];
                _self.options.cartUpdated.call(_self.element, {'cart' : this.cart, 'cart_totals' : this.cart_totals} );
            }

        },
        updateCartTotals : function(){
            cart_count = 0;
            this.cart_totals['items'] = 0;
            for ( var pid in cart ){
                this.cart_totals['items'] += parseInt(cart[pid]['qty'], 10);
                cart_count += parseInt(cart[pid]['qty'], 10);
            }
            $.cookie('cart_count', cart_count, { path : '/', domain: $.wildCart.tldn.replace('www', '')});
        }
    };

    $.widget( "wildCart.addToCart" , {

        //Options to be used as defaults
        options: {
            qty: 1,
            success_template : 'Added to cart!',
            onAdded : function(data){
                alert('You need to set an onAdded callback function for this element!');
            },
            updateCart : function(event, cart){
                $.wildCart.updateCart(cart);
            }
        },

        _create: function () {

            this.options.pid = this.element.data("pid");
            this.options.name = this.element.data("name");
            this.options.multi_add = this.element.data("multi-add");
            // default qty to 1

            if( typeof this.element.data("qty-source") !== 'undefined'){
                this.options.qty = $(this.element.data("qty-source")).val();
            }
            else if(typeof this.element.data("qty") !== 'undefined'){
                this.options.qty = this.element.data("qty");
            }


            // events
            var self = this;
            self.element.click(function(e){
                self._ajaxAdd(self.options.onAdded);
                e.stopPropagation();
                e.preventDefault();
            });

        },

        destroy: function () {
            $.Widget.prototype.destroy.call(this);
        },

        _sendAnalytics: function(options) {
          var type = "AddToCart";

          if (options.multi_add) {
            for (var pid in options.multi_add) {
              ga('ec:addProduct', {
                'id': pid,
                'name': $('.product-buy[data-pid="' + pid + '"]').data('name')
              });
            }
            type = "AddAllToCart";
          } else {
            ga('ec:addProduct', {
              'id': options.pid,
              'name': options.name
            });
          }

          ga('ec:setAction', 'add');
          ga('send', 'event', 'Learn', type);
        },

        _ajaxAdd: function(onSuccess){
            var self = this;
            //find sessions cookies
            extended_data = {
                'action' : 'add_to_cart',
                'multi_add' : this.options.multi_add,
                'pid' : this.options.pid,
                'qty' : this.options.qty,
                'source_page': 'learn',
                'source_id': $('#content-wrapper').data('page-id'),
                'guide_id': $('#content-wrapper').data('guide-id')
            };

            $.ajax({
                url: $.wildCart.wildCartServer,
                accept: 'application/json',
                crossDomain: true,
                cache: false,
                type: 'POST',
                xhrFields: {
                   withCredentials: true
                },
                data : extended_data,
                error: function(jqXHR, textStatus, errorThrown){
                    console.log(' :( ' +  textStatus.toUpperCase()  + ' -- for ajaxAdd() : jqXHR.statusText = ' + jqXHR.statusText + ', textStatus = ' + textStatus);
                },
                success: function(data, textStatus, jqXHR){
                    if (window.rails_env === "production" && (typeof ga !== "undefined")) {
                      self._sendAnalytics(self.options);
                    }

                    if(typeof data['zenid'] !== 'undefined')
                        $.cookie('zenid', data['zenid'], { path : '/', domain: $.wildCart.tldn.replace('www', '')});
                    onSuccess.call(self.element, data);
                    cart = data['cart'];
                    self._trigger('updateCart', self, cart);
                }

            });

        },


        // boilerplate code! not using this yet, as it turns out.
        // Respond to any changes the user makes to the
        // option method
        _setOption: function ( key, value ) {
            switch (key) {
                default:
                break;
            }
            $.Widget.prototype._setOption.apply( this, arguments );
        }
    });


    $.widget( "wildCart.shoppingCartTag" , {

        options : {
            cartUpdated: function(){
                alert('you need to create a cartUpdated callback to bind to this element');
            }
        },

        _create: function () {
            $.wildCart.cart_subscribers.push(this);
        },

        destroy: function () {
            $.Widget.prototype.destroy.call(this);
        },

        // boilerplate code! not using this yet, as it turns out.
        // Respond to any changes the user makes to the
        // option method
        _setOption: function ( key, value ) {
            switch (key) {
            default:
                break;
            }
            $.Widget.prototype._setOption.apply( this, arguments );
        }
    });

})( jQuery, window, document );
/*
Copyright (c) 2011 Joseph Scott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */


( function( $ ) {
$.fn.async_gravatars = function( args ) {
  var opt = {
    'default_img' : 'mm',
    'hash_attr'   : 'data-gravatar_hash',
    'rating'    : 'pg',
    'size'      : 64,
    'ssl'     : false
  };

  return this.each( function() {
    if ( args ) {
      $.extend( opt, args );
    }

    var host = 'http://www.gravatar.com/avatar/';
    if ( opt.ssl == true ) {
      host = 'https://secure.gravatar.com/avatar/';
    }

    var email_hash = $( this ).attr( opt.hash_attr );

    var grav_url = host + encodeURIComponent( email_hash );
    grav_url += '?s=' + encodeURIComponent( opt.size );
    grav_url += '&d=' + encodeURIComponent( opt.default_img );
    grav_url += '&r=' + encodeURIComponent( opt.rating );

    $( this ).attr( 'src', grav_url );
  } );
};
} )( jQuery );
/*!
 * Farbtastic: jQuery color picker plug-in v1.3u
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 */

(function(e){e.fn.farbtastic=function(f){e.farbtastic(this,f);return this};e.farbtastic=function(f,l){f=e(f).get(0);return f.farbtastic||(f.farbtastic=new e._farbtastic(f,l))};e._farbtastic=function(f,l){var a=this;e(f).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');var k=e(".farbtastic",f);a.wheel=e(".wheel",f).get(0);a.radius=84;a.square=100;a.width=194;navigator.appVersion.match(/MSIE [0-6]\./)&&
e("*",k).each(function(){if(this.currentStyle.backgroundImage!="none"){var b=this.currentStyle.backgroundImage;b=this.currentStyle.backgroundImage.substring(5,b.length-2);e(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+b+"')"})}});a.linkTo=function(b){typeof a.callback=="object"&&e(a.callback).unbind("keyup",a.updateValue);a.color=null;if(typeof b=="function")a.callback=b;else if(typeof b=="object"||typeof b=="string"){a.callback=
e(b);a.callback.bind("keyup",a.updateValue);a.callback.get(0).value&&a.setColor(a.callback.get(0).value)}return this};a.updateValue=function(){this.value&&this.value!=a.color&&a.setColor(this.value)};a.setColor=function(b){var c=a.unpack(b);if(a.color!=b&&c){a.color=b;a.rgb=c;a.hsl=a.RGBToHSL(a.rgb);a.updateDisplay()}return this};a.setHSL=function(b){a.hsl=b;a.rgb=a.HSLToRGB(b);a.color=a.pack(a.rgb);a.updateDisplay();return this};a.widgetCoords=function(b){var c=e(a.wheel).offset();return{x:b.pageX-
c.left-a.width/2,y:b.pageY-c.top-a.width/2}};a.mousedown=function(b){if(!document.dragging){e(document).bind("mousemove",a.mousemove).bind("mouseup",a.mouseup);document.dragging=true}var c=a.widgetCoords(b);a.circleDrag=Math.max(Math.abs(c.x),Math.abs(c.y))*2>a.square;a.mousemove(b);return false};a.mousemove=function(b){var c=a.widgetCoords(b);if(a.circleDrag){b=Math.atan2(c.x,-c.y)/6.28;if(b<0)b+=1;a.setHSL([b,a.hsl[1],a.hsl[2]])}else{b=Math.max(0,Math.min(1,-(c.x/a.square)+0.5));c=Math.max(0,Math.min(1,
-(c.y/a.square)+0.5));a.setHSL([a.hsl[0],b,c])}return false};a.mouseup=function(){e(document).unbind("mousemove",a.mousemove);e(document).unbind("mouseup",a.mouseup);document.dragging=false};a.updateDisplay=function(){var b=a.hsl[0]*6.28;e(".h-marker",k).css({left:Math.round(Math.sin(b)*a.radius+a.width/2)+"px",top:Math.round(-Math.cos(b)*a.radius+a.width/2)+"px"});e(".sl-marker",k).css({left:Math.round(a.square*(0.5-a.hsl[1])+a.width/2)+"px",top:Math.round(a.square*(0.5-a.hsl[2])+a.width/2)+"px"});
e(".color",k).css("backgroundColor",a.pack(a.HSLToRGB([a.hsl[0],1,0.5])));if(typeof a.callback=="object"){e(a.callback).css({backgroundColor:a.color,color:a.hsl[2]>0.5?"#000":"#fff"});e(a.callback).each(function(){if(this.value&&this.value!=a.color)this.value=a.color})}else typeof a.callback=="function"&&a.callback.call(a,a.color)};a.pack=function(b){var c=Math.round(b[0]*255),d=Math.round(b[1]*255);b=Math.round(b[2]*255);return"#"+(c<16?"0":"")+c.toString(16)+(d<16?"0":"")+d.toString(16)+(b<16?"0":
"")+b.toString(16)};a.unpack=function(b){if(b.length==7)return[parseInt("0x"+b.substring(1,3))/255,parseInt("0x"+b.substring(3,5))/255,parseInt("0x"+b.substring(5,7))/255];else if(b.length==4)return[parseInt("0x"+b.substring(1,2))/15,parseInt("0x"+b.substring(2,3))/15,parseInt("0x"+b.substring(3,4))/15]};a.HSLToRGB=function(b){var c,d=b[0];c=b[1];b=b[2];c=b<=0.5?b*(c+1):b+c-b*c;b=b*2-c;return[this.hueToRGB(b,c,d+0.33333),this.hueToRGB(b,c,d),this.hueToRGB(b,c,d-0.33333)]};a.hueToRGB=function(b,c,
d){d=d<0?d+1:d>1?d-1:d;if(d*6<1)return b+(c-b)*d*6;if(d*2<1)return c;if(d*3<2)return b+(c-b)*(0.66666-d)*6;return b};a.RGBToHSL=function(b){var c,d,m,g,h=b[0],i=b[1],j=b[2];c=Math.min(h,Math.min(i,j));b=Math.max(h,Math.max(i,j));d=b-c;g=(c+b)/2;m=0;if(g>0&&g<1)m=d/(g<0.5?2*g:2-2*g);c=0;if(d>0){if(b==h&&b!=i)c+=(i-j)/d;if(b==i&&b!=j)c+=2+(j-h)/d;if(b==j&&b!=h)c+=4+(h-i)/d;c/=6}return[c,m,g]};e("*",k).mousedown(a.mousedown);a.setColor("#000000");l&&a.linkTo(l)}})(jQuery);
/*
Copyright 2012 Igor Vaynberg

Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/

(function ($) {
    if(typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            /*
            * 4-10 times faster .each replacement
            * use it carefully, as it overrides jQuery context of element on each iteration
            */
            each2 : function (c) {
                var j = $([0]), i = -1, l = this.length;
                while (
                    ++i < l
                    && (j.context = j[0] = this[i])
                    && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
                );
                return this;
            }
        });
    }
})(jQuery);

(function ($, undefined) {
    "use strict";
    /*global document, window, jQuery, console */

    if (window.Select2 !== undefined) {
        return;
    }

    var AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,

    KEY = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (k) {
            k = k.which ? k.which : k;
            switch (k) {
            case KEY.LEFT:
            case KEY.RIGHT:
            case KEY.UP:
            case KEY.DOWN:
                return true;
            }
            return false;
        },
        isControl: function (e) {
            var k = e.which;
            switch (k) {
            case KEY.SHIFT:
            case KEY.CTRL:
            case KEY.ALT:
                return true;
            }

            if (e.metaKey) return true;

            return false;
        },
        isFunctionKey: function (k) {
            k = k.which ? k.which : k;
            return k >= 112 && k <= 123;
        }
    },
    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",

    DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};

    $document = $(document);

    nextUid=(function() { var counter=1; return function() { return counter++; }; }());


    function reinsertElement(element) {
        var placeholder = $(document.createTextNode(''));

        element.before(placeholder);
        placeholder.before(element);
        placeholder.remove();
    }

    function stripDiacritics(str) {
        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
        function match(a) {
            return DIACRITICS[a] || a;
        }

        return str.replace(/[^\u0000-\u007E]/g, match);
    }

    function indexOf(value, array) {
        var i = 0, l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar () {
        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
        $template.appendTo(document.body);

        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();

        return dim;
    }

    /**
     * Compares equality of a and b
     * @param a
     * @param b
     */
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        // Check whether 'a' or 'b' is a string (primitive or object).
        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
        return false;
    }

    /**
     * Splits the string into an array of values, transforming each value. An empty array is returned for nulls or empty
     * strings
     * @param string
     * @param separator
     */
    function splitVal(string, separator, transform) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = transform(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key="keyup-change-value";
        element.on("keydown", function () {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function () {
            var val= $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }


    /**
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    function installFilteredMouseMove(element) {
        element.on("mousemove", function (e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    /**
     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
     * within the last quietMillis milliseconds.
     *
     * @param quietMillis number of milliseconds to wait before invoking fn
     * @param fn function to be debounced
     * @param ctx object to be used as this reference within fn
     * @return debounced version of fn
     */
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function () {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
        element.on("scroll", function (e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;

        /* set the focus in a 0 timeout - that way the focus is set after the processing
            of the current event has finished - which seems like the only reliable way
            to set focus */
        window.setTimeout(function() {
            var el=$el[0], pos=$el.val().length, range;

            $el.focus();

            /* make sure el received focus so we do not error out when trying to manipulate the caret.
                sometimes modals or others listeners may steal it after its set */
            var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
            if (isVisible && el === document.activeElement) {

                /* after the focus is set move the caret to the end, necessary when we val()
                    just before setting focus */
                if(el.setSelectionRange)
                {
                    el.setSelectionRange(pos, pos);
                }
                else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return { offset: offset, length: length };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer){
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class","select2-sizer");
            $(document.body).append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [], adapted;

        classes = $.trim(dest.attr("class"));

        if (classes) {
            classes = '' + classes; // for IE which returns object

            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }

        classes = $.trim(src.attr("class"));

        if (classes) {
            classes = '' + classes; // for IE which returns object

            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);

                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }

        dest.attr("class", replacements.join(" "));
    }


    function markMatch(text, term, markup, escapeMarkup) {
        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl=term.length;

        if (match<0) {
            markup.push(escapeMarkup(text));
            return;
        }

        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
            return replace_map[match];
        });
    }

    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration parameters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber, query) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout, // current scheduled but not yet executed request
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;

        return function (query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                var data = options.data, // ajax data function
                    url = ajaxUrl, // ajax url string or function
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                    // deprecated - to be removed in 4.0  - use params instead
                    deprecated = {
                        type: options.type || 'GET', // set type of request (GET or POST)
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback||undefined,
                        dataType: options.dataType||"json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

                if (handler && typeof handler.abort === "function") { handler.abort(); }

                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }

                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function (data) {
                        // TODO - replace query.page with query so users have access to term, page, etc.
                        // added query as third paramter to keep backwards compatibility
                        var results = options.results(data, query.page, query);
                        query.callback(results);
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        var results = {
                            hasError: true,
                            jqXHR: jqXHR,
                            textStatus: textStatus,
                            errorThrown: errorThrown
                        };

                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }

    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used it is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options, // data elements
            dataText,
            tmp,
            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

         if ($.isArray(data)) {
            tmp = data;
            data = { results: tmp };
        }

         if ($.isFunction(data) === false) {
            tmp = data;
            data = function() { return tmp; };
        }

        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            // if text is not a function we assume it to be a key name
            if (!$.isFunction(text)) {
                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
                text = function (item) { return item[dataText]; };
            }
        }

        return function (query) {
            var t = query.term, filtered = { results: [] }, process;
            if (t === "") {
                query.callback(data());
                return;
            }

            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
                    }
                    group.children=[];
                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };

            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
            query.callback(filtered);
        };
    }

    // TODO javadoc
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function (query) {
            var t = query.term, filtered = {results: []};
            var result = isFunc ? data(query) : data;
            if ($.isArray(result)) {
                $(result).each(function () {
                    var isObject = this.text !== undefined,
                        text = isObject ? this.text : this;
                    if (t === "" || query.matcher(t, text)) {
                        filtered.results.push(isObject ? this : {id: this, text: this});
                    }
                });
                query.callback(filtered);
            }
        };
    }

    /**
     * Checks if the formatter function should be used.
     *
     * Throws an error if it is not a function. Returns true if it should be used,
     * false if no formatting should be performed.
     *
     * @param formatter
     */
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        if (typeof(formatter) === 'string') return true;
        throw new Error(formatterName +" must be a string, function, or falsy value");
    }

  /**
   * Returns a given value
   * If given a function, returns its output
   *
   * @param val string|function
   * @param context value of "this" to be passed to function
   * @returns {*}
   */
    function evaluate(val, context) {
        if ($.isFunction(val)) {
            var args = Array.prototype.slice.call(arguments, 2);
            return val.apply(context, args);
        }
        return val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }

    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
            token, // token
            index, // position at which the separator was found
            i, l, // looping variables
            separator; // the matched separator

        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

        while (true) {
            index = -1;

            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }

            if (index < 0) break; // did not find any token separator in the input string, bail

            token = input.substring(0, index);
            input = input.substring(index + separator.length);

            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true; break;
                        }
                    }

                    if (!dupe) selectCallback(token);
                }
            }
        }

        if (original!==input) return input;
    }

    function cleanupJQueryElements() {
        var self = this;

        $.each(arguments, function (i, element) {
            self[element].remove();
            self[element] = null;
        });
    }

    /**
     * Creates a new class
     *
     * @param superClass
     * @param methods
     */
    function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    AbstractSelect2 = clazz(Object, {

        // abstract
        bind: function (func) {
            var self = this;
            return function () {
                func.apply(self, arguments);
            };
        },

        // abstract
        init: function (opts) {
            var results, search, resultsSelector = ".select2-results";

            // prepare options
            this.opts = opts = this.prepareOpts(opts);

            this.id=opts.id;

            // destroy if called on an existing component
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }

            this.container = this.createContainer();

            this.liveRegion = $('.select2-hidden-accessible');
            if (this.liveRegion.length == 0) {
                this.liveRegion = $("<span>", {
                        role: "status",
                        "aria-live": "polite"
                    })
                    .addClass("select2-hidden-accessible")
                    .appendTo(document.body);
            }

            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
            this.containerEventName= this.containerId
                .replace(/([.])/g, '_')
                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);

            this.container.attr("title", opts.element.attr("title"));

            this.body = $(document.body);

            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss, this.opts.element));
            this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));

            this.elementTabIndex = this.opts.element.attr("tabindex");

            // swap container for the element
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container)
                .on("click.select2", killEvent); // do not leak click events

            this.container.data("select2", this);

            this.dropdown = this.container.find(".select2-drop");

            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);

            this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);

            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");

            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;

            // initialize the container
            this.initContainer();

            this.container.on("click", killEvent);

            installFilteredMouseMove(this.results);

            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function (event) {
                this._touchEvent = true;
                this.highlightUnderEvent(event);
            }));
            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));

            // Waiting for a click event on touch devices to select option and hide dropdown
            // otherwise click will be triggered on an underlying element
            this.dropdown.on('click', this.bind(function (event) {
                if (this._touchEvent) {
                    this._touchEvent = false;
                    this.selectHighlighted();
                }
            }));

            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

            // do not propagate change event from the search field out of the component
            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
            if ($.fn.mousewheel) {
                results.mousewheel(function (e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }

            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function () { search.addClass("select2-focused"); });
            search.on("blur", function () { search.removeClass("select2-focused");});

            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));

            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
            // dom it will trigger the popup close, which is not what we want
            // focusin can cause focus wars between modals and select2 since the dropdown is outside the modal.
            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) { e.stopPropagation(); });

            this.nextSearchTerm = undefined;

            if ($.isFunction(this.opts.initSelection)) {
                // initialize selection based on the current value of the source element
                this.initSelection();

                // if the user has provided a function that can set selection based on the value of the source element
                // we monitor the change event on the element and trigger it, allowing for two way synchronization
                this.monitorSource();
            }

            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }

            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);

            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);

            // Calculate size of scrollbar
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();

            this.search.attr("placeholder", opts.searchInputPlaceholder);
        },

        // abstract
        destroy: function () {
            var element=this.opts.element, select2 = element.data("select2"), self = this;

            this.close();

            if (element.length && element[0].detachEvent && self._sync) {
                element.each(function () {
                    if (self._sync) {
                        this.detachEvent("onpropertychange", self._sync);
                    }
                });
            }
            if (this.propertyObserver) {
                this.propertyObserver.disconnect();
                this.propertyObserver = null;
            }
            this._sync = null;

            if (select2 !== undefined) {
                select2.container.remove();
                select2.liveRegion.remove();
                select2.dropdown.remove();
                element
                    .show()
                    .removeData("select2")
                    .off(".select2")
                    .prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({tabindex: this.elementTabIndex});
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }

            cleanupJQueryElements.call(this,
                "container",
                "liveRegion",
                "dropdown",
                "results",
                "search"
            );
        },

        // abstract
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id:element.prop("value"),
                    text:element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text:element.attr("label"),
                    children:[],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },

        // abstract
        prepareOpts: function (opts) {
            var element, select, idKey, ajaxUrl, self = this;

            element = opts.element;

            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }

            if (select) {
                // these options are not allowed when attached to a select because they are picked up off the element itself
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }

            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate, id=this.opts.id, liveRegion=this.liveRegion;

                    populate=function(results, container, depth) {

                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

                        results = opts.sortResults(results, container, query);

                        // collect the created nodes for bulk append
                        var nodes = [];
                        for (i = 0, l = results.length; i < l; i = i + 1) {

                            result=results[i];

                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);

                            compound=result.children && result.children.length > 0;

                            node=$("<li></li>");
                            node.addClass("select2-results-dept-"+depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) { node.addClass("select2-disabled"); }
                            if (compound) { node.addClass("select2-result-with-children"); }
                            node.addClass(self.opts.formatResultCssClass(result));
                            node.attr("role", "presentation");

                            label=$(document.createElement("div"));
                            label.addClass("select2-result-label");
                            label.attr("id", "select2-result-label-" + nextUid());
                            label.attr("role", "option");

                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted!==undefined) {
                                label.html(formatted);
                                node.append(label);
                            }


                            if (compound) {

                                innerContainer=$("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth+1);
                                node.append(innerContainer);
                            }

                            node.data("select2-data", result);
                            nodes.push(node[0]);
                        }

                        // bulk append the created nodes
                        container.append(nodes);
                        liveRegion.text(opts.formatMatches(results.length));
                    };

                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);

            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function (e) { return e[idKey]; };
            }

            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags=opts.element.data("select2Tags");
            }

            if (select) {
                opts.query = this.bind(function (query) {
                    var data = { results: [], more: false },
                        term = query.term,
                        children, placeholderOption, process;

                    process=function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group=self.optionToData(element);
                            element.children().each2(function(i, elm) { process(elm, group.children); });
                            if (group.children.length>0) {
                                collection.push(group);
                            }
                        }
                    };

                    children=element.children();

                    // ignore the placeholder option if there is one
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children=children.not(placeholderOption);
                        }
                    }

                    children.each2(function(i, elm) { process(elm, data.results); });

                    query.callback(data);
                });
                // this is needed because inside val() we construct choices from options and their id is hardcoded
                opts.id=function(e) { return e.id; };
            } else {
                if (!("query" in opts)) {

                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function (element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator, opts.transformVal)).each(function () {
                                    var obj = { id: this, text: this },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags=tags();
                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
                                    data.push(obj);
                                });

                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }

            if (opts.createSearchChoicePosition === 'top') {
                opts.createSearchChoicePosition = function(list, item) { list.unshift(item); };
            }
            else if (opts.createSearchChoicePosition === 'bottom') {
                opts.createSearchChoicePosition = function(list, item) { list.push(item); };
            }
            else if (typeof(opts.createSearchChoicePosition) !== "function")  {
                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            }

            return opts;
        },

        /**
         * Monitor the original element for changes and update select2 accordingly
         */
        // abstract
        monitorSource: function () {
            var el = this.opts.element, observer, self = this;

            el.on("change.select2", this.bind(function (e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));

            this._sync = this.bind(function () {

                // sync enabled state
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);

                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);

                if (this.container) {
                    syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                    this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
                }

                if (this.dropdown) {
                    syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                    this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element));
                }

            });

            // IE8-10 (IE9/10 won't fire propertyChange via attachEventListener)
            if (el.length && el[0].attachEvent) {
                el.each(function() {
                    this.attachEvent("onpropertychange", self._sync);
                });
            }

            // safari, chrome, firefox, IE11
            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
                this.propertyObserver = new observer(function (mutations) {
                    $.each(mutations, self._sync);
                });
                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
            }
        },

        // abstract
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", { val: this.id(data), object: data, choice: data });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },

        /**
         * Triggers the change event on the source element
         */
        // abstract
        triggerChange: function (details) {

            details = details || {};
            details= $.extend({}, details, { type: "change", val: this.val() });
            // prevents recursive triggering
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);

            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
            // so here we trigger the click event manually
            this.opts.element.click();

            // ValidationEngine ignores the change event and listens instead to blur
            // so here we trigger the blur event manually if so desired
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },

        //abstract
        isInterfaceEnabled: function()
        {
            return this.enabledInterface === true;
        },

        // abstract
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;

            if (enabled === this.enabledInterface) return false;

            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;

            return true;
        },

        // abstract
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;

            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },

        // abstract
        disable: function() {
            this.enable(false);
        },

        // abstract
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return;
            this._readonly = enabled;

            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
        },

        // abstract
        opened: function () {
            return (this.container) ? this.container.hasClass("select2-dropdown-open") : false;
        },

        // abstract
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                container = this.container,
                offset = container.offset(),
                height = container.outerHeight(false),
                width = container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = function() {
                    return dropLeft + dropWidth <= viewPortRight;
                },
                enoughRoomOnLeft = function() {
                    return offset.left + viewPortRight + container.outerWidth(false)  > dropWidth;
                },
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;

            // always prefer the current above/below alignment, unless there is not enough room
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }

            //if we are changing direction we need to get positions when dropdown is hidden;
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                $dropdown.show();

                // fix so the cursor does not move to the left within the search-textbox in IE
                this.focusSearch();
            }

            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                // Add scrollbar width to dropdown if vertical scrollbar is present
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                dropHeight = $dropdown.outerHeight(false);
            }
            else {
                this.container.removeClass('select2-drop-auto-width');
            }

            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body.scrollTop(), "enough?", enoughRoomAbove);

            // fix positioning when body has an offset and is not position: static
            if (this.body.css('position') !== 'static') {
                bodyOffset = this.body.offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }

            if (!enoughRoomOnRight() && enoughRoomOnLeft()) {
                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
            }

            css =  {
                left: dropLeft,
                width: width
            };

            if (above) {
                css.top = offset.top - dropHeight;
                css.bottom = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            }
            else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));

            $dropdown.css(css);
        },

        // abstract
        shouldOpen: function() {
            var event;

            if (this.opened()) return false;

            if (this._enabled === false || this._readonly === true) return false;

            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },

        // abstract
        clearDropdownAlignmentPreference: function() {
            // clear the classes used to figure out the preference of where the dropdown should be opened
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },

        /**
         * Opens the dropdown
         *
         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
         */
        // abstract
        open: function () {

            if (!this.shouldOpen()) return false;

            this.opening();

            // Only bind the document mousemove when the dropdown is visible
            $document.on("mousemove.select2Event", function (e) {
                lastMousePosition.x = e.pageX;
                lastMousePosition.y = e.pageY;
            });

            return true;
        },

        /**
         * Performs the opening of the dropdown
         */
        // abstract
        opening: function() {
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid,
                mask;

            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

            this.clearDropdownAlignmentPreference();

            if(this.dropdown[0] !== this.body.children().last()[0]) {
                this.dropdown.detach().appendTo(this.body);
            }

            // create the dropdown mask if doesn't already exist
            mask = $("#select2-drop-mask");
            if (mask.length === 0) {
                mask = $(document.createElement("div"));
                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body);
                mask.on("mousedown touchstart click", function (e) {
                    // Prevent IE from generating a click event on the body
                    reinsertElement(mask);

                    var dropdown = $("#select2-drop"), self;
                    if (dropdown.length > 0) {
                        self=dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({noFocus: true});
                        }
                        self.close();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }

            // ensure the mask is always right before the dropdown
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }

            // move the global id to the correct dropdown
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");

            // show the elements
            mask.show();

            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();

            this.dropdown.addClass("select2-drop-active");

            // attach listeners to events that can change the position of the container and thus require
            // the position of the dropdown to be updated as well so it does not come unglued from the container
            var that = this;
            this.container.parents().add(window).each(function () {
                $(this).on(resize+" "+scroll+" "+orient, function (e) {
                    if (that.opened()) that.positionDropdown();
                });
            });


        },

        // abstract
        close: function () {
            if (!this.opened()) return;

            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid;

            // unbind event listeners
            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

            this.clearDropdownAlignmentPreference();

            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();

            // Now that the dropdown is closed, unbind the global document mousemove event
            $document.off("mousemove.select2Event");

            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },

        /**
         * Opens control, sets input value, and updates results.
         */
        // abstract
        externalSearch: function (term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },

        // abstract
        clearSearch: function () {

        },

        //abstract
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize, this.opts.element);
        },

        // abstract
        ensureHighlightVisible: function () {
            var results = this.results, children, index, child, hb, rb, y, more, topOffset;

            index = this.highlight();

            if (index < 0) return;

            if (index == 0) {

                // if the first element is highlighted scroll all the way to the top,
                // that way any unselectable headers above it will also be scrolled
                // into view

                results.scrollTop(0);
                return;
            }

            children = this.findHighlightableChoices().find('.select2-result-label');

            child = $(children[index]);

            topOffset = (child.offset() || {}).top || 0;

            hb = topOffset + child.outerHeight(true);

            // if this is the last child lets also make sure select2-more-results is visible
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }

            rb = results.offset().top + results.outerHeight(false);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = topOffset - results.offset().top;

            // make sure the top of the element is visible
            if (y < 0 && child.css('display') != 'none' ) {
                results.scrollTop(results.scrollTop() + y); // y is negative
            }
        },

        // abstract
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
        },

        // abstract
        moveHighlight: function (delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();

            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },

        // abstract
        highlight: function (index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;

            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }

            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;

            this.removeHighlight();

            choice = $(choices[index]);
            choice.addClass("select2-highlighted");

            // ensure assistive technology can determine the active choice
            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));

            this.ensureHighlightVisible();

            this.liveRegion.text(choice.text());

            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
            }
        },

        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },

        touchMoved: function() {
            this._touchMoved = true;
        },

        clearTouchMoved: function() {
          this._touchMoved = false;
        },

        // abstract
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },

        // abstract
        highlightUnderEvent: function (event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                // if we are over an unselectable item remove all highlights
                this.removeHighlight();
            }
        },

        // abstract
        loadMoreIfNeeded: function () {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
                page = this.resultsPage + 1,
                self=this,
                term=this.search.val(),
                context=this.context;

            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();

            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                        element: this.opts.element,
                        term: term,
                        page: page,
                        context: context,
                        matcher: this.opts.matcher,
                        callback: this.bind(function (data) {

                    // ignore a response if the select2 has been closed before it was received
                    if (!self.opened()) return;


                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
                    self.postprocessResults(data, false, false);

                    if (data.more===true) {
                        more.detach().appendTo(results).html(self.opts.escapeMarkup(evaluate(self.opts.formatLoadMore, self.opts.element, page+1)));
                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                    } else {
                        more.remove();
                    }
                    self.positionDropdown();
                    self.resultsPage = page;
                    self.context = data.context;
                    this.opts.element.trigger({ type: "select2-loaded", items: data });
                })});
            }
        },

        /**
         * Default tokenizer function which does nothing
         */
        tokenize: function() {

        },

        /**
         * @param initial whether or not this is the call to this method right after the dropdown has been opened
         */
        // abstract
        updateResults: function (initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
                // sequence number used to drop out-of-order responses
                queryNumber;

            // prevent duplicate queries against the same term
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

            $.data(this.container, "select2-last-term", term);

            // if the search is currently hidden we do not alter the results
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
                    self.liveRegion.text(results.text());
                }
                else {
                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable:not(".select2-selected")').length));
                }
            }

            function render(html) {
                results.html(html);
                postRender();
            }

            queryNumber = ++this.queryCount;

            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >=1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
                    return;
                }
            }

            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }

            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }

            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>");
            }

            search.addClass("select2-active");

            this.removeHighlight();

            // give the tokenizer a chance to pre-process the input
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }

            this.resultsPage = 1;

            opts.query({
                element: opts.element,
                    term: search.val(),
                    page: this.resultsPage,
                    context: null,
                    matcher: opts.matcher,
                    callback: this.bind(function (data) {
                var def; // default choice

                // ignore old responses
                if (queryNumber != this.queryCount) {
                  return;
                }

                // ignore a response if the select2 has been closed before it was received
                if (!this.opened()) {
                    this.search.removeClass("select2-active");
                    return;
                }

                // handle ajax error
                if(data.hasError !== undefined && checkFormatter(opts.formatAjaxError, "formatAjaxError")) {
                    render("<li class='select2-ajax-error'>" + evaluate(opts.formatAjaxError, opts.element, data.jqXHR, data.textStatus, data.errorThrown) + "</li>");
                    return;
                }

                // save context, if any
                this.context = (data.context===undefined) ? null : data.context;
                // create a default choice and prepend it to the list
                if (this.opts.createSearchChoice && search.val() !== "") {
                    def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                        if ($(data.results).filter(
                            function () {
                                return equal(self.id(this), self.id(def));
                            }).length === 0) {
                            this.opts.createSearchChoicePosition(data.results, def);
                        }
                    }
                }

                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
                    return;
                }

                results.empty();
                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                    results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                }

                this.postprocessResults(data, initial);

                postRender();

                this.opts.element.trigger({ type: "select2-loaded", items: data });
            })});
        },

        // abstract
        cancel: function () {
            this.close();
        },

        // abstract
        blur: function () {
            // if selectOnBlur == true, select the currently highlighted option
            if (this.opts.selectOnBlur)
                this.selectHighlighted({noFocus: true});

            this.close();
            this.container.removeClass("select2-container-active");
            // synonymous to .is(':focus'), which is available in jquery >= 1.6
            if (this.search[0] === document.activeElement) { this.search.blur(); }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },

        // abstract
        focusSearch: function () {
            focus(this.search);
        },

        // abstract
        selectHighlighted: function (options) {
            if (this._touchMoved) {
              this.clearTouchMoved();
              return;
            }
            var index=this.highlight(),
                highlighted=this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");

            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },

        // abstract
        getPlaceholder: function () {
            var placeholderOption;
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
                this.opts.element.data("placeholder") ||
                this.opts.placeholder ||
                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },

        // abstract
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined ) {
                    //Determine the placeholder option based on the specified placeholderOption setting
                    return (this.opts.placeholderOption === "first" && firstOption) ||
                           (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
                    //No explicit placeholder option specified, use the first if it's blank
                    return firstOption;
                }
            }
        },

        /**
         * Get the desired width for the container element.  This is
         * derived first from option `width` passed to select2, then
         * the inline 'style' on the original element, and finally
         * falls back to the jQuery calculated element width.
         */
        // abstract
        initContainerWidth: function () {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;

                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element"){
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    // check if there is inline style on the element that contains width
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }

                    if (this.opts.width === "resolve") {
                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
                        // when attached to input type=hidden or elements hidden via css
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;

                        // finally, fallback on the calculated width of the element
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }

                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
               }
            };

            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });

    SingleSelect2 = clazz(AbstractSelect2, {

        // single

        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
                "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
                "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
                "</a>",
                "<label for='' class='select2-offscreen'></label>",
                "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
                "<div class='select2-drop select2-display-none'>",
                "   <div class='select2-search'>",
                "       <label for='' class='select2-offscreen'></label>",
                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
                "       aria-autocomplete='list' />",
                "   </div>",
                "   <ul class='select2-results' role='listbox'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // single
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // single
        opening: function () {
            var el, range, len;

            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }

            this.parent.opening.apply(this, arguments);

            if (this.showSearchInput !== false) {
                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
                // all other browsers handle this just fine

                this.search.val(this.focusser.val());
            }
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
                // move the cursor to the end after focussing, otherwise it will be at the beginning and
                // new text will appear *before* focusser.val()
                el = this.search.get(0);
                if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                } else if (el.setSelectionRange) {
                    len = this.search.val().length;
                    el.setSelectionRange(len, len);
                }
            }

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },

        // single
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);

            this.focusser.prop("disabled", false);

            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },

        // single
        focus: function () {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.prop("disabled", false);
                if (this.opts.shouldFocusInput(this)) {
                    this.focusser.focus();
                }
            }
        },

        // single
        isFocused: function () {
            return this.container.hasClass("select2-container-active");
        },

        // single
        cancel: function () {
            this.parent.cancel.apply(this, arguments);
            this.focusser.prop("disabled", false);

            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },

        // single
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);

            cleanupJQueryElements.call(this,
                "selection",
                "focusser"
            );
        },

        // single
        initContainer: function () {

            var selection,
                container = this.container,
                dropdown = this.dropdown,
                idSuffix = nextUid(),
                elementLabel;

            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }

            this.selection = selection = container.find(".select2-choice");

            this.focusser = container.find(".select2-focusser");

            // add aria associations
            selection.find(".select2-chosen").attr("id", "select2-chosen-"+idSuffix);
            this.focusser.attr("aria-labelledby", "select2-chosen-"+idSuffix);
            this.results.attr("id", "select2-results-"+idSuffix);
            this.search.attr("aria-owns", "select2-results-"+idSuffix);

            // rewrite labels from original element to focusser
            this.focusser.attr("id", "s2id_autogen"+idSuffix);

            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
            this.opts.element.focus(this.bind(function () { this.focus(); }));

            this.focusser.prev()
                .text(elementLabel.text())
                .attr('for', this.focusser.attr('id'));

            // Ensure the original element retains an accessible name
            var originalTitle = this.opts.element.attr("title");
            this.opts.element.attr("title", (originalTitle || elementLabel.text()));

            this.focusser.attr("tabindex", this.elementTabIndex);

            // write label for search field using the label from the focusser element
            this.search.attr("id", this.focusser.attr('id') + '_search');

            this.search.prev()
                .text($("label[for='" + this.focusser.attr('id') + "']").text())
                .attr('for', this.search.attr('id'));

            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                // filter 229 keyCodes (input method editor is processing key input)
                if (229 == e.keyCode) return;

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                    return;
                }

                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus: true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));

            this.search.on("blur", this.bind(function(e) {
                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
                // without this the search field loses focus which is annoying
                if (document.activeElement === this.body.get(0)) {
                    window.setTimeout(this.bind(function() {
                        if (this.opened()) {
                            this.search.focus();
                        }
                    }), 0);
                }
            }));

            this.focusser.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }

                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DOWN || e.which == KEY.UP
                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {

                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

                    this.open();
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));


            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));

            selection.on("mousedown touchstart", "abbr", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) {
                    return;
                }

                this.clear();
                killEventImmediately(e);
                this.close();

                if (this.selection) {
                    this.selection.focus();
                }
            }));

            selection.on("mousedown touchstart", this.bind(function (e) {
                // Prevent IE from generating a click event on the body
                reinsertElement(selection);

                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }

                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }

                killEvent(e);
            }));

            dropdown.on("mousedown touchstart", this.bind(function() {
                if (this.opts.shouldFocusInput(this)) {
                    this.search.focus();
                }
            }));

            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));

            this.focusser.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));

            this.initContainerWidth();
            this.opts.element.hide();
            this.setPlaceholder();

        },

        // single
        clear: function(triggerChange) {
            var data=this.selection.data("select2-data");
            if (data) { // guard against queued quick consecutive clicks
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();

                if (triggerChange !== false){
                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
                    this.triggerChange({removed:data});
                }
            }
        },

        /**
         * Sets selection based on source element's value
         */
        // single
        initSelection: function () {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected){
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                        self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val());
                    }
                });
            }
        },

        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (this.getPlaceholder() === undefined) return false; // no placeholder specified so no option should be considered
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
                || (this.opts.element.val() === "")
                || (this.opts.element.val() === undefined)
                || (this.opts.element.val() === null);
        },

        // single
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {
                    var selected = element.find("option").filter(function() { return this.selected && !this.disabled });
                    // a single select box always has a value, no need to null check 'selected'
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var id = element.val();
                    //search in data by id, storing the actual matching item
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }

            return opts;
        },

        // single
        getPlaceholder: function() {
            // if a placeholder is specified on a single select without a valid placeholder option ignore it
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }

            return this.parent.getPlaceholder.apply(this, arguments);
        },

        // single
        setPlaceholder: function () {
            var placeholder = this.getPlaceholder();

            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {

                // check for a placeholder option if attached to a select
                if (this.select && this.getPlaceholderOption() === undefined) return;

                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));

                this.selection.addClass("select2-default");

                this.container.removeClass("select2-allowclear");
            }
        },

        // single
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var selected = 0, self = this, showSearchInput = true;

            // find the selected element in the result list

            this.findHighlightableChoices().each2(function (i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });

            // and highlight it
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }

            // hide the search box if this is the first we got the results and there are enough of them for search

            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },

        // single
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;

            this.showSearchInput = showSearchInput;

            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            //add "select2-with-searchbox" to the container if search box is shown
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },

        // single
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            var old = this.opts.element.val(),
                oldData = this.data();

            this.opts.element.val(this.id(data));
            this.updateSelection(data);

            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();

            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }

            if (!equal(old, this.id(data))) {
                this.triggerChange({ added: data, removed: oldData });
            }
        },

        // single
        updateSelection: function (data) {

            var container=this.selection.find(".select2-chosen"), formatted, cssClass;

            this.selection.data("select2-data", data);

            container.empty();
            if (data !== null) {
                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass=this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }

            this.selection.removeClass("select2-default");

            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },

        // single
        val: function () {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();

            if (arguments.length === 0) {
                return this.opts.element.val();
            }

            val = arguments[0];

            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }

            if (this.select) {
                this.select
                    .val(val)
                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({added: data, removed:oldData});
                }
            } else {
                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data){
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({added: data, removed:oldData});
                    }
                });
            }
        },

        // single
        clearSearch: function () {
            this.search.val("");
            this.focusser.val("");
        },

        // single
        data: function(value) {
            var data,
                triggerChange = false;

            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({added: value, removed:data});
                    }
                }
            }
        }
    });

    MultiSelect2 = clazz(AbstractSelect2, {

        // multi
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                "<ul class='select2-choices'>",
                "  <li class='select2-search-field'>",
                "    <label for='' class='select2-offscreen'></label>",
                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                "  </li>",
                "</ul>",
                "<div class='select2-drop select2-drop-multi select2-display-none'>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // multi
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            // TODO validate placeholder is a string if specified
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {

                    var data = [];

                    element.find("option").filter(function() { return this.selected && !this.disabled }).each2(function (i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var ids = splitVal(element.val(), opts.separator, opts.transformVal);
                    //search in data by array of ids, storing matching items in a list
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            // reorder matches based on the order they appear in the ids array because right now
                            // they are in the order in which they appear in data array
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }

            return opts;
        },

        // multi
        selectChoice: function (choice) {

            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {

            } else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },

        // multi
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);

            cleanupJQueryElements.call(this,
                "searchContainer",
                "selection"
            );
        },

        // multi
        initContainer: function () {

            var selector = ".select2-choices", selection;

            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);

            var _this = this;
            this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function (e) {
                _this.search[0].focus();
                _this.selectChoice($(this));
            });

            // rewrite labels from original element to focusser
            this.search.attr("id", "s2id_autogen"+nextUid());

            this.search.prev()
                .text($("label[for='" + this.opts.element.attr("id") + "']").text())
                .attr('for', this.search.attr('id'));
            this.opts.element.focus(this.bind(function () { this.focus(); }));

            this.search.on("input paste", this.bind(function() {
                if (this.search.attr('placeholder') && this.search.val().length == 0) return;
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));

            this.search.attr("tabindex", this.elementTabIndex);

            this.keydowns = 0;
            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);

                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    }
                    else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    }
                    else if (e.which === KEY.BACKSPACE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = prev.length ? prev : next;
                        }
                    } else if (e.which == KEY.DELETE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = next.length ? next : null;
                        }
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }

                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }

                if (this.opened()) {
                    switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus:true});
                        this.close();
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                    }
                }

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }

                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }

                this.open();

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                }

                if (e.which === KEY.ENTER) {
                    // prevent form from being submitted
                    killEvent(e);
                }

            }));

            this.search.on("keyup", this.bind(function (e) {
                this.keydowns = 0;
                this.resizeSearch();
            })
            );

            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));

            this.container.on("click", selector, this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    // clicked inside a select2 search choice, do not open
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));

            this.container.on("focus", selector, this.bind(function () {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));

            this.initContainerWidth();
            this.opts.element.hide();

            // set the placeholder if necessary
            this.clearSearch();
        },

        // multi
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // multi
        initSelection: function () {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                // set the placeholder if necessary
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data){
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        // set the placeholder if necessary
                        self.clearSearch();
                    }
                });
            }
        },

        // multi
        clearSearch: function () {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();

            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },

        // multi
        clearPlaceholder: function () {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },

        // multi
        opening: function () {
            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
            this.resizeSearch();

            this.parent.opening.apply(this, arguments);

            this.focusSearch();

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.updateResults(true);
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
            }
            this.opts.element.trigger($.Event("select2-open"));
        },

        // multi
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },

        // multi
        focus: function () {
            this.close();
            this.search.focus();
        },

        // multi
        isFocused: function () {
            return this.search.hasClass("select2-focused");
        },

        // multi
        updateSelection: function (data) {
            var ids = [], filtered = [], self = this;

            // filter out duplicates
            $(data).each(function () {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;

            this.selection.find(".select2-search-choice").remove();
            $(data).each(function () {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },

        // multi
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }

        },

        // multi
        onSelect: function (data, options) {

            if (!this.triggerSelect(data) || data.text === "") { return; }

            this.addSelectedChoice(data);

            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

            // keep track of the search's value before it gets cleared
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());

            this.clearSearch();
            this.updateResults();

            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);

            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults()>0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        // if we reached max selection size repaint the results so choices
                        // are replaced with the max selection reached message
                        this.updateResults(true);
                    } else {
                        // initializes search's value with nextSearchTerm and update search result
                        if(this.nextSearchTerm != undefined){
                            this.search.val(this.nextSearchTerm);
                            this.updateResults();
                            this.search.select();
                        }
                    }
                    this.positionDropdown();
                } else {
                    // if nothing left to select close
                    this.close();
                    this.search.width(10);
                }
            }

            // since its not possible to select an element that has already been
            // added we do not need to check if this is a new element before firing change
            this.triggerChange({ added: data });

            if (!options || !options.noFocus)
                this.focusSearch();
        },

        // multi
        cancel: function () {
            this.close();
            this.focusSearch();
        },

        addSelectedChoice: function (data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                    "    <div></div>" +
                    "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" +
                    "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                    "<div></div>" +
                    "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;

            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith($("<div></div>").html(formatted));
            }
            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }

            if(enableChoice){
              choice.find(".select2-search-choice-close")
                  .on("mousedown", killEvent)
                  .on("click dblclick", this.bind(function (e) {
                  if (!this.isInterfaceEnabled()) return;

                  this.unselect($(e.target));
                  this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                  killEvent(e);
                  this.close();
                  this.focusSearch();
              })).on("focus", this.bind(function () {
                  if (!this.isInterfaceEnabled()) return;
                  this.container.addClass("select2-container-active");
                  this.dropdown.addClass("select2-drop-active");
              }));
            }

            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);

            val.push(id);
            this.setVal(val);
        },

        // multi
        unselect: function (selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");

            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }

            data = selected.data("select2-data");

            if (!data) {
                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
                // and invoked on an element already removed
                return;
            }

            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);

            if (evt.isDefaultPrevented()) {
                return false;
            }

            while((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }

            selected.remove();

            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
            this.triggerChange({ removed: data });

            return true;
        },

        // multi
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;

            choices.each2(function (i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    // mark all children of the selected parent as selected
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });

            compound.each2(function(i, choice) {
                // hide an optgroup if it doesn't have any selectable children
                if (!choice.is('.select2-result-selectable')
                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });

            if (this.highlight() == -1 && noHighlightUpdate !== false && this.opts.closeOnSelect === true){
                self.highlight(0);
            }

            //If all results are chosen render formatNoMatches
            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>");
                    }
                }
            }

        },

        // multi
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },

        // multi
        resizeSearch: function () {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
                sideBorderPadding = getSideBorderPadding(this.search);

            minimumWidth = measureTextWidth(this.search) + 10;

            left = this.search.offset().left;

            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;

            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth <= 0) {
              searchWidth = minimumWidth;
            }

            this.search.width(Math.floor(searchWidth));
        },

        // multi
        getVal: function () {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator, this.opts.transformVal);
            }
        },

        // multi
        setVal: function (val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                // filter out duplicates
                $(val).each(function () {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },

        // multi
        buildChangeDetails: function (old, current) {
            var current = current.slice(0),
                old = old.slice(0);

            // remove intersection from each array
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if(i>0){
                            i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }

            return {added: current, removed: old};
        },


        // multi
        val: function (val, triggerChange) {
            var oldData, self=this;

            if (arguments.length === 0) {
                return this.getVal();
            }

            oldData=this.data();
            if (!oldData.length) oldData=[];

            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({added: this.data(), removed: oldData});
                }
                return;
            }

            // val is a list of ids
            this.setVal(val);

            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }

                this.opts.initSelection(this.opts.element, function(data){
                    var ids=$.map(data, self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                    }
                });
            }
            this.clearSearch();
        },

        // multi
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }

            // collapse search field into 0 width so its container can be collapsed as well
            this.search.width(0);
            // hide the container
            this.searchContainer.hide();
        },

        // multi
        onSortEnd:function() {

            var val=[], self=this;

            // show search and move it to the end of the list
            this.searchContainer.show();
            // make sure the search container is the last item in the list
            this.searchContainer.appendTo(this.searchContainer.parent());
            // since we collapsed the width in dragStarted, we resize it here
            this.resizeSearch();

            // update selection
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },

        // multi
        data: function(values, triggerChange) {
            var self=this, ids, old;
            if (arguments.length === 0) {
                 return this.selection
                     .children(".select2-search-choice")
                     .map(function() { return $(this).data("select2-data"); })
                     .get();
            } else {
                old = this.data();
                if (!values) { values = []; }
                ids = $.map(values, function(e) { return self.opts.id(e); });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });

    $.fn.select2 = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method, value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = { search: "externalSearch" };

        this.each(function () {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);

                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {opts.multiple = multiple = true;}
                }

                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {

                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }

                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;

                method=args[0];

                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];

                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0
                    || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
                    return false; // abort the iteration, ready to return first matched value
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };

    // plugin defaults, accessible to users
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup=[];
            markMatch(this.text(result), query.term, markup, escapeMarkup);
            return markup.join("");
        },
        transformVal: function(val) {
            return $.trim(val);
        },
        formatSelection: function (data, container, escapeMarkup) {
            return data ? escapeMarkup(this.text(data)) : undefined;
        },
        sortResults: function (results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {return data.css;},
        formatSelectionCssClass: function(data, container) {return undefined;},
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) { return e == undefined ? null : e.id; },
        text: function (e) {
          if (e && this.data && this.data.text) {
            if ($.isFunction(this.data.text)) {
              return this.data.text(e);
            } else {
              return e[this.data.text];
            }
          } else {
            return e.text;
          }
        },
        matcher: function(term, text) {
            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) { return c; },
        adaptDropdownCssClass: function(c) { return null; },
        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; },
        searchInputPlaceholder: '',
        createSearchChoicePosition: 'top',
        shouldFocusInput: function (instance) {
            // Attempt to detect touch devices
            var supportsTouchEvents = (('ontouchstart' in window) ||
                                       (navigator.msMaxTouchPoints > 0));

            // Only devices which support touch events should be special cased
            if (!supportsTouchEvents) {
                return true;
            }

            // Never focus the input if search is disabled
            if (instance.opts.minimumResultsForSearch < 0) {
                return false;
            }

            return true;
        }
    };

    $.fn.select2.locales = [];

    $.fn.select2.locales['en'] = {
         formatMatches: function (matches) { if (matches === 1) { return "One result is available, press enter to select it."; } return matches + " results are available, use up and down arrow keys to navigate."; },
         formatNoMatches: function () { return "No matches found"; },
         formatAjaxError: function (jqXHR, textStatus, errorThrown) { return "Loading failed"; },
         formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " or more character" + (n == 1 ? "" : "s"); },
         formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1 ? "" : "s"); },
         formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
         formatLoadMore: function (pageNumber) { return "Loading more results…"; },
         formatSearching: function () { return "Searching…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['en']);

    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };

    // exports
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        }, util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        }, "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };

}(jQuery));
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/*! algoliasearch 3.20.3 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js */

!function(e){var t;"undefined"!=typeof window?t=window:"undefined"!=typeof self&&(t=self),t.ALGOLIA_MIGRATION_LAYER=e()}(function(){return function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){function n(e,t){for(var r in t)e.setAttribute(r,t[r])}function o(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function i(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}t.exports=function(e,t,r){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t)||!!t.async,a.src=e,t.attrs&&n(a,t.attrs),t.text&&(a.text=""+t.text);var c="onload"in a?o:i;c(a,r),a.onload||o(a,r),s.appendChild(a)}},{}],2:[function(e,t,r){"use strict";function n(e){for(var t=new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/"+e.replace(".","\\.")+"(?:\\.min)?\\.js$"),r=document.getElementsByTagName("script"),n=!1,o=0,i=r.length;o<i;o++)if(r[o].src&&t.test(r[o].src)){n=!0;break}return n}t.exports=n},{}],3:[function(e,t,r){"use strict";function n(t){var r=e(1),n="//cdn.jsdelivr.net/algoliasearch/2/"+t+".min.js",i="-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";window.console&&(window.console.warn?window.console.warn(i):window.console.log&&window.console.log(i));try{document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>"),window.ALGOLIA_SUPPORTS_DOCWRITE===!0?(document.write('<script src="'+n+'"></script>'),o("document.write")()):r(n,o("DOMElement"))}catch(s){r(n,o("DOMElement"))}}function o(e){return function(){var t="AlgoliaSearch: loaded V2 script using "+e;window.console&&window.console.log&&window.console.log(t)}}t.exports=n},{1:1}],4:[function(e,t,r){"use strict";function n(){var e="-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";window.AlgoliaSearch=function(){throw new Error(e)},window.AlgoliaSearchHelper=function(){throw new Error(e)},window.AlgoliaExplainResults=function(){throw new Error(e)}}t.exports=n},{}],5:[function(e,t,r){"use strict";function n(t){var r=e(2),n=e(3),o=e(4);r(t)?n(t):o()}n("algoliasearch")},{2:2,3:3,4:4}]},{},[5])(5)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.algoliasearch=e()}}(function(){var e;return function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return o(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){(function(n){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+r.humanize(this.diff),!t)return e;var n="color: "+this.color;e=[e[0],n,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,n),e}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(t){}}function c(){try{return r.storage.debug}catch(e){}if("undefined"!=typeof n&&"env"in n)return n.env.DEBUG}function u(){try{return window.localStorage}catch(e){}}r=t.exports=e(2),r.log=s,r.formatArgs=i,r.save=a,r.load=c,r.useColors=o,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},r.enable(c())}).call(this,e(12))},{12:12,2:2}],2:[function(e,t,r){function n(){return r.colors[l++%r.colors.length]}function o(e){function t(){}function o(){var e=o,t=+new Date,i=t-(u||t);e.diff=i,e.prev=u,e.curr=t,u=t,null==e.useColors&&(e.useColors=r.useColors()),null==e.color&&e.useColors&&(e.color=n());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=r.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(t,n){if("%%"===t)return t;c++;var o=r.formatters[n];if("function"==typeof o){var i=s[c];t=o.call(e,i),s.splice(c,1),c--}return t}),s=r.formatArgs.apply(e,s);var l=o.log||r.log||console.log.bind(console);l.apply(e,s)}t.enabled=!1,o.enabled=!0;var i=r.enabled(e)?o:t;return i.namespace=e,i}function i(e){r.save(e);for(var t=(e||"").split(/[\s,]+/),n=t.length,o=0;o<n;o++)t[o]&&(e=t[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function s(){r.enable("")}function a(e){var t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}r=t.exports=o.debug=o,r.coerce=c,r.disable=s,r.enable=i,r.enabled=a,r.humanize=e(9),r.names=[],r.skips=[],r.formatters={};var u,l=0},{9:9}],3:[function(t,r,n){(function(o,i){!function(t,o){"object"==typeof n&&"undefined"!=typeof r?r.exports=o():"function"==typeof e&&e.amd?e(o):t.ES6Promise=o()}(this,function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function n(e){X=e}function s(e){W=e}function a(){return function(){return o.nextTick(h)}}function c(){return"undefined"!=typeof V?function(){V(h)}:p()}function u(){var e=0,t=new Z(h),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=h,function(){return e.port2.postMessage(0)}}function p(){var e=setTimeout;return function(){return e(h,1)}}function h(){for(var e=0;e<G;e+=2){var t=re[e],r=re[e+1];t(r),re[e]=void 0,re[e+1]=void 0}G=0}function d(){try{var e=t,r=e("vertx");return V=r.runOnLoop||r.runOnContext,c()}catch(n){return p()}}function f(e,t){var r=arguments,n=this,o=new this.constructor(m);void 0===o[oe]&&C(o);var i=n._state;return i?!function(){var e=r[i-1];W(function(){return P(i,o,e,n._result)})}():O(n,o,e,t),o}function y(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var r=new t(m);return j(r,e),r}function m(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function b(e){try{return e.then}catch(t){return ce.error=t,ce}}function w(e,t,r,n){try{e.call(t,r,n)}catch(o){return o}}function _(e,t,r){W(function(e){var n=!1,o=w(r,t,function(r){n||(n=!0,t!==r?j(e,r):I(e,r))},function(t){n||(n=!0,k(e,t))},"Settle: "+(e._label||" unknown promise"));!n&&o&&(n=!0,k(e,o))},e)}function x(e,t){t._state===se?I(e,t._result):t._state===ae?k(e,t._result):O(t,void 0,function(t){return j(e,t)},function(t){return k(e,t)})}function T(e,t,n){t.constructor===e.constructor&&n===f&&t.constructor.resolve===y?x(e,t):n===ce?k(e,ce.error):void 0===n?I(e,t):r(n)?_(e,t,n):I(e,t)}function j(t,r){t===r?k(t,v()):e(r)?T(t,r,b(r)):I(t,r)}function S(e){e._onerror&&e._onerror(e._result),R(e)}function I(e,t){e._state===ie&&(e._result=t,e._state=se,0!==e._subscribers.length&&W(R,e))}function k(e,t){e._state===ie&&(e._state=ae,e._result=t,W(S,e))}function O(e,t,r,n){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+se]=r,o[i+ae]=n,0===i&&e._state&&W(R,e)}function R(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n=void 0,o=void 0,i=e._result,s=0;s<t.length;s+=3)n=t[s],o=t[s+r],n?P(r,n,o,i):o(i);e._subscribers.length=0}}function A(){this.error=null}function E(e,t){try{return e(t)}catch(r){return ue.error=r,ue}}function P(e,t,n,o){var i=r(n),s=void 0,a=void 0,c=void 0,u=void 0;if(i){if(s=E(n,o),s===ue?(u=!0,a=s.error,s=null):c=!0,t===s)return void k(t,g())}else s=o,c=!0;t._state!==ie||(i&&c?j(t,s):u?k(t,a):e===se?I(t,s):e===ae&&k(t,s))}function U(e,t){try{t(function(t){j(e,t)},function(t){k(e,t)})}catch(r){k(e,r)}}function q(){return le++}function C(e){e[oe]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function N(e,t){this._instanceConstructor=e,this.promise=new e(m),this.promise[oe]||C(this.promise),Q(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?I(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&I(this.promise,this._result))):k(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function L(e){return new N(this,e).promise}function H(e){var t=this;return new t(Q(e)?function(r,n){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(r,n)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function M(e){var t=this,r=new t(m);return k(r,e),r}function J(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(e){this[oe]=q(),this._result=this._state=void 0,this._subscribers=[],m!==e&&("function"!=typeof e&&J(),this instanceof K?U(this,e):F())}function B(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=e.Promise;if(r){var n=null;try{n=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===n&&!r.cast)return}e.Promise=K}var $=void 0;$=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Q=$,G=0,V=void 0,X=void 0,W=function(e,t){re[G]=e,re[G+1]=t,G+=2,2===G&&(X?X(h):ne())},Y="undefined"!=typeof window?window:void 0,z=Y||{},Z=z.MutationObserver||z.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof o&&"[object process]"==={}.toString.call(o),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,re=new Array(1e3),ne=void 0;ne=ee?a():Z?u():te?l():void 0===Y&&"function"==typeof t?d():p();var oe=Math.random().toString(36).substring(16),ie=void 0,se=1,ae=2,ce=new A,ue=new A,le=0;return N.prototype._enumerate=function(){for(var e=this.length,t=this._input,r=0;this._state===ie&&r<e;r++)this._eachEntry(t[r],r)},N.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===y){var o=b(e);if(o===f&&e._state!==ie)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===K){var i=new r(m);T(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},N.prototype._settledAt=function(e,t,r){var n=this.promise;n._state===ie&&(this._remaining--,e===ae?k(n,r):this._result[t]=r),0===this._remaining&&I(n,this._result)},N.prototype._willSettleAt=function(e,t){var r=this;O(e,void 0,function(e){return r._settledAt(se,t,e)},function(e){return r._settledAt(ae,t,e)})},K.all=L,K.race=H,K.resolve=y,K.reject=M,K._setScheduler=n,K._setAsap=s,K._asap=W,K.prototype={constructor:K,then:f,"catch":function(e){return this.then(null,e)}},K.polyfill=B,K.Promise=K,K})}).call(this,t(12),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{12:12}],4:[function(e,t,r){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,r,n,i,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(r=this._events[e],a(r))return!1;if(o(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),r.apply(this,i)}else if(s(r))for(i=Array.prototype.slice.call(arguments,1),u=r.slice(),n=u.length,c=0;c<n;c++)u[c].apply(this,i);return!0},n.prototype.addListener=function(e,t){var r;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var r,n,i,a;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],i=r.length,n=-1,r===t||o(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(a=i;a-- >0;)if(r[a]===t||r[a].listener&&r[a].listener===t){n=a;break}if(n<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],o(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}],5:[function(e,t,r){var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;t.exports=function(e,t,r){if("[object Function]"!==o.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var s=0;s<i;s++)t.call(r,e[s],s,e);else for(var a in e)n.call(e,a)&&t.call(r,e[a],a,e)}},{}],6:[function(e,t,r){(function(e){"undefined"!=typeof window?t.exports=window:"undefined"!=typeof e?t.exports=e:"undefined"!=typeof self?t.exports=self:t.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],8:[function(e,t,r){var n={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},{}],9:[function(e,t,r){function n(e){if(e=String(e),!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),n=(t[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*p;case"days":case"day":case"d":return r*l;case"hours":case"hour":case"hrs":case"hr":case"h":return r*u;case"minutes":case"minute":case"mins":case"min":case"m":return r*c;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function o(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function i(e){return s(e,l,"day")||s(e,u,"hour")||s(e,c,"minute")||s(e,a,"second")||e+" ms"}function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,c=60*a,u=60*c,l=24*u,p=365.25*l;t.exports=function(e,t){t=t||{};var r=typeof e;if("string"===r&&e.length>0)return n(e);if("number"===r&&isNaN(e)===!1)return t["long"]?i(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],10:[function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,s=e(11),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},h={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!h["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(t){return!0}}catch(t){return!0}return!1}(),f=function(e){if("undefined"==typeof window||!d)return p(e);try{return p(e)}catch(t){return!1}},y=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),i=s(e),a=t&&"[object String]"===o.call(e),p=[];if(!t&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var h=u&&r;if(a&&e.length>0&&!n.call(e,0))for(var d=0;d<e.length;++d)p.push(String(d));if(i&&e.length>0)for(var y=0;y<e.length;++y)p.push(String(y));else for(var m in e)h&&"prototype"===m||!n.call(e,m)||p.push(String(m));if(c)for(var v=f(e),g=0;g<l.length;++g)v&&"constructor"===l[g]||!n.call(e,l[g])||p.push(l[g]);return p};y.shim=function(){if(Object.keys){var e=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!e){var t=Object.keys;Object.keys=function(e){return t(s(e)?i.call(e):e)}}}else Object.keys=y;return Object.keys||y},t.exports=y},{11:11}],11:[function(e,t,r){"use strict";var n=Object.prototype.toString;t.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},{}],12:[function(e,t,r){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function s(e){if(h===clearTimeout)return clearTimeout(e);if((h===o||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function a(){m&&f&&(m=!1,f.length?y=f.concat(y):v=-1,y.length&&c())}function c(){if(!m){var e=i(a);m=!0;for(var t=y.length;t;){for(f=y,y=[];++v<t;)f&&f[v].run();v=-1,t=y.length}f=null,m=!1,s(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var p,h,d=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(e){p=n}try{h="function"==typeof clearTimeout?clearTimeout:o}catch(e){h=o}}();var f,y=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];y.push(new u(e,t)),1!==y.length||m||i(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],13:[function(e,t,r){"use strict";function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?n(s(e),function(s){var a=encodeURIComponent(o(s))+r;return i(e[s])?n(e[s],function(e){return a+encodeURIComponent(o(e))}).join(t):a+encodeURIComponent(o(e[s]))}).join(t):a?encodeURIComponent(o(a))+r+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],14:[function(e,t,r){function n(){c.apply(this,arguments)}function o(){var e="Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";throw new l.AlgoliaSearchError(e)}t.exports=n;var i=e(16),s=e(26),a=e(27),c=e(15),u=e(7),l=e(28);u(n,c),n.prototype.deleteIndex=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(e),hostType:"write",callback:t})},n.prototype.moveIndex=function(e,t,r){var n={operation:"move",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:n,hostType:"write",callback:r})},n.prototype.copyIndex=function(e,t,r){var n={operation:"copy",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:n,hostType:"write",callback:r})},n.prototype.getLogs=function(t,r,n){var o=e(25),i={};return"object"==typeof t?(i=o(t),n=r):0===arguments.length||"function"==typeof t?n=t:1===arguments.length||"function"==typeof r?(n=r,i.offset=t):(i.offset=t,i.length=r),void 0===i.offset&&(i.offset=0),void 0===i.length&&(i.length=10),this._jsonRequest({method:"GET",url:"/1/logs?"+this._getSearchParams(i,""),hostType:"read",callback:n})},n.prototype.listIndexes=function(e,t){var r="";return void 0===e||"function"==typeof e?t=e:r="?page="+e,this._jsonRequest({method:"GET",url:"/1/indexes"+r,hostType:"read",callback:t})},n.prototype.initIndex=function(e){return new i(this,e)},n.prototype.listUserKeys=function(e){return this._jsonRequest({method:"GET",url:"/1/keys",hostType:"read",callback:e})},n.prototype.getUserKeyACL=function(e,t){return this._jsonRequest({method:"GET",url:"/1/keys/"+e,hostType:"read",callback:t})},n.prototype.deleteUserKey=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/keys/"+e,hostType:"write",callback:t})},n.prototype.addUserKey=function(t,r,n){var o=e(8),i="Usage: client.addUserKey(arrayOfAcls[, params, callback])";if(!o(t))throw new Error(i);1!==arguments.length&&"function"!=typeof r||(n=r,r=null);var s={acl:t};return r&&(s.validity=r.validity,s.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,s.maxHitsPerQuery=r.maxHitsPerQuery,s.indexes=r.indexes,s.description=r.description,r.queryParameters&&(s.queryParameters=this._getSearchParams(r.queryParameters,"")),s.referers=r.referers),this._jsonRequest({method:"POST",url:"/1/keys",body:s,hostType:"write",callback:n})},n.prototype.addUserKeyWithValidity=s(function(e,t,r){return this.addUserKey(e,t,r)},a("client.addUserKeyWithValidity()","client.addUserKey()")),n.prototype.updateUserKey=function(t,r,n,o){var i=e(8),s="Usage: client.updateUserKey(key, arrayOfAcls[, params, callback])";if(!i(r))throw new Error(s);2!==arguments.length&&"function"!=typeof n||(o=n,n=null);var a={acl:r};return n&&(a.validity=n.validity,a.maxQueriesPerIPPerHour=n.maxQueriesPerIPPerHour,a.maxHitsPerQuery=n.maxHitsPerQuery,a.indexes=n.indexes,a.description=n.description,n.queryParameters&&(a.queryParameters=this._getSearchParams(n.queryParameters,"")),a.referers=n.referers),this._jsonRequest({method:"PUT",url:"/1/keys/"+t,body:a,hostType:"write",callback:o})},n.prototype.startQueriesBatch=s(function(){this._batch=[]},a("client.startQueriesBatch()","client.search()")),n.prototype.addQueryInBatch=s(function(e,t,r){this._batch.push({indexName:e,query:t,params:r})},a("client.addQueryInBatch()","client.search()")),n.prototype.sendQueriesBatch=s(function(e){return this.search(this._batch,e)},a("client.sendQueriesBatch()","client.search()")),n.prototype.batch=function(t,r){var n=e(8),o="Usage: client.batch(operations[, callback])";if(!n(t))throw new Error(o);return this._jsonRequest({method:"POST",url:"/1/indexes/*/batch",body:{requests:t},hostType:"write",callback:r})},n.prototype.destroy=o,n.prototype.enableRateLimitForward=o,n.prototype.disableRateLimitForward=o,n.prototype.useSecuredAPIKey=o,n.prototype.disableSecuredAPIKey=o,n.prototype.generateSecuredApiKey=o},{15:15,16:16,25:25,26:26,27:27,28:28,7:7,8:8}],15:[function(e,t,r){(function(r){function n(t,r,n){var i=e(1)("algoliasearch"),s=e(25),a=e(8),u=e(30),l="Usage: algoliasearch(applicationID, apiKey, opts)";if(n._allowEmptyCredentials!==!0&&!t)throw new c.AlgoliaSearchError("Please provide an application ID. "+l);if(n._allowEmptyCredentials!==!0&&!r)throw new c.AlgoliaSearchError("Please provide an API key. "+l);this.applicationID=t,this.apiKey=r,this.hosts={read:[],write:[]},n=n||{};var p=n.protocol||"https:";if(this._timeouts=n.timeouts||{connect:1e3,read:2e3,write:3e4},n.timeout&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=n.timeout),/:$/.test(p)||(p+=":"),"http:"!==n.protocol&&"https:"!==n.protocol)throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+n.protocol+"`)");if(this._checkAppIdData(),n.hosts)a(n.hosts)?(this.hosts.read=s(n.hosts),this.hosts.write=s(n.hosts)):(this.hosts.read=s(n.hosts.read),this.hosts.write=s(n.hosts.write));else{var h=u(this._shuffleResult,function(e){return t+"-"+e+".algolianet.com"});this.hosts.read=[this.applicationID+"-dsn.algolia.net"].concat(h),this.hosts.write=[this.applicationID+".algolia.net"].concat(h)}this.hosts.read=u(this.hosts.read,o(p)),this.hosts.write=u(this.hosts.write,o(p)),this.extraHeaders=[],this.cache=n._cache||{},this._ua=n._ua,this._useCache=!(void 0!==n._useCache&&!n._cache)||n._useCache,this._useFallback=void 0===n.useFallback||n.useFallback,this._setTimeout=n._setTimeout,i("init done, %j",this)}function o(e){return function(t){return e+"//"+t.toLowerCase()}}function i(e){if(void 0===Array.prototype.toJSON)return JSON.stringify(e);var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var r=JSON.stringify(e);return Array.prototype.toJSON=t,r}function s(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),n-=1,t=e[n],e[n]=e[r],e[r]=t;return e}function a(e){var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n;n="x-algolia-api-key"===r||"x-algolia-application-id"===r?"**hidden for security purposes**":e[r],t[r]=n}return t}t.exports=n;var c=e(28),u=e(29),l=e(18),p=e(34),h=500,d=r.env.RESET_APP_DATA_TIMER&&parseInt(r.env.RESET_APP_DATA_TIMER,10)||12e4;n.prototype.initIndex=function(e){return new l(this,e)},n.prototype.setExtraHeader=function(e,t){this.extraHeaders.push({name:e.toLowerCase(),value:t})},n.prototype.addAlgoliaAgent=function(e){this._ua.indexOf(";"+e)===-1&&(this._ua+=";"+e)},n.prototype._jsonRequest=function(t){function r(e,u){function h(e){var t=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200;s("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,t,e.headers);var r=2===Math.floor(t/100),i=new Date;if(m.push({currentHost:x,headers:a(o),content:n||null,contentLength:void 0!==n?n.length:null,method:u.method,timeouts:u.timeouts,url:u.url,startTime:_,endTime:i,duration:i-_,statusCode:t}),r)return p._useCache&&l&&(l[w]=e.responseText),e.body;var h=4!==Math.floor(t/100);if(h)return d+=1,g();s("unrecoverable error");var f=new c.AlgoliaSearchError(e.body&&e.body.message,{debugData:m,statusCode:t});return p._promise.reject(f)}function v(e){s("error: %s, stack: %s",e.message,e.stack);var r=new Date;return m.push({currentHost:x,headers:a(o),content:n||null,contentLength:void 0!==n?n.length:null,method:u.method,timeouts:u.timeouts,url:u.url,startTime:_,endTime:r,duration:r-_}),e instanceof c.AlgoliaSearchError||(e=new c.Unknown(e&&e.message,e)),d+=1,e instanceof c.Unknown||e instanceof c.UnparsableJSON||d>=p.hosts[t.hostType].length&&(f||!y)?(e.debugData=m,p._promise.reject(e)):e instanceof c.RequestTimeout?b():g()}function g(){return s("retrying request"),p._incrementHostIndex(t.hostType),r(e,u)}function b(){return s("retrying request with higher timeout"),p._incrementHostIndex(t.hostType),p._incrementTimeoutMultipler(),u.timeouts=p._getTimeoutsForRequest(t.hostType),r(e,u)}p._checkAppIdData();var w,_=new Date;if(p._useCache&&(w=t.url),p._useCache&&n&&(w+="_body_"+u.body),p._useCache&&l&&void 0!==l[w])return s("serving response from cache"),p._promise.resolve(JSON.parse(l[w]));if(d>=p.hosts[t.hostType].length)return!y||f?(s("could not get any response"),
p._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+p.applicationID,{debugData:m}))):(s("switching to fallback"),d=0,u.method=t.fallback.method,u.url=t.fallback.url,u.jsonBody=t.fallback.body,u.jsonBody&&(u.body=i(u.jsonBody)),o=p._computeRequestHeaders(),u.timeouts=p._getTimeoutsForRequest(t.hostType),p._setHostIndexByType(0,t.hostType),f=!0,r(p._request.fallback,u));var x=p._getHostByType(t.hostType),T=x+u.url,j={body:u.body,jsonBody:u.jsonBody,method:u.method,headers:o,timeouts:u.timeouts,debug:s};return s("method: %s, url: %s, headers: %j, timeouts: %d",j.method,T,j.headers,j.timeouts),e===p._request.fallback&&s("using fallback"),e.call(p,T,j).then(h,v)}this._checkAppIdData();var n,o,s=e(1)("algoliasearch:"+t.url),l=t.cache,p=this,d=0,f=!1,y=p._useFallback&&p._request.fallback&&t.fallback;this.apiKey.length>h&&void 0!==t.body&&(void 0!==t.body.params||void 0!==t.body.requests)?(t.body.apiKey=this.apiKey,o=this._computeRequestHeaders(!1)):o=this._computeRequestHeaders(),void 0!==t.body&&(n=i(t.body)),s("request start");var m=[],v=r(p._request,{url:t.url,method:t.method,body:n,jsonBody:t.body,timeouts:p._getTimeoutsForRequest(t.hostType)});return t.callback?void v.then(function(e){u(function(){t.callback(null,e)},p._setTimeout||setTimeout)},function(e){u(function(){t.callback(e)},p._setTimeout||setTimeout)}):v},n.prototype._getSearchParams=function(e,t){if(void 0===e||null===e)return t;for(var r in e)null!==r&&void 0!==e[r]&&e.hasOwnProperty(r)&&(t+=""===t?"":"&",t+=r+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(e[r])?i(e[r]):e[r]));return t},n.prototype._computeRequestHeaders=function(t){var r=e(5),n={"x-algolia-agent":this._ua,"x-algolia-application-id":this.applicationID};return t!==!1&&(n["x-algolia-api-key"]=this.apiKey),this.userToken&&(n["x-algolia-usertoken"]=this.userToken),this.securityTags&&(n["x-algolia-tagfilters"]=this.securityTags),this.extraHeaders&&r(this.extraHeaders,function(e){n[e.name]=e.value}),n},n.prototype.search=function(t,r,n){var o=e(8),i=e(30),s="Usage: client.search(arrayOfQueries[, callback])";if(!o(t))throw new Error(s);"function"==typeof r?(n=r,r={}):void 0===r&&(r={});var a=this,c={requests:i(t,function(e){var t="";return void 0!==e.query&&(t+="query="+encodeURIComponent(e.query)),{indexName:e.indexName,params:a._getSearchParams(e.params,t)}})},u=i(c.requests,function(e,t){return t+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(e.indexName)+"?"+e.params)}).join("&"),l="/1/indexes/*/queries";return void 0!==r.strategy&&(l+="?strategy="+r.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:l,body:c,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:u}},callback:n})},n.prototype.setSecurityTags=function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var t=[],r=0;r<e.length;++r)if("[object Array]"===Object.prototype.toString.call(e[r])){for(var n=[],o=0;o<e[r].length;++o)n.push(e[r][o]);t.push("("+n.join(",")+")")}else t.push(e[r]);e=t.join(",")}this.securityTags=e},n.prototype.setUserToken=function(e){this.userToken=e},n.prototype.clearCache=function(){this.cache={}},n.prototype.setRequestTimeout=function(e){e&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=e)},n.prototype.setTimeouts=function(e){this._timeouts=e},n.prototype.getTimeouts=function(){return this._timeouts},n.prototype._getAppIdData=function(){var e=p.get(this.applicationID);return null!==e&&this._cacheAppIdData(e),e},n.prototype._setAppIdData=function(e){return e.lastChange=(new Date).getTime(),this._cacheAppIdData(e),p.set(this.applicationID,e)},n.prototype._checkAppIdData=function(){var e=this._getAppIdData(),t=(new Date).getTime();return null===e||t-e.lastChange>d?this._resetInitialAppIdData(e):e},n.prototype._resetInitialAppIdData=function(e){var t=e||{};return t.hostIndexes={read:0,write:0},t.timeoutMultiplier=1,t.shuffleResult=t.shuffleResult||s([1,2,3]),this._setAppIdData(t)},n.prototype._cacheAppIdData=function(e){this._hostIndexes=e.hostIndexes,this._timeoutMultiplier=e.timeoutMultiplier,this._shuffleResult=e.shuffleResult},n.prototype._partialAppIdDataUpdate=function(t){var r=e(5),n=this._getAppIdData();return r(t,function(e,t){n[t]=e}),this._setAppIdData(n)},n.prototype._getHostByType=function(e){return this.hosts[e][this._getHostIndexByType(e)]},n.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier},n.prototype._getHostIndexByType=function(e){return this._hostIndexes[e]},n.prototype._setHostIndexByType=function(t,r){var n=e(25),o=n(this._hostIndexes);return o[r]=t,this._partialAppIdDataUpdate({hostIndexes:o}),t},n.prototype._incrementHostIndex=function(e){return this._setHostIndexByType((this._getHostIndexByType(e)+1)%this.hosts[e].length,e)},n.prototype._incrementTimeoutMultipler=function(){var e=Math.max(this._timeoutMultiplier+1,4);return this._partialAppIdDataUpdate({timeoutMultiplier:e})},n.prototype._getTimeoutsForRequest=function(e){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[e]*this._timeoutMultiplier}}}).call(this,e(12))},{1:1,12:12,18:18,25:25,28:28,29:29,30:30,34:34,5:5,8:8}],16:[function(e,t,r){function n(){i.apply(this,arguments)}var o=e(7),i=e(18),s=e(26),a=e(27),c=e(29),u=e(28);t.exports=n,o(n,i),n.prototype.addObject=function(e,t,r){var n=this;return 1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0),this.as._jsonRequest({method:void 0!==t?"PUT":"POST",url:"/1/indexes/"+encodeURIComponent(n.indexName)+(void 0!==t?"/"+encodeURIComponent(t):""),body:e,hostType:"write",callback:r})},n.prototype.addObjects=function(t,r){var n=e(8),o="Usage: index.addObjects(arrayOfObjects[, callback])";if(!n(t))throw new Error(o);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"addObject",body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},n.prototype.partialUpdateObject=function(e,t,r){1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var n=this,o="/1/indexes/"+encodeURIComponent(n.indexName)+"/"+encodeURIComponent(e.objectID)+"/partial";return t===!1&&(o+="?createIfNotExists=false"),this.as._jsonRequest({method:"POST",url:o,body:e,hostType:"write",callback:r})},n.prototype.partialUpdateObjects=function(t,r){var n=e(8),o="Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";if(!n(t))throw new Error(o);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"partialUpdateObject",objectID:t[a].objectID,body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},n.prototype.saveObject=function(e,t){var r=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/"+encodeURIComponent(e.objectID),body:e,hostType:"write",callback:t})},n.prototype.saveObjects=function(t,r){var n=e(8),o="Usage: index.saveObjects(arrayOfObjects[, callback])";if(!n(t))throw new Error(o);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"updateObject",objectID:t[a].objectID,body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},n.prototype.deleteObject=function(e,t){if("function"==typeof e||"string"!=typeof e&&"number"!=typeof e){var r=new u.AlgoliaSearchError("Cannot delete an object without an objectID");return t=e,"function"==typeof t?t(r):this.as._promise.reject(r)}var n=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/"+encodeURIComponent(e),hostType:"write",callback:t})},n.prototype.deleteObjects=function(t,r){var n=e(8),o=e(30),i="Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";if(!n(t))throw new Error(i);var s=this,a={requests:o(t,function(e){return{action:"deleteObject",objectID:e,body:{objectID:e}}})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:a,hostType:"write",callback:r})},n.prototype.deleteByQuery=function(t,r,n){function o(e){if(0===e.nbHits)return e;var t=p(e.hits,function(e){return e.objectID});return h.deleteObjects(t).then(i).then(s)}function i(e){return h.waitTask(e.taskID)}function s(){return h.deleteByQuery(t,r)}function a(){c(function(){n(null)},d._setTimeout||setTimeout)}function u(e){c(function(){n(e)},d._setTimeout||setTimeout)}var l=e(25),p=e(30),h=this,d=h.as;1===arguments.length||"function"==typeof r?(n=r,r={}):r=l(r),r.attributesToRetrieve="objectID",r.hitsPerPage=1e3,r.distinct=!1,this.clearCache();var f=this.search(t,r).then(o);return n?void f.then(a,u):f},n.prototype.browseAll=function(t,r){function n(e){if(!a._stopped){var t;t=void 0!==e?"cursor="+encodeURIComponent(e):l,c._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/browse?"+t,hostType:"read",callback:o})}}function o(e,t){if(!a._stopped)return e?void a._error(e):(a._result(t),void 0===t.cursor?void a._end():void n(t.cursor))}"object"==typeof t&&(r=t,t=void 0);var i=e(31),s=e(17),a=new s,c=this.as,u=this,l=c._getSearchParams(i({},r||{},{query:t}),"");return n(),a},n.prototype.ttAdapter=function(e){var t=this;return function(r,n,o){var i;i="function"==typeof o?o:n,t.search(r,e,function(e,t){return e?void i(e):void i(t.hits)})}},n.prototype.waitTask=function(e,t){function r(){return l._jsonRequest({method:"GET",hostType:"read",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/task/"+e}).then(function(e){a++;var t=i*a*a;return t>s&&(t=s),"published"!==e.status?l._promise.delay(t).then(r):e})}function n(e){c(function(){t(null,e)},l._setTimeout||setTimeout)}function o(e){c(function(){t(e)},l._setTimeout||setTimeout)}var i=100,s=5e3,a=0,u=this,l=u.as,p=r();return t?void p.then(n,o):p},n.prototype.clearIndex=function(e){var t=this;return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/clear",hostType:"write",callback:e})},n.prototype.getSettings=function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/settings?getVersion=2",hostType:"read",callback:e})},n.prototype.searchSynonyms=function(e,t){return"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/search",body:e,hostType:"read",callback:t})},n.prototype.saveSynonym=function(e,t,r){return"function"==typeof t?(r=t,t={}):void 0===t&&(t={}),this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e.objectID)+"?forwardToSlaves="+(t.forwardToSlaves?"true":"false"),body:e,hostType:"write",callback:r})},n.prototype.getSynonym=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e),hostType:"read",callback:t})},n.prototype.deleteSynonym=function(e,t,r){return"function"==typeof t?(r=t,t={}):void 0===t&&(t={}),this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e)+"?forwardToSlaves="+(t.forwardToSlaves?"true":"false"),hostType:"write",callback:r})},n.prototype.clearSynonyms=function(e,t){return"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/clear?forwardToSlaves="+(e.forwardToSlaves?"true":"false"),hostType:"write",callback:t})},n.prototype.batchSynonyms=function(e,t,r){return"function"==typeof t?(r=t,t={}):void 0===t&&(t={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/batch?forwardToSlaves="+(t.forwardToSlaves?"true":"false")+"&replaceExistingSynonyms="+(t.replaceExistingSynonyms?"true":"false"),hostType:"write",body:e,callback:r})},n.prototype.setSettings=function(e,t,r){1!==arguments.length&&"function"!=typeof t||(r=t,t={});var n=t.forwardToSlaves||!1,o=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/settings?forwardToSlaves="+(n?"true":"false"),hostType:"write",body:e,callback:r})},n.prototype.listUserKeys=function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/keys",hostType:"read",callback:e})},n.prototype.getUserKeyACL=function(e,t){var r=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/keys/"+e,hostType:"read",callback:t})},n.prototype.deleteUserKey=function(e,t){var r=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/keys/"+e,hostType:"write",callback:t})},n.prototype.addUserKey=function(t,r,n){var o=e(8),i="Usage: index.addUserKey(arrayOfAcls[, params, callback])";if(!o(t))throw new Error(i);1!==arguments.length&&"function"!=typeof r||(n=r,r=null);var s={acl:t};return r&&(s.validity=r.validity,s.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,s.maxHitsPerQuery=r.maxHitsPerQuery,s.description=r.description,r.queryParameters&&(s.queryParameters=this.as._getSearchParams(r.queryParameters,"")),s.referers=r.referers),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys",body:s,hostType:"write",callback:n})},n.prototype.addUserKeyWithValidity=s(function(e,t,r){return this.addUserKey(e,t,r)},a("index.addUserKeyWithValidity()","index.addUserKey()")),n.prototype.updateUserKey=function(t,r,n,o){var i=e(8),s="Usage: index.updateUserKey(key, arrayOfAcls[, params, callback])";if(!i(r))throw new Error(s);2!==arguments.length&&"function"!=typeof n||(o=n,n=null);var a={acl:r};return n&&(a.validity=n.validity,a.maxQueriesPerIPPerHour=n.maxQueriesPerIPPerHour,a.maxHitsPerQuery=n.maxHitsPerQuery,a.description=n.description,n.queryParameters&&(a.queryParameters=this.as._getSearchParams(n.queryParameters,"")),a.referers=n.referers),this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys/"+t,body:a,hostType:"write",callback:o})}},{17:17,18:18,25:25,26:26,27:27,28:28,29:29,30:30,31:31,7:7,8:8}],17:[function(e,t,r){"use strict";function n(){}t.exports=n;var o=e(7),i=e(4).EventEmitter;o(n,i),n.prototype.stop=function(){this._stopped=!0,this._clean()},n.prototype._end=function(){this.emit("end"),this._clean()},n.prototype._error=function(e){this.emit("error",e),this._clean()},n.prototype._result=function(e){this.emit("result",e)},n.prototype._clean=function(){this.removeAllListeners("stop"),this.removeAllListeners("end"),this.removeAllListeners("error"),this.removeAllListeners("result")}},{4:4,7:7}],18:[function(e,t,r){function n(e,t){this.indexName=t,this.as=e,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}var o=e(24),i=e(26),s=e(27);t.exports=n,n.prototype.clearCache=function(){this.cache={}},n.prototype.search=o("query"),n.prototype.similarSearch=o("similarQuery"),n.prototype.browse=function(t,r,n){var o,i,s=e(31),a=this;0===arguments.length||1===arguments.length&&"function"==typeof arguments[0]?(o=0,n=arguments[0],t=void 0):"number"==typeof arguments[0]?(o=arguments[0],"number"==typeof arguments[1]?i=arguments[1]:"function"==typeof arguments[1]&&(n=arguments[1],i=void 0),t=void 0,r=void 0):"object"==typeof arguments[0]?("function"==typeof arguments[1]&&(n=arguments[1]),r=arguments[0],t=void 0):"string"==typeof arguments[0]&&"function"==typeof arguments[1]&&(n=arguments[1],r=void 0),r=s({},r||{},{page:o,hitsPerPage:i,query:t});var c=this.as._getSearchParams(r,"");return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(a.indexName)+"/browse?"+c,hostType:"read",callback:n})},n.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse?cursor="+encodeURIComponent(e),hostType:"read",callback:t})},n.prototype.searchForFacetValues=function(t,r){var n=e(25),o=e(32),i="Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";if(void 0===t.facetName||void 0===t.facetQuery)throw new Error(i);var s=t.facetName,a=o(n(t),function(e){return"facetName"===e}),c=this.as._getSearchParams(a,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(s)+"/query",hostType:"read",body:{params:c},callback:r})},n.prototype.searchFacet=i(function(e,t){return this.searchForFacetValues(e,t)},s("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])")),n.prototype._search=function(e,t,r){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:r})},n.prototype.getObject=function(e,t,r){var n=this;1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var o="";if(void 0!==t){o="?attributes=";for(var i=0;i<t.length;++i)0!==i&&(o+=","),o+=t[i]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/"+encodeURIComponent(e)+o,hostType:"read",callback:r})},n.prototype.getObjects=function(t,r,n){var o=e(8),i=e(30),s="Usage: index.getObjects(arrayOfObjectIDs[, callback])";if(!o(t))throw new Error(s);var a=this;1!==arguments.length&&"function"!=typeof r||(n=r,r=void 0);var c={requests:i(t,function(e){var t={indexName:a.indexName,objectID:e};return r&&(t.attributesToRetrieve=r.join(",")),t})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:c,callback:n})},n.prototype.as=null,n.prototype.indexName=null,n.prototype.typeAheadArgs=null,n.prototype.typeAheadValueOption=null},{24:24,25:25,26:26,27:27,30:30,31:31,32:32,8:8}],19:[function(e,t,r){"use strict";var n=e(14),o=e(20);t.exports=o(n)},{14:14,20:20}],20:[function(e,t,r){(function(r){"use strict";var n=e(6),o=n.Promise||e(3).Promise;t.exports=function(t,i){function s(t,r,n){var o=e(25),i=e(21);return n=o(n||{}),void 0===n.protocol&&(n.protocol=i()),n._ua=n._ua||s.ua,new a(t,r,n)}function a(){t.apply(this,arguments)}var c=e(7),u=e(28),l=e(22),p=e(23),h=e(33);i=i||"","debug"===r.env.NODE_ENV&&e(1).enable("algoliasearch*"),s.version=e(35),s.ua="Algolia for vanilla JavaScript "+i+s.version,s.initPlaces=h(s),n.__algolia={debug:e(1),algoliasearch:s};var d={hasXMLHttpRequest:"XMLHttpRequest"in n,hasXDomainRequest:"XDomainRequest"in n};return d.hasXMLHttpRequest&&(d.cors="withCredentials"in new XMLHttpRequest),c(a,t),a.prototype._request=function(e,t){return new o(function(r,n){function o(){if(!f){clearTimeout(h);var e;try{e={body:JSON.parse(m.responseText),responseText:m.responseText,statusCode:m.status,headers:m.getAllResponseHeaders&&m.getAllResponseHeaders()||{}}}catch(t){e=new u.UnparsableJSON({more:m.responseText})}e instanceof u.UnparsableJSON?n(e):r(e)}}function i(e){f||(clearTimeout(h),n(new u.Network({more:e})))}function s(){f=!0,m.abort(),n(new u.RequestTimeout)}function a(){v=!0,clearTimeout(h),h=setTimeout(s,t.timeouts.complete)}function c(){v||a()}function p(){!v&&m.readyState>1&&a()}if(!d.cors&&!d.hasXDomainRequest)return void n(new u.Network("CORS not supported"));e=l(e,t.headers);var h,f,y=t.body,m=d.cors?new XMLHttpRequest:new XDomainRequest,v=!1;h=setTimeout(s,t.timeouts.connect),m.onprogress=c,"onreadystatechange"in m&&(m.onreadystatechange=p),m.onload=o,m.onerror=i,m instanceof XMLHttpRequest?m.open(t.method,e,!0):m.open(t.method,e),d.cors&&(y&&("POST"===t.method?m.setRequestHeader("content-type","application/x-www-form-urlencoded"):m.setRequestHeader("content-type","application/json")),m.setRequestHeader("accept","application/json")),m.send(y)})},a.prototype._request.fallback=function(e,t){return e=l(e,t.headers),new o(function(r,n){p(e,t,function(e,t){return e?void n(e):void r(t)})})},a.prototype._promise={reject:function(e){return o.reject(e)},resolve:function(e){return o.resolve(e)},delay:function(e){return new o(function(t){setTimeout(t,e)})}},s}}).call(this,e(12))},{1:1,12:12,21:21,22:22,23:23,25:25,28:28,3:3,33:33,35:35,6:6,7:7}],21:[function(e,t,r){"use strict";function n(){var e=window.document.location.protocol;return"http:"!==e&&"https:"!==e&&(e="http:"),e}t.exports=n},{}],22:[function(e,t,r){"use strict";function n(e,t){return e+=/\?/.test(e)?"&":"?",e+o(t)}t.exports=n;var o=e(13)},{13:13}],23:[function(e,t,r){"use strict";function n(e,t,r){function n(){t.debug("JSONP: success"),m||h||(m=!0,p||(t.debug("JSONP: Fail. Script loaded but did not call the callback"),a(),r(new o.JSONPScriptFail)))}function s(){"loaded"!==this.readyState&&"complete"!==this.readyState||n()}function a(){clearTimeout(v),f.onload=null,f.onreadystatechange=null,f.onerror=null,d.removeChild(f)}function c(){try{delete window[y],delete window[y+"_loaded"]}catch(e){window[y]=window[y+"_loaded"]=void 0}}function u(){t.debug("JSONP: Script timeout"),h=!0,a(),r(new o.RequestTimeout)}function l(){t.debug("JSONP: Script error"),m||h||(a(),r(new o.JSONPScriptError))}if("GET"!==t.method)return void r(new Error("Method "+t.method+" "+e+" is not supported by JSONP."));t.debug("JSONP: start");var p=!1,h=!1;i+=1;var d=document.getElementsByTagName("head")[0],f=document.createElement("script"),y="algoliaJSONP_"+i,m=!1;window[y]=function(e){return c(),h?void t.debug("JSONP: Late answer, ignoring"):(p=!0,a(),void r(null,{body:e}))},e+="&callback="+y,t.jsonBody&&t.jsonBody.params&&(e+="&"+t.jsonBody.params);var v=setTimeout(u,t.timeouts.complete);f.onreadystatechange=s,f.onload=n,f.onerror=l,f.async=!0,f.defer=!0,f.src=e,d.appendChild(f)}t.exports=n;var o=e(28),i=0},{28:28}],24:[function(e,t,r){function n(e,t){return function(r,n,i){if("function"==typeof r&&"object"==typeof n||"object"==typeof i)throw new o.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");0===arguments.length||"function"==typeof r?(i=r,r=""):1!==arguments.length&&"function"!=typeof n||(i=n,n=void 0),"object"==typeof r&&null!==r?(n=r,r=void 0):void 0!==r&&null!==r||(r="");var s="";return void 0!==r&&(s+=e+"="+encodeURIComponent(r)),void 0!==n&&(s=this.as._getSearchParams(n,s)),this._search(s,t,i)}}t.exports=n;var o=e(28)},{28:28}],25:[function(e,t,r){t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],26:[function(e,t,r){t.exports=function(e,t){function r(){return n||(console.log(t),n=!0),e.apply(this,arguments)}var n=!1;return r}},{}],27:[function(e,t,r){t.exports=function(e,t){var r=e.toLowerCase().replace(".","").replace("()","");return"algoliasearch: `"+e+"` was replaced by `"+t+"`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#"+r}},{}],28:[function(e,t,r){"use strict";function n(t,r){var n=e(5),o=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):o.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=t||"Unknown error",r&&n(r,function(e,t){o[t]=e})}function o(e,t){function r(){var r=Array.prototype.slice.call(arguments,0);"string"!=typeof r[0]&&r.unshift(t),n.apply(this,r),this.name="AlgoliaSearch"+e+"Error"}return i(r,n),r}var i=e(7);i(n,Error),t.exports={AlgoliaSearchError:n,UnparsableJSON:o("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:o("RequestTimeout","Request timedout before getting a response"),Network:o("Network","Network issue, see err.more for details"),JSONPScriptFail:o("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:o("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:o("Unknown","Unknown error occured")}},{5:5,7:7}],29:[function(e,t,r){t.exports=function(e,t){t(e,0)}},{}],30:[function(e,t,r){var n=e(5);t.exports=function(e,t){var r=[];return n(e,function(n,o){r.push(t(n,o,e))}),r}},{5:5}],31:[function(e,t,r){var n=e(5);t.exports=function o(e){var t=Array.prototype.slice.call(arguments);return n(t,function(t){for(var r in t)t.hasOwnProperty(r)&&("object"==typeof e[r]&&"object"==typeof t[r]?e[r]=o({},e[r],t[r]):void 0!==t[r]&&(e[r]=t[r]))}),e}},{5:5}],32:[function(e,t,r){t.exports=function(t,r){var n=e(10),o=e(5),i={};return o(n(t),function(e){r(e)!==!0&&(i[e]=t[e])}),i}},{10:10,5:5}],33:[function(e,t,r){function n(t){return function(r,n,i){var s=e(25);i=i&&s(i)||{},i.hosts=i.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],0!==arguments.length&&"object"!=typeof r&&void 0!==r||(r="",n="",i._allowEmptyCredentials=!0);var a=t(r,n,i),c=a.initIndex("places");return c.search=o("query","/1/places/query"),c}}t.exports=n;var o=e(24)},{24:24,25:25}],34:[function(e,t,r){(function(r){function n(e,t){return 1===arguments.length?s.get(e):s.set(e,t)}function o(){try{return"localStorage"in r&&null!==r.localStorage&&!r.localStorage[c]&&(r.localStorage.setItem(c,JSON.stringify({})),!0)}catch(e){return!1}}function i(){try{r.localStorage.removeItem(c)}catch(e){}}var s,a=e(1)("algoliasearch:src/hostIndexState.js"),c="algoliasearch-client-js",u={state:{},set:function(e,t){return this.state[e]=t,this.state[e]},get:function(e){return this.state[e]||null}},l={set:function(e,t){try{var n=JSON.parse(r.localStorage[c]);return n[e]=t,r.localStorage[c]=JSON.stringify(n),n[e]}catch(o){return a("localStorage set failed with",o),i(),s=u,s.set(e,t)}},get:function(e){return JSON.parse(r.localStorage[c])[e]||null}};s=o()?l:u,t.exports={get:n,set:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],35:[function(e,t,r){"use strict";t.exports="3.20.3"},{}]},{},[19])(19)});
/*!
 * typeahead.js 0.10.4
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */


(function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            getUniqueId: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            }(),
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            noop: function() {}
        };
    }();
    var html = function() {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
        };
    }();
    var css = function() {
        "use strict";
        var css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: " 0"
            }
        };
        if (_.isMsie()) {
            _.mixin(css.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            });
        }
        if (_.isMsie() && _.isMsie() <= 7) {
            _.mixin(css.input, {
                marginTop: "-1px"
            });
        }
        return css;
    }();
    var EventBus = function() {
        "use strict";
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o) {
            var that = this, onBlur, onFocus, onKeydown, onInput;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    _.defer(_.bind(that._onInput, that, $e));
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._checkInputValue();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                  case "tab":
                    hintValue = this.getHint();
                    inputValue = this.getInputValue();
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                    break;

                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                this.query = inputValue;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getQuery: function getQuery() {
                return this.query;
            },
            setQuery: function setQuery(query) {
                this.query = query;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";
        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                $.error("missing source");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
        };
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
        };
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
                }
                var that = this, hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }
                this.trigger("rendered");
                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                    });
                }
                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        className: "tt-highlight",
                        node: $suggestions[0],
                        pattern: query
                    });
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        return $el;
                    }
                }
                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
            },
            getRoot: function getRoot() {
                return this.$el;
            },
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);
                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                    }
                }
            },
            cancel: function cancel() {
                this.canceled = true;
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = null;
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Dropdown = function() {
        "use strict";
        function Dropdown(o) {
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                $.error("menu is required");
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
            });
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
            },
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _hide: function() {
                this.$menu.hide();
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
            },
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
            },
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    };
                }
                return datum;
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
            },
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Dropdown;
        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
        }
    }();
    var Typeahead = function() {
        "use strict";
        var attrsKey = "ttAttrs";
        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDom(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
            $input.on("blur.tt", function($e) {
                var active, isActive, hasActive;
                active = document.activeElement;
                isActive = $menu.is(active);
                hasActive = $menu.has(active).length > 0;
                if (_.isMsie() && (isActive || hasActive)) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus();
                    });
                }
            });
            $menu.on("mousedown.tt", function($e) {
                $e.preventDefault();
            });
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
        }
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
                }
            },
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
            },
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
                } else {
                    this._autocomplete(true);
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
            },
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
            },
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
                }
            },
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
                } else {
                    this.input.clearHint();
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
                }
            },
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
            },
            open: function open() {
                this.dropdown.open();
            },
            close: function close() {
                this.dropdown.close();
            },
            setVal: function setVal(val) {
                val = _.toStr(val);
                if (this.isActivated) {
                    this.input.setInputValue(val);
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
                }
                this._setLanguageDirection();
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            }
        });
        return Typeahead;
        function buildDom(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", true).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        "use strict";
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                return this.each(attach);
                function attach() {
                    var $input = $(this), eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                    });
                    $input.data(typeaheadKey, typeahead);
                }
            },
            open: function open() {
                return this.each(openTypeahead);
                function openTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                    }
                }
            },
            close: function close() {
                return this.each(closeTypeahead);
                function closeTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                    }
                }
            },
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);
                function setVal() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                    }
                }
                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                    }
                    return query;
                }
            },
            destroy: function destroy() {
                return this.each(unattach);
                function unattach() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                    }
                }
            }
        };
        $.fn.typeahead = function(method) {
            var tts;
            if (methods[method] && method !== "initialize") {
                tts = this.filter(function() {
                    return !!$(this).data(typeaheadKey);
                });
                return methods[method].apply(tts, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
    })();
})(window.jQuery);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.algoliasearchHelper=e()}}(function(){return function e(t,n,r){function i(s,o){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";function r(e,t,n){return new i(e,t,n)}var i=e("./src/algoliasearch.helper"),a=e("./src/SearchParameters"),s=e("./src/SearchResults");r.version=e("./src/version.js"),r.AlgoliaSearchHelper=i,r.SearchParameters=a,r.SearchResults=s,r.url=e("./src/url"),t.exports=r},{"./src/SearchParameters":171,"./src/SearchResults":174,"./src/algoliasearch.helper":175,"./src/url":179,"./src/version.js":180}],2:[function(e,t,n){function r(){l=!1,o.length?u=o.concat(u):f=-1,u.length&&i()}function i(){if(!l){var e=setTimeout(r);l=!0;for(var t=u.length;t;){for(o=u,u=[];++f<t;)o&&o[f].run();f=-1,t=u.length}o=null,l=!1,clearTimeout(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var o,c=t.exports={},u=[],l=!1,f=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new a(e,t)),1!==u.length||l||setTimeout(i,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},{}],3:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function a(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!a(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,a,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],o(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),u=n.slice(),r=u.length,c=0;r>c;c++)u[c].apply(this,a);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,a,o;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(o=a;o-->0;)if(n[o]===t||n[o].listener&&n[o].listener===t){r=o;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],4:[function(e,t,n){function r(e){for(var t=-1,n=e?e.length:0,r=-1,i=[];++t<n;){var a=e[t];a&&(i[++r]=a)}return i}t.exports=r},{}],5:[function(e,t,n){var r=e("../internal/createFindIndex"),i=r();t.exports=i},{"../internal/createFindIndex":90}],6:[function(e,t,n){function r(e,t,n){var r=e?e.length:0;if(!r)return-1;if("number"==typeof n)n=0>n?s(r+n,0):n;else if(n){var o=a(e,t);return r>o&&(t===t?t===e[o]:e[o]!==e[o])?o:-1}return i(e,t,n||0)}var i=e("../internal/baseIndexOf"),a=e("../internal/binaryIndex"),s=Math.max;t.exports=r},{"../internal/baseIndexOf":52,"../internal/binaryIndex":72}],7:[function(e,t,n){var r=e("../internal/baseIndexOf"),i=e("../internal/cacheIndexOf"),a=e("../internal/createCache"),s=e("../internal/isArrayLike"),o=e("../function/restParam"),c=o(function(e){for(var t=e.length,n=t,o=Array(d),c=r,u=!0,l=[];n--;){var f=e[n]=s(f=e[n])?f:[];o[n]=u&&f.length>=120?a(n&&f):null}var h=e[0],p=-1,d=h?h.length:0,g=o[0];e:for(;++p<d;)if(f=h[p],(g?i(g,f):c(l,f,0))<0){for(var n=t;--n;){var v=o[n];if((v?i(v,f):c(e[n],f,0))<0)continue e}g&&g.push(f),l.push(f)}return l});t.exports=c},{"../function/restParam":23,"../internal/baseIndexOf":52,"../internal/cacheIndexOf":75,"../internal/createCache":86,"../internal/isArrayLike":108}],8:[function(e,t,n){function r(e){var t=e?e.length:0;return t?e[t-1]:void 0}t.exports=r},{}],9:[function(e,t,n){function r(e){if(c(e)&&!o(e)&&!(e instanceof i)){if(e instanceof a)return e;if(f.call(e,"__chain__")&&f.call(e,"__wrapped__"))return u(e)}return new a(e)}var i=e("../internal/LazyWrapper"),a=e("../internal/LodashWrapper"),s=e("../internal/baseLodash"),o=e("../lang/isArray"),c=e("../internal/isObjectLike"),u=e("../internal/wrapperClone"),l=Object.prototype,f=l.hasOwnProperty;r.prototype=s.prototype,t.exports=r},{"../internal/LazyWrapper":24,"../internal/LodashWrapper":25,"../internal/baseLodash":56,"../internal/isObjectLike":114,"../internal/wrapperClone":131,"../lang/isArray":133}],10:[function(e,t,n){function r(e,t,n){var r=o(e)?i:s;return t=a(t,n,3),r(e,t)}var i=e("../internal/arrayFilter"),a=e("../internal/baseCallback"),s=e("../internal/baseFilter"),o=e("../lang/isArray");t.exports=r},{"../internal/arrayFilter":29,"../internal/baseCallback":38,"../internal/baseFilter":44,"../lang/isArray":133}],11:[function(e,t,n){var r=e("../internal/baseEach"),i=e("../internal/createFind"),a=i(r);t.exports=a},{"../internal/baseEach":43,"../internal/createFind":89}],12:[function(e,t,n){var r=e("../internal/arrayEach"),i=e("../internal/baseEach"),a=e("../internal/createForEach"),s=a(r,i);t.exports=s},{"../internal/arrayEach":28,"../internal/baseEach":43,"../internal/createForEach":91}],13:[function(e,t,n){function r(e,t,n,r){var h=e?a(e):0;return c(h)||(e=l(e),h=e.length),n="number"!=typeof n||r&&o(t,n,r)?0:0>n?f(h+n,0):n||0,"string"==typeof e||!s(e)&&u(e)?h>=n&&e.indexOf(t,n)>-1:!!h&&i(e,t,n)>-1}var i=e("../internal/baseIndexOf"),a=e("../internal/getLength"),s=e("../lang/isArray"),o=e("../internal/isIterateeCall"),c=e("../internal/isLength"),u=e("../lang/isString"),l=e("../object/values"),f=Math.max;t.exports=r},{"../internal/baseIndexOf":52,"../internal/getLength":104,"../internal/isIterateeCall":110,"../internal/isLength":113,"../lang/isArray":133,"../lang/isString":140,"../object/values":157}],14:[function(e,t,n){function r(e,t,n){var r=o(e)?i:s;return t=a(t,n,3),r(e,t)}var i=e("../internal/arrayMap"),a=e("../internal/baseCallback"),s=e("../internal/baseMap"),o=e("../lang/isArray");t.exports=r},{"../internal/arrayMap":30,"../internal/baseCallback":38,"../internal/baseMap":57,"../lang/isArray":133}],15:[function(e,t,n){function r(e,t){return i(e,a(t))}var i=e("./map"),a=e("../utility/property");t.exports=r},{"../utility/property":161,"./map":14}],16:[function(e,t,n){var r=e("../internal/arrayReduce"),i=e("../internal/baseEach"),a=e("../internal/createReduce"),s=a(r,i);t.exports=s},{"../internal/arrayReduce":32,"../internal/baseEach":43,"../internal/createReduce":97}],17:[function(e,t,n){function r(e,t,n,r){return null==e?[]:(r&&s(t,n,r)&&(n=void 0),a(t)||(t=null==t?[]:[t]),a(n)||(n=null==n?[]:[n]),i(e,t,n))}var i=e("../internal/baseSortByOrder"),a=e("../lang/isArray"),s=e("../internal/isIterateeCall");t.exports=r},{"../internal/baseSortByOrder":68,"../internal/isIterateeCall":110,"../lang/isArray":133}],18:[function(e,t,n){t.exports=e("../math/sum")},{"../math/sum":144}],19:[function(e,t,n){var r=e("../internal/getNative"),i=r(Date,"now"),a=i||function(){return(new Date).getTime()};t.exports=a},{"../internal/getNative":106}],20:[function(e,t,n){var r=e("../internal/createWrapper"),i=e("../internal/replaceHolders"),a=e("./restParam"),s=1,o=32,c=a(function(e,t,n){var a=s;if(n.length){var u=i(n,c.placeholder);a|=o}return r(e,a,t,n,u)});c.placeholder={},t.exports=c},{"../internal/createWrapper":98,"../internal/replaceHolders":123,"./restParam":23}],21:[function(e,t,n){var r=e("../internal/createPartial"),i=32,a=r(i);a.placeholder={},t.exports=a},{"../internal/createPartial":95}],22:[function(e,t,n){var r=e("../internal/createPartial"),i=64,a=r(i);a.placeholder={},t.exports=a},{"../internal/createPartial":95}],23:[function(e,t,n){function r(e,t){if("function"!=typeof e)throw new TypeError(i);return t=a(void 0===t?e.length-1:+t||0,0),function(){for(var n=arguments,r=-1,i=a(n.length-t,0),s=Array(i);++r<i;)s[r]=n[t+r];switch(t){case 0:return e.call(this,s);case 1:return e.call(this,n[0],s);case 2:return e.call(this,n[0],n[1],s)}var o=Array(t+1);for(r=-1;++r<t;)o[r]=n[r];return o[t]=s,e.apply(this,o)}}var i="Expected a function",a=Math.max;t.exports=r},{}],24:[function(e,t,n){function r(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=s,this.__views__=[]}var i=e("./baseCreate"),a=e("./baseLodash"),s=Number.POSITIVE_INFINITY;r.prototype=i(a.prototype),r.prototype.constructor=r,t.exports=r},{"./baseCreate":41,"./baseLodash":56}],25:[function(e,t,n){function r(e,t,n){this.__wrapped__=e,this.__actions__=n||[],this.__chain__=!!t}var i=e("./baseCreate"),a=e("./baseLodash");r.prototype=i(a.prototype),r.prototype.constructor=r,t.exports=r},{"./baseCreate":41,"./baseLodash":56}],26:[function(e,t,n){(function(n){function r(e){var t=e?e.length:0;for(this.data={hash:o(null),set:new s};t--;)this.push(e[t])}var i=e("./cachePush"),a=e("./getNative"),s=a(n,"Set"),o=a(Object,"create");r.prototype.push=i,t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./cachePush":76,"./getNative":106}],27:[function(e,t,n){function r(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}t.exports=r},{}],28:[function(e,t,n){function r(e,t){for(var n=-1,r=e.length;++n<r&&t(e[n],n,e)!==!1;);return e}t.exports=r},{}],29:[function(e,t,n){function r(e,t){for(var n=-1,r=e.length,i=-1,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[++i]=s)}return a}t.exports=r},{}],30:[function(e,t,n){function r(e,t){for(var n=-1,r=e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}t.exports=r},{}],31:[function(e,t,n){function r(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}t.exports=r},{}],32:[function(e,t,n){function r(e,t,n,r){var i=-1,a=e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}t.exports=r},{}],33:[function(e,t,n){function r(e,t){for(var n=-1,r=e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}t.exports=r},{}],34:[function(e,t,n){function r(e,t){for(var n=e.length,r=0;n--;)r+=+t(e[n])||0;return r}t.exports=r},{}],35:[function(e,t,n){function r(e,t){return void 0===e?t:e}t.exports=r},{}],36:[function(e,t,n){function r(e,t,n){for(var r=-1,a=i(t),s=a.length;++r<s;){var o=a[r],c=e[o],u=n(c,t[o],o,e,t);(u===u?u===c:c!==c)&&(void 0!==c||o in e)||(e[o]=u)}return e}var i=e("../object/keys");t.exports=r},{"../object/keys":149}],37:[function(e,t,n){function r(e,t){return null==t?e:i(t,a(t),e)}var i=e("./baseCopy"),a=e("../object/keys");t.exports=r},{"../object/keys":149,"./baseCopy":40}],38:[function(e,t,n){function r(e,t,n){var r=typeof e;return"function"==r?void 0===t?e:s(e,t,n):null==e?o:"object"==r?i(e):void 0===t?c(e):a(e,t)}var i=e("./baseMatches"),a=e("./baseMatchesProperty"),s=e("./bindCallback"),o=e("../utility/identity"),c=e("../utility/property");t.exports=r},{"../utility/identity":159,"../utility/property":161,"./baseMatches":58,"./baseMatchesProperty":59,"./bindCallback":74}],39:[function(e,t,n){function r(e,t){if(e!==t){var n=null===e,r=void 0===e,i=e===e,a=null===t,s=void 0===t,o=t===t;if(e>t&&!a||!i||n&&!s&&o||r&&o)return 1;if(t>e&&!n||!o||a&&!r&&i||s&&i)return-1}return 0}t.exports=r},{}],40:[function(e,t,n){function r(e,t,n){n||(n={});for(var r=-1,i=t.length;++r<i;){var a=t[r];n[a]=e[a]}return n}t.exports=r},{}],41:[function(e,t,n){var r=e("../lang/isObject"),i=function(){function e(){}return function(t){if(r(t)){e.prototype=t;var n=new e;e.prototype=void 0}return n||{}}}();t.exports=i},{"../lang/isObject":138}],42:[function(e,t,n){function r(e,t){var n=e?e.length:0,r=[];if(!n)return r;var c=-1,u=i,l=!0,f=l&&t.length>=o?s(t):null,h=t.length;f&&(u=a,l=!1,t=f);e:for(;++c<n;){var p=e[c];if(l&&p===p){for(var d=h;d--;)if(t[d]===p)continue e;r.push(p)}else u(t,p,0)<0&&r.push(p)}return r}var i=e("./baseIndexOf"),a=e("./cacheIndexOf"),s=e("./createCache"),o=200;t.exports=r},{"./baseIndexOf":52,"./cacheIndexOf":75,"./createCache":86}],43:[function(e,t,n){var r=e("./baseForOwn"),i=e("./createBaseEach"),a=i(r);t.exports=a},{"./baseForOwn":50,"./createBaseEach":83}],44:[function(e,t,n){function r(e,t){var n=[];return i(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}var i=e("./baseEach");t.exports=r},{"./baseEach":43}],45:[function(e,t,n){function r(e,t,n,r){var i;return n(e,function(e,n,a){return t(e,n,a)?(i=r?n:e,!1):void 0}),i}t.exports=r},{}],46:[function(e,t,n){function r(e,t,n){for(var r=e.length,i=n?r:-1;n?i--:++i<r;)if(t(e[i],i,e))return i;return-1}t.exports=r},{}],47:[function(e,t,n){function r(e,t,n,u){u||(u=[]);for(var l=-1,f=e.length;++l<f;){var h=e[l];c(h)&&o(h)&&(n||s(h)||a(h))?t?r(h,t,n,u):i(u,h):n||(u[u.length]=h)}return u}var i=e("./arrayPush"),a=e("../lang/isArguments"),s=e("../lang/isArray"),o=e("./isArrayLike"),c=e("./isObjectLike");t.exports=r},{"../lang/isArguments":132,"../lang/isArray":133,"./arrayPush":31,"./isArrayLike":108,"./isObjectLike":114}],48:[function(e,t,n){var r=e("./createBaseFor"),i=r();t.exports=i},{"./createBaseFor":84}],49:[function(e,t,n){function r(e,t){return i(e,t,a)}var i=e("./baseFor"),a=e("../object/keysIn");t.exports=r},{"../object/keysIn":150,"./baseFor":48}],50:[function(e,t,n){function r(e,t){return i(e,t,a)}var i=e("./baseFor"),a=e("../object/keys");t.exports=r},{"../object/keys":149,"./baseFor":48}],51:[function(e,t,n){function r(e,t,n){if(null!=e){void 0!==n&&n in i(e)&&(t=[n]);for(var r=0,a=t.length;null!=e&&a>r;)e=e[t[r++]];return r&&r==a?e:void 0}}var i=e("./toObject");t.exports=r},{"./toObject":127}],52:[function(e,t,n){function r(e,t,n){if(t!==t)return i(e,n);for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}var i=e("./indexOfNaN");t.exports=r},{"./indexOfNaN":107}],53:[function(e,t,n){function r(e,t,n,o,c,u){return e===t?!0:null==e||null==t||!a(e)&&!s(t)?e!==e&&t!==t:i(e,t,r,n,o,c,u)}var i=e("./baseIsEqualDeep"),a=e("../lang/isObject"),s=e("./isObjectLike");t.exports=r},{"../lang/isObject":138,"./baseIsEqualDeep":54,"./isObjectLike":114}],54:[function(e,t,n){function r(e,t,n,r,h,g,v){var m=o(e),y=o(t),b=l,x=l;m||(b=d.call(e),b==u?b=f:b!=f&&(m=c(e))),y||(x=d.call(t),x==u?x=f:x!=f&&(y=c(t)));var j=b==f,R=x==f,F=b==x;if(F&&!m&&!j)return a(e,t,b);if(!h){var O=j&&p.call(e,"__wrapped__"),w=R&&p.call(t,"__wrapped__");if(O||w)return n(O?e.value():e,w?t.value():t,r,h,g,v)}if(!F)return!1;g||(g=[]),v||(v=[]);for(var _=g.length;_--;)if(g[_]==e)return v[_]==t;g.push(e),v.push(t);var P=(m?i:s)(e,t,n,r,h,g,v);return g.pop(),v.pop(),P}var i=e("./equalArrays"),a=e("./equalByTag"),s=e("./equalObjects"),o=e("../lang/isArray"),c=e("../lang/isTypedArray"),u="[object Arguments]",l="[object Array]",f="[object Object]",h=Object.prototype,p=h.hasOwnProperty,d=h.toString;t.exports=r},{"../lang/isArray":133,"../lang/isTypedArray":141,"./equalArrays":99,"./equalByTag":100,"./equalObjects":101}],55:[function(e,t,n){function r(e,t,n){var r=t.length,s=r,o=!n;if(null==e)return!s;for(e=a(e);r--;){var c=t[r];if(o&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++r<s;){c=t[r];var u=c[0],l=e[u],f=c[1];if(o&&c[2]){if(void 0===l&&!(u in e))return!1}else{var h=n?n(l,f,u):void 0;if(!(void 0===h?i(f,l,n,!0):h))return!1}}return!0}var i=e("./baseIsEqual"),a=e("./toObject");t.exports=r},{"./baseIsEqual":53,"./toObject":127}],56:[function(e,t,n){function r(){}t.exports=r},{}],57:[function(e,t,n){function r(e,t){var n=-1,r=a(e)?Array(e.length):[];return i(e,function(e,i,a){r[++n]=t(e,i,a)}),r}var i=e("./baseEach"),a=e("./isArrayLike");t.exports=r},{"./baseEach":43,"./isArrayLike":108}],58:[function(e,t,n){function r(e){var t=a(e);if(1==t.length&&t[0][2]){var n=t[0][0],r=t[0][1];return function(e){return null==e?!1:e[n]===r&&(void 0!==r||n in s(e))}}return function(e){return i(e,t)}}var i=e("./baseIsMatch"),a=e("./getMatchData"),s=e("./toObject");t.exports=r},{"./baseIsMatch":55,"./getMatchData":105,"./toObject":127}],59:[function(e,t,n){function r(e,t){var n=o(e),r=c(e)&&u(t),p=e+"";return e=h(e),function(o){if(null==o)return!1;var c=p;if(o=f(o),(n||!r)&&!(c in o)){if(o=1==e.length?o:i(o,s(e,0,-1)),null==o)return!1;c=l(e),o=f(o)}return o[c]===t?void 0!==t||c in o:a(t,o[c],void 0,!0)}}var i=e("./baseGet"),a=e("./baseIsEqual"),s=e("./baseSlice"),o=e("../lang/isArray"),c=e("./isKey"),u=e("./isStrictComparable"),l=e("../array/last"),f=e("./toObject"),h=e("./toPath");t.exports=r},{"../array/last":8,"../lang/isArray":133,"./baseGet":51,"./baseIsEqual":53,"./baseSlice":66,"./isKey":111,"./isStrictComparable":116,"./toObject":127,"./toPath":128}],60:[function(e,t,n){function r(e,t,n,h,p){if(!c(e))return e;var d=o(t)&&(s(t)||l(t)),g=d?void 0:f(t);return i(g||t,function(i,s){if(g&&(s=i,i=t[s]),u(i))h||(h=[]),p||(p=[]),a(e,t,s,r,n,h,p);else{var o=e[s],c=n?n(o,i,s,e,t):void 0,l=void 0===c;l&&(c=i),void 0===c&&(!d||s in e)||!l&&(c===c?c===o:o!==o)||(e[s]=c)}}),e}var i=e("./arrayEach"),a=e("./baseMergeDeep"),s=e("../lang/isArray"),o=e("./isArrayLike"),c=e("../lang/isObject"),u=e("./isObjectLike"),l=e("../lang/isTypedArray"),f=e("../object/keys");t.exports=r},{"../lang/isArray":133,"../lang/isObject":138,"../lang/isTypedArray":141,"../object/keys":149,"./arrayEach":28,"./baseMergeDeep":61,"./isArrayLike":108,"./isObjectLike":114}],61:[function(e,t,n){function r(e,t,n,r,f,h,p){for(var d=h.length,g=t[n];d--;)if(h[d]==g)return void(e[n]=p[d]);var v=e[n],m=f?f(v,g,n,e,t):void 0,y=void 0===m;y&&(m=g,o(g)&&(s(g)||u(g))?m=s(v)?v:o(v)?i(v):[]:c(g)||a(g)?m=a(v)?l(v):c(v)?v:{}:y=!1),h.push(g),p.push(m),y?e[n]=r(m,g,f,h,p):(m===m?m!==v:v===v)&&(e[n]=m)}var i=e("./arrayCopy"),a=e("../lang/isArguments"),s=e("../lang/isArray"),o=e("./isArrayLike"),c=e("../lang/isPlainObject"),u=e("../lang/isTypedArray"),l=e("../lang/toPlainObject");t.exports=r},{"../lang/isArguments":132,"../lang/isArray":133,"../lang/isPlainObject":139,"../lang/isTypedArray":141,"../lang/toPlainObject":143,"./arrayCopy":27,"./isArrayLike":108}],62:[function(e,t,n){function r(e){return function(t){return null==t?void 0:t[e]}}t.exports=r},{}],63:[function(e,t,n){function r(e){var t=e+"";return e=a(e),function(n){return i(n,e,t)}}var i=e("./baseGet"),a=e("./toPath");t.exports=r},{"./baseGet":51,"./toPath":128}],64:[function(e,t,n){function r(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}t.exports=r},{}],65:[function(e,t,n){var r=e("../utility/identity"),i=e("./metaMap"),a=i?function(e,t){return i.set(e,t),e}:r;t.exports=a},{"../utility/identity":159,"./metaMap":118}],66:[function(e,t,n){function r(e,t,n){var r=-1,i=e.length;t=null==t?0:+t||0,0>t&&(t=-t>i?0:i+t),n=void 0===n||n>i?i:+n||0,0>n&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}t.exports=r},{}],67:[function(e,t,n){function r(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}t.exports=r},{}],68:[function(e,t,n){function r(e,t,n){var r=-1;t=i(t,function(e){return a(e)});var u=s(e,function(e){var n=i(t,function(t){return t(e)});return{criteria:n,index:++r,value:e}});return o(u,function(e,t){return c(e,t,n)})}var i=e("./arrayMap"),a=e("./baseCallback"),s=e("./baseMap"),o=e("./baseSortBy"),c=e("./compareMultiple");t.exports=r},{"./arrayMap":30,"./baseCallback":38,"./baseMap":57,"./baseSortBy":67,"./compareMultiple":79}],69:[function(e,t,n){function r(e,t){var n=0;return i(e,function(e,r,i){n+=+t(e,r,i)||0}),n}var i=e("./baseEach");t.exports=r},{"./baseEach":43}],70:[function(e,t,n){function r(e){return null==e?"":e+""}t.exports=r},{}],71:[function(e,t,n){function r(e,t){for(var n=-1,r=t.length,i=Array(r);++n<r;)i[n]=e[t[n]];return i}t.exports=r},{}],72:[function(e,t,n){function r(e,t,n){var r=0,s=e?e.length:r;if("number"==typeof t&&t===t&&o>=s){for(;s>r;){var c=r+s>>>1,u=e[c];(n?t>=u:t>u)&&null!==u?r=c+1:s=c}return s}return i(e,t,a,n)}var i=e("./binaryIndexBy"),a=e("../utility/identity"),s=4294967295,o=s>>>1;t.exports=r},{"../utility/identity":159,"./binaryIndexBy":73}],73:[function(e,t,n){function r(e,t,n,r){t=n(t);for(var s=0,c=e?e.length:0,u=t!==t,l=null===t,f=void 0===t;c>s;){var h=i((s+c)/2),p=n(e[h]),d=void 0!==p,g=p===p;if(u)var v=g||r;else v=l?g&&d&&(r||null!=p):f?g&&(r||d):null==p?!1:r?t>=p:t>p;v?s=h+1:c=h}return a(c,o)}var i=Math.floor,a=Math.min,s=4294967295,o=s-1;t.exports=r},{}],74:[function(e,t,n){function r(e,t,n){if("function"!=typeof e)return i;if(void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,a){return e.call(t,n,r,i,a)};case 5:return function(n,r,i,a,s){return e.call(t,n,r,i,a,s)}}return function(){return e.apply(t,arguments)}}var i=e("../utility/identity");t.exports=r},{"../utility/identity":159}],75:[function(e,t,n){function r(e,t){var n=e.data,r="string"==typeof t||i(t)?n.set.has(t):n.hash[t];return r?0:-1}var i=e("../lang/isObject");t.exports=r},{"../lang/isObject":138}],76:[function(e,t,n){function r(e){var t=this.data;"string"==typeof e||i(e)?t.set.add(e):t.hash[e]=!0}var i=e("../lang/isObject");t.exports=r},{"../lang/isObject":138}],77:[function(e,t,n){function r(e,t){for(var n=-1,r=e.length;++n<r&&t.indexOf(e.charAt(n))>-1;);return n}t.exports=r},{}],78:[function(e,t,n){function r(e,t){for(var n=e.length;n--&&t.indexOf(e.charAt(n))>-1;);return n}t.exports=r},{}],79:[function(e,t,n){function r(e,t,n){for(var r=-1,a=e.criteria,s=t.criteria,o=a.length,c=n.length;++r<o;){var u=i(a[r],s[r]);if(u){if(r>=c)return u;var l=n[r];return u*("asc"===l||l===!0?1:-1)}}return e.index-t.index}var i=e("./baseCompareAscending");t.exports=r},{"./baseCompareAscending":39}],80:[function(e,t,n){function r(e,t,n){for(var r=n.length,a=-1,s=i(e.length-r,0),o=-1,c=t.length,u=Array(c+s);++o<c;)u[o]=t[o];for(;++a<r;)u[n[a]]=e[a];for(;s--;)u[o++]=e[a++];return u}var i=Math.max;t.exports=r},{}],81:[function(e,t,n){function r(e,t,n){for(var r=-1,a=n.length,s=-1,o=i(e.length-a,0),c=-1,u=t.length,l=Array(o+u);++s<o;)l[s]=e[s];for(var f=s;++c<u;)l[f+c]=t[c];for(;++r<a;)l[f+n[r]]=e[s++];return l}var i=Math.max;t.exports=r},{}],82:[function(e,t,n){function r(e){return s(function(t,n){var r=-1,s=null==t?0:n.length,o=s>2?n[s-2]:void 0,c=s>2?n[2]:void 0,u=s>1?n[s-1]:void 0;for("function"==typeof o?(o=i(o,u,5),s-=2):(o="function"==typeof u?u:void 0,s-=o?1:0),c&&a(n[0],n[1],c)&&(o=3>s?void 0:o,s=1);++r<s;){var l=n[r];l&&e(t,l,o)}return t})}var i=e("./bindCallback"),a=e("./isIterateeCall"),s=e("../function/restParam");t.exports=r},{"../function/restParam":23,"./bindCallback":74,"./isIterateeCall":110}],83:[function(e,t,n){function r(e,t){return function(n,r){var o=n?i(n):0;if(!a(o))return e(n,r);for(var c=t?o:-1,u=s(n);(t?c--:++c<o)&&r(u[c],c,u)!==!1;);return n}}var i=e("./getLength"),a=e("./isLength"),s=e("./toObject");t.exports=r},{"./getLength":104,"./isLength":113,"./toObject":127}],84:[function(e,t,n){function r(e){return function(t,n,r){for(var a=i(t),s=r(t),o=s.length,c=e?o:-1;e?c--:++c<o;){var u=s[c];if(n(a[u],u,a)===!1)break}return t}}var i=e("./toObject");t.exports=r},{"./toObject":127}],85:[function(e,t,n){(function(n){function r(e,t){function r(){var i=this&&this!==n&&this instanceof r?a:e;return i.apply(t,arguments)}var a=i(e);return r}var i=e("./createCtorWrapper");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./createCtorWrapper":87}],86:[function(e,t,n){(function(n){function r(e){return o&&s?new i(e):null}var i=e("./SetCache"),a=e("./getNative"),s=a(n,"Set"),o=a(Object,"create");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./SetCache":26,"./getNative":106}],87:[function(e,t,n){function r(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=i(e.prototype),r=e.apply(n,t);return a(r)?r:n}}var i=e("./baseCreate"),a=e("../lang/isObject");t.exports=r},{"../lang/isObject":138,"./baseCreate":41}],88:[function(e,t,n){function r(e,t){return i(function(n){var r=n[0];return null==r?r:(n.push(t),e.apply(void 0,n))})}var i=e("../function/restParam");t.exports=r},{"../function/restParam":23}],89:[function(e,t,n){function r(e,t){return function(n,r,c){if(r=i(r,c,3),o(n)){var u=s(n,r,t);return u>-1?n[u]:void 0}return a(n,r,e)}}var i=e("./baseCallback"),a=e("./baseFind"),s=e("./baseFindIndex"),o=e("../lang/isArray");t.exports=r},{"../lang/isArray":133,"./baseCallback":38,"./baseFind":45,"./baseFindIndex":46}],90:[function(e,t,n){function r(e){return function(t,n,r){return t&&t.length?(n=i(n,r,3),a(t,n,e)):-1}}var i=e("./baseCallback"),a=e("./baseFindIndex");t.exports=r},{"./baseCallback":38,"./baseFindIndex":46}],91:[function(e,t,n){function r(e,t){return function(n,r,s){return"function"==typeof r&&void 0===s&&a(n)?e(n,r):t(n,i(r,s,3))}}var i=e("./bindCallback"),a=e("../lang/isArray");t.exports=r},{"../lang/isArray":133,"./bindCallback":74}],92:[function(e,t,n){function r(e){return function(t,n,r){return("function"!=typeof n||void 0!==r)&&(n=i(n,r,3)),e(t,n)}}var i=e("./bindCallback");t.exports=r},{"./bindCallback":74}],93:[function(e,t,n){(function(n){function r(e,t,j,R,F,O,w,_,P,A){function S(){for(var d=arguments.length,g=d,v=Array(d);g--;)v[g]=arguments[g];if(R&&(v=a(v,R,F)),O&&(v=s(v,O,w)),T||I){var b=S.placeholder,D=l(v,b);if(d-=D.length,A>d){var H=_?i(_):void 0,B=x(A-d,0),M=T?D:void 0,Q=T?void 0:D,W=T?v:void 0,z=T?void 0:v;t|=T?m:y,t&=~(T?y:m),C||(t&=~(h|p));var q=[e,t,j,W,M,z,Q,H,P,B],U=r.apply(void 0,q);return c(e)&&f(U,q),U.placeholder=b,U}}var V=L?j:this,$=k?V[e]:e;return _&&(v=u(v,_)),E&&P<v.length&&(v.length=P),this&&this!==n&&this instanceof S&&($=N||o(e)),$.apply(V,v)}var E=t&b,L=t&h,k=t&p,T=t&g,C=t&d,I=t&v,N=k?void 0:o(e);return S}var i=e("./arrayCopy"),a=e("./composeArgs"),s=e("./composeArgsRight"),o=e("./createCtorWrapper"),c=e("./isLaziable"),u=e("./reorder"),l=e("./replaceHolders"),f=e("./setData"),h=1,p=2,d=4,g=8,v=16,m=32,y=64,b=128,x=Math.max;t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./arrayCopy":27,"./composeArgs":80,"./composeArgsRight":81,"./createCtorWrapper":87,"./isLaziable":112,"./reorder":122,"./replaceHolders":123,"./setData":124}],94:[function(e,t,n){function r(e){return function(t,n,r){var s={};return n=i(n,r,3),a(t,function(t,r,i){var a=n(t,r,i);r=e?a:r,t=e?t:a,s[r]=t}),s}}var i=e("./baseCallback"),a=e("./baseForOwn");t.exports=r},{"./baseCallback":38,"./baseForOwn":50}],95:[function(e,t,n){function r(e){var t=s(function(n,r){var s=a(r,t.placeholder);return i(n,e,void 0,r,s)});return t}var i=e("./createWrapper"),a=e("./replaceHolders"),s=e("../function/restParam");t.exports=r},{"../function/restParam":23,"./createWrapper":98,"./replaceHolders":123}],96:[function(e,t,n){(function(n){function r(e,t,r,s){function o(){for(var t=-1,i=arguments.length,a=-1,l=s.length,f=Array(l+i);++a<l;)f[a]=s[a];for(;i--;)f[a++]=arguments[++t];var h=this&&this!==n&&this instanceof o?u:e;return h.apply(c?r:this,f)}var c=t&a,u=i(e);return o}var i=e("./createCtorWrapper"),a=1;t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./createCtorWrapper":87}],97:[function(e,t,n){function r(e,t){return function(n,r,o,c){var u=arguments.length<3;return"function"==typeof r&&void 0===c&&s(n)?e(n,r,o,u):a(n,i(r,c,4),o,u,t)}}var i=e("./baseCallback"),a=e("./baseReduce"),s=e("../lang/isArray");t.exports=r},{"../lang/isArray":133,"./baseCallback":38,"./baseReduce":64}],98:[function(e,t,n){function r(e,t,n,r,m,y,b,x){var j=t&h;if(!j&&"function"!=typeof e)throw new TypeError(g);var R=r?r.length:0;if(R||(t&=~(p|d),r=m=void 0),R-=m?m.length:0,t&d){var F=r,O=m;r=m=void 0}var w=j?void 0:c(e),_=[e,t,n,r,m,F,O,y,b,x];if(w&&(u(_,w),t=_[1],x=_[9]),_[9]=null==x?j?0:e.length:v(x-R,0)||0,t==f)var P=a(_[0],_[2]);else P=t!=p&&t!=(f|p)||_[4].length?s.apply(void 0,_):o.apply(void 0,_);var A=w?i:l;return A(P,_)}var i=e("./baseSetData"),a=e("./createBindWrapper"),s=e("./createHybridWrapper"),o=e("./createPartialWrapper"),c=e("./getData"),u=e("./mergeData"),l=e("./setData"),f=1,h=2,p=32,d=64,g="Expected a function",v=Math.max;t.exports=r},{"./baseSetData":65,"./createBindWrapper":85,"./createHybridWrapper":93,"./createPartialWrapper":96,"./getData":102,"./mergeData":117,"./setData":124}],99:[function(e,t,n){function r(e,t,n,r,a,s,o){var c=-1,u=e.length,l=t.length;if(u!=l&&!(a&&l>u))return!1;for(;++c<u;){var f=e[c],h=t[c],p=r?r(a?h:f,a?f:h,c):void 0;if(void 0!==p){if(p)continue;return!1}if(a){if(!i(t,function(e){return f===e||n(f,e,r,a,s,o)}))return!1}else if(f!==h&&!n(f,h,r,a,s,o))return!1}return!0}var i=e("./arraySome");t.exports=r},{"./arraySome":33}],100:[function(e,t,n){function r(e,t,n){switch(n){case i:
case a:return+e==+t;case s:return e.name==t.name&&e.message==t.message;case o:return e!=+e?t!=+t:e==+t;case c:case u:return e==t+""}return!1}var i="[object Boolean]",a="[object Date]",s="[object Error]",o="[object Number]",c="[object RegExp]",u="[object String]";t.exports=r},{}],101:[function(e,t,n){function r(e,t,n,r,a,o,c){var u=i(e),l=u.length,f=i(t),h=f.length;if(l!=h&&!a)return!1;for(var p=l;p--;){var d=u[p];if(!(a?d in t:s.call(t,d)))return!1}for(var g=a;++p<l;){d=u[p];var v=e[d],m=t[d],y=r?r(a?m:v,a?v:m,d):void 0;if(!(void 0===y?n(v,m,r,a,o,c):y))return!1;g||(g="constructor"==d)}if(!g){var b=e.constructor,x=t.constructor;if(b!=x&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof x&&x instanceof x))return!1}return!0}var i=e("../object/keys"),a=Object.prototype,s=a.hasOwnProperty;t.exports=r},{"../object/keys":149}],102:[function(e,t,n){var r=e("./metaMap"),i=e("../utility/noop"),a=r?function(e){return r.get(e)}:i;t.exports=a},{"../utility/noop":160,"./metaMap":118}],103:[function(e,t,n){function r(e){for(var t=e.name+"",n=i[t],r=n?n.length:0;r--;){var a=n[r],s=a.func;if(null==s||s==e)return a.name}return t}var i=e("./realNames");t.exports=r},{"./realNames":121}],104:[function(e,t,n){var r=e("./baseProperty"),i=r("length");t.exports=i},{"./baseProperty":62}],105:[function(e,t,n){function r(e){for(var t=a(e),n=t.length;n--;)t[n][2]=i(t[n][1]);return t}var i=e("./isStrictComparable"),a=e("../object/pairs");t.exports=r},{"../object/pairs":155,"./isStrictComparable":116}],106:[function(e,t,n){function r(e,t){var n=null==e?void 0:e[t];return i(n)?n:void 0}var i=e("../lang/isNative");t.exports=r},{"../lang/isNative":136}],107:[function(e,t,n){function r(e,t,n){for(var r=e.length,i=t+(n?0:-1);n?i--:++i<r;){var a=e[i];if(a!==a)return i}return-1}t.exports=r},{}],108:[function(e,t,n){function r(e){return null!=e&&a(i(e))}var i=e("./getLength"),a=e("./isLength");t.exports=r},{"./getLength":104,"./isLength":113}],109:[function(e,t,n){function r(e,t){return e="number"==typeof e||i.test(e)?+e:-1,t=null==t?a:t,e>-1&&e%1==0&&t>e}var i=/^\d+$/,a=9007199254740991;t.exports=r},{}],110:[function(e,t,n){function r(e,t,n){if(!s(n))return!1;var r=typeof t;if("number"==r?i(n)&&a(t,n.length):"string"==r&&t in n){var o=n[t];return e===e?e===o:o!==o}return!1}var i=e("./isArrayLike"),a=e("./isIndex"),s=e("../lang/isObject");t.exports=r},{"../lang/isObject":138,"./isArrayLike":108,"./isIndex":109}],111:[function(e,t,n){function r(e,t){var n=typeof e;if("string"==n&&o.test(e)||"number"==n)return!0;if(i(e))return!1;var r=!s.test(e);return r||null!=t&&e in a(t)}var i=e("../lang/isArray"),a=e("./toObject"),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=r},{"../lang/isArray":133,"./toObject":127}],112:[function(e,t,n){function r(e){var t=s(e),n=o[t];if("function"!=typeof n||!(t in i.prototype))return!1;if(e===n)return!0;var r=a(n);return!!r&&e===r[0]}var i=e("./LazyWrapper"),a=e("./getData"),s=e("./getFuncName"),o=e("../chain/lodash");t.exports=r},{"../chain/lodash":9,"./LazyWrapper":24,"./getData":102,"./getFuncName":103}],113:[function(e,t,n){function r(e){return"number"==typeof e&&e>-1&&e%1==0&&i>=e}var i=9007199254740991;t.exports=r},{}],114:[function(e,t,n){function r(e){return!!e&&"object"==typeof e}t.exports=r},{}],115:[function(e,t,n){function r(e){return 160>=e&&e>=9&&13>=e||32==e||160==e||5760==e||6158==e||e>=8192&&(8202>=e||8232==e||8233==e||8239==e||8287==e||12288==e||65279==e)}t.exports=r},{}],116:[function(e,t,n){function r(e){return e===e&&!i(e)}var i=e("../lang/isObject");t.exports=r},{"../lang/isObject":138}],117:[function(e,t,n){function r(e,t){var n=e[1],r=t[1],g=n|r,v=f>g,m=r==f&&n==l||r==f&&n==h&&e[7].length<=t[8]||r==(f|h)&&n==l;if(!v&&!m)return e;r&c&&(e[2]=t[2],g|=n&c?0:u);var y=t[3];if(y){var b=e[3];e[3]=b?a(b,y,t[4]):i(y),e[4]=b?o(e[3],p):i(t[4])}return y=t[5],y&&(b=e[5],e[5]=b?s(b,y,t[6]):i(y),e[6]=b?o(e[5],p):i(t[6])),y=t[7],y&&(e[7]=i(y)),r&f&&(e[8]=null==e[8]?t[8]:d(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=g,e}var i=e("./arrayCopy"),a=e("./composeArgs"),s=e("./composeArgsRight"),o=e("./replaceHolders"),c=1,u=4,l=8,f=128,h=256,p="__lodash_placeholder__",d=Math.min;t.exports=r},{"./arrayCopy":27,"./composeArgs":80,"./composeArgsRight":81,"./replaceHolders":123}],118:[function(e,t,n){(function(n){var r=e("./getNative"),i=r(n,"WeakMap"),a=i&&new i;t.exports=a}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./getNative":106}],119:[function(e,t,n){function r(e,t){e=i(e);for(var n=-1,r=t.length,a={};++n<r;){var s=t[n];s in e&&(a[s]=e[s])}return a}var i=e("./toObject");t.exports=r},{"./toObject":127}],120:[function(e,t,n){function r(e,t){var n={};return i(e,function(e,r,i){t(e,r,i)&&(n[r]=e)}),n}var i=e("./baseForIn");t.exports=r},{"./baseForIn":49}],121:[function(e,t,n){var r={};t.exports=r},{}],122:[function(e,t,n){function r(e,t){for(var n=e.length,r=s(t.length,n),o=i(e);r--;){var c=t[r];e[r]=a(c,n)?o[c]:void 0}return e}var i=e("./arrayCopy"),a=e("./isIndex"),s=Math.min;t.exports=r},{"./arrayCopy":27,"./isIndex":109}],123:[function(e,t,n){function r(e,t){for(var n=-1,r=e.length,a=-1,s=[];++n<r;)e[n]===t&&(e[n]=i,s[++a]=n);return s}var i="__lodash_placeholder__";t.exports=r},{}],124:[function(e,t,n){var r=e("./baseSetData"),i=e("../date/now"),a=150,s=16,o=function(){var e=0,t=0;return function(n,o){var c=i(),u=s-(c-t);if(t=c,u>0){if(++e>=a)return n}else e=0;return r(n,o)}}();t.exports=o},{"../date/now":19,"./baseSetData":65}],125:[function(e,t,n){function r(e){for(var t=c(e),n=t.length,r=n&&e.length,u=!!r&&o(r)&&(a(e)||i(e)),f=-1,h=[];++f<n;){var p=t[f];(u&&s(p,r)||l.call(e,p))&&h.push(p)}return h}var i=e("../lang/isArguments"),a=e("../lang/isArray"),s=e("./isIndex"),o=e("./isLength"),c=e("../object/keysIn"),u=Object.prototype,l=u.hasOwnProperty;t.exports=r},{"../lang/isArguments":132,"../lang/isArray":133,"../object/keysIn":150,"./isIndex":109,"./isLength":113}],126:[function(e,t,n){function r(e){return null==e?[]:i(e)?a(e)?e:Object(e):s(e)}var i=e("./isArrayLike"),a=e("../lang/isObject"),s=e("../object/values");t.exports=r},{"../lang/isObject":138,"../object/values":157,"./isArrayLike":108}],127:[function(e,t,n){function r(e){return i(e)?e:Object(e)}var i=e("../lang/isObject");t.exports=r},{"../lang/isObject":138}],128:[function(e,t,n){function r(e){if(a(e))return e;var t=[];return i(e).replace(s,function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)}),t}var i=e("./baseToString"),a=e("../lang/isArray"),s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,o=/\\(\\)?/g;t.exports=r},{"../lang/isArray":133,"./baseToString":70}],129:[function(e,t,n){function r(e){for(var t=-1,n=e.length;++t<n&&i(e.charCodeAt(t)););return t}var i=e("./isSpace");t.exports=r},{"./isSpace":115}],130:[function(e,t,n){function r(e){for(var t=e.length;t--&&i(e.charCodeAt(t)););return t}var i=e("./isSpace");t.exports=r},{"./isSpace":115}],131:[function(e,t,n){function r(e){return e instanceof i?e.clone():new a(e.__wrapped__,e.__chain__,s(e.__actions__))}var i=e("./LazyWrapper"),a=e("./LodashWrapper"),s=e("./arrayCopy");t.exports=r},{"./LazyWrapper":24,"./LodashWrapper":25,"./arrayCopy":27}],132:[function(e,t,n){function r(e){return a(e)&&i(e)&&o.call(e,"callee")&&!c.call(e,"callee")}var i=e("../internal/isArrayLike"),a=e("../internal/isObjectLike"),s=Object.prototype,o=s.hasOwnProperty,c=s.propertyIsEnumerable;t.exports=r},{"../internal/isArrayLike":108,"../internal/isObjectLike":114}],133:[function(e,t,n){var r=e("../internal/getNative"),i=e("../internal/isLength"),a=e("../internal/isObjectLike"),s="[object Array]",o=Object.prototype,c=o.toString,u=r(Array,"isArray"),l=u||function(e){return a(e)&&i(e.length)&&c.call(e)==s};t.exports=l},{"../internal/getNative":106,"../internal/isLength":113,"../internal/isObjectLike":114}],134:[function(e,t,n){function r(e){return null==e?!0:s(e)&&(a(e)||u(e)||i(e)||c(e)&&o(e.splice))?!e.length:!l(e).length}var i=e("./isArguments"),a=e("./isArray"),s=e("../internal/isArrayLike"),o=e("./isFunction"),c=e("../internal/isObjectLike"),u=e("./isString"),l=e("../object/keys");t.exports=r},{"../internal/isArrayLike":108,"../internal/isObjectLike":114,"../object/keys":149,"./isArguments":132,"./isArray":133,"./isFunction":135,"./isString":140}],135:[function(e,t,n){function r(e){return i(e)&&o.call(e)==a}var i=e("./isObject"),a="[object Function]",s=Object.prototype,o=s.toString;t.exports=r},{"./isObject":138}],136:[function(e,t,n){function r(e){return null==e?!1:i(e)?l.test(c.call(e)):a(e)&&s.test(e)}var i=e("./isFunction"),a=e("../internal/isObjectLike"),s=/^\[object .+?Constructor\]$/,o=Object.prototype,c=Function.prototype.toString,u=o.hasOwnProperty,l=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},{"../internal/isObjectLike":114,"./isFunction":135}],137:[function(e,t,n){function r(e){return"number"==typeof e||i(e)&&o.call(e)==a}var i=e("../internal/isObjectLike"),a="[object Number]",s=Object.prototype,o=s.toString;t.exports=r},{"../internal/isObjectLike":114}],138:[function(e,t,n){function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}t.exports=r},{}],139:[function(e,t,n){function r(e){var t;if(!s(e)||l.call(e)!=o||a(e)||!u.call(e,"constructor")&&(t=e.constructor,"function"==typeof t&&!(t instanceof t)))return!1;var n;return i(e,function(e,t){n=t}),void 0===n||u.call(e,n)}var i=e("../internal/baseForIn"),a=e("./isArguments"),s=e("../internal/isObjectLike"),o="[object Object]",c=Object.prototype,u=c.hasOwnProperty,l=c.toString;t.exports=r},{"../internal/baseForIn":49,"../internal/isObjectLike":114,"./isArguments":132}],140:[function(e,t,n){function r(e){return"string"==typeof e||i(e)&&o.call(e)==a}var i=e("../internal/isObjectLike"),a="[object String]",s=Object.prototype,o=s.toString;t.exports=r},{"../internal/isObjectLike":114}],141:[function(e,t,n){function r(e){return a(e)&&i(e.length)&&!!S[L.call(e)]}var i=e("../internal/isLength"),a=e("../internal/isObjectLike"),s="[object Arguments]",o="[object Array]",c="[object Boolean]",u="[object Date]",l="[object Error]",f="[object Function]",h="[object Map]",p="[object Number]",d="[object Object]",g="[object RegExp]",v="[object Set]",m="[object String]",y="[object WeakMap]",b="[object ArrayBuffer]",x="[object Float32Array]",j="[object Float64Array]",R="[object Int8Array]",F="[object Int16Array]",O="[object Int32Array]",w="[object Uint8Array]",_="[object Uint8ClampedArray]",P="[object Uint16Array]",A="[object Uint32Array]",S={};S[x]=S[j]=S[R]=S[F]=S[O]=S[w]=S[_]=S[P]=S[A]=!0,S[s]=S[o]=S[b]=S[c]=S[u]=S[l]=S[f]=S[h]=S[p]=S[d]=S[g]=S[v]=S[m]=S[y]=!1;var E=Object.prototype,L=E.toString;t.exports=r},{"../internal/isLength":113,"../internal/isObjectLike":114}],142:[function(e,t,n){function r(e){return void 0===e}t.exports=r},{}],143:[function(e,t,n){function r(e){return i(e,a(e))}var i=e("../internal/baseCopy"),a=e("../object/keysIn");t.exports=r},{"../internal/baseCopy":40,"../object/keysIn":150}],144:[function(e,t,n){function r(e,t,n){return n&&c(e,t,n)&&(t=void 0),t=a(t,n,3),1==t.length?i(o(e)?e:u(e),t):s(e,t)}var i=e("../internal/arraySum"),a=e("../internal/baseCallback"),s=e("../internal/baseSum"),o=e("../lang/isArray"),c=e("../internal/isIterateeCall"),u=e("../internal/toIterable");t.exports=r},{"../internal/arraySum":34,"../internal/baseCallback":38,"../internal/baseSum":69,"../internal/isIterateeCall":110,"../internal/toIterable":126,"../lang/isArray":133}],145:[function(e,t,n){var r=e("../internal/assignWith"),i=e("../internal/baseAssign"),a=e("../internal/createAssigner"),s=a(function(e,t,n){return n?r(e,t,n):i(e,t)});t.exports=s},{"../internal/assignWith":36,"../internal/baseAssign":37,"../internal/createAssigner":82}],146:[function(e,t,n){var r=e("./assign"),i=e("../internal/assignDefaults"),a=e("../internal/createDefaults"),s=a(r,i);t.exports=s},{"../internal/assignDefaults":35,"../internal/createDefaults":88,"./assign":145}],147:[function(e,t,n){var r=e("../internal/baseForOwn"),i=e("../internal/createForOwn"),a=i(r);t.exports=a},{"../internal/baseForOwn":50,"../internal/createForOwn":92}],148:[function(e,t,n){function r(e,t,n){n&&i(e,t,n)&&(t=void 0);for(var r=-1,s=a(e),c=s.length,u={};++r<c;){var l=s[r],f=e[l];t?o.call(u,f)?u[f].push(l):u[f]=[l]:u[f]=l}return u}var i=e("../internal/isIterateeCall"),a=e("./keys"),s=Object.prototype,o=s.hasOwnProperty;t.exports=r},{"../internal/isIterateeCall":110,"./keys":149}],149:[function(e,t,n){var r=e("../internal/getNative"),i=e("../internal/isArrayLike"),a=e("../lang/isObject"),s=e("../internal/shimKeys"),o=r(Object,"keys"),c=o?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&i(e)?s(e):a(e)?o(e):[]}:s;t.exports=c},{"../internal/getNative":106,"../internal/isArrayLike":108,"../internal/shimKeys":125,"../lang/isObject":138}],150:[function(e,t,n){function r(e){if(null==e)return[];c(e)||(e=Object(e));var t=e.length;t=t&&o(t)&&(a(e)||i(e))&&t||0;for(var n=e.constructor,r=-1,u="function"==typeof n&&n.prototype===e,f=Array(t),h=t>0;++r<t;)f[r]=r+"";for(var p in e)h&&s(p,t)||"constructor"==p&&(u||!l.call(e,p))||f.push(p);return f}var i=e("../lang/isArguments"),a=e("../lang/isArray"),s=e("../internal/isIndex"),o=e("../internal/isLength"),c=e("../lang/isObject"),u=Object.prototype,l=u.hasOwnProperty;t.exports=r},{"../internal/isIndex":109,"../internal/isLength":113,"../lang/isArguments":132,"../lang/isArray":133,"../lang/isObject":138}],151:[function(e,t,n){var r=e("../internal/createObjectMapper"),i=r(!0);t.exports=i},{"../internal/createObjectMapper":94}],152:[function(e,t,n){var r=e("../internal/createObjectMapper"),i=r();t.exports=i},{"../internal/createObjectMapper":94}],153:[function(e,t,n){var r=e("../internal/baseMerge"),i=e("../internal/createAssigner"),a=i(r);t.exports=a},{"../internal/baseMerge":60,"../internal/createAssigner":82}],154:[function(e,t,n){var r=e("../internal/arrayMap"),i=e("../internal/baseDifference"),a=e("../internal/baseFlatten"),s=e("../internal/bindCallback"),o=e("./keysIn"),c=e("../internal/pickByArray"),u=e("../internal/pickByCallback"),l=e("../function/restParam"),f=l(function(e,t){if(null==e)return{};if("function"!=typeof t[0]){var t=r(a(t),String);return c(e,i(o(e),t))}var n=s(t[0],t[1],3);return u(e,function(e,t,r){return!n(e,t,r)})});t.exports=f},{"../function/restParam":23,"../internal/arrayMap":30,"../internal/baseDifference":42,"../internal/baseFlatten":47,"../internal/bindCallback":74,"../internal/pickByArray":119,"../internal/pickByCallback":120,"./keysIn":150}],155:[function(e,t,n){function r(e){e=a(e);for(var t=-1,n=i(e),r=n.length,s=Array(r);++t<r;){var o=n[t];s[t]=[o,e[o]]}return s}var i=e("./keys"),a=e("../internal/toObject");t.exports=r},{"../internal/toObject":127,"./keys":149}],156:[function(e,t,n){var r=e("../internal/baseFlatten"),i=e("../internal/bindCallback"),a=e("../internal/pickByArray"),s=e("../internal/pickByCallback"),o=e("../function/restParam"),c=o(function(e,t){return null==e?{}:"function"==typeof t[0]?s(e,i(t[0],t[1],3)):a(e,r(t))});t.exports=c},{"../function/restParam":23,"../internal/baseFlatten":47,"../internal/bindCallback":74,"../internal/pickByArray":119,"../internal/pickByCallback":120}],157:[function(e,t,n){function r(e){return i(e,a(e))}var i=e("../internal/baseValues"),a=e("./keys");t.exports=r},{"../internal/baseValues":71,"./keys":149}],158:[function(e,t,n){function r(e,t,n){var r=e;return(e=i(e))?(n?o(r,t,n):null==t)?e.slice(c(e),u(e)+1):(t+="",e.slice(a(e,t),s(e,t)+1)):e}var i=e("../internal/baseToString"),a=e("../internal/charsLeftIndex"),s=e("../internal/charsRightIndex"),o=e("../internal/isIterateeCall"),c=e("../internal/trimmedLeftIndex"),u=e("../internal/trimmedRightIndex");t.exports=r},{"../internal/baseToString":70,"../internal/charsLeftIndex":77,"../internal/charsRightIndex":78,"../internal/isIterateeCall":110,"../internal/trimmedLeftIndex":129,"../internal/trimmedRightIndex":130}],159:[function(e,t,n){function r(e){return e}t.exports=r},{}],160:[function(e,t,n){function r(){}t.exports=r},{}],161:[function(e,t,n){function r(e){return s(e)?i(e):a(e)}var i=e("../internal/baseProperty"),a=e("../internal/basePropertyDeep"),s=e("../internal/isKey");t.exports=r},{"../internal/baseProperty":62,"../internal/basePropertyDeep":63,"../internal/isKey":111}],162:[function(e,t,n){var r=e("./stringify"),i=e("./parse");t.exports={stringify:r,parse:i}},{"./parse":163,"./stringify":164}],163:[function(e,t,n){var r=e("./utils"),i={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1e3,strictNullHandling:!1,plainObjects:!1,allowPrototypes:!1,allowDots:!1};i.parseValues=function(e,t){for(var n={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),a=0,s=i.length;s>a;++a){var o=i[a],c=-1===o.indexOf("]=")?o.indexOf("="):o.indexOf("]=")+1;if(-1===c)n[r.decode(o)]="",t.strictNullHandling&&(n[r.decode(o)]=null);else{var u=r.decode(o.slice(0,c)),l=r.decode(o.slice(c+1));Object.prototype.hasOwnProperty.call(n,u)?n[u]=[].concat(n[u]).concat(l):n[u]=l}}return n},i.parseObject=function(e,t,n){if(!e.length)return t;var r,a=e.shift();if("[]"===a)r=[],r=r.concat(i.parseObject(e,t,n));else{r=n.plainObjects?Object.create(null):{};var s="["===a[0]&&"]"===a[a.length-1]?a.slice(1,a.length-1):a,o=parseInt(s,10),c=""+o;!isNaN(o)&&a!==s&&c===s&&o>=0&&n.parseArrays&&o<=n.arrayLimit?(r=[],r[o]=i.parseObject(e,t,n)):r[s]=i.parseObject(e,t,n)}return r},i.parseKeys=function(e,t,n){if(e){n.allowDots&&(e=e.replace(/\.([^\.\[]+)/g,"[$1]"));var r=/^([^\[\]]*)/,a=/(\[[^\[\]]*\])/g,s=r.exec(e),o=[];if(s[1]){if(!n.plainObjects&&Object.prototype.hasOwnProperty(s[1])&&!n.allowPrototypes)return;o.push(s[1])}for(var c=0;null!==(s=a.exec(e))&&c<n.depth;)++c,(n.plainObjects||!Object.prototype.hasOwnProperty(s[1].replace(/\[|\]/g,""))||n.allowPrototypes)&&o.push(s[1]);return s&&o.push("["+e.slice(s.index)+"]"),i.parseObject(o,t,n)}},t.exports=function(e,t){if(t=t||{},t.delimiter="string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:i.delimiter,t.depth="number"==typeof t.depth?t.depth:i.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:i.arrayLimit,t.parseArrays=t.parseArrays!==!1,t.allowDots="boolean"==typeof t.allowDots?t.allowDots:i.allowDots,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:i.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:i.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:i.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:i.strictNullHandling,""===e||null===e||"undefined"==typeof e)return t.plainObjects?Object.create(null):{};for(var n="string"==typeof e?i.parseValues(e,t):e,a=t.plainObjects?Object.create(null):{},s=Object.keys(n),o=0,c=s.length;c>o;++o){var u=s[o],l=i.parseKeys(u,n[u],t);a=r.merge(a,l,t)}return r.compact(a)}},{"./utils":165}],164:[function(e,t,n){var r=e("./utils"),i={delimiter:"&",arrayPrefixGenerators:{brackets:function(e,t){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e,t){return e}},strictNullHandling:!1,skipNulls:!1,encode:!0};i.stringify=function(e,t,n,a,s,o,c,u){if("function"==typeof c)e=c(t,e);else if(r.isBuffer(e))e=e.toString();else if(e instanceof Date)e=e.toISOString();else if(null===e){if(a)return o?r.encode(t):t;e=""}if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return o?[r.encode(t)+"="+r.encode(e)]:[t+"="+e];var l=[];if("undefined"==typeof e)return l;var f;if(Array.isArray(c))f=c;else{var h=Object.keys(e);f=u?h.sort(u):h}for(var p=0,d=f.length;d>p;++p){var g=f[p];s&&null===e[g]||(l=Array.isArray(e)?l.concat(i.stringify(e[g],n(t,g),n,a,s,o,c)):l.concat(i.stringify(e[g],t+"["+g+"]",n,a,s,o,c)))}return l},t.exports=function(e,t){t=t||{};var n,r,a="undefined"==typeof t.delimiter?i.delimiter:t.delimiter,s="boolean"==typeof t.strictNullHandling?t.strictNullHandling:i.strictNullHandling,o="boolean"==typeof t.skipNulls?t.skipNulls:i.skipNulls,c="boolean"==typeof t.encode?t.encode:i.encode,u="function"==typeof t.sort?t.sort:null;"function"==typeof t.filter?(r=t.filter,e=r("",e)):Array.isArray(t.filter)&&(n=r=t.filter);var l=[];if("object"!=typeof e||null===e)return"";var f;f=t.arrayFormat in i.arrayPrefixGenerators?t.arrayFormat:"indices"in t?t.indices?"indices":"repeat":"indices";var h=i.arrayPrefixGenerators[f];n||(n=Object.keys(e)),u&&n.sort(u);for(var p=0,d=n.length;d>p;++p){var g=n[p];o&&null===e[g]||(l=l.concat(i.stringify(e[g],g,h,s,o,c,r,u)))}return l.join(a)}},{"./utils":165}],165:[function(e,t,n){var r={};r.hexTable=new Array(256);for(var i=0;256>i;++i)r.hexTable[i]="%"+((16>i?"0":"")+i.toString(16)).toUpperCase();n.arrayToObject=function(e,t){for(var n=t.plainObjects?Object.create(null):{},r=0,i=e.length;i>r;++r)"undefined"!=typeof e[r]&&(n[r]=e[r]);return n},n.merge=function(e,t,r){if(!t)return e;if("object"!=typeof t)return Array.isArray(e)?e.push(t):"object"==typeof e?e[t]=!0:e=[e,t],e;if("object"!=typeof e)return e=[e].concat(t);Array.isArray(e)&&!Array.isArray(t)&&(e=n.arrayToObject(e,r));for(var i=Object.keys(t),a=0,s=i.length;s>a;++a){var o=i[a],c=t[o];Object.prototype.hasOwnProperty.call(e,o)?e[o]=n.merge(e[o],c,r):e[o]=c}return e},n.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},n.encode=function(e){if(0===e.length)return e;"string"!=typeof e&&(e=""+e);for(var t="",n=0,i=e.length;i>n;++n){var a=e.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&57>=a||a>=65&&90>=a||a>=97&&122>=a?t+=e[n]:128>a?t+=r.hexTable[a]:2048>a?t+=r.hexTable[192|a>>6]+r.hexTable[128|63&a]:55296>a||a>=57344?t+=r.hexTable[224|a>>12]+r.hexTable[128|a>>6&63]+r.hexTable[128|63&a]:(++n,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),t+=r.hexTable[240|a>>18]+r.hexTable[128|a>>12&63]+r.hexTable[128|a>>6&63]+r.hexTable[128|63&a])}return t},n.compact=function(e,t){if("object"!=typeof e||null===e)return e;t=t||[];var r=t.indexOf(e);if(-1!==r)return t[r];if(t.push(e),Array.isArray(e)){for(var i=[],a=0,s=e.length;s>a;++a)"undefined"!=typeof e[a]&&i.push(e[a]);return i}var o=Object.keys(e);for(a=0,s=o.length;s>a;++a){var c=o[a];e[c]=n.compact(e[c],t)}return e},n.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},n.isBuffer=function(e){return null===e||"undefined"==typeof e?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},{}],166:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],167:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],168:[function(e,t,n){(function(t,r){function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(t)?r.showHidden=t:t&&n._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),c(r,e,r.depth)}function a(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function s(e,t){return e}function o(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function c(e,t,r){if(e.customInspect&&t&&_(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(r,e);return b(i)||(i=c(e,i,r)),i}var a=u(e,t);if(a)return a;var s=Object.keys(t),g=o(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),w(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(t);if(0===s.length){if(_(t)){var v=t.name?": "+t.name:"";return e.stylize("[Function"+v+"]","special")}if(R(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(O(t))return e.stylize(Date.prototype.toString.call(t),"date");if(w(t))return l(t)}var m="",y=!1,x=["{","}"];if(d(t)&&(y=!0,x=["[","]"]),_(t)){var j=t.name?": "+t.name:"";m=" [Function"+j+"]"}if(R(t)&&(m=" "+RegExp.prototype.toString.call(t)),O(t)&&(m=" "+Date.prototype.toUTCString.call(t)),w(t)&&(m=" "+l(t)),0===s.length&&(!y||0==t.length))return x[0]+m+x[1];if(0>r)return R(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var F;return F=y?f(e,t,r,g,s):s.map(function(n){return h(e,t,r,g,n,y)}),e.seen.pop(),p(F,m,x)}function u(e,t){if(j(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return y(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):v(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i){for(var a=[],s=0,o=t.length;o>s;++s)L(t,String(s))?a.push(h(e,t,n,r,String(s),!0)):a.push("");return i.forEach(function(i){i.match(/^\d+$/)||a.push(h(e,t,n,r,i,!0))}),a}function h(e,t,n,r,i,a){var s,o,u;if(u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},u.get?o=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(o=e.stylize("[Setter]","special")),L(r,i)||(s="["+i+"]"),o||(e.seen.indexOf(u.value)<0?(o=v(n)?c(e,u.value,null):c(e,u.value,n-1),o.indexOf("\n")>-1&&(o=a?o.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+o.split("\n").map(function(e){return"   "+e}).join("\n"))):o=e.stylize("[Circular]","special")),j(s)){if(a&&i.match(/^\d+$/))return o;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+o}function p(e,t,n){var r=0,i=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function d(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function v(e){return null===e}function m(e){return null==e}function y(e){return"number"==typeof e}function b(e){return"string"==typeof e}function x(e){return"symbol"==typeof e}function j(e){return void 0===e}function R(e){return F(e)&&"[object RegExp]"===A(e)}function F(e){return"object"==typeof e&&null!==e}function O(e){return F(e)&&"[object Date]"===A(e)}function w(e){return F(e)&&("[object Error]"===A(e)||e instanceof Error)}function _(e){return"function"==typeof e}function P(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function A(e){return Object.prototype.toString.call(e)}function S(e){return 10>e?"0"+e.toString(10):e.toString(10)}function E(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),I[e.getMonth()],t].join(" ")}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var k=/%[sdj%]/g;n.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,a=r.length,s=String(e).replace(k,function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),o=r[n];a>n;o=r[++n])s+=v(o)||!F(o)?" "+o:" "+i(o);return s},n.deprecate=function(e,i){function a(){if(!s){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),s=!0}return e.apply(this,arguments)}if(j(r.process))return function(){return n.deprecate(e,i).apply(this,arguments)};if(t.noDeprecation===!0)return e;var s=!1;return a};var T,C={};n.debuglog=function(e){if(j(T)&&(T=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!C[e])if(new RegExp("\\b"+e+"\\b","i").test(T)){var r=t.pid;C[e]=function(){var t=n.format.apply(n,arguments);console.error("%s %d: %s",e,r,t)}}else C[e]=function(){};return C[e]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=g,n.isNull=v,n.isNullOrUndefined=m,n.isNumber=y,n.isString=b,n.isSymbol=x,n.isUndefined=j,n.isRegExp=R,n.isObject=F,n.isDate=O,n.isError=w,n.isFunction=_,n.isPrimitive=P,n.isBuffer=e("./support/isBuffer");var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",E(),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!F(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":167,_process:2,inherits:166}],169:[function(e,t,n){"use strict";var r=e("lodash/lang/isUndefined"),i=e("lodash/lang/isString"),a=e("lodash/lang/isFunction"),s=e("lodash/lang/isEmpty"),o=e("lodash/object/defaults"),c=e("lodash/collection/reduce"),u=e("lodash/collection/filter"),l=e("lodash/object/omit"),f={addRefinement:function(e,t,n){if(f.isRefined(e,t,n))return e;var r=""+n,i=e[t]?e[t].concat(r):[r],a={};return a[t]=i,o({},a,e)},removeRefinement:function(e,t,n){if(r(n))return f.clearRefinement(e,t);var i=""+n;return f.clearRefinement(e,function(e,n){return t===n&&i===e})},toggleRefinement:function(e,t,n){if(r(n))throw new Error("toggleRefinement should be used with a value");return f.isRefined(e,t,n)?f.removeRefinement(e,t,n):f.addRefinement(e,t,n)},clearRefinement:function(e,t,n){return r(t)?{}:i(t)?l(e,t):a(t)?c(e,function(e,r,i){var a=u(r,function(e){return!t(e,i,n)});return s(a)||(e[i]=a),e},{}):void 0},isRefined:function(t,n,i){var a=e("lodash/array/indexOf"),s=!!t[n]&&t[n].length>0;if(r(i)||!s)return s;var o=""+i;return-1!==a(t[n],o)}};t.exports=f},{"lodash/array/indexOf":6,"lodash/collection/filter":10,"lodash/collection/reduce":16,"lodash/lang/isEmpty":134,"lodash/lang/isFunction":135,"lodash/lang/isString":140,"lodash/lang/isUndefined":142,"lodash/object/defaults":146,"lodash/object/omit":154}],170:[function(e,t,n){"use strict";function r(e,t){var n={},r=a(t,function(e){return-1!==e.indexOf("attribute:")}),u=s(r,function(e){return e.split(":")[1]});-1===c(u,"*")?i(u,function(t){e.isConjunctiveFacet(t)&&e.isFacetRefined(t)&&(n.facetsRefinements||(n.facetsRefinements={}),n.facetsRefinements[t]=e.facetsRefinements[t]),e.isDisjunctiveFacet(t)&&e.isDisjunctiveFacetRefined(t)&&(n.disjunctiveFacetsRefinements||(n.disjunctiveFacetsRefinements={}),n.disjunctiveFacetsRefinements[t]=e.disjunctiveFacetsRefinements[t]);var r=e.getNumericRefinements(t);o(r)||(n.numericRefinements||(n.numericRefinements={}),n.numericRefinements[t]=e.numericRefinements[t])}):(o(e.numericRefinements)||(n.numericRefinements=e.numericRefinements),o(e.facetsRefinements)||(n.facetsRefinements=e.facetsRefinements),o(e.disjunctiveFacetsRefinements)||(n.disjunctiveFacetsRefinements=e.disjunctiveFacetsRefinements),o(e.hierarchicalFacetsRefinements)||(n.hierarchicalFacetsRefinements=e.hierarchicalFacetsRefinements));var l=a(t,function(e){return-1===e.indexOf("attribute:")});return i(l,function(t){n[t]=e[t]}),n}var i=e("lodash/collection/forEach"),a=e("lodash/collection/filter"),s=e("lodash/collection/map"),o=e("lodash/lang/isEmpty"),c=e("lodash/array/indexOf");t.exports=r},{"lodash/array/indexOf":6,"lodash/collection/filter":10,"lodash/collection/forEach":12,"lodash/collection/map":14,
"lodash/lang/isEmpty":134}],171:[function(e,t,n){"use strict";function r(e){var t=e?r._parseNumbers(e):{};this.index=t.index||"",this.query=t.query||"",this.facets=t.facets||[],this.disjunctiveFacets=t.disjunctiveFacets||[],this.hierarchicalFacets=t.hierarchicalFacets||[],this.facetsRefinements=t.facetsRefinements||{},this.facetsExcludes=t.facetsExcludes||{},this.disjunctiveFacetsRefinements=t.disjunctiveFacetsRefinements||{},this.numericRefinements=t.numericRefinements||{},this.tagRefinements=t.tagRefinements||[],this.hierarchicalFacetsRefinements=t.hierarchicalFacetsRefinements||{},this.numericFilters=t.numericFilters,this.tagFilters=t.tagFilters,this.optionalTagFilters=t.optionalTagFilters,this.optionalFacetFilters=t.optionalFacetFilters,this.hitsPerPage=t.hitsPerPage,this.maxValuesPerFacet=t.maxValuesPerFacet,this.page=t.page||0,this.queryType=t.queryType,this.typoTolerance=t.typoTolerance,this.minWordSizefor1Typo=t.minWordSizefor1Typo,this.minWordSizefor2Typos=t.minWordSizefor2Typos,this.minProximity=t.minProximity,this.allowTyposOnNumericTokens=t.allowTyposOnNumericTokens,this.ignorePlurals=t.ignorePlurals,this.restrictSearchableAttributes=t.restrictSearchableAttributes,this.advancedSyntax=t.advancedSyntax,this.analytics=t.analytics,this.analyticsTags=t.analyticsTags,this.synonyms=t.synonyms,this.replaceSynonymsInHighlight=t.replaceSynonymsInHighlight,this.optionalWords=t.optionalWords,this.removeWordsIfNoResults=t.removeWordsIfNoResults,this.attributesToRetrieve=t.attributesToRetrieve,this.attributesToHighlight=t.attributesToHighlight,this.highlightPreTag=t.highlightPreTag,this.highlightPostTag=t.highlightPostTag,this.attributesToSnippet=t.attributesToSnippet,this.getRankingInfo=t.getRankingInfo,this.distinct=t.distinct,this.aroundLatLng=t.aroundLatLng,this.aroundLatLngViaIP=t.aroundLatLngViaIP,this.aroundRadius=t.aroundRadius,this.minimumAroundRadius=t.minimumAroundRadius,this.aroundPrecision=t.aroundPrecision,this.insideBoundingBox=t.insideBoundingBox,this.insidePolygon=t.insidePolygon,this.offset=t.offset,this.length=t.length,s(t,function(e,t){if(!this.hasOwnProperty(t)){var n="Unsupported SearchParameter: `"+t+"` (this will throw in the next version)";window?window.console&&window.console.error(n):console.error(n)}},this)}var i=e("lodash/object/keys"),a=e("lodash/array/intersection"),s=e("lodash/object/forOwn"),o=e("lodash/collection/forEach"),c=e("lodash/collection/filter"),u=e("lodash/collection/map"),l=e("lodash/collection/reduce"),f=e("lodash/object/omit"),h=e("lodash/array/indexOf"),p=e("lodash/lang/isArray"),d=e("lodash/lang/isEmpty"),g=e("lodash/lang/isUndefined"),v=e("lodash/lang/isString"),m=e("lodash/lang/isNumber"),y=e("lodash/lang/isFunction"),b=e("lodash/collection/find"),x=e("lodash/collection/pluck"),j=e("lodash/object/defaults"),R=e("lodash/object/merge"),F=e("../functions/deepFreeze"),O=e("./filterState"),w=e("./RefinementList");r.PARAMETERS=i(new r),r._parseNumbers=function(e){var t={},n=["aroundPrecision","aroundRadius","getRankingInfo","minWordSizefor2Typos","minWordSizefor1Typo","page","maxValuesPerFacet","distinct","minimumAroundRadius","hitsPerPage","minProximity"];if(o(n,function(n){var r=e[n];v(r)&&(t[n]=parseFloat(e[n]))}),e.numericRefinements){var r={};o(e.numericRefinements,function(e,t){r[t]={},o(e,function(e,n){var i=u(e,function(e){return p(e)?u(e,function(e){return v(e)?parseFloat(e):e}):v(e)?parseFloat(e):e});r[t][n]=i})}),t.numericRefinements=r}return R({},e,t)},r.make=function(e){var t=new r(e);return o(e.hierarchicalFacets,function(e){if(e.rootPath){var n=t.getHierarchicalRefinement(e.name);n.length>0&&0!==n[0].indexOf(e.rootPath)&&(t=t.clearRefinements(e.name)),n=t.getHierarchicalRefinement(e.name),0===n.length&&(t=t.toggleHierarchicalFacetRefinement(e.name,e.rootPath))}}),F(t)},r.validate=function(e,t){var n=t||{},r=i(n),a=c(r,function(t){return!e.hasOwnProperty(t)});return 1===a.length?new Error("Property "+a[0]+" is not defined on SearchParameters (see http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html)"):a.length>1?new Error("Properties "+a.join(" ")+" are not defined on SearchParameters (see http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html)"):e.tagFilters&&n.tagRefinements&&n.tagRefinements.length>0?new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."):e.tagRefinements.length>0&&n.tagFilters?new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."):e.numericFilters&&n.numericRefinements&&!d(n.numericRefinements)?new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."):!d(e.numericRefinements)&&n.numericFilters?new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."):null},r.prototype={constructor:r,clearRefinements:function(e){var t=w.clearRefinement;return this.setQueryParameters({page:0,numericRefinements:this._clearNumericRefinements(e),facetsRefinements:t(this.facetsRefinements,e,"conjunctiveFacet"),facetsExcludes:t(this.facetsExcludes,e,"exclude"),disjunctiveFacetsRefinements:t(this.disjunctiveFacetsRefinements,e,"disjunctiveFacet"),hierarchicalFacetsRefinements:t(this.hierarchicalFacetsRefinements,e,"hierarchicalFacet")})},clearTags:function(){return void 0===this.tagFilters&&0===this.tagRefinements.length?this:this.setQueryParameters({page:0,tagFilters:void 0,tagRefinements:[]})},setIndex:function(e){return e===this.index?this:this.setQueryParameters({index:e,page:0})},setQuery:function(e){return e===this.query?this:this.setQueryParameters({query:e,page:0})},setPage:function(e){return e===this.page?this:this.setQueryParameters({page:e})},setFacets:function(e){return this.setQueryParameters({facets:e})},setDisjunctiveFacets:function(e){return this.setQueryParameters({disjunctiveFacets:e})},setHitsPerPage:function(e){return this.hitsPerPage===e?this:this.setQueryParameters({hitsPerPage:e,page:0})},setTypoTolerance:function(e){return this.typoTolerance===e?this:this.setQueryParameters({typoTolerance:e,page:0})},addNumericRefinement:function(e,t,n){var r;if(m(n))r=n;else if(v(n))r=parseFloat(n);else{if(!p(n))throw new Error("The value should be a number, a parseable string or an array of those.");r=u(n,function(e){return v(e)?parseFloat(e):e})}if(this.isNumericRefined(e,t,r))return this;var i=R({},this.numericRefinements);return i[e]=R({},i[e]),i[e][t]?(i[e][t]=i[e][t].slice(),i[e][t].push(r)):i[e][t]=[r],this.setQueryParameters({page:0,numericRefinements:i})},getConjunctiveRefinements:function(e){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return this.facetsRefinements[e]||[]},getDisjunctiveRefinements:function(e){if(!this.isDisjunctiveFacet(e))throw new Error(e+" is not defined in the disjunctiveFacets attribute of the helper configuration");return this.disjunctiveFacetsRefinements[e]||[]},getHierarchicalRefinement:function(e){return this.hierarchicalFacetsRefinements[e]||[]},getExcludeRefinements:function(e){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return this.facetsExcludes[e]||[]},removeNumericRefinement:function(e,t,n){return void 0!==n?this.isNumericRefined(e,t,n)?this.setQueryParameters({page:0,numericRefinements:this._clearNumericRefinements(function(r,i){return i===e&&r.op===t&&r.val===n})}):this:void 0!==t?this.isNumericRefined(e,t)?this.setQueryParameters({page:0,numericRefinements:this._clearNumericRefinements(function(n,r){return r===e&&n.op===t})}):this:this.isNumericRefined(e)?this.setQueryParameters({page:0,numericRefinements:this._clearNumericRefinements(function(t,n){return n===e})}):this},getNumericRefinements:function(e){return this.numericRefinements[e]||{}},getNumericRefinement:function(e,t){return this.numericRefinements[e]&&this.numericRefinements[e][t]},_clearNumericRefinements:function(e){return g(e)?{}:v(e)?f(this.numericRefinements,e):y(e)?l(this.numericRefinements,function(t,n,r){var i={};return o(n,function(t,n){var a=[];o(t,function(t){var i=e({val:t,op:n},r,"numeric");i||a.push(t)}),d(a)||(i[n]=a)}),d(i)||(t[r]=i),t},{}):void 0},addFacetRefinement:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return w.isRefined(this.facetsRefinements,e,t)?this:this.setQueryParameters({page:0,facetsRefinements:w.addRefinement(this.facetsRefinements,e,t)})},addExcludeRefinement:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return w.isRefined(this.facetsExcludes,e,t)?this:this.setQueryParameters({page:0,facetsExcludes:w.addRefinement(this.facetsExcludes,e,t)})},addDisjunctiveFacetRefinement:function(e,t){if(!this.isDisjunctiveFacet(e))throw new Error(e+" is not defined in the disjunctiveFacets attribute of the helper configuration");return w.isRefined(this.disjunctiveFacetsRefinements,e,t)?this:this.setQueryParameters({page:0,disjunctiveFacetsRefinements:w.addRefinement(this.disjunctiveFacetsRefinements,e,t)})},addTagRefinement:function(e){if(this.isTagRefined(e))return this;var t={page:0,tagRefinements:this.tagRefinements.concat(e)};return this.setQueryParameters(t)},removeFacetRefinement:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return w.isRefined(this.facetsRefinements,e,t)?this.setQueryParameters({page:0,facetsRefinements:w.removeRefinement(this.facetsRefinements,e,t)}):this},removeExcludeRefinement:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return w.isRefined(this.facetsExcludes,e,t)?this.setQueryParameters({page:0,facetsExcludes:w.removeRefinement(this.facetsExcludes,e,t)}):this},removeDisjunctiveFacetRefinement:function(e,t){if(!this.isDisjunctiveFacet(e))throw new Error(e+" is not defined in the disjunctiveFacets attribute of the helper configuration");return w.isRefined(this.disjunctiveFacetsRefinements,e,t)?this.setQueryParameters({page:0,disjunctiveFacetsRefinements:w.removeRefinement(this.disjunctiveFacetsRefinements,e,t)}):this},removeTagRefinement:function(e){if(!this.isTagRefined(e))return this;var t={page:0,tagRefinements:c(this.tagRefinements,function(t){return t!==e})};return this.setQueryParameters(t)},toggleRefinement:function(e,t){if(this.isHierarchicalFacet(e))return this.toggleHierarchicalFacetRefinement(e,t);if(this.isConjunctiveFacet(e))return this.toggleFacetRefinement(e,t);if(this.isDisjunctiveFacet(e))return this.toggleDisjunctiveFacetRefinement(e,t);throw new Error("Cannot refine the undeclared facet "+e+"; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")},toggleFacetRefinement:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return this.setQueryParameters({page:0,facetsRefinements:w.toggleRefinement(this.facetsRefinements,e,t)})},toggleExcludeFacetRefinement:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return this.setQueryParameters({page:0,facetsExcludes:w.toggleRefinement(this.facetsExcludes,e,t)})},toggleDisjunctiveFacetRefinement:function(e,t){if(!this.isDisjunctiveFacet(e))throw new Error(e+" is not defined in the disjunctiveFacets attribute of the helper configuration");return this.setQueryParameters({page:0,disjunctiveFacetsRefinements:w.toggleRefinement(this.disjunctiveFacetsRefinements,e,t)})},toggleHierarchicalFacetRefinement:function(e,t){if(!this.isHierarchicalFacet(e))throw new Error(e+" is not defined in the hierarchicalFacets attribute of the helper configuration");var n=this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),r={},i=void 0!==this.hierarchicalFacetsRefinements[e]&&this.hierarchicalFacetsRefinements[e].length>0&&(this.hierarchicalFacetsRefinements[e][0]===t||0===this.hierarchicalFacetsRefinements[e][0].indexOf(t+n));return i?-1===t.indexOf(n)?r[e]=[]:r[e]=[t.slice(0,t.lastIndexOf(n))]:r[e]=[t],this.setQueryParameters({page:0,hierarchicalFacetsRefinements:j({},r,this.hierarchicalFacetsRefinements)})},toggleTagRefinement:function(e){return this.isTagRefined(e)?this.removeTagRefinement(e):this.addTagRefinement(e)},isDisjunctiveFacet:function(e){return h(this.disjunctiveFacets,e)>-1},isHierarchicalFacet:function(e){return void 0!==this.getHierarchicalFacetByName(e)},isConjunctiveFacet:function(e){return h(this.facets,e)>-1},isFacetRefined:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return w.isRefined(this.facetsRefinements,e,t)},isExcludeRefined:function(e,t){if(!this.isConjunctiveFacet(e))throw new Error(e+" is not defined in the facets attribute of the helper configuration");return w.isRefined(this.facetsExcludes,e,t)},isDisjunctiveFacetRefined:function(e,t){if(!this.isDisjunctiveFacet(e))throw new Error(e+" is not defined in the disjunctiveFacets attribute of the helper configuration");return w.isRefined(this.disjunctiveFacetsRefinements,e,t)},isHierarchicalFacetRefined:function(e,t){if(!this.isHierarchicalFacet(e))throw new Error(e+" is not defined in the hierarchicalFacets attribute of the helper configuration");var n=this.getHierarchicalRefinement(e);return t?-1!==h(n,t):n.length>0},isNumericRefined:function(e,t,n){if(g(n)&&g(t))return!!this.numericRefinements[e];if(g(n))return this.numericRefinements[e]&&!g(this.numericRefinements[e][t]);var r=parseFloat(n);return this.numericRefinements[e]&&!g(this.numericRefinements[e][t])&&-1!==h(this.numericRefinements[e][t],r)},isTagRefined:function(e){return-1!==h(this.tagRefinements,e)},getRefinedDisjunctiveFacets:function(){var e=a(i(this.numericRefinements),this.disjunctiveFacets);return i(this.disjunctiveFacetsRefinements).concat(e).concat(this.getRefinedHierarchicalFacets())},getRefinedHierarchicalFacets:function(){return a(x(this.hierarchicalFacets,"name"),i(this.hierarchicalFacetsRefinements))},getUnrefinedDisjunctiveFacets:function(){var e=this.getRefinedDisjunctiveFacets();return c(this.disjunctiveFacets,function(t){return-1===h(e,t)})},managedParameters:["index","facets","disjunctiveFacets","facetsRefinements","facetsExcludes","disjunctiveFacetsRefinements","numericRefinements","tagRefinements","hierarchicalFacets","hierarchicalFacetsRefinements"],getQueryParams:function(){var e=this.managedParameters,t={};return s(this,function(n,r){-1===h(e,r)&&void 0!==n&&(t[r]=n)}),t},getQueryParameter:function(e){if(!this.hasOwnProperty(e))throw new Error("Parameter '"+e+"' is not an attribute of SearchParameters (http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html)");return this[e]},setQueryParameter:function(e,t){if(this[e]===t)return this;var n={};return n[e]=t,this.setQueryParameters(n)},setQueryParameters:function(e){var t=r.validate(this,e);if(t)throw t;var n=r._parseNumbers(e);return this.mutateMe(function(t){var r=i(e);return o(r,function(e){t[e]=n[e]}),t})},filter:function(e){return O(this,e)},mutateMe:function(e){var t=new this.constructor(this);return e(t,this),F(t)},_getHierarchicalFacetSortBy:function(e){return e.sortBy||["isRefined:desc","name:asc"]},_getHierarchicalFacetSeparator:function(e){return e.separator||" > "},_getHierarchicalRootPath:function(e){return e.rootPath||null},_getHierarchicalShowParentLevel:function(e){return"boolean"==typeof e.showParentLevel?e.showParentLevel:!0},getHierarchicalFacetByName:function(e){return b(this.hierarchicalFacets,{name:e})}},t.exports=r},{"../functions/deepFreeze":176,"./RefinementList":169,"./filterState":170,"lodash/array/indexOf":6,"lodash/array/intersection":7,"lodash/collection/filter":10,"lodash/collection/find":11,"lodash/collection/forEach":12,"lodash/collection/map":14,"lodash/collection/pluck":15,"lodash/collection/reduce":16,"lodash/lang/isArray":133,"lodash/lang/isEmpty":134,"lodash/lang/isFunction":135,"lodash/lang/isNumber":137,"lodash/lang/isString":140,"lodash/lang/isUndefined":142,"lodash/object/defaults":146,"lodash/object/forOwn":147,"lodash/object/keys":149,"lodash/object/merge":153,"lodash/object/omit":154}],172:[function(e,t,n){"use strict";var r=e("lodash/object/invert"),i=e("lodash/object/keys"),a={advancedSyntax:"aS",allowTyposOnNumericTokens:"aTONT",analyticsTags:"aT",analytics:"a",aroundLatLngViaIP:"aLLVIP",aroundLatLng:"aLL",aroundPrecision:"aP",aroundRadius:"aR",attributesToHighlight:"aTH",attributesToRetrieve:"aTR",attributesToSnippet:"aTS",disjunctiveFacetsRefinements:"dFR",disjunctiveFacets:"dF",distinct:"d",facetsExcludes:"fE",facetsRefinements:"fR",facets:"f",getRankingInfo:"gRI",hierarchicalFacetsRefinements:"hFR",hierarchicalFacets:"hF",highlightPostTag:"hPoT",highlightPreTag:"hPrT",hitsPerPage:"hPP",ignorePlurals:"iP",index:"idx",insideBoundingBox:"iBB",insidePolygon:"iPg",length:"l",maxValuesPerFacet:"mVPF",minimumAroundRadius:"mAR",minProximity:"mP",minWordSizefor1Typo:"mWS1T",minWordSizefor2Typos:"mWS2T",numericFilters:"nF",numericRefinements:"nR",offset:"o",optionalWords:"oW",page:"p",queryType:"qT",query:"q",removeWordsIfNoResults:"rWINR",replaceSynonymsInHighlight:"rSIH",restrictSearchableAttributes:"rSA",synonyms:"s",tagFilters:"tF",tagRefinements:"tR",typoTolerance:"tT",optionalTagFilters:"oTF",optionalFacetFilters:"oFF"},s=r(a);t.exports={ENCODED_PARAMETERS:i(s),decode:function(e){return s[e]},encode:function(e){return a[e]}}},{"lodash/object/invert":148,"lodash/object/keys":149}],173:[function(e,t,n){"use strict";function r(e){return function(t,n){var r=e.hierarchicalFacets[n],a=e.hierarchicalFacetsRefinements[r.name]&&e.hierarchicalFacetsRefinements[r.name][0]||"",s=e._getHierarchicalFacetSeparator(r),o=e._getHierarchicalRootPath(r),c=e._getHierarchicalShowParentLevel(r),l=d(e._getHierarchicalFacetSortBy(r)),f=i(l,s,o,c,a),h=t;return o&&(h=t.slice(o.split(s).length)),u(h,f,{name:e.hierarchicalFacets[n].name,count:null,isRefined:!0,path:null,data:null})}}function i(e,t,n,r,i){return function(o,u,f){var d=o;if(f>0){var g=0;for(d=o;f>g;)d=d&&h(d.data,{isRefined:!0}),g++}if(d){var v=a(d.path||n,i,t,n,r);d.data=l(c(p(u.data,v),s(t,i)),e[0],e[1])}return o}}function a(e,t,n,r,i){return function(a,s){return!r||0===s.indexOf(r)&&r!==s?!r&&-1===s.indexOf(n)||r&&s.split(n).length-r.split(n).length===1||-1===s.indexOf(n)&&-1===t.indexOf(n)||0===t.indexOf(s)||0===s.indexOf(e+n)&&(i||0===s.indexOf(t)):!1}}function s(e,t){return function(n,r){return{name:f(o(r.split(e))),path:r,count:n,isRefined:t===r||0===t.indexOf(r+e),data:null}}}t.exports=r;var o=e("lodash/array/last"),c=e("lodash/collection/map"),u=e("lodash/collection/reduce"),l=e("lodash/collection/sortByOrder"),f=e("lodash/string/trim"),h=e("lodash/collection/find"),p=e("lodash/object/pick"),d=e("../functions/formatSort")},{"../functions/formatSort":177,"lodash/array/last":8,"lodash/collection/find":11,"lodash/collection/map":14,"lodash/collection/reduce":16,"lodash/collection/sortByOrder":17,"lodash/object/pick":156,"lodash/string/trim":158}],174:[function(e,t,n){"use strict";function r(e){var t={};return f(e,function(e,n){t[e]=n}),t}function i(e,t,n){t&&t[n]&&(e.stats=t[n])}function a(e,t){return v(e,function(e){return m(e.attributes,t)})}function s(e,t){var n=t.results[0];this.query=n.query,this.parsedQuery=n.parsedQuery,this.hits=n.hits,this.index=n.index,this.hitsPerPage=n.hitsPerPage,this.nbHits=n.nbHits,this.nbPages=n.nbPages,this.page=n.page,this.processingTimeMS=g(t.results,"processingTimeMS"),this.aroundLatLng=n.aroundLatLng,this.automaticRadius=n.automaticRadius,this.serverUsed=n.serverUsed,this.timeoutCounts=n.timeoutCounts,this.timeoutHits=n.timeoutHits,this.disjunctiveFacets=[],this.hierarchicalFacets=y(e.hierarchicalFacets,function(){return[]}),this.facets=[];var s=e.getRefinedDisjunctiveFacets(),o=r(e.facets),c=r(e.disjunctiveFacets),u=1;f(n.facets,function(t,r){var s=a(e.hierarchicalFacets,r);if(s){var u=s.attributes.indexOf(r);this.hierarchicalFacets[d(e.hierarchicalFacets,{name:s.name})][u]={attribute:r,data:t,exhaustive:n.exhaustiveFacetsCount}}else{var l,f=-1!==p(e.disjunctiveFacets,r),h=-1!==p(e.facets,r);f&&(l=c[r],this.disjunctiveFacets[l]={name:r,data:t,exhaustive:n.exhaustiveFacetsCount},i(this.disjunctiveFacets[l],n.facets_stats,r)),h&&(l=o[r],this.facets[l]={name:r,data:t,exhaustive:n.exhaustiveFacetsCount},i(this.facets[l],n.facets_stats,r))}},this),this.hierarchicalFacets=h(this.hierarchicalFacets),f(s,function(r){var a=t.results[u],s=e.getHierarchicalFacetByName(r);f(a.facets,function(t,r){var o;if(s){o=d(e.hierarchicalFacets,{name:s.name});var u=d(this.hierarchicalFacets[o],{attribute:r});if(-1===u)return;this.hierarchicalFacets[o][u].data=j({},this.hierarchicalFacets[o][u].data,t)}else{o=c[r];var l=n.facets&&n.facets[r]||{};this.disjunctiveFacets[o]={name:r,data:x({},t,l),exhaustive:a.exhaustiveFacetsCount},i(this.disjunctiveFacets[o],a.facets_stats,r),e.disjunctiveFacetsRefinements[r]&&f(e.disjunctiveFacetsRefinements[r],function(t){!this.disjunctiveFacets[o].data[t]&&p(e.disjunctiveFacetsRefinements[r],t)>-1&&(this.disjunctiveFacets[o].data[t]=0)},this)}},this),u++},this),f(e.getRefinedHierarchicalFacets(),function(n){var r=e.getHierarchicalFacetByName(n),i=e._getHierarchicalFacetSeparator(r),a=e.getHierarchicalRefinement(n);if(!(0===a.length||a[0].split(i).length<2)){var s=t.results[u];f(s.facets,function(t,n){var s=d(e.hierarchicalFacets,{name:r.name}),o=d(this.hierarchicalFacets[s],{attribute:n});if(-1!==o){var c={};if(a.length>0){var u=a[0].split(i)[0];c[u]=this.hierarchicalFacets[s][o].data[u]}this.hierarchicalFacets[s][o].data=x(c,t,this.hierarchicalFacets[s][o].data)}},this),u++}},this),f(e.facetsExcludes,function(e,t){var r=o[t];this.facets[r]={name:t,data:n.facets[t],exhaustive:n.exhaustiveFacetsCount},f(e,function(e){this.facets[r]=this.facets[r]||{name:t},this.facets[r].data=this.facets[r].data||{},this.facets[r].data[e]=0},this)},this),this.hierarchicalFacets=y(this.hierarchicalFacets,P(e)),this.facets=h(this.facets),this.disjunctiveFacets=h(this.disjunctiveFacets),this._state=e}function o(e,t){var n={name:t};if(e._state.isConjunctiveFacet(t)){var r=v(e.facets,n);return r?y(r.data,function(n,r){return{name:r,count:n,isRefined:e._state.isFacetRefined(t,r)}}):[]}if(e._state.isDisjunctiveFacet(t)){var i=v(e.disjunctiveFacets,n);return i?y(i.data,function(n,r){return{name:r,count:n,isRefined:e._state.isDisjunctiveFacetRefined(t,r)}}):[]}return e._state.isHierarchicalFacet(t)?v(e.hierarchicalFacets,n):void 0}function c(e,t){if(!t.data||0===t.data.length)return t;var n=y(t.data,O(c,e)),r=e(n),i=j({},t,{data:r});return i}function u(e,t){return t.sort(e)}function l(e,t){var n=v(e,{name:t});return n&&n.stats}var f=e("lodash/collection/forEach"),h=e("lodash/array/compact"),p=e("lodash/array/indexOf"),d=e("lodash/array/findIndex"),g=e("lodash/collection/sum"),v=e("lodash/collection/find"),m=e("lodash/collection/includes"),y=e("lodash/collection/map"),b=e("lodash/collection/sortByOrder"),x=e("lodash/object/defaults"),j=e("lodash/object/merge"),R=e("lodash/lang/isArray"),F=e("lodash/lang/isFunction"),O=e("lodash/function/partial"),w=e("lodash/function/partialRight"),_=e("../functions/formatSort"),P=e("./generate-hierarchical-tree");s.prototype.getFacetByName=function(e){var t={name:e};return v(this.facets,t)||v(this.disjunctiveFacets,t)||v(this.hierarchicalFacets,t)},s.DEFAULT_SORT=["isRefined:desc","count:desc","name:asc"],s.prototype.getFacetValues=function(e,t){var n=o(this,e);if(!n)throw new Error(e+" is not a retrieved facet.");var r=x({},t,{sortBy:s.DEFAULT_SORT});if(R(r.sortBy)){var i=_(r.sortBy);return R(n)?b(n,i[0],i[1]):c(w(b,i[0],i[1]),n)}if(F(r.sortBy))return R(n)?n.sort(r.sortBy):c(O(u,r.sortBy),n);throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")},s.prototype.getFacetStats=function(e){if(this._state.isConjunctiveFacet(e))return l(this.facets,e);if(this._state.isDisjunctiveFacet(e))return l(this.disjunctiveFacets,e);throw new Error(e+" is not present in `facets` or `disjunctiveFacets`")},t.exports=s},{"../functions/formatSort":177,"./generate-hierarchical-tree":173,"lodash/array/compact":4,"lodash/array/findIndex":5,"lodash/array/indexOf":6,"lodash/collection/find":11,"lodash/collection/forEach":12,"lodash/collection/includes":13,"lodash/collection/map":14,"lodash/collection/sortByOrder":17,"lodash/collection/sum":18,"lodash/function/partial":21,"lodash/function/partialRight":22,"lodash/lang/isArray":133,"lodash/lang/isFunction":135,"lodash/object/defaults":146,"lodash/object/merge":153}],175:[function(e,t,n){"use strict";function r(e,t,n){this.client=e;var r=n||{};r.index=t,this.state=i.make(r),this.lastResults=null,this._queryId=0,this._lastQueryIdReceived=-1}var i=e("./SearchParameters"),a=e("./SearchResults"),s=e("./requestBuilder"),o=e("util"),c=e("events"),u=e("lodash/collection/forEach"),l=e("lodash/collection/map"),f=e("lodash/function/bind"),h=e("lodash/lang/isEmpty"),p=e("lodash/string/trim"),d=e("./url");o.inherits(r,c.EventEmitter),r.prototype.search=function(){return this._search(),this},r.prototype.searchOnce=function(e,t){var n=this.state.setQueryParameters(e),r=s._getQueries(n.index,n);return t?this.client.search(r,function(e,r){t(e,new a(n,r),n)}):this.client.search(r).then(function(e){return{content:new a(n,e),state:n}})},r.prototype.setQuery=function(e){return this.state=this.state.setQuery(e),this._change(),this},r.prototype.clearRefinements=function(e){return this.state=this.state.clearRefinements(e),this._change(),this},r.prototype.clearTags=function(){return this.state=this.state.clearTags(),this._change(),this},r.prototype.addDisjunctiveFacetRefinement=function(e,t){return this.state=this.state.addDisjunctiveFacetRefinement(e,t),this._change(),this},r.prototype.addDisjunctiveRefine=function(){return this.addDisjunctiveFacetRefinement.apply(this,arguments)},r.prototype.addNumericRefinement=function(e,t,n){return this.state=this.state.addNumericRefinement(e,t,n),this._change(),this},r.prototype.addFacetRefinement=function(e,t){return this.state=this.state.addFacetRefinement(e,t),this._change(),this},r.prototype.addRefine=function(){return this.addFacetRefinement.apply(this,arguments)},r.prototype.addFacetExclusion=function(e,t){return this.state=this.state.addExcludeRefinement(e,t),this._change(),this},r.prototype.addExclude=function(){return this.addFacetExclusion.apply(this,arguments)},r.prototype.addTag=function(e){return this.state=this.state.addTagRefinement(e),this._change(),this},r.prototype.removeNumericRefinement=function(e,t,n){return this.state=this.state.removeNumericRefinement(e,t,n),this._change(),this},r.prototype.removeDisjunctiveFacetRefinement=function(e,t){return this.state=this.state.removeDisjunctiveFacetRefinement(e,t),this._change(),this},r.prototype.removeDisjunctiveRefine=function(){return this.removeDisjunctiveFacetRefinement.apply(this,arguments)},r.prototype.removeFacetRefinement=function(e,t){return this.state=this.state.removeFacetRefinement(e,t),this._change(),this},r.prototype.removeRefine=function(){return this.removeFacetRefinement.apply(this,arguments)},r.prototype.removeFacetExclusion=function(e,t){return this.state=this.state.removeExcludeRefinement(e,t),this._change(),this},r.prototype.removeExclude=function(){return this.removeFacetExclusion.apply(this,arguments)},r.prototype.removeTag=function(e){return this.state=this.state.removeTagRefinement(e),this._change(),this},r.prototype.toggleFacetExclusion=function(e,t){return this.state=this.state.toggleExcludeFacetRefinement(e,t),this._change(),this},r.prototype.toggleExclude=function(){return this.toggleFacetExclusion.apply(this,arguments)},r.prototype.toggleRefinement=function(e,t){return this.state=this.state.toggleRefinement(e,t),this._change(),this},r.prototype.toggleRefine=function(){return this.toggleRefinement.apply(this,arguments)},r.prototype.toggleTag=function(e){return this.state=this.state.toggleTagRefinement(e),this._change(),this},r.prototype.nextPage=function(){return this.setCurrentPage(this.state.page+1)},r.prototype.previousPage=function(){return this.setCurrentPage(this.state.page-1)},r.prototype.setCurrentPage=function(e){if(0>e)throw new Error("Page requested below 0.");return this.state=this.state.setPage(e),this._change(),this},r.prototype.setIndex=function(e){return this.state=this.state.setIndex(e),this._change(),this},r.prototype.setQueryParameter=function(e,t){var n=this.state.setQueryParameter(e,t);return this.state===n?this:(this.state=n,this._change(),this)},r.prototype.setState=function(e){return this.state=new i(e),this._change(),this},r.prototype.getState=function(e){return void 0===e?this.state:this.state.filter(e)},r.prototype.getStateAsQueryString=function(e){var t=e&&e.filters||["query","attribute:*"],n=this.getState(t);return d.getQueryStringFromState(n,e)},r.getConfigurationFromQueryString=d.getStateFromQueryString,r.getForeignConfigurationInQueryString=d.getUnrecognizedParametersInQueryString,r.prototype.setStateFromQueryString=function(e,t){var n=t&&t.triggerChange||!1,r=d.getStateFromQueryString(e,t),i=this.state.setQueryParameters(r);n?this.setState(i):this.overrideStateWithoutTriggeringChangeEvent(i)},r.prototype.overrideStateWithoutTriggeringChangeEvent=function(e){return this.state=new i(e),this},r.prototype.isRefined=function(e,t){if(this.state.isConjunctiveFacet(e))return this.state.isFacetRefined(e,t);if(this.state.isDisjunctiveFacet(e))return this.state.isDisjunctiveFacetRefined(e,t);throw new Error(e+" is not properly defined in this helper configuration(use the facets or disjunctiveFacets keys to configure it)")},r.prototype.hasRefinements=function(e){return h(this.state.getNumericRefinements(e))?this.state.isConjunctiveFacet(e)?this.state.isFacetRefined(e):this.state.isDisjunctiveFacet(e)?this.state.isDisjunctiveFacetRefined(e):this.state.isHierarchicalFacet(e)?this.state.isHierarchicalFacetRefined(e):!1:!0},r.prototype.isExcluded=function(e,t){return this.state.isExcludeRefined(e,t)},r.prototype.isDisjunctiveRefined=function(e,t){return this.state.isDisjunctiveFacetRefined(e,t)},r.prototype.hasTag=function(e){return this.state.isTagRefined(e)},r.prototype.isTagRefined=function(){return this.hasTagRefinements.apply(this,arguments)},r.prototype.getIndex=function(){return this.state.index},r.prototype.getCurrentPage=function(){return this.state.page},r.prototype.getTags=function(){return this.state.tagRefinements},r.prototype.getQueryParameter=function(e){return this.state.getQueryParameter(e)},r.prototype.getRefinements=function(e){var t=[];if(this.state.isConjunctiveFacet(e)){var n=this.state.getConjunctiveRefinements(e);u(n,function(e){t.push({value:e,type:"conjunctive"})});var r=this.state.getExcludeRefinements(e);u(r,function(e){t.push({value:e,type:"exclude"})})}else if(this.state.isDisjunctiveFacet(e)){var i=this.state.getDisjunctiveRefinements(e);u(i,function(e){t.push({value:e,type:"disjunctive"})})}var a=this.state.getNumericRefinements(e);return u(a,function(e,n){t.push({value:e,operator:n,type:"numeric"})}),t},r.prototype.getNumericRefinement=function(e,t){return this.state.getNumericRefinement(e,t)},r.prototype.getHierarchicalFacetBreadcrumb=function(e){return l(this.state.getHierarchicalRefinement(e)[0].split(this.state._getHierarchicalFacetSeparator(this.state.getHierarchicalFacetByName(e))),function(e){
return p(e)})},r.prototype._search=function(){var e=this.state,t=s._getQueries(e.index,e);this.emit("search",e,this.lastResults),this.client.search(t,f(this._handleResponse,this,e,this._queryId++))},r.prototype._handleResponse=function(e,t,n,r){if(!(t<this._lastQueryIdReceived)){if(this._lastQueryIdReceived=t,n)return void this.emit("error",n);var i=this.lastResults=new a(e,r);this.emit("result",i,e)}},r.prototype.containsRefinement=function(e,t,n,r){return e||0!==t.length||0!==n.length||0!==r.length},r.prototype._hasDisjunctiveRefinements=function(e){return this.state.disjunctiveRefinements[e]&&this.state.disjunctiveRefinements[e].length>0},r.prototype._change=function(){this.emit("change",this.state,this.lastResults)},t.exports=r},{"./SearchParameters":171,"./SearchResults":174,"./requestBuilder":178,"./url":179,events:3,"lodash/collection/forEach":12,"lodash/collection/map":14,"lodash/function/bind":20,"lodash/lang/isEmpty":134,"lodash/string/trim":158,util:168}],176:[function(e,t,n){"use strict";var r=e("lodash/collection/forEach"),i=e("lodash/utility/identity"),a=e("lodash/lang/isObject"),s=function(e){return a(e)?(r(e,s),Object.isFrozen(e)||Object.freeze(e),e):e};t.exports=Object.freeze?s:i},{"lodash/collection/forEach":12,"lodash/lang/isObject":138,"lodash/utility/identity":159}],177:[function(e,t,n){"use strict";var r=e("lodash/collection/reduce");t.exports=function(e){return r(e,function(e,t){var n=t.split(":");return e[0].push(n[0]),e[1].push(n[1]),e},[[],[]])}},{"lodash/collection/reduce":16}],178:[function(e,t,n){"use strict";var r=e("lodash/collection/forEach"),i=e("lodash/collection/map"),a=e("lodash/collection/reduce"),s=e("lodash/object/merge"),o=e("lodash/lang/isArray"),c={_getQueries:function(e,t){var n=[];return n.push({indexName:e,params:this._getHitsSearchParams(t)}),r(t.getRefinedDisjunctiveFacets(),function(r){n.push({indexName:e,params:this._getDisjunctiveFacetSearchParams(t,r)})},this),r(t.getRefinedHierarchicalFacets(),function(r){var i=t.getHierarchicalFacetByName(r),a=t.getHierarchicalRefinement(r);a.length>0&&a[0].split(t._getHierarchicalFacetSeparator(i)).length>1&&n.push({indexName:e,params:this._getDisjunctiveFacetSearchParams(t,r,!0)})},this),n},_getHitsSearchParams:function(e){var t=e.facets.concat(e.disjunctiveFacets).concat(this._getHitsHierarchicalFacetsAttributes(e)),n=this._getFacetFilters(e),r=this._getNumericFilters(e),i=this._getTagFilters(e),a={facets:t,tagFilters:i};return(e.distinct===!0||e.distinct===!1)&&(a.distinct=e.distinct),n.length>0&&(a.facetFilters=n),r.length>0&&(a.numericFilters=r),s(e.getQueryParams(),a)},_getDisjunctiveFacetSearchParams:function(e,t,n){var r=this._getFacetFilters(e,t,n),i=this._getNumericFilters(e,t),a=this._getTagFilters(e),o={hitsPerPage:1,page:0,attributesToRetrieve:[],attributesToHighlight:[],attributesToSnippet:[],tagFilters:a},c=e.getHierarchicalFacetByName(t);return c?o.facets=this._getDisjunctiveHierarchicalFacetAttribute(e,c,n):o.facets=t,(e.distinct===!0||e.distinct===!1)&&(o.distinct=e.distinct),i.length>0&&(o.numericFilters=i),r.length>0&&(o.facetFilters=r),s(e.getQueryParams(),o)},_getNumericFilters:function(e,t){if(e.numericFilters)return e.numericFilters;var n=[];return r(e.numericRefinements,function(e,a){r(e,function(e,s){t!==a&&r(e,function(e){if(o(e)){var t=i(e,function(e){return a+s+e});n.push(t)}else n.push(a+s+e)})})}),n},_getTagFilters:function(e){return e.tagFilters?e.tagFilters:e.tagRefinements.join(",")},_getFacetFilters:function(e,t,n){var i=[];return r(e.facetsRefinements,function(e,t){r(e,function(e){i.push(t+":"+e)})}),r(e.facetsExcludes,function(e,t){r(e,function(e){i.push(t+":-"+e)})}),r(e.disjunctiveFacetsRefinements,function(e,n){if(n!==t&&e&&0!==e.length){var a=[];r(e,function(e){a.push(n+":"+e)}),i.push(a)}}),r(e.hierarchicalFacetsRefinements,function(r,a){var s=r[0];if(void 0!==s){var o,c,u=e.getHierarchicalFacetByName(a),l=e._getHierarchicalFacetSeparator(u),f=e._getHierarchicalRootPath(u);if(t===a){if(-1===s.indexOf(l)||!f&&n===!0||f&&f.split(l).length===s.split(l).length)return;f?(c=f.split(l).length-1,s=f):(c=s.split(l).length-2,s=s.slice(0,s.lastIndexOf(l))),o=u.attributes[c]}else c=s.split(l).length-1,o=u.attributes[c];o&&i.push([o+":"+s])}}),i},_getHitsHierarchicalFacetsAttributes:function(e){var t=[];return a(e.hierarchicalFacets,function(t,n){var r=e.getHierarchicalRefinement(n.name)[0];if(!r)return t.push(n.attributes[0]),t;var i=r.split(e._getHierarchicalFacetSeparator(n)).length,a=n.attributes.slice(0,i+1);return t.concat(a)},t)},_getDisjunctiveHierarchicalFacetAttribute:function(e,t,n){var r=e._getHierarchicalFacetSeparator(t);if(n===!0){var i=e._getHierarchicalRootPath(t),a=0;return i&&(a=i.split(r).length),[t.attributes[a]]}var s=e.getHierarchicalRefinement(t.name)[0]||"",o=s.split(r).length-1;return t.attributes.slice(0,o+1)}};t.exports=c},{"lodash/collection/forEach":12,"lodash/collection/map":14,"lodash/collection/reduce":16,"lodash/lang/isArray":133,"lodash/object/merge":153}],179:[function(e,t,n){"use strict";function r(e){return g(e)?p(e,r):v(e)?f(e,r):d(e)?m(e):e}function i(e,t,n){if(null!==e&&(t=t.replace(e,""),n=n.replace(e,"")),-1!==b.indexOf(t)||-1!==b.indexOf(n)){if("q"===t)return-1;if("q"===n)return 1;var r=-1!==y.indexOf(t),i=-1!==y.indexOf(n);if(r&&!i)return 1;if(i&&!r)return-1}return t.localeCompare(n)}var a=e("./SearchParameters/shortener"),s=e("./SearchParameters"),o=e("qs"),c=e("lodash/function/bind"),u=e("lodash/collection/forEach"),l=e("lodash/object/pick"),f=e("lodash/collection/map"),h=e("lodash/object/mapKeys"),p=e("lodash/object/mapValues"),d=e("lodash/lang/isString"),g=e("lodash/lang/isPlainObject"),v=e("lodash/lang/isArray"),m=e("qs/lib/utils").encode,y=["dFR","fR","nR","hFR","tR"],b=a.ENCODED_PARAMETERS;n.getStateFromQueryString=function(e,t){var n=t&&t.prefix||"",r=o.parse(e),i=new RegExp("^"+n),c=h(r,function(e,t){if(n&&i.test(t)){var r=t.replace(i,"");return a.decode(r)}var s=a.decode(t);return s||t}),u=s._parseNumbers(c);return l(u,s.PARAMETERS)},n.getUnrecognizedParametersInQueryString=function(e,t){var n=t&&t.prefix,r={},i=o.parse(e);if(n){var s=new RegExp("^"+n);u(i,function(e,t){s.test(t)||(r[t]=e)})}else u(i,function(e,t){a.decode(t)||(r[t]=e)});return r},n.getQueryStringFromState=function(e,t){var n=t&&t.moreAttributes,s=t&&t.prefix||"",u=r(e),l=h(u,function(e,t){var n=a.encode(t);return s+n}),f=""===s?null:new RegExp("^"+s),p=c(i,null,f);if(n){var d=o.stringify(l,{encode:!1,sort:p}),g=o.stringify(n,{encode:!1});return d?d+"&"+g:g}return o.stringify(l,{encode:!1,sort:p})}},{"./SearchParameters":171,"./SearchParameters/shortener":172,"lodash/collection/forEach":12,"lodash/collection/map":14,"lodash/function/bind":20,"lodash/lang/isArray":133,"lodash/lang/isPlainObject":139,"lodash/lang/isString":140,"lodash/object/mapKeys":151,"lodash/object/mapValues":152,"lodash/object/pick":156,qs:162,"qs/lib/utils":165}],180:[function(e,t,n){"use strict";t.exports="2.8.0"},{}]},{},[1])(1)});
/*!
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */




var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.ib();
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (this.activeSub === undefined) {
          // Store parent template text in partials.stackText to perform substitutions in child templates correctly
          partials.stackText  = this.text;
        }
         template = createSpecializedPartial(template, partial.subs, partial.partials, partials.stackText || this.text);
       }
      this.partials[symbol].instance = template;
      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found != null) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val != null) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },

    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },
    // init the buffer
    ib: function () {
      this.buf = (useArrayBuffer) ? [] : '';
    },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val, checkVal;

    if (scope && typeof scope == 'object') {

      if (scope[key] != null) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, childText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.ib();

    for (key in subs) {
      partial.subs[key] = subs[key];
      partial.subsText[key] = childText;
    }

    for (key in partials) {
      partial.partials[key] = partials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);



(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})(typeof exports !== 'undefined' ? exports : Hogan);

        this.HoganTemplates || (this.HoganTemplates = {});
        this.HoganTemplates["guides/guide"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");t.b(t.v(t.f("objectID",c,p,0)));t.b("-guide masonry-block col-lg-4 col-md-4 col-sm-6 col-xs-12\">");t.b("\n" + i);t.b("  <div class=\"guide-block\">");t.b("\n" + i);t.b("    <div class=\"title-bar\">");t.b("\n" + i);if(t.s(t.d("guide_type.1",c,p,1),c,p,0,163,319,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"guide-type ");t.b(t.v(t.d("guide_type.0",c,p,0)));t.b("-guide\" style=\"z-index: 1;\">");t.b("\n" + i);t.b("          <a href=\"");t.b(t.v(t.d("guide_type.2",c,p,0)));t.b("\">");t.b(t.v(t.d("guide_type.1",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("      <div class=\"title\">");t.b("\n" + i);t.b("        <h5>");t.b("\n" + i);t.b("          <a href=\"/");t.b(t.v(t.f("slug",c,p,0)));t.b("?view=all\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("        </h5>");t.b("\n" + i);t.b("        <div class=\"tagline\">");t.b("\n" + i);t.b("          <a href=\"/");t.b(t.v(t.f("slug",c,p,0)));t.b("?view=all\">");t.b(t.v(t.f("tagline",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("				<div class=\"author\">by");t.b("\n" + i);t.b("          <a href=\"/users/");t.b(t.v(t.d("user.username",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <span class=\"name\">");t.b(t.v(t.d("user.name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("		<a href=\"/");t.b(t.v(t.f("slug",c,p,0)));t.b("?view=all\">");t.b("\n" + i);if(t.s(t.f("image_animated",c,p,1),c,p,0,780,1116,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <video class=\"img img-responsive guide-video\" preload=\"auto\" muted=\"muted\" loop=\"loop\" autoplay=\"autoplay\" poster=\"");t.b(t.v(t.f("image_thumb",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          <source src=\"");t.b(t.v(t.f("image_mp4",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          <source src=\"");t.b(t.v(t.f("image_webm",c,p,0)));t.b("\" type=\"video/webm; codecs=vp8,vorbis\">");t.b("\n" + i);t.b("          Your browser does not support the video tag.");t.b("\n" + i);t.b("        </video>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("image_animated",c,p,1),c,p,1,0,0,"")){t.b("        <img src=\"");t.b(t.v(t.f("image_standard",c,p,0)));t.b("\" class=\"img-responsive guide-image\" data-standard-image=\"");t.b(t.v(t.f("image_standard",c,p,0)));t.b("\" data-mobile-image=\"");t.b(t.v(t.f("image_mobile",c,p,0)));t.b("\">");t.b("\n" + i);};t.b("    </a>");t.b("\n" + i);t.b("    <div class=\"details\">");t.b("\n" + i);t.b("      <div class=\"description\">");t.b("\n" + i);t.b("        <a href=\"/");t.b(t.v(t.f("slug",c,p,0)));t.b("?view=all\">");t.b("\n" + i);t.b("          ");t.b(t.v(t.f("description",c,p,0)));t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "", Hogan, {});
        this.HoganTemplates || (this.HoganTemplates = {});
        this.HoganTemplates["search/categories"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"facets-wrapper\">");t.b("\n" + i);t.b("  <div class=\"categories\">");t.b("\n" + i);t.b("    <h5 class=\"is-facet-header gotham-light\">CATEGORIES</h5>");t.b("\n" + i);t.b("    <ul class=\"parents\">");t.b("\n" + i);if(t.s(t.f("categories",c,p,1),c,p,0,160,850,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li>");t.b("\n" + i);t.b("          <a class=\"category-refine\" data-type=\"category\" data-level=\"categories.lvl0\" data-value=\"");t.b(t.v(t.f("facet_name",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <input type=\"checkbox\" class=\"facet-checkbox\" ");t.b(t.v(t.f("checked",c,p,0)));t.b(">");t.b("\n" + i);t.b("            ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("          <ul class=\"children ");t.b(t.v(t.f("children_visibility",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("children",c,p,1),c,p,0,478,800,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("              <li class=\"");t.b(t.v(t.f("visibility",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                <a class=\"category-refine\" data-type=\"category\" data-level=\"categories.lvl1\" data-value=\"");t.b(t.v(t.f("facet_name",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                  <input type=\"checkbox\" class=\"facet-checkbox\" ");t.b(t.v(t.f("checked",c,p,0)));t.b(">");t.b("\n" + i);t.b("                  ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("              </li>");t.b("\n" + i);});c.pop();}t.b("          </ul>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "", Hogan, {});
        this.HoganTemplates || (this.HoganTemplates = {});
        this.HoganTemplates["search/index"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"search-content\">");t.b("\n" + i);t.b("  <div id=\"guide-content\" class=\"container\">");t.b("\n" + i);t.b("    <div id=\"search-results\" class=\"row\">");t.b("\n" + i);t.b("      <div id=\"left-column\" class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\">");t.b("\n" + i);t.b("        <div id=\"search-header\">");t.b("\n" + i);t.b("            <div class=\"row\">");t.b("\n" + i);t.b("                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-title gotham-light\">");t.b("\n" + i);t.b("                    Search results for <span class=\"search-query\">");t.b(t.v(t.f("query",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"row\">");t.b("\n" + i);t.b("                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-tabs\">");t.b("\n" + i);t.b("                    <a href=\"https://www.adafruit.com/?q=");t.b(t.v(t.f("query",c,p,0)));t.b("\">PRODUCTS</a> | LEARN | <a href=\"https://blog.adafruit.com/?s=");t.b(t.v(t.f("query",c,p,0)));t.b("\">BLOG</a> | <a href=\"https://forums.adafruit.com/search.php?keywords=");t.b(t.v(t.f("query",c,p,0)));t.b("\">FORUMS</a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div id=\"masonry-wrapper\" class=\"results row\">");t.b("\n" + i);t.b("          <div class=\"masonry-width\"></div>");t.b("\n" + i);if(t.s(t.f("hits",c,p,1),c,p,0,989,1024,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<guide0",c,p,"            "));});c.pop();}if(!t.s(t.f("hits",c,p,1),c,p,1,0,0,"")){t.b("            <div class=\"col-lg-9 col-sm-12\">");t.b("\n" + i);t.b("              No results found");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);};t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div id=\"right-column\" class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">");t.b(t.rp("<categories1",c,p,""));t.b("</div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b(t.rp("<pagination2",c,p,"  "));t.b("  <div class=\"clear\"></div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<guide0":{name:"guide", partials: {}, subs: {  }},"<categories1":{name:"categories", partials: {}, subs: {  }},"<pagination2":{name:"pagination", partials: {}, subs: {  }}}, subs: {  }}, "", Hogan, {});
        this.HoganTemplates || (this.HoganTemplates = {});
        this.HoganTemplates["search/pagination"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"pagination search-pagination\">");t.b("\n" + i);t.b("  <div class=\"container\">");t.b("\n" + i);t.b("    <div class=\"row\">");t.b("\n" + i);t.b("      <ul>");t.b("\n" + i);t.b("        <li ");if(!t.s(t.f("prev_page",c,p,1),c,p,1,0,0,"")){t.b("class=\"disabled\"");};t.b("><a ");if(t.s(t.f("prev_page",c,p,1),c,p,0,176,222,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("class=\"go-to-page\" data-page=\"");t.b(t.v(t.f("prev_page",c,p,0)));t.b("\"");});c.pop();}t.b(">PREVIOUS</a></li>");t.b("\n" + i);if(t.s(t.f("pages",c,p,1),c,p,0,273,469,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li class=\"");if(t.s(t.f("current",c,p,1),c,p,0,309,315,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("active");});c.pop();}t.b(" ");if(t.s(t.f("disabled",c,p,1),c,p,0,341,349,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("disabled");});c.pop();}t.b("\"><a ");if(!t.s(t.f("disabled",c,p,1),c,p,1,0,0,"")){t.b(" class=\"go-to-page\" data-page=\"");t.b(t.v(t.f("number",c,p,0)));t.b("\" ");};t.b(">");t.b(t.v(t.f("number",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("        <li>");t.b("\n" + i);t.b("        <li ");if(!t.s(t.f("next_page",c,p,1),c,p,1,0,0,"")){t.b("class=\"disabled\"");};t.b("><a ");if(t.s(t.f("next_page",c,p,1),c,p,0,567,613,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("class=\"go-to-page\" data-page=\"");t.b(t.v(t.f("next_page",c,p,0)));t.b("\"");});c.pop();}t.b(">NEXT</a></li>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);t.b("      </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "", Hogan, {});
;(function( $, window, document, undefined ){

  var HoverMenu = function( elem, options ){
    //only include elements that contain flyouts
    this.elem = $.grep(elem, function(el) {
      return $(el).data('load') ? true : false;
    });

    this.$elem = $(this.elem);
    this.options = options;

    this.metadata = this.$elem.data( 'plugin-options' );

    this._init = false;
    this.menu_open = false;
    this.menu_timeout = null;
    this.cache_timeout = 30 * 60 * 1000; // 30 mins

    if (this.$elem.length === 0) {
      //no elements to bind to...don't setup menu.
      this._init = true;
    }
  };

  // the plugin prototype
  HoverMenu.prototype = {
    defaults: {
      message: 'Menu Enabled'
    },

    templates: {},

    init: function() {
      if (this._init) {
        return;
      }

      this._init = true;

      // Introduce defaults that can be extended either
      // globally or using an object literal.
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.enable_menu();

      return this;
    },

    enable_menu: function() {
      var that = this;
      var $hover_menu = $(".hover-menu");

      // preload the menu flyouts
      this.$elem.each(function() {
        that.load_menu($(this));
      });

      //use touch events to open and close the hover menu on tablets.
      this.$elem.children('a').bind('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (that.menu_open) {
          that.close_menu.call($(this).parents('li'), that);
        } else {
          that.open_menu.call($(this).parents('li'), that);
        }
      });

      this.$elem.children('a').bind('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });

      $(document).on('touchend', function(event) {
        if (that.menu_open) {

          if (!$hover_menu.is(event.target) && $hover_menu.has(event.target).length === 0) {
              that.close_menu.call($('#navigation ul > li.active'), that);
          }
        }
      });

      this.$elem.hoverIntent({
        interval: 50,
        sensitivity: 5,
        over: function () {
          that.open_menu.call(this, that);
        },

        out: function() {
          that.close_menu.call(this, that);
        }
      });
    },

    load_menu: function($el) {

      var promise = $.Deferred(),
          path = $el.data('load'),
          cached;

      // the element should have a data-load property set
      if(! path)
        return promise.reject();

      // return sessionStorage cache if present
      if(sessionStorage && (cached = sessionStorage.getItem('cache-' + path))) {

        try {

          cached = JSON.parse(cached);

          if(cached.timestamp && Date.now() < cached.timestamp) {
            return promise.resolve(cached.data);
          }

        } catch(e) {}

      }

      // make a request for the flyout if needed
      $.get(path).then(function(data) {

        // cache the flyout in session storage
        if(sessionStorage) {
          sessionStorage.setItem('cache-' + path, JSON.stringify({
            timestamp: Date.now() + this.cache_timeout,
            data: data
          }));
        }

        promise.resolve(data);

      }.bind(this));

      return promise;

    },

    render_menu: function($el) {

      var promise = $.Deferred();

      if($el.data('rendered'))
        return promise.resolve();

      this.load_menu($el).then(function(data) {
        $el.append(data);
        $el.data('rendered', true);
        promise.resolve();
      });

      return promise;

    },

    open_menu: function(that) {

      var el = this,
          $el = $(el);

      window.clearTimeout(that.menu_timeout);

      $('#navigation ul > li').removeClass('active');
      $el.addClass('active');

      that.render_menu($el).then(function() {

        var $flyout = $('.flyout', el);

        if (that.menu_open) {
          $('.flyout.active').stop(true, true).hide().removeClass('active');
          $flyout.show();
          $flyout.addClass('active');
        } else {
          that.menu_open = true;
          $flyout.addClass('active');
          $flyout.slideDown(50, function() {
            $el.stop(true, true);
          });
        }

      });

    },

    close_menu: function(that) {
      var hover_element = this;

      window.clearTimeout(that.menu_timeout);
      that.menu_timeout = setTimeout(function() {
        $('.flyout', hover_element).slideUp(50, function() {
          $('#navigation ul > li').removeClass('active');
          $('.flyout.active').removeClass('active');
          that.menu_open = false;
          $(hover_element).stop(true,true);
        });
      }, 600);
    }
  };

  HoverMenu.defaults = HoverMenu.prototype.defaults;

  $.fn.hover_menu = function(options) {
    return new HoverMenu(this, options).init();
  };

})( jQuery, window , document );
;(function( $, window, document, undefined ){

  var transform_prop = window.Modernizr.prefixed('transform'),
    transition_prop = window.Modernizr.prefixed('transition'),
    transition_end = (function() {
      var props = {
          'WebkitTransition' : 'webkitTransitionEnd',
          'MozTransition'    : 'transitionend',
          'OTransition'      : 'oTransitionEnd otransitionend',
          'msTransition'     : 'MSTransitionEnd',
          'transition'       : 'transitionend'
      };
      return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
    })();

  var MobileMenu = function( elem, options ){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;

      this.metadata = this.$elem.data( 'plugin-options' );

      this._init = false;
      this.menu_open = false;
    };

  // the plugin prototype
  MobileMenu.prototype = {
    defaults: {
      message: 'Mobile Menu Enabled'
    },



    init: function() {
      if (this._init) {
        return;
      }
      this._init = true;
      // Introduce defaults that can be extended either
      // globally or using an object literal.
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.enable_menu();

      return this;
    },

    enable_menu: function() {
      var that = this;
      $(document.documentElement).addClass('js-ready');

      //opening the menu
      $(document).on('touchstart click', '#small-header-menu-button', $.proxy(this.toggle_menu, this));
      //closing the menu
      $(document).on('touchstart click', '#small-nav-close-button', $.proxy(this.toggle_menu, this));
      
      //touching outside the nav
      $(document).on('touchstart click', function(e) {
        var has_parent = $('#small-header-nav').has(e.target).length > 0 || $(e.target).is('#small-header-nav');
        if (that.menu_open && !has_parent) {
          e.preventDefault();
          that.close_menu.call(that);
        }
      });
    },

    toggle_menu: function(e) {
      if (e) {
        e.preventDefault();
      }

      if (this.menu_open) {
        this.close_menu.call(this);
      } else {
        this.open_menu.call(this);
        e.stopPropagation();
      }
    },

    open_menu: function(e) {
      $(document.documentElement).addClass('js-nav');
      this.menu_open = true;
    },

    close_menu: function() {
      var that = this;
      function close_action(e) {
        if (e && $(e.target).is('#inner-wrapper')) {
          $(document).off(transition_end, '#inner-wrapper', close_action);
        }

        that.menu_open = false;
      }

      var duration = (transition_end && transition_prop) ? parseFloat($('#inner-wrapper').css(transition_prop + 'Duration')) : 0;

      if (duration > 0) {
        $(document).on(transition_end, '#inner-wrapper', close_action);
      } else {
        close_action(null);
      }

      $(document.documentElement).removeClass('js-nav');
    }

  };


  MobileMenu.defaults = MobileMenu.prototype.defaults;

  $.fn.mobile_menu = function(options) {
    return new MobileMenu(this, options).init();
  };

})( jQuery, window , document );
;(function( $, window, document, undefined ){

  var adafruit_domain = window.location.hostname.split(".").slice(-(2)).join(".");

  var Search = function( elem, options ){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;


      this.metadata = this.$elem.data( 'plugin-options' );

      this._init = false;
      this.mobile = false;
      this.raw_query = "";

      this.app_id = this.$elem.data('app-id');
      this.api_key = this.$elem.data('app-key');
      this.app_index = this.$elem.data('app-index');
      this.app_uri = this.$elem.data('app-uri');
      this.page = this.$elem.data('page') || 0;
      this.tracked_parameters = [];
      this.$container;
      this.categories = null;
      this.categories_template = null;
      this.cache_timeout = 10 * 60 * 1000; // 10 mins

      this.original_page_url = window.location.href;
      this.original_is_search = this.original_page_url.indexOf('/search?q=') !== -1;

      this.client = algoliasearch(this.app_id, this.api_key);
      this.helper = algoliasearchHelper(this.client, this.app_index, {
        hitsPerPage: 20,
        distinct: true,
        maxValuesPerFacet: 2000,
        disjunctiveFacets: ['categories.lvl0', 'categories.lvl1']
      });
    };

  // the plugin prototype
  Search.prototype = {
    defaults: {
      message: 'Search Enabled'
    },

    init: function() {
      if (this._init) {
        return;
      }

      this._init = true;
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      if (this.config.mobile){
        this.mobile = this.config.mobile;
      }

      this._build_category_tree(this.$elem);
      this._enable_search(this.$elem);
      this._watch_results(this.$elem);
      this._watch_pagination(this.$elem);
      this._watch_focus(this.$elem);
      this._log_query(this.$elem);

      this._init_page_state(this.$elem);

      return this;
    },

    _set_styles: function($elem) {
      //prevents flashing of the footer when searching
      var window_height = $(window).height();
      var header_height = $('#adafruit-header').height();
      $elem.css('min-height', window_height + "px");
    },

    _render_category_tree: function(categories) {
      this.categories_template = HoganTemplates['search/categories'].render({categories: categories});
    },

    _build_category_tree: function($elem) {
      var that = this;

      $(document).on('click', '.category-refine', $.proxy(this._category_refine, this));

      //cache in session storage
      if(sessionStorage && (cached = sessionStorage.getItem('cache-learn-categories'))) {

        try {
          cached = JSON.parse(cached);

          if(cached.timestamp && Date.now() < cached.timestamp) {
            that.categories = cached.data;
            that._render_category_tree(cached.data);
            return;
          }
        } catch(e) {}
      }

      $.getJSON('/categories.json', function(data){
        if(sessionStorage) {
          sessionStorage.setItem('cache-learn-categories', JSON.stringify({
            timestamp: Date.now() + this.cache_timeout,
            data: data
          }));
        }

        that.categories = data;
        that._render_category_tree(data);
      }.bind(this));
    },

    _set_categories: function(results) {
      var that = this;
      if (!results && !results.hits) {
        return;
      }

      var categories = [];
      //make a copy of the categories
      var all_categories = this.categories.slice();

      //build out categories lvl0 first.
      //these are the currently selected categories
      var selected_lvl0 = this.helper.getState().getDisjunctiveRefinements("categories.lvl0");
      var lvl0 = results.disjunctiveFacets[0];
      if (lvl0 && lvl0.data) {

        for(var key in lvl0.data) {
          var cats = $.grep(all_categories, function(c){ return c.facet_name === key; });

          if (cats.length) {
            if ($.inArray(cats[0].facet_name, selected_lvl0) !== -1) {
              cats[0]["checked"] = "checked";
              cats[0]["children_visibility"] = "show";
            } else {
              cats[0]["checked"] = "";
              cats[0]["children_visibility"] = "hide";
            }
            categories.push(cats[0]);
          }
        }
      }

      //now build out categories lvl1 so it's faster to search through lvl0 categories array.
      var lvl1 = results.disjunctiveFacets[1];
      if (lvl1 && lvl1.data) {
        //get currently selected child categories
        var selected_lvl1 = this.helper.getState().getDisjunctiveRefinements("categories.lvl1");

        //loop through all child categories that have results
        for(var key in lvl1.data) {
          //find the parent category to modify the data of the child
          $.each(categories, function(index, category) {
            if (!category.children) {
              return;
            }

            var cats = $.grep(category.children, function(c){ return c.facet_name === key; });
            if (cats && cats.length) {
              if ($.inArray(cats[0].facet_name, selected_lvl1) !== -1) {
                cats[0]["checked"] = "checked";
              } else {
                cats[0]["checked"] = "";
              }
              //show this child category either way
              cats[0]["visibility"] = "show";

              //break from the loop, we found our category
              return false;
            }
          });
        }
      }

      if (categories.length) {
        that._render_category_tree(categories);
      } else {
        that._render_category_tree(that.categories);
      }
    },

    _category_refine: function(event) {
      var that = this;
      var $category_link = $(event.currentTarget);
      var $checkbox = $('input', $category_link);
      var $children = $category_link.siblings('.children');

      if (!$(event.target).is('input')) {
        //toggle checkbox if link is clicked
        $checkbox.prop("checked", !$checkbox.prop("checked"));
      }

      var selected = $checkbox.prop('checked');
      if (selected) {
        $category_link.addClass('category-selected');
        this.helper.addDisjunctiveFacetRefinement($category_link.data('level'), $category_link.data('value'));
      } else {
        this.helper.removeDisjunctiveRefine($category_link.data('level'), $category_link.data('value'));

        $('a', $children).each(function() {
          that.helper.removeDisjunctiveRefine($(this).data('level'), $(this).data('value'));
        });
      }



      this.helper.setQuery(unescape(this.helper.getState().query));
      this.helper.search();
    },

    _log_query: function($elem) {
      var that = this;
      $elem.keyup(function() {
        that.raw_query = $(this).val();
      });
    },

    _watch_focus: function($elem) {
      var $wrapper = $elem.parents('#search-wrapper');
      var $magnifier = $('#search-wrapper i');
      var enable_listener = function() {
        $magnifier.one('click', function() {
          $wrapper.addClass('focused');
          $elem.trigger('focus');
        });
      };

      enable_listener();
      $elem.blur(function(e) {
        setTimeout( function() {
          var $wrapper = $elem.parents('#search-wrapper');
          $wrapper.removeClass('focused');
          setTimeout(enable_listener, 200);
        }, 200);
      });
    },

    _watch_results: function($elem) {
      var that = this;
      this.helper.on('result', function(content) {
        that._render_results(content);
        that._set_page_state();
      });
    },

    _render_results: function(content) {
      this._set_categories(content);
      var $container = $('#main-content');
      var guide = HoganTemplates['guides/guide'];
      var pagination = this._render_pagination(content);
      var search = HoganTemplates['search/index'].render(content, {guide: guide, pagination: pagination, categories: this.categories_template, query: this.raw_query});

      $('#guide-wrapper, #page-wrapper', $container).hide();

      if ($('#search-content').length) {
        $('#search-content').html(search);
      } else {
        $container.prepend(search);
      }

      this._set_styles($('#search-results'));
      this._init_masonry();
    },

    _replace_page_state: function() {
      var $container = $('#main-content');

      $('#search-content').remove();

      $('#guide-wrapper, #page-wrapper', $container).show();

      window.history.replaceState(null, '', this.original_page_url);
    },

    _init_masonry: function($elem) {
      var self = this;
      this.$container = $('#masonry-wrapper');
      this.$container.masonry({
      itemSelector : '.masonry-block',
        gutter: 0,
        columnWidth: ".masonry-width",
        isAnimated: false,
        initLayout: false
      }).on('layoutComplete', function() {
        set_last_blocks();
        return true;
      });

      this.$container.imagesLoaded().progress(function(instance, image) {
        $(image.img).closest('.guide-block').css('visibility', 'visible');
        self.$container.masonry('layout');
      }).always(function(instance) {
        $('.guide-block').css('visibility', 'visible');
      });
    },

    _init_page_state: function($elem) {
      var URLString = window.location.search.slice(1);
      var params = algoliasearchHelper.AlgoliaSearchHelper.getConfigurationFromQueryString(URLString);
      if (params.query) $elem.val(params.query);
      this.helper.overrideStateWithoutTriggeringChangeEvent(this.helper.state.setQueryParameters(params));

      if(params.query){
        this.helper.search();
      }
    },

    _set_page_state: function() {
      if (this.helper.state.query.trim() !== '')  this.tracked_parameters.push('query');
      if (this.helper.state.page !== 0)           this.tracked_parameters.push('page');

      var URLParams = window.location.search.slice(1);

      var nonAlgoliaURLParams = algoliasearchHelper.AlgoliaSearchHelper.getForeignConfigurationInQueryString(URLParams);
      var nonAlgoliaURLHash = window.location.hash;

      var helperParams = this.helper.getStateAsQueryString({filters: this.tracked_parameters, moreAttributes: nonAlgoliaURLParams});

      if (URLParams === helperParams) return;

      window.history.replaceState(null, '', this.app_uri + "/search?" + helperParams + nonAlgoliaURLHash  );
    },

    _render_pagination: function(content) {
      var pages = [];
      if (content.page > 3) {
        pages.push({current: false, number: 1});
        pages.push({current: false, number: '...', disabled: true});
      }
      for (var p = content.page - 3; p < content.page + 3; ++p) {
        if (p < 0 || p >= content.nbPages) continue;
        pages.push({current: content.page === p, number: p + 1});
      }
      if (content.page + 3 < content.nbPages) {
        pages.push({current: false, number: '...', disabled: true});
        pages.push({current: false, number: content.nbPages});
      }
      var pagination = {
        pages: pages,
        prev_page: content.page > 0 ? content.page : false,
        next_page: content.page + 1 < content.nbPages ? content.page + 2 : false
      };

      return HoganTemplates['search/pagination'].render(pagination);
    },

    _watch_pagination: function($elem) {
      var that = this;

      $(document).on('click', '.search-pagination a', function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, '500', 'swing');
        that.helper.setCurrentPage(+$(this).data('page') - 1).search();
      });
    },

    _enable_search: function($elem) {
      var that = this;

      //prevent search form submit if js is enabled...
      $('#search-wrapper form').on("submit" ,function(event){
        event.preventDefault();
      });

      $elem.on('keyup', function() {
        var query = $(this).val();
        if (query.length > 0 || that.original_is_search) {
          that.helper.setQuery(query).search();
        } else {
          that._replace_page_state();
        }

      });
    }

  };

  Search.defaults = Search.prototype.defaults;

  $.fn.adafruit_search = function(options) {
    return new Search(this, options).init();
  };

})( jQuery, window , document );
;(function( $, window, document, undefined ){

  var Messaging = function( elem, options ){
    this.elem = $.grep(elem, function(el) {
      return $(el).data('load') ? true : false;
    });

    this.$elem = $(this.elem);
    this.options = options;

    this.metadata = this.$elem.data( 'plugin-options' );

    this._init = false;
    this.cache_timeout = 30 * 60 * 1000; // 30 mins

    if (this.$elem.length === 0) {
      //no elements to bind to...don't setup messaging.
      this._init = true;
    }
  };

  // the plugin prototype
  Messaging.prototype = {
    defaults: {
      message: 'Messaging Enabled'
    },

    templates: {
      message:   "{{#messages}}" +
                   "<div id='messaging-{{type}}' class='messaging-container'>" +
                     "<div class='msg-container container'>" +
                       "<div class='message' data-message-id='{{msgid}}'>{{{message}}}</div>" +
                       "<a class='message-close' href='#'><i class='fa fa-times'></i></a>" +
                     "</div>" +
                   "</div>" +
                   "<div class='clear'</div>" +
                 "{{/messages}}"
    },

    init: function() {
      if (this._init) {
        return;
      }

      this._init = true;

      // Introduce defaults that can be extended either
      // globally or using an object literal.
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.render_message(this.$elem);

      return this;
    },

    load_messaging: function($el) {

      var promise = $.Deferred(),
          path = $el.data('load'),
          cached;

      // the element should have a data-load property set
      if(! path)
        return promise.reject();

      // return sessionStorage cache if present
      if(sessionStorage && (cached = sessionStorage.getItem('cache-' + path))) {

        try {

          cached = JSON.parse(cached);

          if(cached.timestamp && Date.now() < cached.timestamp) {
            return promise.resolve(cached.data);
          }

        } catch(e) {}

      }

      // make a request for the message if needed
      $.getJSON(path).then(function(data) {

        // cache the message in session storage
        if(sessionStorage) {
          sessionStorage.setItem('cache-' + path, JSON.stringify({
            timestamp: Date.now() + this.cache_timeout,
            data: data
          }));
        }

        promise.resolve(data);

      }.bind(this));

      return promise;

    },

    render_message: function($el) {

      var promise = $.Deferred();
      var message_template = Hogan.compile(this.templates.message);

      this.load_messaging($el).then(function(data) {
        
        $el.html(message_template.render({"messages": data}));

        promise.resolve();
      });

      return promise;

    }
  };

  Messaging.defaults = Messaging.prototype.defaults;

  $.fn.adafruit_messaging = function(options) {
    return new Messaging(this, options).init();
  };

})( jQuery, window , document );
$(function() {
  if ($('.sidebar-right-content').length > 0) {
    $('.sidebar-publish-buttons a').mouseenter(function() {
      var $link = $(this);
      var type = $link.data('model').toUpperCase();
      $link.removeClass('red green yellow black');

      if ($link.data('role') == 'author') {
        if ($link.hasClass('published') || $link.hasClass('internal_published')) {
          $link.text('UNPUBLISH ' + type);
          $link.addClass('red');
        } else if ($link.hasClass('draft')) {
          $link.text('REQUEST ' + type + ' MODERATION');
          $link.addClass('yellow');
        }
      } else {
        if ($link.hasClass('published') || $link.hasClass('internal_published')) {
          $link.text('UNPUBLISH ' + type);
          $link.addClass('red');
        } else if ($link.hasClass('draft') || $link.hasClass('internal_draft')) {
          $link.text('PUBLISH ' + type);
          $link.addClass('green');
        } else if ($link.hasClass('inactive')) {
          $link.text('PUBLISH ' + type);
          $link.addClass('green');
        }
      }
    }).mouseleave(function() {
      var $link = $(this);
      var type = $link.data('model').toUpperCase();
      $link.removeClass('red green yellow');
      if ($link.data('role') == 'author') {
        if ($link.hasClass('draft')) {
          $link.text(type + ': NEEDS MODERATION');
          $link.addClass('yellow');
        }
      } else {
        if ($link.hasClass('published') || $link.hasClass('internal_published')) {
          $link.text(type + ': PUBLISHED');
          $link.addClass('green');
        } else if ($link.hasClass('draft') || $link.hasClass('internal_draft')) {
          $link.text(type + ': DRAFT');
          $link.addClass('red');
        } else if ($link.hasClass('inactive')) {
          $link.text(type + ': INACTIVE');
          $link.addClass('black');
        }
      }
    });
  }
});
var insta_next_url = null;

if(window.devicePixelRatio >= 1.2){
    var elems = document.getElementsByTagName('*');
    for(var i=0;i < elems.length;i++){
        var attr = elems[i].getAttribute('data-2x');
        if(attr && elems[i].tagName == 'IMG'){
            elems[i].src = attr;
        } else if(attr){
            elems[i].style.cssText += 'background-image: url('+attr+')';
        }
    }
}

//imagesLoaded can't handle video tags. If a video loads after
//all images have been loaded, we won't have a proper masonry layout so we
//should run layout after the videos start playing.
$('.guide-video').on('playing', function() {
  $(this).closest('.guide-block').css('visibility', 'visible');
  $('#masonry-wrapper').masonry('layout');
  $('.guide-video').off('playing');
});

//window.addEventListener('load', function (event) { prettyPrint(); }, false);

$(function() {

  prettyPrint();
  $('#navigation nav > ul > li').hover_menu();
  $('#small-header-nav').mobile_menu();
  $('input#search').adafruit_search();
  $('[data-toggle="tooltip"]').tooltip();
  $('#messaging-wrapper').adafruit_messaging();

  $( '.load-gravatar' ).async_gravatars({
    ssl: true
  });

  $('.messaging-container .message-close').click(function(event) {
    var separate = window.location.hostname.split('.');
    separate.shift();
    var domain = "." + separate.join('.');
    var id = $('.messaging-container .message').data('message-id');

    $('.messaging-container').hide();

    document.cookie = "seen_msg_" + id + "=1; path=/;domain=" + domain + " ;";
  });

  $('#header-cart').shoppingCartTag({
    cartUpdated : function(cart_data){
      var text = "";
      if (cart_data['cart_totals']['items'] === 1) {
        text = cart_data['cart_totals']['items'] + " Item <i class='fa fa-shopping-cart'>";
      } else {
        text = cart_data['cart_totals']['items'] + " Items <i class='fa fa-shopping-cart'>";
      }

      this.html(text);
    }
  });

  $('.small-header-cart').shoppingCartTag({
    cartUpdated : function(cart_data){
      this.html('<span class="small-cart-count">' + cart_data['cart_totals']['items'] + '</span> <i class="fa fa-shopping-cart"></i>');
    }
  });

  $('.guide-categories .category, #categories-content .category').click(function(event) {
    if ($(this).data("remote") === true) {
      return true;
    }

    //clicking on a category tag, but not for child categories.
    if (!$(this).hasClass('child-category')) {
      event.preventDefault();
      window.location = $('a:last-child', this).attr('href');
    }

  });

  $('.guide-block').hoverIntent({
        interval: 50,
        sensitivity: 5,
        timeout: 300,
        over: function () {
          $('.category', this).css('z-index', 1);
          $('.guide-type', this).not('.headline').css('z-index', -1);
        },

        out: function() {
          $('.category', this).css('z-index', -10);
          $('.guide-type', this).css('z-index', 1);
        }
      });


  var $container = $('#masonry-wrapper');
  if ($container.length > 0) {
    $container.masonry({
      itemSelector : '.masonry-block',
      gutter: 0,
      columnWidth: ".masonry-width",
      isAnimated: false,
      initLayout: false
    }).on('layoutComplete', function() {
      $container.css('visibility', 'visible');
      set_last_blocks();
      return true;
    });

    $container.imagesLoaded().progress(function(instance, image) {
      $(image.img).closest('.guide-block').css('visibility', 'visible');
      $container.masonry('layout');
    }).always(function(instance) {
      $('.guide-block').css('visibility', 'visible');
    });


  }

  var search_term = "";
  if ($(".custom-search").length > 0) {
    $( ".custom-search" ).autocomplete({
        messages: {
          noResults: "",
          results: function() {}
        },
        source: function(request, callback) {
          search_term = request.term;
          $.getJSON("/search", { q: request.term }, function(data) {

            for(var i=data.length-1; i>=0; i--) {
              if (!data[i].title) {
                data.splice(i, 1);
              }
            }
            callback(data);
          });
        },
        minLength: 2,
        select: function( event, ui ) {
          if (ui.item.guide_details) {
            window.location.href = "/" +ui.item.guide_details.slug + "/" + ui.item.slug;
          } else {
            window.location.href = "/" + ui.item.slug;
          }
        },
        focus: function(event, ui) {
          event.preventDefault();
          $('.ui-menu-item').removeClass('selected');
          if (!ui.item) {
            //last search result
            $('.search-all-results').addClass('selected');
            return;
          }
          $('.' + ui.item.className).addClass('selected');


        },
        open: function(event, ui) {
          $("ul.ui-autocomplete.ui-menu").append("<li class='ui-menu-item search-all-results'><a href='/search?q=" + search_term + "'>All Search Results</a></li>");
        }
      }).data( "autocomplete" )._renderItem = function( ul, item ) {
        if (!item.title) {
          return "";
        }

        if (!item.guide_details) {
          return $( "<li class="+ item.className + "></li>" )
            .data( "item.autocomplete", item )
            .append("<img src='" + item.img_src + "'>")
            .append( "<a href='/" + item.slug + "'>Guide: " + item.title + "</a>" )
            .appendTo( ul );
        }
        return $( "<li></li>" )
          .data( "item.autocomplete", item )
          .append("<img src='" + item.guide_details.img_src + "'>")
          .append( "<a href='/" + item.guide_details.slug + "/" + item.slug + "'>Page: " + item.title + " | " + item.guide_details.title +  "</a>" )
          .appendTo( ul );
      };
    }
  });

function setPageHeight() {
  var $sidebar_right = $('.sidebar-right-content, .guide-sidebar');
  var $content = $('.content-wrapper, .guide-content');

  $sidebar_right.imagesLoaded(function(){
    if ($sidebar_right.height() > $content.height()) {
      $content.css('min-height', $sidebar_right.height() + 38 + 'px');
    }
  });
}

function set_last_blocks() {
  var cols = {};
  var top, left;
  $('#masonry-wrapper > *').each(function(){
    if ($('.headline', this).length) {
      //skip headlines
      return true;
    }

    $('.guide-block', this).removeClass('last');
    top = parseInt($(this).css('top').replace('px', ''));
    left = $(this).css('left');
    if(typeof cols[left] == 'undefined') {
        cols[left] = {top: top, object: $(this)};
    } else if(top > cols[left].top) {
        cols[left] = {top: top, object: $(this)};
    }
  });
  $.each(cols, function( index, item ) {
      $('.guide-block', item.object).addClass('last');
  });
}
;
$(function() {
  function check_image_swap() {
    if ((window_size < 768) && !images_swapped) {
      //if the window is less than 768, swap the image src for mobile
      images_swapped = true;
      $('.guide-image').each(function() {
        $(this).attr('src', $(this).data('mobile-image'));
      });
    } else if ((window_size >= 768) && images_swapped) {
      //if the window is greater than 768, swap the image src for standard, but only if already swapped
      images_swapped = false;
      $(this).attr('src', $(this).data('standard-image'));
    }
  }

  if ($('.guide-image').length > 0) {
    var window_size = $(window).width();
    var images_swapped = false;

    $(window).resize(function() {
      window_size = $(window).width();
      check_image_swap(window_size);
    });

    check_image_swap();

  }
});
$(function() {
  var ua = navigator.userAgent,
    action = (ua.match(/iPad/i)) ? "touchstart" : "click";

  //get domain, remove subdomain
  var separate = window.location.hostname.split('.');
  separate.shift();
  var DOMAIN = separate.join('.');
  if (DOMAIN.indexOf('.com') !== -1) {
    DOMAIN = 'https://www.' + DOMAIN;
  } else {
    DOMAIN = 'http://www.' + DOMAIN;
  }

  if ($('body.admin').length === 0) {
    handlePageLoad();
    $(".build-video, .build-pxt").fitVids({ customSelector: "iframe[src^='http://blip.tv'], iframe[src^='https://adafruit.pxt.io']"});
  }

  if ($('body.pages .build-image').length) {
    $('.build-image').hover(function() {
      $('.image-expand', this).show();
    }, function() {
      $('.image-expand', this).hide();
    });
  }

  if ($('.spoiler').length > 0) {
    $(document).on('click touchstart', '.spoiler', function(event) {
      $(this).toggleClass('tagged');
    });
  }


  //viewing single page view
  if (window.location.href.indexOf('view=all') >= 0) {
    $('body').scrollspy({ target: '.sidebar-left' });
  }

  if ($('.sidebar-left-content').length > 0) {
    $('.related-guides-wrapper, .sidebar-left-content').imagesLoaded(function(){
      var affix_timer;
      var affixed = false;
      var $sidebar = $('.sidebar-left-content');
      var $content = $('.content');

      var affixFn = function() {
        $(window).off('.affix');
        $sidebar.removeClass("affix affix-top affix-bottom").removeData("bs.affix");

        //sidebar needs to be fully visible in the window.
        if (($sidebar.outerHeight(true) < $(window).height()) && ($(window).width() > 768)) {
          //sidebar has to be taller than the actual content.
          if (($sidebar.outerHeight(true) < $content.outerHeight(true))) {
            var messageHeight = $('#messaging-alert').is(":visible") ? $('#messaging-alert').outerHeight(true) : 0;
            //affix the sidebar.
            $sidebar.affix({
              offset: {
                top: function () {
                  return (this.top = ($('#categories-block').outerHeight(true) + $('#adafruit-header').outerHeight(true) + messageHeight));
                },
                bottom: function () {
                  return (this.bottom = ($('#adafruit-footer').outerHeight(true) + $('.related-guides-wrapper').outerHeight(true) + 60));
                }
              }
            });
          }
        }
      };

      affixFn();
      $(window).resize(function() {
        clearTimeout(affix_timer);
        affix_timer = setTimeout(affixFn, 100);
      });
    });

    $('[data-clampedwidth]').each(function () {
        var elem = $(this);
        var width_timer;
        var parentPanel = elem.data('clampedwidth');
        var resizeFn = function () {
          var sideBarNavWidth = $(parentPanel).width() - parseInt(elem.css('paddingLeft')) - parseInt(elem.css('paddingRight')) - parseInt(elem.css('marginLeft')) - parseInt(elem.css('marginRight')) - parseInt(elem.css('borderLeftWidth')) - parseInt(elem.css('borderRightWidth'));
          elem.css('width', sideBarNavWidth);
        };

        resizeFn();
        $(window).resize(function() {
          clearTimeout(width_timer);
          width_timer = setTimeout(resizeFn, 100);
        });
    });
  }

  function setupProductLinks() {
    //setup all the products for the add to cart button.
    var $add_all_link = $('.add-all-to-cart');
    var pids = {}, notify_pids = [];
    $('.product-buy').not('.notify').each(function() {
      var $link = $(this);
      var pid = $link.data('pid');
      var add = {};
      add[pid] = 1;
      $.extend(pids, add);

      if (window.rails_env === "production" && (typeof ga !== "undefined")) {
        ga('ec:addImpression', {
          'id': pid,
          'name': $link.data('name')
        });
      }
    });

    if (window.rails_env === "production" && (typeof ga !== "undefined")) {
      ga('send', 'event', 'Learn', "ProductImpressions");
    }

    $('.notify.product-buy').each(function() {
      var pid = $(this).data('pid');
      notify_pids.push(pid);
    });

    $add_all_link.attr('data-multi-add', JSON.stringify(pids));

    $add_all_link.addToCart({
      onAdded : function(cart_data){
        this.html('ADDED!');
        $('.product-buy').not('.notify').html("ADDED!");

        if (notify_pids.length > 0) {
          handle_notify_action(notify_pids);
        }
      }
    });

    //setup single link add to cart clicks
    $('.product-buy').not('.notify').addToCart({
      onAdded : function(cart_data){
        this.html('ADDED!');
        $.post("/products/completed");
      }
    });

    function update_cart_count() {
      var text = "", cart_count = $.cookie('cart_count');

      if (cart_count === 1) {
        text = cart_count + " Item <i class='fa fa-shopping-cart'>";
      } else {
        text = cart_count + " Items <i class='fa fa-shopping-cart'>";
      }

      $('#header-cart').html(text);
      $('.small-cart-count').text(cart_count);
    }

    if ($.cookie('cart_count')) {
      update_cart_count();

      $.ajax({
          url: $.wildCart.wildCartServer,
          accept: 'application/json',
          crossDomain: true,
          cache: false,
          xhrFields: {
             withCredentials: true
          },
          type: 'POST',
          error: function(jqXHR, textStatus, errorThrown){
              console.log(' :( ' +  textStatus.toUpperCase()  + ' -- for ajaxAdd() : jqXHR.statusText = ' + jqXHR.statusText + ', textStatus = ' + textStatus);
          },
          success: function(data, textStatus, jqXHR){
            if (data && data["cart"]) {
              $.each( data["cart"], function(key, value){
                $('#' + key + '-product').html("ADDED!");
              });
            }
            update_cart_count();
          }
      });
    }
  }

	$(document).on("ajax:success", '.feedback-link', function(event, data, status, xhr) {
      var response = xhr.responseText;
      $('#feedback-modal').remove();
      $(response).appendTo('body');

      $('#feedback-modal').modal('show');
  });

  $(document).on('click', '#save-feedback', function(event) {
    $new_feedback_form = $("#new-feedback");
    var $feedback_content = $('#feedback_content');

    if ($feedback_content.val().length < 5) {
      $('.feedback-info').html("Please enter a bit of feedback before submitting.");
      $('.feedback-info').css('font-weight', 'bold');
      return;
    }
    event.preventDefault();
    $.ajax({
      url: $new_feedback_form.attr("action"),
      dataType: 'html',
      type: "POST",
      data: $new_feedback_form.serialize(),
      beforeSend: function ( xhr ) {
          $('#save-feedback').text('Working...').addClass("disabled");
        }
      }).done(function ( data ) {
        $('#save-feedback').remove();
        var response = "<div class='feedback-response'>" + data + "</div>";
        $('#feedback-modal .modal-body').html(response);
      });
  });

  $('.notify.product-buy').click(function(event) {
    event.preventDefault();
    var product_id = parseInt($(this).attr('id'), 10);
    handle_notify_action([product_id]);
  });

  function handle_notify_action(product_ids) {
    if (!product_ids.length) {
      return;
    } else if (product_ids.length === 1) {
      $('.notify-modal-form-header').text('Oh No! The following item is not currently in stock:');
      $('.notify-modal-form-notice').text('Please enter your details below and we will send you an e-mail when this item is back in stock! You will only be e-mailed about this product!');
    } else {
      $('.notify-modal-form-header').text('Oh No! You tried to add the following items to your cart, but they are not in stock right now:');
      $('.notify-modal-form-notice').text('Please enter your details below and we will send you an e-mail when these items are back in stock! You will only be e-mailed about these products!');
    }

    $('#notify-modal-form, #notify-modal .modal-body .product, .notify-modal-form-header').show();
    $('#notify-modal-success').hide();
    $('#close-notify').hide();
    $('#submit-notify').show();
    $('#notify-modal .product').remove();

    $.each(product_ids, function(index, value) {
      var $product_link = $('#' + value + '-product');

      var $product = $product_link.closest('.product-wrapper');
      //var $product_image = $('img', $product).first().clone();
      //$product_image.css({'width': '50px'});
      var $product_title = $('.product-title', $product).first().clone();
      var product = $('<p />', { 'class': 'product'})
        //.append($product_image)
        .append($product_title.text().toUpperCase());
      product.data('id', value);
      //console.log($product_image);
      $('#notify-modal .notify-modal-products').append(product);
    });

    $('#notify-modal').modal('show');
  }

  $('#submit-notify').click(function(event) {
    event.preventDefault();

    var email_pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

    if ($('input[name="name"]').val().length < 2) {
      $('.notify-modal-form-notice').html("Please enter your name before submitting.");
      $('.notify-modal-form-notice').css('font-weight', 'bold');
      return;
    } else if (!email_pattern.test($('input[name="email"]').val())) {
      $('.notify-modal-form-notice').html("Please enter a valid email before submitting.");
      $('.notify-modal-form-notice').css('font-weight', 'bold');
      return;
    }

    var product_ids = [];
    $('#notify-modal .product').each(function() {
      product_ids.push($(this).data('id'));
    });


    if (product_ids.length) {
      submit_notify(product_ids[0], notify_submit_response);
    }

    function notify_submit_response(id, data) {
      var next_index = product_ids.indexOf(id) + 1;
      if (next_index < product_ids.length) {
        submit_notify(product_ids[next_index], notify_submit_response);
      } else {
        //show modal body submission success.  Close Submit..just like feedback form.
        $('#submit-notify').remove();
        var response = "<div class='feedback-response'>" + data + "</div>";
        $('#notify-modal-form, #notify-modal .modal-body .product, .notify-modal-form-header').hide();
        $('#notify-modal h3').text("Subscription Successful!");
        $('#notify-modal-success').show();
        $('#submit-notify').hide();
        $('#close-notify').show();
      }
    }

    function submit_notify(id, cb) {
      $.ajax({
        //url: 'http://localhost:3000',
        url: DOMAIN + "/index.php?main_page=back_in_stock_notification_subscribe&hidden=yes&part_id=" + id,
        type: "POST",
        data: $('#notify-modal-form').serialize(),
        crossdomain: true,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        xhrFields: { withCredentials: true },
        beforeSend: function ( xhr ) {
            $('#submit-notify').text('Working...').addClass("disabled");
        },
        error: function (data) {
          //console.log(data);
        },
        success: function (data) {
          cb(id, data);
          //console.log(data);
        }
      });
    }
  });

	$('.medium-side-image-link').bind('touchstart click mouseenter', function(event) {
		var content_width = $('.content').width();
    if ($('#admin').length > 0) {
      return;
    }
		//no need to show the larger of the side-by-side images in the small browsers...just doesn't look good.
		//so prevent the hover, click event in that case.
		if (content_width > 450) {
			event.preventDefault();
			var large_link = $(this).attr('href');
			var medium_link = $('.small-side-image', this).attr('src').replace(/\/thumb160\//, "/medium640/");

			$(this).parents('ul').find('.medium-side-image').attr('src', medium_link);
			$(this).parents('ul').find('.large-side-image-link').attr('href', large_link);
		}
	});

	/* parse out URL, and get the gist details from github. */
	$('.build-gist').each(function() {
		var $gist_element = $(this);
		var gist_url = $gist_element.html();

		$.ajax({
			url: gist_url + '.json',
			dataType: 'jsonp',
			success: function(gist) {
				$gist_element.html(gist.div);
				$gist_element.show();
			}
		});
	});

	function handlePageLoad() {
    processTemplates();
		processSideBySide();
    setupCodeCopy();
    setupProductLinks();
	}

  function processTemplates() {
    var username = $('#account .name').data('username');
    // parse any .markdown-html to inject the username from the header data element
    // into the template and display
    $('.markdown-html').each(function() {
      // markdown is going to parse {{content}} as %7B%7Bcontent%7D%7D. We need to fix that.
      var html = $(this).html().replace(/\%7B%7B(.+?)\%7D%7D/g, "{{$1}}");
      var template = Hogan.compile(html);
      $(this).html(template.render({username: username }));
    });
  }

  function setupCodeCopy() {
    $(document).on('click', '.code-copy-button', function(event) {
      event.preventDefault();

      var text = $(this).parent().next('.code-text-only').html();

      var input = document.createElement('textarea');
      $(this).append(input);
      //copy text, and unencode the encoded lt and gt tags.
      input.value = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      input.focus();
      input.select();

      var succeeded;
      try {
        succeeded = document.execCommand("copy");input.remove();
      } catch (e) {
        succeeded = false;
      }

      if (succeeded) {
        $(this).text("Copied!");
      } else {
        $(this).text("Error!");
      }

      input.remove();

      return false;
    });
  }

  $(window).resize(function() {
    //adjustPageSidebar();
    processSideBySide();
  });

	function processSideBySide() {
		var $content = $('.content');

    //not really optimal here, causes double image refresh on mobile browsers for side2...
    if ($(window).width() <= 770) {
      $('.small-side-image').each(function(index, image) {
        var src = $(image).attr('src');
        $(image).attr('src', src.replace('thumb160', 'medium640'));
      });
    }
	}

  $(document).on('touchstart click', '.related-guide', function() {
    window.location = $(this).find('a').attr('href');
  });
});
$(function() {
  if ($('#colorpicker').length > 0) {
    var picker = $.farbtastic('#colorpicker');
    var $user_color = $('#user_color');
    if ($user_color.val().length === 7) {
      picker.setColor($user_color.val());
      $user_color.css('background-color', picker.color);
    }
    picker.linkTo(function() {
      $user_color.val(picker.color);
      $user_color.css('background-color', picker.color);
    });
  }
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//






























// Adafruit specific libraries





// shared between front-end and admin


// ALS specific libraries





;
