define(["config","jquery"],function(a,b){a.janrain;return localStorage.setItem("janrainDebugEnabled","prod"!==a.env.environment),"object"!=typeof window.janrain&&(window.janrain={}),"object"!=typeof window.janrain.settings&&(window.janrain.settings={}),"object"!=typeof window.janrain.settings.capture&&(window.janrain.settings.capture={}),window.janrainUtilityFunctions=function(){function a(a,b){return document.getElementById("capture_"+a+"_form_item_"+b)}function b(a,b){return document.getElementById("capture_"+a+"_"+b)}function c(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}function d(){function a(a){janrain.events[a].addHandler(function(b){console.log(a,b)})}if(window.console&&window.console.log)for(var b in janrain.events)try{var c=b;b.hasOwnProperty("eventName")&&(c=b.eventName),a(c)}catch(a){}}return{getCaptureFormItem:a,getCaptureField:b,getParameterByName:c,showEvents:d}},window.janrain});