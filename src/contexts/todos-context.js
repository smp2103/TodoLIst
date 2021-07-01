import React, {useState} from 'react' 


const TodosContext = React.createContext({
    todos:[]
});


export const TodosContextProvider = (props) => {
    const [todos,setTodos] = useState([])

    const addTodo = (text) => {
        setTodos(()=>{return [text,...todos]})
    }

    const deleteTodo = (text) => {
        setTodos(todos.filter(el=>el !== text))
    }

    const renameTodo = (text,index) => {
        const copy = [...todos]
        copy[index] = text

        setTodos(copy)
    }

    return (
        <TodosContext.Provider value={
            {   
                onDelete : deleteTodo,
                onAdd :addTodo,onRename:renameTodo,
                todos : todos
            }
        }>{props.children}</TodosContext.Provider>
    )
}



export default TodosContext;