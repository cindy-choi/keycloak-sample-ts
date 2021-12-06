import { memo } from 'react';
import { defaultKcProps } from 'keycloakify';
import { useTranslation } from 'react-i18next';
import type { KcContextType } from '@/utils/keycloakManager';

import Login from '@/pages/keycloak/Login';
// import Register from '@/pages/keycloak/Register';
// import ResetPassword from '@/pages/keycloak/ResetPassword';
// import Info from '@/pages/keycloak/Info';
import Error404 from '@/pages/common/Error404';
// import Error500 from '@/pages/common/Error500';

import './KeycloakApp.scss';

export const KeycloakApp = memo(({ kcContext }: { kcContext: KcContextType; }) => {
  const { t } = useTranslation();

  console.log(kcContext);

  switch (kcContext.pageId) {
    case 'login.ftl':
      return  <Login {...{ kcContext, ...defaultKcProps }} />;

    // case 'register.ftl':
    //   return <Register {...{ kcContext, ...defaultKcProps }} />;

    // // @ts-ignore
    // case 'login-update-password.ftl':
    //   return <ResetPassword {...{ kcContext, ...defaultKcProps }} />;

    // case 'error.ftl':
    //   return <Error500 guide={t(`error.${kcContext?.message?.summary || 'internalservererror'}`)} link={kcContext?.client?.baseUrl}/>;

    // case 'info.ftl':
    //   return <Info {...{ kcContext, ...defaultKcProps }} />;

    default:
      return <Error404 />;
  }
});

export default KeycloakApp;
