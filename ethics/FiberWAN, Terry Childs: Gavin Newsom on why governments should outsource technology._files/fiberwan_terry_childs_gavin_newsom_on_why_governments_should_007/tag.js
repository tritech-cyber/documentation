(function(w, d, s) {
  try {
    d = w.top.document || d; w = w.top.document ? w.top : w;
  } catch (e) {}
  var ttag = function() {
    var _tt_wrapper = frameElement.parentNode.parentNode.parentNode;
var _tt_slots = _tt_wrapper.querySelectorAll('.content .newbody.body > .text, [itemprop="articleBody"] > p');
    var _tt_wrapper = frameElement.parentNode.parentNode.parentNode;
var _tt_slots = _tt_wrapper.querySelectorAll('.content .newbody.body > .text, [itemprop="articleBody"] > p');
        w.teads.page(56224).placement(61270, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"margin: 0px auto 30px; max-width: 550px;","format":"inread","slot":{"selector":_tt_slots,"minimum":1}}).serve();
    w.teads.page(56224).placement(78553, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"margin: 0px auto 30px; max-width: 550px;","format":"inread","slot":{"avoid":{"selector":".brightcovevideosingle.section, .about-the-author, .tablet-ad","distance":20},"selector":_tt_slots,"minimum":10}}).serve();
  };
  if (w.teads && w.teads.page) { ttag(); }
  else if (!w.teadsscript) {
    s.src = '//cdn.teads.tv/media/format/v3/teads-format.min.js';
    s.async = true; s.onload = ttag; w.teadsscript = d.getElementsByTagName('head')[0].appendChild(s);
  }
})(window, document, document.createElement('script'));