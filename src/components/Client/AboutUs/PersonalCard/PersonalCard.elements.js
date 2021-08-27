import styled from 'styled-components'

export const AboutUsImg = styled.img`
vertical-align: top;
position: relative;
border-radius: 50%;
 box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
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
 background: #fff;
 color: var(--color-primary-text-dark);
 text-decoration: none;
 border-radius: 4px;
 box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
 width: 280px;
 max-width: 310px;
 &:nth-child(2) {
     margin: 24px;
 }
 &:hover {
     transform: scale(1.03);
     transition: all 0.5s ease-out;
     color: #1c2237;
 }
 @media screen and (max-width: 960px) {
     width: 100%;
     margin: 30px 0 !important;
     &:hover {
       transform: none;
     }
 }
 `

export const CardContainer = styled.div`
 padding: 5% 10% 15%;
`
export const CardTitle = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
`

export const CardText = styled.div`
  font-weight: 400;
  margin: 0;
  line-height: 25px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 1px;
`