import React from 'react';
import ReactDOM from 'react-dom';

// 导入路由4.x
import {HashRouter, BrowserRouter} from 'react-router-dom';

// 导入fundebug监听器
import ErrorBoundary from './containers/errorboundary/errorboundary';

// 导入App模块
import App from './app';

// 导入axios拦截器
import './config';

// 导入全局样式文件
import './index.styl';

// redux
import {createStore, applyMiddleware, compose} from 'redux';
// Provider
import {Provider} from 'react-redux';
// redux中间件
import thunk from 'redux-thunk';

// 导入reducer
import reducer from './reducer';

// 配合Chrome Redux工具进行开发
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

// 渲染到root节点
ReactDOM.render(
    (
        <div>
            <ErrorBoundary>
                <Provider store={store}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </Provider>
            </ErrorBoundary>
        </div>
    ),
    document.getElementById('root')
);

/**
 * 热加载
 */
// if(module.hot){
//     module.hot.accept();
// }
