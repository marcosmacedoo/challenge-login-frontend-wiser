import styled from 'styled-components'

export const Container = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12rem 0;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  line-height: 3rem;
  color: var(--blue-dark);
`

export const Subtitle = styled.p`
  margin: 1.5rem 0 3rem 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: var(--blue-light);
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`

export const Form = styled.form`
  width: 100%;
`

export const Label = styled.label`
  font-size: 0.750rem;
  color: var(--blue-dark);
  line-height: 2rem;
  text-transform: uppercase;
`

export const Input = styled.input`
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid var(--blue-light);
  border-radius: 0.5rem;
  color: var(--blue-light);
  font-size: 0.750rem;
  line-height: 3rem;
  outline: none;
`

export const Button = styled.button`
  height: 3rem;
  width: 100%;
  margin-top: 1rem;
  border: none;
  text-transform: uppercase;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
`

export const ContainerForgetPassword = styled.div`
  margin-top: 2.5rem;
  text-align: center;
  color: var(--blue-light);
  font-size: 0.875rem;

  p {
    line-height: 1.5rem;
  }

  a {
    color: var(--purple);
  }
`
