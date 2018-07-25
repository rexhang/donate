/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:20
 * @Description: Loading 组件
*/

import React from 'react';

import PropTypes from 'prop-types';

import './loading.styl';

class Loading extends React.PureComponent {

    static proptypes = {
        width: PropTypes.string,
        hide: PropTypes.boolean
    };

    static defaultProps = {
        width: '100',
        hide: false
    };

    render() {
        return (
            <div className="Loading" style={ {display: `${this.props.hide?'none':'block'}`} }>
                <div className="loading-text">Loading ...</div>
                <img className="loading-icon" style={{display: 'block'}} width={this.props.width} src={require('./img/loading-cat.svg')} alt=""/>
            </div>
        );
    }
}

export default Loading;