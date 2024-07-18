document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Simulate successful login (replace with your authentication logic)
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Example: Check username and password
      if (username === 'admin' && password === 'password') {
        // Redirect to home page
        window.location.href = 'home.html';
      } else {
        alert('Invalid username or password. Please try again.');
        // Optionally clear the input fields
        document.getElementById('username').value = 'atoz';
        document.getElementById('password').value = '1to9';
      }
    });
  });
  