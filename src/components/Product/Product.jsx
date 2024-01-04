import { useState } from "react";
import styles from "./Product.module.css";

export default function Product({ product, addToCart }) {
  
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  return (
    <>
      <div className={styles.product}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.price}>
          <p>${product.price}</p>
          <p>{product.rating.rate}/5</p>
        </div>
        <img src={product.image} className={styles.prodImage} />
        <br />
        <form>
          <input type="number" placeholder="quantity" onChange={handleQuantityChange}></input>
          <button
            className={isAdded ? styles.added : styles.addCart}
            onClick={(event) => {
              setIsAdded(true);
              addToCart(event, product, quantity)
            }}
          >
            {isAdded ? "Added!" : "Add to cart"}
          </button>
        </form>
      </div>
    </>
  );
}
