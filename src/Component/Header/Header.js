import React from 'react';
import './Header.css';

 


const Header = () => {

    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="/post">Post</a>
                <a href="/comment">Comments</a>
                <a href="/aboutUs">About us</a>
            </nav>
        </div>
    );
};

export default Header;