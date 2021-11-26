function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(100);
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

  function handleCreate(){
    console.log(balance,withdrawAmount);
    //if (!validate(balance,     'balance'))     return;
    if (!validate(withdrawAmount,    'withdrawAmount'))    return;
    ctx.users.push({balance:100, withdrawAmount});
    setShow(false);
  }    

  function clearForm(){
    setBalance('');
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
              <h3 className="" id="balance" placeholder="" onChange={e => setBalance(e.currentTarget.value)}>{balance}</h3><br/>
              Withdrawal Amount <br/>
              <input type="input" className="form-control" id="withDrawAmount" placeholder="Enter amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>WITHDRAW</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}