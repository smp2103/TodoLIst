import React from 'react'
import styled from 'styled-components';

const FormStyled = styled.form`
    width: 100%;
`

function Form(props) {
    return (
        <FormStyled onSubmit={props.onSubmit}>{props.children}</FormStyled>
    )
}

export default Form;