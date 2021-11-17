import { ResponseCode } from '../constants';

export default interface ResponseObject<T = any> {
  code: typeof ResponseCode[keyof typeof ResponseCode];
  msg: string;
  data: T;
}
