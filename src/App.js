import { useState, useEffect } from 'react';
import Form from "./components/Form"
import Tasks from './components/Tasks';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://todo-fastapi-pydevt.herokuapp.com/",
      {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'}
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setTasks(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  return (
    <div className="">
      <Form />
      { !error && isLoaded && tasks.length > 0 ? <Tasks tasks={tasks} />
        : <p>Cargando...</p>
      }
    </div>
  );
}

export default App;
