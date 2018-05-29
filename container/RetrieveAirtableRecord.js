import React from "react"

import AirtableBase from "../api/AirtableBase"

export class RetrieveAirtableRecord extends React.Component {
  state = {
    record: null,
    failed: false
  }

  componentDidMount() {
    AirtableBase(this.props.table).find(this.props.id, (failed, record) => {
      if (failed) {
        this.setState({failed: true})
      } else {
        this.setState({record})
      }
    })
  }

  render() {
    if (this.state.failed) {
      return "Retrieving record has failed!"
    } else if (this.state.record === null) {
      return "Loading…"
    } else {
      return this.props.render(this.state.record)
    }
  }
}
