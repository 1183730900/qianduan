import React from 'react';
import EditorTest from '../../shuoye/bodycomment';
import { Cascader } from 'antd';
var FaTeCss = require('./fate.css')
const options = [
    {
        value: '校园论坛',
        label: '校园论坛',
    },
    {
        value: '学术交流',
        label: '学术交流',
        children: [
            {
                value: '高数',
                label: '高数',
            },{
                value: '英语',
                label: '英语',
            },{
                value: '线性代数',
                label: '线性代数',
            },{
                value: '形势与政策',
                label: '形势与政策',
            },{
                value: '物理',
                label: '物理',
            }
        ],
    }, {
        value: '互助平台',
        label: '互助平台',
        children: [
            {
                value: '求助',
                label: '求助',
            },{
                value: '组队',
                label: '组队',
            }
        ],
    },
];
export default class fate extends React.Component {
    render() {
        return (
            <div className={FaTeCss.a1}>

                <div className={FaTeCss.b1}>
                    <div className={FaTeCss.b3}>
                        请选择区域:
                    </div>
                    <Cascader options={options} onChange={onChange} placeholder="Please select" />
                </div>
                <div className={FaTeCss.b2}>
                    <div className={FaTeCss.c2}>
                        <EditorTest />
                    </div>
                    <button className={FaTeCss.c3}>发布</button>
                </div>
            </div>
        )
    }
}
function onChange(value) {
    console.log(value);
}