import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "8vh",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        backgroundColor: "orangered",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          width: "100%",
          margin: "0",
          gap: "20px",
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          alignItems: "centers",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
