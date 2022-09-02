import React from 'react';
import { GrFacebook } from "react-icons/gr";
import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import mobile from './mobile.png';
import './AuthTemp.scss';

const AuthTemp = () => {
    return (
        <div className='login-container'>
          
          <div className="auth-container">
          <div className="auth-left">
            <img src={ mobile} alt="" />
          </div>
          <div className="auth-right">
          <div className="login-wrapper">
            <a className='login-logo-link' href="#"><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>

            <form action="" className="login-form">
                <input type="text" className='login-input' placeholder='Phone number, username or email' />
                <input type="password" className='login-input' placeholder='password' />
                <button className='login-submit'>Log In</button>
            </form>
            <div className="divider">
                OR
            </div>
            <a className='login-with-fb' href="#"><GrFacebook/>Log in with Facebook</a>
            <a className='forgot-password' href="#">Forgot Password?</a>
            </div> 

            <div className="singup-wraper">
                <span className='signup-text'>Don't have an account? <Link to="/register" className='signup-link'>Singn up</Link></span>
            </div>
            <div className="get-app">
               <span className="app-text">Get the app.</span> 
               
               <div className="app-logo">
               <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
               <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
               </div>
            </div>
          </div>
          </div>

            <AuthFooter/>

        </div>
    );
};

export default AuthTemp;