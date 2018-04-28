<template>
  <div class="container">
    <site-header></site-header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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

.fade-enter-active, .fade-leave-active{
  transition: all .4s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>
