import React from 'react'
import Image from 'next/image'
import GlobalStyle from '../styles/GlobalStyle'
import { Container, SectionSignIn, SectionImage } from '../styles/pages/Home'
import SignIn from '../components/SignIn'
import womanDesktop from '../assets/woman-desktop.jpg'

const Home: React.FC = () => {
  return (
    <Container>
      <SectionImage>
        <Image src={womanDesktop} layout="fill" objectFit="cover" priority />
      </SectionImage>

      <SectionSignIn>
        <SignIn />
      </SectionSignIn>

      <GlobalStyle />
    </Container>
  )
}

export default Home
