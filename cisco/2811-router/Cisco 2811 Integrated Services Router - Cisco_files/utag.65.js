//tealium universal tag - utag.65 ut4.0.201704062016, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var _elqQ=_elqQ||[];try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim='&';u.kvp_delim='=';u.elqSetSiteId="2026391005,177775138,983166544";u.base_url="//img.en25.com/i/elqCfg.min.js";u.map={};u.extend=[function(a,b){try{if(1){function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){if(oldonload){oldonload();}
func();};}}
utag.onload_flag=utag.onload_flag||{};if(!utag.onload_flag[id]){if(document.readyState!="complete"){addLoadEvent(function(){utag.view(utag_data,null,[id]);});return false;}
utag.onload_flag[id]=1;}}}catch(e){utag.DB(e)}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f]=="base_url"||e[f]=="form_tracking"||e[f]=="elqFormName"||e[f]=="elqFormGUIDElement"){u[e[f]]=b[d];}else{_elqQ.push([e[f],b[d]]);}}}}
u.elqSetSiteIds=u.elqSetSiteId.split(',');for(var i=0;i<u.elqSetSiteIds.length;i++){_elqQ.push(["elqSetSiteId",u.elqSetSiteIds[i]]);_elqQ.push(['elqTrackPageView']);}
if(u.form_tracking==true||u.form_tracking=="true"||u.form_tracking=="on"||u.form_tracking=="yes"){u.timerId=null;u.timeout=5;function WaitUntilCustomerGUIDIsRetrieved(){if(!!(u.timerId)){if(u.timeout==0){return;}
if(typeof this.GetElqCustomerGUID==='function'){document.forms[u.elqFormName].elements[u.elqFormGUIDElement].value=GetElqCustomerGUID();return;}
u.timeout-=1;}
u.timerId=setTimeout(WaitUntilCustomerGUIDIsRetrieved,500);return;}
WaitUntilCustomerGUIDIsRetrieved();_elqQ.push(['elqGetCustomerGUID']);}
u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url;u.s.parentNode.insertBefore(u.scr,u.s);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('65','cisco.support');}catch(e){}
