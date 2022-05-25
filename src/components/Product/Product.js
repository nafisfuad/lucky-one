import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({id, title, price, thumbnail, addToCart}) => {
    return (
        <div className='col col-lg-4'>
            <div className='card h-100  position-relative'>
                <img src={thumbnail} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text pb-3'>${price}</p>
                    <button onClick={() => addToCart(id)} className='btn btn-warning position-absolute start-0 bottom-0 w-100'>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;