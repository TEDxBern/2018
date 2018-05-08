import React from "react"
import Link from "next/link"
import styled from "styled-components"

import {Segment, Title, P, IconSelection, Popover} from "../presentational"

import {
  MobileApp,
  WebApp,
  Prototyping,
  UserExperience,
  Verband,
  Startups
} from "./offers/"

const offers = [
  MobileApp,
  WebApp,
  Prototyping,
  UserExperience,
  Verband,
  Startups
]

const OfferList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`
const OfferListItem = styled.div`
  flex: 1;
`

export class Offers extends React.Component {
  render() {
    const query = this.props.url.query
    const Offer = query && query.offer ? offers[query.offer] : null
    return (
      <Segment>
        {Offer && (
          <Popover>
            <Offer />
          </Popover>
        )}
        <Title>Was wir anbieten:</Title>
        <OfferList>
          {offers.map((Offer, index) => (
            <OfferListItem key={index}>
              <Link href={{pathname: "/", query: {offer: index}}}>
                <a>
                  <IconSelection icon={Offer.icon} text={Offer.title} />
                </a>
              </Link>
            </OfferListItem>
          ))}
        </OfferList>
        <P>
          Als junges, internationales Team von ambitionierte Digitalenthusiasten
          sind wir auf der Suche nach Herausforderungen. In einer sich immer
          schneller verändernder Welt helfen wir unseren Kunden in der
          Konzeption und Realisierung von digitalen Produkten.
        </P>
      </Segment>
    )
  }
}
