import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // store user being edited
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Fetch all users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await fetch(`http://localhost:8080/users/${id}`, { method: "DELETE" });
    setUsers(users.filter((u) => u.id !== id));
  };

  // Start editing a user
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    });
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save updated user
  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:8080/users/${editingUser}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const updatedUser = await res.json();
        setUsers(users.map((u) => (u.id === editingUser ? updatedUser : u)));
        setEditingUser(null);
        setFormData({ name: "", email: "", phone: "", password: "" });
      } else {
        console.error("Failed to update user:", await res.text());
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }

    // Update the UI
    setUsers(
      users.map((u) => (u.id === editingUser ? { ...u, ...formData } : u))
    );
    setEditingUser(null);
    setFormData({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <h2>Users List</h2>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            editingUser === user.id ? (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </td>
                <td colSpan="2">
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditingUser(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
