function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  




    
    console.log("Full Name: " , fullName);  
    console.log("Phone Number: " , phoneNumber);
    console.log("Email: " , email);
    console.log("Password: " , password);
    

    
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
        document.getElementById("nameError").textContent = "Invalid Full Name";
}

    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
        document.getElementById("phoneError").textContent = "Invalid Phone Number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid Email";
    }
} 