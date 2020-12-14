<template>
  <div class="container text-left pt-5 text-right col-sm-7 col-md-9">
    <img :src="image" alt="İmage" width="200" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("../assets/head.png"),
    };
  },
};
</script>

<style scoped>
    img{
        border-radius: 15%;
    }
</style>