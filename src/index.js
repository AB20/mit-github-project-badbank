import React from "react";
import ReactDOM from "react-dom";

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
