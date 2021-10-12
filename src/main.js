import Vue from 'vue'
import App from './App.vue'
import Hero from 'vue-js-toggle-button'
import './assets/css/styles.css'

Vue.config.productionTip = false
Vue.use(Hero)


new Vue({
  render: h => h(App),
}).$mount('#app');
