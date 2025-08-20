import { useState } from "react";

export default function AddData() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        setForm({ name: "", email: "", phone: "", password: "" });
      } else {
        alert("Failed to add user");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred");
    }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
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
  );
}
