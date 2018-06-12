<template>
    <div class="lite-progress" :class="[
    type
    ]">
        <div class="lite-progress__bar" :style="{ width: `${value * 1}%` }"></div>
    </div>
</template>

<script>
import { mixin } from '../../mixin/index'
export default {
    name: "tProgress",
    mixins: [mixin],
    props: {
        value: {
            type: Number,
            default: 0
        },
    }
};
</script>

<style lang="scss">
@import "~styles/color.scss";

@mixin colors($foreground, $background) {
    background: $background;
    .lite-progress__bar {
        background: $foreground;
    }
}

.lite-progress {
    height: 6px;
    margin: 5px 2px;
    position: relative;
    .lite-progress__bar {
        position: absolute;
        height: 100%;
        border-radius: 100px;
        top: 0;
        left: 0;
        transition: width 1s;
    }
    &.default {
        @include colors($color-primary, $color-light-neutral);
    }
    &.primary {
        @include colors($color-primary, $color-light-neutral);
    }
    &.info {
        @include colors($color-info, $color-light-neutral);
    }
    &.danger {
        @include colors($color-danger, $color-light-neutral);
    }
    &.warning {
        @include colors($color-warning, $color-light-neutral);
    }
    &.success {
        @include colors($color-success, $color-light-neutral);
    }
}
</style>
