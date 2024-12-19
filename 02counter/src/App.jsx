import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 0;

  const increaseValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      // // when user click the button then increse the counter value as 1 because we know the fiber its wroking in the batch so it see both are the some task so it's execute only one time

      // ager hame kisi condition me one time ase value ko update karana hai to
      setCounter((preCounter) => {return preCounter + 1});
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);

      // callback ke through hota hai tab hamara kam hone ke bat call hota hai aur badh me update hota hai

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
