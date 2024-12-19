import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 0;

  const increaseValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      // assignment
      console.log("Aur kitan increase karoge")
    }
  }

  const decreaseValue = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    } else {
      // assignment
      console.log("Aur kitan decrease karoge")
    }
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>chai aur code</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={increaseValue}>Inc Value: {counter}</button>
      <button onClick={decreaseValue}>Dec Value: {counter}</button>

      <footer>Counter value is: {counter}</footer>
    </>
  )
}

export default App
