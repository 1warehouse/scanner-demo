import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RootPage = () => {
  return (
    <Container>
      <Row className="text-center pt-4">
        <Col>
          <Link to="/scanner1">ZXing scanner</Link>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Link to="/scanner2">Html5-qrcode scanner</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RootPage;
