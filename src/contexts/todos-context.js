import React, {createContext, useContext, useReducer, useState} from 'react' 

const initialTodos = [];

const todosReducer = (state,action) => {

    switch(action.type) {
        case 'CREATE':
            return [action.todo,...state]
        case 'DELETE':
            return state.filter(el=>el !== action.todo)
        case 'RENAME' :
            const copy = [...state]
            copy[action.index] = action.todo
            return copy
    }
}

const TodosStateContext = createContext();
const TodosDispatchContext = createContext();
const TodosNextIdContext = createContext();


export const TodosContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(todosReducer,initialTodos)

    return (
        <TodosStateContext.Provider value={state}>
            <TodosDispatchContext.Provider value = {dispatch}>
            {children}
            </TodosDispatchContext.Provider> 
        </TodosStateContext.Provider>
    )
}

export const useTodosState = () => {
    return useContext(TodosStateContext);
}

export const useTodosDispatch = () => {
    return useContext(TodosDispatchContext);
}

export const useTodosNextId = () => {
    return useContext(TodosNextIdContext)
}
//////////////////////////////// useState를 이용한 context ///////////////////////////

// const TodosContext = React.createContext({
//     todos:[]
// });


// export const TodosContextProvider = (props) => {
//     const [todos,setTodos] = useState([])

//     const addTodo = (text) => {
//         setTodos(()=>{return [text,...todos]})
//     }

//     const deleteTodo = (text) => {
//         setTodos(todos.filter(el=>el !== text))
//     }

//     const renameTodo = (text,index) => {
//         const copy = [...todos]
//         copy[index] = text

//         setTodos(copy)
//     }

//     return (
//         <TodosContext.Provider value={
//             {   
//                 onDelete : deleteTodo,
//                 onAdd :addTodo,onRename:renameTodo,
//                 todos : todos
//             }
//         }>{props.children}</TodosContext.Provider>
//     )
// }



// export default TodosContext;