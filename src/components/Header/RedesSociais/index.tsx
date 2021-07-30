import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Container, IconsSociais, IconLink } from './styles'

const RedesSociais: React.FC = () => {
  return (
    <Container>
      <IconsSociais>
        <div><IconLink to="/"><FaFacebookF /></IconLink></div>
        <div><IconLink to="/"><FaTwitter /></IconLink></div>
        <div><IconLink to="/"><FaLinkedinIn /></IconLink></div>
        <div><IconLink to="/"><FaInstagram /></IconLink></div>
      </IconsSociais>
    </Container>
  )
}

export default RedesSociais
