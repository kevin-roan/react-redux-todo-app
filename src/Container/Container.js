import React from "react";
import "./Container.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deltodo } from "../Redux/Reducer/Reducer";

export default function Container() {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <div className="input-box">
        <h1 className="title">Task List</h1>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
          </form>
        </div>
        <div className="todo-item">
          <span>todo</span>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
