"use strict";


let warning = document.getElementById('info');
let textTag = document.getElementById("testTag");
let iTag = document.getElementById("iTag");


setInterval(function(){
	let online = navigator.onLine;

	if (online == true) {
		textTag.innerText = "Internet Connected";
		iTag.className = "material-icons-outlined";
		iTag.innerText = "cell_tower";
		warning.classList.remove("no-connect");
	} else {
		textTag.innerText = "Internet Disconnect";
		iTag.className = "material-icons-outlined";
		iTag.innerText = "wifi_tethering_off";
		warning.classList.add("no-connect");
	}
},1);


