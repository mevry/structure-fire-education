<template>
  <div class="container-fluid text-center h-100">

          <h1>Drag &amp; Drop</h1>
          <p>Rearrange the elements below to earn a badge!</p>
          <h3 class="mt-5">What should you do if you are on fire?</h3>
          <draggable v-model="stopDropRollAnswers" :class="[{win : stopDropRollComplete}]" @start="drag=true" @end="checkStopDropRollAnswers" class="row">
            <div class="col" v-for="item in stopDropRollAnswers" :key="item.id">
              <h2 class="drag-item" >{{item.val}}</h2>
            </div>
          </draggable>

          <h3 class="mt-5">Match the fire types with their class.</h3>
          <div class="row">            
            <div class="col mx-3" v-for="item in fireClassQuestions" :key="item.id">
              <h1>{{item.val}}</h1>
            </div>
          </div>

          <draggable v-model="fireClassAnswers" :class="[{win : fireClassComplete}]" @end="checkFireClassAnswers" class="row">
            <div class="col mx-3" v-for="item in fireClassAnswers" :key="item.id">
              <img :src="item.url" />
              <p>{{item.desc}}</p>
            </div>
          </draggable>
      </div>
</template>
<script>
import draggable from 'vuedraggable'
import store from '../store'
import EventBus from '../event-bus'
import ClassA from '../img/fc/class-a.png'
import ClassB from '../img/fc/class-b.png'
import ClassC from '../img/fc/class-c.png'
import ClassD from '../img/fc/class-d.png'
import ClassK from '../img/fc/class-k.png'
export default {
  name: 'drag-drop',
  data(){
    return{
      stopDropRollAnswers:[
        {id:3,val:"Roll"},
        {id:1,val:"Stop"},
        {id:2,val:"Drop"}
      ],
      fireClassQuestions:[
        {id:1,val:"A"},
        {id:2,val:"B"},
        {id:3,val:"C"},
        {id:4,val:"D"},
        {id:5,val:"K"},
      ],
      fireClassAnswers:[
        {id:3,url:ClassC,desc:"Electrical Fire"},
        {id:4,url:ClassD,desc:"Flammable Metals"},
        {id:5,url:ClassK,desc:"Cooking Oils/Fats"},
        {id:1,url:ClassA,desc:"Combustible Materials"},
        {id:2,url:ClassB,desc:"Flammable Liquid/Gas"}
      ],
      stopDropRollComplete:false,
      fireClassComplete:false,
      sharedState:store.state
    }
  },
  components:{
    draggable
  },
  computed:{

  },
  methods:{
    emitMethod(evt,payload){
      EventBus.$emit(evt, payload);
    },
    checkDragAndDropComplete(){
      if(this.stopDropRollComplete && this.fireClassComplete){
        this.sharedState.DragDropPass = true;
        this.emitMethod('drag-drop-completed', true);
      }    
    },
    checkStopDropRollAnswers(){
      if(this.stopDropRollAnswers[0].id == 1 &&
         this.stopDropRollAnswers[1].id == 2 &&
         this.stopDropRollAnswers[2].id == 3){
        this.stopDropRollComplete = true;
        console.log("Stop, Drop, & Roll Drag & Drop Completed");
        this.checkDragAndDropComplete();
      }
    },
    checkFireClassAnswers(){
      if(this.fireClassAnswers[0].id == 1 &&
         this.fireClassAnswers[1].id == 2 &&
         this.fireClassAnswers[2].id == 3 &&
         this.fireClassAnswers[3].id == 4 &&
         this.fireClassAnswers[4].id == 5){
        this.fireClassComplete = true;
        console.log("Fire Class Drag & Drop Completed");
        this.checkDragAndDropComplete();
      }
    }
  }
};
</script>
<style scoped>
  .drag-item{
    border: 1px solid rgb(182, 182, 182);
    border-radius: .25em;
    box-shadow: 1px 1px 3px gray;
  }
  .win{
    background-color: green;
  }
</style>
