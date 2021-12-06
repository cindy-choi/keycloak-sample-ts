import React from 'react';
import styled from 'styled-components';
import { useKeycloak } from '@react-keycloak/web';

const StyledMy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MyPage = () => {
  const { keycloak, } = useKeycloak();
  return (
    <StyledMy>
      Welcome!
    </StyledMy>
  );
};

export default MyPage;
