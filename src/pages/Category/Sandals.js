import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../../src/Context/CartContext";
import { Container, Row, Col, Card, Modal, Button, Dropdown } from 'react-bootstrap';
import "../../styles/Sandals.css";
import sandal1 from "../../assest/sandal1.png";
import sandal2 from "../../assest/sandal2.png";
import sandal3 from "../../assest/sandal3.jpg";
import sandal4 from "../../assest/sandal4.png";
import sandal5 from "../../assest/sandal5.png";
import sandal6 from "../../assest/sandal6.png";
import product3 from "../../assest/2t5b101a.png";
import product5 from "../../assest/rjve22vl.png";

function Sandals() {
  const { addToCart } = useCart();
  const [products] = useState([
    {
      id: 1,
      name: 'Whisper',
      price: 40,
      image: sandal1,
      colors: ['red', 'blue', 'black', 'brown', 'purple'],
      sizes: [38, 39, 40, 41, 42],
      availableSizes: [38, 39, 41],
      bestSeller: true,
    },
    {
      id: 2,
      name: 'Graceful Steps',
      price: 35,
      image: sandal2,
      colors: ['green', 'purple', 'pink2'],
      sizes: [36, 37, 38, 39],
      availableSizes: [36, 38],
      bestSeller: false,
    },
    {
      id: 3,
      name: 'Summer Breeze',
      price: 59,
      image: sandal3,
      colors: ['green2'],
      sizes: [40, 41, 42, 43],
      availableSizes: [40, 42],
      bestSeller: true,
    },
    {
      id: 4,
      name: 'Just a Girl Sandal',
      price: 40,
      image: sandal4,
      colors: ['orange', 'pink', 'green'],
      sizes: [39, 40, 41, 42, 43],
      availableSizes: [39, 41, 42],
      bestSeller: false,
    },
    {
      id: 5,
      name: 'Poise Sandal',
      price: 40,
      image: sandal5,
      colors: ['brown'],
      sizes: [38, 39, 40],
      availableSizes: [38, 39],
      bestSeller: true,
    },
    {
      id: 6,
      name: 'Flutterfly',
      price: 50,
      image: sandal6,
      colors: ['brown', 'blue'],
      sizes: [36, 37, 38, 39, 40],
      availableSizes: [36, 37, 38, 39, 40],
      bestSeller: true,
    },
    {
      id: 7,
      name: "Luma Sandal",
      price: 39,
      image: product3,
      colors: ["pink", "gray", "beige", "white", "black"],
      sizes: [36, 37, 38, 39, 40, 41],
      availableSizes: [36],
      isNew: true
    },
    {
      id: 8,
      name: "Veloura Pumps",
      price: 45,
      image: product5,
      colors: ["black", "brown", "gray"],
      sizes: [36, 37, 38, 39, 40, 41],
      availableSizes: [38, 39],
      isNew: true
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [columnCount, setColumnCount] = useState(4);
  const [sortOption, setSortOption] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let sorted = [...products];
    if (sortOption === 'price-low-high') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-low') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'best-selling') {
      sorted.sort((a, b) => (b.bestSeller === true) - (a.bestSeller === true));
    }
    setFilteredProducts(sorted);
  }, [sortOption, products]);

  const handleClose = () => setSelectedProduct(null);
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const getColSize = () => {
    switch (columnCount) {
      case 1: return 12;
      case 2: return 6;
      case 3: return 4;
      case 4: return 3;
      default: return 3;
    }
  };

  const handleAddToCart = () => {
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
  };

  return (
    <Container className="sandal_page">
      <div className={`custom-alert ${showAlert ? 'show' : ''}`}>
        Please select both a color and a size before adding to cart.
      </div>

      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link"><span className="home-word">Home</span></Link>
        <span className="breadcrumb-separator">{'>'}</span>
        <span className="breadcrumb-current">Sandals</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="Featured">
            Featured
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOption('')}>Clear Filter</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption('best-selling')}>Best Selling</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption('price-low-high')}>Price: Low to High</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption('price-high-low')}>Price: High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex align-items-center">
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              className={`sort_btn me-2 ${columnCount === num ? 'active' : ''}`}
              onClick={() => setColumnCount(num)}
            >
              <i className={`bi ${num === 1 ? 'bi-layout-sidebar-inset' :
                               num === 2 ? 'bi-layout-split' :
                               num === 3 ? 'bi-grid-3x3-gap' :
                               'bi-grid-fill'}`}></i>
            </Button>
          ))}
        </div>
      </div>

      <Row className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} lg={getColSize()} md={6} sm={12}>
            <div className="product-card-wrapper">
              <Card className="h-100 text-center shadow-sm product-card">
                <div className="card-overlay">
                  <i
                    className="bi bi-eye eye-icon"
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedColor(null);
                      setSelectedSize(null);
                      setQuantity(1);
                    }}
                  ></i>
                  {product.isNew && <span className="new-label">New</span>}
                  {product.bestSeller && <span className="new-label">Best Seller</span>}
                </div>
                <Card.Img variant="top" src={product.image} alt={product.name} />
              </Card>
              <div className="text-center mt-2">
                <h5 className="pt-1">{product.name}</h5>
                <p className="price">${product.price}</p>
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
                <img className="modal_img" src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal_style">
                <p>Availability: In Stock</p>
                <p>Price: ${selectedProduct.price}</p>

                <div className="color-options mb-3">
                  <div className="color-circles-row">
                    {selectedProduct.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`color-circle ${color} ${selectedColor === color ? 'selected' : ''}`}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="size-options mb-3">
                  {selectedProduct.sizes.map((size) => {
                    const isAvailable = selectedProduct.availableSizes.includes(size);
                    return (
                      <div
                        key={size}
                        className={`size-circle ${isAvailable ? '' : 'unavailable'} ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => isAvailable && setSelectedSize(size)}
                      >
                        {size}
                      </div>
                    );
                  })}
                </div>

                <div className="quantity-container mb-3">
                  <label>Quantity:</label>
                  <div className="quantity-buttons">
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                  </div>
                </div>

                <div className="total-price mb-3">
                  <p>Total: ${(selectedProduct.price * quantity).toFixed(2)}</p>
                </div>

                <button className="add-to-cart-button" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default Sandals;
