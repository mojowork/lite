<template>
    <component :is="component" class="lite-btn" :class="[
      component,
        type,
      {
        noClick,
        ghost
      }
    ]" @click="handleClick">

        <span class="lite-btn__content">
            <slot></slot>
        </span>
    </component>
</template>

<script>
import { mixin } from '../../mixin/index'
export default {
    name: "tButton",
    mixins: [mixin],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },

        ghost: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        component() {
            if (this.type.indexOf("text") !== -1) {
                return "a";
            } else {
                return "button";
            }
        },

        noClick() {
            return this.disabled;
        }
    },

    methods: {
        handleClick(event) {
            if (!this.noClick) {
                this.$emit("click", event);
            } else {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import "~styles/color.scss";
@mixin colors($color) {
    color: $color;
    border: solid $color;
    background: $color;
    &.ghost:not(.disabled):hover {
        background: $color;
        color: white;
    }
}
// 基本样式
.lite-btn {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    line-height: 1em;
    text-align: center;
    outline: none;
    border: none;
    border-radius: 0.25em;
    padding: 0.8em 1.5em;
    font-weight: 700;
    &:hover {
        opacity: 0.6;
    }
    &.a {
        background: white;
        border: none;
    }
}
.a {
    color: $color-font;
}
// 按钮样式
.button {
    user-select: none;
    color: $color-primary;
    background: $color-default;
    border: solid $color-default;
}
.ghost,
.default {
    color: $color-font;
}
.noClick {
    cursor: default;
    filter: grayscale(28%);
    opacity: 0.5;
}

// 色系
.default {
    @include colors($color-default);
    color: $color-font;
}
.primary {
    @include colors($color-primary);
}
.warning {
    @include colors($color-warning);
}
.danger {
    @include colors($color-danger);
}
.info {
    @include colors($color-info);
}
.success {
    @include colors($color-success);
}

.button:not(.ghost):not(.default) {
    color: white;
}
.ghost {
    background: white;
}
</style> 
