# Button 按钮
----
### 基础用法
使用```type```属性来定义 Button 的样式。

<div class="demo-block">
    <t-button > default </t-button>
    <t-button  type="primary"> primary </t-button>
    <t-button  type="warning"> warning </t-button>
    <t-button  type="danger"> danger </t-button>
    <t-button  type="info"> info </t-button>
    <t-button  type="success"> success </t-button>
</div>

::: demo
```html
    <t-button > default </t-button>
    <t-button  type="primary"> primary </t-button>
    <t-button  type="warning"> warning </t-button>
    <t-button  type="danger"> danger </t-button>
    <t-button  type="info"> info </t-button>
    <t-button  type="success"> success </t-button>

```
:::

### 幽灵按钮
使用 ghost 属性来定义 button 的样式

<div class="demo-block">
    <t-button  :ghost="true" > default </t-button>
    <t-button  :ghost="true" type="primary"> primary </t-button>
    <t-button  :ghost="true" type="warning"> warning </t-button>
    <t-button  :ghost="true" type="danger"> danger </t-button>
    <t-button  :ghost="true" type="info"> info </t-button>
    <t-button  :ghost="true" type="success"> success </t-button>
</div>

::: demo
```html
    <t-button  :ghost="true" > default </t-button>
    <t-button  :ghost="true" type="primary"> primary </t-button>
    <t-button  :ghost="true" type="warning"> warning </t-button>
    <t-button  :ghost="true" type="danger"> danger </t-button>
    <t-button  :ghost="true" type="info"> info </t-button>
    <t-button  :ghost="true" type="success"> success </t-button>
  
```
:::

### 文字按钮
 在type 属性中添加 text 关键字
 <div class="demo-block">
    <t-button  type="text" > default </t-button>
    <t-button  type="text primary"> primary </t-button>
    <t-button  type="text warning"> warning </t-button>
    <t-button  type="text danger"> danger </t-button>
    <t-button  type="text info"> info </t-button>
    <t-button  type="text success"> success </t-button>
</div>


::: demo
```html
    <t-button  type="text" > default </t-button>
    <t-button  type="text primary"> primary </t-button>
    <t-button  type="text warning"> warning </t-button>
    <t-button  type="text danger"> danger </t-button>
    <t-button  type="text info"> info </t-button>
    <t-button  type="text success"> success </t-button>

```
:::


### Attributes
   参数  |  说明  |  类型  |　　　　　　　　可选值　　　　　　　　| 默认值
  :-:|:-:|:-:|:-:|:-:|
  type|类型| string |default / primary / success / warning / danger / info / text| default
  ghost|是否幽灵按钮| boolean | - | false
  disabled|是否失效| boolean | - | false
