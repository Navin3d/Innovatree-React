import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

import { isLoggedIn } from "../utills/auth";
import { handleLogout } from "../utills/auth";

function Navbar() {
  const [logging, setLogging] = useState(false);

  useEffect(() => {
    setLogging(isLoggedIn())
  }, []);

  const handleLog = async () => {
    handleLogout();
  } 

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            InnovaTree
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto mb-2 mb-lg-0">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link active" href="/shop">
                Shop
              </a>
              <a class="nav-link active" href="/shop/products">
                Product
              </a>
              {logging ? 
                <button class="nav-link active" onClick={handleLog}>
                  Logout
                </button>
              : 
                <a class="nav-link active" href="/login">
                  Log-In
                </a>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
