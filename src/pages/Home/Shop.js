import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { useCart } from "../../../src/Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Shop.css";
import { Link } from "react-router-dom";
import sport from "../../assest/19c60e6fae57aa21bc397355a0dac026-removebg-preview.png";
import sandels from "../../assest/fc871d9f52e4217c83c8ca289c32067f-removebg-preview.png";
import heels from "../../assest/662cb3363cc7b0548aba13611a824ed7-removebg-preview.png";
import flats from "../../assest/73368bcf1426f8ae57479a4ea8702f25-removebg-preview.png";
import product1 from "../../assest/01a8r53z.png";
import product2 from "../../assest/nov66av4.png";
import product3 from "../../assest/2t5b101a.png";
import product4 from "../../assest/w2wofvv6.png";
import product5 from "../../assest/rjve22vl.png";
import product6 from "../../assest/inlx4dcj.png";

const products = [
  {
    id: 1,
    name: "Nudelle Flats",
    price: "50$",
    image: product1,
    colors: ["pink", "beige", "white"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36, 37, 38, 39, 40, 41],
  },
  {
    id: 2,
    name: "Sneakers",
    price: "90$",
    image: product2,
    colors: ["white", "beige"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36, 37, 38, 39],
  },
  {
    id: 3,
    name: "Luma Sandal",
    price: "39$",
    image: product3,
    colors: ["pink", "gray", "beige", "white", "black"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36],
  },
  {
    id: 4,
    name: "Running shoes",
    price: "125$",
    image: product4,
    colors: ["white", "black", "blue2"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36, 37, 38, 39, 40, 41],
  },
  {
    id: 5,
    name: "Veloura Pumps",
    price: "45$",
    image: product5,
    colors: ["black", "brown", "gray"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [38, 39],
  },
  {
    id: 6,
    name: "Burgellé Stiletto",
    price: "80$",
    image: product6,
    colors: ["Burgundy"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [39],
  },
];

const categories = [
  { name: "Sport", image: sport, link: "/sport" },
  { name: "Sandals", image: sandels, link: "/sandals" },
  { name: "Heels", image: heels, link: "/heels" },
  { name: "Flats", image: flats, link: "/flats" },
  { name: "All", image: "", link: "/all" },
];

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { addToCart } = useCart();

  const handleClose = () => {
    setSelectedProduct(null);
    setSelectedColor(null);
    setSelectedSize(null);
    setQuantity(1);
  };

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));

  const handleColorSelect = (color) => setSelectedColor(color);
  const handleSizeSelect = (size) => setSelectedSize(size);

  return (
    <section id="shop_section" className="py-5 bg-light">
      <Container>
        <div className={`custom-alert ${showAlert ? "show" : ""}`}>
          Please select both a color and a size before adding to cart.
        </div>

        <h2 className="text-center mb-4">Looking for</h2>
        <Row className="justify-content-center mb-5 text-center">
          {categories.map((cat, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="looking_col">
              <Link to={cat.link} className="text-decoration-none text-dark">
                <div className="category-circle">
                  {cat.name === "All" ? (
                    <span className="category-text">{cat.name}</span>
                  ) : (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="category-image"
                    />
                  )}
                </div>
                <small className="d-block">{cat.name}</small>
              </Link>
            </Col>
          ))}
        </Row>

        <h2 className="text-center mb-5">Latest Products</h2>
        <Row className="g-4 justify-content-start">
          {products.map((product) => (
            <Col key={product.id} lg={4} md={6} sm={12}>
              <div className="product-card-wrapper">
                <Card className="h-100 text-center shadow-sm product-card">
                  <div className="card-overlay">
                    <i
                      className="bi bi-eye eye-icon"
                      onClick={() => setSelectedProduct(product)}
                    ></i>
                    <span className="new-label">New</span>
                  </div>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                </Card>
                <div className="text-center mt-2">
                  <h5 className="pt-1">{product.name}</h5>
                  <p className="price">{product.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={selectedProduct !== null} onHide={handleClose} centered>
          {selectedProduct && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProduct.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex flex-column flex-md-row align-items-center">
                <div className="image-container">
                  <img
                    className="modal_img"
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                  />
                </div>
                <div className="modal_style">
                  <p>Availability: In Stock</p>
                  <p>Price: {selectedProduct.price}</p>

                  <div className="color-options mb-3">
                    <div className="color-circles-row">
                      {selectedProduct.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`color-circle ${color} ${
                            selectedColor === color ? "selected" : ""
                          }`}
                          onClick={() => handleColorSelect(color)}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="size-options mb-3">
                    {selectedProduct.sizes.map((size) => {
                      const isAvailable =
                        selectedProduct.availableSizes.includes(size);
                      return (
                        <div
                          key={size}
                          className={`size-circle ${
                            isAvailable ? "" : "unavailable"
                          } ${selectedSize === size ? "selected" : ""}`}
                          onClick={() => isAvailable && handleSizeSelect(size)}
                        >
                          {size}
                        </div>
                      );
                    })}
                  </div>

                  <div className="quantity-container">
                    <label>Quantity:</label>
                    <div className="quantity-buttons">
                      <button onClick={handleDecrease}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrease}>+</button>
                    </div>
                  </div>

                  <div className="total-price mb-3">
                    <p>
                    Total: 
                    {(
                      parseFloat(selectedProduct.price.replace("$", "")) * quantity
                    ).toFixed(2)}
                    $
                  </p>
                  </div>

                  <button
                    className="add_btn"
                    onClick={() => {
                      if (!selectedColor || !selectedSize) {
                        setShowAlert(true);
                        setTimeout(() => setShowAlert(false), 2000);
                        return;
                      }

                      const productToAdd = {
                        id: `${selectedProduct.id}-${selectedColor}-${selectedSize}`,
                        name: selectedProduct.name,
                        image: selectedProduct.image,
                        price: selectedProduct.price,
                        color: selectedColor,
                        size: selectedSize,
                        quantity,
                      };

                      addToCart(productToAdd);
                      handleClose();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </Modal.Body>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
}

export default Shop;
