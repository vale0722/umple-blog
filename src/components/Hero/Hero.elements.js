import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const HeroSec = styled(Container)`
    color: #fff;
    height: 20%;
    min-width: 100%;
    position: relative;
    --padding-container: 0;
    --padding-container-sm: 0;
    margin: 0;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(8,8,101,1) 35%, rgba(0,212,255,1) 100%);
`
export const HeroContainer = styled.div`
   display: grid;
   text-align: center;
   padding: 0 100px;
   height: 100%;
   grid-template-columns: 3fr 2fr;
   place-items: center;
   color: var(--color-primary-text);
   line-height: 2.5rem;
   gap: 20px;

   @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
   padding: 0 30px;
   }
`

export const HeroImg = styled.img`
   width: 95%;
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
    fill: rgba(0,212,255,1);
`

export const Heading = styled.h1`
 margin: 24px 0px;
 font-size: 48px;
 line-height: 3rem;
 color: #ffff;
`

export const Subtitle = styled.p`
 text-align: center;
 margin-bottom: 35px;
 font-size:18px;
 line-height: 24px;
 color: #ffff;
`