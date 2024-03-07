document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        storeFormData();
    });
});

function storeFormData() {
    const formData = {
        fullName: document.getElementById("fullName").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        interests: getCheckboxValues("interest")
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data has been submitted and stored in local storage.");
}

function getCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    const values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function clearForm() {
    document.getElementById("contactForm").reset();
    localStorage.removeItem("formData");
    alert("Form has been cleared and local storage data has been removed.");
}