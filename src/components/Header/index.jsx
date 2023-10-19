import { RiShutDownLine } from 'react-icons/ri'

import { Container, Logout, Profile } from './styles'

export function Header() {
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

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
