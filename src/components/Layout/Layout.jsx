import NavBar from "../NavBar/NavBar";

export default function Layout({ children, cart }) {
  return (
    <>
      <NavBar cart={cart} />
      {children}
    </>
  );
}
