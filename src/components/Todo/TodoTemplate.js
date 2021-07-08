import React from 'react'
import styled from 'styled-components'
import TodoBox from './TodoBox'
import TodoCreate from './TodoCreate'
import { TodosContextProvider } from '../../contexts/todos-context'

const Template = styled.div`
        max-width : 600px!important;
        margin: 0 auto;

    `
    const Description = styled.div`
        text-align: center;
        margin : 20px auto;
        font-size : 24px;
        font-weight: 600;
        
    `

function TodoTemplate(){
    
    


    return (
        
        <TodosContextProvider>
            <Description>Todo List</Description>
            <Template>
                <TodoCreate></TodoCreate>
                <TodoBox></TodoBox>
            </Template>
        </TodosContextProvider>
    )
}

export default TodoTemplate;