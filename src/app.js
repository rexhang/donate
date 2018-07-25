/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:02
 * @Description: define App
*/

import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';

// 导入路由动画
import ReactAnimatedRouter from './containers/react-animated-router';

// 导入路由权限管理中间件
import Authroute from './components/authroute/authroute';

// 导入Components
import Page1 from "./views/page1/page1";

class App extends Component {
    render() {
        return (
            <div>
                <Authroute></Authroute>
                <ReactAnimatedRouter component={null} appear={false}>
                    <Route exact path="/page1" component={Page1}></Route>
                </ReactAnimatedRouter>
            </div>
        );
    }
}

export default App;