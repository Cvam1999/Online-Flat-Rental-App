import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
      
  <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundImage: "linear-gradient(15deg, #5680e9 0%, #5ab9ea 100%)"}}>
  
  <div className="container-fluid">
    <a className="navbar-brand text-uppercase" href="#">Tenant Services</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="getallflats">Book Flat</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="viewflatbybid">My Bookings</Link>
        </li>
      
           <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
     
      </ul>  
      <form className="d-flex">
      <button className="btn btn-outline-danger my-2 my-sm-0 logout-btn" type="submit"><a href="/login">Logout</a></button>

     
    </form>
    </div>
  </div>
</nav>
        
    )
}

export default Menu
