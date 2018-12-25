import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from 'services/authService';

export function ProtectedRoute(props) {

  const { component, ...rest } = props;

  return (
    <Route {...rest} render={(props) => authService.isAuthenticated() 
                                        ? <component {...props} {...rest} />
                                        : <Redirect to={{ pathname: '/login' }} /> }
    />
  )
}