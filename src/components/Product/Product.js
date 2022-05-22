import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({id, title, price, thumbnail, addToCart}) => {
    return (
        <div className='col'>
            <div className='card h-100'>
                <img src={thumbnail} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{price}</p>
                    <button onClick={() => addToCart(id)} className='btn btn-warning'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;