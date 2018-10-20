import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import NavbarComponent from './components/navbar/NavbarComponent';
import RoomDetails from './components/rooms/RoomDetails';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/room/:id" component={RoomDetails} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
