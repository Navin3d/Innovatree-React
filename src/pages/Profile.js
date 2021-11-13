import React, { useState, useEffect, Fragment } from "react";
import cookie from "js-cookie";
import { useHistory } from "react-router";

import { baseUrl } from "../utills/baseUrl";
import axios from "axios";
import { isLoggedIn } from "../utills/auth";

const Profile = () => {

    let history = useHistory();

    const [user, setUser] = useState("");
    const [wallet, setWallet] = useState("");

    useEffect(async () => {

        (!isLoggedIn() && history.push("/login"))

        const userId = await cookie.get("UserId");
        const Authorization = await cookie.get("Authorization");
        const headers = { Authorization };

        const url = `${baseUrl}/users/profile/${userId}`;
        const walletUrl = `${baseUrl}/payment/${userId}/balance`;

        const userResponse = await axios.get(url, { headers }).catch(err => {console.log("Error: "+err)});
        const walletRespone = await axios.get(walletUrl, { headers });
        
        setUser(userResponse.data);
        setWallet(walletRespone.data);

        document.title = userResponse.data.firstName;
    });

    return(
        <Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>            
                    <div class="col-md-4">
                        <p class="profile-head">PROFILE</p>
                    </div>
                    <div class="col-md-4"></div>                
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image">
                        <img class="profile-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGXkn6Eo8eeiFv7O-1QEaenXwr_EcqmxtnQ&usqp=CAU" alt="photo" />
                        
                        <div class="username">
                            <p>{user.firstName}</p>
                        </div>
                        <button>My achievements</button>
                    </div>
                    </div>
                    <div class="col-md-9">
                        <div class="info-box">
                            <p class="info-details">Name : {user.firstName +" "+ user.lastName}</p>
                            <p class="info-details">Email : {user.email}</p>
                            <p class="info-details">Aadharnumber : {user.aadharNumber}</p>
                            <p class="info-details">Phone number : {user.phoneNumber}</p>
                            <p class="info-details">Address: 3/788,vivekanandha street madhanandhapuram porur chennai</p>
                            <button class="edit">Edit</button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4"> </div>
                
                    <div class="col-md-4">
                        <div class="space1"></div>
                        <p class="profile-head">WALLET</p>
                    </div>

                    <div class="col-md-4"></div>
                    
                </div>
                
                <div class="row">
                    <hr />
                    <div class="col-md-6">
                        <hr />
                        <p class="wallet-info">Wallet Balance</p>
                        
                    </div>
                    <div class="col-md-6"> 
                        <hr />
                        <p class="wallet-balance">{wallet.walletBalence}</p>
                        
                    </div>
                </div>
                <div class="row">
                    <hr />
                    <div class="col-md-6">
                        <hr />
                        <p class="wallet-info">Wallet gain</p>
                        
                    </div>
                    <div class="col-md-6"> 
                        <hr />
                        <p class="wallet-balance">{wallet.amountEarned}</p>
                        
                    </div>
                </div>
                <div class="row">
                    <hr />
                    <div class="col-md-6">
                        <hr />
                        <p class="wallet-info">Wallet spent</p>
                        
                    </div>
                    <div class="col-md-6"> 
                        <hr />
                        <p class="wallet-balance">{wallet.amountPaid}</p>
                        
                    </div>
                    <hr/>
                </div>
                <p>
            
                    <button class="btn btn-primary" id="grenos" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        ADD GRENOS
                    </button>
                </p>
                

                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
            
                <div class="row">
                    <div class="col-md-4"> </div>
                
                    <div class="col-md-4">
                        <div class="space1"></div>
                        <p class="profile-head">PAYMENT</p>
                    </div>

                    <div class="col-md-4"></div>
                    
                </div>
                <hr />
                <div class="row">
                    <div class="col-md-6">
                        <p class="card-name"> CARD NUMBER</p>
                    </div>
                    <div class="col-md-6">
                        <input class="cardname-box" type="number" name="" id="" placeholder="1244 3425 3453 5234" />
                    </div>
                    
                </div>

            
                <div class="row">
                    <div class="col-md-6">
                    <p class="card-name">PAYMENT <p5 class="notify"> <br />(1 ruppe is 1 grenos)* </p5></p>
                    </div>
                    <div class="col-md-6">
                        <input class="cardname-box"  type="number" name="" id="" placeholder="2000rs" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                    <p class="card-name">EXPIRY DATE</p>
                    </div>
                    <div class="col-md-6">
                        <input class="cardname-box"  type="date" placeholder="06/11" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                    <p class="card-name" >CVV</p>
                    </div>
                    <div class="col-md-6">
                        <input class="cardname-box"  type="number" name="" id="" placeholder="324" />
                    </div>
                </div>
                <button id="grenos">INSTAINMENT</button>
                <hr />
                </div>
                </div>
                <div class="row">
                    <div class="col-md-4"> </div>
                
                    <div class="col-md-4">
                        <div class="space1"></div>
                        <p class="profile-head">PLANTINGS</p>
                    </div>

                    <div class="col-md-4"></div>         
                </div>  
                <hr/>
                <div class="row">
                    <div class="col-md-6">
                        <p2 class="plants-planted">PLANTS PLANTED</p2>
                    </div>
                    <div class="col-md-6">
                        <p2  class="plants-planted">{user.plantsCount}</p2>
                    </div>
                </div>
            <hr/>           
            </div>
        </Fragment>
    )
};

export default Profile;