import { useState, useEffect } from 'react';
import API from './api'
import Form from "./components/Form"
import Tasks from './components/Tasks';


const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTasks] = useState([]);

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
