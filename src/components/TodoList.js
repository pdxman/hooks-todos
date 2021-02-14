import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList(){
    const {state, dispatch} = useContext(TodosContext)

    const title = state.todos.length > 0
        ? `${state.todos.length} Todos` :
        'Nothing to Do!'

    return(
        <div className="container mx-auto max-w-d text-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul className="list-reset text-white p-0">
                {state.todos.map(todo => (
                      <li key={todo.id} className="flex items-center bg-gray-500 border-black border-dashed border-2 my-2 py-4">
                           <span 
                            onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
                            className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-black"}`}>{todo.text}</span> 
                           <button>
                               <img src="https://img.icons8.com/pastel-glyph/344/torch.png" alt="edit icon" className="h-6"/>
                           </button>
                           <button
                              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}>
                               <img src="https://img.icons8.com/cotton/344/torch.png" alt="delete icon" className="h-6"/>
                           </button>
                      </li>  
                ))}
            </ul>
        </div>
    )
}