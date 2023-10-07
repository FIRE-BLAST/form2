window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('my-form').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('phone').value;
        // Save the name in localStorage.
        localStorage.setItem('name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Mobile', mobile);
      });
  
    }
  
  }
