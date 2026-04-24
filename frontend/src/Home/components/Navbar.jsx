import React from "react";
import { Link } from "react-router-dom";
import Logout from './../../feature/auth/components/Logout';
import "../styles/navbar.scss"
    
const Navbar = () => {
  return (
    <nav className="top-navbar">

      <div className="nav-brand">
        <Link to="/">InstaClone</Link>
      </div>


      <div className="nav-actions">
        <Link to="/requests" className="nav-icon" title="Follow Requests">
          <i className="ri-heart-3-line"></i>
        </Link>

        {/* Tera Logout Button */}
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
