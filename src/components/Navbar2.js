import React from 'react'
import { isLoggedIn } from '../utills/auth'


const navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
            <a class="navbar-brand" href="/ ">InnovaTree</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto mb-2 mb-lg-0">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link active" href="/shop">Shop</a>
              <a class="nav-link active" href="/gallery">Gallery</a>
              {(isLoggedIn() ? <a class="nav-link active" href="/profile">profile</a> : <a class="nav-link active" href="/login">Login</a>)} 
            </div>
          </div>
        </div>
      </nav>

        </div>
    )
}

export default navbar
