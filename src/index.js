import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = ({ config, loadingComponent = 'Loading...' }) => {
  return (
    <Suspense fallback={loadingComponent}>
      <BrowserRouter>
        <Switch>
          {config.map(({ id, exact, path, component }) => (
            <Route
              key={id}
              exact={exact}
              path={path}
              component={component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
