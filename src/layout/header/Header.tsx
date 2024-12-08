import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { SocialMediaHeader } from './socialMediaHeader/SocialMediaHeader';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/MobileMenu/MobileMenu';
import {S} from './Header_Styles'




export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                    <SocialMediaHeader/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


