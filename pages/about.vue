<template>
  <section>
    <v-row align="center" class="mt-10" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="10" sm="10" md="6" xl="8">
            <h1 class="indigo--text display-1 darken-3 font-weight-bold mb-4">
              GITHUB CV GENERATOR
            </h1>
            <v-divider class="indigo--text darken-3"></v-divider>
            <p class="indigo--text darken-3 font-weight-light mb-4">
              Create professional resumes from your GitHub, CV and bio-data
              online for free, in minutes. Simply fill in your details and
              generate beautiful PDF and HTML resumes!
            </p>
            <v-btn class="specialButton" to="/generate">
              <span class="white--text">Generate</span></v-btn
            >
          </v-col>
          <v-col v-if="isXs" cols="12" sm="6" md="6" xl="8">
            <v-img :src="require('@/assets/img/About.png')"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isXs: false,
    };
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth > 800;
    },
  },
};
</script>

<style></style>
