import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';

const items = ['Technologies', 'Projects', 'Testimony', 'Contact']


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <SocialMedia/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
`
