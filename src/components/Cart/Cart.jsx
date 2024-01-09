import styles from "./cart.module.css";

export default function Cart({ cart }) {
  const cartTotalPrice = (cart) => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div id={styles.cartContainer}>
      <h1 id={styles.title}>your goods</h1>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
          </tr>
        ))}
      </table>
      <div id={styles.grandTotalContainer}>
        <span id={styles.grandTotal}>Grand Total: ${cartTotalPrice(cart)}</span>
      </div>
      <button id={styles.neuButton}>Checkout</button>
    </div>
  );
}
