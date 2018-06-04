import React from "react"
import styled from "styled-components"

export const Segment = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => (props.small ? "32px 24px" : "64px 24px 128px 24px")};
`
