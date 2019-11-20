import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('button')`
  border: 0;
  color: #FFFFFF;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #FD9099;

  &:focus {
    outline: none;
  }
  &:active {
    background-color: #FDBCC1;
  }
`

const Button = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Button