/**
 * @author Rexhang(GuHang)
 * @date 2018/6/28 上午10:22
 * @Description: 工具函数
*/

import React, {Component} from 'react';

import PropTypes from 'prop-types';
import AuthRoute from "./components/authroute/authroute";

// 设置标题
export function setTitle(title) {
    document.getElementsByTagName('title')[0].innerText = title;
}

// 长按事件封装
export function longTap(domID, callback) {
    window.Zepto(domID).on('longTap', function () {
        callback();
    });
}

// 浏览器环境监测
export function CheckOperatingEnvironment() {
    if(window.ios && window.ios.getWebPosition()){
        return 'ioswebview';
    }
    if(window.android && window.android.getWebPosition()){
        return 'androidwebview';
    }
    return {msg: '环境不合法'};
}

// 获取url参数(/*带解析中文的方案*/)
export function GetUrlParams(params) {
    let reg = new RegExp("(^|&)"+params+"=([^&]*)(&|$)");
    let result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}

// webview环境检测
export function WebView() {
    if(GetUrlParams('type') == 'webview'){
        return true;
    } else {
        return false;
    }
}

// 数据序列化
export function transformRequest(data){
    let ret = '';
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
    }
    return ret;
}

// localStorage的存取
export class LocalStorage{
    //存储单个属性
    set(key, value){
        window.localStorage[key]=value;
    }
    //读取单个属性
    get(key, defaultValue){
        return  window.localStorage[key] || defaultValue;
    }
    //存储对象，以JSON格式存储
    setObject(key, value){
        window.localStorage[key]=JSON.stringify(value);
    }
    //读取对象
    getObject(key) {
        return JSON.parse(window.localStorage[key] || '{}');
    }
    // 清除指定元素
    remove(key){
        window.localStorage.removeItem(key);
    }
    // 清除全部
    clear(){
        window.localStorage.clear();
    }
}

// 全局注册一个log方法
export function Log(msg) {
    return console.info("%c" + msg, "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff7300), color-stop(100%,#f0f0f0));font-size: 0.4rem;color: #000");
};

// 检测手机号
export class Verification {
    //验证电话吗是否合格
    phone(phone){
        const phoneReg = /^1[3,4,5,7,8,9]\d{9}$/;
        return phoneReg.test(phone);
    }
}

// 判断对象是否为空
export function emptyObject(obj){
    if(window.JSON.stringify(obj) === "{}"){
        return true;
    } else {
        return false;
    }
}