import React from 'react';
import {Link} from 'react-router-dom';
import img from './asserts/front.jpg';
import './Home.css';


class Home extends React.Component {
 
  render() {
    return(
      <div className='home-page'>
        
        <div className='homepage'>
          
          <div className='homepage-contain'>
            <h1 className='homepage-heading'>Unichat!!</h1>
            <p className='homepage-para'>
              Unichat is a full Realtime Chat Application 
              with Social Auth and dedicated chat APIs/sockets. You can signin with your 
              Google or Facebook account or login to use the Unichat. It is a react chat app using "
            <a href='https://chatengine.io'>Chat Engine</a>".
            </p>
            <Link to='/login'>
            <div align="center">
            <button type="submit" className="button" id="homepage-btn">
              <span>Start chatting</span>
            </button>
          </div>  
            </Link>
          </div>
          <div className='homepage-img-div'>
            <img src={img} alt='img' className='front-img'></img><br/>
          </div>
        </div>
      </div>
      
    );
    }
}
export default Home;