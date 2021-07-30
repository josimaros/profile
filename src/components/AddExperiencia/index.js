import React from 'react';
import { Row, Image } from 'react-bootstrap'

import { Title, Content, ContainerContent, ColImage, CustomCol,Indicado } from './styles';

function AddExperiencia() {
  return (
    <>
      <Row className="py-3">
        <CustomCol sm={12} lg={6} className="my-4" left>
          <Indicado left>1</Indicado>
          <ColImage>
            <Image src="https://hosting.renderforestsites.com/images/5699226/187562/ff398c7a086def08fdcab07ee6a805cf.jpg" fluid rounded />
          </ColImage>
        </CustomCol>
        <CustomCol sm={12} lg={6}>
          <ContainerContent left>
            <Title left>Educação</Title>
            <Content>
              <p>2016-2017 Estonian Entrepreneurship University of Applied Sciences Desenvolvimento de Software e Empreendedorismo</p>
              <p>2011-2015 Michigan State University Graduação em desenvolvimento e web design</p>
              <p>2009-2011 High School Brooklyn Technical High School</p>
            </Content>
          </ContainerContent>
        </CustomCol>
      </Row>
      <Row className="">
        <CustomCol sm={12} lg={6}>
        <Indicado>2</Indicado>
          <ContainerContent>
            <Title>Experiência de trabalho</Title>
            <Content>
            <p>Desenvolvedor de front-end sênior atual em 2020 No campus da sede da Amazon em Seattle 2017-2019</p>
            <p>Desenvolvedor de front-end sênior remoto Na Google LLC, com base na América 2016-2017</p>
            <p>Desenvolvedor front-end na High Technologies LLC, com sede em Tallinn, Estônia 2014-2016</p>
            <p>Junior desenvolvedor front-end na empresa de soluções de TI com sede em Michigan</p> 
            </Content>
          </ContainerContent>
        </CustomCol>
        <CustomCol sm={12} lg={6} className="mt-4">
          <ColImage>
            <Image src="https://hosting.renderforestsites.com/images/5699226/187562/ff398c7a086def08fdcab07ee6a805cf.jpg" fluid rounded />
          </ColImage>
        </CustomCol>
      </Row>
    </>
  )
}

export default AddExperiencia;