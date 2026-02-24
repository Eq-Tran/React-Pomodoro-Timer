import { useState } from 'react'
import './App.css'
import Timer from './components/Timer.jsx';

// main application function
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Timer />
      </div>
    </>
  )
}


export default App
 

