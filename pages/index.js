import React, {Component} from "react"

import {Header, Offers} from "../segments"

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        {[Header, Offers].map(Component => <Component url={this.props.url} />)}
      </React.Fragment>
    )
  }
}
