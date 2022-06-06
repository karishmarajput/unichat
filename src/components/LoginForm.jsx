import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import React  from 'react';
import home from './asserts/icons8-home-24.png';
const projectID = process.env.REACT_APP_CHAT_ENGINE_ID;

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      history.push("/userlogin");
      setError('');
    } catch (err) {
        console.log('error');
        console.log(err);
      setError('Oops, incorrect credentials.');
    }
  };
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
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
    </div>
  );
};

export default Modal;