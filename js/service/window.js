define(function () {
	return {
		"redirect": function (url) {
			window.location.href = url;
		},
		"getParameterByName": function (name, url) {
			var regex = null,
				results = null;

			if (!url) {
				url = window.location.href;
			}
    		
    		name = name.replace(/[\[\]]/g, "\\$&");
    		regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
        	results = regex.exec(url);

		    if (!results) {
		    	return null;
		    }

		    if (!results[2]) {
		    	return '';
		    }
    		
    		return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
	}
});