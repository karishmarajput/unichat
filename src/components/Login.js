import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import "firebase/app";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import { auth } from '../firebase';
import firebase from 'firebase/app';
import home from './asserts/icons8-home-24.png';
import loginImg from './asserts/login-.png';
import signinImg from './asserts/signin-.png';

const Login=() =>{
    const history = useHistory();
    const handleLogout = async () => {
        
        history.push("/");
    }
    return(
        
        <div id='login-page'>
            <div className="nav-bar" id="navbar">
                <div onClick={handleLogout} className="logout-tab" id='logout-tab'>
                <img src={home} alt='home-icon'></img>
                    Home
                </div>
            </div>
            <div id='login-card'>
                <h2>Welcome!</h2><br/>
                <div 
                    className='login-button google'
                    onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                ><GoogleOutlined></GoogleOutlined>
                    Sign In with Google
                </div>
                <br/><br/>
                <div 
                    className='login-button facebook'
                    onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                ><FacebookOutlined></FacebookOutlined>
                    Sign In with facebook
                </div>
                <br/><br/>
                <div className='loginSignin'>
                    <Link to='/userlogin'>
                    <div 
                        className='login-button google'>
                            <img src={loginImg} alt='login Img' className='logo'></img>Login
                    </div>
                    </Link>
                    
                    <Link to='/usersignin'>
                    <div 
                        className='login-button google'>
                            <img src={signinImg} alt='signin img' className='logo'></img> Signin
                    </div>
                    </Link>
                </div>
                

            </div>
        </div>
    )
}


export default Login;