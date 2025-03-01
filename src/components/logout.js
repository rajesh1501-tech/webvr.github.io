import React from "react";
import "../styling/logout.css"
const Logout = () => {
  const handleLogout = () => {
    // Perform logout logic here, such as clearing tokens or user data
    console.log("Logged out");
    window.location.href = "/home"; // Redirect to login page
  };

  return (
    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
