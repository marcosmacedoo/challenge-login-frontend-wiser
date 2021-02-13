import React from 'react'
import Link from 'next/link'
import {
  Container,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  ContainerForgetPassword
} from '../../styles/components/SignIn'

const SignIn = () => {
  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
      <Form>
        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
           />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            />
        </InputGroup>

        <Button>Entrar</Button>
      </Form>
      <ContainerForgetPassword>
        <p>Esqueceu seu login ou senha?</p>
        <p>Clique <Link href="/">aqui</Link></p>
      </ContainerForgetPassword>
    </Container>
  )
}

export default SignIn
