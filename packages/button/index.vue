<template>
    <el-button :size="size" :type="type" :disabled="isDisabled" :icon="icon" @click="emitClick"></el-button>
</template>
<script>
export default {
    methods: {
        emitClick() {
            this.isDisabled = true
            this.$emit('click')
            setTimeout(_ => {
                this.isDisabled = false
            }, this.seconds * 1000)
        }
    },
    mounted() {},
    // 移除delay
    beforeDestroy() {},
    watch: {},
    props: {
        size: String,
        type: String,
        icon: String,
        seconds: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            isDisabled: false
        }
    }
}
</script>
