import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/WhyUs.css"; 

function WhyUs() {
  return (
    <section id="why_us_section" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Why Shop with Us</h2>

        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <i className="bi bi-truck mb-3" style={{ fontSize: "45px", color: "#007bff" }}></i> 
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  Get your orders delivered swiftly to your doorstep with our reliable and quick delivery services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
              <i className="bi bi-gift mb-3" style={{ fontSize: "45px", color: "#28a745" }}></i> 
                <Card.Title>Free Shipping</Card.Title>
                <Card.Text>
                  Enjoy free shipping on all orders, no minimum required, for a seamless shopping experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <i className="bi bi-trophy mb-3" style={{ fontSize: "45px", color: "#ffc107" }}></i>
                <Card.Title>Best Quality</Card.Title>
                <Card.Text>
                  We offer top-notch quality products that are carefully selected to meet your expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <p className="lead">
            Choose us for an exceptional shopping experience that guarantees satisfaction and value!
          </p>
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;