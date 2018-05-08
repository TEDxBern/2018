import React from "react"

import {P} from "../../presentational"

export class MobileApp extends React.Component {
  static title = "iOS & Android App"
  static icon = "MobileApp"

  render() {
    return (
      <React.Fragment>
        <P>iOS & Android App</P>
        <P>
          Mobile-Apps für sämtliche Plattformen und Geräte: Wir realisieren
          Lösungen, welche von Ihren Nutzern intuititv verstanden und mit Freude
          gebraucht werden. Dabei starten wir mit der einfachen Nutzung des
          Smartphones als mobile Vermittlungsplattform und nutzen Technologien
          wie Beacons, Geofencing und Augmented Reality für Lösungen über den
          Bildschirm eines Smartphones heraus.
        </P>
      </React.Fragment>
    )
  }
}
