import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;

  padding: 28px 12px;
  margin-top: -12px;
  background-color: #fff;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  transform: skew(0deg, -6deg);
`

const Img = styled.img`
  width: 200px;
  transform: skew(0deg, 6deg);
`

export class Logo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <a href={this.props.url} target="_blank">
            <Img src="/static/TEDxBern.png" />
          </a>
        </Wrapper>
      </React.Fragment>
    )
  }
}
