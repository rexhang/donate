/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:54
 * @Description: API定义
*/

import {GetUrlParams} from '../../util';

const is_dev = GetUrlParams('is_dev');

// 测试和正式环境接口HOST地址
export const HOSTS = "";
export const DEV_HOSTS = "";

const USE_HOSTS = (is_dev == 'true')?DEV_HOSTS:HOSTS;

export default {
    'daybookIndex': USE_HOSTS+'/mobile/daybook/read',
    'geAllComment': USE_HOSTS+'/mobile/daybook/geAllComment',
    'inc_zan': USE_HOSTS+'/mobile/daybook/inc_zan',
    'report': USE_HOSTS+'/mobile/daybook/report',
    'commentPost': USE_HOSTS+'/mobile/daybook/commentPost',
    'get_list': USE_HOSTS+'/mobile/daybook/get_list',
    'doLogin': USE_HOSTS+'/mobile/login/doLogin',
    'send_code': USE_HOSTS+'/mobile/login/send_code'
}