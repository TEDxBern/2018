import React from "react"
import Link from "next/link"
import styled from "styled-components"
import {Parallax} from "react-scroll-parallax"

import {RetrieveAirtableRecords} from "../container"
import {Title, Segment, Speaker} from "../presentational"

export class Speakers extends React.Component {
  render() {
    const {locale} = this.props
    return (
      <React.Fragment>
        <Segment>
          <RetrieveAirtableRecords
            table="Speakers"
            view="SpeakersList"
            render={records =>
              records.map((record, index) => (
                <Speaker
                  key={index}
                  locale={locale}
                  name={record.get("Name")}
                  title={{
                    de: record.get("Job Title"),
                    en: record.get("Job Title EN")
                  }}
                  bio={{
                    de: record.get("Short Bio"),
                    en: record.get("Short Bio EN")
                  }}
                  images={record.get("Portrait") || false}
                  link={record.get("Link")}
                />
              ))
            }
          />
        </Segment>
      </React.Fragment>
    )
  }
}
