/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午5:14
 * @Description: 入口页面
*/

import React, {Component} from 'react';

import Loading from '../../components/loading/loading';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        };

    }

    componentDidMount(){
        this.setState({
            data: true
        });

    }

    render() {

        if( !this.state.data ){
            return <Loading width='50%' />;
        }

        return (
            <div className="Page1">
                <h2 className="err-msg">Hello</h2>
            </div>
        );
    }
}

export default Page1;