import React from "react"
import styled from "styled-components"
import {Parallax} from "react-scroll-parallax"

const acceleration = 200
const Img = styled.img`
  width: 100%;
  height: 100%;
  ${"" /* height: 250px; */};
`

export class Separator extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Parallax
          className="custom-class"
          offsetYMax={0}
          offsetYMin={acceleration * -1}
          slowerScrollRate={false}
          tag="figure"
          styleOuter={{
            position: "absolute",
            zIndex: 200,
            left: 0,
            width: "100%"
          }}
        >
          <Img src="/static/Separator.svg" />
        </Parallax>
      </React.Fragment>
    )
  }
}
