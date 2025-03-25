import { useState } from "react";
import InputToDo from "./InputToDo";
import BoardToDo from "./BoardToDo";

export default function ToDO() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="todo-main">
        <h1>To Do List</h1>
        <InputToDo taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="todo-list">
        {taskList.map((task, index) => (
          <BoardToDo
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}
