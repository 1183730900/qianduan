import React from 'react';
import Header from './../Header/header';
import { Editor } from 'react-draft-wysiwyg';
import _isEmpty from 'lodash/isEmpty';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin6 extends React.Component {
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
        const { editorState,  } = this.state;
        return (
            <div className={HeaderCss.header}>
                <Header />
                <div className={HomePageCss.homePage}>
                    <div className={HomePageCss.bor1}>
                        <a href="/../" className={HomePageCss.return}>

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
                            1..1956年底毛泽东发表的《论十大关系》成为探索中国特色的社会主义建设道路的先声, 文章中提出我国社会主义建设必须围绕着一个基本方针, 就是( )

<p></p>A.调动国内外一切积极因素, 把中国建设成为社会主义强国

<p></p>B.“调整、巩固、充实、提高”的方针

<p></p>C.中国共产党和民主党派“长期共存、互相监督”

<p></p>D.正确区分和处理两类不同性质的矛盾

<p></p>2..科学发展观回答了（）的重大理论和实际问题.

<p></p>A.实现什么样的发展、怎样发展

<p></p>B.如何进行经济建设

<p></p>C.建设什么样的党、怎样建设党

<p></p>D.什么是社会主义、怎样建设社会主义

<p></p>3..建设马克思主义学习型政党的重点在于（）.

<p></p>A.建设学习型基层党组织

<p></p>B.建设学习型党员

<p></p>C.建设学习型干部队伍

<p></p>4..新中国从1953年开始进行的社会主义改造的实质是（）

<p></p>A.建立生产资料社会主义公有制

<p></p>B.消灭封建制度的残余成分

<p></p>C.在中国探索社会主义道路

<p></p>D.将单一的经济所有制发展为多种所有制
<p></p>5..下列说法中不准确的是：（）

<p></p>A.中国第一次以世界五大国身份参加日内瓦会议并在会上发挥了重要作用

<p></p>B.和平共处五项原则提出表明我国外交政策走向成熟

<p></p>C.新中国成立后, 我国就实行了不结盟的和平外交政策

<p></p>D.新中国成立即实行不结盟的和平外交政策

<p></p>6..在改革开放中, 经过三次思想解放, 我们先后冲破了“个人崇拜”、“计划经济崇拜”和“所有制崇拜”, 其中冲破“计划经济崇拜”的关键事件是（）.

<p></p>A.中共十五大

<p></p>B.中共十二大

<p></p>C.中共十三大

<p></p>D.中共十四大

<p></p>7..“十一五”期间, 也就是“第十一个五年规划”, 时间是从（）.

<p></p>A.2005年-2010年

<p></p>B.2006年-2010年

<p></p>C.2007年-2011年

<p></p>D.2006年-2011年</div>
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
