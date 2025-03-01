import React from "react";

const BackToDashBoard = () => {
  const backToDashBoard = () => {
    // Perform logout logic here, such as clearing tokens or user data
    console.log("Logged out");
    window.location.href = "/dashboard"; // Redirect to login page
  };

  return (
    <button
      className="logout-btn"
      onClick={backToDashBoard}
    >
        DashBoard
    </button>
  );
};

export default BackToDashBoard;