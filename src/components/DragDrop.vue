<template>
  <div class="container-fluid">

          <h1>Drag &amp; Drop Component</h1>
          <draggable v-model="testArray" :class="[{win : stopDropRoll}]" @start="drag=true" @end="compareArray" class="d-flex justify-content-around text-center">
            <h2 class="drag-item" v-for="item in testArray" :key="item.id">{{item.val}}</h2>
          </draggable>
      </div>
</template>
<script>
import draggable from 'vuedraggable'
import store from '../store'
export default {
  name: 'drag-drop',
  data(){
    return{
      testArray:[
        {id:3,val:"Roll"},
        {id:1,val:"Stop"},
        {id:2,val:"Drop"}
      ],
      stopDropRoll:false,
      sharedState:store.state
    }
  },
  components:{
    draggable
  },
  computed:{

  },
  methods:{
    compareArray(){
      if(this.testArray[0].id == 1 &&
         this.testArray[1].id == 2 &&
         this.testArray[2].id == 3){
        this.stopDropRoll = true;
        console.log("Activity Completed");

      }
    }
  }
};
</script>
<style scoped>
  .drag-item{
    border: 1px solid rgb(182, 182, 182);
    border-radius: .25em;
    padding: 1em;
    width:30%;
    box-shadow: 1px 1px 3px gray;
  }
  .win{
    background-color: green;
  }
</style>
