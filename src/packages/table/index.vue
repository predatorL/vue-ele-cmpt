<template>
    <el-table :data="tableData" style="width: 100%" @selection-change="onSelect">
        <el-table-column v-if="selection" type="selection" width="55">
        </el-table-column>
        <template v-for="(item, index) in tableProps" >
            <el-table-column :key="index" v-if="item.actions" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                    <el-button :title="action.title" v-for="(action, btnIndex) in item.actions"
                        :key="btnIndex" size="small" type="primary"
                        @click="onClick(action.method, scope.row, scope)"
                        :icon="action.icon" :class="action.text ? '' : 'no-text'">
                        {{action.text}}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column :key="index" v-else :label="item.label" :width="item.width">
                <template slot-scope="scope">
                    <span :title="scope.row[item.prop]">
                        {{item.filter ? item.filter(scope.row[item.prop], scope.row, scope) : scope.row[item.prop]}}
                    </span>
                </template>
            </el-table-column>
        </template>
        <slot name="action" />
    </el-table>
</template>
<script>
export default {
    methods: {
        onClick(...params) {
            this.$emit('action-trigger', ...params)
        },
        onSelect(...params) {
            this.$emit('selection-change', ...params)
        }
    },
    mounted() {},
    props: {
        selection: Boolean,
        tableData: {
            type: Array,
            required: true,
            default() {
                return []
            }
        },
        tableProps: {
            type: Array,
            required: true,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    }
}
</script>
