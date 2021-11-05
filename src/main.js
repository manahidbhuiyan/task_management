import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { SidebarPlugin } from 'bootstrap-vue'
import Vuex from "vuex";
// import VueApexCharts from 'vue-apexcharts'

Vue.use(Vuex)
import { storage } from './store/index'
const store = new Vuex.Store(storage)

import lodash from 'lodash'
import DatePicker from 'vue2-datepicker';


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-datepicker/index.css';
import 'vue-moment'
import '../src/scss/index.scss'
import Paginate from "vuejs-paginate";








// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Bootstrap vue sidebar
Vue.use(SidebarPlugin)
// Vue.use(Chart)
Vue.use(lodash)
//Date picker
Vue.use(DatePicker)
//Moment
Vue.use(require('vue-moment'));
//For Pie Chart
// Vue.use(VueApexCharts)
// Vue.component('apexchart', VueApexCharts)
Vue.component('paginate', Paginate);





library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
