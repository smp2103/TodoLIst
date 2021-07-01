import React  from 'react'
import styled from 'styled-components'

const SectionBox = styled.div`
        width : 1080px;
        margin: 0 auto;
    `
    
function Section(props) {

    return (
        <SectionBox>
            {props.children}
        </SectionBox>
    )
}

export default Section;