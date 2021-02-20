import React, { useContext } from 'react'
import TodosContext from '../context'
import * as Icon from 'react-feather';

export default function TodoList(){
    const {state, dispatch} = useContext(TodosContext)

    const title = state.todos.length > 0
        ? `${state.todos.length} Todos` :
        'Nothing to Do!'

    return(
        <div className="container mx-auto max-w-d text-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul className="flex-list list-reset text-white p-0">
                {state.todos.map(todo => (
                      <li key={todo.id} className="border-custom flex items-center border-black border-2 my-2 py-4">
                           <span 
                            onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
                            className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-black"}`}>{todo.text}</span> 
                           <button>
                                <Icon.Edit />
                           </button>
                           <button
                              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}>
                               <Icon.Delete />
                           </button>
                      </li>  
                ))}
            </ul>
        </div>
    )
}