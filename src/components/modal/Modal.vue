
<template>
    <transition name="fade" :duration="{
      enter: 1000,
      leave: 300,
    }">
        <div class="lite-modal" v-show="valueModel" :class="{
      }" @keyup.esc="close()">
            <div class="lite-modal__backdrop" @click="close()"></div>

            <div class="lite-modal__frame" @keyup.esc="close()">
                <div class="lite-modal__backdrop--header">
                    <slot name="header">
                        <div v-if="title" v-html="title" />
                    </slot>
                </div>
                <div class="lite-modal__backdrop--body">
                    <slot/>
                </div>
                <div class="lite-modal__backdrop--footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "tModal",

    props: {
        title: {
            type: String,
            default: null
        },
        value: {}
    },

    computed: {
        valueModel: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },

    methods: {
        close() {
            this.valueModel = false
            this.$emit("close");
        }
    }
};
</script>
<style lang="scss" scoped>
@import "~styles/color.scss","~styles/transition.scss";
.lite-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    .lite-modal__backdrop {
        flex: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(black, 0.85);
    }
    .lite-modal__frame {
        background: white;
        border-radius: 5px;
        position: relative;
        width: 500px;
        height: 400px;
        margin: 50vh auto 0;
        transform: translateY(-50%); // 垂直居中
        box-shadow: 0 10px 60px rgba(black, 0.16);
        display: flex;
        flex-direction: column;
        .lite-modal__backdrop--header {
            flex: 0 60px;
            padding: 0 20px;
            text-align: left;
            line-height: 60px;
            font-size: 16px;
            font-weight: 600;
            border-bottom: 1px solid $color-light-neutral;
        }
        .lite-modal__backdrop--body {
            overflow-x: hidden;
            overflow-y: auto;
            flex: auto 1 1;
            padding: 20px;
            text-align: left;
        }
        .lite-modal__backdrop--footer {
            flex: 0 64px;
            line-height: 64px;
            border-top: 1px solid $color-light-neutral;
            text-align: center;
        }
    }
}
</style>