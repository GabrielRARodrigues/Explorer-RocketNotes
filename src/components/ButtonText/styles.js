import styled from 'styled-components'

export const Container = styled.button`
  background: none;

  border: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`
