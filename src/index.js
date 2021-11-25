import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, Router, Route } from 'react-router';
import { HashRouter } from 'react-router-dom'
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import Balance from "./components/balance";
import AllData from "./components/alldata";
import NavBar from "./components/navbar";
import UserContext from './components/context';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="./components/" exact component={Home} />
          <Route path="./components/" component={CreateAccount} />
          <Route path="./components/" component={Login} />
          <Route path="./components/" component={Deposit} />
          <Route path="./components/" component={Withdraw} />
          <Route path="./components/" component={Balance} />
          <Route path="./components/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
