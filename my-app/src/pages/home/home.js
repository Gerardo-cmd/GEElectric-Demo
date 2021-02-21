import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import './home.css';
import Header from '../../components/Header/header.js';
import Memo from '../../components/Memo/memo.js'

let HomePage = () => {
    return (
        <div>
            <Header />
            <Memo />
        </div>
    )
}

export default HomePage