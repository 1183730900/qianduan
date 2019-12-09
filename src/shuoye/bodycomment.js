import React, {Component} from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState, convertToRaw, ContentState } from 'draft-js'

import { Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
export default class EditorTest extends Component {
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
	  
	  // json 格式
	  



	  self.setState({
		editorContent:editorContent,
	  })
	}

	return <div>
	  <Editor
		wrapperStyle={{
		  Height: 100,
		  border: '1px solid #FFFFFF',
		}}
		editorStyle={{
		  minHeight: 100,
		}}
		editorState={self.state.editorContent}
		onEditorStateChange={onEditorStateChange}
	  />
	</div>
  }
}