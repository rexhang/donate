/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:09
 * @Description: fundebug纯组件
*/

// 导入监控BUG插件
import {fundebugAPIKEY} from '../../define';
import React from 'react';

const fundebug = require('fundebug-javascript');
fundebug.apikey = fundebugAPIKEY;

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // 将component中的报错发送到Fundebug
        fundebug.notifyError(error, {
            metaData: {
                info: info
            }
        });
    }
    componentDidMount(){
        // fundebug.notify("Test React", "Hello, Fundebug! From React");
    }

    render() {
        if (this.state.hasError) {
            // 也可以在出错的component处展示出错信息
            return (
                <h1>
                    很抱歉，页面出错了~
                </h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;