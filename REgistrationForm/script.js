document
.getElementById("registrationForm")
.addEventListener("submit", function(e){

e.preventDefault();

document.querySelectorAll(".error").forEach((item)=>{
  item.innerHTML = "";
});

let valid = true;

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const mobileRegex = /^[6-9]\d{9}$/;
const cityRegex = /^[A-Za-z ]+$/;
const pincodeRegex = /^\d{6}$/;
const percentageRegex = /^([0-9]{1,2}(\.[0-9]+)?|100|[A-Fa-f])$/;

let fullName = document.getElementById("fullName").value.trim();
let email = document.getElementById("email").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let dob = document.getElementById("dob").value;
let qualification = document.getElementById("qualification").value;
let percentage = document.getElementById("percentage").value.trim();
let course = document.getElementById("course").value;
let batch = document.getElementById("batch").value;
let address = document.getElementById("address").value.trim();
let city = document.getElementById("city").value.trim();
let pincode = document.getElementById("pincode").value.trim();
let guardianName = document.getElementById("guardianName").value.trim();
let guardianMobile = document.getElementById("guardianMobile").value.trim();
let reference = document.getElementById("reference").value;

if(!nameRegex.test(fullName)){
  document.getElementById("nameError").innerHTML =
  "Please enter a valid name";
  valid = false;
}

if(!emailRegex.test(email)){
  document.getElementById("emailError").innerHTML =
  "Please enter a valid email";
  valid = false;
}

if(!mobileRegex.test(mobile)){
  document.getElementById("mobileError").innerHTML =
  "Enter valid 10-digit mobile number";
  valid = false;
}

if(dob === ""){
  document.getElementById("dobError").innerHTML =
  "Select date of birth";
  valid = false;
}
else{

  let birthDate = new Date(dob);
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  let monthDiff = today.getMonth() - birthDate.getMonth();

  if(
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ){
    age--;
  }

  if(age < 15){
    document.getElementById("dobError").innerHTML =
    "You must be at least 15 years old";
    valid = false;
  }
}

if(qualification === ""){
  document.getElementById("qualificationError").innerHTML =
  "Select qualification";
  valid = false;
}

if(!percentageRegex.test(percentage)){
  document.getElementById("percentageError").innerHTML =
  "Enter valid percentage or grade";
  valid = false;
}

if(course === ""){
  document.getElementById("courseError").innerHTML =
  "Select course";
  valid = false;
}

if(batch === ""){
  document.getElementById("batchError").innerHTML =
  "Select batch timing";
  valid = false;
}

if(address === ""){
  document.getElementById("addressError").innerHTML =
  "Enter full address";
  valid = false;
}

if(!cityRegex.test(city)){
  document.getElementById("cityError").innerHTML =
  "Enter valid city";
  valid = false;
}

if(!pincodeRegex.test(pincode)){
  document.getElementById("pincodeError").innerHTML =
  "Enter valid 6-digit pin code";
  valid = false;
}

if(!nameRegex.test(guardianName)){
  document.getElementById("guardianNameError").innerHTML =
  "Enter guardian name";
  valid = false;
}

if(!mobileRegex.test(guardianMobile)){
  document.getElementById("guardianMobileError").innerHTML =
  "Enter valid guardian mobile number";
  valid = false;
}

if(reference === ""){
  document.getElementById("referenceError").innerHTML =
  "Select an option";
  valid = false;
}

if(valid){
  alert("Registration Successful");
  document.getElementById("registrationForm").reset();
}

});