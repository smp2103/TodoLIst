import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'
import TodosContext from '../../contexts/todos-context'



const Box = styled.div`
        height: auto;
        margin: 0 auto;
    `

function TodoBox() {

    const TodoContext = useContext(TodosContext)
    const todos = TodoContext.todos
    
    return (

        <Box>
            {todos.map((el,index)=>{
                return <TodoList id={index} key = {index} todo = {el}></TodoList>
            })}
        </Box>
    )
}


export default TodoBox;


