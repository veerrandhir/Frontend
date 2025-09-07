import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import createRoot from 'react-dom'

import App from './App.jsx'

function MyApp(){
  return (
  <div>

    <h1>Custom react app | MyApp</h1>
  </div>
  )
}
const ReactElement = { // this will show error bec. its custom made but react render need predefined parameters. |It's syntex is not correct
  type : 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'Click me to visit google'
}

// According to react render creating another element
const anotherElement = ( // It will render we are diretly providing html element
  <a href='https://google.com'  target ='_blank'>Visit Google</a> 
)

// creating reactElement using object with correct react syntex
const createReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target:'_blank'
  },
  "Click me to visit Google Again"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
 
  
  createReactElement
)

