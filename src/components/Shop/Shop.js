import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const addToCart = (id) => {
        const newCart = cart;
        const newProduct = products.find(product => product.id === id);
        newCart[id] = newProduct.title;
        setCart(newCart);
        console.log(cart);
    }
    return (
        <div>
        <div className='row row-cols-1 row-cols-lg-3 g-4 mx-auto'>
            {
                products.map(product => <Product key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} addToCart={addToCart}></Product>)
            }
        </div>
        <div className='row row-cols-1 row-lg-1 g-4 mx-auto'>

        </div>
        </div>
    );
};

export default Shop;