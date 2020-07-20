// ------------------PACKAGAES-----------------
import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
// ------------------Files-----------------
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/home';
import NotFound from './components/pages/NOT_FOUND';
import About from './components/pages/about';
import UserPage from './components/users/userPage';
import GithubState from './context/gitHub/GithubState';



//------------------------------------------------------------------------------------
const App = () => {
  return (
    <GithubState>
      <BrowserRouter>

        <Navbar />
        <div className="container">
          <Switch>

            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/users/:username' render={props => (<UserPage {...props} />)} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </BrowserRouter>
    </GithubState>
  );
}

export default App;
