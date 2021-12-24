<template>
  <v-app class="backgroundImage">
    <LandingNavbar />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.backgroundImage {
  background: url("~assets/img/background.png");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 73vmax;
}
</style>
