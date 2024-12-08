import React, { useState } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu'
import { Project } from './project/Project'
import SocialImg from '../../../assets/images/proj-1.png'
import TimerImg from '../../../assets/images/proj-2.png'
import { Container } from '../../../components/Container'
import { AnimatePresence, motion } from "framer-motion"

const tabsItems: Array<{title:string, status: TabsStatusType}> = [
    {
        title: 'All',
        status: 'all'

    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'Spa',
        status: 'spa'
    }
]

const worksData = [
    {
        title: 'Social Network',
        src: SocialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1
    },
    {
        title: 'Timer',
        src: TimerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 2
    },
]

export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState ('all')
    let filterWorks = worksData

    if (currentFilterStatus === 'landing') {
        filterWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filterWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filterWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

  return (
    <StyledProjects id='projects'>
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <TabMenu
            tabsItems={tabsItems}
            changeFilterStatus = {changeFilterStatus}
            currentFilterStatus = {currentFilterStatus}/>
            <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>

            <AnimatePresence>
                {filterWorks.map((w) => {
                    return (
                        <motion.div style={{width: '400px',
                            flexGrow: 1, maxWidth: "540px"}}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={w.id}
                        >
                           <Project
                                src={w.src}
                                title={w.title}
                                text={w.text}
                                key={w.id}
                                />
                        </motion.div>

                    )
                })}
            </AnimatePresence>

            </FlexWrapper>
        </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section `
    ${FlexWrapper} {
        gap: 30px;
    }
    position: relative;
`