import React from 'react';
import { navigate } from 'gatsby';
import { QueryParamProvider } from 'use-query-params';

function generatePath(location) {
  return location.pathname + location.search;
}

const history = {
  push: (location) => {
    navigate(generatePath(location), { replace: false, state: location.state });
  },
  replace: (location) => {
    navigate(generatePath(location), { replace: true, state: location.state });
  },
};

export const wrapPageElement = ({ element, props }) => (
  <QueryParamProvider history={history} location={props.location}>
    {element}
  </QueryParamProvider>
);
