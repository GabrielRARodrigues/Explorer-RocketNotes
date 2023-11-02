import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { MyContext } from './myContext'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider
        value={{ name: 'Gabriel Rodrigues', email: 'gabriel@email.com' }}
      >
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
