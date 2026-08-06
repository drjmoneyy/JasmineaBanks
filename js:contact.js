// Contact form submission handler.
//
// Submits to Formspree (https://formspree.io), a free static-site form
// backend. This works on any static host (GitHub Pages, Cloudflare Pages,
// Netlify, etc.) with no server of your own required.
//
// SETUP REQUIRED before this form will work on a new host:
// 1. Create a free account at https://formspree.io
// 2. Create a new form and copy its endpoint, e.g.
//    https://formspree.io/f/abcdwxyz
// 3. Paste that URL into the "action" attribute of the <form> in
//    contact.html, replacing YOUR_FORM_ID.
// 4. Formspree will ask you to confirm your email address the first time
//    a message is submitted. Confirm it, or messages will not be delivered.

(function () {
  var form = document.getElementById('contact-form');
  var statusEl = document.getElementById('form-status');
  var submitBtn = document.getElementById('submit-btn');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var firstName = document.getElementById('first_name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    statusEl.textContent = '';
    statusEl.removeAttribute('data-state');

    if (!firstName || !email || !message) {
      statusEl.textContent = 'Please fill in your first name, email, and message.';
      statusEl.setAttribute('data-state', 'error');
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      statusEl.textContent = 'Please enter a valid email address.';
      statusEl.setAttribute('data-state', 'error');
      return;
    }

    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      statusEl.textContent = 'This form is not yet connected. Replace YOUR_FORM_ID in contact.html with your real Formspree endpoint.';
      statusEl.setAttribute('data-state', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        return response.json();
      })
      .then(function () {
        statusEl.textContent = 'Thank you. Your message has been sent.';
        statusEl.setAttribute('data-state', 'success');
        form.reset();
      })
      .catch(function () {
        statusEl.textContent = 'Something went wrong and your message was not sent. Please email jasbanks@umich.edu directly.';
        statusEl.setAttribute('data-state', 'error');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      });
  });
})();
