import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';

export function MainLayout() {
  const getRoutes = routes.map(prop => {
    return (
      <Route
        exact
        path={prop.path}
        render={() => <prop.component />}
        key={prop.key}
      />
    );
  });

  return (
    <div className="flex">
      <Switch>{getRoutes}</Switch>
    </div>
  );
}
