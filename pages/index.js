import React, {Component} from "react"
import styled from "styled-components"
import {ParallaxProvider} from "react-scroll-parallax"

import {Text, Venue, Speakers} from "../segments"
import {RetrieveAirtableRecords} from "../container"
import {
  HeaderMotiv,
  Segment,
  Separator,
  Separator2,
  Logo,
  Title
} from "../presentational"
import {bold, primary} from "../presentational/definitions"

const formatText = text => text.replace("\n", "<br />")

const SiteTitle = styled.h1`
  position: relative;
  z-index: 100;

  box-sizing: border-box;
  max-width: 480px;

  margin: 64px auto 0 auto;

  padding: 128px 64px;
  font-size: 64px;

  border: 3px solid black;
  color: black;
  background-color: #fff;
`

const EventInfos = styled.div`
  position: relative;
  z-index: 300;
  left: 50%;

  max-width: 275px;
  margin-top: -50px;
  padding: 12px;

  border: 3px solid black;
  background-color: #fcd2c6;
  color: #000;
  line-height: 1.4;

  div.EventDatumZeit {
    font-weight: ${bold};
  }
  div.EventAdresse {
    margin-top: 8px;
    ${"" /* font-weight: ${bold}; */};
  }
`
const Button = styled.a`
  display: block;
  text-align: center;

  font-size: 24px;
  padding: 8px 12px;

  border: 3px solid ${primary};

  &,
  &:visited {
    font-weight: ${bold};
    color: ${primary};
  }
  &:hover {
    background-color: #fcd2c6;
  }
  &:active {
    background-color: ${primary};
    color: #fff;
  }
`

export default class extends Component {
  state = {
    texts: {},
    images: {}
  }
  render() {
    const {texts, images} = this.state
    return (
      <ParallaxProvider>
        {this.renderAirtableFetchers()}
        <>
          <Logo />
          <Separator />
          <HeaderMotiv />
          <SiteTitle>{texts.Claim}</SiteTitle>
          <EventInfos>
            <div className="EventDatumZeit">{texts.EventDatumZeit}</div>
            <div
              className="EventAdresse"
              dangerouslySetInnerHTML={{
                __html: formatText(texts.EventAdresse || "")
              }}
            />
          </EventInfos>
          <Text
            text={texts.IntroText}
            addendum={() => (
              <p>
                <Button href="#" target="_blank">
                  Hier Tickets reservieren
                </Button>
              </p>
            )}
          />

          {texts.SpeakersAnzeigen === "yes" && (
            <>
              <Title>Speakers</Title>
              <Separator2 />
              <Speakers />
            </>
          )}

          <Title>Venue</Title>
          <Separator2 flipped />
          <Venue {...{texts, images}} />

          {/* <Text text={texts.Impressum} /> */}
        </>
      </ParallaxProvider>
    )
  }
  renderAirtableFetchers() {
    return (
      <>
        <RetrieveAirtableRecords
          table="Inhalte Text"
          view="TextsList"
          onSuccess={records =>
            this.setState({
              texts: records.reduce(
                (accumulator, record) => ({
                  ...accumulator,
                  [record.get("Name")]: record.get("Text")
                }),
                {}
              )
            })
          }
        />
        <RetrieveAirtableRecords
          table="Inhalte Bild"
          view="ImagesList"
          onSuccess={records =>
            this.setState({
              images: records.reduce(
                (accumulator, record) => ({
                  ...accumulator,
                  [record.get("Name")]: record.get("Bild")
                    ? record.get("Bild")[0].url
                    : false
                }),
                {}
              )
            })
          }
        />
      </>
    )
  }
}
