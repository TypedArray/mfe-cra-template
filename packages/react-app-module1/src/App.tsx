import { Layout, Menu, Spin } from 'antd';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { DefaultLayout } from 'shared/layouts';
import { tw } from 'twind';
import './App.css';
import routes from './routes';

function App() {
  return (
    <DefaultLayout>
      <Layout className={tw`h-full`}>
        <Layout.Sider className={tw`bg-transparent`}>
          <Menu mode="inline" className={tw`h-full rounded`}>
            <Menu.ItemGroup
              title={
                <span style={{ fontWeight: 'bold', color: 'black' }}>
                  模块一
                </span>
              }
            >
              <Menu.Item key="1">
                <NavLink to="/module1/page">用户管理</NavLink>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Layout.Sider>
        <Layout.Content
          style={{ padding: 20, height: '100%', overflow: 'auto' }}
        >
          <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
        </Layout.Content>
      </Layout>
    </DefaultLayout>
  );
}

export default App;

export { React, ReactDOM };
