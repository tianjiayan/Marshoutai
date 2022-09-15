import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon } from 'vant';

Vue.use(Icon);

import "lib-flexible"
// import vant from 'vant';
// import 'vant/lib/index.css';

Vue.directive("drag",{
  //只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作
       bind:function(){ },
       inserted: function(el,binding){
         const param = binding.value;
         console.log(param);
         console.log(el);
         el.onmousedown = function(e) {
           const dx = e.clientX - el.offsetLeft;
           const dy = e.clientY - el.offsetTop;
           el.onmousemove = function(e) {
             e.stopPropagation();
             const left = e.clientX - dx;
             const top = e.clientY - dy;
             el.style.left = left + 'px';
             el.style.top = top + 'px'
           }
           document.mouseup = function(e) {
             e.onmousemove = null;
             document.onmouseup = null;
           }
           return false
         }
       },
       update:function() {
   //被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新
       },
       componentUpdated: function() {
         //被绑定元素所在模板完成一次更新周期时调用
       },
       unbind: function() {
         //只调用一次， 指令与元素解绑时调用
       }
     })
   





Vue.config.productionTip = false

// Vue.use(vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
