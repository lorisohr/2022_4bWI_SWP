import logo from './logo.svg';
import './App.css';
import AddTask from './components/addtask';
import Task from './components/task';
import Header from './components/header';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import {useEffect} from 'react';

const App = () => {
  const [toDos, setToDos] = useState([
    {
    "id":1,
    "name":"einkaufen",
    "done": false
    },
    {
      "id":2,
      "name":"hilfe",
      "done": false
    }
  ])

  const addTask = (value) => {
    let todo = {
      id: 1,
      name: value,
      done: false
    };

    let todos = toDos;
    todos.push(todo);
    setToDos([...todos]);
    console.log(toDos);
  }

  return (
    <div className="App">
      <Header/>
      <AddTask onTaskAdded={addTask}/>
      <ToDoList tasks={toDos}/>
    </div>
  );
}

export default App;
