import React,{Component,props} from 'react';
import {Jumbotron,Row,Col,Card,Container,CardTitle,CardSubtitle,InputGroup,Input,InputGroupAddon,CardBody,Button,CardText} from 'reactstrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.ishover=this.ishover.bind(this);
    this.offhover=this.offhover.bind(this);
    this.state={
      background:"#FF1493",
      color:'white'
    };
  }
  ishover(){
    this.setState({
      background:"#FFFFFF",
      color:'#FF1493'
    });
  }
  offhover(){
    this.setState({
      background:"#FF1493",
      color:'white'
    });
  }

  render(){
    return(
      <div>
        <Jumbotron className="pt-4 bg-primary">
          <Container>
            <Row className="">
              <Col  md="12" className="h1 text-center text-white font-weight-bold">We build customized websites and webshops
              </Col>
            </Row>
            <Row >
              <Col md="12" className=" h2 text-white mt-3 text-center">Easy to find in Google and live within 30 days!
              </Col>
            </Row>
            <Row>
              <Col md={{size:4,offset:2}} className="bg-warning">
                kkk
              </Col>
              <Col md="4" className="bg-danger">lll
              </Col>
            </Row>
            <Button style={{background:this.state.background,color:this.state.color}} onMouseOver={this.ishover} onMouseLeave={this.offhover} >hello
            </Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default App
