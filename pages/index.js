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

const LogoBanner = styled.div`
  position: absolute;
  z-index: 580;

  top: -80px;
  width: 100%;
  height: 160px;

  background-color: #f9ec7a;
  border-bottom: 3px solid #000;

  transform: skew(0deg, -1deg);

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f9ec7a+0,a4eddc+100 */
  background: rgb(249, 236, 122); /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    rgba(249, 236, 122, 1) 0%,
    rgba(164, 237, 220, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(249, 236, 122, 1) 0%,
    rgba(164, 237, 220, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(249, 236, 122, 1) 0%,
    rgba(164, 237, 220, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#f9ec7a",
      endColorstr="#a4eddc",
      GradientType=1
    ); /* IE6-9 fallback on horizontal gradient */
`
const SiteTitle = styled.h1`
  position: relative;
  z-index: 100;

  box-sizing: border-box;
  margin: 110px 24px 0 24px;
  padding: 64px 24px;

  font-size: 54px;
  font-weight: ${bold};

  border: 3px solid black;
  color: black;
  background-color: #fff;

  text-transform: uppercase;

  @media screen and (min-width: 660px) {
    max-width: 480px;
    margin: 130px auto 0 auto;
    padding: 100px 64px;
  }
`
const EventInfos = styled.div`
  position: relative;
  z-index: 220;

  box-sizing: border-box;
  margin: 24px 24px 0 24px;

  color: #000;
  line-height: 1.4;

  div.EventDatumZeit {
    font-weight: ${bold};
  }
  div.EventAdresse {
    margin-top: 8px;
  }

  @media screen and (min-width: 660px) {
    max-width: 480px;
    margin: 24px auto 24px auto;
    ${"" /* padding: 128px 64px; */};
  }
  ${"" /* @media screen and (min-width: 830px) and (max-width: 1300px) {
    padding: 12px;
    border: 3px solid #000;
    background-color: #fff;
    z-index: 220;
  } */};
`
const buttonColor = "#C769E3"
const buttonColorLight = "#F1D9F8"
const Button = styled.a`
  display: block;
  text-align: center;

  font-size: 24px;
  padding: 8px 12px;

  border: 3px solid ${buttonColor};

  &,
  &:visited {
    font-weight: ${bold};
    color: ${buttonColor};
  }
  &:hover {
    background-color: ${buttonColorLight};
  }
  &:active {
    background-color: ${buttonColor};
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
        <Logo url={textsLoaded && this.state.texts.TedxBernLink} />
        {everythingLoaded && <LogoBanner />}
        <Spinner show={!everythingLoaded} />
        {everythingLoaded ? this.renderLoaded() : this.renderLoading()}
      </>
    )
  }
  renderLoaded() {
    const {texts, images} = this.state
    const showSpeakers = texts.SpeakersAnzeigen === "yes"
    return (
      <ParallaxProvider>
        <Wrapper>
          <TriggerParallaxUpdate />
          <Separator />
          {/* <HeaderMotiv /> */}
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
                <Button href={texts.TicketingLink} target="_blank">
                  Hier Tickets reservieren
                </Button>
              </p>
            )}
          />

          {showSpeakers ? (
            <>
              <Separator2 flipped={!showSpeakers} style={{marginTop: -400}} />
              <Title>Speakers</Title>
              <Speakers />
            </>
          ) : (
            <>
              <Separator2 flipped={!showSpeakers} style={{marginTop: -400}} />
              <Title>Speakers</Title>
              <Text text={<em>Äs chunnt gli, häbet chli Geduld…</em>} />
            </>
          )}

          <Title>Venue</Title>
          <Separator2 flipped={showSpeakers} />
          <Venue {...{texts, images}} />

          {/* <Text text={texts.Impressum} /> */}
          <Footer {...{texts}} />
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
