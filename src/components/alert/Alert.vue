<template>
    <transition name="fade">
        <div v-if="visible" class="lite-alert" :class="[
        type,
        {
        center,
        closable
        }]">
            <div class="lite-alert__content">
                <slot>默认标题</slot>
            </div>
        </div>
    </transition>
</template>

<script>
import { mixin } from '../../mixin/index'
export default {
    name: "tAlert",
    mixins: [mixin],
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        center: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visible: true
        };
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit("close", event);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~styles/color.scss";
@mixin colors($color) {
    color: $color;
    background: rgba($color, 0.1);
}
.lite-alert {
    @include colors($color-font);
    position: relative;
    min-height: 1rem;
    line-height: 1rem;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    margin: 0.2rem;
    opacity: 1;
    display: flex;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    .lite-alert__content {
        padding: 0 8px;
        font-size: 0.8rem;
    }
    &.center {
        justify-content: center;
    }
    &.primary {
        @include colors($color-primary);
    }
    &.info {
        @include colors($color-info);
    }
    &.success {
        @include colors($color-success);
    }
    &.warning {
        @include colors($color-warning);
    }
    &.danger {
        @include colors($color-danger);
    }
}
</style>

