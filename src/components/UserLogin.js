import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';
function UserLogin(){
  const history = useHistory();
  if (!localStorage.getItem('username')) return <LoginForm />;
  const handleLogout = async () => {
    localStorage.removeItem("username");
    history.push("/");
  }
  return (
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
            projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
          />
     </div>
  );
   
}
export default UserLogin;