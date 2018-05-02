<template>
  <div id="rootContainer" class="container-fluid text-center h-100" >
    <div id="stopDropRollMatch" :class="[{win : stopDropRollComplete}]">
      <h1>Drag &amp; Drop</h1>
      <p>Rearrange the elements below to earn a badge!</p>
      <h3 class="mt-5">What should you do if you are on fire?</h3>
      <draggable
      v-model="stopDropRollAnswers"
      @start="drag=true"
      @end="checkStopDropRollAnswers"
      class="row">
        <div class="col" v-for="item in stopDropRollAnswers" :key="item.id" >
          <h2 class="drag-item" :style="{ backgroundColor: item.color }">{{item.val}}</h2>
        </div>
      </draggable>
    </div><!--stopDropRollMatch-->

      <div id="fireClassMatch" :class="[{win : fireClassComplete}]">
        <h3 class="mt-5">Match the fire types with their class.</h3>
        <div class="d-flex justify-content-around">
          <div class="col mx-3" v-for="item in fireClassQuestions" :key="item.id">
            <h1>{{item.val}}</h1>
          </div>
        </div>


      <div class="d-flex justify-content-around">
        <!--Drop Zone 1-->
        <div tag="div" class="drop-zone-container col py-4">
          <draggable
            v-model="fireClassDropZone.one"
            @add="checkIfSlotFull('one')"
            @remove="checkIfSlotFull('one')"
            @end="checkFireClassAnswers"

            :options="dropZoneOptions.one"
            id="dropZoneOne"
            class="drop-zone">
              <div class="" v-for="item in fireClassDropZone.one" :key="item.id">
                <img class="img-fluid" :src="item.url" />
                <h6>{{item.desc}}</h6>
              </div>
          </draggable>
        </div>

        <!--Drop Zone 2-->
        <div class="drop-zone-container col py-4">
          <draggable
            v-model="fireClassDropZone.two"
            @add="checkIfSlotFull('two')"
            @remove="checkIfSlotFull('two')"
            @end="checkFireClassAnswers"

            :options="dropZoneOptions.two"
            id="dropZoneTwo"
            class="drop-zone">
              <div  v-for="item in fireClassDropZone.two" :key="item.id">
                <img class="img-fluid" :src="item.url" />
                <h6>{{item.desc}}</h6>
              </div>
            </draggable>
        </div>

        <!--Drop Zone 3-->
        <div class="drop-zone-container col py-4">
          <draggable
            v-model="fireClassDropZone.three"
            @add="checkIfSlotFull('three')"
            @remove="checkIfSlotFull('three')"
            @end="checkFireClassAnswers"

            :options="dropZoneOptions.three"
            id="dropZoneThree"
            class="drop-zone">
              <div  v-for="item in fireClassDropZone.three" :key="item.id">
                <img class="img-fluid" :src="item.url" />
                <h6>{{item.desc}}</h6>
              </div>
            </draggable>
        </div>

        <!--Drop Zone 4-->
        <div class="drop-zone-container col py-4">
          <draggable
            v-model="fireClassDropZone.four"
            @add="checkIfSlotFull('four')"
            @remove="checkIfSlotFull('four')"
            @end="checkFireClassAnswers"

            :options="dropZoneOptions.four"
            id="dropZoneFour"
            class="drop-zone">
              <div  v-for="item in fireClassDropZone.four" :key="item.id">
                <img class="img-fluid" :src="item.url" />
                <h6>{{item.desc}}</h6>
              </div>
            </draggable>
        </div>

        <!--Drop Zone 5-->
        <div class="drop-zone-container col py-4">
          <draggable
            v-model="fireClassDropZone.five"
            @add="checkIfSlotFull('five')"
            @remove="checkIfSlotFull('five')"
            @end="checkFireClassAnswers"

            :options="dropZoneOptions.five"
            id="dropZoneFive"
            class="drop-zone">
              <div v-for="item in fireClassDropZone.five" :key="item.id">
                <img class="img-fluid" :src="item.url" />
                <h6>{{item.desc}}</h6>
              </div>
            </draggable>
        </div>
      </div>


      <!--Pull From List-->
      <draggable
      v-model="fireClassAnswers"
      @remove="checkFireClassAnswers"
      :options="{group:'fire-class'}"
      id="sourceZone"
      class="d-flex justify-content-around py-3">
        <div class="col" v-for="item in fireClassAnswers" :key="item.id">
          <img class="img-fluid" :src="item.url" />
          <h6>{{item.desc}}</h6>
        </div>
      </draggable>
    </div><!--fireClassMatch-->
</div><!--container-->
</template>
<script>
import draggable from 'vuedraggable'
import store from '../store'
import EventBus from '../event-bus'
//import BadgeModal from '../components/BadgeEarned'
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
        {id:3,val:"Roll",color:"#ffcce2"},
        {id:1,val:"Stop",color:"#ccd9ff"},
        {id:2,val:"Drop",color:"#ccfffc"}
      ],
      fireClassQuestions:[
        {id:1,val:"A"},
        {id:2,val:"B"},
        {id:3,val:"C"},
        {id:4,val:"D"},
        {id:5,val:"K"},
      ],
      fireClassDropZone:{
        one:[],
        two:[],
        three:[],
        four:[],
        five:[]
      },
      fireClassAnswers:[
        {id:3,url:ClassC,desc:"Electrical Fire"},
        {id:4,url:ClassD,desc:"Flammable Metals"},
        {id:5,url:ClassK,desc:"Cooking Oils/Fats"},
        {id:1,url:ClassA,desc:"Combustible Materials"},
        {id:2,url:ClassB,desc:"Flammable Liquid/Gas"}
      ],
      stopDropRollComplete:false,
      fireClassComplete:false,
      sharedState:store.state,
      dropZoneOptions:{
        one:{
          group:{
            name:'fire-class',
            put:true
          },
          animation:150
        },
        two:{
          group:{
            name:'fire-class',
            put:true
          }
        },
        three:{
          group:{
            name:'fire-class',
            put:true
          }
        },
        four:{
          group:{
            name:'fire-class',
            put:true
          }
        },
        five:{
          group:{
            name:'fire-class',
            put:true
          }
        }
      }
    }
  },
  components:{
    draggable
  },
  computed:{
    DragDropComplete(){
      return this.sharedState.DragDropPass
    }
  },
  methods:{
    emitMethod(evt,payload){
      EventBus.$emit(evt, payload);
    },
    checkDragAndDropComplete(){
      if(this.stopDropRollComplete && this.fireClassComplete){
        this.sharedState.DragDropPass = true;
        this.emitMethod('activity-completed', "Drag Drop");
        console.log('Drag & Drop Completed');
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
      console.log("checkFireClassAnswers fired.")
      if(!this.fireClassAnswers.length){
        if(this.fireClassDropZone.one[0].id == 1 &&
          this.fireClassDropZone.two[0].id == 2 &&
          this.fireClassDropZone.three[0].id == 3 &&
          this.fireClassDropZone.four[0].id == 4 &&
          this.fireClassDropZone.five[0].id == 5){
          this.fireClassComplete = true;
          console.log("Fire Class Drag & Drop Completed");
          this.checkDragAndDropComplete();
        }
      }
    },
    checkIfSlotFull(zoneNumber){
      if(this.fireClassDropZone[zoneNumber].length > 0){
        this.dropZoneOptions[zoneNumber].group.put = false;
      }else{
        this.dropZoneOptions[zoneNumber].group.put = true;
      }
    }
  }
};
</script>
<style scoped>
  #rootContainer{
    font-family: 'Century Gothic', sans-serif;
  }
  .drag-item{
    border: 1px solid rgb(182, 182, 182);
    box-shadow: 1px 1px 2px rgb(200, 200, 200);
    padding: 1em;
  }
  .win{
    background-color: green;
  }

  .drop-zone-container{

    min-height: 150px;

  }
  .drop-zone{
    min-height: 140px;
   background-color:#e2e2e2;
    padding: 15px
  }
  #sourceZone{
    min-height: 125px;
    background-color: #e2e2e2;
  }
</style>
