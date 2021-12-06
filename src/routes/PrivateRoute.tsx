import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

type PrivateRouteProps = {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
};

function PrivateRoute({ children, exact = false, ...rest }: PrivateRouteProps) {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) return (<div> loading... </div>);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        keycloak?.authenticated ? (
          <>
            {children}
          </>
        ) : (
          keycloak.login({ redirectUri: window.location.href, })
        )
      }
    />
  );
}

export default PrivateRoute;
