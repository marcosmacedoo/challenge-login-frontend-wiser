import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

export const SectionImage = styled.section`
  min-height: 100vh;
  grid-column: 1 / 8;
  scroll-behavior: smooth;
`

export const SectionSignIn = styled.section`
  min-height: 100vh;
  grid-column: 8 / 13;
  display: flex;
  justify-content: center;
`
