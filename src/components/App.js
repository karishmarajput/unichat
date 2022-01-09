import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"
import './App.css'
import Chats from "./Chats"
import Login from "./Login"
import Home from "./Home"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/chats" component={Chats} />
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/userlogin" component={UserLogin}></Route>
          
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
