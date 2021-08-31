import styled from 'styled-components'
import {Container} from '../../../../globalStyles'

export const HeroSec = styled(Container)`
  height: 100%;
  min-width: 100%;
  position: relative;
  margin: 0;
  flex-grow: 1;
  min-height: 100px;
  background-size: contain;
  background-position: center bottom;
  --padding-container: 0;
  --padding-container-sm: 0;
`

export const HeroContainer = styled.div`
  text-align: center;
  color: var(--color-primary-text-dark);
  line-height: 2.5rem;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`