# Alert 警告
----
用于页面中展示重要的提示信息。

### 基础用法
使用 type 属性来定义 Alert 的样式
<div class="dome-alert demo-block">
    <t-alert type="primary" >默认提示的文案</t-alert>
    <t-alert type="warning" >警告提示的文案</t-alert>
    <t-alert type="danger" >错误提示的文案</t-alert>
    <t-alert type="info" >消息提示的文案</t-alert>
    <t-alert type="success" >成功提示的文案</t-alert>
</div>

::: demo
```html

<div>
    <t-alert type="primary" >默认提示的文案</t-alert>
    <t-alert type="warning" >警告提示的文案</t-alert>
    <t-alert type="danger" >错误提示的文案</t-alert>
    <t-alert type="info" >消息提示的文案</t-alert>
    <t-alert type="success" >成功提示的文案</t-alert>
</div>

```
:::

### 文字居中
使用 center 属性来居中 alert 标题的位置
<div class="dome-alert demo-block">
      <t-alert :center="true" type="primary"> 默认提示的文案 </t-alert>
      <t-alert :center="true" type="warning"> 警告提示的文案 </t-alert>
      <t-alert :center="true" type="danger"> 错误提示的文案 </t-alert>
      <t-alert :center="true" type="info"> 消息提示的文案 </t-alert>
      <t-alert :center="true" type="success"> 成功提示的文案 </t-alert>
</div>

::: demo
```html

<div>
      <t-alert :center="true" type="primary"> 默认提示的文案 </t-alert>
      <t-alert :center="true" type="warning"> 警告提示的文案 </t-alert>
      <t-alert :center="true" type="danger"> 错误提示的文案 </t-alert>
      <t-alert :center="true" type="info"> 消息提示的文案 </t-alert>
      <t-alert :center="true" type="success"> 成功提示的文案 </t-alert>
</div>

```
:::


### Attributes
   参数  |  说明  |  类型  |　　　　　　　　可选值　　　　　　　　| 默认值
  -|-|-|:-:|-|
  type|类型| string |default / primary / success / warning / danger / info / text| default
  center|是否文字居中| boolean | - | false
