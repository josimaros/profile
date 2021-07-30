import React from 'react'
import { Container, ContainerText } from './styles'
import MenuRedesSociais from './RedesSociais'
import Menu from './Menu'

const Header: React.FC = () => {
  return (
    <Container
      className="container-fluid position-relative bg-light-gray">
      <div className="headerContainer">
        <ContainerText className="w-100 text-center">
          <h1 className="text-white">Josimar Silva</h1>
          <h2>Desenvolvedor</h2>
        </ContainerText>
      </div>
      <Menu />
      <MenuRedesSociais />
    </Container>
  )
}

export default Header
