import React from "react"
import styled from "styled-components"

import {grey} from "./definitions"

export const Outer = styled.div`
  border-bottom: 1px solid ${grey};
`
export const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px 64px 24px;
`

export class Segment extends React.Component {
  render() {
    return (
      <Outer>
        <Inner>{this.props.children}</Inner>
      </Outer>
    )
  }
}
