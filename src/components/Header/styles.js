import styled from 'styled-components'
import {ReactComponent as logoSVG} from './logo.svg'
import {Marginals} from '../../styles'

export const Logo = styled(logoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`
