import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action){
    switch(action.type){
        case "ADD_TODO": 
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            }
            const addedTodos = [...state.todos, newTodo]
                return {
                    ...state,
                    todos: addedTodos
                }
        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            }       
        case "TOGGLE_TODO":
            const toggledTodos = state.todos.map(t => 
                t.id === action.payload.id ? { ...action.payload, complete: 
                !action.payload.complete} : t
            )
            return {
                ...state, 
                todos: toggledTodos
            }
        case "REMOVE_TODO":
                const filteredTodos = state.todos.filter(t => t.id !== action.payload.id)
                return {
                    ...state,
                    todos: filteredTodos
                }
        default: 
            return state;
    }
}