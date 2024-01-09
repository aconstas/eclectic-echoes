import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx"

export default function Layout({ children, cart }) {
  return (
    <>
      <NavBar cart={cart} />
      {children}
      <Footer />
    </>
  );
}
