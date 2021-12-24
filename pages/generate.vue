<template>
  <section class="generateCard">
    <v-row align="center" class="mt-10" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-col cols="10" md="3">
                <h3 class="indigo--text darken-3 text-center mb-2">
                  Generate your GitHub Curriculum Vitae
                </h3>
                <v-form ref="searchForm" v-model="valid" lazy-validation>
                  <v-text-field
                    append-icon="mdi-github"
                    v-model="username"
                    :rules="[rules.required]"
                    required
                    label="GitHub Username"
                    outlined
                    dense
                    rounded
                    color="#95C5FF"
                  ></v-text-field>
                  <div class="text-center">
                    <v-btn
                      class="specialButton"
                      :disabled="!valid || loading"
                      :loading="loading"
                      @click="validate"
                      ><span class="white--text">Generate</span></v-btn
                    >
                  </div>
                </v-form>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <ProfileCard
          class="mt-1"
          v-if="userData.length !== 0"
          :userData="this.userData"
          :userRepo="this.userRepo"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ProfileCard from "@/components/landing/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      valid: true,
      loading: false,
      username: "",
      userData: [],
      userRepo: [],
      rules: { required: (v) => !!v || "Required" },
    };
  },
  methods: {
    validate() {
      if (this.$refs.searchForm.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.searchUser(this.username);
        }, 1000);
      }
    },
    async searchUser(username) {
      const res = await this.$axios.get(
        `https://api.github.com/users/${username}`
      );
      if (res.data !== null || res.data !== undefined) {
        this.userData = res.data;
        const resRepo = await this.$axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        this.userRepo = resRepo.data;
        this.loading = false;
        console.log(this.userData);
        console.log(this.userRepo);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.generateCard {
  height: 80vh;
  background: url("~assets/img/Generate.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 45%;
}
@media (max-width: 600px) {
  .generateCard {
    background-size: 60%;
  }
}
</style>
