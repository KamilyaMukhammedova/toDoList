import './Task.css';

const Task = (props) => {
  return (
    <div className="task">
      <p>{props.title}</p>
      <button onClick={props.onRemove}>Remove</button>
    </div>
  )
};

export default Task;