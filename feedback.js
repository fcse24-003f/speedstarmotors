
function validateForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please provide your feedback.");
        return false;
    }

    
    alert("Thank you for your feedback!");
    return true;
}


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault();s
    }
});
