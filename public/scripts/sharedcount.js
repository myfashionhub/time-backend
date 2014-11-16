jQuery.sharedCount = function(aurl){
 alert('line1');
 url = aurl;
 /*url = encodeURIComponent(aurl || location.href);*/
 alert(url);
 var domain = "//free.sharedcount.com"; /* SET DOMAIN */
 var apikey = "abad4f8685f3613e0df148faf025070029ee37cc" /*API KEY HERE*/
 alert('preajax');
 $.ajax({
  data:{
	  url:aurl,
	  apikey: apikey
  },
  url:domain + "/url",
  cache:true,
  dataType: 'json',
  success: function(data){
  if(data.Twitter+data.Facebook.share_count < 50) {
	  alert('setting minheight');
	  var minHeight = '225px';
  }
  else if(data.Twitter+data.Facebook.share_count < 100) {
	  alert('setting minheight');
	  var minHeight = '275px';
  }
  else if(data.Twitter+data.Facebook.share_count < 150) {
	  alert('setting minheight');
	  var minHeight = '325px';
  }
  else if(data.Twitter+data.Facebook.share_count < 200) {
	  alert('setting minheight');
	  var minHeight = '475px';
  }
  else {
	  alert('setting minheight');
	  var minHeight = '500px';
  }
  return minHeight;
  }
 });
}
  
  /*
 
 var arg = { 
 data: {
 url: aurl,
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
*/

$.sharedCount(location.href, function(data){
 console.log(data.Twitter); 
       console.log(data.Facebook.like_count);
	   alert(data.Twitter);
});

/*
function getHeight(url) {
	alert('beginning of getheight function');
	$.sharedCount(url, function(data){
	if(data.Twitter+data.Facebook.share_count < 50) {
		alert('setting minheight');
		var minHeight = '225px';
	}
	else if(data.Twitter+data.Facebook.share_count < 100) {
		alert('setting minheight');
		var minHeight = '275px';
	}
	else if(data.Twitter+data.Facebook.share_count < 150) {
		alert('setting minheight');
		var minHeight = '325px';
	}
	else if(data.Twitter+data.Facebook.share_count < 200) {
		alert('setting minheight');
		var minHeight = '475px';
	}
	else {
		alert('setting minheight');
		var minHeight = '500px';
	}
	return minHeight;
	});
}
*/