function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{
          users:[
          {name:'abel',
          email:'abel@mit.edu',
          password:'secret'
        }]
          }}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <BalanceContext.Provider value={{balance: 50}}>
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/balance/" component={Balance} />
              <Route path="/alldata/" component={AllData} />
          </BalanceContext.Provider>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

//<Route path="/balance/" component={Balance} />
//<Route path="/login/" component={Login} />