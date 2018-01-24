# table

封装 el-table 组件，通过配置项使用 table

#### Features

* 简化简单列表配置
* 封装操作统一触发事件
* 局部过滤器

###### Vue Compatibility

* vue2.0 以上
* element-ui2.0 以上

Use the component, demo

```js
// prefix: 组件前缀　例如 l-table
<template>
    <l-table @trigger="onTrigger"　:tableData="table.data" :tableProps="table.props"/>
</template>
<script>
    export default {
        methods: {
            // method: props中method字段定义的字段回传过来; row:当前行数据; scope:当前行的scope;
            onTrigger(method, row, scope) {
                // TODO: 除了简单的调用方法，还可以在这里最其他的判断，拓展
                this[method](row, scope)
            },
            toDoSth(row, scope) {
                console.log(row)
            }
        },
        data() {
            return {
                table: {
                    data: [],
                    props: [
                        {
                            prop: 'field_common',
                            label: '普通字段'
                        },
                        {
                            prop: 'field_state',
                            label: '状态',
                            // 用来做过滤的方法
                            filter(val, row, scope) {
                                return val ? '正常' : '异常'
                            }
                        },
                        {
                            label: '操作',
                            actions: [
                                {
                                    // 这定义的方法(或者参数之类的)会被@trigger触发emit到父组件
                                    method: 'toDoSth',
                                    // 暂时只支持icon类按钮
                                    icon: 'more',
                                    // 绑定到button上的提示
                                    title: 'title提示'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
```
