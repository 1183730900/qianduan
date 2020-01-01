import React from 'react';
import { Input, Tooltip, message } from 'antd';
import Axios from 'axios';
var xiugaiCss = require('./xiugai.css');
export default class Xiugai extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    xiugai=()=>{
        var data={
            "username":this.state.username,
            "userPhone":this.state.userPhone,
            "password":this.state.password
        }
        Axios.post({
            url:"/user/XGuserpassword",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state!=1) {
                message.info("手机号码错误或用户名错误")
            } else if(result==1){
                message.info("密码修改成功！")
                this.props.history.push('/Login')
            }
        })
    }
render() {
    return (
        <div className={xiugaiCss.b1}>
            <div className={xiugaiCss.B}>
                <h1 className={xiugaiCss.h1}>找回密码</h1>
                <form method="post">
                <Input placeholder="用户名" name="username" id="username" value={this.state.username} onChange={this.changeValue} className={xiugaiCss.a1} />
                <Input placeholder="手机号码" name="userPhone" id="userPhone" value={this.state.userPhone} onChange={this.changeValue} className={xiugaiCss.a2}/>
                <Input.Password placeholder="密码" name="password" id="password" value={this.state.password} onChange={this.changeValue} className={xiugaiCss.a3} />
                    <button className={xiugaiCss.but} onClick={this.xiugai}>确认修改</button>
                    <a href="./../shuoye" className={xiugaiCss.a2}>返回首页</a>
                </form>
            </div>
        </div>
    )
}
}
