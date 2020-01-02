import React from 'react';
import { Pagination } from 'antd';
import { Button } from 'antd';

var peopleCss = require('./people.css');
var data={
    "username":this.state.username,
    
}
Axios.post({
    url:"/user/sczh",
    data:JSON.stringify(data)
}).then(result=>{
    if (result.state!=1) {
        message.info("成功删除账号")
    } else if(result==1){
        message.info("未成功删除账号！")
        this.props.history.push('/Login')
    }
})
render() 
    return (
        <div className={peopleCss.b1}>
            <div className={peopleCss.B}>
                <h1 className={peopleCss.h1}>删除账号</h1>
                <form method="post">
                <Input placeholder="用户名" name="username" id="username" value={this.state.username} onChange={e=>this.changeValue(e)} className={peopleCss.a1} />
                <Input placeholder="手机号码" name="userPhone" id="userPhone" value={this.state.userPhone} onChange={e=>this.changeValue(e)} className={peopleCss.a2}/>
                
                    <button className={peopleCss.but} onClick={this.xiugai}>确认修改</button>
                    <a href="./../shuoye" className={peopleCss.a2}>返回首页</a>
                </form>
            </div>
        </div>
    )




export default class people extends React.Component{
    
    render(){
        return(
            <div className={peopleCss.allbord}>
                <div className={peopleCss.bord1}>
                    <p className={peopleCss.wu}></p>
                    <p>名称</p>
                    <p>最近发帖时间</p>
                    <p>注册时间</p>
                    <p>备注</p>
                </div>

                <div className={peopleCss.bord2}>
                    <input type="checkbox" id="one" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="one">任永恒</label>
                    <label for="one">2010-02-02</label>
                    <label for="one">2000-01-01</label>
                    <label for="one">无</label>
                </div>
                    
                <div className={peopleCss.bord3}>
                <input type="checkbox" id="two" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="two">任永恒</label>
                    <label for="two">2010-02-02</label>
                    <label for="two">2000-01-01</label>
                    <label for="two">无</label>
                </div>

                <div className={peopleCss.bord2}>
                    <input type="checkbox" id="three" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="three">任永恒</label>
                    <label for="three">2010-02-02</label>
                    <label for="three">2000-01-01</label>
                    <label for="three">无</label>
                </div>
                    
                <div className={peopleCss.bord3}>
                <input type="checkbox" id="four" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="four">任永恒</label>
                    <label for="four">2010-02-02</label>
                    <label for="four">2000-01-01</label>
                    <label for="four">无</label>
                </div>

                <div className={peopleCss.bord2}>
                    <input type="checkbox" id="five" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="five">任永恒</label>
                    <label for="five">2010-02-02</label>
                    <label for="five">2000-01-01</label>
                    <label for="five">无</label>
                </div>
                    
                <div className={peopleCss.bord3}>
                <input type="checkbox" id="six" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="six">任永恒</label>
                    <label for="six">2010-02-02</label>
                    <label for="six">2000-01-01</label>
                    <label for="six">无</label>
                </div>

                <div className={peopleCss.bord2}>
                    <input type="checkbox" id="seven" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="seven">任永恒</label>
                    <label for="seven">2010-02-02</label>
                    <label for="seven">2000-01-01</label>
                    <label for="seven">无</label>
                </div>
                    
                <div className={peopleCss.bord3}>
                <input type="checkbox" id="eight" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="eight">任永恒</label>
                    <label for="eight">2010-02-02</label>
                    <label for="eight">2000-01-01</label>
                    <label for="eight">无</label>
                </div>

                <div className={peopleCss.bord2}>
                    <input type="checkbox" id="nine" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="nine">任永恒</label>
                    <label for="nine">2010-02-02</label>
                    <label for="nine">2000-01-01</label>
                    <label for="nine">无</label>
                </div>
                    
                <div className={peopleCss.bord3}>
                <input type="checkbox" id="ten" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="ten">任永恒</label>
                    <label for="ten">2010-02-02</label>
                    <label for="ten">2000-01-01</label>
                    <label for="ten">无</label>
                </div>

                <div className={peopleCss.bord2}>
                    <input type="checkbox" id="12" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="12">任永恒</label>
                    <label for="12">2010-02-02</label>
                    <label for="12">2000-01-01</label>
                    <label for="12">无</label>
                </div>
                    
                <div className={peopleCss.bord3}>
                <input type="checkbox" id="11" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="11">任永恒</label>
                    <label for="11">2010-02-02</label>
                    <label for="11">2000-01-01</label>
                    <label for="11">无</label>
                </div>

                <div className={peopleCss.bord2}>
                <input type="checkbox" id="13" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="13">任永恒</label>
                    <label for="13">2010-02-02</label>
                    <label for="13">2000-01-01</label>
                    <label for="13">无</label>
                </div>

                <div className={peopleCss.bord3}>
                <input type="checkbox" id="11" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="11">任永恒</label>
                    <label for="11">2010-02-02</label>
                    <label for="11">2000-01-01</label>
                    <label for="11">无</label>
                </div>

                <div className={peopleCss.bord2}>
                <input type="checkbox" id="13" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="13">任永恒</label>
                    <label for="13">2010-02-02</label>
                    <label for="13">2000-01-01</label>
                    <label for="13">无</label>
                </div>

                <div className={peopleCss.bord3}>
                <input type="checkbox" id="11" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="11">任永恒</label>
                    <label for="11">2010-02-02</label>
                    <label for="11">2000-01-01</label>
                    <label for="11">无</label>
                </div>

                <div className={peopleCss.bord2}>
                <input type="checkbox" id="13" className={peopleCss.choose}></input>
                    <label className={peopleCss.choose1} for="13">任永恒</label>
                    <label for="13">2010-02-02</label>
                    <label for="13">2000-01-01</label>
                    <label for="13">无</label>
                </div>

                <Pagination defaultCurrent={6} total={500} className={peopleCss.page}/>
                <div className={peopleCss.lastbtn}>
                    <Button type="primary">注册账号</Button>
                    <Button type="primary">冻结账号</Button>
                </div>
                
            </div>
           
        )
    }
}
