import React from 'react';
import Header from './../Header/header';
import { Editor } from 'react-draft-wysiwyg';
import _isEmpty from 'lodash/isEmpty';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin2 extends React.Component {
    state = {
        showRichText: false,
        editorContent: '',
        editorState: ''
    }
    handleClearContent = () => {  //清空文本
        this.setState({
            editorState: ''
        })
    }
    handleGetText = () => {    //获取文本内容
        this.setState({
            showRichText: true
        })
    }
    onEditorStateChange = (editorState) => {   //编辑器的状态
        this.setState({
            editorState
        })
    }
    onEditorChange = (editorContent) => {   //编辑器内容的状态
        this.setState({
            editorContent
        })
    }

    render() {
        const { editorState, } = this.state;
        return (
            <div className={HeaderCss.header}>
                <Header />
                <div className={HomePageCss.homePage}>
                    <div className={HomePageCss.bor1}>
                        <a href="/shuoye/xeushhu/k1" className={HomePageCss.return}>

                        </a>
                        <div className={HomePageCss.answer1}>
                            标题
                        </div>
                        <div className={HomePageCss.answer2}>
                            <div className={HomePageCss.picture}>

                            </div>
                            <a>姓名 时间</a>
                        </div>
                        <div className={HomePageCss.b3}>
                        <div className={HomePageCss.question1}>    
                                一．选择题（将答案代号填入括号内，每题3分，共30分）.
    
<p></p>1．下列各组函数中，是相同的函数的是（ ）.
                                
<p></p>（A ）()()2ln 2ln f x x g x x == 和 （B ）()||f x x = 和 ()2g x x =
                                
                                （C ）()f x x = 和 ()()2g x x = （D ）()||x
                                
                                f x x
                                
                                = 和 ()g x =1
<p></p>2．函数()()sin 420ln 10x x f x x a x ⎧+-≠⎪=+⎨⎪=⎩
                                
                                在0x =处连续，则a =（ ）.
                                
<p></p>（A ）0 （B ）14
                                
（C ）1 （D ）2 <p></p>3．曲线ln y x x =的平行于直线10x y -+=的切线方程为（ ）.
                                
<p></p>（A ）1y x =- （B ）(1)y x =-+ （C ）()()ln 11y x x =-- （D ）y x =
                                
<p></p>4．设函数()||f x x =，则函数在点0x =处（ ）.
                                
<p></p>（A ）连续且可导 （B ）连续且可微 （C ）连续不可导 （D ）不连续不可微
                                
<p></p>5．点0x =是函数4y x =的（ ）.
                                
<p></p>（A ）驻点但非极值点 （B ）拐点 （C ）驻点且是拐点 （D ）驻点且是极值点
                                
<p></p>6．曲线1||
                                
y x =的渐近线情况是（ ）. <p></p>（A ）只有水平渐近线 （B ）只有垂直渐近线 （C ）既有水平渐近线又有垂直渐近线
                                
                                （D ）既无水平渐近线又无垂直渐近线
                                </div>
                    </div>
                        </div>
                        <div className={HomePageCss.bor2}>
                            <div className={HomePageCss.picture}></div>
                            <a className={HomePageCss.fix}>姓名 时间</a>
                        </div>
                        <div className={HomePageCss.bor3}>
                            <div className={HomePageCss.b3}>
                                <a className={HomePageCss.question1}>I pay for the 4Mb/sec down, 512 Kb/sec up service from O2, and haven't had any problems. In fact, it's relatively quick, and stable. It's not perfect, but I really don't have issues, as long as I keep track of what I'm doing on it. I max out at about 3 Mb/sec down, and 350 Kb/sec up. Probably because of a noisy telephone line, not because I'm being throttled. When my uploads go over 25 KB/sec (note, bytes, not bits), my download speed suffers. This is expected, as downloads require upload bandwidth as well.</a>
                            </div>
                        </div><div className={HomePageCss.bor2}>
                            <div className={HomePageCss.picture}></div>
                            <a className={HomePageCss.fix}>姓名 时间</a>
                        </div>
                        <div className={HomePageCss.bor3}>
                            <div className={HomePageCss.b3}>
                                <a className={HomePageCss.question1}>I pay for the 4Mb/sec down, 512 Kb/sec up service from O2, and haven't had any problems. In fact, it's relatively quick, and stable. It's not perfect, but I really don't have issues, as long as I keep track of what I'm doing on it. I max out at about 3 Mb/sec down, and 350 Kb/sec up. Probably because of a noisy telephone line, not because I'm being throttled. When my uploads go over 25 KB/sec (note, bytes, not bits), my download speed suffers. This is expected, as downloads require upload bandwidth as well.</a>
                            </div>
                        </div><div className={HomePageCss.bor2}>
                            <div className={HomePageCss.picture}></div>
                            <a className={HomePageCss.fix}>姓名 时间</a>
                        </div>
                        <div className={HomePageCss.bor3}>
                            <div className={HomePageCss.b3}>
                                <a className={HomePageCss.question1}>I pay for the 4Mb/sec down, 512 Kb/sec up service from O2, and haven't had any problems. In fact, it's relatively quick, and stable. It's not perfect, but I really don't have issues, as long as I keep track of what I'm doing on it. I max out at about 3 Mb/sec down, and 350 Kb/sec up. Probably because of a noisy telephone line, not because I'm being throttled. When my uploads go over 25 KB/sec (note, bytes, not bits), my download speed suffers. This is expected, as downloads require upload bandwidth as well.</a>
                            </div>
                        </div>
                        <div className={HomePageCss.bor5}>
                            <Editor
                                editorState={editorState}
                                onEditorStateChange={this.onEditorStateChange}
                            />

                            {/* <button className={HomePageCss.fix2}>回复</button> */}
                        </div>


                    </div>
                </div>

                )
            }
        }
    
