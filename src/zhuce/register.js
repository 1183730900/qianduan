import React from 'react';
import Axios from 'axios';
import { message,Input} from 'antd';
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
            "userEmail":this.state.userEmail,
            "userPhone":this.state.userPhone,
        }
        Axios.post({
            url:"/user/ChaRu",
            data:JSON.stringify(data)
            
        }).then(result=>{
            if (result.state==2) {
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
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
                    <form  method="post">
                       <div>
                               <Input placeholder="用户名"  name="username" className={registerCss.a1}  value={this.state.username} onChange={e=>this.changeValue(e)}  />
                               <Input.Password placeholder="密码" className={registerCss.aa} name="userPassword"  value={this.state.userPassword} onChange={e=>this.changeValue(e)}  />
                               <Input placeholder="手机号码" className={registerCss.c3} name="userPhone"  value={this.state.userPhone} onChange={e=>this.changeValue(e)} />
                               <Input placeholder="电子邮箱" className={registerCss.d3} name="userEmail"  value={this.state.userEmail} onChange={e=>this.changeValue(e)} />
                               <button className={registerCss.f1} type="submit" onClick={this.upload()}>注册</button>
                        </div>
                        <div className={registerCss.g}>
                            <a href="./../denlu" className={registerCss.g5}>已有账号？去登录</a>
                        </div>
                            <a href="./../" className={registerCss.g6}>返回</a>
                    </form>
                </div>
            </div>
        )
    }
}
