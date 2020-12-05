import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation, Redirect} from 'react-router-dom';
import { Header,Footer,MainContainer,Navbar,Modal,Section} from './components';
import {Equipment, Facility, Foundation, Greetings, InfoGraphic} from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const RouteApp=()=> {
  useEffect(() => {
    console.log('전체 페이지 적용');
  })
  return (
    <div id="wrapper">
      {/* <Header /> */}
      <Navbar />
      {/* <Modal /> */}
      <div>
      <Section />
      <Switch>
      {/* 스쿨소개 */}
      {/* 인사말 */}
      {/* <Route path="/about/greetings" component={Greetings}/> */}
      {/* 스쿨 개요 */}
      {/* <Route path="/about/foundation" component={Foundation}/> */}
      {/* 교육장 */}
      {/* <Route path="/about/facility" component={Facility}/> */}
      {/* 교육장비 */}
      {/* <Route path="/about/equipment" component={Equipment}/> */}
      {/* 숫자로 보는 과학데이터 스쿨 */}
      {/* <Route path="/about/infoGraphic" component={InfoGraphic}/> */}

      </Switch>
      {/* <MainContainer /> */}
      {/* <Footer /> */}
      </div>

    </div>
  );
}

export default RouteApp;
