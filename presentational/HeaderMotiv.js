import React from "react"
import styled from "styled-components"
import {Parallax} from "react-scroll-parallax"

const acceleration = 200
const Img = styled.img`
  margin: 10px 0 0 -380px;
  width: 200px;
`

export class HeaderMotiv extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Parallax
          className="custom-class"
          offsetYMax={acceleration}
          offsetYMin={acceleration * -1}
          slowerScrollRate={false}
          tag="figure"
          styleOuter={{
            position: "absolute",
            zIndex: 200,
            left: "50%"
            // width: "100%"
          }}
        >
          <Img {...this.props} src="/static/HeaderMotiv.svg" />
        </Parallax>
      </React.Fragment>
    )
  }
}
