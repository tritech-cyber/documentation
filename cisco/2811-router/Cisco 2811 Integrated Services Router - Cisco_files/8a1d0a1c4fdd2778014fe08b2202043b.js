/* Pushed : Thu, 20 Apr 2017 12:13 PM UTC */
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rNonWord=/\W/;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];context=context||document;var origContext=context;if(context.nodeType!==1&&context.nodeType!==9){return[];}
    if(!selector||typeof selector!=="string"){return results;}
    var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=Sizzle.isXML(context),parts=[],soFar=selector;do{chunker.exec("");m=chunker.exec(soFar);if(m){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}}while(m);if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}
        set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
        if(context){ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
            while(parts.length){cur=parts.pop();pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
                if(pop==null){pop=context;}
                Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
    if(!checkSet){checkSet=set;}
    if(!checkSet){Sizzle.error(cur||selector);}
    if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
    if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
    return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
    return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.matchesSelector=function(node,expr){return Sizzle(expr,null,null,[node]).length>0;};Sizzle.find=function(expr,context,isXML){var set;if(!expr){return[];}
    for(var i=0,l=Expr.order.length;i<l;i++){var match,type=Expr.order[i];if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
    if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[];}
    return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var match,anyFound,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){var found,item,filter=Expr.filter[type],left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}
    if(curLoop===result){result=[];}
    if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
    if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
    if(found!==undefined){if(!inplace){curLoop=result;}
        expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
        break;}}}
    if(expr===old){if(anyFound==null){Sizzle.error(expr);}else{break;}}
    old=expr;}
    return curLoop;};Sizzle.error=function(msg){throw"Syntax error, unrecognized expression: "+msg;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");},type:function(elem){return elem.getAttribute("type");}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}
    for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
        checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}
    if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();for(;i<l;i++){elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else{for(;i<l;i++){elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
    if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
    checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
    checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m&&m.parentNode?[m]:[];}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
    return ret.length===0?null:ret;}},TAG:function(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1]);}}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";if(isXML){return match;}
    for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}
    return false;},ID:function(match){return match[1].replace(rBackslash,"");},TAG:function(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase();},CHILD:function(match){if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);}
    match[2]=match[2].replace(/^\+|\s*/g,'');var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
else if(match[2]){Sizzle.error(match[0]);}
    match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
    match[4]=(match[4]||match[5]||"").replace(rBackslash,"");if(match[2]==="~="){match[4]=" "+match[4]+" ";}
    return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
    return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
    return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
    return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return(/h\d/i).test(elem.nodeName);},text:function(elem){var attr=elem.getAttribute("type"),type=elem.type;return"text"===type&&(attr===type||attr===null);},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button";},input:function(elem){return(/input|select|textarea|button/i).test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0===i;},eq:function(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||Sizzle.getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var j=0,l=not.length;j<l;j++){if(not[j]===elem){return false;}}
    return true;}else{Sizzle.error(name);}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
    if(type==="first"){return true;}
    node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
    return true;case"nth":var first=match[2],last=match[3];if(first===1&&last===0){return true;}
    var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
        parent.sizcache=doneName;}
    var diff=elem.nodeIndex-last;if(first===0){return diff===0;}else{return(diff%first===0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS,fescape=function(all,num){return"\\"+(num-0+1);};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape));}
    var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
        return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}catch(e){makeArray=function(array,results){var i=0,ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var l=array.length;i<l;i++){ret.push(array[i]);}}else{for(;array[i];i++){ret.push(array[i]);}}}
        return ret;};}
    var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
        if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;}
        return a.compareDocumentPosition(b)&4?-1:1;};}else{sortOrder=function(a,b){var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(a===b){hasDuplicate=true;return 0;}else if(aup===bup){return siblingCheck(a,b);}else if(!aup){return-1;}else if(!bup){return 1;}
        while(cur){ap.unshift(cur);cur=cur.parentNode;}
        cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}
        al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}}
        return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};siblingCheck=function(a,b,ret){if(a===b){return ret;}
        var cur=a.nextSibling;while(cur){if(cur===b){return-1;}
            cur=cur.nextSibling;}
        return 1;};}
    Sizzle.getText=function(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue;}else if(elem.nodeType!==8){ret+=Sizzle.getText(elem.childNodes);}}
        return ret;};(function(){var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;form.innerHTML="<a name='"+id+"'/>";root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
        root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
        results=tmp;}
        return results;};}
        div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
        div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div"),id="__sizzle__";div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
        Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&!Sizzle.isXML(context)){var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);if(match&&(context.nodeType===1||context.nodeType===9)){if(match[1]){return makeArray(context.getElementsByTagName(query),extra);}else if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra);}}
            if(context.nodeType===9){if(query==="body"&&context.body){return makeArray([context.body],extra);}else if(match&&match[3]){var elem=context.getElementById(match[3]);if(elem&&elem.parentNode){if(elem.id===match[3]){return makeArray([elem],extra);}}else{return makeArray([],extra);}}
                try{return makeArray(context.querySelectorAll(query),extra);}catch(qsaError){}}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);if(!old){context.setAttribute("id",nid);}else{nid=nid.replace(/'/g,"\\$&");}
                if(relativeHierarchySelector&&hasParent){context=context.parentNode;}
                try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra);}}catch(pseudoError){}finally{if(!old){oldContext.removeAttribute("id");}}}}
            return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
        div=null;})();}
    (function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector,pseudoWorks=false;try{matches.call(document.documentElement,"[test!='']:sizzle");}catch(pseudoError){pseudoWorks=true;}
        if(matches){Sizzle.matchesSelector=function(node,expr){expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!Sizzle.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){return matches.call(node,expr);}}catch(e){}}
            return Sizzle(expr,null,null,[node]).length>0;};}})();(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;}
        div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}
        Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
        if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
        if(elem.nodeName.toLowerCase()===cur){match=elem;break;}
        elem=elem[dir];}
        checkSet[i]=match;}}}
    function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
        if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
            if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
        elem=elem[dir];}
        checkSet[i]=match;}}}
    if(document.documentElement.contains){Sizzle.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);};}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16);};}else{Sizzle.contains=function(){return false;};}
    Sizzle.isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function(selector,context){var match,tmpSet=[],later="",root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
        selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
        return Sizzle.filter(later,tmpSet);};window.zS=Sizzle;
})();

function zAddOnLoad(func) 	{var o = window.onload;if (typeof window.onload != 'function') {window.onload = func;} else {window.onload = function() { try { if (o) { o(); } } catch (err) {} func(); }}}
function zAddOnUnload(func) {var o = window.onunload;if (typeof window.onload != 'function') {window.onunload = func;} else {window.onunload = function() { try { if (o) { o(); } } catch (err) {}  func(); }}}
function zBind() { var initArgs = zArray(arguments); var fx = initArgs.shift(); var tObj = initArgs.shift();var args = initArgs; return function() {return fx.apply(tObj, args.concat(zArray(arguments))); };}
function zArray(a) { var r = []; for (var i = 0; i < a.length; i++) r.push(a[i]); return r; }
function zExtCook(val) {if ((ec = document.cookie.indexOf(";", val)) == -1) {ec = document.cookie.length;}return unescape(document.cookie.substring(val,ec));}
function ZTrack(objs) {
    this.host = objs["h"];
    this.id = objs["i"];
    this.pid = objs["p"];
    this.cid = objs["c"];
    this.t = objs["t"];
    this.uuid = null;
    this.cname = "zift_ua";
    this.legacy = "zift-user";
    this.loadTime = new Date().getTime();
    this.uuid_holder = null;
    this.durationSent = false;

    this.init = function(){
        this.uuid_holder = this.getRandomId();
        this.assignLegacyValues();
        this.bindOnload();
        this.bindLinks();
        this.bindActiveElements();
        this.bindUnload();
    };

    this.buildBasicReference = function(conv) {
        return 'id=' + this.id + '&clid=' + this.cid + '&u=' + this.uuid + '&ekey=' + this.getEmailKey() + "&p=" + this.pid + "&uuid_holder=" + this.uuid_holder + (conv? '&conv=' + conv : '');
    };


    /* view events */
    this.bindOnload = function() {
        this.triggerViewEvent();
    };

    this.triggerViewEvent = function(conv) {
        var url = this.host + 'trk/v?' + this.buildBasicReference(conv) + '&fr=true' + "&refurl=" + escape(this.getReferer());
        this.fireViewEvent(url);
    };

    this.fireViewEvent = function(url) {
        var sc=document.createElement('script');
        sc.setAttribute("type","text/javascript");
        sc.setAttribute("src", url);
        sc.onload = sc.onreadystatechange = zBind(this.processViewLoad, this, sc);
        document.getElementsByTagName("head")[0].appendChild(sc);
    };

    this.processViewLoad = function(sc) {
        try {
            this.uuid = eval(this.uuid_holder).uuid;
            document.getElementsByTagName("head")[0].removeChild(sc);
        } catch (e) {};
    };


    /* link events */
    this.bindLinks = function() {
        var links;
        if (this.t == "t") {
            links = zS("a");
        }
        else {
            links = zS("a", document.getElementById("pw_" + this.id));
        }

        var i = 0;
        for (i = 0; i < links.length; i++ ) {
            var link = links[i];
            var href = link.href;
            if (link.hasAttribute("ztrack") && link.getAttribute("ztrack") != "false") {
                if (link.getAttribute("ztrack") != "true")
                    href = link.getAttribute("ztrack");
            } else {
                if (href.match("#$") == "#") continue;
                if (link.getAttribute('ztm') == "ignore") continue;
            }

            var title;
            var conv = false;

            // check title elem, default var if present
            if (link.hasAttribute('title')) {
                title = link.getAttribute('title');
            }

            // Story 4693 - use the zconversion value as the title of the event
            // if conversion present, set var and override title passed to processors
            if (link.hasAttribute('zconversion')) {
                conv = true;
                title = link.getAttribute('zconversion');
            }

            link.onclick = this.chain(link.onclick, zBind(this.triggerClickEvent, this, link, href, title, conv));
        }
    };

    this.bindActiveElements = function() {
        var elements;
        if (this.t == "t") {
            elements = zS('[ztrack]:not("a")');
        }
        else {
            elements = zS('[ztrack]:not("a")', document.getElementById("pw_" + this.id));
        }

        var elementsCount = elements.length;
        for (var i = 0; i < elementsCount; i++ ) {
            var element = elements[i];

            if (element.hasAttribute("ztrack") && element.getAttribute("ztrack") == "false")
                continue;

            var title="An active element that is not a link";
            var conv = false;

            if (element.hasAttribute("title") && element.getAttribute("title") != "")
                title = element.getAttribute("title");
            else if (element.hasAttribute("name") && element.getAttribute("name") != "")
                title = element.getAttribute("name");

            if (element.hasAttribute('zconversion')) {
                conv = true;
                title = element.getAttribute('zconversion');
            }

            var target="#";
            if (element.hasAttribute("ztrack") && element.getAttribute("ztrack") != "true")
                target = element.getAttribute("ztrack");

            element.onclick = this.chain(element.onclick, zBind(this.triggerClickEvent, this, element, target, title, conv));
        }
    };

    this.chain = function(o, n) {
        if (o && typeof o == 'function') {
            return function(e) {
                n.call(this, arguments);
                return o.call(this, arguments);
            };
        } else {
            return function(e) {
                return n.call(this, arguments);
            };
        }
    };

    this.triggerClickEvent = function(elem, href, title, conv, e) {
        var url = this.host + 'trk/c?' + this.buildBasicReference(conv) + '&url=' + escape(href) + (title ? '&title=' + escape(title) : '');
        this.fireIMGEvent(url);
        return true;
    };

    this.triggerClickEventOverrideReferer = function(elem, href, e) {
        var url = this.host + 'trk/c?' + this.buildBasicReference(false) + '&url=' + escape(href) + (elem.title? '&title=' + escape(elem.title) : '') + '&refurl=' + escape(this.getReferer());
        this.fireIMGEvent(url);
        return true;
    };

    this.fireIMGEvent = function(url) {
        var random = Math.random();
        var i = document.createElement("img");
        i.src = url + "&random=" + random;
        i.style.width = "1px";
        i.style.height = "1px";
        i.style.border = "none";
        i.onload = zBind(this.recordIMGEvent, this, i);
        document.body.appendChild(i);
    };

    this.recordIMGEvent = function(e) {
        document.body.removeChild(e);
    };


    /* unload events */
    this.bindUnload = function() {
        zAddOnUnload(zBind(this.triggerExitEvent, this));
    };


    this.triggerExitEvent = function() {
        if(!this.durationSent) {
            var duration = (new Date().getTime() - this.loadTime) / 1000;
            var url = this.host + 'trk/v?' + this.buildBasicReference() + '&fr=true' + "&duration=" + duration;
            this.fireIMGEvent(url);
            this.durationSent = true;
        }
    };


    /* helpers */
    this.getReferer = function() {
        if (document.referrer) {
            return document.referrer;
        }
        return "";
    };

    this.getEmailKey = function() {
        var ekey = "";
        try {
            var ek = this.getQueryStringValue("CakeUUID");
            if (ek != null && ek != "" && ek.indexOf("[mailing_id]") == -1)
                ekey = ek;

            if (!ekey) {
                eKey = zExtCook("emailkey")
            }

        } catch (exception) {
        }
        return ekey;
    };

    this.getQueryStringValue = function(param) {
        var q=document.location.search.substring(1);
        if (q.length > 0){
            var params=q.split('&');
            for (var i=0 ; i<params.length ; i++){
                var pos = params[i].indexOf('=');
                var name = params[i].substring(0, pos);
                var value = params[i].substring(pos + 1);
                if (name == param) {
                    return value;
                    break;
                }
            }
        }
        return null
    };

    this.preventDefault = function(e) {
        if (e) e.preventDefault? e.preventDefault() : e.returnValue = false;
    };

    this.assignLegacyValues = function() {
        var nameEQ = this.legacy + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) {
                //this.uuid = c.substring(nameEQ.length,c.length);
                break;
            }
        }
    };

    this.getRandomId = function() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 8;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        return "zt_" + randomstring;
    };


    this.init();
}


var ppa_ = document.getElementsByTagName('script')[0];


/*Putting onload function - ensuring visibility */
function zAddOnLoad(func)  {var o = window.onload;if (typeof window.onload != 'function') {window.onload = func;} else {window.onload = function() { try { if (o) { o(); } } catch (err) {} func(); }}};

/*Identifying script location - parent tag */
var scriptTag = document.scripts[document.scripts.length - 1];var pt_ff8081815a8d1ab4015aaec7aadf55d5 = scriptTag.parentNode;
if(zQStringValue('zBase')){window['pt_'+zQStringValue('zBase')]=pt_ff8081815a8d1ab4015aaec7aadf55d5;}

try{
if (document.getElementById('ff8081815a8d1ab4015aaec7aadf55d5')) { 
	pt_ff8081815a8d1ab4015aaec7aadf55d5 = document.getElementById('ff8081815a8d1ab4015aaec7aadf55d5'); 
}
} catch (err) {}

/*adding key variables */
var zBaseUrl = 'http://widgets.ziftsolutions.com/cisco.ziftsolutions.com/js/ff8081815a8d1ab4015aaec7aadf55d5';
var zBaseKey = 'cisco.ziftsolutions.com/js/';
var zStandaloneBaseUrl = 'http://sites.ziftsolutions.com/cisco.ziftsolutions.com/ff8081815a8d1ab4015aaec7aadf55d5';


/*adding panel loading via analytics */
if (!zBaseComplete) var zBaseComplete = false; 


/*writing core js */
var zPanele0008;
var zPanelLoadCalls = new Array();
var zLoaded = false;
var zLoadInterval;
function zDoPanelLoad() {
zLoadInterval = window.setInterval(zDoPanelLoadInternal, 500);
}
function zDoPanelLoadInternal() {
if (!zLoaded) {
try {
zPanele0008 = new zwPanel('zPage','zFormId',"zFormValidation(this.getForm())",'ziftc','zSubmissionRefId','zift.trackback', 'http://sites.ziftsolutions.com/cisco.ziftsolutions.com/ff8081815a8d1ab4015aaec7aadf55d5', 'zPanele0008');
zPanele0008.setEmailKey();
zPanele0008.loadSerialized();
zPanele0008.defaultForm();
zPanele0008.setTrackbacks();
zSetDynamicPanelAttributes();
for (var i = 0; i < zPanelLoadCalls.length; i++) eval(zPanelLoadCalls[i]);
zLoaded = true;
clearInterval(zLoadInterval);
} catch (err) {
zLoaded = false;
}
} else {
clearInterval(zLoadInterval);
}
}
function zAddPanelLoadEvent(func) {
zPanelLoadCalls[zPanelLoadCalls.length] = func;
}
function zQStringValue(param) {
var query=document.location.search.substring(1);
if (query.length > 0){
var params=query.split('&');
for (var i=0 ; i<params.length ; i++){
var pos = params[i].indexOf('=');
var name = params[i].substring(0, pos);
var value = params[i].substring(pos + 1);
if (name == param) {
return value;
break;
}
}
}
return null;
}
var zPage = zQStringValue('zPage');
try { if (typeof(zPageOverride) != 'undefined') zPage = zPageOverride; } catch (err) {} 

var zBaseSkipTrack = false; 
var zBase = zQStringValue('zBase');
try { if (typeof(zBase) != 'undefined' && zBase != null) { zBaseUrl = 'http://widgets.ziftsolutions.com/' + zBaseKey + zBase; zBaseSkipTrack = true; }} catch (err) {} 

function addZiftLoadEvent(func) { 
  if (document.readyState === "complete") {
    func();
  } else {
    if (window.attachEvent) { 
       return window.attachEvent('onload', func);  
    } else { return window.addEventListener('load', func, false);  }
  }   
}

function zScriptInclude(page) {
var el = document.createElement('script');
el.type = 'text/javascript';
el.src = page ;
el.async = false;
return el;}
function zWriteScriptInclude(page) {
pt_ff8081815a8d1ab4015aaec7aadf55d5.appendChild(zScriptInclude(zBaseUrl + '/' + zPage));
}
function zWriteElementInclude(el) {
pt_ff8081815a8d1ab4015aaec7aadf55d5.appendChild(el);
}


/*processing dynamic step rules and routing */
var ztrack_ff8081815a8d1ab4015aaec7aadf55d5;if (typeof(zBase) == 'undefined' || zBase == null || zBase == 'null' || (zBase != null && zBaseComplete)) {addZiftLoadEvent(function() { ztrack_ff8081815a8d1ab4015aaec7aadf55d5 = new ZTrack({ h: 'https://analytics.ziftsolutions.com/', i: (zBase?zBase:'ff8081815a8d1ab4015aaec7aadf55d5'), p: '8a1d0a1c4fdd2778014fe08b68f1043f', c: '8a12350747c4c06e0147c691962f772a', t: 't'} );}); zTS = 'https://cisco.ziftsolutions.com/';}
var zroute = zQStringValue('zroute');

if (zroute != null && zroute != 'null') setTimeout(function() {window.location = decodeURIComponent(zroute);}, 500);


/*writing panel body */
if (zBase != null && zBase != 'null' && !zBaseComplete) {  zBaseComplete=true; zWriteElementInclude(zScriptInclude(zBaseUrl)); } else {
var zContent = {"content":"<span><br/> <\/span>","baseJS":"<script type='text/javascript'>\nfunction zGetNextPageInternal(param, link) {\nreturn '8a9e43b148006f48014800743567000a';\n}\nfunction zGotoNextPageInternal(param, link) {\nzPanele0008.setPageCookieForNextPage(zQStringValue('zPage'));\nzPanele0008.incrementPageCount();\nzPanele0008.gotoPage(param, zNextPage, link, true);\nreturn zNextPage;\n}\nfunction zSetDynamicPanelAttributes() { \nzPanele0008.setExternalFormUrl('https://form.ziftsolutions.com/open/ExternalFormProcessor.html');\n}\n<\/script>","onloadJS":"<script type='text/javascript'>\nzDoPanelLoad();\n<\/script>","scriptIncludes":""};
var s_4780 = document.createElement('div');s_4780.style.height = '0';s_4780.className = 'z_panel_base z_p_Tracking z_ps_Default';s_4780.id = 'pw_ff8081815a8d1ab4015aaec7aadf55d5';s_4780.style.display = 'none';pt_ff8081815a8d1ab4015aaec7aadf55d5.appendChild(s_4780);
s_4780.innerHTML = zContent.content;
var s_5083 = document.createElement('span');pt_ff8081815a8d1ab4015aaec7aadf55d5.appendChild(s_5083);
}
function zGetNextPageInternal(param, link) {
return '8a9e43b148006f48014800743567000a';
}
function zGotoNextPageInternal(param, link) {
zPanele0008.setPageCookieForNextPage(zQStringValue('zPage'));
zPanele0008.incrementPageCount();
zPanele0008.gotoPage(param, zNextPage, link, true);
return zNextPage;
}
function zSetDynamicPanelAttributes() { 
zPanele0008.setExternalFormUrl('https://form.ziftsolutions.com/open/ExternalFormProcessor.html');
}
zDoPanelLoad();

function zPerformTrackingEmbed() {

    var zpElems = zS('.zift_plugin');

    for (var i=0; i<zpElems.length; i++) {
        var zpElem = zpElems[i];

        if (zpElem != null) {
            var widgetId = zpElem.getAttribute('id');

            if (widgetId != null) {
                var jsInclude = "http://widgets.ziftsolutions.com/" + zBaseKey + widgetId;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = jsInclude;

                var div = document.createElement('div');
                div.id = 'zift_tmp_' + widgetId;
                div.style.display = "none";
                document.body.appendChild(div);
                div.appendChild(script);
                //window.setTimeout(function() {zpElem.innerHTML = div.innerHTML;}, 1000);
            }
        }
    }
}

zPerformTrackingEmbed();
