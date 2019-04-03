import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import OmdbContainer from './components/OmdbContainer';


const Apps = () => {
  return(<OmdbContainer />)
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMe:true,

      value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
        this.setState({
      showMe:!this.state.showMe
    })
    event.preventDefault();
  }
  operation(){
    this.setState({
      showMe:!this.state.showMe
    })
  }



  render() {

    return (

      <Router>
         <div className="App">
{/*This is the code for the Homepage page----------------------------------------*/}

         <Route path="/" exact render={
          ()=> {
            return ( <div className="App">
<style dangerouslySetInnerHTML={{__html: "\ninput[type=text], input[type=password] {\n   padding: 10px;\n  margin: 5px 0 7px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\nform {\n  text-align: center;\n\n" }} />


  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>CSE 442 Homepage</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" />
  {/* https://fonts.google.com/specimen/Open+Sans */}
  <link rel="stylesheet" href="css/all.min.css" />
  {/* https://fontawesome.com/ */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* https://getbootstrap.com/ */}
  <link rel="stylesheet" href="css/tooplate-style.css" />
  {/*
Tooplate 2111 Pro Line
http://www.tooplate.com/view/2111-pro-line
*/}
  {/* page header */}
  <div className="container" id="home">
    <div className="col-12 text-center">
      <div className="tm-page-header">
        <i className="fas fa-4x fa-chart-bar mr-4" />
        <h1 className="d-inline-block text-uppercase">442 Project</h1>
      </div>
    </div>
  </div>
  {/* navbar */}

  <div className="tm-nav-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <ul className="navbar-nav mx-auto tm-navbar-nav">
              <li className="nav-item active">
         <Link to ="/">Home</Link>
              </li>
              <li className="nav-item">
         <Link to ="/profile">Profile</Link>
              </li>
              <li className="nav-item">
         <Link to ="/movies">Movies</Link>
              </li>
              </ul>
          </nav></div>
      </div>

    </div>
  {
    this.state.showMe?
  
<div>
    <form method ="POST" className="modal-content animate" action="/user-login" >

                    <div className="container">
                      <label  >Username: </label>
                      <input type="text" placeholder="Enter Username" name="username" value={this.state.value} onChange={this.handleChange} required />
                      <label id="loginl" >Password: </label>
                      <input type="password" placeholder="Enter Password" name="password" required />
                      <button type="submit"  >Login</button>
                      </div>
                  </form>
</div>
:null
}
  </div>

  {/* Features */}
  <div className="container tm-features-section" id="features">
    <div className="row tm-features-row">
      <section className="col-md-6 col-sm-12 tm-feature-block">
        <header className="tm-feature-header">
          <i className="fas fa-5x fa-anchor tm-feature-icon" />
          <h3 className="tm-feature-h">Welcome to our 442 project website</h3>
        </header>
        <p>
          This website (name still undetermined) aims to connect you with users 
          who are in your area and have similar taste in movies. 
        </p>
        <p>
          By registering an account, you can jump in, build a profile, and get
          matched with local movie fans most compatible to yourself!
        </p>
      </section>
      <section className="col-md-6 col-sm-12 tm-feature-block">
        <header className="tm-feature-header">
          <i className="fas fa-5x fa-atom tm-feature-icon" />
          <h3 className="tm-feature-h">Location based matchmaking</h3>
        </header>
        <p>
          We take your movie profile and match you with people locally
          who have similar tastes. Plan a movie night get-together with
          someone who is sure to enjoy whatever you end up watching.
        </p>
      </section>
    </div>
  </div>
  <div id="googleMap" style={{width: '100%', height: '400px'}} />
  {/* Contact */}
  <section className="container tm-contact-section" id="contact">
    <div className="row">
      <div className="col-xl-5 col-lg-6 col-md-12 tm-contact-left">
        <div className="tm-contact-form-container ml-auto mr-0">


        </div>
      </div>
      <div className="col-xl-7 col-lg-6 col-md-12 tm-contact-right">
      </div>
    </div>
  </section>
  <footer className="container tm-footer">
    <div className="row tm-footer-row">
      <p className="col-md-10 col-sm-12 mb-0">
        442 Project 2019 SP
      </p>
      <div className="col-md-2 col-sm-12 scrolltop">
        <div className="scroll icon"><i className="fa fa-4x fa-angle-up" /></div>
      </div>
    </div>
  </footer>
  {/* Single Page Nav plugin works with this version of jQuery */}
</div>
);
          }
         }/>



{/*This is begining the code for the profile page----------------------------------------*/}


        <Route path="/movies" exact render={
          ()=> {
            return (<div>
  <style dangerouslySetInnerHTML={{__html: "\ninput[type=text], input[type=password]{\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\nbutton {\n  background-color: #24bf3e;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  align-self: center;\n}\nbutton:hover  {\n  opacity: 0.7;\n}\n.cancelbutton {\n  width: auto;\n  padding: 10px 18px;\n  background-color: red;\n}\n.imgcontainer {\n  text-align: center;\n  margin: 20px 0 10px 0;\n  position: relative;\n}\nimg.avatar {\n  width: 10%;\n  border-radius: 50%;\n}\n.container {\n  padding: 10px;\n}\nspan.psw {\n  float: right;\n  padding-top: 10px;\n}\n@media screen and (max-width: 300px) {\n  span.psw {\n    display: block;\n    float: none;\n  }\n  .cancelbutton {\n    width: 100%;\n  }\n}\n" }} />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>CSE 442 Homepage</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" />
  {/* https://fonts.google.com/specimen/Open+Sans */}
  <link rel="stylesheet" href="css/all.min.css" />
  {/* https://fontawesome.com/ */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* https://getbootstrap.com/ */}
  <link rel="stylesheet" href="css/tooplate-style.css" />
  {/*
Tooplate 2111 Pro Line
http://www.tooplate.com/view/2111-pro-line
*/}
  {/* page header */}

  <div className="container" id="home">
    <div className="col-12 text-center">
      <div className="tm-page-header">
        <i className="fas fa-4x fa-chart-bar mr-4" />
        <h1 className="d-inline-block text-uppercase">442 Project</h1>
      </div>
    </div>
  </div>
  {/* navbar */}

  <div className="tm-nav-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <ul className="navbar-nav mx-auto tm-navbar-nav">
              <li className="nav-item active">
              <Link to ="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link to ="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>


  </div>
  <h1>Movie Search</h1>
  <Apps/>

</div>

);
          }

         }/>
{/*This is end of the code for the movie search page----------------------------------------*/}

{/*This is begining the code for the movie add page----------------------------------------*/}


        <Route path="/moviesadd" exact render={
          ()=> {
            return (<div>
  <style dangerouslySetInnerHTML={{__html: "\ninput[type=text], input[type=password]{\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\nbutton {\n  background-color: #24bf3e;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  align-self: center;\n}\nbutton:hover  {\n  opacity: 0.7;\n}\n.cancelbutton {\n  width: auto;\n  padding: 10px 18px;\n  background-color: red;\n}\n.imgcontainer {\n  text-align: center;\n  margin: 20px 0 10px 0;\n  position: relative;\n}\nimg.avatar {\n  width: 10%;\n  border-radius: 50%;\n}\n.container {\n  padding: 10px;\n}\nspan.psw {\n  float: right;\n  padding-top: 10px;\n}\n@media screen and (max-width: 300px) {\n  span.psw {\n    display: block;\n    float: none;\n  }\n  .cancelbutton {\n    width: 100%;\n  }\n}\n" }} />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>CSE 442 Homepage</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" />
  {/* https://fonts.google.com/specimen/Open+Sans */}
  <link rel="stylesheet" href="css/all.min.css" />
  {/* https://fontawesome.com/ */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* https://getbootstrap.com/ */}
  <link rel="stylesheet" href="css/tooplate-style.css" />
  {/*
Tooplate 2111 Pro Line
http://www.tooplate.com/view/2111-pro-line
*/}
  {/* page header */}

  <div className="container" id="home">
    <div className="col-12 text-center">
      <div className="tm-page-header">
        <i className="fas fa-4x fa-chart-bar mr-4" />
        <h1 className="d-inline-block text-uppercase">442 Project</h1>
      </div>
    </div>
  </div>
  {/* navbar */}

  <div className="tm-nav-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <ul className="navbar-nav mx-auto tm-navbar-nav">
              <li className="nav-item active">
              <Link to ="/home">Home</Link>
              </li>
              <li className="nav-item active">
              <Link to ="/profile">Profile</Link>
              </li>
              <li className="nav-item">
              <Link to ="/moviesadd">Movies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>


  </div>
  <h1>Movie Search</h1>
  <Apps/>

</div>

);
          }

         }/>
{/*This is end of the code for the movie add page----------------------------------------*/}



                 <Route path="/home" exact render={
          ()=> {
            return (<div className="App">
<style dangerouslySetInnerHTML={{__html: "\ninput[type=text], input[type=password] {\n   padding: 10px;\n  margin: 5px 0 7px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\nform {\n  text-align: center;\n\n" }} />


  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>CSE 442 Homepage</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" />
  {/* https://fonts.google.com/specimen/Open+Sans */}
  <link rel="stylesheet" href="css/all.min.css" />
  {/* https://fontawesome.com/ */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* https://getbootstrap.com/ */}
  <link rel="stylesheet" href="css/tooplate-style.css" />
  {/*
Tooplate 2111 Pro Line
http://www.tooplate.com/view/2111-pro-line
*/}
  {/* page header */}
  <div className="container" id="home">
    <div className="col-12 text-center">
      <div className="tm-page-header">
        <i className="fas fa-4x fa-chart-bar mr-4" />
        <h1 className="d-inline-block text-uppercase">442 Project</h1>
      </div>
    </div>
  </div>
  {/* navbar */}

  <div className="tm-nav-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <ul className="navbar-nav mx-auto tm-navbar-nav">
              <li className="nav-item active">
         <Link to ="/home">Home</Link>
              </li>
              <li className="nav-item">
         <Link to ="/profile">Profile</Link>
              </li>
              <li className="nav-item">
         <Link to ="/moviesadd">Movies</Link>
              </li>
              <li className="nav-item">
             < form method ='POST' action="/user-logout">
            <button type="submit">Logout</button>

          </form>
              </li>
              </ul>
          </nav></div>
      </div>

    </div>

  </div>

  {/* Features */}
  <div className="container tm-features-section" id="features">
    <div className="row tm-features-row">
      <section className="col-md-6 col-sm-12 tm-feature-block">
        <header className="tm-feature-header">
          <i className="fas fa-5x fa-anchor tm-feature-icon" />
          <h3 className="tm-feature-h">Welcome to our 442 project website</h3>
        </header>
        <p>
          This website (name still undetermined) aims to connect you with users 
          who are in your area and have similar taste in movies. 
        </p>
        <p>
          By registering an account, you can jump in, build a profile, and get
          matched with local movie fans most compatible to yourself!
        </p>
      </section>
      <section className="col-md-6 col-sm-12 tm-feature-block">
        <header className="tm-feature-header">
          <i className="fas fa-5x fa-atom tm-feature-icon" />
          <h3 className="tm-feature-h">Location based matchmaking</h3>
        </header>
        <p>
          We take your movie profile and match you with people locally
          who have similar tastes. Plan a movie night get-together with
          someone who is sure to enjoy whatever you end up watching.
        </p>
      </section>
    </div>
  </div>
  <div id="googleMap" style={{width: '100%', height: '400px'}} />
  {/* Contact */}
  <section className="container tm-contact-section" id="contact">
    <div className="row">
      <div className="col-xl-5 col-lg-6 col-md-12 tm-contact-left">
        <div className="tm-contact-form-container ml-auto mr-0">


        </div>
      </div>
      <div className="col-xl-7 col-lg-6 col-md-12 tm-contact-right">
      </div>
    </div>
  </section>
  <footer className="container tm-footer">
    <div className="row tm-footer-row">
      <p className="col-md-10 col-sm-12 mb-0">
        442 Project 2019 SP
      </p>
      <div className="col-md-2 col-sm-12 scrolltop">
        <div className="scroll icon"><i className="fa fa-4x fa-angle-up" /></div>
      </div>
    </div>
  </footer>
  {/* Single Page Nav plugin works with this version of jQuery */}
</div>
);
          }
         }/>
{/*This is end of the code for the user page----------------------------------------*/}

         </div>
         </Router>

    );
  }
}

export default App;
