<template>
  <v-snackbar
      :color="color"
      v-model="value"
      v-bind="$attrs"
      v-on="$listeners"
      top
  >
    <slot>
      {{ text }}
    </slot>
  </v-snackbar>
</template>

<script>

  export default {
    name: "Toast",
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        type: "success",
        text: ""
      };
    },
    computed: {
      color() {
        switch (this.type) {
          case "primary":
            return "#2196F3";
          case "success":
            return "#4CAF50";
          case "error":
            return "#F44336";
          default:
            return "#000000";
        }
      }
    }
  };
</script>
