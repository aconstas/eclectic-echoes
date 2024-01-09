import { useState, useEffect } from "react";
import styles from "./Product.module.css";

export default function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [postClickDelay, setPostClickDelay] = useState(false);

  function handleQuantityChange(event) {
    setQuantity(Number(event.target.value));
  }

  const handleMouseEnter = () => {
    if (!postClickDelay) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = (event) => {
    setIsAdded(true);
    setPostClickDelay(true);
    addToCart(event, product, quantity);

    setTimeout(() => {
      setPostClickDelay(false);
    }, 3000);
  };

  useEffect(() => {
    // Cleanup timeout if component unmounts
    return () => clearTimeout();
  }, []);

  return (
    <>
      <div className={styles.product}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.price}>
          <p>${product.price}</p>
          <p>{product.rating.rate}/5</p>
        </div>
        <img src={product.image} className={styles.prodImage} loading="lazy" />
        <br />
        <form>
          <input
            type="number"
            min="1"
            placeholder="quantity"
            onChange={handleQuantityChange}
          ></input>
          <button
            className={isAdded ? styles.added : styles.addCart}
            onClick={(event) => {handleAddToCart(event)}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isAdded ? (isHovered ? "Update?" : "Added!") : "Add to cart"}
          </button>
        </form>
      </div>
    </>
  );
}
