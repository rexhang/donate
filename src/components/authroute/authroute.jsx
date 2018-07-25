/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:13
 * @Description: 中间管理模块
*/

import React, {version} from 'react';
import Vconsole from '../../../node_modules/vconsole/dist/vconsole.min';
import {withRouter, Redirect} from 'react-router-dom';
// import {staticUserinfo} from '../../redux/main.redux';
import {connect} from 'react-redux';

import {GetUrlParams, Log} from '../../util';

// 微信分享
// import wxConfig from '../../wx-config';

// 初始化手机调试工具
if( GetUrlParams('tools') == 'true' ){
    new Vconsole();
}

// 可以获取同路由的this.props
@withRouter
@connect(
    state=>state.main
)
class AuthRoute extends React.Component {
    constructor(props) {
        super(props);
        Log(`React_version: ${version}`);
    }

    componentDidMount(){
        // 分享初始化
        // wxConfig();
    }

    render() {
        const pathname = this.props.location.pathname;
        Log(pathname);
        // 无参数就跳转到page1
        if(pathname === '/'){
            return (
                <Redirect to='/page1' />
            );
        }
        return (
            <div className="AuthRoute rex-text-center rex-text-color-red">
                <h3>{this.props.errormsg}</h3>
            </div>
        );
    }
}

export default AuthRoute;