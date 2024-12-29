import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if(input === '') {
      setError(true);
      return;
    }
    setError(false);
    dispatch(addTodo(input));
    // clear the input
    setInput('');

  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 m-4">
      <input
        type="text"
        className={`text-xl w-96 h-16 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
          ${error ? "bg-red-500 border-red-500 animate-shake" : "bg-gray-800"}  
        `}
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="h-16 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

// export {setInput};

export default AddTodo