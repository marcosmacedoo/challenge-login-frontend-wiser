import React, { useState, FormEvent } from 'react'
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
import api from '../../pages/api'
import user from '../../types/user'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // tratar validações

    try {
      const { data } = await api.get<user[]>('/users/')
      const [userApi] = data

      if (email === userApi.email && password === userApi.password) {
        alert('Login realizado com sucesso')
      } else {
        alert('Erro de login. Confira novamente seu dados')
      }
    } catch {
      alert('Erro de conexação com a API')
    }

  }

  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
      <Form onSubmit={handleSubmitForm}>
        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
           />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
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
