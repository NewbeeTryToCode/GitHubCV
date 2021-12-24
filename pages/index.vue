<template>
  <section>
    <v-row align="center" class="mt-10" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="10" sm="10" md="6" xl="8">
            <h1 class="indigo--text display-1 darken-3 font-weight-thin mb-4">
              MAKE YOUR
            </h1>
            <h1 class="indigo--text display-1 darken-3 font-weight-bold mb-4">
              GITHUB CV IN JUST ONE CLICK
            </h1>
            <v-divider class="indigo--text darken-3"></v-divider>
            <p class="indigo--text darken-3 font-weight-thin mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              cupiditate aliquid, rerum deleniti ipsum veritatis.
            </p>
            <v-btn class="specialButton" to="/about">
              <span class="white--text">Learn More</span></v-btn
            >
          </v-col>
          <v-col v-if="isXs" cols="12" sm="6" md="6" xl="8">
            <v-img :src="require('@/assets/img/Hero.png')"></v-img>
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

<style lang="scss" scoped></style>
