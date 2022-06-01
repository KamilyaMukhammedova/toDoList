import {useState} from "react";
import {nanoid} from "nanoid";
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {title: 'Buy milk', id: nanoid()},
    {title: 'Walk with dog', id: nanoid()},
    {title: 'Do homework', id: nanoid()},
  ]);

  return (
    <>
    </>
  );
}

export default App;
