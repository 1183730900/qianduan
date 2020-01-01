import React from 'react';
import { Input, Tooltip, message } from 'antd';
import Axios from 'axios';
var loginCss = require('./login.css');
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // login = e => {
    //     if (this.state.username == "123" && this.state.password == "123") {
    //         alert('登录成功');
    //         window.localStorage.setItem("username", "123");
    //         window.localStorage.setItem("token", "11111")
    //         //跳转首页
    //         //history
    //         this.props.history.push('/shuoye')
    //     } else if (this.state.username == "admin" && this.state.password == "111111") {
    //         alert('欢迎管理员')
    //         window.localStorage.setItem("username", "admin");
    //         window.localStorage.setItem("token", "11111")
    //         this.props.history.push('/guanliyuan/tezi')

    //     } else {
    //         alert('登录失败')
    //     }

    // }
    login=()=>{
        var data={
            "username":this.state.username,
            "userPassword":this.state.userPassword,
        }
        Axios.post({
            url:"/user/Login",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                message.info('登录失败')
            }else if(result.state==3){
                message.info('用户不存在')
            }else if(result.state==1){
                message.info('登录成功');
              
            }
        })
    }
    render() {
        return (
            <div className={loginCss.b1}>
                <div className={loginCss.login}>
                    <h1 className={loginCss.h1}>用户登录</h1>
                    <form method="post">
                    <Input placeholder="用户名" name="username" id="username" value={this.state.username} onChange={this.changeValue} className={loginCss.input1} />
                    <Input.Password placeholder="密码" name="userPassword" id="userPassword" value={this.state.userPassword} onChange={this.changeValue} className={loginCss.input2} />
                        <button className={loginCss.but} onClick={this.login}>登录</button>
                        <a href="./../zhuce" className={loginCss.a1}>没有账号，请注册</a>
                        <a href="./../xiugai" className={loginCss.a3}>忘记密码？</a>
                        <a href="./../shuoye" className={loginCss.a2}>返回首页</a>
                    </form>
                </div>
            </div>
        )
    }
}
