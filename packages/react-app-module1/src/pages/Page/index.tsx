import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { tw } from 'twind';

function Page() {
  return (
    <Layout>
      <Breadcrumb className={tw`mb-4`}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout.Content>
        <div>Page</div>
      </Layout.Content>
    </Layout>
  );
}
export default Page;
