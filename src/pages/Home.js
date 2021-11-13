import React, { useEffect, Fragment } from "react";

import Donate from "../components/images/homePageDonation.png";
import Give from "../components/images/give.webp";
import Gain from "../components/images/gain.webp";

import Mango from "../components/images/mango.jpg";
import Coconut from "../components/images/coconut.jpg";
import Rose from "../components/images/rose.jpg";

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    })

    return (
        <Fragment>
            <a name="donate" />
            <div class="part1">
                <div class="section">
                    <div class="container1">
                        <div class="content-section">                        
                            <div class="content">
                                <h3>Hey!! amigos, you have entered our persnolized page of developing our country</h3>                            
                                <button class="button">
                                    <a href="#">Donate</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top">
                <p>Donate to reforest</p>
                <h2><b>ONLINE DONATION SITE</b></h2>
                <h2><b>FOR EASY AFFORESTATION</b></h2><br/>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="alter" src={Donate} />
                        </div>
                        <div class="col-md-4">
                            <img class="alter" src={Give} />
                        </div>
                        <div class="col-md-4">
                            <img class="alter" src={Gain} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle1">
                <h2>Top selling plants</h2><br/>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="alter" src={Mango}/>
                        </div>
                        <div class="col-md-4">
                            <img class="alter" src={Rose} />
                        </div>
                        <div class="col-md-4">
                            <img class="alter" src={Coconut} />
                        </div>
                    </div>
                    <a name="plantings" /><br/><br/>
                    <h3>All high yielding plants gives you a great profit</h3>
                    <h3>but with all your patience</h3>
                </div>
            </div>
            {/* <!--statistics--> */}
            <div class="stat">
                <h1>Statistics</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div  class="circle">
                            <h3 class="inner-stat">5</h3>
                        </div>
                        <button class="stat-button">CLUB MEMBERS</button>
                    </div>
                    <div class="col-md-4">
                        <div  class="circle">
                            <h3 class="inner-stat">1000</h3>
                        </div>
                        <button class="stat-button2"> DONATIONS</button>
                    </div>
                    <div class="col-md-4">
                        <div  class="circle">
                            <h3 class="inner-stat">100</h3>
                        </div>
                        <button class="stat-button">PLANTED SAPS</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
