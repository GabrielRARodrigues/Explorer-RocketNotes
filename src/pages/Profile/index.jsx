import { useState } from 'react'

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/GabrielRARodrigues.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          value={name}
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={event => setName(event.target.value)}
        />

        <Input
          value={email}
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          value={currentPassword}
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={event => setCurrentPassword(event.target.value)}
        />

        <Input
          value={newPassword}
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={event => setNewPassword(event.target.value)}
        />

        <Button>Salvar</Button>
      </Form>
    </Container>
  )
}
