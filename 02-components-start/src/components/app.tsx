import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import PoemsViewApp from "./poemsViewApp";
import Login from './login';
import PoemNavbar from "./poemNavbar";
import ShowOptions from "./showoptions";
import Help from "./help";
import ShowStatistics from "./ShowStatistics";
import Manage from "./manage";


const App = (): JSX.Element => {


  return (
    <BrowserRouter>
      <PoemNavbar/>
      <Route exact path='/' component={PoemsViewApp}/>
      <Route exact path='/index.html' component={PoemsViewApp}/>
      <Route  path='/home' component={PoemsViewApp}/>
      <Route  path='/login' component={Login}/>
      <Route  path='/options' component={ShowOptions}/>
      <Route  path='/help' component={Help} />
      <Route  path='/statistics' component={ShowStatistics} />
      <Route  path='/manage' component={Manage} />


    </BrowserRouter>
  )
}

export default App