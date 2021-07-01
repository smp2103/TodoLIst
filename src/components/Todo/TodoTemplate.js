import React from 'react'
import styled from 'styled-components'
import TodoBox from './TodoBox'
import TodoCreate from './TodoCreate'

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
        <Template>
            <Description>Todo List</Description>
            <TodoCreate></TodoCreate>
            <TodoBox></TodoBox>
        </Template>
    )
}

export default TodoTemplate;