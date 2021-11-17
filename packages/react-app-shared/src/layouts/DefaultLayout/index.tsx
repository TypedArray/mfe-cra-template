import { Layout, Menu } from 'antd';
import React, { useContext } from 'react';
import { tw } from 'twind';
import { PermissionContext } from '../../contexts';

interface Props {
  children: React.ReactNode;
}
function DefaultLayout({ children }: Props) {
  const permission = useContext(PermissionContext);
  const menus = permission.actions.buildMenu();
  return (
    <Layout className={tw`h-full`}>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal">
          {menus}
        </Menu>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer className={tw`text-center`}>
        Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
    </Layout>
  );
}

export default DefaultLayout;
