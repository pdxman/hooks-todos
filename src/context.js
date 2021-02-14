import React from 'react'

const TodosContext = React.createContext({
    todos: [
        {id: 1, text: "eat", complete: false },
        {id: 2, text: "exercise", complete: false },
        {id: 3, text: "coffee", complete: true }
    ]
})

export default TodosContext