import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth()+1;
  const year = newDate.getFullYear();
  const date1 = new Date(2023, 2, 16);
  // const date1tostring = date1.toString();
  const oneDay = 24 * 60 * 60 * 1000;
  const today = `${month}/${date}/${year}`
  const countdate= Math.round(Math.abs((newDate - date1) / oneDay));
  const [state, setState] = useState(false)
  return (
    <>
     
      <div className="card" >
        <div className='heart_cont'>
          <p>Feng</p>
          <div id="heart">
          </div>
          <p>Gong</p>
         </div>
        <button onClick={() => setState((!state))}>
          <p id='countText'>{!state? 'Today is':"It's been"}</p>
          {state? countdate+" days": today} 
        </button>
      
      
      </div>
      
      
    </>
  )
}

export default App
