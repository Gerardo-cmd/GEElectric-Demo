import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import './home.css';
import Header from '../../components/Header/header.js';
import Memo from '../../components/Memo/memo.js'
import Footer from '../../components/Footer/footer.js';

let HomePage = () => {
    return (
        <div>
            <Header />
            <div id="body">
                <Memo />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage