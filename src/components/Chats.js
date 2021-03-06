import React, { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {  ChatEngine } from "react-chat-engine";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import './App.css'

const Chats =()=>{
    const history = useHistory();
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        history.push("/");
    }

    useEffect(()=>{
        if(!user){
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "product-id":process.env.REACT_APP_CHAT_ENGINE_ID,
                "user-name" : user.email,
                "user-secret": user.uid,
            }
        })
        .then(()=>{
            setLoading(false);
        })
        .catch(()=>{
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.email);
            formData.append('secret', user.uid);
            axios.post('https://api.chatengine.io/users',
                        formData,
                        {headers:{
                            "private-key":process.env.REACT_APP_CHAT_ENGINE_KEY,
                        }}
                    )
                    .then(()=>setLoading(false))
                    .catch((error)=> console.log(error));
        
        })
        .finally(()=> setLoading(false))
    },[user,history]);

    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                   Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            
            <ChatEngine
                height="90vh"
                userName={user.email}
                userSecret={user.uid}
                projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />

        </div>
    )
}
export default Chats;