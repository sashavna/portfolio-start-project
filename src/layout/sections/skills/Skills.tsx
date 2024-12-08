import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { Container } from '../../../components/Container'
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
  return (
    <StyledSkillsSection id='technologies'>
        <Container>
        <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Fade cascade={true} damping={0.2}>
                    <Skill iconId ={'codeSvg'} title={'HTML5'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId ={'css'} title={'CSS3'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId ={'react'} title={'REACT'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId ={'typescript'} title={'TYPESCRIPT'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId ={'itemsSprite'} title={'STYLED COMPONENTS'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId ={'figma'} title={'WEB DESIGN'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                </Fade>
            </FlexWrapper>
        </Container>

    </StyledSkillsSection>
  )
}
const StyledSkillsSection = styled.section `
    position: relative;

`