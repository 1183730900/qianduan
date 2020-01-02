import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Shuoye from './shuoye/shuoye'
import { BrowserRouter, Route, Switch, Redirect ,withRouter} from 'react-router-dom'
import login from './denlu/login';
import geren from './geren/geren';
import Register from './zhuce/register'
import xiangqin1 from './xiangqin1/xiangqin';
import xiangqin2 from './xiangqin1/x1';
import xiangqin4 from './xiangqin1/x3';
import xiangqin3 from './xiangqin1/x2';
import xiangqin5 from './xiangqin1/x4';
import xiangqin6 from './xiangqin1/x5';
import xiangqin7 from './xiangqin1/x6';
import xiangqin8 from './xiangqin1/x7';
import fabu from './geren/fabu';
import manager from './guanliyuan/guanlidenlu';
import xiugai from './xiugaimima/xiugai'
var ShuoyeCss = require('./shuoye/shuoye.css')
class Indexpage extends React.Component {
    render() {
        return (
            <div className={ShuoyeCss.b4}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/shuoye/xiaoyuan" component={Shuoye}></Route>
                        <Route path="/user/Login" component={login}></Route>
                        <Route path="/zhuce" component={Register}></Route>                        
                        <Route path="/xiaoyuan/xiangqin" component={xiangqin1}></Route>
                        <Route path="/gaoshu/xiangqin" component={xiangqin2}></Route>
                        <Route path="/yinyu/xiangqin" component={xiangqin3}></Route>
                        <Route path="/wuli/xiangqin" component={xiangqin4}></Route>
                        <Route path="/xianxin/xiangqin" component={xiangqin5}></Route>
                        <Route path="/xinshi/xiangqin" component={xiangqin6}></Route>
                        <Route path="/qiuzhu/xiangqin" component={xiangqin7}></Route>
                        <Route path="/zhuduei/xiangqin" component={xiangqin8}></Route>
                        <Route path="/geren" component={geren}></Route>
                        <Route path="/fabu/fate" component={fabu}></Route>
                        <Route path="/guanliyuan/tezi" component={manager}></Route>
                        <Route path="/denlu2" component={manager}></Route>
                        <Route path="/xiugai" component={xiugai}></Route>
                        <Redirect to="/shuoye/xiaoyuan"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(Indexpage)//将Indexpage打包
ReactDOM.render(<Indexpage />, document.getElementById('root'));
//直接
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
