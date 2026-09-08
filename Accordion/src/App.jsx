// import { useState } from 'react'

import Accordion from "./Accordion.jsx";


function App() {

 const items = [
  {
    id: 1,
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language used to make websites interactive and dynamic."
  },
  {
    id: 2,
    title: "What is React?",
    content:
      "React is a JavaScript library used to build user interfaces using reusable components."
  },
  {
    id: 3,
    title: "What are Components?",
    content:
      "Components are reusable pieces of UI. A component can contain its own logic, structure, and styling."
  },
  {
    id: 4,
    title: "What are Props?",
    content:
      "Props are used to pass data from a parent component to a child component."
  },
  {
    id: 5,
    title: "What is State?",
    content:
      "State is data managed inside a React component. When state changes, React can re-render the component."
  },
  {
    id: 6,
    title: "What is useState?",
    content:
      "useState is a React Hook that allows functional components to store and update state."
  },
  {
    id: 7,
    title: "What is useEffect?",
    content:
      "useEffect is a React Hook used to perform side effects such as API calls, timers, or updating the document."
  },
  {
    id: 8,
    title: "What is Node.js?",
    content:
      "Node.js allows JavaScript to run outside the browser and is commonly used for building backend applications."
  }
];

  return ( <Accordion items={items}/>)
}

export default App;
