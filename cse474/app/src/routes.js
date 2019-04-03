import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'
const User = (params) => {
  return ( <h1> Welcome User {params.username}</h1> )
}
var state = {
  loggedIn:false
}
var loginHandle = () => {
  this.setState(preState => ({
    loggedIn: !preState.loggedIn
  }))
}

const routes = (
<Router>
         <div className="App">
         <Link to ="/">Home</Link>
         <Link to ="/user/John">John</Link>
         <Route path="/" exact render={
          ()=> {
            return (<h1>Welcome Home</h1>);
          }
         }/>
        <Route path="/about" exact render={
          ()=> {
            return (<h1>Welcome about</h1>);
          }
         }/>
         <input type="button" value={this.state.loggedIn ? 'Logout' : 'Login'} onClick={this.loginHandle.bind(this)}/>
          
          <Route path="/user/:username" exact strict render={({match})=>(
            this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to ="/" />)
            )}/>

         </div>
         </Router>
         )
export default routes;
