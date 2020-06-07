// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => (
//   <div>
//     <p>Hello World</p>
//   </div>
// )

// const App = () => {
//   console.log('Hello there')
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }


// https://reactjs.org/docs/introducing-jsx.html
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello there, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Evan'
  const age = 10

  return (
    //https://reactjs.org/docs/fragments.html#short-syntax
    <>
      <h1>Greetings</h1>
      <Hello name={name} age = {age}/>
      <Hello />
      <Hello />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))