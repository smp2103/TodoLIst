import React, { useContext,useState } from 'react'
import styled from 'styled-components'
import TodosContext from '../../contexts/todos-context'
import Form from '../UI/Form'




const Input = styled.input`
        display: block;
        width:600px;
        margin: 0 auto;
        outline:none;
        border: 0;
        height: 48px;
        font-size: 24px;
        border-bottom: 1px solid #d7d4d4;
    `

function TodoCreate() {

    const TodoContext = useContext(TodosContext)
    const [input,setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const createTodo = (e) => {
        e.preventDefault();
        TodoContext.onAdd(input)
        setInput('')
    }

    return (
        <Form onSubmit={createTodo}>
            <Input autoFocus type="text" placeholder="무엇을 해야하나요?" onChange={onChange} value={input} ></Input>
        </Form>
        
    )
}


export default TodoCreate;