import {useState} from "react";
import {nanoid} from "nanoid";
import Task from "./components/Task/Task";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    {title: 'Buy milk', id: nanoid()},
    {title: 'Walk with dog', id: nanoid()},
    {title: 'Do homework', id: nanoid()},
  ]);

  let newTaskTitle = '';

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const writeNewTask = currentTaskTitle => {
    newTaskTitle = currentTaskTitle;
  };

  const addNewTask = () => {
    const newTask = {
      title: newTaskTitle,
      id: nanoid(),
    };

    setTasks([...tasks, newTask]);
  };

  const taskComponent = tasks.map(task => {
    return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          onRemove={() => removeTask(task.id)}
        />
      );
  });

  return (
    <div className="container">
      <AddTaskForm
        onWriteCurrentTask={e => writeNewTask(e.target.value)}
        onAddNewTask={addNewTask}
      />
      {taskComponent.reverse()}
    </div>
  );
}

export default App;
