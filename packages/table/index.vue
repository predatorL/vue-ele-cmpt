<template>
    <el-table :data="tableData" style="width: 100%">
        <template v-for="(item, index) in tableProps" :prop="item.prop" :label="item.label" :width="item.width">
            <el-table-column :key="index" v-if="item.filter" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                    {{item.filter(scope.row[item.prop])}}
                </template>
            </el-table-column>
            <el-table-column :key="index" v-else-if="item.actions" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                    <el-button v-for="(action, btnIndex) in item.actions" :key="btnIndex" size="small" type="primary" @click="onClick(action.method, scope.row, scope)" icon="el-icon-edit">{{action.text}}</el-button>
                </template>
            </el-table-column>
            <el-table-column :key="index" v-else :prop="item.prop" :label="item.label" :width="item.width">
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
