<template>
    <div>
        <div>
            <t-button > default </t-button>
            <t-button  type="primary" > primary </t-button>
            <t-button  type="warning" > warning </t-button>
            <t-button  type="danger"> danger </t-button>
            <t-button  type="info"> info </t-button>
            <t-button  type="success"> success </t-button>
        </div>
        <div>
            <t-alert></t-alert>
            <t-alert type="primary"></t-alert>
            <t-alert type="danger"></t-alert>
            <t-alert type="success"></t-alert>
        </div>
        <div>
            <t-input></t-input>
            <t-input color="purple"></t-input>
            <t-input color="lime"></t-input>
            <t-input ></t-input>
        </div>
        <div>
            <t-button  type="success" @click="open = true"> open modal </t-button>
            <t-modal title="程云小程序" v-model="open"
            @close="handleClose">
                乘云小程序属于上海微庚信息科技有限公司，专注于小程序应用场景解决方案，5分钟一键生成企业专属小程序。目前乘云一共有9大产品线小程序，涵盖全行业小程序解决方案。2018年4月26日中国SaaS应用大会上，乘云小程序荣获2018中国Saas应用大会“最佳小程序SaaS服务商”称号。
                <div slot="footer">
                    <t-button type="danger" 
                    @click="open = false">Close</t-button>
                </div>
            </t-modal>
        </div>
        <div>
            <t-progress :value="99"></t-progress>
            <t-progress type="info" v-model="progress"></t-progress>
            <t-progress type="info" :value="52"></t-progress>
            <t-button @click="progress++"> 加 </t-button>
            <t-button  @click="progress--"> 减 </t-button>
        </div>
        <div>
            <t-tabs v-model="tab" >
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                progress: 11
            }
        },
        methods: {
            handleClose() {
                console.log('handleClose')
                
            }
        },
        
    }
</script>

<style scoped>

</style>