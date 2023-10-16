import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter]= useState(5);
  const addValue = () =>{
    
    counter = counter + 1;
    setCounter(counter);
    console.log("clicked", counter);
  }
  const decreaseValue = () =>{
    counter = counter-1;
    setCounter(counter);
    console.log("clicked", decreaseCounter);
  }

  return (
    <>
      <h1>Nepal is a country</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick = {decreaseValue}
      >Decrease value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
