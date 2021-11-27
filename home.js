function Home(){
const ctx = React.useContext(UserContext);  
const balanceValue = React.useContext(BalanceContext);  
  return (
    <Card
    className="tooltip"
      bgcolor="secondary"
      txtcolor="white"
      header="BadBank Home"
      title="Welcome to the bank"
      text=""
      body={(
          <div>
          <img src="bank.png" className="img-fluid" alt="Responsive image"/>
          <h1>Available Balance: ${balanceValue.balance}</h1>
          </div>
          )}      
    />    
  );  
}
