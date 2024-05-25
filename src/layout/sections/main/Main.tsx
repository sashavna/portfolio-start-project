import React from 'react'
import styled from 'styled-components'
import photo from '../../../assets/images/myPhoto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
  return (
    <StyledMain>
        <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <NameSurname>I am Sviatlana Kastrykina</NameSurname>
                <MainTitle>Frontend Developer</MainTitle>
            </div>
            <Photo src={photo} alt=""/>
        </FlexWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.div `
    min-height: 100vh;
    background-color: #fffcbb;
`

const Photo = styled.img `
    width: 350px;
    height: 430px;
    object-fit: cover;
    object-position: 80% 20%;
`
const MainTitle = styled.h1`

`
const NameSurname = styled.h2`

`