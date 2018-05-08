import React from "react"
import Link from "next/link"
import styled, {keyframes} from "styled-components"

import {lightGrey} from "./definitions"

const fadeIn = keyframes`
  from {
    opacity: 0;
    top: 50px;
  }
  to   {
    opacity: 1;
    top: 0px;
  }
`
const Outer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  z-index: 1000;

  background-color: rgba(255, 255, 255, 0.95);

  animation: ${fadeIn} 0.4s ease;
`

const Close = styled.div`
  text-align: right;
  cursor: pointer;
`

const Inner = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  margin: 64px auto;
  padding: 24px 24px 36px 24px;

  border: 1px solid ${lightGrey};
  border-radius: 4px;
  background-color: #fff;
`

export class Popover extends React.Component {
  render() {
    return (
      <Outer>
        <Inner>
          <Link href={{pathname: "/"}}>
            <Close>
              <img src="/static/Close.svg" />
            </Close>
          </Link>
          {this.props.children}
        </Inner>
      </Outer>
    )
  }
}
