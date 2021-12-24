<template>
  <section>
    <v-app-bar flat fixed app color="transparent">
      <v-toolbar-title class="container">
        <h4 class="indigo--text darken-3">GitHub CV Generator</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="isXs"
        @click.stop="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>
      <div class="">
        <v-toolbar-items class="d-none d-sm-flex container mr-4">
          <div
            v-for="(page, i) in pages"
            :key="i"
            class="d-none-d-sm-flex mx-4"
          >
            <v-btn
              :class="page.text === 'Generate' ? 'specialButton' : ''"
              plain
              router
              :to="page.link"
            >
              <span class="white--text">
                {{ page.text }}
              </span></v-btn
            >
          </div>
        </v-toolbar-items>
      </div>
    </v-app-bar>
    <!-- Navigation Bar -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"
              >GitHub CV Generator</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(page, i) in pages" :key="i" router :to="page.link">
          <v-list-item-content>
            <v-list-item-title>{{
              page.text
            }}</v-list-item-title></v-list-item-content
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      isXs: false,
      pages: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "About",
          link: "/about",
        },
        {
          text: "Generate",
          link: "/generate",
        },
      ],
    };
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 600;
    },
  },
};
</script>

<style>
.specialButton {
  background: linear-gradient(90deg, #ffe565 0%, #ff713e 90.12%, #ff713e 100%);
  border-radius: 20px;
}
</style>
