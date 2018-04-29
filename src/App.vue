<template>
  <div class="container">
    <site-header></site-header>
    <detail-bar></detail-bar>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
import Header from './components/SiteHeader.vue'
import store from './store.js'
import DetailBar from './components/DetailBar.vue'
export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state
    }
  },
  components:{
    'site-header':Header,
    'detail-bar':DetailBar
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
