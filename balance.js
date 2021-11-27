function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);  

  return (
    <Card
      bgcolor="secondary"
      header="BALANCE"
      status={status}
      body={show ? (  
              <>
              <h3 className="" id="balance" placeholder="">${JSON.stringify(ctx.balance)}</h3><br/>
              </>
            ):(
              <>
              </>
            )}
    />
  )
}