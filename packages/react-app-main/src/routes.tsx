import React from 'react';
import { Redirect } from 'react-router';
import { RouteConfig } from 'react-router-config';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/module1" />,
  },
  {
    // 模块一
    permissionId: null,
    path: '/module1',
    // @ts-ignore
    component: React.lazy(() => import('module1/App')),
  },
  {
    // 模块二
    permissionId: null,
    path: '/module2',
    // @ts-ignore
    component: React.lazy(() => import('module2/App')),
  },
] as RouteConfig[];
