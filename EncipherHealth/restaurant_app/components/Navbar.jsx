import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Restaurant</h1>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/reservation">
            Reservation
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
