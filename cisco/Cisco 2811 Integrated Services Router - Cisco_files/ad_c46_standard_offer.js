cdc.util.ensureNamespace("cdc.mbox"); // safe way to make sure cdc.mbox exists

//----------*********************************-------------------

cdc.mbox.render = function (mbox){
  function getMboxParam(_sWhich){
    var arr = mboxCurrent.getParameters();
    for (i=0;i<arr.length;i++){ if(arr[i].indexOf(_sWhich) != -1){return (arr[i].split("=")[1]); }}
    return "";
  }
  jQuery(document).ready(function() {
    if (mbox.odMboxType == 'psm') {
      jQuery('#ad_c46').addClass('c46v3');
      }
    else if (mbox.odMboxType == 'psm-eol') {
      jQuery('#ad_c46').addClass('c46v3');
      }
    else if (mbox.odMboxType == 'smallbusiness')
      jQuery('#ad_c46').addClass('c46v3 smallbusiness');
    else if (mbox.odMboxType == 'mbw') {
      if (mbox.odMboxName.indexOf('_188') > -1 ||  mbox.odMboxName.indexOf('_small') > -1 ) {
        jQuery('#ad_c46').addClass('c46v4');
        }
      else {
        jQuery('#ad_c46').addClass('c46v3');
        }
      }
    else {
      if ((mbox.odMboxName.indexOf('_188') > -1) || (mbox.odMboxName.indexOf('_small') > -1 )) {
        jQuery('#ad_c46').addClass('c46v4');
      }
      else
        jQuery('#ad_c46').addClass('c46v3');
      }
    });

  function swizzleValues() { 
    jQuery("#ad_c46").unbind();
    var c46Obj = document.getElementById('ad_c46');  //grab everything within <div id=ad_c46>...</div>
    if(c46Obj){ c46Obj.onclick=cdc.mbox.swizzleOnClick; }  //must define new onclick with a function
    else{ setTimeout('swizzleValues()', 100); return; }
    var c46Obj_a = document.getElementById('ad_ctalink');
    if(c46Obj_a){ c46Obj_a.onclick=cdc.mbox.swizzleOnClick; } 
    else{ setTimeout('swizzleValues()', 100); }
  }

  cdc.mbox.swizzleOnClick = function() {
    mboxFactoryDefault.getSignaler().signal('special', "mboxClickTrack", "clicked=" + mbox.odAdId);
    var c46Obj = document.getElementById('ad_ctalink');
    if(c46Obj){
      var sHref = c46Obj.href;
      location.href= sHref;
    }
    return false;
  }

  swizzleValues();

  try{
  trackEvent.event("impression", 
   {mbox: mbox.odMboxName, 
   ad_attribute: mbox.odAdAttribute, 
   lpos: "DG-Contextual", 
   tt_recipeid: mbox.odCampaign, 
   ad_id: mbox.odAdId, 
   elementtype: mbox.odElemType, 
   content_type: "DG_TT"}
  );
  }catch(err){}
};
