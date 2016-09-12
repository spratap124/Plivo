function calculate() {
	// base price declaration 
	var plivoBasePrice= 0.00175;
	var twilioBasePrice= 0.0075;

	var usage= document.getElementById("usage").value;
	var country= document.getElementById("country").value;
	var error = document.getElementById("error");
	var currency;

	// check if country is not selected

	if (country==="select your country") {
		document.getElementById("country").style.background="#ff6060 url('images/dropdown.jpg') no-repeat 100% 0";
		document.getElementById("country").style.color="#fff";
	}
	else{
		// setting all styles to defautl
		document.getElementById("country").style.background="#fff url('images/dropdown.jpg') no-repeat 100% 0";  // set default style for the country selection
		document.getElementById("country").style.color="#6d777e";

		document.getElementById("usage").style.background="#fff";   //set default style of usage input
		document.getElementById("usage").style.color="#6d777e";

		document.getElementById("error").style.visibility="hidden";  //hide the error message	

		// declare the currency 
		if (country==="INDIA") {
		currency="&#8377;";
		}
		else if (country==="UK") {
			currency="&#8364;";
		}
		else if (country==="USA"){
			currency="$";
		}
		// calculate the costs  
		var plivoCosts = parseInt(usage*plivoBasePrice).toFixed(2);
		var twilioCosts = parseInt(usage*twilioBasePrice).toFixed(2);

		// check if calculated is not a number
		if (isNaN(plivoCosts) || isNaN(twilioCosts)) {
			error.style.visibility="visible";
			document.getElementById("usage").style.background="#FF6060";
			document.getElementById("usage").style.color="#fff";
		}

		else{
			var savings= twilioCosts - plivoCosts;

			document.getElementById("plivo").innerHTML= currency+plivoCosts;
			document.getElementById("twilio").innerHTML=currency+twilioCosts;
			document.getElementById("savings").innerHTML=currency+savings;
		}

	}		
	
}

// reset the fields and styles

function resetFields() {
	document.getElementById("plivo").innerHTML= "";
	document.getElementById("twilio").innerHTML="";
	document.getElementById("savings").innerHTML="";

	
	document.getElementById("error").style.visibility="hidden";

	document.getElementById("usage").style.background="#fff";
	document.getElementById("usage").style.color="#6d777e";

	document.getElementById("country").style.background="#fff url('images/dropdown.jpg') no-repeat 100% 0";
	document.getElementById("country").style.color="#6d777e";
}