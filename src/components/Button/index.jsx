import React from 'react'
import { Container } from './styles'

export function Button({ children, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  )
}
