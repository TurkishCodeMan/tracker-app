<template>
  <div class="container pt-5 pb-3 mt-5 text-center ">
    <h2>Track Player Stats</h2>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group pb-2 ">
        <label  for="platform">Platform</label>
        <select class="form-control-sm" name="platform" id="platform" v-model="platform">
          <option  value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="origin">Origin</option>
          <option value="steam">Steam</option>
        </select>
      </div>
      <div class="form-group pb-2">
          <label for="gamertag">Gamertag</label>
          <input  class="form-control-sm"  type="text" name="text" v-model="gamertag" id="gamertag" placeholder="GamerTag,OriginID,PSN Id,etc..">
      </div>
      <div class="form-group text-center">
          <input type="submit" value="submit" class="btn btn-outline-warning ">
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:"Search",
    data(){
        return {
            platform:"psn",
            gamertag:""
        }
    },
    methods:{
        onSubmit(){
            if(!this.gamertag){
               this.$toasted.info("Please Enter A Gamertag",{
                   duration:3000,
                   icon:'exclamation-circle'
               })
            }else{
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
            }
        }
    }

};
</script>

<style scoped>
label{
    color: aliceblue;
    margin-right: 1rem;
}
h2{
    margin-bottom: 2rem;
    color: aliceblue;
}
.container{
    background: rgb(207, 207, 207,0.1);
    border-radius: 2rem;
    z-index: 0;
    
}
</style>