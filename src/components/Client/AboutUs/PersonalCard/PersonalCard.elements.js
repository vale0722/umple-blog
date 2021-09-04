import styled from 'styled-components'

export const CardSection = styled.div`
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: 960px) {
    &:hover {
      transform: none;
    }
  }
`