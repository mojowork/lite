# Progress 进度条
-----
### 基础用法
使用 type 属性来定义 Progress 的样式

<div  class="demo-block">
    <t-progress type="primary" :value="52"></t-progress>
    <t-progress type="warning" :value="52"></t-progress>
    <t-progress type="info" :value="52"></t-progress>
    <t-progress type="danger" :value="32"></t-progress>
    <t-progress type="success" :value="32"></t-progress>
</div>

::: demo
```html
<div>
    <t-progress type="primary" :value="52"></t-progress>
    <t-progress type="warning" :value="52"></t-progress>
    <t-progress type="info" :value="52"></t-progress>
    <t-progress type="danger" :value="32"></t-progress>
    <t-progress type="success" :value="32"></t-progress>
</div>
```
:::


使用 type 属性来定义 Progress 的样式
<div  class="demo-block">
    <t-progress type="primary" v-model="progress"></t-progress>
    <t-button  @click="progress++">+</t-button>
    <t-button  @click="progress--">-</t-button>
</div>

::: demo
```html
<div>
    <t-progress type="primary" v-model="progress"></t-progress>
    <t-button  @click="progress++">+</t-button>
    <t-button  @click="progress--">-</t-button>
</div>
```
:::

<script>

  export default {
    data() {
      return {
        progress: 50
      };
    }
  }
</script>

### Attributes
   参数  |  说明  |  类型  |　　　　　　　　可选值　　　　　　　　| 默认值
  -|-|-|:-:|-|
  type|类型| string |default / primary / success / warning / danger / info / text| default