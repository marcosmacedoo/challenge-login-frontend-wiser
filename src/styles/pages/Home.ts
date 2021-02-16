import styled from 'styled-components'

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
  position: relative;

  @media (max-width: 768px) {
    grid-column: 1 / 6;
  }

  @media (max-width: 375px) {
    min-height: 100vh;
    grid-column: 1 / 2;
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
