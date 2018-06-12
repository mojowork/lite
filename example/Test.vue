<template>
    <div>
        <div>
            <t-button > default </t-button>
            <t-button  type="primary" > primary </t-button>
            <t-button  type="warning" :disabled="true"> warning </t-button>
            <t-button  type="danger"> danger </t-button>
            <t-button  type="info"> info </t-button>
            <t-button  type="success"> success </t-button>
        </div>
        <div>
            <t-alert></t-alert>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>