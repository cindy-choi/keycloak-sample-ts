import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20rem;

  span.title {
    font-size: 2rem;
    font-weight: 500;
  }

  span.guide {
    font-size: 1rem;
    font-weight: normal;
    color: #aaaaaa;
  }
`;

export const Main = () => {
  return (
    <StyledMain>
      <span className="title"> Service-Keycloak UI Sample </span>
      <span className="guide"> Sample UI for keycloakify </span>
    </StyledMain>
  );
};

export default Main;
