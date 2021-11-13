import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar2 from "../components/Navbar2.js";
import Footer from "../components/Footer.js";
import Gallery from"../pages/Gallery.js";
import Login from "../pages/Login.js";
import SignUp from "../pages/SignUp.js";
import Home from "../pages/Home.js";
import Profile from "../pages/Profile.js";
import Shop from "../pages/Shop.js";
import FaqPage from "../pages/Faq.js";
import NotFound from "../pages/NotFound.js";
import AboutUs from "../pages/AboutUs.js";
import Product from "../pages/Product.js";  

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar2 />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} exact={true} />
        <Route path="/profile" component={Profile} />
        <Route path="/shop" component={Shop} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/product/:id" component={Product} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
