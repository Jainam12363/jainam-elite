function fnValidate(){
	let fname= document.getElementById("firstName").value;
	let lname= document.getElementById("lastName").value;
	let mail= document.getElementById("email").value;
	let pass= document.getElementById("password").value;
	let cpass= document.getElementById("confirmPassword").value;
	
	// let validateFname= fname.length>5? "Success":"Failure"
	// let validateLname= lname.length>5? "Success":"Failure"
	// console.log(validateFname, validateLname)

	let validation=validateFields(fname, lname)
	console.log(validation)


}

function validateFields(inputname){
	if(inputFname.length>5 && inputLname.length>5){
		return "valid";
	}
	else{
		return "invalid";
	}	
}
