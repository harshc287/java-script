const fullNameElmt = document.querySelector("#fullName")
const emailAdderssElmt = document.querySelector("#emailAdd")
const inputMobile = document.querySelector("#inputMobile")
const maleElmt = document.querySelector("#genderMale")
const femaleElmt = document.querySelector("#genderFemale")
const passwordElmt = document.querySelector("#inputPassword")
const confirmPasswordElmt = document.querySelector("#confirmPassword")

function formValidation() {

    success = false

    fullName = fullNameElmt.value
    regex = /\d/;

    if (fullName.trim().length == 0) {
        document.querySelector("#errorName").classList.remove('d-none')
        document.querySelector("#errorName").innerHTML = "Should not be empty";

    } else if (fullName.trim().length < 2) {
        document.querySelector("#errorName").classList.remove('d-none')
        document.querySelector("#errorName").innerHTML = "Name must be at least 2 characters";
    }else if (regex.test(fullName.trim())){
         document.querySelector("#errorName").classList.remove('d-none')
        document.querySelector("#errorName").innerHTML = "must not be containt digit"
    }else {
        success = true
    }
    if (success) {
        document.querySelector("#submitMSG").classList.remove('d-none')
        document.querySelector("#submitMSG").innerHTML = "Form Submitted";
    }

    email = emailAdderssElmt.value
    emailregex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,}$/

    if(email.trim().length == 0){
        document.querySelector("#emailError").classList.remove('d-none')
        document.querySelector("#emailError").innerHTML = "Should not be empty";
    }else if(!regex.test(email)) {
        document.querySelector("#emailError").classList.remove('d-none')
        document.querySelector("#emailError").innerHTML = "Enter Valid Email";
}
    mobileNo =inputMobile.value
    const numberRegex  = /^[6-9]\d{9}$/

    if(mobileNo.trim().length == 0){
        document.querySelector("#mobileNoError").classList.remove('d-none')
        document.querySelector("#mobileNoError").innerHTML = "Should not be empty";  
        success = false;

    }
    else if(!numberRegex.test(mobileNo)) {
        document.querySelector("#mobileNoError").classList.remove('d-none')
        document.querySelector("#mobileNoError").innerHTML = "Enter Valid Mobile Number";
        success = false;
}
    if(!maleElmt.checked  && !femaleElmt.checked ){
        document.querySelector("#errorGender").classList.remove('d-none')
        document.querySelector("#errorGender").innerHTML= "Plese Select Gender"
        success = false;
    }

    password = passwordElmt.value
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if(password.trim()==0){
        document.querySelector("#passwordError").classList.remove('d-none')
        document.querySelector("#passwordError").innerHTML = "Pls Enter Password"
        success = false;
    }else if(!passRegex.test(password)){
        document.querySelector("#passwordError").classList.remove('d-none')
        document.querySelector("#passwordError").innerHTML = "Password must be 6+ chars, include upper, lower & number"
        success = false;
    } else {
        document.querySelector("#passwordError ").classList.add('d-none');
    }

    confirmPass = confirmPasswordElmt.value

        if(confirmPass.trim()==0){
        document.querySelector("#confirmError").classList.remove('d-none')
        document.querySelector("#confirmError").innerHTML = "Pls Enter Password"
        success = false;
}
    else if (confirmPass !== password){
        document.querySelector("#confirmError").classList.remove('d-none')
        document.querySelector("#confirmError").innerHTML = "Password didn't match"
        success = false;
    } else {
        document.querySelector("#confirmError").classList.add('d-none');
    }



        if (success) {
        document.querySelector("#succesMsg").classList.remove('d-none')
        document.querySelector("#succesMsg").innerHTML = "Form Submitted successfully";
    }
}