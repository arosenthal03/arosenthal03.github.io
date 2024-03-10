document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myform");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const formData = new FormData(form);

        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        localStorage.setItem("formData", JSON.stringify(formObject));

        alert('Form submitted successfully!');

        form.reset();
    });


    const savedFormData = localStorage.getItem("formData");
    if (savedFormData){
        const formObject = JSON.parse(savedFormData);
        Object.keys(formObject).forEach(key => {
            const input = form.querySelector('[name="${key}"]');
            if (input) {
                input.value = formObject[key];
            }
        });
    }   
});