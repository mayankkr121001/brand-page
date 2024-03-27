import React from 'react';
import '../index.css';
import nikeLogo from '../images/nikeLogo.jpg';


function NavBar() {
    return (
        <>
            <div className='navBar'>
                <div className="logo">
                    <img src={nikeLogo} alt="logo" id='logoImg'/>
                </div>
                <ul className='list'>
                    <li href="#" className='listItem'>Menu</li>
                    <li href="#" className='listItem'>Location</li>
                    <li href="#" className='listItem'>About</li>
                    <li href="#" className='listItem'>Contact</li>
                </ul>
                <div className="btn">
                    <button className="loginBtn">Login</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;