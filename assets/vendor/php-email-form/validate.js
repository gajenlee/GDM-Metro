(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let action = this.getAttribute('action');
      let recaptcha = this.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(this, 'The form action property is not set!')
        return;
      }
      this.querySelector('.loading').classList.add('d-block');
      this.querySelector('.error-message').classList.remove('d-block');
      this.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( this );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(this, action, formData);
              })
            } catch(error) {
              displayError(this, error)
            }
          });
        } else {
          displayError(this, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(this, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
