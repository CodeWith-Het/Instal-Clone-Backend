import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/form.scss"

const Logout = () => {
  const { handleLogout, loading } = useAuth();
  const navigate = useNavigate();

    const onLogoutClick = async () => {
      
    await handleLogout();

    navigate("/login");
  };

  return (
    <button className="logout-btn" onClick={onLogoutClick} disabled={loading}>
      <i className="ri-logout-box-line"></i> {/* Remix icon */}
      <span>{loading ? "Logging out..." : "Logout"}</span>
    </button>
  );
};

export default Logout;
