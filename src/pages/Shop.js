import React, { useState, useEffect } from "react";
import Shop1 from "../components/Shop1.js"
import { baseUrl } from "../utills/baseUrl";
import axios from "axios";

const Shop = () => {
    const [products, setProducts] = useState([""]);

    useEffect(async() => {
        const url = `${baseUrl}/product`
        const response = await axios.get(url);
        setProducts(response.data);
        console.log("Products: "+products.length);
    }, [products]);

    return (
        <div>
            <div>
                <h2 class="shop">SHOP</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        { products.map(product => (<Shop1 productId={product.productId} imageUrl={product.imageUrl} name={product.name} price={product.price} noOfPurchases={product.noOfPurchases}/>))}
                    </div>
                </div>
            </div>

            {/* <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <Shop1/>
                    </div>

                    <div class="col-md-4">
                        <Shop1/>
                    </div>

                    <div class="col-md-4">
                        <Shop1/>
                    </div>
                </div>
            </div> */}
        </div>
    );
    
};

export default Shop;