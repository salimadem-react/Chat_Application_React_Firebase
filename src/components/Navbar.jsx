import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">SAS Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/70355/vervet-monkey-female-animal-70355.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>Salim</span>
        <button>logout</button>
      </div>
    </div>
  );
}
