import React from "react"

import AirtableBase from "../api/AirtableBase"

export class RetrieveAirtableRecords extends React.Component {
  state = {
    loading: true,
    error: false,
    records: []
  }

  componentDidMount() {
    AirtableBase(this.props.table)
      .select({
        view: this.props.view
      })
      .eachPage(
        (records, fetchNextPage) => {
          this.setState(state => ({
            records: [...state.records, ...records]
          }))
          fetchNextPage()
        },
        error => {
          if (error) {
            this.setState({loading: false, error: true})
          } else {
            this.setState({loading: false})
          }
        }
      )
  }

  render() {
    if (this.state.loading) {
      return "Wird geladen…"
    } else if (this.state.error) {
      return "Ein Fehler ist aufgetreten!"
    } else {
      return this.props.render(this.state.records)
    }
  }
}
