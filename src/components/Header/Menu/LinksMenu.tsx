import React from 'react'
import {ContainerLinks} from './styles'

const Menu: React.FC = () => {
  return (
    <ContainerLinks>
      <a className="nav-link active" href="/">Sobre</a>
      <a className="nav-link active" href="/">Habilidades</a>
      <a className="nav-link active" href="/">Habilidades</a>
      <a className="nav-link active" href="/">Portfolio</a> 
      <a className="nav-link active" href="/">Contato</a>
    </ContainerLinks>
  )
}

export default Menu
