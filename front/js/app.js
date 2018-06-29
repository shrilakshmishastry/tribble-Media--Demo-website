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
            <Row className="mt-md-5 ">
              <Col md={{size:5,offset:1}}  className="bg-primary">
                <Card style={{background:"rgba(255,255,255,0.1)"}} >
                  <CardBody  >
                    <CardTitle className="text-white font-weight-bold h4 text-center">
                      Quotation within 1 minute
                    </CardTitle>
                    <CardText className="text-center text-white  mt-4 h5">
                      Calculate the price for a new website directly. Affordable, responsive for different screens and optimized for Google.
                    </CardText>
                    <div  className=" text-center mt-4 pb-4"  >
                    <Button style={{background:this.state.background,color:this.state.color}} onMouseOver={this.ishover} onMouseLeave={this.offhover} >
                    <i className="fa fa-calculator"></i>
                    <span> Quotation calculator
                    </span>
                    </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="5" className="bg-primary">
              <Card style={{background:"rgba(255,255,255,0.1)"}} >
                <CardBody  >
                  <CardTitle className="text-white font-weight-bold h4 text-center">
                    Discover the points for improvement in your site
                  </CardTitle>
                  <CardText className="text-center text-white  mt-4 h5">
                    See how well your website is optimized for Google and smartphone in just one click?
                    Now do the free website scan!
                    </CardText>
                  <InputGroup className="mt-3 ">
                    <Input placeholder="domeinnaam.nl"/>
                    <InputGroupAddon addonType="append">
                    <Button style={{background:this.state.background,color:this.state.color}} onMouseOver={this.ishover} onMouseLeave={this.offhover} >
                    <i className="fa fa-search"></i>
                    <span> Scan
                    </span>
                    </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </CardBody>
              </Card>
              </Col>
            </Row>

          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default App
