import React from 'react'
import { Link } from '../../../../components/Link'
import { Button } from '../../../../components/Button'
import {S} from '../Projects_Styles'

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
        <S.ImageWrapper>
            <S.Image src={props.src} alt=""/>
            <Button>view project</Button>
        </S.ImageWrapper>
        <S.Description>
            <S.ProjectTitle>{props.title}</S.ProjectTitle>
            <S.ProjectText>{props.text}</S.ProjectText>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </S.Description>
    </S.Project>
  )
}

