const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const errorMessageFirstName = document.getElementById("errorMessageFirstName");
const errorMessageLastName = document.getElementById("errorMessageLastName");
const errorMessageEmail = document.getElementById("errorMessageEmail");
const errorMessagePassword = document.getElementById("errorMessagePassword");
const preventDefault = document.getElementById("preventDefault");



button.addEventListener('click', function() {
    if(firstName.value == null || firstName.value == undefined || firstName.value == '' || firstName.value <= 0)    {
        errorMessageFirstName.style.display = 'block';
        firstName.style.border = '2px solid hsl(0, 100%, 74%)';
        firstName.style.background = 'URL(images/icon-error.svg) right no-repeat'
    }   else    {
        errorMessageFirstName.style.display = 'none';
        firstName.style.border = '2px solid rgb(246, 243, 243)';
        firstName.style.background = 'none'
    }
})

button.addEventListener('click', function() {
    if(lastName.value == null || lastName.value == undefined || lastName.value == '' || lastName.value <= 0) {
        errorMessageLastName.style.display = 'block';
        lastName.style.border = '2px solid hsl(0, 100%, 74%)';
        lastName.style.background = 'URL(images/icon-error.svg) right no-repeat'
    } else {
        errorMessageLastName.style.display = 'none';
        lastName.style.border = '2px solid rgb(246, 243, 243)';
        lastName.style.background = 'none'
    }
})

button.addEventListener('click', function() {
    if(email.value == null || email.value == undefined || email.value == '' || (email.value.indexOf('@') == -1) ||(email.value.indexOf('.com') == -1) || email.value <= 0){
        errorMessageEmail.style.display = 'block';
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        email.style.background = 'URL(images/icon-error.svg) right no-repeat'
    } else {
        errorMessageEmail.style.display = 'none';
        email.style.border = '2px solid rgb(246, 243, 243)';
        email.style.background = 'none'
    }
})

button.addEventListener('click', function() {
    if(password.value == null || password.value == undefined || password.value == '' || password.length < 6){
        errorMessagePassword.style.display = 'block';
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password.style.background = 'URL(images/icon-error.svg) right no-repeat'
    } else {
        errorMessagePassword.style.display = 'none';
        password.style.border = '2px solid rgb(246, 243, 243)';
        password.style.background = 'none'
    }
})

preventDefault.addEventListener("click", function(event){
    event.preventDefault()
  });