document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myform');
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function () {
      const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value
      };
  
      localStorage.setItem('formData', JSON.stringify(formData));
  
      alert('Form submitted successfully!');
    });
  
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      form.elements.name.value = storedFormData.name;
      form.elements.email.value = storedFormData.email;
      form.elements.message.value = storedFormData.message;
    }
  });
  