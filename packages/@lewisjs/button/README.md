# `@lewisjs/button`

> 基础按钮组件

## Usage

```
import Button from '@lewisjs/button';
import '@lewisjs/button/build/index.css';

<Button className="test-btn" onClick={() => { alert('创建成功'); }}>按钮文字</Button>
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| disabled | 是否可以点击 | boolean | 是 | false |
| type | 按钮类型 | string | 是 | 无 |
| onClick | 点击回调 | function | 否 | 无 |

