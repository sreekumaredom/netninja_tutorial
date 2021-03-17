import React from 'react';

// Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// NOTE:
// Note that Row column widths will override Col
// widths set on lower breakpoints when viewed on larger screens.
// The < Col xs = { 6} /> size will be overriden by < Row md = { 4} /> on medium and larger screens.

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
        <Row xs={2} md={4} lg={6}>
          <Col className="border border-danger py-5 h6">1 of 2</Col>
          <Col className="border border-danger py-5 h6">2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
