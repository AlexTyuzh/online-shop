import { useState } from "react";

export default function InputToDO({ taskList, setTaskList }) {
  const [input, setInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };
  return (
    <>
      <form>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo-btn-add" onClick={handleAddTask}>
          Add
        </button>
      </form>
    </>
  );
}
