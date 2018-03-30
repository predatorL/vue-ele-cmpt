# table

封装 el-table 组件，通过配置项使用 table

#### Features

*   简化简单列表配置
*   封装操作统一触发事件
*   局部过滤器

###### Vue Compatibility

*   vue2.0 以上
*   element-ui2.0 以上

Use the component, demo

```js
// prefix: 组件前缀　例如 l-table
<template>
    <div class="demo-container">
        <!-- 普通版, 按钮通过props定义，时间通过action-trigger发送 -->
        <l-table @action-trigger="onTrigger" :table-data="table.data" :table-props="table.props" />
        <!-- 开启多选（添加selection即可），选择变更后会通过selection-change事件被触发，通知父组件 -->
        <l-table @action-trigger="onTrigger" selection　＠selection-change＝"onSelect"　:table-data="table.data" :table-props="table.props" />
        <!-- 自定义最后一列 -->
        <l-table @action-trigger="onTrigger" :table-data="table.data" :table-props="table.props" />
    </div>
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

### Table Attributes

| 参数           | 说明                         |  类型   | 可选值 | 默认值 |
| :------------- | :--------------------------- | :-----: | :----: | :----: |
| 　 selection   | 是否开启多选择               | boolean |   —    | false  |
| 　 table-data  | 表格显示的数据               |  array  |   —    |   —    |
| 　 table-props | 按数组顺序对应列内容的字段名 |  array  |   —    |   —    |

### Table Events

| 事件名              | 说明                                                  |        参数        |
| :------------------ | :---------------------------------------------------- | :----------------: |
| 　 action-trigger   | 在 props 中配置的 action 类型按钮被点击，会触发该事件 | method, row, scope |
| 　 selection-change | 开启多选择后，当选择项发生变化时                      |     selection      |

### Table Slot

| 插槽名    | 说明                                                                | 参数 |
| :-------- | :------------------------------------------------------------------ | ---- |
| 　 action | 如果 action 按钮无法满足需求,可以通过具名插槽自定义最后一列操作按钮 | —    |
