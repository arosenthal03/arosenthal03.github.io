// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(document.getElementById("myform")); // Get form data
    const formDataObject = Object.fromEntries(formData.entries()); // Convert FormData to object
    localStorage.setItem("formData", JSON.stringify(formDataObject)); // Store form data in local storage
    alert("Form submitted successfully!");
    document.getElementById("myform").reset(); // Optionally reset the form after submission
}

// Function to retrieve form data from local storage
function retrieveFormData() {
    const storedFormData = localStorage.getItem("formData"); // Get form data from local storage
    if (storedFormData) {
        const parsedFormData = JSON.parse(storedFormData); // Parse stored form data
        // Set form fields with retrieved data
        for (const key in parsedFormData) {
            if (Object.hasOwnProperty.call(parsedFormData, key)) {
                const element = document.getElementById(key);
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = parsedFormData[key];
                    } else {
                        element.value = parsedFormData[key];
                    }
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for form submission
    document.getElementById("myform").addEventListener("submit", handleSubmit);
    
    // Retrieve form data from local storage when the page loads
    retrieveFormData();
});
