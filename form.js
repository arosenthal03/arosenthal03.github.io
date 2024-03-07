document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const clearBtn = document.getElementById("clearBtn");
  
    // Function to store form data in local storage
    function storeData() {
      const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value
      };
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  
    // Function to clear form fields
    function clearFields() {
      form.reset();
      localStorage.removeItem("formData");
    }
  
    // Load form data from local storage if available
    function loadFormData() {
      const storedData = localStorage.getItem("formData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        form.elements.name.value = parsedData.name;
        form.elements.email.value = parsedData.email;
      }
    }
  
    // Load form data when the page loads
    loadFormData();
  
    // Event listener for submit button
    submitBtn.addEventListener("click", function() {
      storeData();
      // You can add additional functionality here, such as form validation
    });
  
    // Event listener for clear button
    clearBtn.addEventListener("click", function() {
      clearFields();
    });
  });