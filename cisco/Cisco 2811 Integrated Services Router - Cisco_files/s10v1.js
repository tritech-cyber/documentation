/*
 * s10v1.js: code for Social Media plugin
 *
 * $Revision: 1.5 $
 *
 * (c) 1992-2011 Cisco Systems, Inc. All rights reserved.
 * Terms and Conditions: http://cisco.com/en/US/swassets/sw293/sitewide_important_notices.html
 */
ID_define(
  ['/etc/designs/cdc/fw/w/cl/s10/s10v1.js'] ,
    function () {

    cdc.util.ensureNamespace('cdc.cl');
    cdc.cl.s10v1 = {
    	sbt_init_tries : 0,
    	sbt_hasOpened : false, // only log first opening for metrics

    	generateSMLinks : function(scope) {
    		var vlc = 0;
    		// needed to prevent logging of mousedowns
    		// var sbt_hasOpened = false; // only log first opening for metrics
    		if (contenttype == "undefined")
    			var contenttype = "";
    		if (contentgroup == "undefined")
    			var contentgroup = "";
    		var sbt_location = encodeURIComponent(location.href);
    		var sbt_title = encodeURIComponent(document.title);
    		if (jQuery(scope).find('#socMedLink1').attr('data-shareURL') != undefined && jQuery(scope).find('#socMedLink1').attr('data-shareURL') != "") {
    			sbt_location = jQuery(scope).find('#socMedLink1').attr('data-shareURL');
    		}
    		/* by default sbt_location is getting location.href
    		 else{

    		 sbt_location = encodeURIComponent(location.href);
    		 }*/
    		var sbt_yahoo = {
    			"url" : "http://bookmarks.yahoo.com/toolbar/savebm?u=" + sbt_location + "&t=" + sbt_title + "&ei=UTF-8",
    			"text" : "My Yahoo",
    			"style" : "sbt-myyahoo",
    			"action" : "click-myyahoo"
    		};
    		var sbt_delicious = {
    			"url" : "http://del.icio.us/post?v=3&url=" + sbt_location + "&title=" + sbt_title,
    			"text" : "Del.icio.us",
    			"style" : "sbt-delicious",
    			"action" : "click-delicious"
    		};
    		var sbt_digg = {
    			"url" : "http://digg.com/submit?phase=2&url=" + sbt_location + "&title=" + sbt_title + "&text=description&topic=tech_news",
    			"text" : "Digg It",
    			"style" : "sbt-digg",
    			"action" : "click-digg"
    		};
    		var sbt_technorati = {
    			"url" : "http://technorati.com/faves?sub=favthis&add=" + sbt_location,
    			"text" : "Technorati",
    			"style" : "sbt-technorati",
    			"action" : "click-technorati"
    		};
    		var sbt_facebook = {
    			"url" : "http://www.facebook.com/sharer.php?u=" + sbt_location + "&t=" + sbt_title,
    			"text" : "Facebook",
    			"style" : "sbt-facebook",
    			"action" : "click-facebook"
    		};
    		var sbt_twitter = {
    			"url" : "http://twitter.com/share?url=" + sbt_location + "&text=" + sbt_title,
    			"text" : "Twitter",
    			"style" : "sbt-twitter",
    			"action" : "click-twitter"
    		};
    		var sbt_linkedin = {
    			"url" : "http://www.linkedin.com/shareArticle?mini=true&url=" + sbt_location + "&title=" + sbt_title,
    			"text" : "LinkedIn",
    			"style" : "sbt-linkedin",
    			"action" : "click-linkedin"
    		};
    		var sbt_email = {
    			"url" : "mailto:someone@example.com?Subject=Hello%20again",
    			"text" : "Email",
    			"style" : "sbt-email",
    			"action" : "click-email"
    		};
    		var sbt_googleplus = {
    			"url" : "https://plus.google.com/share?url=" + sbt_location,
    			"text" : "Google+",
    			"style" : "sbt-googleplus",
    			"action" : "click-googleplus"
    		};
    		var sbt_links = [];
    		//var  = true;
    		var linkedIn = faceBook = twitter = yahoo = delicious = "true";
    		var diggit = technorati = emailData = googleplus = "false";
    		var emailSub, emailBody;
    		var myBox = document.getElementById('s10v1');
    		var socMedLink = jQuery(scope).find('#socMedLink1', '#s10v1');
    		if (socMedLink.attr('data-shareURL') != undefined || socMedLink.attr('data-shareURL') != "") {
    			contentconfig = socMedLink.attr('data-shareURL');
    		}
    		if (socMedLink.attr('data-vs_contenttype') != undefined) {
    			contenttype = socMedLink.attr('data-vs_contenttype');
    		}
    		if (socMedLink.attr('data-vs_contentgroup') != undefined) {
    			contentgroup = socMedLink.attr('data-vs_contentgroup');
    		}
    		if (socMedLink.attr('data-linkedin') != undefined) {
    			linkedIn = socMedLink.attr('data-linkedin');
    		}
    		if (socMedLink.attr('data-facebook') != undefined) {
    			faceBook = socMedLink.attr('data-facebook');
    		}
    		if (socMedLink.attr('data-yahoo') != undefined) {
    			yahoo = socMedLink.attr('data-yahoo');
    		}
    		if (socMedLink.attr('data-twitter') != undefined) {
    			twitter = socMedLink.attr('data-twitter');
    		}
    		if (socMedLink.attr('data-technorati') != undefined) {
    			technorati = socMedLink.attr('data-technorati');
    		}
    		if (socMedLink.attr('data-diggit') != undefined) {
    			diggit = socMedLink.attr('data-diggit');
    		}
    		if (socMedLink.attr('data-delicious') != undefined) {
    			delicious = socMedLink.attr('data-delicious');
    		}
    		if (socMedLink.attr('data-googleplus') != undefined) {
    			googleplus = socMedLink.attr('data-googleplus');
    		}
    		if (socMedLink.attr('data-email') != undefined) {
    			emailData = socMedLink.attr('data-email');
    		}
    		if (socMedLink.attr('data-email-subject') != undefined) {
    			emailSub = socMedLink.attr('data-email-subject');
    		}
    		if (socMedLink.attr('data-email-body') != undefined) {
    			emailBody = socMedLink.attr('data-email-body');
    		}
    		if (emailData == "true") {
    			sbt_links.splice(0, 0, sbt_email);
    		}
    		if (technorati == "true") {
    			sbt_links.splice(0, 0, sbt_technorati);
    		}
    		if (diggit == "true") {
    			sbt_links.splice(0, 0, sbt_digg);
    		}
    		if (delicious == "true") {
    			sbt_links.splice(0, 0, sbt_delicious);
    		}
    		if (yahoo == "true") {
    			sbt_links.splice(0, 0, sbt_yahoo);
    		}
    		if (linkedIn == "true") {
    			sbt_links.splice(0, 0, sbt_linkedin);
    		}
    		if (faceBook == "true") {
    			sbt_links.splice(0, 0, sbt_facebook);
    		}
    		if (twitter == "true") {
    			sbt_links.splice(0, 0, sbt_twitter);
    		}
    		if (googleplus == "true") {
    			sbt_links.splice(0, 0, sbt_googleplus);
    		}
    		var linkList = document.createElement('ul');
    		linkList.setAttribute('class', 'share');
    		var locationURL = encodeURIComponent(window.location);
    		var SubjectContent = emailSub;
    		var bodyContent = emailBody + "%0D%0A" + locationURL;
    		//ascii char for carriage return, URL encoded
    		for ( i = 0; i < sbt_links.length; i++) {
    			var thisItem = document.createElement('li');
    			thisItem.setAttribute('id', sbt_links[i].style);
    			var thisLink = document.createElement('a');
    			if (thisItem.id == 'sbt-email') {
    				thisLink.setAttribute('href', "mailto:?subject=" + SubjectContent + "&body=" + bodyContent);
    			} else {
                    thisLink.setAttribute('href', 'javascript:void cdc.util.openCdcPopup(\' '+ sbt_links[i].url+'\' );');
    			}
    			function vs_pageview() {
    			}
    			function doMetrics() {
    				var myAction = sbt_links[i].action;
    				return function() {
    					vs_pageview('social-bookmarking-toolbar', contentgroup, 'popup', contenttype, myAction);
    				}
    			}
    			thisLink.onclick = doMetrics();
    			thisItem.appendChild(thisLink);
    			linkList.appendChild(thisItem);
    		}
    		document.getElementById('s10v1').appendChild(linkList);
    	}
    };

    return {
      init: function(scope) {
        if ( typeof (jQuery) == 'undefined') {
          if (cdc.cl.s10v1.sbt_init_tries < 100) {
            cdc.cl.s10v1.sbt_init_tries++;

            setTimeout(function (scope) {
              cdc.cl.s10v1.init(scope)
            }, 100);

          } // else just don't show it
        } else {
          cdc.cl.s10v1.generateSMLinks(scope);
        }
      }
    }
  }
);
