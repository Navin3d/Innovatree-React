import React, { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard.js"
import { baseUrl } from '../utills/baseUrl.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import swal from 'sweetalert';


const Product = (props) => {
    const [product, setProduct] = useState("");

    console.log("path: "+props.match.params.id);
    useEffect(async() => {
        const url = `${baseUrl}/product/${props.match.params.id}/show`;
        const Authorization = await Cookies.get("Authorization");
        const headers = { Authorization };
        const response = await axios.get(url, { headers }).catch(err => {console.log("Error: "+err)});
        setProduct(response.data);
    }, [product])

    const handleBuy = async () => {
        const userId = Cookies.get("UserId");
        const url = `${baseUrl}/shop/${props.match.params.id}/buy/${userId}`;
        const Authorization = await Cookies.get("Authorization");
        const headers = { Authorization };
        const response = await axios.get(url, { headers });
        swal("Good job!", "Purchased!", "success");
    };

    return (
        <div>
           <h1 class="product">PRODUCT</h1>
           <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <ProductCard imageUrl={product.imageUrl} name={product.name}/> 
                    </div>
                    <div class="col-md-6">
                        <div>
                            <p class="nameofplant">Name: {product.name}</p>
                            <p class="type">Type: {product.category}</p>
                            <p class="cost">Cost: {product.price}Rs</p>
                            <p class="description">Description: {product.description}</p>
                            <button class="button button1" onClick={handleBuy}>Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
