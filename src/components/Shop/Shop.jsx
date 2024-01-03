import { useEffect, useState } from "react";
import Product from "../Product/Product";
import styles from "./Shop.module.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>one sec...</h1>;
  if (error)
    return (
      <h1>
        Oh no! <br /> {error}
      </h1>
    );

  return (
    <>
      <h1 id={styles.title}>the shop</h1>
      <div id={styles.productContainer}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
