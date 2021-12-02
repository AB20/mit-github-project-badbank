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
        <BalanceContext.Provider value={{balance: 50}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
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

/* 
Demonstrate the following functionality:
Create an account
Deposit money
Withdraw money
Display data on All Data Page
Demonstrates input validation where applicable
Discuss the following questions:
What challenges did you encounter as you created this project? How did you overcome them?
Discuss your design decisions. What changes did you make from the starter code?
Did you create a form component? Why or why not?
What extra features or enhancements did you build?
*/