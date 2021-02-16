import React from 'react'
import Image from 'next/image'
import GlobalStyle from '../styles/GlobalStyle'
import { Container, SectionSignIn, SectionImage } from '../styles/pages/Home'
import SignIn from '../components/SignIn'
import womanFull from '../assets/woman-desktop.jpg'

const Home: React.FC = () => {
  return (
    <Container>
      <SectionImage>
        <Image src={womanFull} layout="fill" objectFit="cover" />
      </SectionImage>

      <SectionSignIn>
        <SignIn />
      </SectionSignIn>

      <GlobalStyle />
    </Container>
  )
}

export default Home
