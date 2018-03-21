# vue-ele-cmpt
vue-element-ui-conponent 基于element-ui封装的组件　　　　
(说明抄vue-select)

#### Features
- el-table封装(简化column，简化事件，简化过滤器，使用参数配置)
- el-button封装(封装配置，添加延时禁用功能)
- echarts封装(封装配置，封装初始化，封装自动resize, 封装自动销毁)
- el-pagination封装(封装配置， 简化参数, 简化事件)

## Install

###### Vue Compatibility
-  vue2.0以上
-  element-ui2.0以上

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
cmpt.install(Vue, {prefix: 'l'})
```

## Basic Usage

- table[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/table/README.md)
- button[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/button/README.md)
- echarts[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/echarts/README.md)
- pagination封装[说明文档](https://github.com/predatorL/vue-ele-cmpt/blob/master/packages/pagination/README.md)


#### Setting Options
具体的看里面的文档吧



