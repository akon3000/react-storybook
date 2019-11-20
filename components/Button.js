import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('button')`
  border: 0;
  padding: 5px;
  color: #FFFFFF;
  background-color: blue;
`

const Button = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Button