import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
<%_ if (options.vueRouter){ _%>
  import router from './router'
<%_ } _%>
<%_ if (options.vuex){ _%>
  import store from './store'
<%_ } _%>

new Vue({
  <%_ if (options.vueRouter){ _%>
  router,
  <%_ } _%>
  <%_ if (options.vuex){ _%>
  store,
  <%_ } _%> 
  render: function (h) {
    return h(App)
  },
}).$mount('#app')