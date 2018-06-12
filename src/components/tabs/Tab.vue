<template>
        <div
        class="lite-tab"
        v-show="visible">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'tTab',
        props: {
            label: {
                type: String,
                defalut: ''
            }
        },
        data () {
            return {
                visible: false
            }
        }
        
    }
</script>