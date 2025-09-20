
const inputs = document.querySelectorAll(".otp-input")

let currentOTP = "";
function generateOTP(){
    currentOTP = Math.floor(1000 + Math.random() * 9000).toString()
    document.querySelector("#otp").innerText = "OPT :- " + currentOTP
}

function verifyOTP(){
    let enteredOTP = ''
    inputs.forEach(input => enteredOTP += input.value)

    if (enteredOTP === currentOTP) {
        alert("✅ OTP Correct!");
        
      } else {
        alert("❌ OTP Incorrect!");
      }
    }

function reset(){
    inputs.forEach(input => input.value = '');

    currentOTP = ''
    document.querySelector("#otp").innerText=""
    inputs[0].focus()
}

inputs.forEach((input , index)=>{
    input.addEventListener('input', ()=>{
        if(input.value.length === 1 && index < inputs.length-1){
            inputs[index + 1].focus()
        }
    })
})


//Password generation
function generatePassword(){
    const length = parseInt(document.querySelector("#length").value)
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeSpecial = document.getElementById("includeSpecial").checked;

    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSpecial) charset += "!@#$%^&*()_+";

    if (document.getElementById("excludeAmbiguous").checked) {
    charset = charset.replace(/[l1I0O]/, "");
}
    let password = ""
    for(i = 0; i < length; i++){
        password += charset.charAt(Math.floor(Math.random() * charset.length)) 
    }
    console.log(password)

    document.querySelector("#result").value = password
    evaluateStrength(password)
}
    function evaluateStrength(password) {
        const strengthBar = document.getElementById("strengthBar");
        const strengthText = document.getElementById("strengthText");

        let strength = 0

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if(/[0-9]/.test(password)) strength++
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        console.log(strength)

        let width = strength * 25;
        strengthBar.style.width = width + "%";

        if (strength === 0) {
    strengthText.textContent = "";
    strengthBar.className = "progress-bar";
} else if (strength === 1) {
    strengthText.textContent = "Weak";
    strengthBar.className = "progress-bar bg-danger";
} else if (strength === 2) {
    strengthText.textContent = "Medium";
    strengthBar.className = "progress-bar bg-warning";
} else if (strength === 3) {
    strengthText.textContent = "Strong";
    strengthBar.className = "progress-bar bg-info";
} else {
    strengthText.textContent = "Very Strong";
    strengthBar.className = "progress-bar bg-success";
}
}
function copyPassword() {
  const resultInput = document.getElementById("result");
  resultInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
function togglePasswordVisibility() {
  const input = document.getElementById("result");
  input.type = input.type === "password" ? "text" : "password";
}

    


