<template>
  <div class="container-fluid">
      <jeopardy-modal v-if="showJeopardyModal" :questionObject="currentQuestion" :pointValue="currentQuestionPV" @submission="showJeopardyModal = false">

      </jeopardy-modal>
      <h1>Jeopardy Component</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Home Safety</th>
            <th>Fire Concepts</th>
            <th>Outdoor Safety</th>
            <th>Firefighting Methods</th>
            <th>Emergency Cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td @click="renderJeopardyModal('columnOne',0)">100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td @click="renderJeopardyModal('columnOne',1)">200</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
          </tr>
          <tr>
            <td @click="renderJeopardyModal('columnOne',2)">300</td>
            <td>300</td>
            <td>300</td>
            <td>300</td>
            <td>300</td>
          </tr>
          <tr>
            <td @click="renderJeopardyModal('columnOne',3)">400</td>
            <td>400</td>
            <td>400</td>
            <td>400</td>
            <td>400</td>
          </tr>
          <tr>
            <td @click="renderJeopardyModal('columnOne',4)">500</td>
            <td>500</td>
            <td>500</td>
            <td>500</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
      <h2 @submission="updatePoints()">Current Points: {{score}}</h2>
  </div>
</template>
<script>
import JeopardyModal from './JeopardyModal.vue'
import EventBus from '../event-bus'
import store from '../store'

export default {
  name: 'jeopardy',
  data(){
    return{
      showJeopardyModal:false,
      currentQuestion:{},
      currentQuestionPV:0,
      score:0,
      sharedState:store.state,
      //order by difficulty
      //types: tf,multi,fill
      questionBank:{
        columnOne:[
          {
            type:"tf",
            question:"Your home should have a smoke detector to warn you in case of a smoke emergency.",
            answer:[true],
          },
          {
            type:"multi",
            question:"This will allow you to escape from 2nd story houses.",
            answer:[3],
            options:[
              {
                key:0,
                value:"Trampoline"
              },
              {
                key:1,
                value:"Parachute"
              
              },
              {
                key:2,
                value:"Giant Drone"
              },
              {
                key:3,
                value:"Rope Ladder"
              }             
            ]
          },
          {
            type:"tf",
            question:"You should have less than two escape routes per room.",
            answer:[false]
          },
          {
            type:"fill",
            question:{
              partOne:"You should practice a family escape plan",
              partTwo:"times per year.",
            },
            answer:["two", 2]
          },
          {
            type:"multi",
            question:"Your family should use this to gather together after a home fire.",
            answer:[0],
            options:[
              {
                key:0,
                value:"A Meeting Place"
              },
              {
                key:1,
                value:"Sushi"
              
              },
              {
                key:2,
                value:"Smoke Detector"
              },
              {
                key:3,
                value:"Rope Ladder"
              }             
            ]
          }
        ],
        columnTwo:[],
        columnThree:[],
        columnFour:[],
        columnFive:[]
      }
      
    }
  },
  methods:{
    renderJeopardyModal(col,pos){
      this.currentQuestion = this.questionBank[col][pos];
      this.updateQuestionPV(pos);
      this.showJeopardyModal = true;
    },
    updateQuestionPV(position){
     this.currentQuestionPV = (position+1)*100;
    },
    updatePoints(correct){
      this.showJeopardyModal = false
      console.log("current point val: " + this.currentQuestionPV)
      if(correct){       
        this.score += this.currentQuestionPV;
      }
      this.checkJeopardyComplete();
    },
    checkJeopardyComplete(){
      if(this.score > 900){
        this.sharedState.JeopardyScore = this.score;
        this.emitMethod('activity-completed', "Jeopardy");
        console.log('Jeopardy Completed');
        
      }
    },
    emitMethod(evt,payload){
      EventBus.$emit(evt,payload);
    }
  },
  components:{
    'jeopardy-modal':JeopardyModal
  },
  mounted(){
    EventBus.$on('submission', this.updatePoints);
  }
};
</script>
<style scoped>

 h1{
   color:rgba(70, 43, 114,.5);
 }
</style>
