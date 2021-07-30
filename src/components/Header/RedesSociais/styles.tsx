import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: 768px) {
    bottom: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    right: unset;
    transform: unset;
    position: initial;
    padding: 0px 20px;
  }
`

export const IconsSociais = styled.div`
  div{
    display: flex;
    align-items: center;
    position: relative;
  }

  @media (max-width: 768px) {
    flex-flow: row wrap;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 50px 0px 0px;
    display: inline-flex;
  }
`

export const IconLink = styled(Link)`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 8px;
  border-radius: 50%;
  color: #ffffff;
  border: #ffffff solid 1px;

  :hover{
    color: #ffffff;
  }
`
