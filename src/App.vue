<template>
  <div class="container">
    <site-header></site-header>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/SiteHeader.vue'
import store from './store.js'

export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state
    }
  },
  components:{
    'site-header':Header
  }
}
</script>

<style lang="scss">
#app {

}


</style>
