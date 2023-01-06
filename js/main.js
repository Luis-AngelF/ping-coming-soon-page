function validateEmail() {
     const emailInput = document.getElementsByClassName("form__email")[0];

     const errorMessage = document.getElementById("error__message");

     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

     if (emailInput.value == "") {
          emailInput.classList.add("form__input--error");
          errorMessage.classList.remove("hide");
     } else if (!emailInput.value.match(regex)) {
          emailInput.classList.add("form__input--error");
          errorMessage.classList.remove("hide");
     } else {
          emailInput.classList.remove("form__input--error");
          errorMessage.classList.add("hide");
     }
}