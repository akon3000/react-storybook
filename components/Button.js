import React from 'react'
import { rgba } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled('button')`
  border: 0;
  color: #FFFFFF;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 6px;
  background-color: ${({ color }) => color};

  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${({ color }) => rgba(color, 0.5)};
  }
`

const Button = ({
  color,
  children,
}) => (
  <Wrapper
    color={color}
  >
    {children}
  </Wrapper>
)

Button.propTypes = {
  color: string
}

Button.defaultProps = {
  color: '#FD9099'
}

export default Button