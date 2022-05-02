import { ChangeEvent, useState } from 'react'
import '../styles/Footer.scss'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert(
                'Error: This is not a valid address because it is missing an @ symbol 😥'
            )
        }
    }

    return (
        <footer className='jh-footer'>
            <div className='jh-footer__elem'>For plant enthusiasts 🌿🌱🌵</div>
            <div className='jh-footer__elem'>Subscribe to our newsletter:</div>
            <input className='jh-footer__input'
                placeholder='Enter your email'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer
