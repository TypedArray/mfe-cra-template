import { ResponseObject } from '../interfaces';
import request from '../utils/request';

/**
 * 用户
 */
const user = {
  /**
   * 登录
   */
  login(data: { username: string; password: string }) {
    return request.post<ResponseObject>('/api/v1/login', { data });
  },
  /**
   * 退出
   */
  logout: () => {
    return request.post<ResponseObject>('/api/v1/logout');
  },
  /**
   * 用户信息
   */
  getUserInfo: () => {
    return Promise.resolve({
      code: 'Success',
      data: {
        accountId: '1',
        accountName: 'admin',
        realName: '管理员',
        permissions: [
          'application.permission.MODULE1',
          'application.permission.MODULE2',
        ],
      },
    });
  },
};
export default user;
