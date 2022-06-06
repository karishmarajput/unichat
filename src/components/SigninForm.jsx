import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import React  from 'react';
import home from './asserts/icons8-home-24.png';


const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {'Private-Key': 'c7ae001d-59bf-45e7-9e59-599133b18c6b'}
    axios.post(
        "https://api.chatengine.io/users/",
        {'username': username, 'secret': password, 'email' : email}, // Body object
        {'headers': authObject} // Headers object
      )
      .then(r => successful())

  };
  function successful(){
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log("yes");
    history.push("/userlogin");
}

    const handleLogout = async () => {
        
        history.push("/");
    }
  return (
      <div>
           <div className="nav-bar" id="navbar">
                <div onClick={handleLogout} className="logout-tab" id='logout-tab'>
                <img src={home} alt='home icon'></img>
                    Home
                </div>
            </div>
    <div className="wrapper">
       
      <div className="form">
        <h1 className="title">Signin</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        
      </div>
    </div>
    </div>
  );
};

export default Modal;