import styled from 'styled-components'

export const CardSection = styled.div`
    background: var(--color-primary);
    box-shadow: 0 6px 20px rgba(56, 125, 255, 5%);
    width: 280px;
    height: 500px;
    text-decoration: none;
    border-radius: 4px;
    &:nth-child(2) {
        margin: 24px;
    }
    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }
    @media screen and (max-width: 960px) {
        width: 90%;
        &:hover {
        transform: none;
        }
    }
`
export const CardInfo = styled.div`
display: flex;
flex-direction: column;
height: 500px;
padding: 24px;
align-items: center;
color: #fff;
`;

export const CardIcon = styled.img`
   width: 95%;
   height: 150px;
   margin-bottom: 30px;
   @media screen and (max-width: 960px) {
    width: 65%;
   }
`

export const CardHead = styled.h1`
    color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`

export const CardSubHead = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`

export const Footer = styled.p`
  font-size: 14px;
  width: 100%;
  margin-bottom: 24px;
  text-align: ${({ end }) => (end ? 'end' : 'center')}
`;