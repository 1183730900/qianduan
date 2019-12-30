import React from 'react';
import Axios from 'axios';
import { message } from 'antd';
var registerCss = require('./register.css');
export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
            // "userRePassword":this.state.userRePassword,
            "userEmail":this.state.userEmail,
            "userPhone":this.state.userPhone,
        }
        Axios.post({
            url:"/user/ChaRu",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                alert.info("用户名已存在")
            }else if(result.state==1){
                alert.info("注册成功")
            }
        })
    }
    render() {
        return (
            <div className={registerCss.H}>
                <div className={registerCss.h1}>
                    <div className={registerCss.h2}>
                        <span>用户注册</span>
                    </div>
                    <from action="#" method="post">
                        <div className={registerCss.h3}>
                            <span className={registerCss.b}>*</span>
                            <label for="username">用户名</label>
                            <div className={registerCss.h4}>
                                <input type="text" className={registerCss.h5} name="username" value={this.state.username} onChange={e=>this.changeValue(e)} placeholder="请输入用户名 长度:6-12个字符" />
                            </div>
                        </div>
                        <div className={registerCss.a1}>
                            <span className={registerCss.b}>*</span>
                            <label for="password">密码</label>
                            <div className={registerCss.a2}>
                                <input type="password" className={registerCss.aa} name="password"  value={this.state.password} onChange={e=>this.changeValue(e)} placeholder="请输入密码 长度:6-12个字符" />
                            </div>
                        </div>
                        <div className={registerCss.c1}>
                            <span className={registerCss.b}>*</span>
                            <label for="phonenumber">手机号码</label>
                            <div className={registerCss.c2}>
                                <input type="text" className={registerCss.c3} name="phonenumber"  value={this.state.phonenumber} onChange={e=>this.changeValue(e)} placeholder="请输入您的手机号码，11位有效数字" />
                            </div>
                        </div>

                        <div className={registerCss.d1}>
                            <span className={registerCss.b}>*</span>
                            <label for="email">电子邮箱</label>
                            <div className={registerCss.d2}>
                                <input type="text" className={registerCss.d3} name="email"  value={this.state.email} onChange={e=>this.changeValue(e)} placeholder="请输入您的邮箱地址，如：123@qq.com" />
                            </div>
                        </div>
                        <div className={registerCss.f}>
                            <input className={registerCss.f1} type="submit" onClick={this.upload()} value="注册"></input>
                        </div>
                        <div className={registerCss.g}>
                            <a href="./../denlu" className={registerCss.g5}>已有账号？去登录</a>
                        </div>
                            <a href="./../" className={registerCss.g6}>返回</a>
                    </from>
                </div>
            </div>
        )
    }
}
