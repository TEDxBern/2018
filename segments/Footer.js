import React from "react"
import Link from "next/link"
import styled from "styled-components"

import {Title, Segment, Speaker} from "../presentational"

const Outer = styled.div`
  margin-top: 240px;
  padding: 32px 0 200px 0;
  background-color: #000;
  border-top: 4px solid #fff;
`
const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 12px;

  display: flex;

  p {
    color: #fff;
  }
`

const Img = styled.img`
  width: 22px;
  margin-right: 24px;
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
            <p style={{flex: 1, textAlign: "center"}}>
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
