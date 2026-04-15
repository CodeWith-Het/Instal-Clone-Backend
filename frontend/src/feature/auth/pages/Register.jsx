import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/form.scss"

const Register = () => {

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  async function submitHandle(e) {
    e.preventDefault()
    
     await axios
      .post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res.data);
      });
    
  }

  return (
    <div className="auth-container">
      <form onSubmit={submitHandle} className="auth-form">
        <h2>Register</h2>

        <input
          onInput={(e)=>{setUsername(e.target.value)}}
          type="text"
          name="username"
          placeholder="Username"
          
        />

        <input
          onInput={(e)=>{setEmail(e.target.value)}}
          type="email"
          name="email"
          placeholder="Email"
          
        />

        <input
          onInput={(e)=>{setPassword(e.target.value)}}
          type="password"
          name="password"
          placeholder="Password"

        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an Account?
        <Link to="/login">
          <button>login</button>
        </Link>
      </p>

    </div>
  );
};

export default Register;
