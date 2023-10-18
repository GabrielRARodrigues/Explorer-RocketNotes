import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;

  resize: none;

  margin-block: 8px;
  padding: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }
`
