# pagination

封装 el-pagination 组件，通过配置项使用 pagination

#### Features

* 简化分页配置
* 封装操作统一触发事件

###### Vue Compatibility

* vue2.0 以上
* element-ui2.0 以上

Use the component, demo

```js
// prefix: 组件前缀　例如 l-pagination
<template>
    <l-pagination @change="pageChange"　:count="pageInfo.count" :page="pageInfo.page"/>
</template>
<script>
    export default {
        methods: {
            // changeField: pageInfo的变更的字段　val: 变更值
            pageChange([changeField, val]) {

            },
        },
        data() {
            return {
                pageInfo: {
                    count: 0,
                    page: 1
                }
            }
        }
    }
</script>
```
