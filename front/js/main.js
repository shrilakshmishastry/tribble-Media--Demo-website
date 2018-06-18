import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import App from './app.js';

class Main extends React.Component{
  render(){
    return(
      <div>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
      </div>
    );
  }
}
export default Main
