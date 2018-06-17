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
  opacity: ${props => props.opacity};
  transition: opacity 2s ease;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f9ec7a+0,a4eddc+100 */
  background: rgb(249, 236, 122); /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    rgba(249, 236, 122, 1) 0%,
    rgba(164, 237, 220, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(249, 236, 122, 1) 0%,
    rgba(164, 237, 220, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(249, 236, 122, 1) 0%,
    rgba(164, 237, 220, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#f9ec7a",
      endColorstr="#a4eddc",
      GradientType=1
    ); /* IE6-9 fallback on horizontal gradient */
`

export class Spinner extends Component {
  render() {
    return (
      <Fullsize opacity={this.props.show ? 1 : 0}>
        {this.props.show && <Loading color="#000" />}
      </Fullsize>
    )
  }
}
