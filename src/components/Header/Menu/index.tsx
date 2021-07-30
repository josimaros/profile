import React from 'react'
import LinksMenu from './LinksMenu'
import { Container, CustomSvg } from './styles'

const Menu: React.FC = () => {
  return (
    <Container className="navbar navbar-expand-lg">
      <div className="container-fluid py-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <CustomSvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M4 8h24v2.688H4V8zm0 9.313v-2.625h24v2.625H4zM4 24v-2.688h24V24H4z"></path></CustomSvg>
          {/* <span className="navbar-toggler-icon" /> */}
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              <LinksMenu />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Menu
