import React, { useState } from 'react'
import { HeroContainer, BackgroundHero, VideoHero, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForwad, ArrowRight } from './HeroElements'
import Video from '../../assets/video-demo-soccer.mp4'
import { Button } from '../ButtonElement'


const HeroSection = () => {

  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id='hero'>
        <BackgroundHero>
            <VideoHero autoPlay loop muted src={Video} type='video/mp4' />
        </BackgroundHero>
        <HeroContent>
            <HeroH1>Registrate y armá tu equipo!</HeroH1>
            <HeroP>LA MEJOR FORMA DE RESERVAR TU CANCHA</HeroP>
            <HeroBtnWrapper>
                <Button to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                >
                     <span>¡Vamos! </span> { hover ? <ArrowForwad style={{
                        verticalAlign: 'middle'
                     }}/> : <ArrowRight style={{
                        verticalAlign: 'middle'
                     }}/>} 
                        
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
