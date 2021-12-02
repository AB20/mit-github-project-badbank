function AllData(){
    const ctx = React.useContext(UserContext);
    const userAccounts = ctx.users;
  
      return (
            <div>
              
            {userAccounts.map(function(user, i){
              return (
              <table className="ui celled table">
                <thead bgcolor="secondary">
                  <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
                </tbody>
                
              </table>)
            })}
            </div>
      );
  };
  
  
    //ctx.users.forEach(element => console.log(element))
    // 