<template>
  <div class="">
    <div class="text-center">
      <v-btn
        v-if="userData.length !== 0"
        color="blue"
        class="white--text text-center"
        @click="downloadPDF"
        >Download CV</v-btn
      >
    </div>

    <client-only>
      <vue-html2pdf
        class="mx-auto"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :htmlToPdfOptions="htmlToPdfOptions"
        pdf-content-width="1200px"
        :manual-pagination="false"
        :paginate-elements-by-height="1400"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <v-card class="elevation-2">
            <v-card-text>
              <v-row align="start" justify="center">
                <v-col
                  :style="{
                    background: `radial-gradient(50% 50% at 50% 50%, #95C5FF 0%, #95C5FF 100%)`,
                  }"
                  cols="3"
                >
                  <v-row align="center" justify="center">
                    <v-col>
                      <v-img
                        class="mx-auto avatar-img"
                        :src="userData.avatar_url"
                        :alt="userData.avatar_url"
                        height="30vh"
                        width="30vh"
                      ></v-img>
                      <h3 class="text-center title my-4">
                        {{ userData.name }}
                      </h3>
                      <p class="text-center">
                        <v-icon>mdi-map-marker-outline</v-icon
                        >{{ userData.location }}
                      </p>
                      <v-row align="center" justify="center">
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >Followers : {{ userData.followers }}</span
                          >
                        </v-col>
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >Following : {{ userData.following }}</span
                          >
                        </v-col>
                      </v-row>
                      <div class="ml-6">
                        <h2 class="font-weight-black my-4">Contact</h2>
                        <v-btn plain :href="userData.html_url"
                          ><v-icon class="mr-2">mdi-github</v-icon
                          >{{ userData.login }}</v-btn
                        >
                        <v-btn plain v-if="userData.mail"
                          ><v-icon class="mr-2">mdi-mail</v-icon
                          >{{ userData.mail }}</v-btn
                        >

                        <v-btn plain v-if="userData.twitter_username"
                          ><v-icon class="mr-2">mdi-twitter</v-icon
                          >{{ userData.twitter_username }}</v-btn
                        >
                        <v-btn plain :href="userData.blog" v-if="userData.blog"
                          ><v-icon class="mr-2">mdi-web</v-icon
                          >{{ userData.name }}</v-btn
                        >
                        <v-divider></v-divider>
                        <h2 class="font-weight-black my-4">Organisations</h2>
                        <p class="subtitle-2">{{ userData.company }}</p>
                        <v-divider></v-divider>
                        <h2 class="font-weight-black my-4">
                          Profile Created On
                        </h2>
                        <p>{{ userData.created_at }}</p>
                        <v-divider></v-divider>

                        <h2 class="font-weight-black my-4">
                          Profile Last Updated
                        </h2>
                        <p>{{ userData.updated_at }}</p>
                        <v-divider></v-divider>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="8" class="mt-10">
                  <h1 class="display-3 font-weight-bold">
                    {{ userData.name }}
                  </h1>
                  <p class="subtitle-1 my-1">{{ userData.bio }}</p>
                  <v-row>
                    <v-col cols="5">
                      <p class="subtitle-1 font-weight-bold">
                        Public Repositories : {{ userData.public_repos }}
                      </p>
                    </v-col>
                    <v-col cols="5">
                      <p class="subtitle-1 font-weight-bold">
                        Public Gists : {{ userData.public_gists }}
                      </p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <p class="subtitle-1 font-weight-bold my-4">
                    Picked Repositories
                  </p>
                  <br />
                  <v-flex
                    class="my-6"
                    v-for="repo in userRepo.slice(0, 5)"
                    :key="repo.id"
                  >
                    <v-card>
                      <v-row>
                        <v-col cols="110">
                          <v-card-title>
                            <v-btn plain :href="repo.html_url">
                              <p class="subtitle-1 font-weight-bold">
                                {{ repo.name }}
                              </p>
                            </v-btn>
                          </v-card-title>
                        </v-col>
                        <v-col cols="2">
                          <v-card-title class="caption"
                            ><v-icon>mdi-star-outline</v-icon
                            >{{ repo.forks }}</v-card-title
                          >
                        </v-col>
                      </v-row>
                      <v-card-text class="my-0">
                        <p>{{ repo.description }}</p>
                        <v-btn
                          v-if="repo.language"
                          :color="repo.language === 'HTML' ? 'blue' : 'yellow'"
                          class="white--text"
                          dense
                          >{{ repo.language }}</v-btn
                        >
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </section>
      </vue-html2pdf>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlToPdfOptions: {
        margin: 1,
        filename: "GitHubCV.pdf",
        image: {
          type: "jpeg",
          quality: 1,
        },
        enableLinks: true,
        html2canvas: {
          scale: 4,
          useCORS: true,
          width: 960,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      },
    };
  },
  props: ["userData", "userRepo"],
  methods: {
    downloadPDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  mounted() {
    console.log(this.sortedRepos);
  },
};
</script>

<style lang="scss" scoped>
.avatar-img {
  border-radius: 10px;
}
</style>
