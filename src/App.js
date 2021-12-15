import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";

const App = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  // function for input
  function inputEvent(event) {
    setText(event.target.value);
  }
  // task add
  function add_task() {
    let txt_length = text.length;
    if (txt_length > 0) {
      setItems((old_task) => {
        return [...old_task, text];
      });
      setText("");
    } else {
      alert("Firstlly! Add something");
    }
  }

  function delete_task(id) {
    setItems((oldItem) => {
      return oldItem.filter((arrElm, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app">
      <h1>TODO APP</h1>
      <input
        type="text"
        placeholder="write task here"
        onChange={inputEvent}
        value={text}
      />
      <button type="button" onClick={add_task}>
        ADD TASK
      </button>
      <div className="app-task_array">
        {items.map((task_text, index) => {
          return (
            <Task
              key={index}
              text={task_text}
              id={index}
              onSelect={delete_task}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
