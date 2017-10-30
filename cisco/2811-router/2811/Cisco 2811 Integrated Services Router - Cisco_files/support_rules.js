/* 
 * Rules for Support Model Page Metrics
 * 
 * */

cdc.util.addMetricsRule('button', {onDemand:true});

cdc.util.addMetricsRule('#fw-breadcrumb a[href]',{
        onDemand:true,
        lpos:"model_breadcrumb",
        lid :"model_breadcrumb"
});

cdc.util.addMetricsRule('.support-birth-cert a[href], .support-birth-cert button',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate"
});

cdc.util.addMetricsRule('.support-birth-cert #priceAndBuyButton',{
        onDemand:true,
        linktext:"price & buy",
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate"
});

// rule for View All Pids button when pid-list panel is closed
cdc.util.addMetricsRule('.support-birth-cert button.panel-open',{
        onDemand:true,
        lpos:"model_birth_certificate_view_all_pid",
        lid :"model_birth_certificate_view_all_pid_open"
});

//rule for View All Pids button when pid-list panel is open
cdc.util.addMetricsRule('.support-birth-cert button.panel-close',{
        onDemand:true,
        lpos:"model_birth_certificate_view_all_pid",
        lid :"model_birth_certificate_view_all_pid_close"
});

// rule for View All Pids button when pid-list panel is closed
cdc.util.addMetricsRule('button.view-compatible.panel-open',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_compatibility_open"
});

//rule for View All Pids button when pid-list panel is open
cdc.util.addMetricsRule('button.view-compatible.panel-close',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_compatibility_close"
});

// rule for close X button in compatibility panel
cdc.util.addMetricsRule('.compatibility-list .close-button',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_compatibility_close"
});

// rule for clicking inside compatibility panel
cdc.util.addMetricsRule('.compatibility-list a, a.compatible-item',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_compatibility"
});

// rule for more specifications button when  rides-data panel is closed
cdc.util.addMetricsRule('.birth-cert-table button.view-rides-data-link',{
        onDemand:true,
        lpos:"model_birth_certificate_more_spec",
        lid :"model_birth_certificate_more_spec_open"
});

//rule for more specifications button when  rides-data panel is open
cdc.util.addMetricsRule('.birth-cert-table button.view-rides-data-link.active',{
        onDemand:true,
        lpos:"model_birth_certificate_more_spec",
        lid :"model_birth_certificate_more_spec_close"
});

cdc.util.addMetricsRule('.support-birth-cert a[href].birth-cert-series',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_series"
});

cdc.util.addMetricsRule('.support-birth-cert a[href].birth-cert-latest',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_latest_version"
});

cdc.util.addMetricsRule('.support-birth-cert a[href].birth-cert-previous',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_previous_version"
});

cdc.util.addMetricsRule('.support-birth-cert a[href].birth-cert-replacement',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_replacement"
});

cdc.util.addMetricsRule('.support-birth-cert a[href].birth-cert-migration',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_migration_options"
});

cdc.util.addMetricsRule('.support-birth-cert a[href].eosupport-details',{
        onDemand:true,
        lpos:"model_birth_certificate",
        lid :"model_birth_certificate_eosupport"
});

cdc.util.addMetricsRule('.collapsible-link-list a[href], .let-us-help a[href], .collapsible-link-list button, .let-us-help button', {
        onDemand:true,
        lpos:"model_right_rail",
        lid :"model_right_rail"
}); 

cdc.util.addMetricsRule('#mbox-polydor a[href], #mbox-polydor button',{
        onDemand:true, 
        lpos:"model_right_rail",
        lid :"model_right_rail_mbox"
});

cdc.util.addMetricsRule('.collapsible-link-list h2#rightrail-related-info button',{
        onDemand:true, 
        lpos:"model_compact_right_rail_relatedinfo_arrowclick",
        lid :"model_compact_right_rail_relatedinfo_arrowclick",
        "ev": "link"
});

cdc.util.addMetricsRule('.collapsible-link-list h2#rightrail-tools button',{
        onDemand:true, 
        lpos:"model_compact_right_rail_tools_arrowclick",
        lid :"model_compact_right_rail_tools_arrowclick",
        "ev": "link"
});

cdc.util.addMetricsRule('.collapsible-link-list h2#rightrail-tools-and-info  button',{
        onDemand:true, 
        lpos:"model_compact_right_rail_tools_and_related_arrowclick",
        lid :"model_compact_right_rail_tools_and_related_arrowclick",
        "ev": "link"
});

// google
cdc.util.addMetricsRule('#sbt-googleplus a[href]',{
    "lpos":"model_social_media", 
    "lid" :"model_social_media",
    "linktext":"Google Plus"
});

// twitter
cdc.util.addMetricsRule('#sbt-twitter a[href]',{
    "lpos":"model_social_media", 
    "lid" :"model_social_media",
    "linktext":"Twitter"
   
});

// facebook
cdc.util.addMetricsRule('#sbt-facebook a[href]',{
    "lpos":"model_social_media", 
    "lid" :"model_social_media",
    "linktext":"Facebook"
});

// linkedin
cdc.util.addMetricsRule('#sbt-linkedin a[href]',{
    "lpos":"model_social_media", 
    "lid" :"model_social_media",
    "linktext":"LinkedIn"
});

//mail
cdc.util.addMetricsRule('#sbt-email a[href]',{
    "lpos":"model_social_media", 
    "lid" :"model_social_media",
    "linktext":"EmailLink"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-tab-documents',{
        onDemand:true, 
        lpos:"model_tab_documentation_click",
        lid :"model_tab_documentation_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-tab-downloads',{
        onDemand:true, 
        lpos:"model_tab_downloads_click",
        lid :"model_tab_downloads_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-tab-community',{
        onDemand:true, 
        lpos:"model_tab_community_click",
        lid :"model_tab_community_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-tab-extra',{
        onDemand:true, 
        lpos:"model_tab_bugs_click",
        lid :"model_tab_bugs_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-drawer-documents',{
        onDemand:true, 
        lpos:"model_tab_documentation_click",
        lid :"model_tab_documentation_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-drawer-downloads',{
        onDemand:true, 
        lpos:"model_tab_downloads_click",
        lid :"model_tab_downloads_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-drawer-community',{
        onDemand:true, 
        lpos:"model_tab_community_click",
        lid :"model_tab_community_click"
});

cdc.util.addMetricsRule('#drawertab button#drawertab-drawer-extra',{
        onDemand:true, 
        lpos:"model_tab_bugs_click",
        lid :"model_tab_bugs_click"
});

cdc.util.addMetricsRule('#info-documents a[href], #info-documents button', {
        onDemand:true,
        lpos:"model_tab_documentation",
        lid :"model_tab_documentation" 
});

//show all categories button
cdc.util.addMetricsRule('#all-cat-link button', {
        onDemand:true,
        lpos:"model_tab_documentation",
        lid :"model_tab_documentation_all_categories" 
});

//show top categories button
cdc.util.addMetricsRule('#close-cat-text button', {
        onDemand:true,
        lpos:"model_tab_documentation",
        lid :"model_tab_documentation_top_categories" 
});

// rule for more categories link when more-categories-panel is closed
cdc.util.addMetricsRule('#info-documents button.show-more-categories', {
        onDemand:true,
        lpos:"model_tab_documentation_more_categories",
        lid :"model_tab_documentation_more_categories_open" 
});

// rule for more categories link when more-categories-panel is open
cdc.util.addMetricsRule('#info-documents button.show-more-categories.open', {
        onDemand:true,
        lpos:"model_tab_documentation_more_categories",
        lid :"model_tab_documentation_more_categories_close" 
});

//rule for close button in more categories expand panel
cdc.util.addMetricsRule('.more-categories-panel.expand-panel button.close-button', {
        onDemand:true,
        lpos:"model_tab_documentation_more_categories",
        lid :"model_tab_documentation_more_categories_close" 
});

cdc.util.addMetricsRule('#info-documents .top-categories-list', {
        onDemand:true,
        lpos:"model_tab_documentation",
        lid :"model_tab_documentation_top_categories" 
});

cdc.util.addMetricsRule('#info-documents #all-cat-listing', {
        onDemand:true,
        lpos:"model_tab_documentation",
        lid :"model_tab_documentation_all_categories" 
});

cdc.util.addMetricsRule('#info-documents #close-cat-arrow button', {
        onDemand:true,
        lpos:"model_tab_documentation_all_categories",
        lid :"model_tab_documentation_all_categories_close",
        linktext: "collapse"
});

cdc.util.addMetricsRule('#info-downloads a[href], #info-downloads button', {
        onDemand:true,
        lpos:"model_tab_downloads",
        lid :"model_tab_downloads"
});

// rule for clicking on details button when details panel is closed
cdc.util.addMetricsRule('#info-downloads button.details-button.panel-open', {
        onDemand:true,
        lpos:"model_tab_downloads_details",
        lid :"model_tab_downloads_details_open"
});

// rule for clicking on details button when details panel is open
cdc.util.addMetricsRule('#info-downloads button.details-button.panel-close', {
        onDemand:true,
        lpos:"model_tab_downloads_details",
        lid :"model_tab_downloads_details_close"
});

// rule for clicking on information button when information panel is closed
cdc.util.addMetricsRule('#info-downloads button.info-button.panel-open', {
        onDemand:true,
        lpos:"model_tab_downloads_info",
        lid :"model_tab_downloads_info_open"
});

// rule for clicking on information button when information panel is open
cdc.util.addMetricsRule('#info-downloads button.info-button.panel-close', {
        onDemand:true,
        lpos:"model_tab_downloads_info",
        lid :"model_tab_downloads_info_close"
});

cdc.util.addMetricsRule('#info-community a[href], #info-community button', {
        onDemand:true,
        lpos:"model_tab_community",
        lid :"model_tab_community"
});

// rule for clicking on Community Documents button when list is closed
cdc.util.addMetricsRule('.communitylisting-docs h2 button', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_docs",
        lid :"model_tab_community_communitylisting_docs_open"
});

// rule for clicking on Community Documents button when list is open
cdc.util.addMetricsRule('.communitylisting-docs h2 button.open', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_docs",
        lid :"model_tab_community_communitylisting_docs_close"
});

// rule for clicking on Community Videos button when list is closed
cdc.util.addMetricsRule('.communitylisting-video h2 button', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_video",
        lid :"model_tab_community_communitylisting_video_open"
});

// rule for clicking on Community Videos button when list is open
cdc.util.addMetricsRule('.communitylisting-video h2 button.open', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_video",
        lid :"model_tab_community_communitylisting_video_close"
});

// rule for clicking on Community Blog button when list is closed
cdc.util.addMetricsRule('.communitylisting-blogpost h2 button', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_blogpost",
        lid :"model_tab_community_communitylisting_blogpost_open"
});

// rule for clicking on Community Videos button when list is open
cdc.util.addMetricsRule('.communitylisting-blogpost h2 button.open', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_blogpost",
        lid :"model_tab_community_communitylisting_blogpost_close"
});

// rule for clicking on Community Latest button when list is closed
cdc.util.addMetricsRule('.communitylisting-latest h2 button', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_latest",
        lid :"model_tab_community_communitylisting_latest_open"
});

// rule for clicking on Community Latest button when list is open
cdc.util.addMetricsRule('.communitylisting-latest h2 button.open', {
        onDemand:true,
        lpos:"model_tab_community_communitylisting_latest",
        lid :"model_tab_community_communitylisting_latest_close"
});

cdc.util.addMetricsRule('#info-community  a.start-a-discussion', {
        onDemand:true,
        lpos:"model_tab_community_click",
        lid:"model_tab_community_click",
        linktext:"Start a Discussion"   //otherwise lock alt value overrides
});

cdc.util.addMetricsRule('#info-extra a[href], #info-extra button ', {
        onDemand:true,
        lpos:"model_tab_tab4",
        lid :"model_tab_tab4"
});

cdc.util.addMetricsRule('.cdc-expandPanel button.close-button',{
        onDemand:true,
        linktext :"Close"
});

//ask the product manager 
cdc.util.addMetricsRule('.let-us-help ul.askProductManager li a[href]',{
        onDemand:true,
        lpos:"model_help",
        lid :"model_help_ask"
});

//rule for clicking Documents You Have Viewed Recently to open expand panel
cdc.util.addMetricsRule('button.visitedlinks-button.closed',{
        lid :"documents_viewed_recenty_opened"
});

//rule for clicking Documents You Have Viewed Recently to open expand close
cdc.util.addMetricsRule('button.visitedlinks-button.opened',{
        lid :"documents_viewed_recenty_closed"
});

// rule for birth certificate image expansion
cdc.util.addMetricsRule('.image-wrapper button.zoom-it',{
        lid :"model_birth_certificate_pict_larger_magnifier_click"
});

//rule for birth certificate image contraction
cdc.util.addMetricsRule('.image-wrapper button.zoom-it.is-zoomed',{
        lid :"model_birth_certificate_pict_smaller_magnifier_click"
});

//visited links under section 'documents you have viewed recently' section
cdc.util.addMetricsRule('.visitedlinks-list li a[href]',{
		onDemand:true,
		lpos:"model_tab_documentation",
        lid :"model_tab_documentation_recently_viewed"
});

// rule for close button when documents you have viewed recently panel is open
cdc.util.addMetricsRule('.cdc-expandPanel.visitedlinks-panel button.close-button',{
        onDemand:true,
        lid :"documents_viewed_recently_closed"
});