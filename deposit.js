function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(100);
  const [depositAmount, setDepositAmount]  = React.useState('');
  const ctx = React.useContext(UserContext);  
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + 'not provided');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (field <= 0 ) {
        setStatus('Error: Value must be great than zero');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (isNaN(field)==true){
        setStatus('Error: Value must be numerical');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(balance,depositAmount);
    //if (!validate(balance,     'balance'))     return;
    if (!validate(depositAmount,    'depositAmount'))    return;
    ctx.users.push({balance:100, depositAmount});
    setShow(false);
  }    

  function clearForm(){
    setBalance('');
    setDepositAmount('');
    setShow(true);
  } 

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              <h3 className="" id="balance" placeholder="" onChange={e => setBalance(e.currentTarget.value)}>{balance}</h3><br/>
              Deposit Amount <br/>
              <input type="input" className="form-control" id="depositAmount" placeholder="Enter amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>DEPOSIT</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
    />
  )
}
