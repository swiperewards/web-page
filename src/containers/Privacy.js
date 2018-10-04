import React from 'react'
import Navbar from '../components/navigation/navbar';
import PrivacyPolicyBody from '../components/sections/privacyPolicyBody';
import Footer from '../components/footer/footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar/>
            <PrivacyPolicyBody/>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy