import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import App from './app.js';
import Form from './form.js';

class Main extends React.Component{
  render(){
    return(
      <div>
          <Switch>
          <Route path='/register' component={Form} ></Route>
            <Route path='/' component={App} ></Route>

          </Switch>
      </div>
    );
  }
}
export default Main
