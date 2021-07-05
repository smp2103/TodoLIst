import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'
import {useTodosState} from '../../contexts/todos-context'



const Box = styled.div`
        height: auto;
        margin: 0 auto;
    `

function TodoBox() {

    const TodoContext = useTodosState();

    return (

        <Box>
            {TodoContext.map((el,index)=>{
                return <TodoList id={index} key = {index} todo = {el}></TodoList>
            })}
        </Box>
    )
}


export default TodoBox;


