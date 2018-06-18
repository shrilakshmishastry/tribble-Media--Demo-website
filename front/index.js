import React,{Component} from 'react';
import ReactDOM from 'react-dom';
require('/home/shri/tribble-media/front/images/cropped-favicon-32x32.png');
import Home from './js/home.js';
import {BrowserRouter} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';


  ReactDOM.render(
    (
      <div>
          <BrowserRouter>
            <Home/>
          </BrowserRouter>

      </div>
    ),
    document.getElementById('root')
  );
