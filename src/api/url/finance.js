/**
 * @file finance模块下的接口方法
 */
import Util from '../util';

let domain = process.env.VUE_APP_FINSNCE_URL;

let instance = Util.finance(domain);

/* eslint-disable */
/** 修改网商订单状态1：已首付，2：等待放款， 3：已放款，4：已结清，5：关闭 */
export function v2_homePageApiV2_getAdPositionidConfig(opts) {
    return instance({
        method: 'post',
        url: 'v2/homePageApiV2/getAdPositionidConfig.json',
        opts
    });
};
