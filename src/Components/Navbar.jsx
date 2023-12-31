import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state=useSelector((state)=>state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
            MY COLLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
               Countact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink  to ="/login"className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"> Login</i></NavLink>
                <NavLink to="register"className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"> Register</i></NavLink>
                <NavLink  to="cart"className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"> Cart ({state?.length})</i></NavLink>
          </div>
        </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
