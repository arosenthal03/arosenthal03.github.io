document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myform");

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(form); // Get form data
        const formDataObject = Object.fromEntries(formData.entries()); // Convert FormData to object
        localStorage.setItem("formData", JSON.stringify(formDataObject)); // Store form data in local storage
        alert("Form submitted successfully!");
        form.reset(); // Optionally reset the form after submission
    }

    // Event listener for form submission
    form.addEventListener("submit", handleSubmit);

    // Function to retrieve form data from local storage
    function retrieveFormData() {
        const storedFormData = localStorage.getItem("formData"); // Get form data from local storage
        if (storedFormData) {
            const parsedFormData = JSON.parse(storedFormData); // Parse stored form data
            // Set form fields with retrieved data
            for (const key in parsedFormData) {
                if (Object.hasOwnProperty.call(parsedFormData, key)) {
                    const element = form.elements[key];
                    if (element) {
                        element.value = parsedFormData[key];
                    }
                }
            }
        }
    }

    // Retrieve form data from local storage when the page loads
    retrieveFormData();
});
