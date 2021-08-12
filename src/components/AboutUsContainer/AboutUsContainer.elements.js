import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const AboutUsSection = styled(Container)`
    --padding-container: 0;
    --padding-container-sm: 0;
    color: var(--color-primary-text-dark);
    height: 100%;
    min-width: 100%;
    position: relative;
`
export const AboutUsContent = styled.div`
    position: relative;
   display: grid;
   text-align: center;
   padding: 0;
   height: 100%;
   grid-template-columns: 3fr 3fr 3fr;
   place-items: center;
   color: var(--color-primary-text);
   line-height: 2.5rem;
   gap: 20px;

   @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
    gap: 0px;
   }
`