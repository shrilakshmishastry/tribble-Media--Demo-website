import React,{Component} from 'react';
import {Jumbotron,Card,CardTitle,CardSubtitle,InputGroup,Input,InputGroupAddon,CardBody,Button,CardText} from 'reactstrap';

class App extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron className="pt-4 bg-primary">
          <div className="container ">
            <div className="row  justify-content-center">
              <h1 className="h1 text-white font-weight-bold ">We build customized websites and webshops</h1>
            </div>
            <div className="row justify-content-center">
              <h1 className="h2 text-white ">Easy to find in Google and live within 30 days!</h1>
            </div>
              <div className="row bg-primary mt-5">
              <div className="col-md-1">
              </div>
              <div  className="col-md-5 justify-content-center pb-3 col-sm-6 bg-primary ">
                <Card  style={{background:"rgba(240, 248, 255,0.4)"}} className="">
                <CardBody className="">
                  <CardTitle className="text-white h4 text-center mt-3 font-weight-bold">Quotation within 1 minute
                  </CardTitle>
                  <CardText className="text-white h6 text-center mt-4">
                    Calculate the price for a new website directly. Affordable, responsive for different screens and optimized for Google.
                  </CardText>
                  <div className="justify-content-center text-center">
                  <Button className=" mt-4" style={{background:"#FF1493"}}>
                    <i className="fa fa-calculator ">
                    </i>
                  <span className="h5"> Quotation calculator
                  </span>
                  </Button>
                  </div>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-5 col-sm-6 ">
              <Card style={{background:"rgba(240, 248, 255,0.4)"}}  className="">
              <CardBody>
                <CardTitle className="text-white h4 text-center mt-3 font-weight-bold">Discover the points for improvement in your site
                </CardTitle>
                <CardText className="text-white h6 text-center mt-3">
                See how well your website is optimized for Google and smartphone in just one click? Now do the free website scan right away!
                </CardText>
                <InputGroup>
                  <Input placeholder="domeinnaam.nl"/>
                  <InputGroupAddon addonType="append" >
                    Scan

                  </InputGroupAddon>
                </InputGroup>
                </CardBody>
              </Card>
              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default App
