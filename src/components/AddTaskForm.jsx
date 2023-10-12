import React, { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  // Step 2. Make States to Store Data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    // Step 3. Create onSubmit function
    e.preventDefault();

    if (!name) {
      alert("Enter Task Name");
      return;
    }

    onAdd({ name, description, due, reminder });

    setName("");
    setDescription("");
    setDue("");
    setReminder(false);
  };

  return (
    // Step 1. Make Form
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Task Name"
          value={name}
        />
      </div>
      <div className="form-control">
        <label>Task Description</label>
        <input
          type="name"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Task Description"
          value={description}
        />
      </div>

      <div className="form-control">
        <label>Task Deadline</label>
        <input
          type="date"
          onChange={(e) => setDue(e.target.value)}
          value={due}
          placeholder="Add Task Description"
        />
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          value={reminder}
          // checked="checked"
        />
      </div>

      <button className="btn btn-block" type="save">
        OK
      </button>
    </form>
  );
};

export default AddTaskForm;
