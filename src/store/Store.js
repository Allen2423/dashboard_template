import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import LandingPage from '../views/LandingPage';



const Store = ({ component: Component, ...rest }) => {
  
    const isAuthenticated = true;
    const navigate = useNavigate();

    if (!isAuthenticated) {
      navigate('/');
    }
  
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <LandingPage />
        }
      />
    );
  };
export default Store;