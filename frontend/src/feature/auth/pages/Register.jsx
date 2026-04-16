import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/form.scss";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleRegister, loading } = useAuth();
  const navigate = useNavigate(); // ✅ Added Navigation

  async function submitHandle(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    const res = await handleRegister(username, email, password);

    // ✅ Success par redirect karein
    if (res.success) {
      navigate("/");
    }
    // ❌ Error handle karein
    else {
      alert(res.message || "Registration failed");
    }
  }

  return (
    <div className="auth-container">
      <form onSubmit={submitHandle} className="auth-form">
        <h2>Register</h2>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="Username"
          required
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p>
        Already have an Account?{" "}
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </p>
    </div>
  );
};

export default Register;
