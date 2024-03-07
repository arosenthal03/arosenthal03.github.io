document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const clearBtn = document.getElementById("clearBtn");
  
function storeData() {
    const formData = {
    name: form.elements.name.value,
    email: form.elements.email.value
    };
    localStorage.setItem("formData", JSON.stringify(formData));
}
  
function clearFields() {
    form.reset();
    localStorage.removeItem("formData");
}
  
function loadFormData() {
const storedData = localStorage.getItem("formData");
    if (storedData) {
    const parsedData = JSON.parse(storedData);
    form.elements.name.value = parsedData.name;
    form.elements.email.value = parsedData.email;
    }
}
  
loadFormData();

submitBtn.addEventListener("click", function() {
    storeData();
    });
  
clearBtn.addEventListener("click", function() {
    clearFields();
});
});