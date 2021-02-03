import React from 'react';

// Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="">
      <Container className="bg-info">
        <Row className="text-center">
          <Col className="border border-danger py-5 h6">Hello 1</Col>
          <Col className="border border-danger py-5 h6">Hello 2</Col>
          <Col className="border border-danger py-5 h6">Hello 3</Col>
          <Col className="border border-danger py-5 h6">Hello 4</Col>
          <Col className="border border-danger py-5 h6">Hello 5</Col>
          <Col className="border border-danger py-5 h6">Hello 6</Col>
        </Row>
        <Row>
          <Col className="border border-danger py-5 h6">Remaining</Col>
          <Col xs={6} className="border border-danger py-5 h6">
            6/12
          </Col>
          <Col className="border border-danger py-5 h6">Remaining</Col>
        </Row>
        <Row>
          <Col className="border border-danger py-5 h6" xs lg="2">
            2/12
          </Col>
          <Col className="border border-danger py-5 h6" md="auto">
            Content width
            only........................................................
          </Col>
          <Col className="border border-danger py-5 h6" xs lg="2">
            2/12
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} className="border border-danger py-5 h6">
            xs=12 md=8
          </Col>
          <Col xs={6} md={4} className="border border-danger py-5 h6">
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
