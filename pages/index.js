import React, {Component} from "react"
import {ParallaxProvider} from "react-scroll-parallax"

import {Venue, Speakers} from "../segments"
import {Separator, Separator2} from "../presentational"

export default class extends Component {
  render() {
    return (
      <ParallaxProvider>
        <React.Fragment>
          {[
            Separator,
            Venue,
            Speakers,
            Venue,
            Separator2,
            Speakers,
            Venue,
            Speakers,
            Speakers,
            Venue
          ].map(Component => <Component url={this.props.url} />)}
        </React.Fragment>
      </ParallaxProvider>
    )
  }
}
