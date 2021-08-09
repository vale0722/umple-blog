import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const SubHeroContainer = styled(Container)`
   display: grid;
   text-align: center;
   padding: 0 100px;
   height: 100%;
   grid-template-columns: 3fr 3fr 3fr;
   place-items: center;
   color: var(--color-primary-text);
   line-height: 2.5rem;
   gap: 20px;

   @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0px;
   }
`