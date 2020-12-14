<template>

    <div id="app">
      <app-header></app-header>
      <router-view></router-view>
    </div>

</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    appHeader: Header,
  },
  beforeCreate(){
    document.body.className="image"
  }
};
</script>

<style >
body {

  background-color: #2e3137;
  width: 100%;
  height: 55rem;
}
.image {
  background-image: url("./assets/wallpaper.jpg");
}
.no-image {
  background-image: none;
}
</style>
