import React from "react"
import styled from "styled-components"

import {Button} from "./"
import {normal, bold, primary} from "./definitions"

const breakpoint = 470
const whenDesktop = `@media screen and (min-width: ${breakpoint - 1}px)`
const whenMobile = `@media screen and (max-width: ${breakpoint}px)`

const Wrapper = styled.div`
  position: relative;
  z-index: 300;

  margin-bottom: 24px;

  border: 3px solid black;
  color: black;
  background-color: #fff;

  ${whenDesktop} {
    display: flex;
    flex-direction: row;
  }
`
const Portrait = styled.div`
  ${whenDesktop}{
    flex: 1;
  }
  min-height: 250px;
  position: relative;
  z-index: 300;
  background: no-repeat url("${props => props.src}") center center;
  background-size: cover;

  ${whenMobile}{
    border-bottom: 3px solid black;
  }
  ${whenDesktop}{
    border-right: 3px solid black;
  }
`
const Info = styled.div`
  ${whenDesktop} {
    flex: 2;
  }
  padding: 12px;
`
const InfoTitle = styled.h3`
  font-weight: ${bold};
`
const JobTitle = styled.h4`
  font-weight: ${bold};
  color: ${primary};
`
const Bio = styled.p`
  padding-top: 12px;
`

export class Speaker extends React.Component {
  render() {
    const title = this.props.title[this.props.locale]
    const bio = this.props.bio[this.props.locale]

    return (
      <Wrapper>
        {this.props.images && <Portrait src={this.props.images[0].url} />}
        <Info>
          <InfoTitle>{this.props.name}</InfoTitle>
          {title && <JobTitle>{title}</JobTitle>}
          <Bio>{bio}</Bio>
          {this.props.link && (
            <div>
              <Button target="_blank" href={this.props.link}>
                Mehr erfahren
              </Button>
            </div>
          )}
        </Info>
      </Wrapper>
    )
  }
}
