import Vue from 'vue'
import App from './App.vue'

// import VueRouter from "vue-router"
// import VueResource from 'vue-resource'

// import Demo from './demo/demo.vue'

// Vue.use(VueRouter)
// Vue.use(VueResource)

//  引入eleui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(ElementUI)

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/demo',
//       component: Demo
//     }
//   ]
// })

new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
