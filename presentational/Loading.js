import React, {Component} from "react"

import styled, {keyframes} from "styled-components"

const Ring = styled.div`
  display: inline-block;
  ${props => !props.small && "position: absolute; left: 50%"};
  width: ${props => (props.inline ? "32px" : "64px")};
  height: ${props => (props.inline ? "32px" : "64px")};
  ${props => !props.inline && `top: 50vh; margin: -32px 0 0 -32px;`};
  ${props => props.inline && !props.small && `margin: 32px 0`};
  ${props => props.small && `transform: scale(0.5)`};
`

const ringKeyframes = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
   transform: rotate(360deg);
  }
`

const ringChildStyles = `
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #be2d27;
  border-radius: 50%;
  animation: ${ringKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`

const RingChild0 = styled.div`
  ${ringChildStyles};
  border-color: ${props => props.color} transparent transparent transparent;
`
const RingChild1 = styled.div`
  ${ringChildStyles} animation-delay: -0.45s;
  border-color: ${props => props.color} transparent transparent transparent;
`

const RingChild2 = styled.div`
  ${ringChildStyles} animation-delay: -0.3s;
  border-color: ${props => props.color} transparent transparent transparent;
`

const RingChild3 = styled.div`
  ${ringChildStyles} animation-delay: -0.15s;
  border-color: ${props => props.color} transparent transparent transparent;
`

export class Loading extends Component {
  render() {
    const color = this.props.color ? this.props.color : "#FFF"
    return (
      <Ring {...this.props}>
        <RingChild0 color={color} />
        <RingChild1 color={color} />
        <RingChild2 color={color} />
        <RingChild3 color={color} />
      </Ring>
    )
  }
}
