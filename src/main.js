// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/app'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/bpo', component: App },
    { path: '/times',
      component: function (resolve) {
        require(['./components/times'], resolve)
      },
      alias: '/bpo/times'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
