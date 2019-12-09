import React from 'react';
import Header from './../Header/header';
import { Editor } from 'react-draft-wysiwyg';
import _isEmpty from 'lodash/isEmpty';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin7 extends React.Component {
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
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            <p></p>这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息这是求助的信息
                            
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
