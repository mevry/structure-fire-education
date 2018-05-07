<template>
  <div class="container" style="height:80%;">
    <badge-modal v-if="showModal" :completed="completed" :activity="activity" @close="showModal = false"></badge-modal>
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
import background from './img/bg1.png'
export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state,
      showModal:false,
      completed:false,
      activity:'',
      enterInfo:false
    }
  },
  components:{
    'site-header':Header,
    'detail-bar':DetailBar,
    'badge-modal':BadgeModal
  },
  mounted(){
    if(!this.enterInfo){
      this.$route.router.go('/enter-info');
    }
    let self = this;   
    EventBus.$on('activity-completed', function(payload){
      self.completed = payload.completed;
      self.activity = payload.activity;
      self.showModal = true;
    });
  }
}
</script>

<style lang="scss">
html{
 
}
body{
    font-family: 'Century Gothic', Helvetica, serif;
    background: url('./img/bg1.png') no-repeat;
    background-size: cover;
     background-color: #1217ad;
     color:white;
}

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
