import React from 'react';
import { Input, Tooltip } from 'antd';
var loginCss = require('./login.css');
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
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
    //         this.props.history.push('/guanliyuan/renyuan')

    //     } else {
    //         alert('登录失败')
    //     }

    // }
    login=()=>{
        var data={
            "adminAccount":this.state.adminAccount,
            "adminPassword":this.state.adminPassword,
        }
        Axios.post({
            url:"/user/Login",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                message.info("登录失败")
            }else if(result.state==1){
                message.info("登录成功")
                this.props.history.push('/guanliyuan/tezi')
            }
        })
    }
    render() {
        return (
            <div className={loginCss.b1}>
                <div className={loginCss.login}>
                    <h1 className={loginCss.h1}>用户登录</h1>
                    <form method="post">
                    <Input placeholder="用户名" name="adminAccount" id="username" value={this.state.adminAccount} onChange={this.changeValue} className={loginCss.input} />
                    <Input.Password placeholder="密码" name="adminPassword" id="password" value={this.state.adminPassword} onChange={this.changeValue} className={loginCss.input} />
                        <button className={loginCss.but} onClick={this.login}>登录</button>
                        <a href="./../zhuce" className={loginCss.a1}>没有账号，请注册</a>
                    </form>
                </div>
            </div>
        )
    }
}
