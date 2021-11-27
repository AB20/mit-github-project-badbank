function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, updateBalance]   = React.useState(100);
  const [withdrawAmount, setWithdrawAmount]  = React.useState('');
  const ctx = React.useContext(UserContext);  
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + 'empty');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (field <= 0 ) {
        setStatus('Error: Value must be great than zero');
        clearForm();
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (isNaN(field)==true){
        setStatus('Error: Value must be numerical');
        clearForm();
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function withdraw(){
    console.log(balance,withdrawAmount);
    if (!validate(balance,     'balance'))     return;
    if (!validate(withdrawAmount,    'withdrawAmount'))    return;
    let int = parseInt(withdrawAmount);
    let newBalance = balance - int;
    updateBalance(newBalance)
    ctx.users.push({balance: newBalance});
    setShow(false);
    //ctx.users.push({balance:100, withdrawAmount});
  }    

  function clearForm(){
    setWithdrawAmount('');
    setShow(true);
  } 

  return (
    <Card
      bgcolor="secondary"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              <h3 className="" id="balance" placeholder="">${balance}</h3><br/>
              Withdraw Amount <br/>
              <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={withdraw}>WITHDRAW</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <h3 className="" id="balance" placeholder="">New Balance: ${balance}</h3><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>BACK TO WITHDRAW</button><br/>
              </>
            )}
    />
  )
}