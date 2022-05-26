import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const addToCart = (id) => {
        const newCart = [...cart];
        const newProduct = products.find(product => product.id === id);
        if (newCart.indexOf(newProduct.title) < 0) {
            newCart.push(newProduct.title);
        }
        setCart(newCart);
        console.log(cart);
    }

    const resetCart = () => setCart([]);
    return (
        <div className='container row g-4 mx-auto pb-3'>
        <div className='row col col-lg-8 g-4 mx-auto'>
            {
                products.map(product => <Product key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} addToCart={addToCart}></Product>)
            }
        </div>
        <div className='col col-lg-4 pt-3'>
            <Cart cart={cart} resetCart={resetCart}></Cart>
        </div>
        </div>
    );
};

export default Shop;