import React from "react"
import styled from "styled-components"
import {Parallax} from "react-scroll-parallax"

import {bold, medium} from "./definitions"
import {Segment} from "../presentational"

export const Title2 = styled.h2`
  position: absolute;
  z-index: 100;

  display: inline-block;
  margin: 0 0 6px 0;
  padding: 12px;

  border: 3px solid black;
  color: black;
  background-color: #fff;

  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: ${medium};
  font-weight: ${bold};
  line-height: 1.1em;
`

export class Title extends React.Component {
  render() {
    return (
      <Segment small>
        <Parallax
          className="custom-class"
          offsetYMax={50}
          offsetYMin={-50}
          slowerScrollRate={true}
        >
          <Title2>{this.props.children}</Title2>
        </Parallax>
      </Segment>
    )
  }
}
