
import Chai from "./chai"

function App() {
  // jsx me ek hai tag return ho sakta hai
{/* <Chai />
    <h1>chai aur code</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem cumque nesciunt quos voluptates excepturi, ratione doloremque cupiditate! Ducimus at debitis id laudantium esse corporis praesentium asperiores inventore maxime facere.
    </p> // ye tarik galat hai in jsx*/} 

  // {} this similer to the `${}` in javascript
  // {} -> this know as the evaluate expression
  const username = "aniket kadam";
  
  return (
    <div>
      <Chai />
      <h1>chai aur code | {username}</h1> 
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem cumque nesciunt quos voluptates excepturi, ratione doloremque cupiditate! Ducimus at debitis id laudantium esse corporis praesentium asperiores inventore maxime facere.
      </p>
    </div>
  )
  // par yha par ek problem hai ki aapko bar bar div me wrap karke element ko send karna padega
  // <></> yese bhi return kar sakate hai.. ise 'Fragment' kahate hai
}

export default App
