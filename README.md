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
import cmptInstall from 'vue-ele-cmpt'
// prefix: 组件前缀　例如 l-table 
cmptInstall(Vue, {prefix: 'l'})
```

## Basic Usage

#### Syncing a Selected Value

The most common use case for `vue-select` is to have the chosen value synced with a parent component. `vue-select` takes advantage of the `v-model` syntax to sync values with a parent.

```html
<v-select v-model="selected"></v-select>
```
```js
new Vue({
  data: {
    selected: null
  }
})
```

#### Setting Options

`vue-select` accepts arrays of strings and objects to use as options through the `options` prop.

```html
<v-select :options="['foo','bar']"></v-select>
```

When provided an array of objects, `vue-select` will display a single value of the object. By default, `vue-select` will look for a key named 'label' on the object to use as display text.

```html
<v-select :options="[{label: 'foo', value: 'Foo'}]"></v-select>
```

### For more information, please visit the [vue-select documentation.](https://sagalbot.github.io/vue-select)