import React from 'react'
import Tilt from 'react-parallax-tilt';
import photo from '../../../assets/images/myPhoto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect'

export const Main: React.FC = () => {
  return (
    <S.Main>
        <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap='wrap'>
                <div>
                    <S.NameSurname>I am <span>Sviatlana Kastrykina</span></S.NameSurname>
                    <S.MainTitle>
                    <p>Frontend Developer</p>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Web Designer'],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}/>
                    </S.MainTitle>
                </div>
                <Tilt
                className="parallax-effect-img"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </Tilt>
            </FlexWrapper>
        </Container>
    </S.Main>
  )
}


