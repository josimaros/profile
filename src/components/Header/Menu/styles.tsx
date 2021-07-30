import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

export const Container = styled.nav`
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: fixed !important;
  width: 100%;
  transition: background 0.2s linear 0s;
  padding-top: 0px;
  box-shadow: none;

  a{
    color: #ffffff;
    text-decoration: none;
    transition: 0.2s;
    :hover{
      color: #ffffff;
      opacity: 0.6;
    }
  }
`

export const CustomSvg = styled.svg`
  pointer-events: none;
  width: 100%;
  height: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;
  fill: rgb(255 255 255);
`

export const ContainerLinks = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
a{
    color: #ffffff;
    text-decoration: none;
    transition: 0.2s;
    :hover{
      color: #ffffff;
      opacity: 0.6;
    }
  }
`