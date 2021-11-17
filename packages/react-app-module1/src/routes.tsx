import React from 'react';
import { Redirect } from 'react-router';
import { RouteConfig } from 'react-router-config';
import Page from './pages/Page';

export default [
  {
    path: '/module1',
    exact: true,
    component: () => <Redirect to="/module1/page" />,
  },
  {
    // 模块一
    permissionId: null,
    path: '/module1/page',
    component: Page,
  },
] as RouteConfig[];
