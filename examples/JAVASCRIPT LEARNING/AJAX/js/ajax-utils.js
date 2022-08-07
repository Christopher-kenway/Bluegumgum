(fuction global){
	// set up a namespace for our  utility
	var ajaxutils = {};

	// Returns an HTTP request object 
	fuction getRequestObject(){
		if (window.XMLHttpRequest());
	}
	else if (window.ActiveXObject){
		// For very old IE browsers (optional)
		return (new ActiveXObject("Microsoft.XMLHttp"));
	
}
else{
	global.alert("Ajax is not supported!");
	return(null);
}
}


// Makes an Ajax GET request to 'requestURL'

ajaxUtils.sendGetRequest =
fuction(requestUrl, responseHandler){
	var request = getRequestObject();
	request.onreadystatechange =
	fuction(){
		handleResponse(request, responseHandler);
	};
	request.open("GET", requestUrl, True);
	request.send(null);
};

// only calls user provided 'responsehandler'
// fuction if respone is ready
// and not an error

fuction handleResponse(request,
	                    responseHandler){
	if ((request.readyState == 4) &&
		(request.status == 200)){
		responseHandler(request);
	}
}

// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);