import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Menu } from '../../../components/menu/Menu'
import { Project } from './project/Project'
import SocialImg from '../../../assets/images/proj-1.png'
import TimerImg from '../../../assets/images/proj-2.png'




const worksItems = ['All', 'landing page', 'React', 'spa']

export const Projects = () => {
  return (
    <StyledProjects>
        <SectionTitle>Projects</SectionTitle>
        <Menu menuItems={worksItems}/>
        <FlexWrapper justify='space-around'>
            <Project src={SocialImg} title='Social Network' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
            <Project src={TimerImg} title='Timer' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'/>
        </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section `
    min-height: 100vh;
    background-color: #f6bff6;
`