import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './containers/dashboard/DashboardContainer';
import NavbarComponent from './components/navbar/NavbarComponent';
import Room from './containers/room/roomContainer';
import Login from './containers/authentication/loginContainer';
import Register from './containers/authentication/registerContainer';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/room/:id" component={Room} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
