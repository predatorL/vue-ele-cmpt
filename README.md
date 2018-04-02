# vue-ele-cmpt

vue-element-ui-conponent 基于 element-ui 封装的组件　　　　 (说明抄 vue-select)

#### Features

*   el-table 封装(简化 column，简化事件，简化过滤器，使用参数配置)
*   el-button 封装(封装配置，添加延时禁用功能)
*   echarts 封装(封装配置，封装初始化，封装自动 resize, 封装自动销毁)
*   el-pagination 封装(封装配置， 简化参数, 简化事件)

## Install

###### Vue Compatibility

*   vue2.0 以上
*   element-ui2.0 以上

#### NPM

暂不支持

```bash
$ npm install git+https://github.com/predatorL/vue-ele-cmpt.git
```

Register the component

```js
import Vue from 'vue'
import cmpt from 'vue-ele-cmpt'
// prefix: 组件前缀　例如 l-table
cmpt.install(Vue, { prefix: 'l' })
```

## Basic Usage

*   table[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/table/README.md)
*   button[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/button/README.md)
*   echarts[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/echarts/README.md)
*   pagination 封
    装[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/pagination/README.md)

#### Setting Options

具体的看里面的文档吧

## todo list
*   [] 添加chart的README
*   [x] table添加多选功能
*   [] table添加样式属性应用
*   [] chart添加图表真实DOM的获取方式
*   [] table添加图表真实DOM的获取方式
*   [] table需要添加重新挂载机制，每当props变化时，更新表格显示，　不然会导致props缓存

### 备忘录
* []　真是dom的那个，可以试试通过$refs的一层层查找试试
* []　table重新挂载机制那个，可以通过v-if触发下试试
* [x] 自己编译样式的时候记得全局安装less
