import { useState, useEffect } from 'react';
import Form from "../components/Form"
import Tasks from '../components/Tasks';
import { StyledApp } from "./App.styled"
import API from '../api'
import Credits from '../components/Credits';


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
    <StyledApp>
      <div className="sidebar">
        <Form />
        <Credits />
      </div>
      <div>
        { 
          !error ? 
            isLoaded && tasks.length === 0 ?
              <p>No hay tareas</p>
              : <Tasks tasks={tasks} />
          : <p>Ups</p>
        }
      </div>
    </StyledApp>
  );
}

export default App;
