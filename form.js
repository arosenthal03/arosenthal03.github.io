document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myform");
    const submitBtn = document.getElementById("submitBtn");
    const clearBtn = document.getElementById("clearBtn");
  
function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Form submitted!");
}
  
function handleClear() {
    form.reset(); 
    console.log("Form cleared!");
}
  
submitBtn.addEventListener("click", handleSubmit);
  
clearBtn.addEventListener("click", handleClear);
});