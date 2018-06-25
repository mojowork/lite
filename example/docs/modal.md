# Modal 模态框
-----
### 基础用法

使用 v-model 来控制 Modal 的开关

<div class="demo-block">
        <t-button @click="open = true">Open modal</t-button>
          <t-modal
           v-model="open"
            title="乘云小程序"
            @close="open = false">
                乘云小程序属于上海微庚信息科技有限公司，专注于小程序应用场景解决方案，5分钟一键生成企业专属小程序。目前乘云一共有9大产品线小程序，涵盖全行业小程序解决方案。2018年4月26日中国SaaS应用大会上，乘云小程序荣获2018中国Saas应用大会“最佳小程序SaaS服务商”称号。
            <div slot="footer">
                <t-button type="danger" 
                @click="open = false">Close</t-button>
            </div>
        </t-modal>
  </div>


::: demo
```html
<div>
        <t-button @click="open = true">Open modal</t-button>
          <t-modal
           v-model="open"
            title="乘云小程序"
            @close="open = false">
                乘云小程序属于上海微庚信息科技有限公司，专注于小程序应用场景解决方案，
                5分钟一键生成企业专属小程序。目前乘云一共有9大产品线小程序，
                涵盖全行业小程序解决方案。2018年4月26日中国SaaS应用大会上，
                乘云小程序荣获2018中国Saas应用大会“最佳小程序SaaS服务商”称号。
            <div slot="footer">
                <t-button type="danger" 
                @click="open = false">Close</t-button>
            </div>
        </t-modal>
  </div>
```
:::

<script>

  export default {
    data() {
      return {
        open: false
      };
    }
  }
</script>

### Attributes
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
  title|   标题，也可通过具名slot传入| string |    -     |   -
  footer|操作区的内容 通过具名slot传入| string |    -     |   -
