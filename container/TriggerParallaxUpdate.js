import React, {Component} from "react"

import PropTypes from "prop-types"

export class TriggerParallaxUpdate extends Component {
  static contextTypes = {
    parallaxController: PropTypes.object.isRequired
  }
  componentDidMount() {
    setTimeout(() => {
      this.context.parallaxController.update()
    }, 200)
  }
  render = () => null
}
