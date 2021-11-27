function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [depositAmount, setDepositAmount]  = React.useState('');
  const ctx = React.useContext(UserContext);
  const balanceValue = React.useContext(BalanceContext);  
  const [balance, updateBalance]   = React.useState(balanceValue.balance);

  function validate(field, label){
      if (!depositAmount) {
        setStatus('Error: Deposit amount not provided. Please enter a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (depositAmount <= 0 ) {
        setStatus('Error: Deposit amount must be great than zero');
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

function addToBalance(){
    console.log(balance,depositAmount);
    if (!validate(balance,     'balance'))     return;
    if (!validate(depositAmount,    'depositAmount'))    return;
    let int = parseInt(depositAmount);
    let newBalance = int + balance;
    updateBalance(newBalance)
    balanceValue.balance = newBalance;
    ctx.users.push({depositMade: depositAmount});
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
              <h3 className="" id="balance" placeholder="">${balanceValue.balance}</h3><br/>
              Deposit Amount <br/>
              <input type="number" className="form-control" id="depositAmount" placeholder="Enter amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={addToBalance}>DEPOSIT</button>
              </>
            ):(
              <>
              <h4>Successfully Deposited ${depositAmount}</h4>
              <h3 className="" id="balance" placeholder="">New Balance: ${balance}</h3><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Back</button>
              </>
            )}
    />
  )
}

// onChange={e => addToBalance(balance + e.currentTarget.value)