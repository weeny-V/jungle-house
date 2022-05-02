import { useState, useEffect } from 'react';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/Layout.scss';
import Banner from './Banner';

const App = () => {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div className='App'>
            <Banner/>
            <ShoppingList cart={cart} updateCart={updateCart} />
            <Footer />
        </div>
    )
}

export default App
