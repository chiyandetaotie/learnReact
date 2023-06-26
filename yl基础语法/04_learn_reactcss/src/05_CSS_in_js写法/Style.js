import styled from 'styled-components'
import {  primaryColor, largeSize} from './style/variables'

export const AppWrapper = styled.div`
.footer{
  border: 1px solid orange;
}
`

export const SectionWrapper = styled.div.attrs(props => {
  return {
    tColor: props.color || "blue"
  }
})`

border: 1px solid red;

.title {
  color: ${props => props.tColor};
  font-size: ${props => props.size}px;

  &:hover {
    background-color: purple;
  }
}

.content {
  font-size: ${largeSize}px;
  color: ${primaryColor};
}
`
