import React from "react"
import styled from "styled-components"

import {bold} from "../presentational/definitions"

const Wrapper = styled.div`
  display: inline-block;

  margin: 100px 20px 0 0;
  padding: 4px 6px;

  text-transform: uppercase;
  letter-spacing: 0.05em;

  color: #000;
  border: 2px solid #000;
  background-color: #fff;

  font-weight: ${bold};

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export class LocaleSwitcher extends React.Component {
  render() {
    return (
      <Wrapper>
        <p onClick={this.props.onClick}>{this.props.locale}</p>
      </Wrapper>
    )
  }
}
