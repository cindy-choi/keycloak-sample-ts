import React from 'react';
import RouterConfig from '@/routes/RouterConfig';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { initOptions, keycloak } from './utils/keycloakManager';


function App() {
  const handleOnKeycloakEvent = async (event: unknown, error: unknown) => {
    console.log('event:', event);
    console.log('error:', error);
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={(event, error) => handleOnKeycloakEvent(event, error)}
      LoadingComponent={<div> Loading... </div>}
    >
      <RouterConfig />
    </ReactKeycloakProvider>
  );
}

export default App;
