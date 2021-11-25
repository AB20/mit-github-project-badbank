import React from "react";
import ReactDom from "react-dom";

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/components/" exact component={Home} />
          <Route path="/components/CreateAccount/" component={CreateAccount} />
          <Route path="/components/login/" component={Login} />
          <Route path="/components/deposit/" component={Deposit} />
          <Route path="/components/withdraw/" component={Withdraw} />
          <Route path="/components/balance/" component={Balance} />
          <Route path="/components/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
