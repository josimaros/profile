import React from 'react';
import LinksMenu from '../Header/Menu/LinksMenu'
import { Container, Row, Col } from 'react-bootstrap'

import { Section } from './styles';

const Footer: React.FC = () => {
  return (
    <Section className="py-4 d-none d-md-block">
      <Container>
        <Row>
          <Col className="d-flex text-decoration-none align-items-center justify-content-center">
            <LinksMenu />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Footer;