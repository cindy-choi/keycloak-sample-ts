import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import BasicLayout from '@/layouts/BasicLayout';

// pages
import Main from '@/pages/Main';
import MyPage from '@/pages/MyPage';
import Services from '@/pages/Services';
import Error404 from '@/pages/common/Error404';

// url constants
import { ROUTES } from '@/constants/routes';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Common */}
        <Route path={ROUTES.ERROR_404} component={Error404} />

        <BasicLayout>
          <Switch>
            <Route exact path={ROUTES.ROOT} component={Main} />
            <Route path={ROUTES.MAIN} component={Main} />
            <Route path={ROUTES.SERVICES} component={Services} />

            {/* with Auth */}
            <PrivateRoute exact path={ROUTES.MY}>
              <MyPage />
            </PrivateRoute>

            <Redirect from="*" to={ROUTES.ERROR_404} />
          </Switch>
        </BasicLayout>

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterConfig;
