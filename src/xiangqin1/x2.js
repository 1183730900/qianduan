import React from 'react';
import Header from './../Header/header';
import { Editor } from 'react-draft-wysiwyg';
import _isEmpty from 'lodash/isEmpty';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
var HeaderCss = require('./../Header/header.css')
var HomePageCss = require('./homePage.css')
export default class xiangqin3 extends React.Component {
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
                            <p></p>Passage 1

<p></p>Many people who work in London prefer to live outside it, and to go in to their offices or schools every day by train, car or bus, even though this means they have to get up early in the morning and reach home late in the evening.

<p></p>One advantage of living outside London is that houses are cheaper. Even a small flat in London without a garden costs quite a lot to rent. With the same money, one can get a little house in the country with a garden of one‘s own.

<p></p>Then, in the country one can really get away from the noise and hurry of busy working lives. Even though one has to get up earlier and spend more time in trains or buses, one can sleep better at night and during weekends and on summer evenings, one can enjoy the fresh, clean air of the countr y. If one likes garden, one can spend one‘s free time digging, planting, watering and doing the hundred and one other jobs which are needed in a garden. Then, when the flowers and vegetables come up, one has got the reward together with those who have shared the secret of Nature.

<p></p>Some people, however, take no interest in country things: for them, happiness lies in the town, with its cinemas and theatres, beautiful shops and busy streets, dance-halls and restaurants. Such people would feel that their life was not worth living if they had to live it outside London. An occasional walk in one of the parks and a fortnight‘s (two weeks) visit to the sea every summer is all the country they want: the rest they are quite prepared to leave to those who are glad to get away from London every night.

<p></p>1. Which of the following statements is NOT true?

<p></p>A. People who love Nature prefer to live outside the city.

<p></p>B. All the people who work in London prefer to live in the country.

<p></p>C. Some people enjoying city life prefer to work and live inside London.

<p></p>D. Many nature lovers, though working in London, prefer to live outside.

<p></p>2. With the same money needed for ________, one can buy a little house with a garden in the country.

<p></p>A. getting a small flat with a garden

<p></p>B. having a small flat with a garden

<p></p>C. renting a small flat without a garden

<p></p>D. buying a small flat without a garden

<p></p>3. When the garden is in blossom, the one ________ has been rewarded.

<p></p>A. living in the country

<p></p>B. having spent time working in the garden.

<p></p>C. having a garden of his own.

<p></p>D. having been digging, planting and watering

<p></p>4. People who think happiness lies in the city life would feel that ________ if they had to live outside London.

<p></p>A. their life was meaningless

<p></p>B. their life was invaluable

<p></p>C. they didn‘t deserve a happy life

<p></p>D. they were not worthy of their happy life

<p></p>5. The underlined phrase ―get away from‖ in the 3rd paragraph refers to ________.

<p></p>A. deal with

<p></p>B. do away with

<p></p>C. escape from

<p></p>D. prevent from</div>
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
