import React from 'react'
import styled from 'styled-components'

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
        <Image src={props.src} alt=""/>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={'#'}>demo</Link>
        <Link href={'#'}>code</Link>
    </StyledProject>
  )
}

const StyledProject = styled.div `
background-color: #c7a3a9;
max-width: 540px;
width: 100%;
`
const Image = styled.img `
width: 100%;
height: 260px;
object-fit: cover;
`
const Link = styled.a `

`
const Title = styled.h3 `

`
const Text = styled.p `

`