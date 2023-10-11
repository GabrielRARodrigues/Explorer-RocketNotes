import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/GabrielRARodrigues.png"
          alt="Foto de usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Gabriel Rocha</strong>
        </div>
      </Profile>
    </Container>
  )
}
