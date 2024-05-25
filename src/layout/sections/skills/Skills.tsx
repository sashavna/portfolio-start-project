import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'

export const Skills = () => {
  return (
    <StyledSkillsSection>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
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
        </FlexWrapper>
    </StyledSkillsSection>
  )
}
const StyledSkillsSection = styled.section `
    min-height: 100vh;
    background-color: #adffff;

`