import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">

      <Link to="/" className="brand">
        Drive Nest Car Rentals
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </div>
  );
}

export default Navbar;