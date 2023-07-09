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
    dispatch(addtodo(input.value));
    input.value = "";
  };
  const handleDelete = (index) => {
    dispatch(deltodo(index));
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
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox" />
            <span>{todo}</span>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
