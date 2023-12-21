const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit-btn");
submit.disabled = true;

const NameRegex = /^[a-z ,.'-]+$/i;
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PhoneRegex = /^\d{8,10}$/;
const PasswordRegex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

firstName.addEventListener("blur", () => {
  if (!NameRegex.test(firstName.value)) {
    firstName.classList.add("invalid");
    submit.disabled = true;
  } else {
    firstName.classList.remove("invalid");
    submit.disabled = false;
  }
});

lastName.addEventListener("blur", () => {
  if (!NameRegex.test(lastName.value)) {
    lastName.classList.add("invalid");
  } else {
    lastName.classList.remove("invalid");
    submit.disabled = false;
  }
});

email.addEventListener("blur", () => {
  if (!EmailRegex.test(email.value)) {
    email.classList.add("invalid");
    submit.disabled = true;
  } else {
    email.classList.remove("invalid");
    submit.disabled = false;
  }
});

phone.addEventListener("blur", () => {
  if (!PhoneRegex.test(phone.value)) {
    phone.classList.add("invalid");
    submit.disabled = true;
  } else {
    phone.classList.remove("invalid");
    submit.disabled = false;
  }
});

password.addEventListener("input", () => {
  if (!PasswordRegex.test(password.value)) {
    password.classList.add("invalid");
    submit.disabled = true;
  } else {
    password.classList.remove("invalid");
    submit.disabled = false;
  }
});

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("invalid");
    submit.disabled = true;
  } else {
    confirmPassword.classList.remove("invalid");
    submit.disabled = false;
  }
});

const clear = () => {
  formAlert_text.innerHTML = "Form submitted successfully!";
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  confirmPassword.value = "";
};

const close = () => {
  formAlert.classList.remove("show");
  formAlert.classList.add("hide");
};

const body = document.querySelector("body");

const formAlert = document.createElement("div");
formAlert.classList.add("form-alert");
formAlert.classList.add("hide");

const formAlert_icon = document.createElement("img");
formAlert_icon.src = "";

const formAlert_text = document.createElement("p");
formAlert_text.innerHTML = "Form submitted successfully!";

const formAlert_close = document.createElement("div");
formAlert_close.classList.add("form-alert-close");
const formAlert_close_icon = document.createElement("img");
formAlert_close.appendChild(formAlert_close_icon);
formAlert_close.addEventListener("click", close);
formAlert_close_icon.src = "../img/PhXCircleFill.svg";

formAlert.appendChild(formAlert_icon);
formAlert.appendChild(formAlert_text);
formAlert.appendChild(formAlert_close);

body.appendChild(formAlert);

submit.addEventListener("click", () => {
  if (!submit.disabled) {
    body.appendChild(formAlert);
    formAlert_icon.src = "../img/MdiCheckCircle.svg";
    formAlert.classList.add("success");
    formAlert.classList.remove("hide");
    formAlert.classList.add("show");
    setTimeout(() => {
      formAlert.classList.remove("show");
    }, 3000);
    formAlert.classList.remove("error");
    clear();
  } else {
    formAlert.classList.add("error");
    formAlert.classList.remove("hide");
    formAlert.classList.add("show");
    setTimeout(() => {
      formAlert.classList.remove("show");
    }, 3000);
    formAlert_icon.src = "../img/MaterialSymbolsErrorCircleRounded.svg";
    formAlert_text.innerHTML = "Please fill in all the required fields.";
  }
});
