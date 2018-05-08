import React from "react"
import styled from "styled-components"

import {lightGrey, grey, normal, small} from "./definitions"

const Wrapper = styled.div`
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;

  text-align: center;

  :hover {
    background-color: ${lightGrey};
  }
`
const P = styled.p`
  margin-top: 4px;

  font-size: ${small};
  font-weight: ${normal};
  letter-spacing: 0.02em;
  line-height: 1.3em;
  color: ${grey};
`

export class IconSelection extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.icon && <img src={`/static/${this.props.icon}.svg`} />}
        <P>{this.props.text}</P>
      </Wrapper>
    )
  }
}
