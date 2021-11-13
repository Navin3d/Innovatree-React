import React from 'react'
import coconut from './images/coconut.jpg'

const ProductCard = ({ imageUrl, name }) => {
    return (
        <div>
            <div className = "row">

                <div className="col-md-4">
                    <div className = "product-name">
                        <img className="product-card-photo" src={imageUrl}/>
                        <p className="product-card-info">{name}</p>
                    </div>
                </div>
                <div className="col-md-4">
                        
                </div>
                <div className="col-md-4">
                        
                </div>
                   
            </div>            
        </div>
    )
}

export default ProductCard
