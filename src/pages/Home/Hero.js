import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import Countdown from "../../components/Countdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Hero.css";

function Hero() {
  const carouselRef = useRef(null);

  const goToNext = () => carouselRef.current?.next();
  const goToPrev = () => carouselRef.current?.prev();

  return (
    <Carousel
      controls={false}
      indicators={false}
      interval={8000}
      fade
      ref={carouselRef}
    >
      <Carousel.Item>
        <section id="hero_section" className="position-relative">
          <Container>
            <h3 className="title">
              Welcome to <br />
              <span>Step & Shine</span>
            </h3>
          </Container>

          <button
            className="custom-btn position-absolute bottom-0 start-0 m-4"
            onClick={goToPrev}
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <button
            className="custom-btn position-absolute bottom-0 end-0 m-4"
            onClick={goToNext}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </section>
      </Carousel.Item>

      <Carousel.Item>
        <section className="vh-100 d-flex align-items-center text-white position-relative" style={{ backgroundColor: "rgb(64, 2, 23) " }}>
          <Container className="text-center">
            <h1 className="display-4 text-warning mb-3">
               Winter Collection Sale – Up to 50% OFF 
            </h1>

            <Countdown />

            <p className="mt-4">
              Snag your winter favorites before the warmth returns
            </p>

            <Link to="/offers" className="btn btn-warning mt-4  px-4 py-2">
              Discover Offers
            </Link>
          </Container>

          <button
            className="custom-btn position-absolute bottom-0 start-0 m-4"
            onClick={goToPrev}
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <button
            className="custom-btn position-absolute bottom-0 end-0 m-4"
            onClick={goToNext}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </section>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
