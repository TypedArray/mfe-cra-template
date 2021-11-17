import 'antd/dist/antd.css';
import consolev from 'consolev';
import { format } from 'date-fns';
import { isPlainObject } from 'lodash-es';
// @ts-ignore
import preval from 'preval.macro';
import React, { Suspense, useMemo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { PermissionId } from 'shared/constants';
import { PermissionProvider } from 'shared/contexts';
import { Middleware, SWRConfig } from 'swr';
import routes from './routes';

/**
 * 打印项目信息
 */
consolev(
  `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
  process.env.REACT_APP_DESCRIPTION,
  process.env.REACT_APP_SHA ?? 'dev',
  format(preval`module.exports = Date.now();`, 'yyyy/MM/dd HH:mm:ss')
);
/**
 * 序列化参数
 */
const serialize: Middleware = useSWRNext => {
  return (key, fetcher, config) => {
    const isSerializable = Array.isArray(key) || isPlainObject(key);
    // Serialize the key.
    const serializedKey = isSerializable ? JSON.stringify(key) : key;
    // Pass the serialized key, and unserialize it in fetcher.
    return useSWRNext(
      serializedKey,
      (key, ...args) => {
        const unserializedKey = isSerializable
          ? JSON.parse(key)
          : [key, ...args];
        return fetcher!.apply(null, [].concat(unserializedKey));
      },
      config
    );
  };
};
const App = () => {
  // 主菜单模版
  const mainMenuTemplate = useMemo(() => {
    return [
      {
        permissionId: PermissionId.MODULE1,
        label: '模块一',
        href: '/module1',
      },
      {
        permissionId: PermissionId.MODULE2,
        label: '模块二',
        href: '/module2',
      },
    ];
  }, []);
  return (
    <SWRConfig value={{ use: [serialize] }}>
      <PermissionProvider mainMenuTemplate={mainMenuTemplate}>
        <Suspense fallback={'loading...'}>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Suspense>
      </PermissionProvider>
    </SWRConfig>
  );
};

export default App;
