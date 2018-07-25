/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:24
 * @Description: 全局模态框
*/

import React from 'react';

import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root');

class Modal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'mymodal';
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default Modal;