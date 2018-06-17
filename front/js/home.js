import React,{Component} from 'react';
import Main from './main.js';
import Header from './header.js';

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default Home
