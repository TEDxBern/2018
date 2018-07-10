import React from "react"
import styled from "styled-components"

import {Segment, Button} from "../presentational"
import {bold} from "../presentational/definitions"

const Wrapper = styled.div`
  position: relative;
  z-index: 300;

  margin-bottom: 24px;

  border: 3px solid black;
  color: black;
  background-color: #fff;

  display: flex;
  flex-direction: column;
`
const InfoTitle = styled.h3`
  padding: 12px 12px 0 12px;
  font-weight: ${bold};
`
const InfoText = styled.p`
  padding: 12px;
  line-height: 1.4;
`
const Image = styled.div`
  padding-bottom: 50%;
  position: relative;
  z-index: 300;
  background: no-repeat url("${props => props.src}") center center;
  background-size: cover;
  border-bottom: 3px solid black;
`

export class Venue extends React.Component {
  render() {
    const {texts, images} = this.props
    return (
      <Segment>
        <Wrapper>
          <Image src={images.LocationBild} />
          <InfoTitle>{texts.LocationTitle}</InfoTitle>
          <InfoText>
            {texts.LocationBeschreibung}
            <br />
            <Button href={texts.VenueMapLink} target="_blank">
              {texts.VenueMapTitle}
            </Button>
          </InfoText>
        </Wrapper>
      </Segment>
    )
  }
}
