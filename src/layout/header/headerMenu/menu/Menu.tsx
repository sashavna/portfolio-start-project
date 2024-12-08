import React from 'react'
import {S} from '../HeaderMenu_Styles'

const items = [
    {
        title: 'Technologies',
        href: "technologies"
    },
    {
        title: 'Projects',
        href: "projects"
    },
    {
        title: 'Testimony',
        href: "testimony"
    },
    {
        title: 'Contact',
        href: "contact"
    }
]

export const Menu: React.FC = () => {
  return (
    <ul>
        {items.map((item, index:number)=>{
            return <S.ListItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to={item.href}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>
            })}
    </ul>
  )
}

