import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import logo from "../../assest/freepik-linear-simple-footwear-fashion-logo-20250510104714UPka.png";
import "../../styles/Header.css";
import { useCart } from "../../../src/Context/CartContext";
import { allProducts } from "../../pages/Category/All";
import { Container } from "react-bootstrap";

function Header() {
  const [sideNav, setSideNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const sideNavShow = () => setSideNav(!sideNav);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
      return;
    }
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchTerm]);

  const scrollToSectionAfterNavigate = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    }, 300);
  };

  const navLinks = [
    { name: "Home", type: "route", to: "/" },
    { name: "Shop", type: "scroll", to: "shop_section" },
    { name: "WhyUs", type: "scroll", to: "why_us_section" },
    { name: "Testimonials", type: "scroll", to: "testimonials-section" },
    { name: "Contact", type: "scroll", to: "contact_section" },
  ];

  return (
    <header className={`${sticky ? "sticky" : ""}`}>
      <Container fluid className="px-0">
        <div id="site_header">
          <nav className="navbar" id="Navbar">
            <div className="left-section">
              <div className="navbar-brand">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            <div className="center-section">
              <ul className={`menu-items ${sideNav ? "active" : ""}`}>
                {sideNav && (
                  
                    <i
                      className="bi bi-x close-icon"
                      onClick={() => setSideNav(false)}
                    ></i>
                  
                )}

                {navLinks.map(({ name, to, type }) => (
                  <li key={to}>
                    {type === "scroll" ? (
                      location.pathname === "/" ? (
                        <ScrollLink
                          to={to}
                          smooth={true}
                          offset={-100}
                          duration={500}
                          onClick={() => setSideNav(false)}
                          className="link-item"
                        >
                          {name}
                        </ScrollLink>
                      ) : (
                        <span
                          onClick={() => {
                            scrollToSectionAfterNavigate(to);
                            setSideNav(false);
                          }}
                          className="link-item"
                          style={{ cursor: "pointer" }}
                        >
                          {name}
                        </span>
                      )
                    ) : (
                      <Link
                        to={to}
                        onClick={() => {
                          setSideNav(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="link-item"
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                ))}

                <div className="search-box1">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="bi bi-search search-icon1"></i>
                  {searchTerm && filteredResults.length > 0 && (
                    <ul className="search-results1">
                      {filteredResults.map((item) => (
                        <li key={item.id} className="result_item1">
                          <span
                            className="search-result-link1"
                            onClick={() => {
                              navigate("/all", {
                                state: { selectedProductFromSearch: item },
                              });
                              setSearchTerm("");
                              setSideNav(false);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ul>

              <div className="navbar-toggler" onClick={sideNavShow}>
                <i className="bi bi-list list_icon"></i>
              </div>
            </div>

            <div className="right-section">
              <div className="search-box2">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="bi bi-search search-icon2"></i>
                {searchTerm && filteredResults.length > 0 && (
                  <ul className="search-results2">
                    {filteredResults.map((item) => (
                      <li key={item.id} className="result_item2">
                        <span
                          className="search-result-link2"
                          onClick={() => {
                            navigate("/all", {
                              state: { selectedProductFromSearch: item },
                            });
                            setSearchTerm("");
                            setSideNav(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                to="/cart"
                onClick={() => {
                  setSideNav(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="cart-icon">
                  <i className="bi bi-bag"></i>
                  <span className="cart-count">{cartCount}</span>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
