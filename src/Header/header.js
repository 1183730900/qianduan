import { Link } from 'react-router-dom'
import React from 'react';
import { Avatar } from 'antd';
var HeaderCss = require('./header.css')

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: window.localStorage.getItem("username")
        }
    }
    logout = e => {
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username: null
        })
    }
    render() {
        let userProfile = null;
        if (this.state.username != null) {
            userProfile =
                <div>
                    <Link to="/geren" className={HeaderCss.a4}></Link>
                    <Link to="/geren" className={HeaderCss.a6}>{this.state.username}</Link>
                    <button type="primary" onClick={this.logout} className={HeaderCss.a7}>登出</button>
                </div>

        } else {
            userProfile =
                <div>
                    <Avatar icon="user"  className={HeaderCss.b}/>
                    <Link to="/Login" className={HeaderCss.a3}>登录</Link>
                    <Link to="/zhuce" className={HeaderCss.a3}>注册</Link>
                </div>
        }
        return (
            <div className={HeaderCss.header}>
                <div className={HeaderCss.a1}>
                    <Link className={HeaderCss.a5} to="/shuoye">西希论坛</Link>
                    <div className={HeaderCss.a2}>
                        {userProfile}
                    </div>
                    
                </div>
            </div>
        )
    }
}
