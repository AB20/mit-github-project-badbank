function AllData(){
  const ctx = React.useContext(UserContext);  
  ctx.users.forEach(element => console.log(element))
    return (
      <Card
      bgcolor="secondary"
      header="All Data in Store"
      body={(  
              <>
                {JSON.stringify(ctx)}
              </>
            )}
    />
    );
}



    