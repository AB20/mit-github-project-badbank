function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, updateBalance]   = React.useState(100);
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
        clearForm();
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

function addToBalance(){
    console.log(balance,depositAmount);
    if (!validate(balance,     'balance'))     return;
    if (!validate(depositAmount,    'depositAmount'))    return;
    let int = parseInt(depositAmount);
    let newBalance = int + balance;
    updateBalance(newBalance)
    ctx.users.push({balance: newBalance});
    setShow(false);
  }

  function clearForm(){
    setDepositAmount('');
    setShow(true);
  } 

  return (
    <Card
      bgcolor="secondary"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              <h3 className="" id="balance" placeholder="">${balance}</h3><br/>
              Deposit Amount <br/>
              <input type="number" className="form-control" id="depositAmount" placeholder="Enter amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={addToBalance}>DEPOSIT</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <h3 className="" id="balance" placeholder="">New Balance: ${balance}</h3><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
    />
  )
}

// onChange={e => addToBalance(balance + e.currentTarget.value)