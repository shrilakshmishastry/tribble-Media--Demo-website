import React,{Component,props,event} from 'react';
import {Link} from 'react-router-dom';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state= {value :''};
    this.handleInput=this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({value:event.target.value});
  }
  handleDisplay(event){
    alert('name has been accepted ');
    event.preventDefault();
    <Link to ='/'></Link>
    console.log("hello world");
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleDisplay}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleInput} />

          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}
export default Form
