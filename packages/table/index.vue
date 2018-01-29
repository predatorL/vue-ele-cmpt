<template>
    <el-table :data="tableData" style="width: 100%">
        <template v-for="(item, index) in tableProps" >
            <el-table-column :key="index" v-if="item.actions" :label="item.label" :width="item.width">
                <template scope="scope">
                    <el-button :title="action.title" v-for="(action, btnIndex) in item.actions"
                        :key="btnIndex" size="small" type="primary"
                        @click="onClick(action.method, scope.row, scope)"
                        :icon="action.icon">
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column :key="index" v-else :label="item.label" :width="item.width">
                <template scope="scope">
                    <span :title="scope.row[item.prop]">
                        {{item.filter ? item.filter(scope.row[item.prop], scope.row, scope) : scope.row[item.prop]}}
                    </span>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>
<script>
export default {
    methods: {
        onClick(...params) {
            this.$emit('trigger', ...params)
        }
    },
    mounted() {},
    props: {
        tableData: {
            type: Array,
            required: true,
            default: []
        },
        tableProps: {
            type: Array,
            required: true,
            default: []
        }
    },
    data() {
        return {}
    }
}
</script>
