import chart from './packages/chart'
import pagination from './packages/pagination'
import table from './packages/table'
import button from './packages/button'

const components = {
    chart,
    pagination,
    table,
    button
}

export default {
    install(Vue, options = {}) {
        const { prefix = 'l' } = options
        Object.entries(components).forEach(([name, component]) => {
            Vue.component(`${prefix}-${name}`, component)
        })
    }
}
