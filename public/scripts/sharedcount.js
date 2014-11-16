jQuery.sharedCount = function(url, fn) {
 url = encodeURIComponent(url || location.href);
 var domain = "//free.sharedcount.com"; /* SET DOMAIN */
 var apikey = "abad4f8685f3613e0df148faf025070029ee37cc" /*API KEY HERE*/
 var arg = { 
 data: {
 url: "http://google.com",
 apikey: apikey
 },
 url: domain + "/url",
 cache: true,
 dataType: "json"
 };
 if ('withCredentials' in new XMLHttpRequest) {
 arg.success = fn;
 } else {
 var cb = "sc_" + url.replace(/\W/g, '');
 window[cb] = fn;
 arg.jsonpCallback = cb;
 arg.dataType += "p";
 }
 return jQuery.ajax(arg);
};
$.sharedCount(location.href, function(data){
 console.log(data.Twitter); 
       console.log(data.Facebook.like_count);
	   alert(data.Twitter);
});

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
