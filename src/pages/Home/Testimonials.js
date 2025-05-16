import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <Container className="custom-container">
        <h2 className="text-center mb-5 test">What Our Clients Say</h2>

        <Carousel indicators={false} controls={true} interval={7000} fade className="carousel">
          <Carousel.Item>
            <div className="testimonial-card mx-auto">
              <h4 className="name">John Doe</h4>
              <p className="position">CEO at TechCorp</p>
              <p className="testimonial-text">
                Absolutely outstanding experience. The team delivered beyond expectations and helped boost our business like never before.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="testimonial-card mx-auto">
              <h4 className="name">Sarah Lee</h4>
              <p className="position">Marketing Director</p>
              <p className="testimonial-text">
                Their creative strategies brought real growth to our campaigns. I’m incredibly impressed with their attention to detail and follow-through.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="testimonial-card mx-auto">
              <h4 className="name">Omar Khaled</h4>
              <p className="position">Project Manager</p>
              <p className="testimonial-text">
                From planning to execution, everything was smooth. They offered us the best quality and top support all the way.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Testimonials;
