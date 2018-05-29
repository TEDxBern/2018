import React from "react"
import styled from "styled-components"

import {normal, bold, primary} from "./definitions"

const Wrapper = styled.div`
  position: relative;
  z-index: 300;

  margin-bottom: 12px;

  border: 3px solid black;
  color: black;
  background-color: #fff;

  display: flex;
  flex-direction: row;
`
const Portrait = styled.div`
  width: 160px;
  min-height: 120px;
  position: relative;
  z-index: 300;
  background: no-repeat url("${props => props.src}") center center;
  background-size: cover;
  border-right: 3px solid black;
`
const Info = styled.div`
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
const Button = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 12px;

  font-weight: ${normal};
  border: 3px solid ${primary};

  &,
  &:visited {
    color: #fff;
    background-color: ${primary};
  }
  &:active,
  &:hover {
    color: ${primary};
    background-color: transparent;
  }
`

export class Speaker extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.images && <Portrait src={this.props.images[0].url} />}
        <Info>
          <InfoTitle>{this.props.name}</InfoTitle>
          {this.props.title && <JobTitle>{this.props.title}</JobTitle>}
          <Bio>{this.props.bio}</Bio>
          {this.props.link && (
            <div>
              <Button href={this.props.link}>Mehr erfahren</Button>
            </div>
          )}
        </Info>
      </Wrapper>
    )
  }
}
