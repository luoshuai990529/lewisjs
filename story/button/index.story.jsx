import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Button from '../../packages/@lewisjs/button/build/index';
import '../../packages/@lewisjs/button/build/index.css';
import './story.css';

export default {
  title: '基础组件.Button 按钮', //侧边栏标题
  component: Button,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
    ],
  },
};

export const story1 = () => {
  const name = text('按钮文字', '点击按钮');
  return (
    <React.Fragment>
    <div className="button-demo-field">
      <Button className="test-btn" onClick={() => { console.log('你点击了按钮'); }}>{name}</Button>
    </div>
    <div className="button-demo-field">
      <Button className="test-btn" disabled={true} onClick={() => { console.log('你点击了按钮'); }}>不可点击</Button>
    </div>
    <div className="button-demo-field">
      <Button className="test-btn" type={'primary'} disabled={true} onClick={() => { console.log('你点击了按钮primary'); }}>primary按钮</Button>
    </div>
    <div className="button-demo-field">
      <Button className="test-btn" type={'warning'} disabled={true} onClick={() => { console.log('你点击了按钮warning'); }}>warning按钮</Button>
    </div>
    </React.Fragment>
  )
};
story1.story = {
  name: '按钮组件',
};
