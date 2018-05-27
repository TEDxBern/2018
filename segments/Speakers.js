import React from "react"
import Link from "next/link"
import styled from "styled-components"
import {Parallax} from "react-scroll-parallax"

import {Title, P, Segment} from "../presentational"

export class Speakers extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Segment>
          <P>
            Als junges, internationales Team von ambitionierte
            Digitalenthusiasten sind wir auf der Suche nach Herausforderungen.
            In einer sich immer schneller verändernder Welt helfen wir unseren
            Kunden in der Konzeption und Realisierung von digitalen Produkten.
          </P>
        </Segment>
      </React.Fragment>
    )
  }
}
