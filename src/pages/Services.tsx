import React from 'react';
import styled from 'styled-components';

const StyledServices = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 4rem;
    font-wegiht: 500;
  }
`;

export const Services = () => {
  return (
    <StyledServices>
      services
    </StyledServices>
  );
};

export default Services;
