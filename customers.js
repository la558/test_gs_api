
var customerForm = document.getElementById('customerForm');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var phoneNumber = document.getElementById('phoneNumber');
var city = document.getElementById('city');
var submitButton = document.getElementById('submitButton');
var buttonSpinner = document.getElementById('buttonSpinner');
var buttonText = document.getElementById('buttonText');
var unknownError = document.getElementById('unknownError');


function afterSubmit(e) {

    e.preventDefault();

    if (customerForm.checkValidity() === false) {
      event.stopPropagation();
      for(let field of customerForm.elements) {
        if (!field.checkValidity()){
          field.classList.add('is-invalid');
        }
      }

      return;
    }
    // customerForm.classList.add('was-validated');
    for(let field of customerForm.elements) {
        field.classList.remove('is-invalid');
    }   


    var info = {
        // column names from the spreadsheet
        first: firstName.value,
        last: lastName.value,
        phone: phoneNumber.value,
        city: city.value
    };

    var url = "https://script.google.com/macros/s/AKfycbzm99ObzBPz6rr0wAi2d7fgaEiojZaimIzk53Ce_zDT_26eTKk/exec";

    buttonText.textContent = "Saving...";
    buttonSpinner.classList.remove('d-none');
    submitButton.disabled = true;

    // fetch(url, {  // we are going to to a post request
    //     method: 'POST', 
    //     cache: 'no-cache', 
    //     redirect: 'follow', 
    //     body: JSON.stringify(info) 
    //   })
    fetch(url, {  // we are going to to a post request
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(info) // body data type must match "Content-Type" header
    })
    .then(res => res.text())
    .then(res => {
      customerForm.reset();
      buttonText.textContent = "Save";
      buttonSpinner.classList.add('d-none');
      submitButton.disabled = false;      
      console.log(res);
    })
    .catch(err => {
          console.log(err);
          console.log('something went wrong');
          unknownError.classList.remove('d-none');
          customerForm.reset();
          setTimeout(function(){
            unknownError.classList.add('d-none');
            buttonText.textContent = "Save";
            buttonSpinner.classList.add('d-none');
            submitButton.disabled = false; 
          }, 3000);
    });
    
}

customerForm.addEventListener('submit', afterSubmit);
