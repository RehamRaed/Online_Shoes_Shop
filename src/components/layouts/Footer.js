import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/Footer.css";


function Footer() {
  return (
    <footer className="footer-section text-white ">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column">
            <h5 className="mb-3">Step & Shine</h5>

            <div className="contact-info justify-content-start ">
              <p>📞 059*-***-***</p>
              <p>📧 stepnshine.shop@gmail.com</p>
              <p>🕒 9:00 AM – 7:00 PM</p>
              <p>📍 Gaza – Delivery available nationwide</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              {[
                { name: "Home", to: "hero_section" },
                { name: "Shop", to: "shop_section" },
                { name: "Why Us", to: "why_us_section" },
                { name: "Testimonials", to: "testimonials-section" },
                { name: "Contact", to: "contact_section" },
              ].map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="footer-scroll-link"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column ">
            <h5 className="mb-3">Subscribe to our newsletter</h5>
            <p className="small">
              Stay updated with new arrivals & special offers!
            </p>
            <form className="newsletter-form d-flex align-items-center ">
              <input
                type="email"
                placeholder="Your email"
                className="form-control newsletter-input"
              />
              <button
                type="submit"
                className="btn btn-outline-light newsletter-btn"
              >
                Subscribe
              </button>
            </form>
            <h6>Payment Methods :</h6>
            <div className="payment-icons d-flex gap-2 justify-content-start">
              <i className="bi bi-credit-card-fill text-light"></i>
              <i className="bi bi-credit-card-2-front-fill text-light"></i>
              <i className="bi bi-paypal text-light"></i>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} Step & Shine. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
