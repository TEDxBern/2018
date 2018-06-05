import React, {Component} from "react"
import styled from "styled-components"

import {Loading} from "../presentational"
import {primary} from "../presentational/definitions"

const Fullsize = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: ${primary};
  opacity: ${props => props.opacity};
  transition: opacity 2s ease;
`

export class Spinner extends Component {
  render() {
    return (
      <Fullsize opacity={this.props.show ? 1 : 0}>
        {this.props.show && <Loading />}
      </Fullsize>
    )
  }
}
