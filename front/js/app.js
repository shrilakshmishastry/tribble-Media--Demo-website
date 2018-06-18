import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';

class App extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron>
          <h1 className="text-dark ">hello world</h1>
        </Jumbotron>
      </div>
    );
  }
}
export default App
