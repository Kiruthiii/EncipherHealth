let users = JSON.parse(localStorage.getItem("users")) || [];
let tbody = document.getElementById("tableBody");

function displayData() {
  tbody.innerHTML = "";

  users.forEach((user, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>
        <td>${user.dob}</td>
        <td>${user.gender}</td>
        <td>${user.course}</td>
        <td>${user.agree ? "Yes" : "No"}</td>
        <td>
          <button class="edit" onclick="editUser(${index})">Edit</button>
          <button class="delete" onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayData();
}

function editUser(index) {
  localStorage.setItem("editIndex", index);
  window.location.href = "form.html";
}

displayData();
