// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai aur code</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//    childern: 'click me to visit the google.com'
// }

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Click Me</a>
)

const anotherUser = "aniket kadam";

const ReactElement = React.createElement( // Babel
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  "click me to visit google.com",
  anotherUser
);

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    // <ReactElement /> // this accept the method
    // ReactElement
    // AnotherElement
    ReactElement

    // <App />
)
