import React from "react"
import Link from "next/link"
import styled from "styled-components"

import {Title, Segment, Speaker} from "../presentational"
import {primary} from "../presentational/definitions"

const Img = styled.img`
  width: 22px;
  margin-right: 24px;
`
const Outer = styled.div`
  position: relative;
  z-index: 500;

  margin: 240px 0 -16px 0;
  padding: 32px 0 64px 0;
  background-color: #fff;
  border-top: 4px solid #000;

  transform: skew(0deg, 1deg);
`
const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 12px;

  transform: skew(0deg, -1deg);

  p {
    padding-top: 16px;

    color: #000;
  }

  @media screen and (min-width: 660px) {
    display: flex;

    p {
      padding-top: 0;
    }

    p.middle {
      flex: 1;
      padding: 0 12px;

      text-align: center;
    }
  }
`
const A = styled.a`
  &,
  &:visited {
    color: ${primary};
  }
`

export class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Outer>
          <Inner>
            <div style={{width: 160}}>
              <a href="https://www.instagram.com/tedxbern" target="_blank">
                <Img src="/static/Instagram.svg" />
              </a>
              <a href="https://twitter.com/tedxbern" target="_blank">
                <Img src="/static/Twitter.svg" />
              </a>
              <a href="http://facebook.com/tedxbern" target="_blank">
                <Img src="/static/Facebook.svg" />
              </a>
            </div>
            <p className="middle">
              This independent TEDx event is operated under license from TED.
            </p>
            <p style={{width: 160}}>
              <A href={this.props.texts.TedxBernLink} target="_blank">
                Zurück zu TEDx Bern
              </A>
            </p>
          </Inner>
        </Outer>
      </React.Fragment>
    )
  }
}
