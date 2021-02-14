import React, { useState, FormEvent, useEffect } from 'react'
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
import User from '../../types/user'
import emailValidation from '../../utils/emailValidation'
import IconClose from '../../assets/icon-close.svg'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    const loadUserApi = async () => {
      try {
        const { data } = await api.get<User[]>('/users')
        const [userApi] = data

        setUser(userApi)
      } catch {
        alert('Erro de conexão com a API')
      }
    }

    loadUserApi()
  }, [])

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setEmail(email.trim())

    const comparisonBetweenEmailAndRe = emailValidation(email)

    if (!comparisonBetweenEmailAndRe) {
      setIsValidEmail(comparisonBetweenEmailAndRe)

      return
    }

    if (email === user.email && password === user.password) {
      alert('Login realizado com sucesso')
    } else {
      alert('Erro ao realizar login. Verifique seus dados novamente')
    }

  }

  const handleClickIconClose = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setEmail('')
    setPassword('')
    setIsValidEmail(true)
  }

  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
      <Form onSubmit={handleSubmitForm}>
        <InputGroup isValidEmail={isValidEmail}>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="text"
            name="email"
            id="email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <button type="button" onClick={event => handleClickIconClose(event)}>
            <IconClose />
          </button>
        </InputGroup>

        <InputGroup isValidEmail={true}>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={event => setPassword(event.target.value)}
            value={password}
            required
          />
        </InputGroup>

        <Button type="submit">Entrar</Button>
      </Form>
      <ContainerForgetPassword>
        <p>Esqueceu seu login ou senha?</p>
        <p>
          Clique <Link href="/">aqui</Link>
        </p>
      </ContainerForgetPassword>
    </Container>
  )
}

export default SignIn
