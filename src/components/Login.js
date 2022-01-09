import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import "firebase/app";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { auth } from '../firebase';
import firebase from 'firebase/app';
import HomeDisplay from "./Home";
const Login=() =>{
    return(
        
        <div id='login-page'>
            
            <div id='login-card'>
                <h2>Welcome!</h2>
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

            </div>
        </div>
    )
}

const home =({ match }) =>(
    <div>
      <HomeDisplay></HomeDisplay>
    </div>
  )
export default Login;