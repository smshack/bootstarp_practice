import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'moment/dist/locale/ko'  //moment 언어설정
import RouteApp from './routesApp';
import './styles/style.scss';


const rootElement =document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <RouteApp />
    </BrowserRouter>
  , rootElement
);


