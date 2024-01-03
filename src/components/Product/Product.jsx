import styles from "./Product.module.css";

export default function Product({ product }) {
  return (
    <>
      <div key={product.id} className={styles.container}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.price}>
          <p>{product.price}</p>
          <p>{product.rating.rate}/10</p>
        </div>
        <img src={product.image} />
      </div>
    </>
  );
}
