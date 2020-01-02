import React from 'react';
import Axios from 'axios';
import { message } from 'antd';
var Information = require('./geren.css')
export default class geren extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    changeValue =( e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    xiugai=()=>{
        var data={
            "username":this.state.username,
            "userBirthday":this.state.userBirthday,
            "userAge":this.state.userAge,
            "userBlood":this.state.userBlood,
            "userLocal":this.state.userLocal,
            "userSchool":this.state.userSchool,
            "userEmail":this.state.userEmail,
            "userPhone":this.state.userPhone
        }
        Axios.post({
            url:"/user/xiugai",
            data:JSON.stringify(data),
        }).then(result=>{
            console.log(result.state);
            if (result.state==2) {
                message.info('修改失败')
            }else if(result.state==1){
                message.info('修改成功');
              
            }
        })
    }
    render(){
       return(
           <div>
                <div className={Information.top1}>
                <div className={Information.bg1}>
                    <div className={Information.changefont1}>个人主页</div>
                    <a href="./../" className={Information.a1}>返回</a>
                    <div className={Information.test}>
                        <div className={Information.HeadPhoto}></div>
                        <a className={Information.changefont2}>詹姆斯</a>
                        
                    </div>
                    <div className={Information.changefont3}>死亡如风，常伴吾身</div>
                    {/* <h className={Information.font1}>个人信息</h>
                    <div>
                        <div className={Information.headphoto}></div>
                        <a className={Information.ID}>昵称</a> 
                    </div>    
                        <div className={Information.sign}>
                         <a>个性签名</a>
                        </div> */}
                    <div className={Information.newfix}>   
                        <div className={Information.page1}>
                            
                                <div className={Information.list}>
                                
                                    <div className={Information.message}>
                                    <a href="/fabu/fate" className={Information.jump}>发布与管理
                                        <div className={Information.set}></div>
                                    </a>
                                        <p className={Information.changefont4}>personal infromation</p>
                                        <div className={Information.message2}>
                                            <p>姓名：詹姆斯</p>
                                            <p>出生日期：2000年1月1日</p>
                                            <p>年龄：19</p>
                                            <p>生肖：龙</p>
                                            <p>星座：魔蝎座</p>
                                            <p>血型：A</p>
                                            <p>所在地：四川省成都市</p>
                                            <p>所在学校：西南交通大学希望学院</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
           </div>
       )
    }
}
