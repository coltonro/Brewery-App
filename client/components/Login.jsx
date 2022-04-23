import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from './UserDetails';

const Login = () => {
  let navigate = useNavigate();

  function loginClick() {
    navigate('/home');
  }

  return (
    <div className="login">
      <h1>Login</h1>
      {/* <Link to="/home">Home</Link>  */}
    </div>
  );
};

export default Login;
