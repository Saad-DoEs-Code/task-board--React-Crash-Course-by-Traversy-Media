import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleReminder }) => {
  return (
    // We will use double click to toggle between reminder
    <div
      className={task}
      // className="reminder"
      onDoubleClick={()=>toggleReminder(task.id)}

    >
      <div className='task'>
      <h3 >
        {task.name} 
        <FaTimes
          style={{ color: "red", cursor: "pointer", marginTop: "5px" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <div className={`task ${task.reminder ? 'reminder':'task'}`}>
      <pre className="pre-data"> {task.due}</pre>
      <p className="desc">{task.description}</p>    
      </div>
      </div>
    </div>
  );
};

export default Task;
