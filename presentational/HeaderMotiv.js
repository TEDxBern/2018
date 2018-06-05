import React from "react"
import styled, {injectGlobal} from "styled-components"
import {Parallax} from "react-scroll-parallax"

const acceleration = 200
const Img = styled.img`
  margin: 120px 0 0 -380px;
  width: 200px;
`

injectGlobal`
  .parallaxOuter--HeaderMotiv {
    display: none;

    @media screen and (min-width: 660px) {
      display: block;
    }
  }
`

export class HeaderMotiv extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Parallax
          className="parallaxOuter--HeaderMotiv"
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
          <Img {...this.props} src="/static/HeaderMotiv.png" />
        </Parallax>
      </React.Fragment>
    )
  }
}
