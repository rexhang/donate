import axios from 'axios';

import {Toast} from 'antd-mobile';

// axios.defaults.baseURL = 'http://localhost:9577';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
// axios.defaults.headers.post['Accept-Language'] = "zh-cn";
axios.defaults.timeout = 10000;
// axios.defaults.transformRequest = [function(data) {
//     return window.jQuery.param(data)
// }];

// axios.defaults.crossDomain = true;
// axios.defaults.withCredentials  = true;

// 拦截请求
axios.interceptors.request.use(function (config) {
    Toast.loading('loading...', 0);
    return config;
});

// 拦截响应
axios.interceptors.response.use(function (config) {
    Toast.hide();
    if(config.data.code !== 200){
        Toast.offline(config.data.msg||'code码错误~', 2);
    }
    return config;
});