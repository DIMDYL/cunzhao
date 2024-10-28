import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 在main.js中添加
const preventReClick = {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 1000)
      }
    })
  },
  // 如果指令的元素所在的模板被重新渲染导致元素被卸载时……
  unmounted(el) {
    // 清除事件监听器
    el.removeEventListener('click', el._clickEventListener)
    // 注意：如果你需要在 mounted 中动态添加事件监听器并保存到一个变量中
    // 你需要在 mounted 钩子中创建它，并在这里移除它
  }
}

app.directive('preventReClick', preventReClick)
app.mount('#app')
