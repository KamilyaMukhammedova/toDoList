import './Task.css';

const Task = (props) => {
  return (
    <div className="task">
      <p className={props.titleClass}>{props.title}</p>
      <div>
        <input type="checkbox" onChange={props.onChecked} className="checkboxInput"/>
        <button onClick={props.onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default Task;