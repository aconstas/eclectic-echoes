import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import cartIcon from "../../assets/cart-icon.png";
import { useState } from "react";
import Cart from "../Cart/Cart.jsx";

export default function NavBar({ cart }) {
  const [showCart, setShowCart] = useState(false);

  function handleCartClick() {
    setShowCart((showCart) => !showCart);
  }

  function totalItems(cart) {
    let total = 0;
    cart.forEach((item) => (total += Number(item.quantity)));
    return total;
  }

  return (
    <>
      <header className={styles.navbar}>
        <Link to="/" className={styles.link}>
          HOME
        </Link>
        <Link to="/shop" className={styles.link}>
          SHOP
        </Link>
        <div id={styles.cartSection}>
          <img src={cartIcon} alt="cart icon" onClick={handleCartClick} />
          <h2 id={styles.totalItems}>{totalItems(cart)}</h2>
        </div>
      </header>
      {showCart && <Cart cart={cart} />}
    </>
  );
}
