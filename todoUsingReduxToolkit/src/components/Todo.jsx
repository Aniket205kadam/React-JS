import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateTodo, removeTodo } from '../features/todo/todoSlice';

function Todo({todo}) {
    // const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [textValue, setTextValue] = useState(todo.textValue);
    const [completed, setCompleted] = useState(todo.completed);

  return (
    <div
        className='flex justify-between items-center bg-zinc-800 px-9 py-5 rounded shadow m-4'
    >
        <label className="inline-flex items-center p-2">
            <input 
                type="checkbox" 
                className="hidden peer"
                onClick={() => setCompleted((completed) => !completed)} 
            />
            <span
                className="w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:scale-125 peer-checked:animate-bounce transition-all duration-300 ease-in-out"
            />
        </label>




        <input
            type="text"
            className={`text-white border outline-none w-full bg-transparent rounded-lg text-xl
                ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
                ${completed ? "line-through" : ""}`
            }
            value={textValue}
            onChange={(event) => setTextValue(event.target.value)}
            readOnly={!isTodoEditable}
        />
        <div className="flex space-x-4">
            {/* update btn*/}
            {isTodoEditable 
                ?
                // save
                <button
                    onClick={() => {
                        dispatch(updateTodo(todo.id, textValue))
                        setIsTodoEditable(false);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded focus:outline-none"
                >
                    <svg 
                        width="20px" 
                        height="20px" 
                        viewBox="0 0 1024 1024"
                    >
                        <path d="M563.2 358.4c0 14.08-11.52 25.6-25.6 25.6H153.6c-14.08 0-25.6-11.52-25.6-25.6V166.4c0-14.08 11.52-25.6 25.6-25.6h230.4c14.08 0 25.6 11.52 25.6 25.6l153.6 192z" fill="#D3AC51" />
                        <path d="M537.6 396.8H153.6c-21.76 0-38.4-16.64-38.4-38.4V166.4c0-21.76 16.64-38.4 38.4-38.4h230.4c19.2 0 35.84 14.08 38.4 33.28l153.6 192v5.12c0 21.76-16.64 38.4-38.4 38.4zM153.6 153.6c-7.68 0-12.8 5.12-12.8 12.8v192c0 7.68 5.12 12.8 12.8 12.8h384c5.12 0 10.24-3.84 12.8-8.96L396.8 171.52V166.4c0-7.68-5.12-12.8-12.8-12.8H153.6z" fill="#231C1C" />
                        <path d="M921.6 768c0 14.08-11.52 25.6-25.6 25.6H153.6c-14.08 0-25.6-11.52-25.6-25.6V256c0-14.08 11.52-25.6 25.6-25.6h742.4c14.08 0 25.6 11.52 25.6 25.6v512z" fill="#FAC546" />
                        <path d="M896 806.4H153.6c-21.76 0-38.4-16.64-38.4-38.4V256c0-21.76 16.64-38.4 38.4-38.4h742.4c21.76 0 38.4 16.64 38.4 38.4v512c0 21.76-16.64 38.4-38.4 38.4zM153.6 243.2c-7.68 0-12.8 5.12-12.8 12.8v512c0 7.68 5.12 12.8 12.8 12.8h742.4c7.68 0 12.8-5.12 12.8-12.8V256c0-7.68-5.12-12.8-12.8-12.8H153.6z" fill="#231C1C" />
                    </svg> 
                     </button>
                :
                <button
                    onClick={() => {
                        setIsTodoEditable((editable) => !editable);
                        // setInput(todo.textValue);
                        console.log(todo.textValue)
        
                    }}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded focus:outline-none"
                >
                    <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="#ffffff"
                       width="20px"
                       height="20px"
                       viewBox="0 0 36 36"
                       className="w-5 h-5"
                    >
                       <path d="M19.5,28.1h-2.9c-0.5,0-0.9-0.3-1-0.8l-0.5-1.8c-0.2-0.1-0.2-0.1-0.4-0.2l-1.6,0.9c-0.4,0.2-0.9,0.2-1.2-0.2l-2.1-2.1c-0.3-0.3-0.4-0.8-0.2-1.2l0.9-1.6c-0.1-0.2-0.1-0.2-0.2-0.4l-1.8-0.5c-0.4-0.1-0.8-0.5-0.8-1v-2.9c0-0.5,0.3-0.9,0.8-1l1.8-0.5c0.1-0.2,0.1-0.2,0.2-0.4l-0.9-1.6c-0.2-0.4-0.2-0.9,0.2-1.2l2.1-2.1c0.3-0.3,0.8-0.4,1.2-0.2l1.6,0.9c0.2-0.1,0.2-0.1,0.4-0.2l0.5-1.8c0.1-0.4,0.5-0.8,1-0.8h2.9c0.5,0,0.9,0.3,1,0.8l0.5,1.8c0.2,0.1,0.2,0.1,0.4,0.2l1.6-0.9c0.4-0.2,0.9-0.2,1.2,0.2l2.1,2.1c0.3,0.3,0.4,0.8,0.2,1.2l-0.9,1.6c0.1,0.2,0.1,0.2,0.2,0.4l1.8,0.5c0.4,0.1,0.8,0.5,0.8,1v2.9c0,0.5-0.3,0.9-0.8,1l-1.8,0.5c-0.1,0.2-0.1,0.2-0.2,0.4l0.9,1.6c0.2,0.4,0.2,0.9-0.2,1.2l-2.1,2.1c-0.3,0.3-0.8,0.4-1.2,0.2l-1.6-0.9c-0.2,0.1-0.2,0.1-0.4,0.2l-0.5,1.8C20.3,27.8,19.9,28.1,19.5,28.1z" />
                       <path d="M18,22.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3S20.4,22.3,18,22.3z" />
                       <path d="M18,2c-0.6,0-1,0.4-1,1s0.4,1,1,1c7.7,0,14,6.3,14,14s-6.3,14-14,14S4,25.7,4,18c0-2.8,0.8-5.5,2.4-7.8v1.2c0,0.6,0.4,1,1,1s1-0.4,1-1v-5h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.8C3.1,11.1,2,14.5,2,18c0,8.8,7.2,16,16,16s16-7.2,16-16S26.8,2,18,2z" />
                    </svg>
                </button> 
                     
            }

            {/* delete btn */}
            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Todo