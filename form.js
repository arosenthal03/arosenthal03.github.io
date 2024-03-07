document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myform");
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
  
submitBtn.addEventListener("click", function() {
    storeData();
});
  
clearBtn.addEventListener("click", function() {
    clearFields();
});
});