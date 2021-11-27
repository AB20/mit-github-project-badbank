function AllData(){
  const ctx = React.useContext(UserContext);  
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



    