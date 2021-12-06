import React, { useState, useRef, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'; 
import { Button, TextField } from '@mui/material';

import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

import bg from '@/assets/images/login-bg.jpg';

type KcContext_Login = Extract<KcContextType, { pageId: 'login.ftl' }>;

const StyledLogin = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  width: 25rem;
  height: 15rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginInput = styled(TextField)`
  width: 20rem;
  margin-bottom: 8px !important;
`;

const LoginButton = styled(Button)`
  width: 20rem;
`;

export const Login = memo(
	({ kcContext, ...props }: { kcContext: KcContext_Login } & KcProps) => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
		const { social, url, message, realm, } = kcContext;
    const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');

    console.log(kcContext);

    const handleSubmit = () => {
      console.log(form);
      form?.current?.submit();
    };

    useEffect(() => {
      if (message?.summary === 'emailSentMessage') {
        // toast.success(<Toast title={t('success.send.reset.password.email')} message={t('success.send.reset.password.email.default')} />);
      } else if (message?.summary === 'expiredActionTokenSessionExistsMessage') {
        // toast.error(<Toast title={t('error.session.expired')} message={t('error.session.expired.default')} />);
      } else if (message?.summary === 'accountUpdatedMessage') {
        // toast.success(<Toast title={t('success.account.update')} message={t('success.account.update.message')} />);
      }
    }, []);

		return (
      <StyledLogin>
        <LoginForm ref={form} method="post" action={url.loginAction}>
          <LoginInput
            id="username"
            name="username"
            size="small"
            label={t('id')}
          />
          <LoginInput
            label={t('password')}
            id="password"
            name="password"
            type="password"
            size="small"
          />
          <LoginButton variant="contained" onClick={() => handleSubmit()}>{ t('login') }</LoginButton>
        </LoginForm>
      </StyledLogin>
    );
	},
);

export default Login;
