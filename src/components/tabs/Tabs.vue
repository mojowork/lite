<template>
    <div class="lite-tabs">
        <div class="lite-tabs__header" :class="[
        type,
        {
            full
        }]">
            <h4 v-for="(tab, index) in tabs" v-html="tab" :key="tab" :class="{'active': index === activeIndex}" @click.stop="tabClickHandler(index)">
            </h4>
        </div>
        <div class="lite-tabs__content">
            <slot />
        </div>
    </div>
</template>
<script >
import { mixin } from "../../mixin/index"
export default {
    name: "tTabs",
    mixins: [mixin],
    props: {
        value: {
            type: String,
            required: true
        },

        full: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tabs: [],
            activeIndex: 0
        };
    },

    mounted() {
        this.$children.forEach((el, index) => {
            this.tabs.push(el.label);
            el.visible = el.label === this.value && (this.activeIndex = index);
        });
    },
    methods: {
        tabClickHandler(index) {
            this.$children[this.activeIndex].visible = false;
            this.activeIndex = index;
            let el = this.$children[index];
            el.visible = true;
            this.$emit("input", el.label);
            this.$emit("tab-change", el.label);
        }
    }
};
</script> 
<style lang="scss" scoped>
@import "~styles/color.scss", "~styles/mixin.scss";
.lite-tabs__header {
    padding: 0.5em 1em 0;
    height: 3em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid $color-light-neutral;
    &.full {
        justify-content: space-around;
    }
    h4 {
        cursor: pointer;
        font-weight: normal;
        font-size: 1.5em;
        height: 25px;
        margin: 0;
        padding: 0 0.5em;
        display: inline-block;
        height: 100%;
        color: $color-font;
        transition: color 0.1s ease;
        &:hover,
        &:focus,
        &.active {
            color: $color-font-active;
            @include selected;
        }
    }
}
</style>

