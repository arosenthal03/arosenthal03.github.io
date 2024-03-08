document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myform");

    function handleSubmit(event) {
        event.preventDefault(); 
        const formData = new FormData(form); 
        const formDataObject = Object.fromEntries(formData.entries()); 
        localStorage.setItem("formData", JSON.stringify(formDataObject)); 
        alert("Form submitted successfully!");
        form.reset(); 
    }

    form.addEventListener("submit", handleSubmit);

    function retrieveFormData() {
        const storedFormData = localStorage.getItem("formData"); 
        if (storedFormData) {
            const parsedFormData = JSON.parse(storedFormData); 
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

    retrieveFormData();
});
