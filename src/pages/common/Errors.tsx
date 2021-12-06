import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import errorbg from '@/assets/images/errorbg.jpg';

const StyledError = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  .error-contents {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
      line-height: 46px;
      font-size: 32px;
      font-weight: 400;
      padding-bottom: 8px;
      color: rgba(0, 0, 0, 0.8);
    }
    .guide {
      height: 26px;
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        line-height: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.4);
      }
    }

    button { margin-top: 24px; width: 168px; }
  }

  .error-background {
    width: 50%;
    z-index: -3;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${errorbg})
  }
`;

function Errors({ code, guide }: { code: string, guide?: string, }) {
  const { t } = useTranslation();

  const handleClickReturn = () => {
    window.history.back();
  };

  return (
    <StyledError>
      <div className="error-contents">
        <h4>{ code } ERROR </h4>
        <div className="guide">
          <span>{ guide }</span>
        </div>

        <Button variant="contained" onClick={handleClickReturn}>{ t('return.to.before') }</Button>

      </div>
      <div className="error-background" />
    </StyledError>
  );
}

export default Errors;
