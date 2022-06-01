import {useState} from "react";
import {nanoid} from "nanoid";
import Task from "./components/Task/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    {title: 'Buy milk', id: nanoid()},
    {title: 'Walk with dog', id: nanoid()},
    {title: 'Do homework', id: nanoid()},
  ]);

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
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
      {taskComponent}
    </div>
  );
}

export default App;
