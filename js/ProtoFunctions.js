		function changeCase() {
		//alert("changecase(): " + document.getElementById("userIn").value);
		var userString = document.getElementById("userIn").value;
	
		var radioIn = document.getElementsByName('changeCase');
	
		if (radioIn[0].checked == true)
			userString = userString.toUpperCase();
	
		else if (radioIn[1].checked == true)
			userString = userString.toLowerCase();
	
		document.getElementById("jsOut").value = userString;
	
		}