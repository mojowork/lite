# 快速上手

----

### 引入 lite
>lite很轻，你可以整个引入，当然也支持按需引入。

#### 整体引入
在 main.js 中写入以下内容：
```js
import Vue from 'vue'
import App from './App.vue'
import lite from 'lite'

Vue.use(lite)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
#### 按需引入
同样在main.js中
```js
import Vue from 'vue'
import App from './App.vue'
import { Button } from 'lite'

Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

lite 也支持在script标签中引用

``` html
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="lite.js"></script>
```
