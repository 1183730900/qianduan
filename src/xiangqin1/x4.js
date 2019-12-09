import React from 'react';
import Header from './../Header/header';
import { Editor } from 'react-draft-wysiwyg';
import _isEmpty from 'lodash/isEmpty';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin5 extends React.Component {
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
                            A*是Aの伴随矩阵，则A *中位于（1，2）の元素是（）

<p></p>A. –6

<p></p>B. 6

<p></p>C. 2

<p></p>D. –2

<p></p>4.设A是方阵，如有矩阵关系式AB=AC，则必有（）

<p></p>A. A =0

<p></p>B. B≠C时A=0

<p></p>C. A≠0时B=C

<p></p>D. |A|≠0时B=C

<p></p>5.已知3×4矩阵Aの行向量组线性无关，则秩（A T）等于（）

<p></p>A. 1

<p></p>B. 2

<p></p>C. 3

<p></p>D. 4

<p></p>6.设两个向量组α1，α2，…，αs和β1，β2，…，βs均线性相关，则（）

<p></p>A.有不全为0の数λ1，λ2，…，λs使λ1α1+λ2α2+…+λsαs=0和λ1β1+λ2β2+…λsβs=0

<p></p>B.有不全为0の数λ1，λ2，…，λs使λ1（α1+β1）+λ2（α2+β2）+…+λs（αs+βs）=0

<p></p>C.有不全为0の数λ1，λ2，…，λs使λ1（α1-β1）+λ2（α2-β2）+…+λs（αs-βs）=0

<p></p>D.有不全为0の数λ1，λ2，…，λs和不全为0の数μ1，μ2，…，μs使λ1α1+λ2α2+…+λ

<p></p>s

<p></p>αs=0和μ1β1+μ2β2+…+μsβs=0

<p></p>7.设矩阵Aの秩为r，则A中（）

<p></p>A.所有r-1阶子式都不为0

<p></p>B.所有r-1阶子式全为0

<p></p>C.至少有一个r阶子式不等于0

<p></p>D.所有r阶子式都不为0

<p></p>8.设Ax=b是一非齐次线性方程组，η1，η2是其任意2个解，则下列结论错误の是（）

<p></p>A.η1+η2是Ax=0の一个解

<p></p>B.1

<p></p>2

<p></p>η1+

<p></p>1

<p></p>2

<p></p>η2是Ax=bの一个解

<p></p>C.η1-η2是Ax=0の一个解

<p></p>D.2η1-η2是Ax=bの一个解</div>
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
