<template>
  <div class="lite-input" :class="[
    {
      disabled,
      focused
    }]" @click="focus()">
    <div class="lite-input__content">
      <component ref="input" class="input" :class="type" :is="type" v-model="valueModel" :placeholder="placeholder" :disabled="disabled" :value="valueModel" @input="valueModel = $event.currentTarget.value" @focus="onFocus" @blur="onBlur"></component>
      <div class="lite-input__line" :style="{
        backgroundColor: color
    }"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "tInput",

    props: {
        disabled: {
            type: Boolean,
            default: false
        },

        placeholder: {
            type: String,
            default: undefined
        },

        color: {
            type: String,
            default: ""
        },

        type: {
            type: String,
            default: "input",
            validator: val => ["input", "textarea"].indexOf(val) > -1
        },

        value: {}
    },

    data() {
        return {
            focused: false
        };
    },

    computed: {
        valueModel: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
                this.$emit("change", value);
            }
        }
    },

    methods: {
        focus() {
            const input = this.$refs.input;
            input.focus();
            this.$emit("focus");
        },

        onBlur(event) {
            this.focused = false;
            this.$emit("blur", event);
        },

        onFocus(event) {
            this.focused = true;
            this.$emit("focus", event);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~styles/color.scss";

.lite-input {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;

    &.disabled {
        opacity: 0.5;
    }

    &.focused {
        .lite-input__content {
            .lite-input__line {
                left: 0px;
                right: 0px;
                opacity: 1;
            }
        }
    }
    .lite-input__content {
        border-radius: 0.25em;
        padding: 0.5em 1em;
        background-color: rgba($color-default, 0.1);
        border: 2px solid $color-default;
        position: relative;
        .textarea {
            height: 80px;
            width: 200px;
        }
        .input {
            font-family: inherit;
            font-size: 0.9em;
            border: none;
            background: transparent;
            outline: none;
            cursor: auto;
        }
        .lite-input__line {
            position: absolute;
            background: $color-success;
            height: 2px;
            left: 30%;
            right: 30%;
            border-radius: 0.25em;
            bottom: -2px;
            opacity: 0;
            transition: left 0.15s, right 0.15s, opacity 0.15s;
        }
    }
}
</style>