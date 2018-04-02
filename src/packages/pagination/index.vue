<template>
    <div class="ls-pagination">
        <el-pagination small :current-page="page" :page-sizes="pageSizes" :page-size="pageSize" :layout="layouts" :total="count" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
    </div>

</template>
<script>
export default {
    methods: {
        handleSizeChange(val) {
            this.$emit('update', ['page_size', val])
        },
        handleCurrentChange(val) {
            this.$emit('update', ['page', val])
        }
    },
    mounted() {},
    props: {
        count: {
            type: Number,
            required: true,
            default: 0
        },
        page: {
            type: Number,
            required: true,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 30, 50, 100]
            }
        },
        layouts: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper'
        }
    },
    data() {
        return {}
    },
    watch: {}
}
</script>
