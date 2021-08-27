import styled from 'styled-components'
import { Container } from '../../../../globalStyles'

export const HeroSec = styled(Container)`
    height: 25%;
    min-width: 100%;
    position: relative;
    --padding-container: 0;
    --padding-container-sm: 0;
    margin: 0;
    background: linear-gradient(to right top, #EBFFFF 50%, white 50%);
`

export const HeroContainer = styled.div`
   display: grid;
   text-align: center;
   padding: 5%;
   padding-bottom: 0;
   grid-template-columns: 2fr 3fr;
   place-items: center;
   color: var(--color-primary-text-dark);
   line-height: 2.5rem;
   gap: 20px;

   @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
   padding: 0 30px;
   }
`

export const HeroImg = styled.img`
   width: 85%;
   @media screen and (max-width: 960px) {
    width: 65%;
   }
`

export const HeroWrape = styled.svg`
    min-width: 100%;
    max-width: 100%;
    height: 150px;
    overflow: hidden;
`

export const HeroWrapeClip = styled.path`
    fill: #EBFFFF;
`

export const Heading = styled.h1`
 margin: 24px 0px;
 font-size: 48px;
 line-height: 3rem;
`

export const Subtitle = styled.p`
 text-align: center;
 margin-bottom: 35px;
 font-size:18px;
 line-height: 24px;
`