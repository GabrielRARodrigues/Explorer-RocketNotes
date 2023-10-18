import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  & > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 32px auto;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    h1 {
      font-size: 36px;
      font-weight: 500;
      line-height: 47px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  & > section:first-of-type {
    margin-bottom: 48px;
  }
`
