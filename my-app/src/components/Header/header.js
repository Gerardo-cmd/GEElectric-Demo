import React, {useState} from 'react';
import './header.css';
import {Redirect} from 'react-router-dom';
let Header = () => {
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectContact, setRedirectContact] = useState(false);
    return (
        <div class="master">
            <h1>GEELECTRIC</h1>

            <button onClick={(e) => {
                e.preventDefault();
                setRedirectHome(true);
                setRedirectContact(false);
            }}>Home</button>

            <button onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(true);
            }}>Contact</button>
            
            {redirectHome ? <Redirect to="/" /> : ''}
            {redirectContact ? <Redirect to='/contact' /> : ''}
        </div>
    )
}

export default Header;