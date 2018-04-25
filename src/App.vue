<template>
  <div class="container">
    <site-header></site-header>

      <router-view ></router-view>

  </div>
</template>

<script>
import Header from './components/SiteHeader.vue'


export default {
  name: 'app',
  data () {
    return {
      "FirstName":"",
      "LastName":"",
      "School":"",
      "Teacher":"Name"
    }
  },
  components:{
    'site-header':Header
  }
}
</script>

<style lang="scss">
#app {
  font-family:  Helvetica, Arial, sans-serif;
}


</style>
