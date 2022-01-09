import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"
import './App.css'
import Chats from "./Chats"
import Login from "./Login"
import HomeDisplay from "./Home"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/chats" component={Chats} />
            <Route path="/" component={Login}/>
            <Route path="/home" exact={true} component={home}></Route>
          
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}
const home =({ match }) =>(
  <div>
    <HomeDisplay></HomeDisplay>
  </div>
)
export default App
