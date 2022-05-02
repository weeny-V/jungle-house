import React from 'react';
import '../styles/Banner.scss';
import logo from '../assets/logo.png';

const Banner = () => {
    return (
        <div className='jh-banner'>
            <div className='jh-banner__wrapper'>
                <img src={logo} alt='Jungle House' className='jh-banner__logo'/>
                <h1 className='jh-banner__title'>Jungle House</h1>
            </div>
        </div>)
}

export default Banner
