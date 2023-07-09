import React from "react";
import "./Container.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deltodo } from "../Redux/Reducer/Reducer";

export default function Container() {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  let input;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.value);
    dispatch(addtodo(input.value));
  };

  return (
    <div className="container">
      <div className="input-box">
        <h1 className="title">Task List</h1>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input type="text" ref={(node) => (input = node)} />
          </form>
        </div>
        <div className="todo-item">
          <span>{todos[1]}</span>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
