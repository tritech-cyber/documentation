window.optimizelyFunctions=window.optimizelyFunctions||{},optimizelyFunctions.disableIscroll=function(){requirejs(["config"],function(a){a.iscroll.disabled=!0})},optimizelyFunctions.disableIscrollBillboards=function(){requirejs(["storiespage"],function(a){a.insertBillboard=function(){}})},optimizelyFunctions.recircTest=function(a,b,c){var b=b||"Recommended",c=c||"Take me to Slate&#8217;s Homepage",a=a||1;requirejs(["jquery","config","storiespage","myslate"],function(d,e,f,g){e.iscroll.disabled=!0,d(".social .comments, .top-comment").on("touchend mouseenter",function(){d("#comments").removeClass("inline")});var h=4,i=[],j=function(a){d.ajax({type:"GET",url:g.getMySlateURL("contentapi/article/"+f.stories[a]),contentType:"application/json",data:{suppress_response_codes:!0,format:"jsonp"},dataType:"jsonp",success:function(b){var c={};c.index=a,c.absolute_url=b.absolute_url,c.menuline=b.menuline,d.each(b.body,function(){if("slate/components/slate_image"==this.component){var a=this.image_tag.src;a.indexOf("CROP")>=0&&(a=a.split("CROP")[0]+"CROP.promo-medium.jpg"),c.image_src=a,c.image_alt=this.image_tag.alt,c.image_title=this.image_tag.title}}),i.push(c),a<h?j(a+1):a===h&&l()},error:function(a){console&&console.log&&console.log(a.message)}})};f.stories.length<5?(f.getStoryList("28","14","trending",""),d(window).one("haveStoryList",function(){j(1)})):j(1);var k="",l=function(){k+='<style type="text/css">',k+=".page .main .recirc-test{ margin-top: 1em; } ",k+=".page .main .recirc-test a{ color: #281b21; } ",k+=".page .main .recirc-test a:hover{ color: #660033; } ",k+=".recirc-test__header{ font-family: sl-TitlingGothicFBCondensed, helvetica, sans-serif; font-size: 24px; } ",1===a?(k+=".recirc-test__item{ float: left; width: 266px; padding-right: 20px; padding-bottom: 20px; } ",k+=".recirc-test__item img{ display: block; width: 100%; } ",k+=".recirc-test__item p{ margin-top: 8px; margin-bottom: 0; } ",k+=".recirc-test__footer{ display: block; clear: left; font-family: sl-TitlingGothicFBCondensed, helvetica, sans-serif; font-weight: bold; } ",k+=".recirc-test__row{ clear: left; } "):2===a&&(k+=".recirc-test__item{ padding-bottom: 1em; border-bottom: 1px solid #e3e3e3; } ",k+=".recirc-test__item:last-child{ padding-bottom: 0; border-bottom: none; } "),k+="</style>",k+='<div class="recirc-test">',k+='<div class="recirc-test__header">'+b+"</div>",1===a&&(k+='<div class="recirc-test__row">'),d.each(i,function(){1===a?(k+='<div class="recirc-test__item">',k+='<a href="'+this.absolute_url+'"><img title="'+this.image_title+'" alt="'+this.image_alt+'" src="http://www.slate.com'+this.image_src+'" /></a>',k+='<p><a href="'+this.absolute_url+'">'+this.menuline+"</a></p>",k+="</div>",2==this.index&&(k+="</div>",k+='<div class="recirc-test__row">')):2===a&&(k+='<p class="recirc-test__item"><a href="'+this.absolute_url+'">'+this.menuline+"</a></p>",this.index==h&&(k+='<p class="recirc-test__item js-home-link"><a href="http://www.slate.com">'+c+"</a></p>"))}),1===a&&(k+="</div>",k+='<div class="recirc-test__footer js-home-link"><a href="http://www.slate.com">'+c+"</a></div>"),k+="</div>",d(k).insertBefore("#comments")}})},optimizelyFunctions.KickerLength1=function(){optimizely.$(".details__slateplusfooter").replaceWith('<div class="details details__slateplusfooter">\n          <div class="header">One more thing</div> \n  <p>Since Donald Trump entered the White House, <em><strong>Slate</strong></em> has stepped up our politics coverage—covering the administration’s immigration crackdown, the rollback of environmental protections, the efforts of the resistance, and more.</p> <p>If you think <em><strong>Slate</strong></em>’s work matters, become a <strong>Slate Plus</strong> member. You’ll get exclusive members-only content and a suite of great benefits—and you’ll help secure <em><strong>Slate</strong></em>’s future.</p>\n\n          <a href="https://my.slate.com/plus/?wpsrc=sp_all_article_kicker_politics" class="plus-btn">Join Slate Plus</a>\n        </div>')},optimizelyFunctions.KickerLength2=function(){optimizely.$(".details__slateplusfooter").replaceWith('<div class="details details__slateplusfooter">\n          <div class="header">One more thing</div> \n  <p>Since Donald Trump entered the White House, <em><strong>Slate</strong></em> has stepped up our politics coverage—covering the administration’s immigration crackdown, the rollback of environmental protections, the efforts of the resistance, and more. If you think <em><strong>Slate</strong></em>’s work matters, help secure <em><strong>Slate</strong></em>’s future by becoming a <strong>Slate Plus</strong> member.</p>\n\n          <a href="https://my.slate.com/plus/?wpsrc=sp_all_article_kicker_politics" class="plus-btn">Join Slate Plus</a>\n        </div>')},optimizelyFunctions.MessageVariant1=function(){optimizely.$("div.notification").replaceWith('<div class="notification"><a class="bottom-banner__close close" aria-label="Close">×</a>Trump hates the press. Do your part to support it: <a href="https://my.slate.com/plus?utm_medium=link&utm_campaign=plus_support&utm_content=press&utm_source=ribbon">Join Slate Plus today.</a></div>')},optimizelyFunctions.MessageVariant2=function(){optimizely.$("div.notification").replaceWith('<div class="notification"><a class="bottom-banner__close close" aria-label="Close">×</a><em><strong>Slate</strong></em> is made possible by the support of readers like you. <a href="https://my.slate.com/plus?utm_medium=link&utm_campaign=plus_support&utm_content=possible&utm_source=ribbon">Click here to do your part.</a></div>')},optimizelyFunctions.MessageVariant3=function(){optimizely.$("div.notification").replaceWith('<div class="notification"><a class="bottom-banner__close close" aria-label="Close">×</a>Overwhelmed and exhausted? <a href="https://my.slate.com/plus?utm_medium=link&utm_campaign=plus_support&utm_content=overwhelmed&utm_source=ribbon">Join Slate Plus as we try to make sense of each day’s insanity.</a></div>')},optimizelyFunctions.MessageVariant4=function(){optimizely.$("div.notification").replaceWith('<div class="notification"><a class="bottom-banner__close close" aria-label="Close">×</a>We watch Trump so you don’t have to. <a href="https://my.slate.com/plus?utm_medium=link&utm_campaign=plus_support&utm_content=watch&utm_source=ribbon">Support Slate today.</a></div>')},optimizelyFunctions.MessageVariant5=function(){optimizely.$("div.notification").replaceWith('<div class="notification"><a class="bottom-banner__close close" aria-label="Close">×</a> <a href="https://my.slate.com/plus?utm_medium=link&utm_campaign=plus_support&utm_content=tireless&utm_source=ribbon">Support our tireless, fearless, yet somehow fun-to-read coverage of Trump’s America.</a></div>')},optimizelyFunctions.MessageVariant6=function(){optimizely.$("div.notification").replaceWith('<div class="notification"><a class="bottom-banner__close close" aria-label="Close">×</a>This isn’t Trump’s America. It’s <em>our</em> America. <a href="https://my.slate.com/plus?utm_medium=link&utm_campaign=plus_support&utm_content=America&utm_source=ribbon">Join today.</a></div>')},optimizelyFunctions.greetingCompetencies=function(a){var b='<div class="header">Thanks for reading <strong<em>Slate</em></strong>!</div><p>Come back again soon or keep scrolling for the smartest ideas on news, politics, culture, technology and more.</p>';b+="newsletters"===a?'<a href="http://link.slate.com/join/3qk/newslettersignup" class="plus-btn">Check out our newsletters</a>':'<a href="http://www.slate.com" class="plus-btn">Explore Our Homepage</a>',optimizely.$(".js-slateplusfooterpromo .details__slateplusfooter").html(b)},optimizelyFunctions.greetingSimpleThanks=function(a){var b='<div class="header">Thanks for reading <strong<em>Slate</em></strong>!</div><p>Not bad, right?</p>';b+="newsletters"===a?'<a href="http://link.slate.com/join/3qk/newslettersignup" class="plus-btn">Check out our newsletters</a>':'<a href="http://www.slate.com" class="plus-btn">Explore Our Homepage</a>',optimizely.$(".js-slateplusfooterpromo .details__slateplusfooter").html(b)},optimizelyFunctions.greetingPersonal=function(a){var b='<div class="header">Welcome to <strong<em>Slate</em></strong>.</div><p>So glad you found us! Every day we give you the smartest ways to think about the world. Come back some time soon or keep scrolling for more.</p>';b+="newsletters"===a?'<a href="http://link.slate.com/join/3qk/newslettersignup" class="plus-btn">Check out our newsletters</a>':'<a href="http://www.slate.com" class="plus-btn">Explore Our Homepage</a>',optimizely.$(".js-slateplusfooterpromo .details__slateplusfooter").html(b)};