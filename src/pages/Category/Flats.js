import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../src/Context/CartContext";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Dropdown,
} from "react-bootstrap";
import "../../styles/Flats.css";
import flat1 from "../../assest/flat1.png";
import flat2 from "../../assest/flat2.png";
import flat3 from "../../assest/flat3.png";
import product1 from "../../assest/01a8r53z.png";

function Flats() {
  const { addToCart } = useCart();

  const [products] = useState([
    {
      id: 1,
      name: "Soft Sparkle",
      price: "55$",
      image: flat1,
      colors: ["red", "blue", "black", "white", "green", "beige"],
      sizes: [38, 39, 40, 42],
      availableSizes: [38, 39, 42],
      bestSeller: true,
    },
    {
      id: 2,
      name: "Luxe Comfort",
      price: "60$",
      image: flat2,
      colors: ["green", "black", "white", "brown", "beige"],
      sizes: [36, 38, 39, 40, 41],
      availableSizes: [36, 38, 40, 41],
      bestSeller: false,
    },
    {
      id: 3,
      name: "Elegant Trace",
      price: "50$",
      image: flat3,
      colors: ["white", "black"],
      sizes: [38, 40, 41, 43, 42],
      availableSizes: [40, 42, 43],
      bestSeller: true,
    },
    {
      id: 4,
      name: "Nudelle Flats",
      price: "25$",
      image: product1,
      colors: ["pink", "beige", "white"],
      sizes: [36, 37, 38, 39, 40, 41],
      availableSizes: [36, 37, 38, 39, 40, 41],
      bestSeller: false,
      isNew: true,
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [columnCount, setColumnCount] = useState(4);
  const [sortOption, setSortOption] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let sortedProducts = [...products];

    if (sortOption === "price-low-high") {
      sortedProducts.sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
    } else if (sortOption === "price-high-low") {
      sortedProducts.sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      );
    } else if (sortOption === "best-selling") {
      sortedProducts.sort(
        (a, b) => (b.bestSeller === true) - (a.bestSeller === true)
      );
    }

    setFilteredProducts(sortedProducts);
  }, [sortOption, products]);

  const handleClose = () => setSelectedProduct(null);
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const getColSize = () => {
    switch (columnCount) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 3;
      default:
        return 3;
    }
  };

  return (
    <Container className="flat_page">
      <div className={`custom-alert ${showAlert ? "show" : ""}`}>
        Please select both a color and a size before adding to cart.
      </div>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          {" "}
          <span className="home-word">Home</span>
        </Link>
        <span className="breadcrumb-separator">{">"}</span>{" "}
        <span className="breadcrumb-current">Flats</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className=" Featured"
          >
            Featured
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOption("")}>
              Clear Filter
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("best-selling")}>
              Best Selling
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("price-low-high")}>
              Price: Low to High
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("price-high-low")}>
              Price: High to Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Column Count Icons */}
        <div className="d-flex align-items-center">
          <Button
            className={`sort_btn me-2 ${columnCount === 1 ? "active" : ""}`}
            onClick={() => setColumnCount(1)}
          >
            <i className="bi bi-layout-sidebar-inset"></i>
          </Button>
          <Button
            className={`sort_btn me-2 ${columnCount === 2 ? "active" : ""}`}
            onClick={() => setColumnCount(2)}
          >
            <i className="bi bi-layout-split"></i>
          </Button>
          <Button
            className={`sort_btn me-2 ${columnCount === 3 ? "active" : ""}`}
            onClick={() => setColumnCount(3)}
          >
            <i className="bi bi-grid-3x3-gap"></i>
          </Button>
          <Button
            className={`sort_btn ${columnCount === 4 ? "active" : ""}`}
            onClick={() => setColumnCount(4)}
          >
            <i className="bi bi-grid-fill"></i>
          </Button>
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
                  {product.bestSeller && (
                    <span className="new-label">Best Seller</span>
                  )}
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
                        onClick={() => setSelectedColor(color)}
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
                        onClick={() => isAvailable && setSelectedSize(size)}
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
                      parseFloat(selectedProduct.price.replace("$", "")) *
                      quantity
                    ).toFixed(2)}
                    $
                  </p>{" "}
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
  );
}

export default Flats;
