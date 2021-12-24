<template>
  <v-snackbar v-model="show" :color="options.color" top>
    <span>{{ options.message }}</span>
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text icon v-bind="attrs" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    show: {
      get() {
        return this.$store.state.utils.snackbar.show || false;
      },
      set(newValue) {
        if (newValue === false) {
          this.$store.dispatch("utils/snackbar/CLOSE");
        }
      },
    },
    options() {
      return this.$store.getters["utils/snackbar/getOptions"];
    },
  },
  methods: {
    close() {
      this.$store.dispatch("utils/snackbar/CLOSE");
    },
  },
};
</script>
