import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>&#8358;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => {
                            return (<p>	&#11088;</p>)
                        })
                    }
                </div>
                <img className="product__img" src={image} alt=""/>
                <button className="product__btn">Add to basket</button>
            </div>
        </div>
    )
}

export default Product;
