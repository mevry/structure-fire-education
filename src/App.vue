<template>
  <div class="container" style="height:80%;">
    <badge-modal v-if="showModal" @close="showModal = false"></badge-modal>
    <site-header class="d-print-none"></site-header>
    <detail-bar class="d-print-none"></detail-bar>
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
import BadgeModal from './components/BadgeModal.vue'
import EventBus from './event-bus'
export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state,
      showModal:false
    }
  },
  methods:{
    setModalTrue(){
      this.showModal = true;
    }
  },
  components:{
    'site-header':Header,
    'detail-bar':DetailBar,
    'badge-modal':BadgeModal
  },
  mounted(){
    let self = this;
    EventBus.$on('activity-completed', self.setModalTrue)
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
@page {
  size:auto
}
</style>
