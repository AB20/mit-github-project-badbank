function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(100);
  const ctx = React.useContext(UserContext);  
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function clearForm(){
    setBalance('');
    setShow(true);
  } 

  return (
    <Card
      bgcolor="primary"
      header="Balance"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              <h3 className="" id="balance" placeholder="" onChange={e => setBalance(e.currentTarget.value)}>{balance}</h3><br/>
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