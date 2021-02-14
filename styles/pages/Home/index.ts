import styled from 'styled-components'

import imgWomanDesktop from '../../../public/img/woman-desktop.jpg'
import imgWomanMobile from '../../../public/img/woman-mobile.jpg'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    position: relative;
  }
`

export const SectionImage = styled.section`
  min-height: 100vh;
  grid-column: 1 / 8;

  @media (max-width: 768px) {
    grid-column: 1 / 6;
  }

  @media (max-width: 375px) {
    min-height: 100vh;
    grid-column: 1 / 2;
  }
`

export const Img = styled.img`
  width: 100% ;
  height: 101%;
  background: url(${imgWomanDesktop}) no-repeat center center;
  background-size: cover;

  @media (max-width: 375px) {
    background: url(${imgWomanMobile}) no-repeat;
  }
`

export const SectionSignIn = styled.section`
  height: 100vh;
  grid-column: 8 / 13;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    grid-column: 7 / 12;
  }

  @media (max-width: 375px) {
    grid-column: auto;
    min-height: 80vh;
    width: 100%;
    position: absolute;
    margin: 28vh auto 0 auto;
  }
`
