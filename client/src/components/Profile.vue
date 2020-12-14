<template>
  <div class="container mt-5 text-center">
    <div v-if="loading" class="text-warning">Loading ...</div>
    <div v-if="error" class="text-white">
      <h1>{{ error }}</h1>
      <router-link class="text-warning" to="/">Go Back</router-link>
    </div>

    <div v-if="profileData" class="container gamer">
      <div class="gamertag">
        <img
          :src="profileData.platformInfo.avatarUrl"
          class="img-fluid"
          width="100"
          alt=""
        />
        <span>{{ profileData.platformInfo.platformUserId }}</span>
        <div class="grid">
          <div v-if="profileData.segments[0]">
            <img :src="profileData.segments[0].metadata.imageUrl" alt="" />
          </div>
          <div>
            <ul>
              <li>
                <h4>UserHandle</h4>
                <p>{{ profileData.platformInfo.platformUserHandle }}</p>
              </li>
              <li v-if="profileData.metadata.activeLegendName">
                <h4>Selected Legend</h4>
                <p>{{ profileData.metadata.activeLegendName }}</p>
              </li>
              <li v-if="profileData.segments[0].stats.damage">
                <h4>Total Damages</h4>
                <p>{{ profileData.segments[0].stats.damage.displayValue }}</p>
              </li>
              <li v-if="profileData.segments[0].stats.damage">
                <h4>Percentile</h4>
                <p>%{{ profileData.segments[0].stats.damage.percentile }}</p>
              </li>
            </ul>
          </div>
        </div>

        <router-link class="go-back" to="/">Go Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../config/API";

export default {
  data() {
    return {
      loading: false,
      profileData: null,
      error: null,
    };
  },
  beforeCreate() {
    console.log(document.body);
    //document.body.className = "no-image";
  },
  async created() {
    this.loading = true;
    try {
      const response = await API().get(
        `/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
      );
      console.log(response.data.data);
      this.profileData = response.data.data.data;
  
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = error.response.data.message;
      return error;
    }
  },
};
</script>

<style scoped>
.gamer {
  color: aliceblue;
  background: rgb(207, 207, 207, 0.1);
  border-radius: 2rem;
  z-index: 1;
}
.gamertag {
  padding-top: 1rem;
}
.gamertag img {
  border-radius: 1rem;
  margin-right: 1rem;
}
.gamertag .go-back {
  color: orange;
  font-size: 1.5rem;
  margin-left: 1.5rem;
}
ul li {
  margin-bottom: 1rem;
  padding: 0.6rem;
  list-style-type: none;
}
</style>