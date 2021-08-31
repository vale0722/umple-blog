import styled from 'styled-components'

export const AboutUsImg = styled.img`
  vertical-align: top;
  position: relative;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  max-width: 60%;
  @media screen and (max-width: 960px) {
    width: 65%;
  }
`

export const AboutUsImgContainer = styled.div`
  padding: 15% 10% 0;
  place-items: center;
  display: grid;
`

export const CardSection = styled.div`
  &:hover {
    transform: scale(1.03);
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: none;
    }
  }
`

export const CardContainer = styled.div`
  padding: 10% 5%;
`