import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = ({ config, loadingComponent }) => {
  return (
    <Suspense fallback={loadingComponent}>
      <BrowserRouter>
        <Switch>
          {config.map(({
            id,
            path,
            exact = false,
            component = null,
          }) => (
            <Route
              id={id}
              key={id}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

Router.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
  loadingComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
};

Router.defaultProps = {
  config: [],
  loadingComponent: 'Loading...'
}

export default Router;
