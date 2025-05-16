import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/Contact.css";

function Contact() {
  const position = [31.5, 34.47]; 

  return (
    <section id="contact_section" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Contact Us</h2>
        <Row className="align-items-start">
          <Col lg={6} md={12} className="mb-4 f-column">
            <h4 className="mb-4">We'd love to hear from you!</h4>
            <Form>
              <Form.Group
                className="mb-3 custom-form-group"
                controlId="formName"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  className="custom-input"
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 custom-form-group"
                controlId="formEmail"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  className="custom-input"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 custom-form-group"
                controlId="formMessage"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="custom-input "
                  as="textarea"
                  rows={6}
                  placeholder="Write your message..."
                />
              </Form.Group>

              <button className="send-msg" type="submit">
                Send Message
              </button>
            </Form>
          </Col>

          <Col lg={6} md={12}>
            <div
              className="map-container"
              style={{
                height: "310px",
                width: "90%",
                borderRadius: "8px",
                margin: "50px auto 0 auto",
                paddingTop: "10px",
              }}
            >
              <MapContainer
                center={position}
                zoom={13}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                  <Popup>Gaza - palestine</Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="d-flex justify-content-center gap-4 my-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-3 "></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-3 "></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-tiktok fs-3"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x fs-3 "></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
