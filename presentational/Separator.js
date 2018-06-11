import React from "react"
import styled, {injectGlobal} from "styled-components"
import {Parallax} from "react-scroll-parallax"

const acceleration = 200
const Img = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;

  margin-top: 200px;
`

injectGlobal`
  .parallaxOuter--Separator {
    z-index: 0;

    @media screen and (min-width: 1170px) {
      z-index: 200;
    }
  }
`

export class Separator extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Parallax
          className="parallaxOuter--Separator"
          offsetYMax={0}
          offsetYMin={acceleration * -1}
          slowerScrollRate={false}
          tag="figure"
          styleOuter={{
            position: "absolute",
            left: 0,
            width: "100%"
          }}
        >
          <Img src="/static/Separator.png" />
        </Parallax>
      </React.Fragment>
    )
  }
}
