import React from 'react';
import './Cart.css';

const Cart = ({cart, resetCart}) => {
    const randomSelection = (max) => {
        const random = Math.round(Math.random() * (max - 0) + 0);
        cart.length > 0 ? alert(cart[random]) : alert('Select few products first.');

    }

    return (
        <div>
            <h5>Selected Products</h5>
            <div>
            {
               cart.map(title => <p>{title}</p>)
            }
            </div>
            <button onClick={() => randomSelection(cart.length - 1)} className='btn border'><span className='text-success'>CHOOSE 1 FOR ME</span></button>
            <button onClick={resetCart} className='btn border'><span className='text-primary'>CHOOSE AGAIN</span></button>
        </div>
    );
};

export default Cart;