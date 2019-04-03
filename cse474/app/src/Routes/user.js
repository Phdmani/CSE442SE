import React from 'react';

const Login = () => {
  return(<form method ="POST" className="modal-content animate" action="/user-login" >

                    <div className="container">
                      <label  >Username: </label>
                      <input type="text" placeholder="Enter Username" name="username"  required />
                      <label id="loginl" >Password: </label>
                      <input type="password" placeholder="Enter Password" name="password" required />
                      <button type="submit" >Login</button>
                      </div>
                  </form>)
}

export default Login;
