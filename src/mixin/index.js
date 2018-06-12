export const mixin = {
    props: {
        type: {
            type: String,
            default: "default",
            validator: val =>
                [
                    "default",
                    "text",
                    "primary",
                    "warning",
                    "danger",
                    "info",
                    "success"
                ].indexOf(val) > -1
        },
    }
  } 