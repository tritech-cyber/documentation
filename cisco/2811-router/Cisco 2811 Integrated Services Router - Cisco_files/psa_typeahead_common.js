/**
* psa_typeahead_common.js
* $Revision: 1.13 $
*
*
*  README:
*  (c) 1992-2010 Cisco Systems, Inc. All rights reserved.
*  Terms and Conditions: http://cisco.com/en/US/swassets/sw293/sitewide_important_notices.html
*/
cdc.util.ensureNamespace('cdc.cl');
cdc.cl.typeahead = {
    AutoSuggestControl: function( frmId, txtId, btnId, prfObj, domObject ) {
        return {
            cur          : -1,         //
            layer        : null,
            
            userinput    : "",
            url_suffix   : "",         // common variable to both support and download
            url_prefix   : "",         // common varaible to both
            suggestions  : [],         // common variable to both
            active       : false,      // common variable to both

            timeout      : null,       // specific to download
            requestIncr  : 0,          // specific to download
            responseIncr : 0,          // specific to downlaod
            newWin       : null,       // specific to download
            isMobile     :false,
            isSHP        :false,
            
            init: function(frmId,txtId, btnId,prfObj, domObject) {
                oThis = this;
                prfObj.frmId = frmId;
                prfObj.txtId = txtId;
                prfObj.btnId = btnId;
                
                oThis.isSHP=jQuery("body").hasClass("cdc-support-home-page");
                
                jQuery("#"+domObject.psaPrefsObj.txtId, "#"+domObject.psaPrefsObj.frmId).bind({
                    keyup: function(oEvent) {
                        if (!oEvent)
                            oEvent =window.event;
                        oThis.handleKeyUp(oEvent, domObject);
                    },
                    keydown: function(oEvent) {
                        if (!oEvent)
                            oEvent =window.event;
                        oThis.handleKeyDown(oEvent, domObject);
                        // do something on mouseenter
                    },
                    mousedown: function(oEvent) {
                        if (!oEvent)
                            oEvent =window.event;
                        oEvent.cancelBubble = true;
                        // do something on mouseenter
                    }
                });
                
                if( domObject.psaPrefsObj.psa_searchType == "support") {
                    
                    
                    jQuery('#'+domObject.psaPrefsObj.btnId).mousedown( function() {
                        var searching = encodeURIComponent(jQuery('#'+domObject.psaPrefsObj.txtId).val());
                        var searchUrl = jQuery("#"+domObject.psaPrefsObj.frmId).attr('action') + "?q=" + searching + "&task=" + domObject.psaPrefsObj.psa_autosuggest_task_name;
                        window.parent.location.href = searchUrl;
                    });
                    jQuery("#"+domObject.psaPrefsObj.frmId).submit( function() {
                        //oThis.addASResultMetrics('support_autosuggest',"", "",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Product Support");
                        //do nothing on form submit
                        var suggestionLnth = oThis.suggestions.length;
                        if(suggestionLnth > 0){
                            var searchTxt = jQuery("#"+domObject.psaPrefsObj.txtId).val();
                            for(var i=0;i<suggestionLnth;i++){
                                if(oThis.suggestions[i].name == searchTxt){
                                    var hiddenLink = jQuery('<a/>',{
                                        text : oThis.suggestions[i].display,
                                        href : oThis.suggestions[i].url,
                                        rel : '&task=default&nodeId='+oThis.suggestions[i].nodeId+'&type=product&locale='+domObject.psaPrefsObj.psa_autosuggest_languagecode
                                    });
                                    cdc.mru.makeMruRequest(hiddenLink[0]);
                                }
                            }   
                        }
                        return false;
                    });
                }
                if( domObject.psaPrefsObj.psa_searchType == "download") {
                    jQuery("#"+domObject.psaPrefsObj.frmId).submit( function() {
                        //oThis.addASResultMetrics('download_autosuggest'," ", "",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Download Software");
                        return oThis.submitForm(domObject );
                    })
                }

                jQuery('#'+domObject.psaPrefsObj.btnId).focus( function() {
                    oThis.hideSuggestions(domObject);
                });
                
                jQuery("#"+domObject.psaPrefsObj.frmId).parent().parent().mouseleave(function(){
                    // hide suggestions when user moves away from MM section
                    oThis.hideSuggestions();
                });
            },
            geturl : function (s) {
                oThis = this;
                if (s.indexOf("*")==0) {
                    return oThis.url_prefix + s.substring(1) + oThis.url_suffix;
                }
                return s;
            },
            autosuggest : function (aSuggestions /*:Array*/,
            bTypeAhead /*:boolean*/, domObject ) {
                //make sure there's at least one suggestion
                if (aSuggestions.length > 0) {
                    if (bTypeAhead) {
                        //this.hideSuggestions();
                        //****************************************************************************************
                        // uncomment below to prepopulate text input field while typing.
                        // Also uncomment/replace areas in suggestions_(product or technology).php
                        //this.typeAhead(aSuggestions[0]);
                        //****************************************************************************************
                    }
                    this.showSuggestions(aSuggestions, domObject);
                } else {
                    this.hideSuggestions( domObject );
                }
            },  // end autosuggest function
            recordSearch : function (querymod, domObject) {
                if( domObject.psaPrefsObj.psa_searchType == "support") {

                    if (typeof ntptEventTag != "function") {
                        return true;
                    }
                    var rsObj = {
                        ntpagetag: {sensors:['cisco-tags.cisco.com/tag/ntpagetag.gif']},
                        title:document.title,
                        lpos :domObject.psaPrefsObj.psa_autosuggest_metrics_lpos,
                        lid  :domObject.psaPrefsObj.psa_autosuggest_metrics_lid,
                        url  :window.location.href,
                        action: "search"
                    };
                    if (jQuery('#'+domObject.psaPrefsObj.txtId).val() != null && jQuery('#'+domObject.psaPrefsObj.txtId).val() != "") {
                        rsObj.searchPhrase=jQuery('#'+domObject.psaPrefsObj.txtId).val();
                    }
                    if (typeof psa_task_name != "undefined") {
                        if (psa_task_name == "default") {
                            rsObj.task="product";
                        } else {
                            rsObj.task=psa_task_name;
                        }
                    }
                    //if (typeof psa_clickCount != "undefined") {
                    //  rsObj.clickCount=pas_clickCount;
                    //}
                    if (typeof psa_entitlement != "undefined") {
                        rsObj.entitlement=psa_entitlement;
                    }
                    if (typeof psa_current_mode != "undefined") {
                        rsObj.tab=psa_current_mode;
                    }

                    if (typeof cdc.util != "undefined") {
                        rsObj.loggedIn="No"                         
                        rsObj.status="Anonymous";
                        cdc.util.checkLogin( function(val) {
                            if (val == "valid") {
                                rsObj.loggedIn ="Yes";
                                rsObj.status ="loggedIn";
                            }
                        });    
                    }                                       
                } else {
                }
            }, // end function recordSearch
            submitForm : function (domObject) {
                if(domObject.psaPrefsObj.searchType == "support") {
                    //this.recordSearch("action=search&search_type=freeform", domObject);
                    return true;
                } else if(domObject.psaPrefsObj.searchType == "download") {
                    return true;
                }
            },   // end function submitForm
            requestSuggestions : function (bTypeAhead, bool, domObject ) {
                oThis = bTypeAhead;

                var fragment = jQuery('#'+domObject.psaPrefsObj.txtId).val().toLowerCase();

                if(fragment.length <= 2) {
                    this.hideSuggestions(domObject);
                } else {
                    var encoded_fragment = encodeURIComponent(fragment);
                    encoded_fragment = encoded_fragment.replace(/%2F/,"/");
                    if(domObject.psaPrefsObj.psa_searchType == "support") {
                        var chkUserType=(typeof psa_temp_autosuggest_entitlement != 'undefined') ? psa_temp_autosuggest_entitlement : domObject.psaPrefsObj.psa_autosuggest_entitlement;
                        var service_environment = (typeof domObject.psaPrefsObj.psa_autosuggest_service_environment != "undefined")? "&" + domObject.psaPrefsObj.psa_autosuggest_service_environment : "";
                        var url = domObject.psaPrefsObj.psa_autosuggest_service_root
                        + domObject.psaPrefsObj.psa_autosuggest_service_prefix
                        + "autosuggest/"
                        + domObject.psaPrefsObj.psa_autosuggest_task_name
                        + "/"
                        + chkUserType
                        + "/250/"
                        + encoded_fragment
                        + "?locale="+domObject.psaPrefsObj.psa_autosuggest_languagecode
                        + service_environment
                        + "&callback=?";
                        jQuery.getJSON(url, function(data) {
                            oThis.showSupportTypeahead(data, domObject);
                        });
                    } else if(domObject.psaPrefsObj.psa_searchType == "download") {
                        var url = domObject.psaPrefsObj.autosuggest_service_url+encoded_fragment+"/"+domObject.psaPrefsObj.autosuggest_max_results_count+"/"+domObject.psaPrefsObj.accessLevel+"?callback=?"+domObject.psaPrefsObj.autoappendmetrics+"&selectedPsaMode=AP";
                        oThis.requestIncr++;
                        jQuery.getJSON(url, function(data) {oThis.showDownloadTypeahead(data,this, domObject)
                        });
                    }
                }
            },  // end function requestSuggestions
            // Creates the dropdown layer to display multiple suggestions.
            createDropDown : function (domObject) {
                oThis = this;
                domObject.psaPrefsObj.txtId.className = "";
                oThis.cur = -1;
                
                var layerWidth=jQuery('#'+domObject.psaPrefsObj.txtId).width()+20;
                               
                if(oThis.isSHP){
                    layerWidth+=6;
                    //oThis.layer = jQuery( "<div class='suggestions'></div>").css("position","relative");
                }
                
                oThis.layer = jQuery( "<div class='suggestions'></div>").css({
                    color:"red",
                    visible:"hidden",
                    overflow:"auto",
                    width:layerWidth+"px"
                });
                
                if(oThis.isSHP){
                    oThis.layer.css("position","relative");
                }
                

                
                //when the user clicks on the a suggestion, get the text (innerHTML)
                //and place it into a textbox
                jQuery(oThis.layer).bind("mousedown mouseup mouseover touchstart", function (oEvent) {
                    
                    oEvent = oEvent || window.event;
                    oTarget = oEvent.target || oEvent.srcElement;
                    oTarget = oTarget.parentNode;

                    //if(oTarget.id.indexOf("autosuggest")>=0){
                    //  oTarget = oTarget.parentNode.parentNode;
                    //}
                    
                    if(oThis.isSHP){
                        var fingerTouchCount = (oEvent && oEvent.originalEvent && oEvent.originalEvent.touches && oEvent.originalEvent.touches.length) || 0;
                        if(fingerTouchCount>0){
                            oThis.isMobile=true;
                        }
                    }
                    if (oEvent.type == "mousedown") {
                        if(oTarget.className.indexOf("current")>=0) {
                            if(domObject.psaPrefsObj.psa_searchType=="support") {
                                var innerLink = jQuery(oTarget).find('a');
                                var this_url = oThis.geturl(jQuery(oTarget).children().attr("rel"));
                                var this_linktext = jQuery(oTarget).children().html();
                                oThis.addASResultMetrics('support_autosuggest',this_url,this_linktext, domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Product Support" );
                                oThis.recordSearch("action=dclick&search_type=autosuggest", domObject);
                                oThis.hideSuggestions( domObject );
                                jQuery("#"+domObject.psaPrefsObj.txtId).val("");
                                if(jQuery(innerLink[0]).attr('rel')){
                                    cdc.mru.makeMruRequest(innerLink[0]);
                                }
                                else{
                                    //redirect to the indicated product page
                                    window.location.href=this_url;
                               }

                            } else if(domObject.psaPrefsObj.psa_searchType == "download") {
                                //var this_url = oThis.geturl(oTarget.childNodes[0].getAttribute("rel"));
                                var this_linktext = oTarget.childNodes[0].childNodes[0].innerHTML;
                                var this_linkUrl = oThis.geturl(jQuery(oTarget).children().attr("rel"));
                                var childId=oTarget.childNodes[0].childNodes[0].id;

                                var agt=window.navigator.userAgent.toLowerCase();
                                if(agt.indexOf("msie")>-1) {
                                    if(this_linkUrl != "" && this_linkUrl != null) {
                                        oThis.addASResultMetrics('download_autosuggest',this_linkUrl,this_linktext,domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Download Software");
                                        if(this_linkUrl.toLowerCase().indexOf("tablebuild") > -1) {
                                            oThis.newWin = window.open(this_linkUrl,"newWindow",domObject.psaPrefsObj.newWin_Prop);
                                            if(window.focus) {
                                                if(oThis.newWin != null) {
                                                    oThis.newWin.focus();
                                                }
                                            }
                                        } else {
                                            window.location.href = this_linkUrl;
                                        }
                                    }
                                } else {
                                    
                                    if(this_linkUrl != "" && this_linkUrl != null) {
                                        oThis.addASResultMetrics('download_autosuggest',this_linkUrl,this_linktext, domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Download Software");
                                        if(this_linkUrl.toLowerCase().indexOf("tablebuild") > -1) {
                                            oThis.newWin = window.open(this_linkUrl,"newWindow",domObject.psaPrefsObj.newWin_Prop);
                                            if(window.focus) {
                                                if(oThis.newWin != null) {
                                                    oThis.newWin.focus();
                                                }
                                            }
                                        } else {
                                            window.location.href = this_linkUrl;
                                            //jQuery("#"+childId).click();
                                        }
                                    }
                                }
                                
                                if(!oThis.isSHP || !oThis.isMobile){
                                    oThis.hideSuggestions(domObject);
                                }
                                jQuery("#"+domObject.psaPrefsObj.txtId).val("");
                            }// download
                        } else { // on scrollbar?  indexof(current)
                            oEvent.cancelBubble = true ;
                        }
                    } else if (oEvent.type == "mouseover") {
                        oThis.highlightSuggestion(oTarget);
                    } else {
                        jQuery("#"+"#"+domObject.psaPrefsObj.txtId).focus();
                    }
                }); // end jquery Evnets
                
                if(oThis.isSHP){
                    jQuery("#"+domObject.psaPrefsObj.frmId+" .suggestionBox" ).show().append(jQuery(oThis.layer));
                }else{
                    jQuery("#"+domObject.psaPrefsObj.frmId).show().append(jQuery(oThis.layer)); 
                }
            },  // end function createDropDown
            // Handles three keydown events.
            handleKeyDown : function (oEvent, domObject /*:Event*/) {
                var oThis = this;
                var oTarget = oEvent.target || oEvent.srcElement;
                oTarget = oTarget.parentNode;
                switch(oEvent.keyCode) {
                    case 38:
                        //up arrow
                        this.previousSuggestion(domObject);
                        break;
                    case 40:
                        //down arrow
                        this.nextSuggestion(domObject);
                        break;
                    case 13:
                        //enter
                        // this will fire when the user presses enter to submit
                        //  the search form or when an autosuggestion is highlighted                                                

                        if (this.cur > -1) { // something is highlighted

                                
                            if(domObject.psaPrefsObj.psa_searchType == "support") {
                                var url = oThis.geturl(jQuery(oThis.layer).children(".ascurrent").children().attr("rel"));
                                var innerLink = jQuery(oThis.layer).find('.ascurrent .psindent a');
                                oThis.addASResultMetrics('support_autosuggest_enter',"", "",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Product Support");
                                oThis.hideSuggestions(domObject);
                                jQuery( "#" + domObject.psaPrefsObj.txtId).val("");
                                if(jQuery(innerLink).attr('rel')){
                                    cdc.mru.makeMruRequest(innerLink[0]);
                                }
                                else{
                                    // redirect to indicated product page
                                    window.parent.location.href=url;
                                }
                            } else if(domObject.psaPrefsObj.psa_searchType == "download") {
                                

                                oThis.addASResultMetrics('download_autosuggest_enter',"","", domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Download Software");
                                oThis.hideSuggestions(domObject);
                                jQuery("#"+domObject.psaPrefsObj.txtId).val();
                              
                            }
                        } else { // user is submitting form
                            oThis.hideSuggestions(domObject);
                            if(domObject.psaPrefsObj.psa_searchType == "support") {
                                var phrase = jQuery('#'+domObject.psaPrefsObj.txtId).val();
                                // normalize input and redirect to search results
                                this.validateInput( jQuery('#'+domObject.psaPrefsObj.txtId).val());
                                var searching = encodeURIComponent(jQuery('#'+domObject.psaPrefsObj.txtId).val());
                                var searchUrl = jQuery("#"+domObject.psaPrefsObj.frmId).attr('action') + "?q=" + searching + "&task=" + domObject.psaPrefsObj.psa_autosuggest_task_name;
                                oThis.addASResultMetrics('support_enter',searchUrl, "support find",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Product Search");
                                window.parent.location.href = searchUrl;
                                
                            } else if(domObject.psaPrefsObj.psa_searchType == "download") {
                                var phrase = jQuery('#'+domObject.psaPrefsObj.txtId).val();
                               
                                if(oThis.isSHP){
                                    if(phrase!=""){
                                        var searching = encodeURIComponent(jQuery('#'+domObject.psaPrefsObj.txtId).val());
                                        var searchUrl = jQuery("#"+domObject.psaPrefsObj.frmId).attr('action') + "?q=" + searching + "&task=default&psaMode=AP";                                
                                        oThis.addASResultMetrics('download_enter',searchUrl, "download find",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Download Search");
                                        jQuery("#"+domObject.psaPrefsObj.frmId).submit();
                                    }else{
                                        oEvent.preventDefault();
                                        return false;
                                    }
                                }else{
                                    var searching = encodeURIComponent(jQuery('#'+domObject.psaPrefsObj.txtId).val());
                                    var searchUrl = jQuery("#"+domObject.psaPrefsObj.frmId).attr('action') + "?q=" + searching + "&task=default&psaMode=AP";                                
                                    oThis.addASResultMetrics('download_enter',searchUrl, "download find",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "Download Search");
                                    jQuery("#"+domObject.psaPrefsObj.frmId).submit();
                                }
                            }
                        }
                }
            },  // end function handlKeyDown
            getLeft : function (oNode) {
                var iLeft = 0;
                while(oNode.tagName != "BODY") {
                    iLeft += oNode.offsetLeft;
                    oNode = oNode.offsetParent;
                }
                return iLeft;
            },
            getTop : function (oNode) {
                var iTop = 0;
                while(oNode.tagName != "BODY") {
                    iTop += oNode.offsetTop;
                    oNode = oNode.offsetParent;
                }
                return iTop;
            },
            // Handles keyup events.
            handleKeyUp : function (oEvent, domObject /*:Event*/) {
                oThis = this;
                var iKeyCode = oEvent.keyCode;
                //txtobj =  jQuery('#'+this.textbox);
                //oThis.userinput = jQuery('#'+domObject.psaPrefsObj.txtId).val();
                //for backspace (8) and delete (46), shows suggestions without typeahead
                if (iKeyCode == 8 || iKeyCode == 46) {
                    jQuery('#'+domObject.psaPrefsObj.txtId).attr("title", oThis.userinput);
                    oThis.requestSuggestions(oThis, false, domObject);
                    //make sure not to interfere with non-character keys
                } else if (iKeyCode < 32 || (iKeyCode >= 33 && iKeyCode < 46) || (iKeyCode >= 112 && iKeyCode <= 123)) {
                    //ignore
                } else {
                    //request suggestions from the suggestion provider with typeahead
                    oThis.userinput = jQuery('#'+domObject.psaPrefsObj.txtId).val();
                    jQuery('#'+domObject.psaPrefsObj.txtId).attr("title", oThis.userinput);
                    oThis.requestSuggestions(oThis, true, domObject);
                }
            },
            // Hides the suggestion dropdown.
            hideSuggestions : function (domObject) {

                oThis = this;
                if (oThis.layer != null) {
                    if (oThis.layer.childNodes) {
                        while (oThis.layer.childNodes.length > 0) {
                            oThis.layer.removeChild(oThis.layer.firstChild);
                        }
                    }

                    jQuery(oThis.layer).remove();
                    oThis.layer = null;
                    //oThis.cur = -1;
                    
                     if(oThis.isSHP){
                         jQuery(".suggestionBox" ).hide();
                     }
                }

            },
            // Highlights the given node in the suggestions dropdown.
            highlightSuggestion : function (oSuggestionNode) {
                for (var i=0; i < jQuery(oThis.layer).children().length; i++) {
                    var oNode = jQuery(oThis.layer).children()[i];
                    if (oNode == oSuggestionNode) {
                       if(!oThis.isSHP){
                            oNode.className = "ascurrent";
                            oThis.cur = i;
                        }else{
                            if(!jQuery(oNode).hasClass("alldownloads-zero")){
                                oNode.className = "ascurrent";
                                oThis.cur = i;
                            }
                        }
                    } else {
                        if(!oThis.isSHP){
                            oNode.className = "";
                        }else{
                             if(!jQuery(oNode).hasClass("alldownloads-zero")){
                              oNode.className = "";
                             }  
                        }
                    }
                }
            },
            // Highlights the next suggestion in the dropdown and places the
            // suggestion into the textbox.
            nextSuggestion : function (domObject) {
                var cSuggestionNodes = jQuery(oThis.layer).children();
                if (cSuggestionNodes.length > 0 && oThis.cur < cSuggestionNodes.length-1) {
                    var oNode = cSuggestionNodes[++oThis.cur];
                    oThis.highlightSuggestion(oNode);
                    jQuery('#'+domObject.psaPrefsObj.txtId).val(this.suggestions[this.cur].name);
                    if((oNode.offsetTop+oNode.offsetHeight) > oNode.offsetParent.offsetHeight) {
                        oNode.scrollIntoView(false);
                    }
                }
            },
            // Highlights the previous suggestion in the dropdown and
            //    places the suggestion into the textbox.
            previousSuggestion : function (domObject) {
               var cSuggestionNodes = jQuery(oThis.layer).children();
                if (this.cur == 0) {
                    var oNode = cSuggestionNodes[this.cur--];
                    oNode.className = "";
                    jQuery('#'+domObject.psaPrefsObj.txtId).val(this.userinput);
                    //console.log( this.userinput);
                    //jQuery('#'+domObject.psaPrefsObj.txtId).attr("title", this.userinput);
                } else {
                    if (cSuggestionNodes.length > 0 && this.cur > 0) {
                        var oNode = cSuggestionNodes[--this.cur];
                        this.highlightSuggestion(oNode);

                        jQuery('#'+domObject.psaPrefsObj.txtId).val(this.suggestions[this.cur].name);
                        //jQuery('#'+domObject.psaPrefsObj.txtId).attr("title", this.suggestions[this.cur].name);

                        if(oNode.offsetTop < oNode.offsetParent.scrollTop) {
                            //oNode.scrollIntoView(true);
                            oNode.offsetParent.scrollTop = oNode.offsetTop;
                        }
                    }
                }

            },
            // Selects a range of text in the textbox.
            selectRange : function (iStart /*:int*/, iLength /*:int*/) {
                //use text ranges for Internet Explorer
                if (this.textbox.createTextRange) {
                    var oRange = this.textbox.createTextRange();
                    oRange.moveStart("character", iStart);
                    oRange.moveEnd("character", iLength - this.textbox.value.length);
                    oRange.select();

                    //use setSelectionRange() for Mozilla
                } else if (this.textbox.setSelectionRange) {
                    this.textbox.setSelectionRange(iStart, iLength);
                }

                //set focus back to the textbox
                this.textbox.focus();
            },
            // Builds the suggestion layer contents, moves it into position,
            //    and displays the layer.
            showSuggestions : function (aSuggestions, domObject ) {

                if (this.layer != null) {
                    this.hideSuggestions( domObject );
                }
                //   moved call to createDropDown to here from init()
                this.createDropDown( domObject );
                var oDiv = null;
                var oDiv2 = null;
                var oDiv3 = null;

                for (var i=0; (i < aSuggestions.length) && (i<10) ; i++) {
                    oDiv  = jQuery("<div></div>");
                    oDiv2  = "<div class='psindent' rel='"+aSuggestions[i].url+"'><a href='"+aSuggestions[i].url+"' rel='&amp;task=default&amp;nodeId="+aSuggestions[i].nodeId+"&amp;type=product&amp;locale="+domObject.psaPrefsObj.psa_autosuggest_languagecode+"'></a>"+aSuggestions[i].display+"</div>";

                    jQuery(oDiv).append(oDiv2);
                    jQuery(this.layer).append(oDiv);
                    
                }
                //console.log(aSuggestions);
                var layerHeight = jQuery(this.layer).height();
                jQuery(this.layer).css({
                    marginLeft: "0",
                    marginTop : "-1px",
                    visibility: "visible",
                    height: layerHeight
                });

                if (aSuggestions.length < 10) { /* ck b537 */
                    jQuery(this.layer).css({
                        overflow:"hidden"
                    });
                } else {
                    jQuery(this.layer).css({
                        overflow:"auto"
                    });
                }
                //
                for (var i=10; i < aSuggestions.length ; i++) {
                    oDiv  = jQuery("<div></div>");
                    oDiv2  = "<div class='psindent' rel='"+aSuggestions[i].url+"'>"+aSuggestions[i].display+"</div>";
                    jQuery(oDiv).append(oDiv2);
                    jQuery(this.layer).append(oDiv);
                }
                
                if( oThis.isSHP && aSuggestions.length==1 && aSuggestions[0].name=="There are no products that match your entry"){
                    var zeroDiv="<div class='alldownloads-zero'><a href='http://software.cisco.com/download/navigator.html'>All Downloads</a></div>";
                    jQuery(this.layer).css("height","auto");
                    jQuery(this.layer).append(zeroDiv);
                }
            },
            // Inserts a suggestion into the textbox, highlighting the
            //     suggested part of the text.
            typeAhead : function (sSuggestion ) {

                //check for support of typeahead functionality
                if (this.textbox.createTextRange || this.textbox.setSelectionRange) {
                    var iLen = this.textbox.value.length;
                    this.textbox.value = sSuggestion;
                    this.selectRange(iLen, s2Suggestion.length);
                }
            },
            showDownloadTypeahead : function(response,obj,  domObject) {    
            var searchString=jQuery('#'+domObject.psaPrefsObj.txtId).val();
                oThis = this;
                this.responseIncr ++;
                if(this.requestIncr == this.responseIncr) {
                    if(response.sns_response.success=="true") {
                        this.suggestions = [];
                        if(response.sns_response.autosuggestlist.length < 1) {
                            oThis.addASResultMetrics('result_click'," ", "",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "download_zero");
                            var errSuggestionZero = new Object;
                            errSuggestionZero.name=domObject.psaPrefsObj.autosuggest_zero_results_error_message;
                            errSuggestionZero.display=domObject.psaPrefsObj.autosuggest_zero_results_error_message;
                            errSuggestionZero.url="";
                            
                            this.suggestions.push(errSuggestionZero);
                        } else if(response.sns_response.autosuggestlist.length < domObject.psaPrefsObj.autosuggest_max_results_count) {
                            for (var i = 0; i<response.sns_response.autosuggestlist.length; i++) {
                                var suggestion = new Object;
                                suggestion.name=response.sns_response.autosuggestlist[i].title;
                                suggestion.display=response.sns_response.autosuggestlist[i].title;
                                 
                                if(oThis.isSHP){
                                    // splitting the search sentance into words so that we can highlight the words in any order
                                    var searchWordsAr=searchString.split(" ");
                                    // iterating through each word from search string
                                    for(var wordCnt=0; wordCnt<searchWordsAr.length;wordCnt++){
                                        var word=searchWordsAr[wordCnt];
                                        // ignoring empty words
                                        if(word.length>0){
                                            // finding all the occurances and making them bold
                                           suggestion.display=suggestion.display.replace(new RegExp('(^|\)(' +word+ ')(\|$)','ig'), '$1<b>$2</b>$3'); 
                                         }
                                    } 
                                }
                                suggestion.url=response.sns_response.autosuggestlist[i].url;
                                this.suggestions.push(suggestion);
                            }
                        } else {
                            oThis.addASResultMetrics('result_click'," ", "",domObject.psaPrefsObj.psa_autosuggest_metrics_lpos, domObject.psaPrefsObj.psa_autosuggest_metrics_lid, "download_maxresults");
                            var errSuggestionMax = new Object;
                            errSuggestionMax.name=domObject.psaPrefsObj.autosuggest_max_results_error_message;
                            errSuggestionMax.display=domObject.psaPrefsObj.autosuggest_max_results_error_message;
                            errSuggestionMax.url="";
                            this.suggestions.push(errSuggestionMax);
                        }

                    } else {
                        this.suggestions = [];
                        var errSuggestionFalse = new Object;
                        errSuggestionFalse.name=domObject.psaPrefsObj.autosuggest_zero_results_error_message;
                        errSuggestionFalse.display=domObject.psaPrefsObj.autosuggest_zero_results_error_message;
                        errSuggestionFalse.url="";
                        this.suggestions.push(errSuggestionFalse);
                    }
                    oThis.autosuggest(this.suggestions,false, domObject);
                    this.requestIncr=0;
                    this.responseIncr=0;
                }
            },
            AsRedirectPage : function(linkUrl) {
                if(linkUrl != "" && linkUrl != null) {
                    if(linkUrl.toLowerCase().indexOf("tablebuild") >= 0) {
                        window.open(linkUrl,'newWindow',domObject.psaPrefsObj.newWin_Prop);
                    } else {
                        window.location.href = linkUrl;
                    }
                }
            },
           addASResultMetrics : function(action,link,linktext,lpos, lid, task) {


                var metricsObj = {
                    ntpagetag: {sensors:['cisco-tags.cisco.com/tag/ntpagetag.gif']},
                    'searchPhrase'    : this.userinput,
                    'lpos'        : lpos,
                    'lid'         : lid,
                    'task'        : task,   
                    'link'     : link,
                    'linktext'    : linktext,
                    'action'      : action,
                    'search_type' : "autosuggest"
                };
                
                if (typeof this.suggestions[this.cur] != "undefined") {
                    metricsObj.link     = this.suggestions[this.cur].url;
                    metricsObj.linktext    = this.suggestions[this.cur].display;
                }

                if (task == "Product Search" || task == "Download Search"){
                    metricsObj.search_type = "user";
                }
                //Login Status

                cdc.util.checkLogin(function (val) {
                    if (val=="valid") {
                        metricsObj.loggedIn    ="Yes";
                        metricsObj.status      ="LoggedIn";
                    } else {
                        metricsObj.loggedIn    ="No";
                        metricsObj.status      ="Anonymous";
                        metricsObj.entitlement ="Anonymous";
                    }
                });
                trackEvent.event("link", metricsObj);
            },
            showSupportTypeahead : function(response, domObject) {
                oThis = this;
                if(response.SearchResult.status=="SUCCESS") {
                    oThis.suggestions = [];
                    for (var i = 0; i<response.SearchResult.results.length; i++) {
                        var suggestion = new Object;
                        suggestion.name=response.SearchResult.results[i].title;
                        suggestion.display=response.SearchResult.results[i].title;
                        suggestion.url=response.SearchResult.results[i].url;
                        suggestion.nodeId=response.SearchResult.results[i].nodeId
                        oThis.suggestions.push(suggestion);
                        //console.log(response.SearchResult.results[i]);
                    }
                }
                //console.log( oThis.suggestions );
                oThis.autosuggest(oThis.suggestions,false, domObject);
            },
            validateInput : function(txtBox) {
                
                //var i = jQuery('#'+txtBox).val();
                var i =  txtBox;
                i = i.replace(/<|>|&lt;|&gt;/g,"");
                i = i.replace(/'/g,"&#39;");
                i = i.replace(/"/g,"&#34;");
                
                
            }
            //?????
        }  // end return
    }   // function end  AutoSuggestControl
}; // end  cdc.cl.typeahead
//  #######################  CALLING THE JS #######################
jQuery(document).ready( function() {
   
    jQuery(".typeaheadCommon").each( function(i) {
        // set to the prfObj that was set in form  by  user...
        if(document.getElementById(this.id)){
            var obj =  document.getElementById(this.id);
        }
        if( typeof obj  != "undefined" && typeof obj.psaPrefsObj != "undefined"  ) {
            // for form, and elements of the form ids/names
            var frmId = this.id;
            var txtId = jQuery("input:text", this).attr("id");
            var btnId = jQuery("input:submit", this).attr("id");

            if ( typeof frmId == "undefined" || typeof txtId == "undefined" || typeof btnId =="undefined"  ) {
                //throw new Error("Missing Form Elements");
                //console.log("Missing Form Elements");
            }

            if (typeof obj.functions == "undefined") {
                obj.functions = new cdc.cl.typeahead.AutoSuggestControl();
                obj.functions.init(frmId, txtId, btnId, obj.psaPrefsObj, obj);
            }   // end  checking of UIfunctions defined or not ??
        }else{ // Checking Whether we have userPrefObj set for the form or not ??
            //console.log("psa has no psaPrefsObj for form ID ...."+ this.id);
        }   
    }); // END : FORM.EACH CONDITION
}); // document.ready