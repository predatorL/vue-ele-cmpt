import Vue from 'vue'
import App from './App'
import eleUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import eleCmpt from './index'
import './style/index.less'

Vue.use(eleUI)
Vue.use(eleCmpt)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
