function ValidMail() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var myMail = document.getElementById('email').value;
  var valid = re.test(myMail);
  if (valid) alert('Welcome to the team');
  else alert('Email is invalid');
  return valid;
}