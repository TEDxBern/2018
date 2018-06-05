import React, {Component} from "react"
import styled from "styled-components"
import {ParallaxProvider} from "react-scroll-parallax"

import {Text, Venue, Speakers, Footer} from "../segments"
import {RetrieveAirtableRecords, TriggerParallaxUpdate} from "../container"
import {
  HeaderMotiv,
  Segment,
  Separator,
  Separator2,
  Logo,
  Title,
  Spinner
} from "../presentational"
import {bold, primary} from "../presentational/definitions"

const formatText = text => text.replace("\n", "<br />")

const SiteTitle = styled.h1`
  position: relative;
  z-index: 100;

  box-sizing: border-box;
  margin: 64px 24px 0 24px;
  padding: 64px 24px;

  font-size: 54px;

  border: 3px solid black;
  color: black;
  background-color: #fff;

  text-transform: uppercase;

  @media screen and (min-width: 660px) {
    max-width: 480px;
    margin: 64px auto 0 auto;
    padding: 128px 64px;
  }
`
const EventInfos = styled.div`
  position: relative;
  z-index: 300;
  margin: 24px 24px 0 24px;

  @media screen and (min-width: 660px) {
    left: 50%;
    max-width: 275px;
    margin: -50px 0 0 0;
  }

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

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`

export default class extends Component {
  state = {
    texts: {},
    textsLoaded: false,
    images: {},
    imagesLoaded: false
  }
  render() {
    const {textsLoaded, imagesLoaded} = this.state
    const everythingLoaded = textsLoaded && imagesLoaded
    return (
      <>
        <Logo />
        <Spinner show={!everythingLoaded} />
        {everythingLoaded ? this.renderLoaded() : this.renderLoading()}
      </>
    )
  }
  renderLoaded() {
    const {texts, images} = this.state
    return (
      <ParallaxProvider>
        <Wrapper>
          <TriggerParallaxUpdate />
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
          <Footer />
        </Wrapper>
      </ParallaxProvider>
    )
  }
  renderLoading() {
    return (
      <>
        <RetrieveAirtableRecords
          table="Inhalte Text"
          view="TextsList"
          onSuccess={records =>
            this.setState({
              textsLoaded: true,
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
              imagesLoaded: true,
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
