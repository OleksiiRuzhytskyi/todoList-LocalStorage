import {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'


function App() {

  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(1)


  useEffect(() => {
    let promptValue = prompt('Enter user name')
    if (promptValue) {      
      setTodos(JSON.parse(localStorage.getItem('todo')) ||  [])
    }
  },[])
  
  useEffect(() => {  
      console.log('todos', todos)    
      localStorage.setItem('todo',JSON.stringify(todos))
  },[todos])
  
  const addTask = (inputvalue) => {
    if (inputvalue.trim() === '') {
      alert('Enter task!')
      return
    }
    const newTask = {
      number: count,
      id: Date.now().toString().slice(3,12),
      task: inputvalue,
      complete: false
    }
    setTodos([...todos, newTask])
    setCount(count + 1)
  }

  const itemDone = (id) => {
    setTodos([
      ...todos.map(item => item.id === id ? {...item, complete: !item.complete} : {...item}),
    ])   
  }

  const removeTask = (id) => {
    console.log('id',id)
    setTodos([
      ...todos.filter(item => item.id !==id ||  localStorage.removeItem('todo'))
     
     
    ])
  }

  return (
    <>
      <div className="main-container">
        <header>
          <h1>List task: {todos.length}</h1>
        </header>
        <TodoForm
          addTask={addTask}
        />
        {todos.map(itemTodo => {
          return (
            <Todo 
              key={itemTodo.id} 
              itemTodo = {itemTodo}
              itemDone = {itemDone}
              removeTask={removeTask}
            />
          )
        })}
      </div>
    </>
  )
}

export default App;
