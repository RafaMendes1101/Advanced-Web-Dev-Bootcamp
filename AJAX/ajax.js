var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
	if (XHR.readyState == 4){
		if (XRH.status == 200){
			console.log(XHR.responseText);
		} else {
			console.log("Problem");
		}
	}
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();