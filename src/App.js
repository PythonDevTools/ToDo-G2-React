import { useState, useEffect } from 'react';
import API from './api'
import Form from "./components/Form"
import Tasks from './components/Tasks';


const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTasks] = useState([]);
  const baseUrlHeroku = 'https://todo-fastapi-pydevt.herokuapp.com/'
  const baseUrlLocal = 'http://127.0.0.1:8000/'

  useEffect(() => {
      API.get()
      .then(
        (res) => {
          setIsLoaded(true)
          setTasks(res.data)
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
