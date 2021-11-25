function AllData(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]   = React.useState('');
  const [name, setName]   = React.useState('');
  const [password, setPassword]   = React.useState('');
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
    setEmail('');
    setName('');
    setPassword('');
    setShow(true);
  } 

  return (
    <Card
      bgcolor="secondary"
      header="All Data"
      status={status}
      body={show ? (  
              <>
              Email<br/>
              <h3 className="" id="email" placeholder="" onChange={e => setBalance(e.currentTarget.value)}>{email}</h3><br/>
              Name<br/>
              <h3 className="" id="name" placeholder="" onChange={e => setBalance(e.currentTarget.value)}>{name}</h3><br/>
              Password<br/>
              <h3 className="" id="password" placeholder="" onChange={e => setBalance(e.currentTarget.value)}>{password}</h3><br/>
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
