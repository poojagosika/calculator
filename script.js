var form = document.getElementById("formId");

function submitForm(event) {
  event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener("submit", submitForm);
