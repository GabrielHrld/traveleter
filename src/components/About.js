import React from 'react'
import styled from 'styled-components';
import {Button} from './Button'

import Background from '../assets/images/email.jpg'

const About = () => {
  return (
    <AboutContainer>
      <AboutBg>
        <ImageBg src={Background} alt="island"/>
      </AboutBg>
      <AboutContent>
        <AboutItems>
          <AboutH1>About Us</AboutH1>
          <AboutP>Traveleter is the world's leading online travel company. With 20 years in the market, it operates in more than 120 countries in the region, accompanying people from the moment they dream of traveling to when they are sharing memories. Thanks to its strong commitment to technological development, Traveleter offers a personalized experience for more than 18 million customers.</AboutP>
          <Button big="true" round="true" to="/trips">Travel Now</Button>
        </AboutItems>
      </AboutContent>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  ::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
  }
`

const AboutBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const AboutContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2)
`

const AboutItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;`

const AboutH1 = styled.h1`
  color: #fefefe;
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;  
`

const AboutP = styled.p`
  padding: 2rem;
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2rem;
`
