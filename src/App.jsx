import { useState } from 'react'
import './App.css'
import Timer from './components/Timer.jsx';
import ToDoList from './components/ToDoList.jsx';

// main application function
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Timer />
        <ToDoList />
      </div>
    </>
  )
}


export default App
 

