<template>
    <div class="chart-wrapper" :style="style">
        <div class="no-found" v-if="noDataVisible">
            <span class="text">{{noData}}</span>
        </div>
        <div ref="chart" class="chart-dom" :style="style"></div>
    </div>
</template>
<script>
import './style.less'
import echarts from 'echarts'
export default {
    methods: {
        resizeChart() {
            // 如果不销毁 就会频繁出发已有的chart 这样会持续占用内存 导致卡顿
            this.echartInstance.resize()
        }
    },
    mounted() {
        const { options, height, width } = this
        this.style = {
            height,
            width
        }
        this.$nextTick(() => {
            let echartInstance = echarts.init(this.$refs.chart)
            this.echartInstance = echartInstance
            echartInstance.setOption(options)
            window.addEventListener('resize', this.resizeChart)
        })
    },
    // 移除resize监听 销毁chart实例
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeChart)
        this.echartInstance.dispose()
    },
    watch: {
        options(val, oldVal) {
            let { series = [] } = val
            const count = series.reduce((curr, next) => {
                return curr + next.data.length
            }, 0)
            this.noDataVisible = count === 0
            // 防止series为空时数据出现缓存, 利用旧数据将现有清空
            if (series.length === 0) {
                val.series = oldVal.series.map(item => {
                    return {
                        data: []
                    }
                })
            }
            this.echartInstance.setOption(val)
        }
    },
    props: {
        // 初始化参数 变更数据 data 发生变化会触发chart更新
        options: {
            type: Object
        },
        height: {
            type: String,
            default: '200px'
        },
        width: {
            type: String,
            default: '100%'
        },
        noData: {
            type: String,
            default: '暂无数据'
        }
    },
    data() {
        return {
            style: {},
            noDataVisible: false,
            echartInstance: null
        }
    }
}
</script>
