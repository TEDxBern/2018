import React from "react"
import styled from "styled-components"

import {normal, bold, primary} from "./definitions"

export const Button = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 12px;

  font-weight: ${normal};
  border: 3px solid ${primary};

  &,
  &:visited {
    color: ${primary};
    background-color: transparent;
  }
  &:active,
  &:hover {
    color: #fff;
    background-color: ${primary};
  }
`
