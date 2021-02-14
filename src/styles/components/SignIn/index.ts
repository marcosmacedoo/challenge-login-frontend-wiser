import styled from 'styled-components'
import InputText from '../../../types/input'

export const Container = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12rem 0;

  @media (max-width: 375px) {
    margin: 0;
    background: white;
    width: 85%;
    height: 20rem;
    border-radius: 0.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 345px) {
    height: 23.5rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  line-height: 3rem;
  color: var(--blue-dark);

  @media (max-width: 375px) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const Subtitle = styled.p`
  margin: 1.5rem 0 3rem 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: var(--blue-light);

  @media (max-width: 375px) {
    margin: 1rem 0;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`

export const InputGroup = styled.div<InputText>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  position: relative;

  input {
    border: 1px solid
      ${props => props.isValidEmail ? 'var(--blue-light)' : 'var(--pink)'};
  }

  &::after {
    content: 'Digite um e-mail válido';
    display: ${props => props.isValidEmail ? 'none' : 'block'};
    font-size: 0.750rem;
    line-height: 2rem;
    padding-left: 1rem;
    color: var(--pink);
  }

  button {
    height: 1rem;
    width: 1rem;
    position: absolute;
    bottom: 3rem;
    right: 1rem;
    background: transparent;
    border: 0 none;
    cursor: pointer;
    opacity: ${props => props.isValidEmail ? 0 : 1};
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`

export const Form = styled.form`
  width: 100%;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Label = styled.label`
  font-size: 0.750rem;
  color: var(--blue-dark);
  line-height: 2rem;
  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: 0.625rem;
  }
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

  @media (max-width: 375px) {
    width: 10.5rem;
    box-shadow: 0 0 0 0;
  }
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

  @media (max-width: 375px) {
    margin-top: 1.5rem;
    color: white;

    a {
      color: white;
    }
  }
`
