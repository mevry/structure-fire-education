<template>
    <div class="d-flex">
        <span v-if="FirstName">Hey, {{ FirstName }}</span>
        <span class="ml-auto"><strong>Badges Earned: </strong> {{badgeQuantity()}} / 3</span>
    </div>
</template>
<script>
import store from '../store.js'
import EventBus from '../event-bus.js'
export default {
  name:"site-header",
  data (){
    return {
      sharedState: store.state
    }
  },
  computed:{
      FirstName(){ 
        return this.sharedState.FirstName
      }
  },
  methods:{
    badgeQuantity(){
      console.log("badgeQuantity fired")
      let qty = 0;
      if(this.sharedState.JeopardyScore > 80){
        qty++
      }
      if(this.sharedState.DragDropPass){
        qty++
      }
      if(this.sharedState.MemoryPass){
        qty++
      }
      return qty
    }
  },
  mounted(){
    EventBus.$on('activity-completed', this.badgeQuantity);
  }

}
</script>
<style lang="scss">

</style>



