// import axios from 'axios';

const DATA_INIT = 'DATA_INIT';

const MSG_ERROR = 'MSG_ERROR';

const initState = {
    datas: {},
    errormsg: '',
    userinfo: {}
};


export function main(state=initState, action) {
    switch (action.type){
        case DATA_INIT:
            return {...state, userinfo: action.userinfo};
        case MSG_ERROR:
            return {...state, errormsg: action.msg};
        default:
            return state;
    }
}

// 报错提示
function msgError(msg) {
    return {
        type: MSG_ERROR,
        msg: msg
    };
}

// 初始化用户数据
function dataInit(userinfo) {
    return {
        type: DATA_INIT,
        userinfo: userinfo
    };
}
// 获取用户信息初始化state数据
// export function staticUserinfo(uid) {
//
//     if(!uid){
//        return msgError(window.location.href+ '(缺少uid)eg:host://dist/index.html?uid=xx#/routername')
//     }
//
//     return dispatch=>{
//         axios.get(API.getUserInfo, {params: {uid: uid, device_type: '1'}})
//             .then(res=>{
//                 if(res.data.code == 200){
//                     dispatch(dataInit(res.data.data));
//                 } else{
//                     dispatch(msgError(res.data.msg));
//                 }
//             })
//     };
// }
