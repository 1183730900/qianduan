import React from 'react';
import { Pagination } from 'antd';
import { Button } from 'antd';
import Axios from 'axios';

var peopleCss = require('./people.css');
var data={
    "adminAccount":this.state.adminAccount,
    "adminPassword":this.state.adminPassword
}
Axios.post({
    url:"/admin/ZhuCeadmin",
    data:JSON.stringify(data)
}).then(result=>{
    if (result.state!=1) {
        message.info("成功添加管理员")
    } else if(result==1){
        message.info("未成功添加管理员")
        this.props.history.push('/Login')
    }
})
render() 
    return (
        <div className={peopleCss.b1}>
            <div className={peopleCss.B}>
                <h1 className={peoppleCss.h1}>管理员</h1>
                <form method="post">
                <Input placeholder="用户名" name="adminAccount" id="adminAccount" value={this.state.adminAccount} onChange={e=>this.changeValue(e)} className={peopleCss.a1} />
                
                <Input.Password placeholder="密码" name="adminPassword" id="adminPassword" value={this.state.password} onChange={e=>this.changeValue(e)} className={peopleCss.a3} />
                    <button className={peopleCss.but} onClick={this.people}>确认添加</button>
                    <a href="./../shuoye" className={peopleCss.a2}>返回首页</a>
                </form>
            </div>
        </div>
    )





