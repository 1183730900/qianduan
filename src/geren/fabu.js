import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import fate from './guanli/fate';
import guanfa from './guanli/guanfa';
import guanhuei from './guanli/guanhuei';
var FaBuCss = require('./fabu.css')
export default class fabu extends React.Component {
    
    render() {
        return (
            <div className={FaBuCss.a1}>
               
                <div className={FaBuCss.a2}>
                    <BrowserRouter basename='fabu'>
                        <div className={FaBuCss.b1}>
                            <div className={FaBuCss.b2}>
                                <a href="/geren" className={FaBuCss.b5}> 返回个人中心,</a>
                                <Link to='/fate' className={FaBuCss.c1}>发布帖子</Link>
                                <Link to='/guanlifabu' className={FaBuCss.c1}>管理发布</Link>
                                <Link to='/guanlihueifu' className={FaBuCss.c1}>管理回复</Link>
                            </div>
                        </div>
                        <div className={FaBuCss.b3}>
                            <Switch>
                                <Route path="/fate" component={fate} ></Route>
                                <Route path="/guanlifabu" component={guanfa}></Route>
                                <Route path="/guanlihueifu" component={guanhuei}></Route>

                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>


            </div>

        )
    }
}