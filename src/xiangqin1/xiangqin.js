import Header from './../Header/header';
import React, { Component } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState, convertToRaw, ContentState } from 'draft-js'

import { Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import EditorTest from '../shuoye/bodycomment';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          editorContent:'',
        }
      }
    
    
      componentDidMount() {
        // 回显
        const contentBlock = htmlToDraft("<p>12345</p>")
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
          const editorState = EditorState.createWithContent(contentState);
          this.setState({ editorContent:editorState })
        }
      }
    
    
      // 当组件传入的 props 发生变化时调用
      componentWillReceiveProps(nextProps) {}
    
    
    
      render() {
        const self=this
    
        const onEditorStateChange = (editorContent) => {
          // 保存时可根据选择将state里的editorContent 转换格式保存到数据库
          // https://jpuri.github.io/react-draft-wysiwyg/#/docs
    
          // html格式
          console.log(draftToHtml(convertToRaw(editorContent.getCurrentContent())))
          // json 格式
          console.log(JSON.stringify(convertToRaw(editorContent.getCurrentContent())))
    
    
    
          self.setState({
            editorContent:editorContent,
          })
        }

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
                                习近平在主持学习时发表了讲话。他首先表示，再过几天，就是我们党成立98周年了，我代表党中央，向全国广大党员致以节日的祝贺！

    　　                        <p>习近平指出，安排这次中央政治局集体学习，目的是总结党的历史经验，结合新时代新要求，推动全党围绕守初心、担使命，找差距、抓落实切实搞好主题教育。这也是中央政治局带头开展主题教育的一项重要安排。中央政治局的同志要作好示范，在不忘初心、牢记使命上为全党作表率。</p>

                                <p>习近平强调，我们党是用马克思主义武装起来的政党，始终把为中国人民谋幸福、为中华民族谋复兴作为自己的初心和使命，并一以贯之体现到党的全部奋斗之中。回顾党的历史，为什么我们党在那么弱小的情况下能够逐步发展壮大起来，在腥风血雨中能够一次次绝境重生，在攻坚克难中能够不断从胜利走向胜利，根本原因就在于不管是处于顺境还是逆境，我们党始终坚守为中国人民谋幸福、为中华民族谋复兴这个初心和使命，义无反顾向着这个目标前进，从而赢得了人民衷心拥护和坚定支持。中国特色社会主义进入新时代，我们比历史上任何时期都更接近、更有信心和能力实现中华民族伟大复兴。我们千万不能在一片喝彩声、赞扬声中丧失革命精神和斗志，逐渐陷入安于现状、不思进取、贪图享乐的状态，而是要牢记船到中流浪更急、人到半山路更陡，把不忘初心、牢记使命作为加强党的建设的永恒课题，作为全体党员、干部的终身课题。</p></div>
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
                        <EditorTest/>
                    </div>


                </div>
            </div>

        )
    }
}
