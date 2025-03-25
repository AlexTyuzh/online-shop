export default function BoardToDo({ task, index, taskList, setTaskList }) {
  const handleDelete = () => {
    const [...newTasks] = taskList;
    newTasks.splice(index, 1);
    setTaskList(newTasks);
  };
  return (
    <>
      <div className="todo-board">
        <div>{task}</div>
        <button className="todo-btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
