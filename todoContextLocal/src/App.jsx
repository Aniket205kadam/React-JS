import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import { TodoForm, TodoItem } from "./components"

function App() {
  const [todos, setTodo] = useState([]);

  // add the todo
  const addTodo = (todo) => {
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  // update the todo
  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((preTodo) => (preTodo.id === id ? todo : preTodo)));
  }

  // delete the todo
  const deleteTodo = (id) => {
    console.log(id)
    setTodo((prev) => prev.filter((preTodo) => preTodo.id !== id));
    console.log(todos)
  }

  // toggle the todo
  const toggleComplete = (id) => {
    // setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: true} : prevTodo)));
    setTodo((prev) => prev.map((prevTodo) => {
      if (prevTodo.id === id) {
        if (prevTodo.completed)
          return {...prevTodo, completed: false}
        return {...prevTodo, completed: true}
      }
      return prevTodo;
    }))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          
          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <div key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
