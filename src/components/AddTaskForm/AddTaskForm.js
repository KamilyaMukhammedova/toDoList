import './AddTaskForm.css';

const AddTaskForm = (props) => {
  return (
    <div className="newTask">
      <input
        type="text"
        placeholder="Add new task"
        className="newTaskInput"
        onChange={props.onWriteCurrentTask}
      />
      <button onClick={props.onAddNewTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;