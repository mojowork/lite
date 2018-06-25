# Input 输入框
-----
### 基础用法

支持input原生属性
<div class="demo-block">
    <t-input placeholder="请输入密码"></t-input>
</div>

::: demo
```html
<div>
    <t-input placeholder="请输入密码"></t-input>
</div>
```
:::

###  底线颜色
使用 color 属性来改变 input 底线的颜色

<div class="demo-block">
      <t-input  color="red" >  </t-input>
      <t-input  color="#2185d0" >  </t-input>
      <t-input  color="rgb(255,0,255)" >  </t-input>
</div>

::: demo
```html
<div>
      <t-input  color="red" >  </t-input>
      <t-input  color="#2185d0" >  </t-input>
      <t-input  color="rgb(255,0,255)" >  </t-input>
</div>
```
::: 


###  输入框类型
使用 type 属性来改变 input 类型

<div class="demo-block">
      <t-input>  </t-input>
      <t-input  type="input">  </t-input>
      <t-input  type="textarea">  </t-input>
</div>


::: demo
```html
<div>
      <t-input>  </t-input>
      <t-input  type="input">  </t-input>
      <t-input  type="textarea">  </t-input>
</div>
```
:::

### Attributes
   参数  |  说明  |  类型  |　　　　　　　　可选值　　　　　　　　| 默认值
  -|-|-|:-:|:-:|
  color|底线颜色| string | 单词 / 十六进制颜色 / rgb颜色等 | -
  type|类型| string | input / textarea | input
  disabled|是否失效| boolean | - | false
  placeholder|占位符| string | - | -

### Event
   参数  |  　　　　　　　　　　　  说明　　　　　　  　　　　　  |  回调参数  |
  -|:-:|-|
  blur|在 Input 失去焦点时触发| Event
  focus|在 Input 获得焦点时触发| Event
  change|在 Input 值改变时触发|  string / number

<!-- <style scoped>
  * + * {
    margin-left: 0.5rem;
  }
</style> -->