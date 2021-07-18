function submit() 
{
	email = document.getElementById("email").value;
	terms = document.getElementById("terms").checked;
	
	var atposition=email.indexOf("@");  
	var dotposition=email.lastIndexOf(".");  
	if(email === ""){
		alert("Email address is required");  
		return false;
	}else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
		alert("Please provide a valid e-mail address");  
		return false;  
	}else if(email.substring(dotposition+1, email.length) === "co"){
		alert("We are not accepting subscriptions from Colombia emails");  
		return false;
	} else if (!terms){
		alert("You must accept the terms and conditions"); 
		return false;
	}else {
		window.location.href = "thanks.html"
		return true;
	}
}  
