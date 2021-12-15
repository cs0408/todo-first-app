import React from "react";
import "./task.css";

const Task = (props) => {
  // function for completed task
  function complete_task() {}

  return (
    <div className="task__container">
      <div className="task__container-btn">
        <p
          id="delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          +
        </p>
        <p id="complete" onClick={complete_task}>
          ✓
        </p>
      </div>
      <div className="task__container-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Task;
