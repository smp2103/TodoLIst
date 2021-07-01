import React from 'react'
import styled from 'styled-components'

const ClickButton = styled.button`
        width: 50px;
        height: auto;
        padding: 0;
        margin: 0;
        border : none;
        margin-left : 3px;
        background-color : transparent;
    `
    
function Button(props){

    return (
        <ClickButton onClick={props.onClick}>{props.children}</ClickButton>
    )
}

export default Button;