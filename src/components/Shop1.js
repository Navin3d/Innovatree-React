import React from 'react'
import rose from "../components/images/rose.jpg";

const Shop = ({productId, imageUrl, name, price, noOfPurchases}) => {
    return (
        <div>       
            <a href={`/product/${productId}`}><img class="shop-image" src={imageUrl} alt=" rose" /></a>
            <p class="kaushik">{ name }</p>
            <p class="kaushik">{ price }₹</p>
            <p class="kaushik">{noOfPurchases} People Already Bought This</p>           
        </div>
    )
}

export default Shop;
