import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import {
  Container,
  SectionSignIn,
  SectionImage,
  Img
} from '../styles/pages/Home'
import SignIn from '../components/SignIn'

const Home: React.FC = () => {
  return (
    <Container>
      <SectionImage>
        <Img />
      </SectionImage>

      <SectionSignIn>
        <SignIn />
      </SectionSignIn>

      <GlobalStyle />
    </Container>
  )
}

export default Home
