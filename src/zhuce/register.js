import React from 'react';
var registerCss = require('./register.css');
export default class Register extends React.Component {
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
                                <input type="text" className={registerCss.h5} name="username" placeholder="请输入用户名 长度:6-12个字符" />
                            </div>
                        </div>
                        <div className={registerCss.a1}>
                            <span className={registerCss.b}>*</span>
                            <label for="userPassword">密码</label>
                            <div className={registerCss.a2}>
                                <input type="password" className={registerCss.aa} name="userPassword" placeholder="请输入密码 长度:6-12个字符" />
                            </div>
                        </div>
                        <div className={registerCss.a3}>
                            <span className={registerCss.b}>*</span>
                            <label for="userRePassword">确认密码</label>
                            <div className={registerCss.a4}>
                                <input type="password" className={registerCss.a5} name="userRePassword" placeholder="请重复输入密码" />
                            </div>
                        </div>
                        <div className={registerCss.c1}>
                            <span className={registerCss.b}>*</span>
                            <label for="userPhone">手机号码</label>
                            <div className={registerCss.c2}>
                                <input type="text" className={registerCss.c3} name="userPhone" placeholder="请输入您的手机号码，11位有效数字" />
                            </div>
                        </div>

                        <div className={registerCss.d1}>
                            <span className={registerCss.b}>*</span>
                            <label for="userEmail">电子邮箱</label>
                            <div className={registerCss.d2}>
                                <input type="text" className={registerCss.d3} name="userEmail" placeholder="请输入您的邮箱地址，如：123@qq.com" />
                            </div>
                        </div>
                        <div className={registerCss.e1}>
                            <span className={registerCss.b}>*</span>
                            <label for="userGender">性别</label>
                            <div className={registerCss.e2}>
                                <input type="radio" id="userGender_01" name="userGender" value="0" checked="checked" />男
						<input type="radio" id="userGender_02" name="userGender" value="1" />女
					</div>
                        </div>
                        <div className={registerCss.f}>
                            <input className={registerCss.f1} type="submit" value="注册"></input>
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
