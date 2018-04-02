<template>
  <div id="app">
    <el-row>
      <el-col :span="20">
        <l-table @action-trigger="onTrigger" :table-data="table.data" :table-props="table.props" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        onTrigger(method, row, scope) {
            this[method](row, scope)
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
                        filter(val, row, scope) {
                            return val ? '正常' : '异常'
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
