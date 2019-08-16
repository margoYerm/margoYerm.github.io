//form follow
let followForm = document.querySelector('.signUp-enter');

function emailCheck (email) {
  let regMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regMail.test(email);
}
function formValidate (e) {
  let mailVal = document.querySelector('.signUp-enter-mail').value;
  if (emailCheck(mailVal)) {
    alert('You are subscribed');
  } else {
    e.preventDefault();
    alert('Please, check your e-mail');
  } 
}

followForm.addEventListener('submit', formValidate);
