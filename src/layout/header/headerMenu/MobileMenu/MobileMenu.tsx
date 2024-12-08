import React from 'react';
import {S} from '../HeaderMenu_Styles'
import { Menu } from '../menu/Menu';


export const MobileMenu: React.FC = () => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

