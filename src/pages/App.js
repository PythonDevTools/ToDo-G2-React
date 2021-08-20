import { useState, useEffect } from 'react';
import Form from "../components/Form"
import Tasks from '../components/Tasks';
import { StyledApp } from "./App.styled"
import API from '../api'
import Credits from '../components/Credits';
import NoTasks from '../components/NoTasks';
import ErrorTasks from '../components/ErrorTasks';


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
  }, [isLoaded])

  return (
    <StyledApp>
      <div className="sidebar">
        <Form dataForm={dataForm => setIsLoaded(dataForm)} />
        <Credits />
      </div>
      <div>
        { 
          !error ? 
            isLoaded && tasks.length === 0 ?
              <NoTasks />
              : <Tasks tasks={tasks} />
          : <ErrorTasks />
        }
      </div>
    </StyledApp>
  );
}

export default App;
