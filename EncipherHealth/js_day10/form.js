
const form = document.getElementById("userForm");
const editIndex = localStorage.getItem("editIndex");
let users = JSON.parse(localStorage.getItem("users")) || [];

function clearErrors() {
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
}

function validateForm() {
  clearErrors();
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const course = document.getElementById("course");
  const agree = document.getElementById("agree");
  const gender = document.querySelector('input[name="gender"]:checked');

  if (name.value.trim().length < 3) {
    document.getElementById("nameError").innerText =
      "Name must be at least 3 characters";
    isValid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").innerText =
      "Enter a valid email address";
    isValid = false;
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderError").innerText =
      "Please select gender";
    isValid = false;
  }

  if (course.value === "") {
    document.getElementById("courseError").innerText =
      "Please select a course";
    isValid = false;
  }

  if (!agree.checked) {
    document.getElementById("agreeError").innerText =
      "You must agree to continue";
    isValid = false;
  }

  return isValid;
}


if (editIndex !== null) {
  const user = users[editIndex];

  document.getElementById("name").value = user.name;
  document.getElementById("address").value = user.address;
  document.getElementById("password").value = user.password;
  document.getElementById("email").value = user.email;
  document.getElementById("dob").value = user.dob;
  document.getElementById("course").value = user.course;
  document.getElementById("agree").checked = user.agree;

  if (user.gender) {
    document
      .querySelector(`input[name="gender"][value="${user.gender}"]`)
      .checked = true;
  }
}


form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  const userData = {
    id: editIndex !== null ? users[editIndex].id : Date.now(),
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value,
    dob: document.getElementById("dob").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    course: document.getElementById("course").value,
    agree: document.getElementById("agree").checked
  };

  if (editIndex !== null) {
   
    users[editIndex] = userData;
    localStorage.removeItem("editIndex");
  } else {
  
    users.push(userData);
  }

  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "table.html";
});
