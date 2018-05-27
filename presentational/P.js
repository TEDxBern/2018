import styled from "styled-components"

import {normal, small} from "./definitions"

export const P = styled.p`
  position: relative;
  z-index: 300;

  margin-bottom: 12px;
  padding: 12px;

  border: 3px solid black;
  color: black;
  background-color: #fff;

  font-size: ${small};
  font-weight: ${normal};
  letter-spacing: 0.02em;
  line-height: 1.3em;
`
