var userInfo = null;

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    var id = document.getElementById("idInput").value;
    var mobile = document.getElementById("mobileInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    // Save the user in the database using SQL or an API call
    
    // Simulate user data retrieval
    userInfo = {
        name: name,
        id: id,
        mobile: mobile,
        email: email,
        password: password
    };
    
    document.getElementById("registrationForm").reset();
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var loginId = document.getElementById("loginIdInput").value;
    var loginPassword = document.getElementById("loginPasswordInput").value;
    
    // Authenticate the user using SQL or an API call
    if (userInfo && userInfo.id === loginId && userInfo.password === loginPassword) {
        document.getElementById("loginForm").reset();
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("vaccinationDateSection").style.display = "block";
        
        // Simulate vaccination date assignment
        var vaccinationDate = new Date().toDateString();
        document.getElementById("vaccinationDate").textContent = "Your vaccination date is: " + vaccinationDate;
    } else {
        alert("Invalid login credentials. Please try again.");
    }
});

document.getElementById("certificateButton").addEventListener("click", function() {
    // Generate certificate using SQL or an API call
    
    var certificateText = "Certificate\n\nName: " + userInfo.name + "\nNID/Passport Number: " + userInfo.id + "\nMobile Number: " + userInfo.mobile + "\nEmail: " + userInfo.email + "\nVaccination Date: " + new Date().toDateString();
    document.getElementById("certificateText").textContent = certificateText;
    document.getElementById("certificateSection").style.display = "block";
    
    // Generate and download PDF certificate
    var downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", function() {
        generatePDF(certificateText);
    });
});

// Simulate user account information
document.addEventListener("DOMContentLoaded", function() {
    if (userInfo !== null) {
        var userInfoText = "Name: " + userInfo.name + "<br>NID/Passport Number: " + userInfo.id + "<br>Mobile Number: " + userInfo.mobile + "<br>Email: " + userInfo.email;
        document.getElementById("userInfo").innerHTML = userInfoText;
        document.getElementById("accountSection").style.display = "block";
    }
});

// Function to generate PDF
function generatePDF(certificateText) {
    var doc = new jsPDF();
    doc.text(certificateText, 10, 10);
    doc.save("certificate.pdf");
}
