import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useCart } from "../Context/CartContext";
import "../styles/Offers.css";
import winter1 from "../../src/assest/winter1.png";
import winter2 from "../../src/assest/winter2.png";
import winter3 from "../../src/assest/winter3.png";
import winter4 from "../../src/assest/winter4.png";
import winter5 from "../../src/assest/winter5.png";
import winter6 from "../../src/assest/winter6.png";
import winter7 from "../../src/assest/winter7.png";
import winter8 from "../../src/assest/winter8.png";
import winter9 from "../../src/assest/winter9.png";

function Offers() {
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState({});
  const [showAlert, setShowAlert] = useState(false); 

  const winterShoes = [
    { id: 1, name: "First Winter Boot ", image: winter1, price: "30$", note: "From Offers Page", sizes: [ 42, 43] },
    { id: 2, name: "Classic Winter Boot ", image: winter2, price: "30$", note: "From Offers Page", sizes: [38,  40, 41] },
    { id: 3, name: "Snowy Winter Boot ", image: winter3, price: "30$", note: "From Offers Page", sizes: [41, 42, 43, 44] },
    { id: 4, name: "Frosted Winter Boot ", image: winter4, price: "30$", note: "From Offers Page", sizes: [40, 42] },
    { id: 5, name: "Warm Winter Boot ", image: winter5, price: "30$", note: "From Offers Page", sizes: [ 40] },
    { id: 6, name: "Ultra Comfy Winter Boot ", image: winter6, price: "30$", note: "From Offers Page", sizes: [ 42, 43] },
    { id: 7, name: "Arctic Winter Boot ", image: winter7, price: "30$", note: "From Offers Page", sizes: [39, 40, 41] },
    { id: 8, name: "Glacier Winter Boot ", image: winter8, price: "30$", note: "From Offers Page", sizes: [41, 42, 43] },
    { id: 9, name: "Polar Winter Boot ", image: winter9, price: "30$", note: "From Offers Page", sizes: [38,  40] },
  ];

  const handleSizeChange = (shoeId, size) => {
    setSelectedSize({
      [shoeId]: size,
    });
  };

  const handleAddToCart = (shoe) => {
    if (!selectedSize[shoe.id]) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); 
      return;
    }

    const item = {
      id: `offer-${shoe.id}`,
      name: shoe.name,
      image: shoe.image,
      price: shoe.price,
      quantity: 1,
      note: shoe.note,
      size: selectedSize[shoe.id], 
    };
    addToCart(item);
  };

  return (
    <Container className="offers_section">
        <div className={`custom-alert ${showAlert ? 'show' : ''}`}>
          Please select a size before adding to cart!
      </div>
      <h2 className="text-center mb-4">❄️ Winter Collection Sale ❄️</h2>
      <Row>
        {winterShoes.map((shoe) => (
          <Col key={shoe.id} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 position-relative">
              <Card.Img variant="top" src={shoe.image} alt={shoe.name} />
              <Card.Body className="text-center">
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text className="text-danger fw-bold">{shoe.price}</Card.Text>
                <div className="sizes">
                  <strong>Available Sizes:</strong>
                  <div className="size-buttons">
                    {shoe.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-button ${selectedSize[shoe.id] === size ? "selected" : ""}`}
                        onClick={() => handleSizeChange(shoe.id, size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <button className="add_btn" onClick={() => handleAddToCart(shoe)}>
                  Add to Cart
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      
    </Container>
  );
}

export default Offers;
