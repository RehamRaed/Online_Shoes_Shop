import { useCart } from "../../src/Context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../src/styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useCart([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
        const price = parseFloat(item.price);

        if (!isNaN(price)) {
          return total + price * item.quantity;
        } else {
          return total;
        }
      }, 0)
      .toFixed(2);
  };

  return (
    <section id="cart_section">
      <div className="cart_container_grid">
        <div className="cart_products">
          <h2 style={{ marginBottom: "43px" }}>YOUR CART</h2>
          <div className="cart-header">
            <span className="prod">Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {cartItems.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "18px",
                color: "#777",
              }}
            >
              No products selected yet.
            </p>
          ) : (  
            cartItems.map((item) => {
              const price = parseFloat(item.price);
              const total = !isNaN(price)
                ? (price * item.quantity).toFixed(2)
                : 0;
              return (
                <div className="cart-row" key={item.id}>
                  <div className="product-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      {item.note === "From Offers Page" ? (
                        <>
                          <p className="text-info">{item.note}</p>
                          <p>Size: {item.size}</p>  
                        </>
                      ) : (
                        <>
                          <p>Color: {item.color}</p>
                          <p>Size: {item.size}</p>
                        </>
                      )}
                      <span
                        className="remove"
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "24px",
                          fontWeight: "bold",
                          transition: "color 0.3s ease",
                        }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </span>
                    </div>
                  </div>
                  <span
                    className="price"
                    style={{ textAlign: "center", marginRight: "13px" }}
                  >
                    {item.price}
                  </span>
                  <span
                    className="quantity"
                    style={{ textAlign: "center", marginRight: "13px" }}
                  >
                    {item.quantity}
                  </span>
                  <span
                    className="total"
                    style={{ textAlign: "center", marginRight: "13px" }}
                  >
                    {total}$
                  </span>
                </div>
              );
            })
          )}
        </div>

        <div className="cart_summary_sticky">
          <h3>Order Summary</h3>
          <div className="summary-line">
            <span>Subtotal:</span>
            <span>{calculateSubtotal()}$</span>
          </div>
          <div className="summary-line">
            <span>Total:</span>
            <span>{calculateSubtotal()}$</span>
          </div>
          <p className="tax-note">
            Tax included and shipping calculated at checkout
          </p>

          <Link to="/checkout" className="btn-checkout">
            Proceed to Checkout
          </Link>
          <Link to="/" className="btn-continue">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
