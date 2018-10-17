import './assets/css/reset.css'
import './assets/css/style.css'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueSocketio from 'vue-socket.io';
import VueToastr from '@deveodk/vue-toastr'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee, faBars, faCog, faBell, faAngleDown, faEllipsisV, faSignOutAlt, faSignInAlt, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faBars, faCog, faBell, faAngleDown, faEllipsisV, faSignOutAlt, faSignInAlt, faSortUp, faSortDown )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info'
})
Vue.use(VueSocketio, 'localhost:9999');

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
