import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 0,
            title: "",
            completed: false,
        },
    ],

    addTodo: (todo:{}) =>{},
    deleteTodo: (id:any) => {},
    updateTodo: (id:any,todo:any) => {},
    toggleTodo: (id:any) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{     // Custom hook to use the TodoContext
    return useContext(TodoContext)
}