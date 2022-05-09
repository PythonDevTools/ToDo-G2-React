import React, { useState, useEffect } from 'react';
import Form from "../components/Form"
import Task from '../components/Task';
import { StyledApp } from "./App.styled"
import API from '../api'
import Credits from '../components/Credits';
import Message from '../components/Message';

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

  const deleteTask = id => {
    API.delete(`${id}`)
    .then((res) => window.alert(`${res.data}. Reloading...`))
    setIsLoaded(!isLoaded)
  }

  const editTask = id => {
    console.log('Editando ', id)
  }

  return (
    <StyledApp>
      <div className="sidebar">
        <Form dataForm={dataForm => setIsLoaded(dataForm)} />
        <Credits />
      </div>
      <div className="task-container">
        { 
          !error ? 
            isLoaded && tasks.length === 0 ?
              <Message msg={'No hay tareas 😅'} />
              : tasks.map(({ id, title, content, due, done }) => {
                return(
                  <Task key={`key-${id}`} id={id} title={title} content={content}
                  due={due} done={done} deleteTask={deleteTask} editTask={editTask} />
                );
                }
              )
          : <Message msg={'Ups, hay algo mal que no está bien 🙈'} />
        }
      </div>
    </StyledApp>
  );
}

export default App;
