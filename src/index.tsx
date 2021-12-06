import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './locales/i18n';
import reportWebVitals from './reportWebVitals';

// service ui
import App from './App';
// keycloak ui
import KeycloakApp from '@/KeycloakApp';
import { kcContext } from '@/utils/keycloakManager';


/**
 * keycloak 서버에서 제공할 때에만 kcContext 값이 활성화되며, 기본적으로는 App을 렌더링합니다.
 */
ReactDOM.render(
  <React.StrictMode>
		{
      kcContext !== undefined ? (
				<KeycloakApp kcContext={kcContext} />
			) : (
				<App />
			)
    }
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
