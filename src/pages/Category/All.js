import React, { useState, useEffect } from "react";
import { Link ,useLocation} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import sport1 from "../../assest/0idqft74.png";
import sport2 from "../../assest/o1gjf3y4.png";
import sport3 from "../../assest/trk46o2l.png";
import sport4 from "../../assest/y3s4wg7p.png";
import sport5 from "../../assest/zoyuhut1.png";
import flat1 from "../../assest/flat1.png";
import flat2 from "../../assest/flat2.png";
import flat3 from "../../assest/flat3.png";
import sandal1 from "../../assest/sandal1.png";
import sandal2 from "../../assest/sandal2.png";
import sandal3 from "../../assest/sandal3.jpg";
import sandal4 from "../../assest/sandal4.png";
import sandal5 from "../../assest/sandal5.png";
import sandal6 from "../../assest/sandal6.png";
import heel1 from "../../assest/heel1.png";
import heel2 from "../../assest/Heel2.png";
import heel3 from "../../assest/heel3.png";
import heel4 from "../../assest/heel4.png";
import product1 from "../../assest/01a8r53z.png";
import product2 from "../../assest/nov66av4.png";
import product3 from "../../assest/2t5b101a.png";
import product4 from "../../assest/w2wofvv6.png";
import product5 from "../../assest/rjve22vl.png";
import product6 from "../../assest/inlx4dcj.png";
import "../../styles/All.css";

import { useCart } from "../../Context/CartContext";

export const allProducts = [
  {
    id: 1,
    name: "Sporty Max",
    price: "80$",
    image: sport1,
    colors: ["black", "gray", "blue"],
    sizes: [38, 39, 40, 41, 42],
    availableSizes: [38, 39, 40],
    bestSeller: true,
  },
  {
    id: 2,
    name: "Run Fast",
    price: "70$",
    image: sport2,
    colors: ["red", "black", "white"],
    sizes: [36, 37, 38, 39, 40],
    availableSizes: [37, 38, 39],
    bestSeller: false,
  },
  {
    id: 3,
    name: "Power Move",
    price: "90$",
    image: sport3,
    colors: ["blue", "white", "orange"],
    sizes: [39, 40, 41, 42],
    availableSizes: [39, 41],
    bestSeller: true,
  },
  {
    id: 4,
    name: "Active Glide",
    price: "85$",
    image: sport4,
    colors: ["purple", "black"],
    sizes: [38, 40, 42],
    availableSizes: [38, 42],
    bestSeller: false,
  },
  {
    id: 5,
    name: "Sprint Mode",
    price: "75$",
    image: sport5,
    colors: ["gray", "green"],
    sizes: [37, 38, 39],
    availableSizes: [37, 39],
    bestSeller: true,
  },
  {
    id: 6,
    name: "Soft Sparkle",
    price: "55$",
    image: flat1,
    colors: ["red", "blue", "black", "white", "green", "beige"],
    sizes: [38, 39, 40, 42],
    availableSizes: [38, 39, 42],
    bestSeller: true,
  },
  {
    id: 7,
    name: "Luxe Comfort",
    price: "60$",
    image: flat2,
    colors: ["green", "black", "white", "brown", "beige"],
    sizes: [36, 38, 39, 40, 41],
    availableSizes: [36, 38, 40, 41],
    bestSeller: false,
  },
  {
    id: 8,
    name: "Elegant Trace",
    price: "50$",
    image: flat3,
    colors: ["white", "black"],
    sizes: [38, 40, 41, 43, 42],
    availableSizes: [40, 42, 43],
    bestSeller: true,
  },
  {
    id: 9,
    name: "Whisper",
    price: "40$",
    image: sandal1,
    colors: ["red", "blue", "black", "brown", "purple"],
    sizes: [38, 39, 40, 41, 42],
    availableSizes: [38, 39, 41],
    bestSeller: true,
  },
  {
    id: 10,
    name: "Graceful Steps",
    price: "35$",
    image: sandal2,
    colors: ["green", "purple", "pink"],
    sizes: [36, 37, 38, 39],
    availableSizes: [36, 38],
    bestSeller: false,
  },
  {
    id: 11,
    name: "Summer Breeze",
    price: "59$",
    image: sandal3,
    colors: ["green"],
    sizes: [40, 41, 42, 43],
    availableSizes: [40, 42],
    bestSeller: true,
  },
  {
    id: 12,
    name: "Just a Girl Sandal",
    price: "40$",
    image: sandal4,
    colors: ["orange", "pink", "green"],
    sizes: [39, 40, 41, 42, 43],
    availableSizes: [39, 41, 42],
    bestSeller: false,
  },
  {
    id: 13,
    name: "Poise Sandal",
    price: "40$",
    image: sandal5,
    colors: ["brown"],
    sizes: [38, 39, 40],
    availableSizes: [38, 39],
    bestSeller: true,
  },
  {
    id: 14,
    name: "Flutterfly",
    price: "50$",
    image: sandal6,
    colors: ["brown", "blue"],
    sizes: [36, 37, 38, 39, 40],
    availableSizes: [36, 37, 38, 39, 40],
    bestSeller: true,
  },
  {
    id: 15,
    name: "Leather Glow",
    price: "60$",
    image: heel1,
    colors: ["brown", "white", "black"],
    sizes: [38, 39, 40, 41, 42],
    availableSizes: [38, 39, 41],
    bestSeller: true,
  },
  {
    id: 16,
    name: "Bloom Spirit",
    price: "75$",
    image: heel2,
    colors: ["pink"],
    sizes: [36, 37, 38, 39],
    availableSizes: [36, 38],
    bestSeller: false,
  },
  {
    id: 17,
    name: "Confident Step",
    price: "70$",
    image: heel3,
    colors: ["black"],
    sizes: [40, 41, 42, 43],
    availableSizes: [40, 42, 43],
    bestSeller: true,
  },
  {
    id: 18,
    name: "Golden Gleam",
    price: "65$",
    image: heel4,
    colors: ["golden"],
    sizes: [39, 40, 41, 42, 43],
    availableSizes: [39, 41, 42],
    bestSeller: false,
  },
  {
    id: 19,
    name: "Nudelle Flats",
    price: "50$",
    image: product1,
    colors: ["pink", "beige", "white"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36, 37, 38, 39, 40, 41],
    isNew: true,
  },
  {
    id: 20,
    name: "Sneakers",
    price: "90$",
    image: product2,
    colors: ["white", "beige"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36, 37, 38, 39],
    isNew: true,
  },
  {
    id: 21,
    name: "Luma Sandal",
    price: "39$",
    image: product3,
    colors: ["pink", "gray", "beige", "white", "black"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36],
    isNew: true,
  },
  {
    id: 22,
    name: "Running shoes",
    price: "125$",
    image: product4,
    colors: ["white", "black", "blue2"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [36, 37, 38, 39, 40, 41],
    isNew: true,
  },
  {
    id: 23,
    name: "Veloura Pumps",
    price: "45$",
    image: product5,
    colors: ["black", "brown", "gray"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [38, 39],
    isNew: true,
  },
  {
    id: 24,
    name: "Burgellé Stiletto",
    price: "80$",
    image: product6,
    colors: ["Burgundy"],
    sizes: [36, 37, 38, 39, 40, 41],
    availableSizes: [39],
    isNew: true,
  },
];
function AllProducts() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [columnCount, setColumnCount] = useState(4);
  const [sortOption, setSortOption] = useState("");
 const location = useLocation();
  useEffect(() => {
    let sortedProducts = [...allProducts];

    if (sortOption === "price-low-high") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (sortOption === "price-high-low") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    } else if (sortOption === "best-selling") {
      sortedProducts.sort(
        (a, b) =>
          (b.bestSeller === true ? 1 : 0) - (a.bestSeller === true ? 1 : 0)
      );
    }

    setFilteredProducts(sortedProducts);
  }, [sortOption]);
 useEffect(() => {
    const searchProduct = location.state?.selectedProductFromSearch;
    if (searchProduct) {
      setSelectedProduct(searchProduct);
      setSelectedColor(null);
      setSelectedSize(null);
      setQuantity(1);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

 

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
    <Container className="category-page">
      <div className={`custom-alert ${showAlert ? "show" : ""}`}>
        Please select both a color and a size before adding to cart.
      </div>
      <div className="breadcrumb">
        <Link to="/" className="home-word">
          Home
        </Link>
        <span className="breadcrumb-separator"> &gt; </span>
        <span className="breadcrumb-current">All Products</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="Featured">
            Featured
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOption("")}>Clear Filter</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("best-selling")}>Best Selling</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("price-low-high")}>Price: Low to High</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("price-high-low")}>Price: High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex align-items-center">
          <Button className={`sort_btn me-2 ${columnCount === 1 ? "active" : ""}`} onClick={() => setColumnCount(1)}>
            <i className="bi bi-layout-sidebar-inset"></i>
          </Button>
          <Button className={`sort_btn me-2 ${columnCount === 2 ? "active" : ""}`} onClick={() => setColumnCount(2)}>
            <i className="bi bi-layout-split"></i>
          </Button>
          <Button className={`sort_btn me-2 ${columnCount === 3 ? "active" : ""}`} onClick={() => setColumnCount(3)}>
            <i className="bi bi-grid-3x3-gap"></i>
          </Button>
          <Button className={`sort_btn ${columnCount === 4 ? "active" : ""}`} onClick={() => setColumnCount(4)}>
            <i className="bi bi-square"></i>
          </Button>
        </div>
      </div>

      <Row className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} lg={getColSize()} md={6} sm={12}>
            <div className="product-card-wrapper">
              <Card 
                id={`product-${product.id}`}
                className="h-100 text-center product-card border-0"
                onClick={() => setSelectedProduct(product)}
              >
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
                </div>
                <Card.Img variant="top" src={product.image} alt={product.name} />
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
                        className={`color-circle ${color} ${selectedColor === color ? "selected" : ""}`}
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
                        className={`size-circle ${isAvailable ? "" : "unavailable"} ${selectedSize === size ? "selected" : ""}`}
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
  );
}

export default AllProducts;