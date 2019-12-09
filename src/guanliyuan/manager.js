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


var ManagerCss = require('./manager.css');

// export default class manager extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div className={ManagerCss.bgpicture}>
//                     <div className={ManagerCss.title}>
//                         管理页面
//                     </div>
//                     <div className={ManagerCss.managerphoto}></div>
//                     <div className={ManagerCss.ad1}>
//                         <p className={ManagerCss.ad2}>管理员公告</p>
//                         <p className={ManagerCss.ad3}>请认真管理新闻，是一个汉语词语，意思有三种。其一指借助语言、文字、图片、录像等，向公众传播的消息。其二指社会上新近发生的事情。其三指新闻体裁。①借助语言、文字、图片、录像等，向公众传播的消息。具有现实性、时间性、公开性和连续性等特点，以及传递信息、宣传鼓...</p>
//                     </div>
                    //  <BrowserRouter basename='/guanliyuan'>
                    //     <div className={ManagerCss.allleft}>
                    //         <Link to="/tezi" className={ManagerCss.left1}>帖子管理</Link>
                    //         <Link to="/renyuan" className={ManagerCss.left2}>人员管理</Link>
                    //     </div>


                    //     <div className={ManagerCss.bigborder}>
                    //         <Switch>
                    //             <Route path="/renyuan" component={people}></Route>
                    //             <Route path="/tezi" component={post}></Route>
                    //         </Switch>

                    //     </div>
                    // </BrowserRouter> 
//                 </div>
//             </div>
//         )
//     }
// }
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
                        </Switch>
                    </div>
            </Content>
            </Layout>
        </BrowserRouter>
      </Layout>

    );
  }
}