import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"
import { useSelector } from "react-redux"
import Todos from "./components/Todos";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-md shadow-md">
        Todo App
      </h1>
      <AddTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      
      {/* <Todos /> */}
    </>
  )
}

export default App
