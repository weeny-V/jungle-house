import React, { useState, useEffect } from 'react';
import '../styles/Cart.scss';
import { CartInterface, cartListInterface, planTypeInterface } from '../interface';
import shoppingBag from '../assets/shopping-bag.png';
import cancel from '../assets/cancel.png';

const Cart = ({cart, updateCart}: CartInterface) => {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc: string, plantType: planTypeInterface) => acc + plantType.amount * plantType.price,
        0
    )
    useEffect(() => {
        document.title = `LMJ: ${total}€ in purchases`
    }, [total])

    return isOpen ? (
        <div className='jh-cart'>
            <div
                className='jh-cart__toggle-button cancel'
                onClick={() => setIsOpen(false)}
            >
                <img src={cancel} alt='cancel'/>
            </div>
            {cart.length > 0 ? (
                <div>
                    <h2 className='jh-cart__title'>Cart</h2>
                    <ul>
                        {cart.map(({ name, price, amount }: cartListInterface, index: number) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3 className='jh-cart__total'>Total :{total}€</h3>
                    <button className='clearBusket' onClick={() => updateCart([])}>Clear Basket</button>
                </div>
            ) : (
                <div>Your basket is empty.</div>
            )}
        </div>
    ) : (
        <div className='jh-cart--closed'>
            <div
                className='jh-cart__toggle-button shoppingBag'
                onClick={() => setIsOpen(true)}
            >
                <img src={shoppingBag} alt='shoppingBag'/>
            </div>
        </div>
    )
}

export default Cart;