import React from "react"
import styled from "styled-components"

import {Segment} from "../presentational"
import {bold, secondary} from "../presentational/definitions"

const Wrapper = styled.div`
  position: relative;
  z-index: 300;

  margin-bottom: ${props => (props.small ? "" : "24px")};

  border: 3px solid black;
  color: black;
`
const InfoText = styled.p`
  padding: 16px;

  font-size: 18px;
  font-weight: ${bold};
  line-height: 1.5;

  background-color: #fff;
  color: #000;
`
const Addendum = styled.div`
  padding: 16px;

  border-top: 3px solid black;

  background-color: #fff;
  color: #000;
`

export class Text extends React.Component {
  render() {
    return (
      <Segment {...this.props}>
        <Wrapper {...this.props}>
          <InfoText>{this.props.text}</InfoText>
          {this.props.addendum && <Addendum>{this.props.addendum()}</Addendum>}
        </Wrapper>
      </Segment>
    )
  }
}
