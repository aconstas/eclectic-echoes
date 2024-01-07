import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import cartIcon from "../../../public/cart-icon.png";
import { useState } from "react";
import Cart from "../Cart/Cart";

export default function NavBar() {
  const [showCart, setShowCart] = useState(false);

  function handleCartClick() {
    setShowCart(!showCart);
  }

  return (
    <>
      <header className={styles.navbar}>
        <Link to="/home" className={styles.link}>
          HOME
        </Link>
        <Link to="/shop" className={styles.link}>
          SHOP
        </Link>
        <img src={cartIcon} alt="cart icon" onClick={handleCartClick} />
      </header>
      {showCart && <Cart />}
    </>
  );
}
