/**
 * Google Analytics Tag Manager (V2) custom HTML tag for YouTube video
 * tracking
 *
 * Copyright 2015, Cardinal Path, Inc.
 *
 * Original author: Stephane Hamel <shamel@cardinalpath.com>
 * Revised by: Nicky Yuen <nyuen@cardinalpath.com>
 *
 * Version 1.0
 */

// Enable JSAPI if it's not already on the URL
// note: this will cause the Youtube player to "flash" on the page when reloading to enable the JS API
for (var e = document.getElementsByTagName("iframe"), x = e.length; x--;)
  if (/youtube.com\/embed/.test(e[x].src))
     if(e[x].src.indexOf('enablejsapi=') === -1)
        e[x].src += (e[x].src.indexOf('?') ===-1 ? '?':'&') + 'enablejsapi=1';

// support multiple players on the same page
var gtmYTPlayers = [];

/**
 * Attaches listener once the YouTube API is loaded	
**/
function onYouTubeIframeAPIReady() {
  for (var e = document.getElementsByTagName("iframe"), x = e.length; x--;) {
      if (/youtube.com\/embed/.test(e[x].src)) {
          gtmYTPlayers.push(new YT.Player(e[x], {
              events: {
                  onStateChange: onPlayerStateChange,
                  onError: onPlayerError
              }
          }));
          YT.gtmLastAction = "p";
      }
  }
}

/**
 * Listen for play/pause. Other states such as rewind and end could also be added
   * Also report % played every second
 * @param e - event
**/
  function onPlayerStateChange(e) {
      e["data"] == YT.PlayerState.PLAYING && setTimeout(onPlayerPercent, 1000, e["target"]);
      var video_data = e.target["getVideoData"](),
          label = video_data.video_id + ':' + video_data.title;
      if (e["data"] == YT.PlayerState.PLAYING && YT.gtmLastAction == "p") {
          dataLayer.push({
              event: 'youtube',
              eventCategory: 'youtube',
      eventAction: 'play',
              eventLabel: label
          });
          YT.gtmLastAction = "";
      }
      if (e["data"] == YT.PlayerState.PAUSED) {
          dataLayer.push({
              event: 'youtube',
              eventCategory: 'youtube',
      eventAction: 'pause',
              eventLabel: label
          });
          YT.gtmLastAction = "p";
      }
  }

/**
 * Catch all to report errors through the GTM data layer. once the error is exposed to GTM, it can be tracked in UA as an event!
 * Refer to https://developers.google.com/youtube/js_api_reference#Events onError
 * @param: e (event)
**/

  function onPlayerError(e) {
      dataLayer.push({
          event: 'error',
    eventCategory: 'youtube',
    eventAction: 'play',
          eventLabel: 'youtube: ' + e
      })
  }

/**
 * Report the % played if it matches 0%, 25%, 50%, 75%, 90% or completed
 * @param: e (event)
**/
  function onPlayerPercent(e) {
      if (e["getPlayerState"]() == YT.PlayerState.PLAYING) {
          //var t = e["getDuration"]() - e["getCurrentTime"]() <= 1.5 ? 1 : (Math.floor(e["getCurrentTime"]() / e["getDuration"]() * 4) / 4).toFixed(2);

          // Set the played duration to every tenth because we'll need to also capture 90% played.
          var t = e["getDuration"]() - e["getCurrentTime"]() <= 1.5 ? 1 : (Math.floor(e["getCurrentTime"]() / e["getDuration"]() * 10) / 10).toFixed(2);

          if (parseFloat(t) < 0.25) {
              t = 0.00;
          }
          else if (parseFloat(t) < 0.5){
              t = 0.25;
          }
          else if (parseFloat(t) < 0.75){
              t = 0.50;
          }
          else if (parseFloat(t) < 0.9){
              t = 0.75;
          }
          else if (parseFloat(t) < 1){
              t = 0.90;
          }
          // duration t needs to be fixed to 2 decimal places
          t = t.toFixed(2);

          if (!e["lastP"] || t > e["lastP"]) {
              var video_data = e["getVideoData"](),
                  label = video_data.video_id + ':' + video_data.title;
              e["lastP"] = t;
              dataLayer.push({
                  event: "youtube",
                  eventCategory: 'youtube',
                  eventAction: t * 100 + "%",
                  eventLabel: label
              })
          }
          e["lastP"] != 1 && setTimeout(onPlayerPercent, 1000, e);
      }
  }

/**
 * Add unload event listener
**/
window.addEventListener('beforeunload', function(e){
  for (var i = 0; i < gtmYTPlayers.length; i++){
    if (gtmYTPlayers[i].getPlayerState() === 1) { // playing
      var video_data = gtmYTPlayers[i]['getVideoData'](),
      label = video_data.video_id + ':' + video_data.title;

      dataLayer.push({
        event: 'youtube',
        eventCategory: 'youtube',
        eventAction: 'exit',
        eventLabel: label
      });
    }
  }
})

// load the Youtube JS api and get going
  var j = document.createElement("script"),
      f = document.getElementsByTagName("script")[0];
  j.src = "//www.youtube.com/iframe_api";
  j.async = true;
  f.parentNode.insertBefore(j, f);
;
function push_data(element) {
  // Get file name.
  var url = element.target.href;
  var path_parts = url.split('/');
  var last_path_part = path_parts.pop();
  // Ensure there's a period in the filename.
  if (last_path_part.indexOf('.') <= 0) {
    return;
  }
  var last_path_part_pieces = last_path_part.split('.')
  // Ensure the period wasn't just at the beginning or end.
  if (last_path_part_pieces.length <= 1) {
    return;
  }
  var ext = last_path_part_pieces.pop();
  var filename = last_path_part_pieces.join('.')
  // User clicked on a file. Push values to GTM if proper extension.

  var pattern = /(c|cpp|doc|gif|gz|jpeg|jpg|log|pdf|png|rar|svg|tar|tgz|txt|zip)$/i;
  if (pattern.test(ext)) {
    dataLayer.push({
      'event': 'gtm.click',
      'fileName': filename,
      'fileType': ext,
    });
  }
}

a_tags = document.getElementsByTagName('a');

for (var i = a_tags.length - 1; i >= 0; --i) {
  a_tags[i].onclick = push_data;
}
;
