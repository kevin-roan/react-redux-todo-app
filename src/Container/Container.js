import React from "react";
import "./Container.css";

export default function Container() {
  return (
    <div className="container">
      <div className="input-box">
        <h1 className="title">Task List</h1>
        <div className="input-container">
          <input type="text" />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
