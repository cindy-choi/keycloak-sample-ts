import React from 'react';
import styled from 'styled-components';
import TheHeader from  '@/components/TheHeader';

import bg from '@/assets/images/bg.jpg';

type LayoutProps = {
  children?: React.ReactNode;
};

const StyledBasicLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 1024px;
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  .router-view {
    width: 100%;
    overflow: hidden;
  }
`;

function BasicLayout({ children }: LayoutProps) {
  return (
    <StyledBasicLayout>
      <TheHeader />
      <div className="router-view">
        {children}
      </div>
    </StyledBasicLayout>
  );
}

export default BasicLayout;
