import React from 'react'
import Image from 'next/image'
import GlobalStyle from '../styles/GlobalStyle'
import { Container, SectionSignIn, SectionImage } from '../styles/pages/Home'
import SignIn from '../components/SignIn'

const Home: React.FC = () => {
  return (
    <Container>
      <SectionImage>
        <Image
          src="/woman.jpg"
          width={1100}
          height={990}
          layout="responsive"
        />
      </SectionImage>
      <SectionSignIn>
        <SignIn />
      </SectionSignIn>

      <GlobalStyle />
    </Container>
  )
}

export default Home
