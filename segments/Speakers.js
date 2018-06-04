import React from "react"
import Link from "next/link"
import styled from "styled-components"
import {Parallax} from "react-scroll-parallax"

import {RetrieveAirtableRecords} from "../container"
import {Title, Segment, Speaker} from "../presentational"

export class Speakers extends React.Component {
  render() {
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
                  name={record.get("Name")}
                  title={record.get("Job Title")}
                  bio={record.get("Short Bio")}
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
