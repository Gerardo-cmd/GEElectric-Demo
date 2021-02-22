import React, {useState} from 'react'
import './contact.css';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';

let ContactPage = () => {
    return (
        <div>
            <Header />
            <div id="body">
                <p>This website is currently being created by Gerardo Abaunza! If you wish to contact him for whatever reason, use the contact info below.</p>
                <div id="contact-info">
                    <ul>
                        <li>Email: gerardoabaunza2015@gmail.com</li>
                        <li>Linkedin: <a href="https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/">https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage