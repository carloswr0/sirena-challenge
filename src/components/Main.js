import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css';
import NavigationBar from './NavigationBar';
import Details from './Details';
import MainList from './MainList';

function Main(props) {
  return (
    <div className="Main">
      <NavigationBar></NavigationBar>
      <Switch>
        <Route path="/movies" render={(routeProps) => <MainList {...routeProps} {...props} location={'movies'}/>}></Route>
        <Route path="/characters" render={(routeProps) => <MainList {...routeProps} {...props} location={'characters'}/>}></Route>
        <Redirect to="/movies" />
      </Switch>
      <Details {...props}></Details>
    </div>
  );
}

export default Main;
