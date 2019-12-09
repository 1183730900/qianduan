import React from 'react';
import Header from './../Header/header';
import { Editor } from 'react-draft-wysiwyg';
import _isEmpty from 'lodash/isEmpty';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin4 extends React.Component {
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
                            <p></p>大学物理（二）练习题
    
    <p></p>第八章（一） 真空中的恒定磁场
                                    
    <p></p>1．某电子以速率410/v m s =在磁场中运动，当它沿x 轴正向通过空间A 点时，受到的力沿y 轴正向，力的大小为178.0110F N -=⨯；当电子沿y 轴正向再次以同一速率通过A 点时，所受的力沿z 轴的分量161.3910z F N -=⨯。求A 点磁感应强度的大小和方向。
                                    
    <p></p>2．真空中有两根相互平行的无限长直导线1L 和2L ，相距10.0cm ，通有相反方向的电流，
                                    
    <p></p>120I A =，210I A =。求在两导线所在平面内、且与导线2L 相距
                                    
    <p></p>5.0cm 的两点的磁感应强度大小。
                                    
    <p></p>3．无限长直导线折成V 形，顶角为θ，置于x y -平面内，
                                    
    <p></p>其一边与x 轴重合，如图所示，通过导线的电流为I 。求y 轴上点(0,)P a 处的磁感应强度。
                                    
    <p></p>4．如图所示，用两根相互平行的半无限长直导线1
                                    
    <p></p>L 和2L 把半径为R 的均匀导体圆环联到电源上，已知通过
                                    
    <p></p>直导线的电流为I 。求圆环中心o 点的磁感应强度。
                                    
    <p></p>5．将通有电流I 的长导线中部弯成半圆形，如图所
                                    
    <p></p>示。求圆心o 点的磁感应强度。
                                    
    <p></p>6．将同样的几根导线焊成立方体，并将其对顶角A 、B
                                    
    <p></p>9．在匀强磁场中，取一半径为R 的圆，圆面的法线n 与磁感应强度B 成o 60角，如图所示，则通过以该圆周为边线的任意曲面S 的磁通量φ= 。
                                    
    <p></p>10．在真空中，有两个半径相同的圆形回路1L 、2L ，圆周内都有稳恒电流1I 、2I ，其分布相同。在图(b)中，回路2L 外还有稳恒电流3I ，1P 、2P 为两圆形回路上的对应点，如图所示，则下列表达式正确的是
                                    
    <p></p>(A) 1
                                    
    <p></p>2
                                    
    <p></p>L L B dl B dl ⋅=⋅⎰⎰，1
                                    
    <p></p>2P
                                    
    <p></p>P B B =； (B) 1
                                    
    <p></p>2
                                    
    <p></p>L L B dl B dl ⋅≠⋅⎰⎰，1
                                    
    <p></p>2P
                                    
    <p></p>P B B =；
                                    
    <p></p>(C) 12
                                    
    <p></p>L L
                                    
    <p></p>B dl B dl ⋅=⋅⎰⎰，12P P B B ≠；
                                    
    <p></p>(D)
                                    
    <p></p>1
                                    
    <p></p>2
                                    
    <p></p>L L B dl B dl ⋅≠⋅⎰⎰，1
                                    
    <p></p>2P
                                    
    <p></p>P B B ≠. [ ]
                                    
    <p></p>                        <p></p>。</div>
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
