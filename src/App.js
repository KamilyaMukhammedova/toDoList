import {useState} from "react";
import {nanoid} from "nanoid";
import Task from "./components/Task/Task";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    {title: 'Buy milk', id: nanoid(), isDone: false},
    {title: 'Walk with dog', id: nanoid(), isDone: false},
    {title: 'Do homework', id: nanoid(), isDone: false},
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
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const isChecked = (id, checked) => {
    const tasksCopy = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone: checked,
        }
      }
      return task;
    });

    setTasks(tasksCopy);
  };

  const taskComponent = tasks.map(task => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        titleClass={task.isDone ? 'lineThrough' : ''}
        onChecked={e => isChecked(task.id, e.target.checked)}
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
