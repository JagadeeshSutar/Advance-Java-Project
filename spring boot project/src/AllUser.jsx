import { useState, useEffect } from "react";

export default function UserManagement() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // User list state
  const [users, setUsers] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ========================
  // 📌 API 1: Add User (POST)
  // ========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: form.name,
      email: form.email,
      phone: parseInt(form.phone),
      password: form.password,
    };

    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        const data = await res.json();
        alert(`User Added! ID: ${data.id}`);

        // Clear form
        setForm({ name: "", email: "", phone: "", password: "" });

        // Refresh user list after adding
        fetchUsers();
      } else {
        alert("Failed to add user");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred");
    }
  };

  // =============================
  // 📌 API 2: Get All Users (GET)
  // =============================
  const fetchUsers = () => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  };

  // Fetch all users on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* =======================
          User Registration Form
      ========================== */}
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Phone:</label>
            <br />
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={{ marginTop: "15px" }}>
            Submit
          </button>
        </form>
      </div>

      {/* =====================
          All Users Table
      ====================== */}
      <div style={{ marginTop: "40px" }}>
        <h2>All Users</h2>
        <table border="1" cellPadding="8" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
