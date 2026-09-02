import { useState } from 'react'


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
  //   { 
  //     id: 1,
  //     text: "javascript",
  //     completed: true,
  // },
  //   { 
  //     id: 2,
  //     text: "c++",
  //     completed: true,
  // },
  //   { 
  //     id: 3,
  //     text: "javascript",
  //     completed: true,
  // }
]);


const addTodoList = () => {
  if(input.trim() === "") return;
     const item = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
     }

     setTodos((prev) => [...prev, item])
     setInput("");

}

const todoCompleted = (id) => {
     setTodos(todos.map((todos) => {
      if(todos.id === id){
        return {
           ...todos,
      completed : !todos.completed,
        } 
      }else{
           return todos;
        }
     }));
}

const deleteItem = (id) => {
    setTodos(todos.filter((todos) =>  todos.id !== id))
}

  return (
    <>
      <div className="card">
       <input  className="input"
               type="text" 
               value= {input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={(e) => {if(e.key === 'Enter'){
                addTodoList();
               }}}
               placeholder='What do you need to do?'
               />
      <button onClick={() => addTodoList()}> Add </button>
      <ul> {todos.map((todos) => <li key={todos.id}>
        <input 
        type="checkbox" 
        onChange={() => todoCompleted(todos.id)}
        checked={todos.completed} />
        <span className={todos.completed ? 'strike-through' : ""}>
          {todos.text}</span>
        <button onClick={() => deleteItem(todos.id)}> Delete</button>
        </li>
        
      )}</ul>
       </div>
    
    </>
  )
}

export default App;

