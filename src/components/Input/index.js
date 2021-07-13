import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: #fff;
  height: 40px;
  padding: 0 1rem;
  border: none;
  font-weight: 600;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

const Input = props => <StyledInput type="text" {...props} />

export default Input
