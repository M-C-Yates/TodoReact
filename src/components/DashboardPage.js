import React from 'react';

const Dashboard = () => (
  <h2>User Dashboard</h2>
)

export default Dashboard;



// <React.Fragment>
// {isAuthenticated ? (
//   <header className="header">
//     <Link className="header__title" to="/dashboard" exact={true}>
//       <h1>Todo app</h1>
//     </Link>
//       <Link className="link" onClick={startLogout} to="/" exact={true}>
//         Logout
//       </Link>
//   </header>
// ) : (
//   <header className="header">
//     <Link className="header__title" to="/" exact>
//       <h1>Todo app</h1>
//     </Link>
//   </header>
// )}
// </React.Fragment>