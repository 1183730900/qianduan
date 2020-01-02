import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import geren from '../geren/geren';
import post from './post';
import people from './people';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import zjguanliyuan from './zjguanliyuan';


var ManagerCss = require('./manager.css');


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { RangePicker } = DatePicker;
const { Search } = Input;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter basename='/guanliyuan'>  
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                <Icon type="pie-chart" />
                    <span>帖子管理</span>
                     <Link to="/tezi" ></Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="desktop" />
                    <span>人员管理</span>
                    <Link to="/renyuan" >人员管理</Link>
                </Menu.Item>

            </Menu>
            </Sider>
            <Layout>
              <a href="./../denlu2">退出</a>
            {/* <Header className={ManagerCss.head} style={{ background: '#fff', padding: 0 }} >管理页面</Header> */}
            <Content  style={{ margin: '0 16px' }}>
                <Breadcrumb className={ManagerCss.date} style={{ margin: '16px 0' }}>
                <RangePicker
                    dateRender={current => {
                        const style = {};
                        if (current.date() === 1) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                        }
                        return (
                        <div className="ant-calendar-date" style={style}>
                            {current.date()}
                        </div>
                        );
                    }}
                />
                <div className={ManagerCss.search}>
                    <Search  placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                </div>
                </Breadcrumb>
                    <div className={ManagerCss.bigborder}>
                        <Switch>
                            <Route path="/renyuan" component={people}></Route>
                            <Route path="/tezi" component={post}></Route>
                            <Route path="/zjguanliyuan" component={zjguanliyuan}></Route>
                            <Route path="/scguanliyuan" component={zjguanliyuan}></Route>

                        </Switch>
                    </div>
            </Content>
            </Layout>
        </BrowserRouter>
      </Layout>

    );
  }
}