import React from "react"

import {Segment, SiteTitle} from "../presentational"

export class Header extends React.Component {
  render() {
    return (
      <Segment>
        <SiteTitle>
          Wir realisieren zeitsparende und benutzerfreundliche digitale Produkte
          für KMUs und Start-Ups.
        </SiteTitle>
      </Segment>
    )
  }
}
