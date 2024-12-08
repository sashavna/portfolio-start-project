import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'


export const SocialMediaFooter = () => {
  return (
    <StyledSocialMedia>
        <SocialList>
            <SocialItem>
                <SocialLink >
                    <Icon iconId={'linkedin'} height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'vk'} height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} />
                </SocialLink>
            </SocialItem>
            <SocialItem>
            <SocialLink>
                <Icon iconId={'telegram'} height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}/>
            </SocialLink>
            </SocialItem>
        </SocialList>
    </StyledSocialMedia>
  )
}

const StyledSocialMedia = styled.div `


`
const SocialList = styled.ul `
    display: flex;
    gap: 20px;
    margin: 30px 0;

`
const SocialItem = styled.li `

`
const SocialLink = styled.a `
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};
    transition: ${theme.animation.transition};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
        background-color: ${theme.colors.accent};
    }

`