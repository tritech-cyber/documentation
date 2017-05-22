String.prototype.rIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

function buildMessage(str) {
	var p = document.createElement("p")
	var a = 0;
	var b = 0;
	while ( true && str ) {
		var i = str.rIndexOf(/https?:\/\//, 0);
		if (i != -1) {
			var o = document.createTextNode(str.substring(0, i));
			p.appendChild(o);
			str = str.substring(i);
            if (str != undefined) {
			    a = 0;
			    b = str.search(/\.?[ \n\r\t,]/);
			    if (b <= 1) b = str.length;
			    var o = document.createElement("a");
			    var link = str.substring(a,b);
			    o.setAttribute("href", link);
			    var ot = document.createTextNode(str.substring(a,b));
			    o.appendChild(ot);
			    p.appendChild(o);

			    str = str.substring(b);
		    }
		
		}
		else {
			var o = document.createTextNode(str);
			p.appendChild(o);
			break;
		}
	}
	return p;
}

function fadein(id) {
    var obj = document.getElementById(id)
    if (obj && typeof(obj) != 'undefined') {
        var op = parseFloat(obj.style.opacity);
        op = op + 0.1;
        obj.style.opacity = op;
        if (op < 1) {
            setTimeout("fadein('" + id + "');", 100);
        }
    }
}


function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}


function addComments(obj, thread, id, fade) {

	if ( thread.approved == 0 && rights <= 2) { return false; }
	var owner = document.createElement("div");
	owner.setAttribute("id", "comment_" + id);
	var link = document.createElement("a");
	link.setAttribute("name", "comment_" + id);
	owner.appendChild(link);
	var level = 1;
	var child = false;
	if (thread.replyto > 0 && document.getElementById("comment_" + thread.replyto) !== null) {
		obj = document.getElementById("comment_" + thread.replyto);
		level = Math.floor(obj.getAttribute("level"));
		level = level + 1;
		child = true;
	}

	owner.setAttribute("level", level);
	if ( thread.approved == 0) {
		owner.setAttribute("class", "apaste_comment apaste_comment_notapproved");
	}
	else {
		owner.setAttribute("class", "apaste_comment apaste_comment_" + ((level % 2)+1));
	}
	var header = document.createElement("p");
	var poster = document.createElement("b");
	var date = document.createElement("i");

    header.setAttribute("class", "comment_header");
	// Flagged posts

	if ( thread.flag !== "" && thread.flag !== "(unflagged)") {
		owner.setAttribute("class", "apaste_comment apaste_comment_" + thread.flag);
		var img = document.createElement("img");
		img.setAttribute("src", siteURL + "/images/flag_" + thread.flag + ".png");
		img.setAttribute("align", "absmiddle");
		img.setAttribute("style", "margin-right: 10px;");
		header.appendChild(img);
	}
	if (thread.trusted == 1) {
		var img = document.createElement("img");
		img.setAttribute("src", siteURL + "/images/feather.png");
		img.setAttribute("title", "Account verified by Apache");
		poster.appendChild(img);
		owner.setAttribute("class", "apaste_comment apaste_comment_" + ((level % 2)+1) + " apaste_comment_verified");
		header.setAttribute("class", "comment_header_verified");
	}
	poster.appendChild(document.createTextNode(htmlDecode(thread.name) + "  "));
	var ago = Math.floor(thread.age/24);
	if (ago <= 0) { 
		if (thread.age <= 0) ago = "Less than an hour ago  ";
		if (thread.age == 1) ago = "1 hour ago  ";
		if (thread.age > 1) ago = thread.age + " hours ago  ";
	}
	else { 
		if (ago == 1) ago = "1 day ago  ";
		if (ago > 1) ago = ago + " days ago  ";
	}
	
	date.appendChild(document.createTextNode(ago));

	var rating = document.createElement("small")
	var ratingNumber = document.createTextNode("    Rating: " + (thread.rating > 0 ? "+" + thread.rating : thread.rating));
	rating.appendChild(ratingNumber)
	
	if (typeof myName != "undefined" && myName != "") {
	    var thumbsUp = document.createElement("a");
	    var timg = document.createElement("img");
	    timg.setAttribute("src", siteURL + "/images/thumbs_up.png");
	    thumbsUp.appendChild(timg);
	    thumbsUp.setAttribute("href", siteURL + "/moderate.lua?rate=1&id=" + id + "&site="+comments_site);
	    thumbsUp.setAttribute("title", "Click to rate this comment as useful");

	    var thumbsDown = document.createElement("a");
	    var timg = document.createElement("img");
	    timg.setAttribute("src", siteURL + "/images/thumbs_down.png");
	    thumbsDown.appendChild(timg);
	    thumbsDown.setAttribute("href", siteURL + "/moderate.lua?rate=-1&id=" + id + "&site="+comments_site);
	    thumbsDown.setAttribute("title", "Click to rate this comment as not useful");

	    rating.appendChild(document.createTextNode("     "));
	    rating.appendChild(thumbsDown);
	    rating.appendChild(document.createTextNode("     "));
	    rating.appendChild(thumbsUp);
    } else {
        rating.appendChild(document.createTextNode(" (register an account in order to rate comments) "));
    }
    
	var reply = document.createElement("a");
	if (level <= 5) {
		reply.setAttribute("class", "apaste_menu");
		reply.setAttribute("href", "javascript:void(0);");
		reply.setAttribute("onClick", "javascript:addReplyBox(this.parentNode, " + id + ");");
		var img = document.createElement("img");
		img.setAttribute("src", siteURL + "/images/reply.png");
		img.setAttribute("style", "border: none;");
		reply.appendChild(img);
	}
	if (rights > 2) {
		var del = document.createElement("a");
		del.setAttribute("href", siteURL + "/moderate.lua?uid="+uid+"&site=" + comments_site + "&delete=" + id);
		del.appendChild(document.createTextNode("Delete"));
		date.appendChild(del);
		if ( thread.approved == 0) {
			date.appendChild(document.createTextNode("  "));
			var app = document.createElement("a");
			app.setAttribute("href", siteURL + "/moderate.lua?uid="+uid+"&site=" + comments_site + "&approve=" + id);
			app.appendChild(document.createTextNode("Approve"));
			date.appendChild(app);
		}

		// Flag: Resolved
		date.appendChild(document.createTextNode("  "))
		var link = document.createElement("a");
		link.setAttribute("href", siteURL + "/moderate.lua?uid="+uid+"&site=" + comments_site + "&id=" + id + "&flag=resolved");
		link.appendChild(document.createTextNode("Resolved"));
		date.appendChild(link);

		// Flag: Invalid
		date.appendChild(document.createTextNode("  "))
		link = document.createElement("a");
		link.setAttribute("href", siteURL + "/moderate.lua?uid="+uid+"&site=" + comments_site + "&id=" + id + "&flag=invalid");
		link.appendChild(document.createTextNode("Invalid"));
		date.appendChild(link);

		// Flag: Sticky
		date.appendChild(document.createTextNode("  "))
		link = document.createElement("a");
		link.setAttribute("href", siteURL + "/moderate.lua?uid="+uid+"&site=" + comments_site + "&id=" + id + "&flag=sticky");
		link.appendChild(document.createTextNode("Sticky"));
		date.appendChild(link);

		// Flag: Unflag
		date.appendChild(document.createTextNode("  "))
		link = document.createElement("a");
		link.setAttribute("href", siteURL + "/moderate.lua?uid="+uid+"&site=" + comments_site + "&id=" + id + "&flag=unflag");
		link.appendChild(document.createTextNode("Unflag"));
		date.appendChild(link);

        
        // Flag: Permalink 
        date.appendChild(document.createTextNode("  "))
        link = document.createElement("a");
        // Grab current location without anchor
        link.setAttribute("href", window.location.protocol + "//" + window.location.hostname + window.location.pathname + "#comment_" + id); 
        link.appendChild(document.createTextNode("Permalink"));
        date.appendChild(link);


	}
	if (thread.gravatar && thread.gravatar != "") {
        var gravatar = document.createElement('img');
        gravatar.setAttribute("align", "absmiddle");
        gravatar.setAttribute("style", "margin-right: 10px");
        gravatar.setAttribute("src", "https://secure.gravatar.com/avatar/" + thread.gravatar + "?rating=G&s=32&d=mm");
        header.appendChild(gravatar);
    }
	header.appendChild(poster);
	header.appendChild(date);
	header.appendChild(rating)
	header.setAttribute("style", "margin-bottom: 10px;");
	var body = buildMessage(thread.text);
	owner.appendChild(header);
    owner.appendChild(reply);
	owner.appendChild(body);

	if (id == last) {
		var lastlink = document.createElement("a");
		lastlink.setAttribute("name", "comment_last");
		owner.appendChild(lastlink);
	}
	if (child == true) {
		obj.appendChild(owner);
	}
	else {
		obj.insertBefore(owner,obj.childNodes[0]);
	}
    if (typeof(fade) != 'undefined' && fade == true) {
    //    owner.style.opacity = 0;
    //    fadein(owner.getAttribute("id"));
    }
	return true;
}




function testForm(form, tid) {
	if (form["comment"].value == null || form["comment"].value == "") { alert("Please enter a comment before submitting your query."); return false; }
	if (form["answer"].value == null || form["answer"].value == "") { alert("Please enter the answer to the security question."); return false; }
	if (old_school && old_school == 1) {
	    return true;
    }
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.withCredentials = false;
    }
    else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp && typeof(xmlhttp) != 'undefined') {
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                if (xmlhttp.responseText.match("OK")) {
                    var tid = xmlhttp.responseText.match(/(\d+)/);
                    tid = tid[0];
                    if (xmlhttp.responseText.match("verified") || (typeof rights != "undefined" && rights >= 3)) {
                        add_comment(form["thread"].value, form["name"].value, form["email"].value, form["comment"].value, true, 1, tid);
                    }
                    else {
                        add_comment(form["thread"].value, form["name"].value, form["email"].value, form["comment"].value, true, 0, tid);
                    }
                }
                else {
                    alert("An error occured:\n" + xmlhttp.responseText);
                }
            }
//            if (xmlhttp.responseText != "") { alert(xmlhttp.responseText); }
        }
        var formData = "xmlhttp=true&c_c=" + escape(c_c) + "&uid=" + escape(uid) + "&question="+escape(form["question"].value)+"&answer="+escape(form["answer"].value)+"&thread="+escape(form["thread"].value)+"&name="+escape(form["name"].value)+"&email="+escape(form["email"].value)+"&comment="+escape(form["comment"].value)+"&site="+escape(form["site"].value)+"&page="+escape(form["page"].value);
        xmlhttp.open("POST", siteURL + "/add_comment.lua", true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(formData);    
    }
    // Old-school method if xmlhttp doesn't exist
    else {
        var obj = document.getElementById("comments_post_frame");
        if (typeof(obj) == 'undefined' || !obj) {
            obj = document.createElement("iframe");
            obj.setAttribute("name", "comments_post_frame");
            obj.setAttribute("id", "comments_post_frame");
            obj.setAttribute("style", "display: none;");
            document.getElementById("comments_thread").appendChild(obj);
        }
        add_comment(form["thread"].value, form["name"].value, form["email"].value, form["comment"].value, true, 0);
    }
    form.setAttribute("style", "display: none;");
	return false;
}

function addReplyBox(obj, tid) {
	var pform = document.getElementById("post_" + tid);
	if (pform == undefined) {
		var link = document.createElement("a");
		link.setAttribute("name", "post_" + tid);

		var form = document.createElement("form");
		form.setAttribute("accept-charset", "UTF-8");
		form.setAttribute("id", "post_" + tid);
		form.setAttribute("method", "post");
		form.setAttribute("action", siteURL + "/add_comment.lua");
		form.setAttribute("class", "apaste_comment");
        form.setAttribute("target", "comments_post_frame");
		var id = document.createElement("input");
		id.setAttribute("type", "hidden");
		id.setAttribute("name", "site");
		id.setAttribute("value", comments_site);
		form.appendChild(id);

		var page = document.createElement("input");
		page.setAttribute("type", "hidden");
		page.setAttribute("name", "page");
		page.setAttribute("value", comments_page);
		form.appendChild(page);

		var thread = document.createElement("input");
		thread.setAttribute("type", "hidden");
		thread.setAttribute("name", "thread");
		thread.setAttribute("value", tid);
		form.appendChild(thread);

		var answer = document.createElement("input");
		answer.setAttribute("type", "hidden");
		answer.setAttribute("name", "question");
		answer.setAttribute("value", secQuestion);
		form.appendChild(answer);

		var name = document.createElement("b");
		name.appendChild(document.createTextNode("Name:        "));
		var box = document.createElement("input");
		box.setAttribute("type", "text");
		box.setAttribute("name", "name");
		box.setAttribute("value", myName);
		box.setAttribute("style", "width: 180px;");
		name.appendChild(box);
		name.appendChild(document.createElement("br"));

		var email = document.createElement("b");
		email.appendChild(document.createTextNode("Email:        "));
		box = document.createElement("input");
		box.setAttribute("type", "text");
		box.setAttribute("name", "email");
		box.setAttribute("value", myEmail);
		box.setAttribute("style", "width: 180px;");
		email.appendChild(box);
		email.appendChild(document.createTextNode("  In order to receive notifications of replies, you will need to register an account."));
		email.appendChild(document.createElement("br"));

		var comment = document.createElement("b");
		comment.appendChild(document.createTextNode("Comment: "));
		box = document.createElement("textarea");
		box.setAttribute("name", "comment");
		box.setAttribute("style", "width: 480px; height: 110px;");
		comment.appendChild(box);
		comment.appendChild(document.createElement("br"));

		var question = document.createElement("b");
		question.appendChild(document.createTextNode("Security question: "));
		box = document.createElement("input");
		question.appendChild(document.createTextNode(secQuestion));
		box.setAttribute("type", "text");
		box.setAttribute("name", "answer");
		box.setAttribute("size", "2");
		box.setAttribute("maxlength", "2");
		question.appendChild(box);
		var questionNote = document.createElement("i");
		questionNote.appendChild(document.createTextNode("(use digits only, fx. 5 or 12)"));
		questionNote.appendChild(document.createElement("br"));

		var submit = document.createElement("input");
		submit.setAttribute("type", "image");
		submit.setAttribute("src", siteURL + "/images/submit.png");
		submit.setAttribute("onClick", "javascript:return testForm(this.form, " + tid + ");");

		var title = document.createElement("h4");
		title.appendChild(document.createTextNode("Add a comment:"));


		var notice = document.createElement("a");
		notice.appendChild(document.createTextNode("Privacy policy"));
		notice.setAttribute("href", siteURL + "/privacy.html");
        notice.setAttribute("target", "_blank");

		var br = document.createElement("br");
        var rules = document.createElement("ul");
        var li = document.createElement("li")
        li.appendChild(document.createTextNode("Comments that have hyperlinks in them will need to be approved before they are visible on the site"))
        rules.appendChild(li);
        li = document.createElement("li")
        li.appendChild(document.createTextNode("HTML code is not allowed"))
        rules.appendChild(li);
        if (comments_requirevaliduser == true) {
            li = document.createElement("li")
            li.appendChild(document.createTextNode("Only registered users may post comments. Use the 'Log in' link to register an account."))
            rules.appendChild(li);
        }
		var note = document.createElement("p");
        note.appendChild(document.createTextNode("The following rules apply to posting on this site:"))
        note.appendChild(rules);

	
		form.appendChild(link);
		form.appendChild(title);
		form.appendChild(name);
		form.appendChild(email);
		form.appendChild(comment);
		form.appendChild(question);
		form.appendChild(questionNote);
		form.appendChild(submit);
        form.appendChild(document.createTextNode("    "));
		form.appendChild(notice);
		form.appendChild(br);
		form.appendChild(note);
		
		if (typeof feather_html !== "undefined") {
		    var addition = document.createElement("p");
		    addition.innerHTML = feather_html;
		    form.appendChild(addition);
		}
		obj.appendChild(form);	
		if (tid > 0) {
			window.location.hash = "post_" + tid;
			obj.setAttribute("class", "apaste_comment apaste_comment_selected");
		}
		else {
			window.location.hash = "comments_thread_post";
		}
	}
	else {
		var level = (Math.floor(pform.parentNode.getAttribute("level")) % 2) + 1;
		if (tid > 0) { pform.parentNode.setAttribute("class", "apaste_comment apaste_comment_" + level); }
		pform.parentNode.removeChild(pform);
	}
}

function build_comments() {
	var thread = document.getElementById("comments_thread")
	if (thread !== null) {
        if (comments_disabled != true) {
		    var css = document.createElement("link");
		    css.setAttribute("rel", "stylesheet");
		    css.setAttribute("type", "text/css");
		    if (comments_stylesheet != "") {
			    if (comments_stylesheet.match(/https?:\/\//i)) {
                    css.setAttribute("href", comments_stylesheet);
                }
                else {
                    css.setAttribute("href", siteURL + "/styles/" + comments_stylesheet + ".css");
                }
		    }
		    else {
			    css.setAttribute("href", siteURL + "/comments.css");
		    }
		    document.getElementsByTagName('head')[0].appendChild(css);
		    var commentsForm = document.createElement("p");
            var rss = "<a href='https://comments.apache.org/rss.lua?site=" + comments_site + "&amp;page=" + comments_page + "'><img src='https://comments.apache.org/images/rss.png' width='16' height='16' align='absmiddle' hspace='5'>RSS</a> &nbsp; ";
		    var login = "<a href='" + siteURL + "/portal.lua?site=" + comments_site + "'>Log in / register</a>";
		    if (rights > 0) { 
			    login = "";
			    if (rights > 2) login = "<a href='" + siteURL + "/panel.lua?uid="+uid+"&redirect=dashboard&site=" + comments_site + "' target='_blank'>Moderate</a>";
			    login = login +" &nbsp; <a href='" + siteURL + "/portal.lua?uid="+uid+"&logout=true&site=" + comments_site + "'>Log out</a>"; }
		    commentsForm.innerHTML = "<h4><a name=\"comments_thread_post\" href=\"javascript:void(0);\" onClick=\"javascript:addReplyBox(this.parentNode,0);\"><img src=\"" + siteURL + "/images/post.png\" style=\"border: none;\"/></a> <span style='float: right'>"+ rss + login + "</span></h4>";
		    thread.appendChild(commentsForm);
		    var commentsSpace = document.createElement("div");
            commentsSpace.setAttribute("id", "comments_space");
		    var commentLink = document.createElement("a");
		    commentLink.setAttribute("name", "comment_top");
		    commentsSpace.appendChild(commentLink);
		    thread.appendChild(commentsSpace);
		    var key;
		    var comments = 0;
		    for (key in threads) {
			    addComments(commentsSpace, threads[key], key);
			    comments++;
		    }
		    if (comments == 0) {
			    thread.appendChild(document.createTextNode("No comments have been made so far."));
			    thread.appendChild(document.createElement("br"));
			    thread.appendChild(document.createElement("br"));
		    }
		    if (window.location.hash.match("comment")) {
			    window.location.hash = window.location.hash;
                if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    			    window.location = window.location;
                }
		    }
            if (typeof(additional_html) !== 'undefined') {
                var addhtml = document.createElement("p");
                addhtml.innerHTML = additional_html;
                thread.appendChild(addhtml);
            }
        }
        else {
            thread.appendChild(document.createTextNode("Comments have been disabled for this page."));
        }
	}
}

function add_comment(tid, poster, email, comment, fade, verified, pid) {
    if (typeof pid == "undefined") { pid = Math.floor(Math.random() * 99999) + 10000; }
    var thread = {"replyto":tid, "text":comment, "name": poster, "age": 0, "trusted": verified, "approved": 1, "rating": 0, "flag": "", "gravatar": ""};
    addComments(document.getElementById("comments_space"), thread, pid, fade);
    window.location.hash = "comment_" + pid;
}

build_comments();

