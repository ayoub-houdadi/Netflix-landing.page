
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('formMessage');
  
    if (email.trim() !== '') {
      message.textContent = `Thank you for subscribing, ${email}!`;
      message.style.color = 'green';
    } else {
      message.textContent = 'Please enter a valid email.';
      message.style.color = 'red';
    }
  
    this.reset();
  });
  