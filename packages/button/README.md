# button

封装 el-button 组件，通过配置项使用 button

#### Features

* 添加延时禁用功能

###### Vue Compatibility

* vue2.0 以上
* element-ui2.0 以上

Use the component, demo

```js
// prefix: 组件前缀　例如 l-button
<template>
    <l-button @click="toDoSth"　:seconds="3"/>
</template>
<script>
    export default {
        methods: {
            // 执行结果
            toDoSth() {

            },
        },
        data() {
            return {

            }
        }
    }
</script>
```
