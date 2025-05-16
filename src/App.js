import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../src/assest/freepik-linear-simple-footwear-fashion-logo-20250510104714UPka.png'
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Home/Shop";
import WhyUs from "./pages/Home/WhyUs";
import Testimonials from "./pages/Home/Testimonials";
import Contact from "./pages/Home/Contact";
import Cart from "./pages/Cart";
import Sport from "./pages/Category/Sport";
import Sandals from "./pages/Category/Sandals";
import Heels from "./pages/Category/Heels";
import Flats from "./pages/Category/Flats";
import AllProducts from "./pages/Category/All";
import Offers from "./pages/offers"
import "./App.css";
const LoadingScreen = () => (
  <div className="loading-screen">
    <img className="loading-logo" src={logo} alt="Loading..." />
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(false); 
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer); 
  }, [location]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="whyus" element={<WhyUs />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sport" element={<Sport />} />
        <Route path="sandals" element={<Sandals />} />
        <Route path="heels" element={<Heels />} />
        <Route path="flats" element={<Flats />} />
        <Route path="all" element={<AllProducts />} />
        <Route path="offers" element={<Offers />} />

      </Route>
    </Routes>
  );
};
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;