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

function setNormal() {
    document.body.className = '';
}
        
function setProtanopia() {
    document.body.className = 'protanopia';
}
        
function setDeuteranopia() {
    document.body.className = 'deuteranopia';
}
        
function setTritanopia() {
    document.body.className = 'tritanopia';
}

function changeFontSize(action) {
    var p = document.querySelector('p');
    var computedStyle = window.getComputedStyle(p);
    var currentFontSize = parseFloat(computedStyle.getPropertyValue('font-size'));

    if (action === 'increase') {
        p.style.fontSize = (currentFontSize + 2) + 'px';
    } else if (action === 'decrease') {
        p.style.fontSize = (currentFontSize - 2) + 'px';
    }
}

function resetFontSize() {
    var p = document.querySelector('p');
    p.style.fontSize = '16px';
}
