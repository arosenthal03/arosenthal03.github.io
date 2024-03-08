// Function to reset the form
function clearForm() {
    document.getElementById('myform').reset();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const clearBtn = document.getElementById('clearBtn');
  
    // Add click event listener to clear/reset button
    clearBtn.addEventListener('click', function () {
      // Call the clearForm function to reset the form
      clearForm();
    });
  });  