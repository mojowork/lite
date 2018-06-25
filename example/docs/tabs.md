# Tabs 标签页
-----
### 基础用法

<div  class="demo-block">
    <t-tabs v-model="tabs">
        <t-tab label="first">
        First
        </t-tab>
        <t-tab label="second">
            Second
        </t-tab>
        <t-tab label="third">
            Third
        </t-tab>
    </t-tabs>
</div>

```html
<div>
    <t-tabs v-model="tabs" >
        <t-tab label="first">First</t-tab>
        <t-tab label="second">Second</t-tab>
        <t-tab label="third">Third</t-tab>
    </t-tabs>
</div>

```
### tab平均分布

使用 full 属性来定义 tabs 的样式

<div class="demo-block">
    <t-tabs v-model="tabs" 
    :full="true" >
        <t-tab label="first">
        First
        </t-tab>
        <t-tab label="second">
            Second
        </t-tab>
        <t-tab label="third">
            Third
        </t-tab>
    </t-tabs>
</div>

```html
<div>
    <t-tabs v-model="tabs" :full="true">
        <t-tab label="first">First</t-tab>
        <t-tab label="second">Second</t-tab>
        <t-tab label="third">Third</t-tab>
    </t-tabs>
</div>

```

### Attributes
   参数  |  说明  |  类型  |　　　　　　　　可选值　　　　　　　　| 默认值
  -|-|-|:-:|-|
  full|是否tab平均分布| boolean | - | false


<script>
    export default {
        data() {
            return {
                tabs: 'first'
            }
        }
}
</script>