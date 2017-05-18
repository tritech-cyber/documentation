    jQuery(document).ready(function() {
        function altLinkOn() {
            jQuery("#all-cat-link").hide();
            jQuery("#topCategory .top-categories-list").hide();
            jQuery("#topCategory  .section-title").hide();
            jQuery("#all-cat-wrapper  .section-title").show();
            jQuery("#all-cat-wrapper").show();
        }
        function altLinkOff() {
            jQuery("#all-cat-link").show();
            jQuery("#topCategory .top-categories-list").show();        
            jQuery("#topCategory  .section-title").show();
            jQuery("#all-cat-wrapper").hide();
        }
        /* only run on polydor pages */
        jQuery(".cdc-support-model #all-cat-link").on("click",function(){altLinkOn()});
        jQuery(".cdc-support-model #all-cat-wrapper .restore-top-categories button").on("click",function(){altLinkOff()});
    });
