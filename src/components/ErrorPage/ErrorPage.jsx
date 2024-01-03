import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>Well shucks... this is awkward.</h1>
      <Link to="home">go home</Link>
    </>
  );
}
