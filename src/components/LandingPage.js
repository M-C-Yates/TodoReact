import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
      <React.Fragment>
        <div className="ContentContainer">
          <h2>Login</h2>
          <Link className="link" to="/login">Login</Link>

          <h2>Register</h2>
           <Link className="link" to="/signup">Register</Link>
        </div>
      </React.Fragment>
    )

export default LandingPage;