import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBox = styled.div`
    display: flex;
    width: 100%;
    align-items : center;
    justify-content: space-between;
    height: 84px;
    border-bottom : 1px solid #d7d4d4;
    padding: 20px;
`

const LeftElements = styled.div`

    display : flex;
    width: 100px;
    margin-left : 10px;


`
const RightElements = styled.div`
    display: flex;
    width : 600px;
    justify-content: flex-end;
    
`
const Name = styled.div`
    font-size: 24px;
    color: black;
`

const FlexBox = styled.div`
    display: flex;
    width : 100px;
    justify-content: space-between;
    margin-right: 10px;
`

const LinkTo = styled(Link)`
    text-decoration : none;
    color:black;

    &:visited {
        text-decoration: none;
    }
`

const FlexWrapper = styled.div`

    width : 800px;
    margin : 0 auto;
    display: flex;
    align-items : center;
    justify-content: space-between;
    height: 84px;
`

function Header() {



    return (
        <HeaderBox>
            <FlexWrapper>
                <LeftElements>
                    <FlexBox>
                        <Name>박상민</Name>
                    </FlexBox>
                </LeftElements>
                <RightElements>
                    <FlexBox>
                        <LinkTo to="/todo" className="todo">TODO</LinkTo>
                        <LinkTo to="/movie" className="movie">영화</LinkTo>
                    </FlexBox>
                </RightElements>
            </FlexWrapper>
        </HeaderBox>
    )
}

export default Header;