import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

export default function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <HeaderLogo />
        </Col>
      </Row>
    </Container>
  );
}
