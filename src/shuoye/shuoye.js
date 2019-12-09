import React from 'react'
import Header from './../Header/header'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import xiaoyuan from '../xiaoyuan/xiaoyuan';
import huzhu from '../huzhu/huzhu';
import k1 from '../xeushu/xeushu';
import k2 from '../xeushu/x1';
import k3 from '../xeushu/x2';
import k4 from '../xeushu/x3';
import k5 from '../xeushu/x4';
import h2 from '../huzhu/h2';
import { Menu,Icon } from 'antd';
var ShuoyeCss = require('./shuoye.css')
const { SubMenu } = Menu;
export default class shuoye extends React.Component {
    state = {
        mode: 'inline',
        theme: 'light',
    };

    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };
    render() {
        return (
            <div className={ShuoyeCss.b4}>
                <Header />
                <div className={ShuoyeCss.b1}>

                    <BrowserRouter basename='shuoye'>
                        <div className={ShuoyeCss.b2}>
                            <div className={ShuoyeCss.d1}>
                                <Menu
                                    style={{ width: '100hv' }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode={this.state.mode}
                                    theme="dark"
                                >
                                    <Menu.Item key="1">
                                        <Icon type="bank"/>
                                        <Link to='/xiaoyuan' className={ShuoyeCss.c3}>校园论坛</Link>
                                    </Menu.Item>

                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="smile" />
                                                <Link  className={ShuoyeCss.c1}>互助平台</Link>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="3"><Link to='/huzhu/l1' className={ShuoyeCss.c2}>求助</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to='/huzhu/l2' className={ShuoyeCss.c2}>组队</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="read" />
                                                <Link className={ShuoyeCss.c1}>学术交流</Link>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="6"><Link to='/xeushu/k1' className={ShuoyeCss.c2}>高数</Link></Menu.Item>
                                        <Menu.Item key="7"><Link to='/xeushu/k5' className={ShuoyeCss.c2}>形势与政策</Link></Menu.Item>
                                        <Menu.Item key="8"><Link to='/xeushu/k2' className={ShuoyeCss.c2}>英语</Link></Menu.Item>
                                        <Menu.Item key="9"><Link to='/xeushu/k3' className={ShuoyeCss.c2}>物理</Link></Menu.Item>
                                        <Menu.Item key="10"><Link to='/xeushu/k4' className={ShuoyeCss.c2}>线性代数</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>    
                            </div>
                        </div>

                        <div className={ShuoyeCss.b3}>
                            <Switch>
                                <Route path="/xiaoyuan" component={xiaoyuan} ></Route>
                                <Route path="/xeushu/k1" component={k1}></Route>
                                <Route path="/xeushu/k2" component={k2}></Route>
                                <Route path="/xeushu/k3" component={k3}></Route>
                                <Route path="/xeushu/k4" component={k4}></Route>
                                <Route path="/xeushu/k5" component={k5}></Route>
                                <Route path="/huzhu/l1" component={huzhu}></Route>
                                <Route path="/huzhu/l2" component={h2}></Route>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>


            </div>

        )
    }
}
