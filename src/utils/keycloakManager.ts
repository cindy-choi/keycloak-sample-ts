import Keycloak from 'keycloak-js';

// for LOGIN UI
import { getKcContext } from 'keycloakify';

export const realm = 'sample';
export const encodedRealm = encodeURIComponent(realm);
export const publicClientId = 'public-client';
export const initOptions = {};

export const keycloak = Keycloak({
  realm,
  url: 'http://localhost:8080/auth',
  clientId: publicClientId,
});

export const { kcContext } = getKcContext<{
  pageId: 'login.ftl',
  /**
   * Defined when you use the keycloak-mail-whitelisting keycloak plugin
   * (https://github.com/micedre/keycloak-mail-whitelisting)
   */
  // authorizedMailDomains?: string[];
}>({
  // @cindy.choi
  // 아래의 디버깅을 원하는 페이지 주석을 해제하면 하단의 mockData를 적용하여 로컬에 페이지를 띄울 수 있습니다.
  // "mockPageId": "login.ftl",
  // "mockPageId": "register.ftl",
  // "mockPageId": "login-update-profile.ftl",
  // // @ts-ignore
  // "mockPageId": "login-update-password.ftl",
  // "mockPageId": "info.ftl",
  // "mockPageId": "error.ftl",

  /**
   * Customize the simulated kcContext that will let us
   * dev the page outside keycloak (with auto-reload)
   */
  mockData: [
    {
      pageId: 'login.ftl',
      url: {
        loginAction: "http://localhost:8080/auth/realms/sample/login-actions/authenticate?session_code=mX4lrdtfEFVFmv1b6SJVUF_TIgWYtkmLPQ8v6jEbyOw&execution=b6a52a8b-2d12-4e71-a3b6-6e6ff4c158ab&client_id=public-client&tab_id=uTelJ8v_g5Y",
      },
    },
  ],
});

const keycloakManager = {
  keycloak,
  initOptions,
  encodedRealm,
  kcContext,
};

export type KcContextType = NonNullable<typeof kcContext>;
export default keycloakManager;
