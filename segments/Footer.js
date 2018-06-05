import React from "react"
import Link from "next/link"
import styled from "styled-components"

import {Title, Segment, Speaker} from "../presentational"

const Img = styled.img`
  width: 22px;
  margin-right: 24px;
`
const Outer = styled.div`
  position: relative;
  z-index: 500;

  margin-top: 240px;
  padding: 32px 0 48px 0;
  background-color: #000;
  border-top: 4px solid #fff;
`
const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 12px;

  p {
    padding-top: 16px;

    color: #fff;
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
              <a
                href="https://nginx-tedxbern-com-develop.ch.amazee.io/"
                target="_blank"
              >
                Zurück zu TEDx Bern
              </a>
            </p>
          </Inner>
        </Outer>
      </React.Fragment>
    )
  }
}
