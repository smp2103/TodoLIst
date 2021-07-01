import React, { useContext,useState } from 'react'
import styled from 'styled-components'
import TodosContext from '../../contexts/todos-context'
import Button from '../UI/Button'
import Form from '../UI/Form'

const TodoBlock = styled.div`
    display: flex;
    width : 100%;
    min-height : 50px;
    align-items:center;
    padding: 12px;  
    border-bottom: 1px solid #d7d4d4;
`

const TodoText = styled.div`
    ${props=>{
        if(props.check){
            return 'text-decoration:line-through;color:grey; flex-grow : 2;'
        }else {
            return 'flex-grow : 2;'
        }
    }}
    
`

const TodoInput = styled.input`
    display: block;
    flex-grow:2;
    outline:none;
    border: 0;
    font-size: 24px;
    background-color : white;
`


function TodoList(props){
    const TodoContext = useContext(TodosContext)
    const [isRenaming,setIsRenaming] = useState(false)
    const [check,setIsCheck] = useState(false);
    const [input,setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    
    const renameTodo = () => {
        setIsRenaming(true)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const index = props.id

        TodoContext.onRename(input,index)
        setInput('')
        setIsRenaming(false)
        
    }

    const deleteTodo = (e) => {
        TodoContext.onDelete(e.target.previousSibling.previousSibling.innerText)
    }

    const checkTodo = (e) => {
        const checked = check ? false : true
        setIsCheck(checked)
    }

    return (
        <TodoBlock>
            {isRenaming ? <Form onSubmit={onSubmit}><TodoInput autoFocus onChange={onChange} value={input}></TodoInput></Form>  : <TodoText check={check} onClick={checkTodo}>{props.todo}</TodoText>}
            <Button onClick = {renameTodo}>수정</Button>
            <Button onClick ={deleteTodo}>삭제</Button>
        </TodoBlock>

    )
}

export default TodoList;