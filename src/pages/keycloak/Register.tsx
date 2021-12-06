import React, { useState, useRef, memo, useEffect, } from 'react';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import { Button, Input } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import logo from '@/assets/images/logo.png';

type KcContext_Register = Extract<KcContextType, { pageId: 'register.ftl' }>;

const Title = styled.div`
  padding-top: 120px;
  min-width: 520px;
  width: 520px;
  display: flex;
  flex-direction: column;

  h6 {
    color: var(--black-80);
    font-size: 20px;
    line-height: 24px;
    padding: 8px 0;
  }
  .c { margin: 4px 0; color: var(--black-40); }
`;

const RegisterForm = styled.form`
  width: 520px;
  min-width: 520px;
  margin-top: 64px;
  padding-bottom: 120px;
`;

interface RegisterFormValues {
  email: string,
  lastName: string,
  firstName: string,
  password: string,
  ['password-confirm']: string,
  ['user.attributes.company']?: string,
  ['user.attributes.department']?: string,
};

export const Register = memo(
	({ kcContext, ...props }: { kcContext: KcContext_Register } & KcProps) => {
    const { t } = useTranslation();
		const { url, register: { formData, }, message, } = kcContext;
    const form = useRef<HTMLFormElement>(null);

    const handleCancel = () => {
      window.location.href = url.loginUrl;
    };


    useEffect(() => {
      if (message?.type === 'error' && message?.summary?.includes('emailExistsMessage')) {
        // toast.error(<Toast title={t('error.register')} message={`${caution} ${t('error.register.help')}`} />);
      }
    }, []);

		return (
      <>
        <Title>
          <img className="logo-title" src={logo} alt="logo" />
          <h6> { t('join') } </h6>
          <span className="c"> { t('join.guide') } </span>
        </Title>
        <RegisterForm ref={form} method="post" action={url.registrationAction}>
          <div>
            <Input />
          </div>

          <div className="button-group">
            <Button variant="outlined" type="button" onClick={handleCancel}>{ t('cancel') }</Button>
            <Button type="submit"> { t('register') } </Button>
          </div>
        </RegisterForm>
      </>
    );
	},
);

export default Register;
