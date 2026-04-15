import React, { useState }  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/form.scss"

const Login = () => {

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  async function submitHandle(e) {

    await e.preventDefault();
    
     axios.post("http://localhost:3000/api/auth/login", {
      username,
      password
    },{
      withCredentials: true
    }
    ).then(res => {
      console.log(res.data)
    })
  }
 
  return (
    <div className="auth-container">
      <form onSubmit={submitHandle} className="auth-form">
        <h2>Login</h2>

        <input
          onInput={(e)=>{setUsername(e.target.value)}}
          type="username"
          name="username"
          placeholder="Enter username"
        />

        <input
          onInput={(e)=>{setPassword(e.target.value)}}
          type="password"
          name="password"
          placeholder="Enter Password"
          
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have account
        <Link to="/register">
          <button>Register</button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
