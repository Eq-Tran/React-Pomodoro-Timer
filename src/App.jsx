import { useState } from 'react'
import './App.css'
import Timer from './components/Timer.jsx';
import ToDoList from './components/ToDoList.jsx';
import ListArea from './components/ListArea.jsx';

// main application function
function App() {
  // Keep tasks in the shared parent so both child components can access them.
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    // Append each submitted task to the list displayed by ListArea.
    setTasks(currentTasks => [...currentTasks, task]);
  }

  return (
    <>
      <div>
        <Timer />
        {/* Send new tasks up and pass the collected tasks down. */}
        <ToDoList onTaskAdd={addTask} />
        <ListArea taskData={tasks} />
      </div>
    </>
  )
}


export default App
 

