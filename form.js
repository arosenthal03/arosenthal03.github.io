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
    });
});