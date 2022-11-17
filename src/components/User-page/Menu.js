import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-bg-dark "
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(115,85,88,1) 0%, rgba(205,105,80,1) 94%, rgba(1,0,0,1) 97%, rgba(7,7,7,1) 100%)",
      }}
    >
      <div className="container-fluid" id="maindiv">
        <a className="navbar-brand text-uppercase" href="#">
          User Services
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="viewuser">
                View User by Id
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="updateuser">
                Update Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="viewalluser">
                View All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="deleteuser">
                Delete User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-outline-danger my-2 my-sm-0 logout-btn"
              type="submit"
            >
              <a href="/login">Logout</a>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
