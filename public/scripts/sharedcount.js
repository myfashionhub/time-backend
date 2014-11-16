jQuery.sharedCount = function (url, fn) {
 url = encodeURIComponent(url || location.href);
 var domain = "//free.sharedcount.com/"; /* SET DOMAIN */
 var apikey = "0b9f43414d786773d90a6a6fd376247cfe218895" /*API KEY HERE*/
 var arg = {
   data: {
    url : url,
    apikey : apikey
   },
 url: domain,
 cache: true,
 dataType: "json"
 };
 if ('withCredentials' in new XMLHttpRequest) {
 arg.success = fn;
 }
 else {
 var cb = "sc_" + url.replace(/\W/g, '');
 window[cb] = fn;
 arg.jsonpCallback = cb;
 arg.dataType += "p";
 }
 return jQuery.ajax(arg);
};

function getAllUrls(tagArray) {
  for (var i = 0; i < tagArray.length; i++) {
    getUrl(tagArray[i].id);
  }
}

function getUrl(tag_id) {
	$.ajax({
		url: '/tags/'+tag_id+'/articles',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			console.log(data)
			getHeight(data);
		}
	});
}


function getHeight(article) {
	$.sharedCount(article.url, function(data){
	if(data.Twitter+data.Facebook.share_count < 50) {
		var minHeight = '225px';
	}
	else if(data.Twitter+data.Facebook.share_count < 100) {
		var minHeight = '275px';
	}
	else if(data.Twitter+data.Facebook.share_count < 150) {
		var minHeight = '325px';
	}
	else if(data.Twitter+data.Facebook.share_count < 200) {
		var minHeight = '475px';
	}
	else {
		var minHeight = '500px';
	}
	});
	return minHeight;
}
