import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import StoryblokVue from "storyblok-vue";

Vue.config.productionTip = false;
Vue.use(StoryblokVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
