// Fetch users from API and display in HTML
fetch("http://localhost:8080/users") // 🔹 You said API runs on 8080
  .then((res) => res.json())
  .then((users) => {
    const list = document.getElementById("userList");
    users.forEach((u) => {
      const li = document.createElement("li");
      li.textContent = `${u.id} - ${u.name}`;
      list.appendChild(li);
    });
  })
  .catch((err) => console.error("Error fetching users:", err));
