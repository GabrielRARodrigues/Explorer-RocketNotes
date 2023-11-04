import { Container, Logout, Profile } from './styles'

import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/GabrielRARodrigues.png"
          alt="Foto de usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Gabriel Rocha</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
