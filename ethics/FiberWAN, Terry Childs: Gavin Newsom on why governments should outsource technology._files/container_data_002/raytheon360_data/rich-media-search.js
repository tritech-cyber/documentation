
if (Enabler.isInitialized()) {
    initWidget();
} else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, initWidget);
}

function initWidget() {
    //polyfill for javascript forEach
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisArg) {

            var T, k;

            if (this == null) {
                throw new TypeError(' this is null or not defined');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }
            if (arguments.length > 1) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {

                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }

    Array.convertNodeList = function (list) {
        var array = new Array(list.length);
        for (var i = 0, n = list.length; i < n; i++)
            array[i] = list[i];
        return array;
    };

    var dataAttributeString = function (nodeName) {
        var string = nodeName.split('-');
        string.splice(0, 1);
        string.forEach(function (v, i) {
            if (i !== 0) {
                string[i] = v.charAt(0).toUpperCase() + v.slice(1);
            }
        });
        return string.join('');
    }

    //constructor for ajax handler
    var AjaxHandler = function () {
        var methods = {
            get: "GET",
            post: "POST"
        };
        var send = function (params) {
            var config = {
                method: methods.post,
                url: '',
                data: null,
                callback: function () {
                    return true;
                },
                errorCallback: function () {
                    return false;
                }
            }

            for (var key in params) {
                config[key] = params[key];
            }

            var query = '';

            if (config.data) {
                var queryData = [];
                for (var key in config.data) {
                    queryData.push(encodeURIComponent(key) + '=' + encodeURIComponent(config.data[key]));
                };
                query = queryData.join('&');
            }

            if (config.method === methods.get && query.length > 0) {
                var concat = '?';
                if (config.url.indexOf('?') >= 0) {
                    concat = '&';
                }
                config.url += concat + query;
                query = null;
            }

            var req = new XMLHttpRequest();
            if ('withCredentials' in req) {
                req.open(config.method, config.url);

            }
            else if (typeof XDomainRequest != 'undefined') {
                req = new XDomainRequest();
                req.open(config.method, config.url);
            }
            else {
                return false;
            }

            req.setRequestHeader('Content-Type', 'application/json');
            req.setRequestHeader('Accept', '*/*');

            req.onreadystatechange = function () {
                if ((req.readyState == XMLHttpRequest.DONE || req.readyState === 4) && req.status == 200 && config.callback) {
                    var res = req.responseText;
                    try {
                        res = JSON.parse(req.responseText);
                    } catch (e) {
                        if (config.errorCallback) config.errorCallback(res);
                        res = null;
                    }
                    if (res != null && config.callback) config.callback(res);
                }
                else {
                    if (config.errorCallback) config.errorCallback(res);
                }
            }
            req.send(query);
        };

        var get = function (params) {
            params['method'] = methods.get;
            send(params);
        };

        var post = function (params) {
            params['method'] = methods.post;
            send(params);
        };

        return {
            get: get,
            post: post
        };
    };

    var $ajax = new AjaxHandler();

    //constructor for widget
    var TBWidget = function (elem) {
        var el,
            config = {
                tbWidget: '',
                widget: '',
                k: '',
                ajaxUrl: 'https://platform.talentbrew.com/api/v1/ExternalWidget'
                //additional properties that may be set on module markup
                //for rich media search: noResults, viewMore, showLocation, newSearch
            },
            debounce = false,
            hasError = false;

        var widgetTypes = {
            richMediaSearch: "richmediasearch"
        };

        var classes = {
            listLocation: 'tb-widget-list-location',
            searchResults: 'tb-widget-search-results',
            searchResultCount: 'tb-widget-search-result-count',
            searchNoResults: 'tb-widget-search-no-results',
            searchBack: 'tb-widget-search-back',
            searchMore: 'tb-widget-search-more'
        };

        var buildLinkList = function (arr, params) {
            var truncate = function (title) {
                if (title.length > 30) {
                    var arr = title.split(" ");
                    do {
                        arr.pop();
                    } while (arr.join(" ").length + 3 > 30);

                    return arr.join(" ") + "...";
                }
                return title;
            };
            var list = document.createElement('ul');
            arr.forEach(function (i) {
                var listItem = document.createElement('li');
                var link = document.createElement('a');
                //link.href = i.jobDetailUrl || "#";
                link.setAttribute('data-href', i.jobDetailUrl || "#");
                link.setAttribute('onclick', 'handlers.searchResultExit(this,event)');
                link.innerHTML = truncate(i.title);
                listItem.appendChild(link);
                if (params && params.showLocation && i.location) {
                    var location = document.createElement('span');
                    location.className = classes.listLocation;
                    location.innerHTML = i.location;
                    listItem.appendChild(location);
                };
                if (params && params.showDate && i.jobDetailsDate) {
                    var date = document.createElement('span');
                    date.className = classes.listDate;
                    date.innerHTML = i.jobDetailsDate;
                    listItem.appendChild(date);
                }
                list.appendChild(listItem);
            });
            return list;
        }

        var errorCallback = function () {
            debounce = false;
            hasError = true;
        };

        var initRichMediaSearch = function () {
            var searchKeywordInput = null;

            for (var elem in el.childNodes) {
                if (typeof el.childNodes[elem].getAttribute == 'function' && el.childNodes[elem].getAttribute('name') === 'k') {
                    searchKeywordInput = el.childNodes[elem];
                    break;
                }
            }

            var emptyResults = function () {
                var siblings = el.parentNode.childNodes;
                for (var elem in siblings) {
                    if ((siblings[elem].className === classes.searchResults || siblings[elem].className === classes.searchNoResults) && siblings[elem].nodeType) {
                        el.parentNode.removeChild(siblings[elem]);
                        break;
                    }
                }
                el.removeAttribute('style');
                el.removeAttribute('aria-hidden');
            }

            var searchCallback = function (data) {
                hasError = false;
                emptyResults();
                var searchQuery = searchKeywordInput.value;
                searchKeywordInput.value = '';
                el.setAttribute('style', 'display: none;');
                el.setAttribute('aria-hidden', 'true');

                var parent = el.parentNode;

                var wrapper = document.createElement('div');

                //no results found
                //<div class="tb-widget-search-no-results">
                //      <p tabindex="0" role="status">{no results found message, as configured in admin}</p>
                //      <a href="#" class="tb-widget-search-back">{new search action, as configured in admin}</a>
                //</div>
                if ((typeof data == 'string' || data.length === 0) && config.noResults) {
                    wrapper.className = classes.searchNoResults;
                    var message = document.createElement('p');
                    message.setAttribute('tabindex', '0');
                    message.setAttribute('role', 'status');
                    wrapper.appendChild(message);
                    parent.appendChild(wrapper);
                    message.innerHTML = config.noResults;
                    message.focus();
                }

                    //results found
                    //<div class="tb-widget-search-results">
                    //      <p tabindex="0" role="status">{no results found message, as configured in admin}</p>
                    //      <a href="{search results page domain}" class="tb-widget-search-more">{view all action, as configured in admin}</a>
                    //      <a href="#" class="tb-widget-search-back">{new search action, as configured in admin}</a>
                    //</div>
                else if (data.length > 0) {
                    wrapper.className = classes.searchResults;
                    var list = buildLinkList(data, config);
                    wrapper.appendChild(list);

                    var moreLink = document.createElement('a');
                    moreLink.className = classes.searchMore;
                    //moreLink.href = el.getAttribute('action') + "?k=" + searchQuery;
                    moreLink.setAttribute('data-href', el.getAttribute('action') + "?k=" + searchQuery);
                    moreLink.setAttribute('onclick', 'handlers.viewMoreExit(this,event)');
                    moreLink.innerHTML = config.viewMore;
                    wrapper.appendChild(moreLink);

                    parent.appendChild(wrapper);
                }

                //add new search/view more controls
                var newSearchLink = document.createElement('a');
                newSearchLink.className = classes.searchBack;
                //newSearchLink.href = "#";
                newSearchLink.setAttribute('data-href', '#');
                newSearchLink.innerHTML = config.newSearch;
                newSearchLink.onclick = function (e) {
                    //e.preventDefault();
                    handlers.counter(3);
                    emptyResults();
                };
                wrapper.appendChild(newSearchLink);

                debounce = false;
            };

            el.onsubmit = function (e) {
                if (searchKeywordInput.value && !debounce) {
                    debounce = true;
                    $ajax.get({
                        url: config.ajaxUrl,
                        data: {
                            tbWidget: config.tbWidget,
                            k: searchKeywordInput.value,
                            widget: config.widget
                        },
                        callback: searchCallback,
                        errorCallback: errorCallback
                    });
                }
                return false;
            };

            searchKeywordInput.onkeydown = emptyResults;
            searchKeywordInput.onsearch = emptyResults;
        };

        var init = function (elem) {
            if (elem.attributes.length === 0) return false;
            el = elem;

            Array.convertNodeList(elem.attributes).forEach(function (a) {
                if (a.nodeName.indexOf('data-') >= 0) {
                    config[dataAttributeString(a.nodeName)] = a.Value || a.nodeValue;
                }
            });

            switch (config.tbWidget) {
                case (widgetTypes.richMediaSearch):
                    initRichMediaSearch();
                    break;
                default:
                    return false;
                    break;
            }
        };
        init(elem);
    };

    var widgetNodes = document.querySelectorAll('[data-tb-widget]');
    if (widgetNodes.length === 0) {
        return false;
    }
    var widgets = Array.convertNodeList(widgetNodes);
    widgets.forEach(function (w) {
        TBWidget(w);
    });
};
var handlers = {
    searchResultExit: function (obj, evt) {
        var cl = obj.getAttribute('class');
        var href = obj.getAttribute('data-href');
        Enabler.exitOverride('Result Selected', href);
        evt.preventDefault();

    },
    viewMoreExit: function (obj, evt) {
        var cl = obj.getAttribute('class');
        var href = obj.getAttribute('data-href');
        Enabler.exitOverride('View More', href);
        evt.preventDefault();
    },
    counter: function (id, targetId) {
        Enabler.counter(handlers.counterName(id, targetId), true);
    },
    counterName: function (id, targetId) {
        switch (id) {
            case 1:
                return 'Ad Engagement';
                break;
            case 2:
                if (targetId) {
                    var target = document.getElementById(targetId);
                    if (target.value && target.value.length > 0) {
                        return 'Submit Search';
                    }
                }
                break;
            case 3:
                return 'Re-Search';
                break;
        }

    }
}