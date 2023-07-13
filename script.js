document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    var id = document.getElementById("idInput").value;
    var mobile = document.getElementById("mobileInput").value;
    var email = document.getElementById("emailInput").value;
    // Save the user in the database using SQL or an API call
    
    // Simulate vaccination date assignment
    var vaccinationDate = new Date().toDateString();
    document.getElementById("vaccinationDate").textContent = "Your vaccination date is: " + vaccinationDate;
    document.getElementById("vaccinationDateSection").style.display = "block";
});

document.getElementById("certificateButton").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    var id = document.getElementById("idInput").value;
    var mobile = document.getElementById("mobileInput").value;
    var email = document.getElementById("emailInput").value;
    // Generate certificate using SQL or an API call
    
    var certificateText = "Certificate\n\nName: " + name + "\nNID/Passport Number: " + id + "\nMobile Number: " + mobile + "\nEmail: " + email + "\nVaccination Date: " + new Date().toDateString();
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
    var userInfo = {
        name: "John Doe",
        id: "1234567890",
        mobile: "9876543210",
        email: "johndoe@example.com"
    };
    var userInfoText = "Name: " + userInfo.name + "<br>NID/Passport Number: " + userInfo.id + "<br>Mobile Number: " + userInfo.mobile + "<br>Email: " + userInfo.email;
    document.getElementById("userInfo").innerHTML = userInfoText;
});

// Function to generate PDF
function generatePDF(certificateText) {
    var doc = new jsPDF();
    doc.text(certificateText, 10, 10);
    doc.save("certificate.pdf");
}
