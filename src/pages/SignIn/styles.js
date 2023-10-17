import styled from 'styled-components'
import backgroundImg from '../../assets/images/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  & > h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  & > h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-block: 48px;
  }

  & > a {
    margin-top: 124px;

    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex: 1;
  
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
