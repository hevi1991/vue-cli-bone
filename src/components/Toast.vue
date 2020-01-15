<template>
  <v-snackbar
      v-model="value"
      v-bind="$attrs"
      v-on="$listeners"
      top
  >
    {{ text }}
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
        default: false
      },
      text: {
        type: String,
        default: ""
      }
    }
  };
</script>
