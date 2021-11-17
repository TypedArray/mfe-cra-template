import { Menu } from 'antd';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import ResponseCode from '../constants/ResponseCode';
import { MenuItem } from '../interfaces';
import services from '../services';

interface UserInfo {
  accountId: string;
  accountName: string;
  realName: string;
}
interface Props {
  mainMenuTemplate: MenuItem[];
}

/**
 * 权限数据
 */
export interface PermissionContextProps {
  permissionSet: Set<string> | null;
  userInfo: UserInfo | null;
  initialized: boolean;
  readonly actions: Omit<PermissionProvider, keyof React.Component>;
}
console.log('PermissionContext React.createContext', module);

const Context = React.createContext<PermissionContextProps>(null as any);
const { Consumer, Provider } = Context;
class PermissionProvider extends React.Component<
  Props,
  PermissionContextProps
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      permissionSet: null,
      userInfo: null,
      initialized: false,
      actions: this,
    };
  }

  componentDidMount() {
    this.initialize();
  }
  initialize = async () => {
    const res = await services.user.getUserInfo();
    if (res.code === ResponseCode.SUCCESS) {
      const { accountId, accountName, realName, permissions } = res.data;

      this.setState({
        userInfo: { accountId, accountName, realName },
        permissionSet: new Set(permissions),
      });
    }
    this.setState({
      initialized: true,
    });
  };
  /**
   * 判断是否有权限
   * @param permissionId 目标权限 ID
   */
  hasPermission = (permissionId?: string | string[]) => {
    if (process.env.NODE_ENV === 'development' || permissionId == null) {
      return true;
    }
    const { permissionSet } = this.state;
    if (permissionSet) {
      if (typeof permissionId === 'string') {
        return permissionSet.has(permissionId);
      } else {
        return permissionId.some(permissionId =>
          permissionSet.has(permissionId)
        );
      }
    }
    return false;
  };
  /**
   * 是否登录（初始化成功）
   */
  loggedIn = () => {
    let { userInfo } = this.state;
    return userInfo != null;
  };
  /**
   * 查找第一个有权限的菜单
   * @param template
   */
  findFirstMenu() {
    const { mainMenuTemplate } = this.props;
    let open = [...mainMenuTemplate];
    let node: MenuItem | undefined;
    while ((node = open.shift())) {
      if (node.submenu) {
        open = node.submenu.concat(open);
      } else if (
        !node.disabled &&
        (!node.permissionId || this.hasPermission(node.permissionId))
      ) {
        return node;
      }
    }
  }
  buildMenu = (): ReactNode[] => {
    const { mainMenuTemplate } = this.props;
    return this.buildMenuFromTemplate(mainMenuTemplate);
  };
  private buildMenuFromTemplate = (template: MenuItem[]): ReactNode[] => {
    return template
      .filter(item => !item.disabled && this.hasPermission(item.permissionId))
      .map((item, i) => {
        const key = i;
        const submenu = item.submenu?.filter(item => !item.disabled);
        if (submenu && submenu.length > 0) {
          const menu = this.buildMenuFromTemplate(submenu);
          return (
            menu.length > 0 && (
              <Menu.ItemGroup key={key} title={item.label}>
                {menu}
              </Menu.ItemGroup>
            )
          );
        } else {
          return (
            <Menu.Item
              key={key}
              title={item.label}
              className={item.className}
              // icon={item.icon ?? defaultIcon}
              style={item.style}
            >
              <NavLink
                to={item.href!}
                activeClassName={item.activeClassName}
                activeStyle={item.activeStyle}
              >
                {item.label}
              </NavLink>
            </Menu.Item>
          );
        }
      });
  };
  logout = async () => {
    try {
      const res = await services.user.logout();
      if (res.data.code === ResponseCode.SUCCESS) {
        // go to login page;
      } else {
        console.error(res.data.msg || '退出错误，请稍后再试');
      }
    } catch (error) {
      console.error('退出错误，请稍后再试');
    }
  };
  render() {
    let { initialized } = this.state;
    let { children } = this.props;
    return (
      <Provider value={this.state}>{initialized ? children : null}</Provider>
    );
  }
}
export {
  PermissionProvider,
  Context as PermissionContext,
  Consumer as PermissionConsumer,
};
