<template>
  <div class="container-fluid">
      <jeopardy-modal v-if="showJeopardyModal" :questionObject="currentQuestion" :pointValue="currentQuestionPV" @submission="showJeopardyModal = false">

      </jeopardy-modal>
      <div class="col-8 offset-2">
        <h1 class="text-center">Jeopardy Style Questions</h1>
        <p class="text-center
        ">Select the tiles below and answer the question. You will get points for a correct answer. Get 6000 points to earn a badge!</p>
      </div>
      <div class="row text-center py-3">
        <div class="col"><h4>Home<br> Safety</h4></div>
        <div class="col"><h4>Fire<br> Concepts</h4></div>
        <div class="col"><h4>Outdoor<br> Safety</h4></div>
        <div class="col"><h4>Firefighting<br> Methods</h4></div>
        <div class="col"><h4>Emergency<br> Cases</h4></div>
      </div>
      <div class="row">
        <div class="col">
          <div v-for="(question,index) in questionBank.columnOne"
              :key="question[index]"
              class="jeopardy-cell col py-3 h2" 
              :class="{'clicked':questionBank.columnOne[index].clickState}"
              @click="!questionBank.columnOne[index].clickState && renderJeopardyModal('columnOne',index)">
              {{(index+1)*100}}
          </div>        
        </div>
        <div class="col">
          <div v-for="(question,index) in questionBank.columnTwo"
              :key="question[index]"
              class="jeopardy-cell col py-3 h2" 
              :class="{'clicked':questionBank.columnTwo[index].clickState}"
              @click="!questionBank.columnTwo[index].clickState && renderJeopardyModal('columnTwo',index)">
              {{(index+1)*100}}
          </div>
        </div>
        <div class="col">
          <div v-for="(question,index) in questionBank.columnThree"
              :key="question[index]"
              class="jeopardy-cell col py-3 h2" 
              :class="{'clicked':questionBank.columnThree[index].clickState}"
              @click="!questionBank.columnThree[index].clickState && renderJeopardyModal('columnThree',index)">
              {{(index+1)*100}}
          </div>
        </div>
        <div class="col">
          <div v-for="(question,index) in questionBank.columnFour"
              :key="question[index]"
              class="jeopardy-cell col py-3 h2" 
              :class="{'clicked':questionBank.columnFour[index].clickState}"
              @click="!questionBank.columnFour[index].clickState && renderJeopardyModal('columnFour',index)">
              {{(index+1)*100}}
          </div>
        </div>
        <div class="col">
          <div v-for="(question,index) in questionBank.columnFive"
              :key="question[index]"
              class="jeopardy-cell col py-3 h2" 
              :class="{'clicked':questionBank.columnFive[index].clickState}"
              @click="!questionBank.columnFive[index].clickState && renderJeopardyModal('columnFive',index)">
              {{(index+1)*100}}
          </div>
        </div>
      </div><!--End row-->

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
      attemptedQuestions: 0,
      sharedState:store.state,
      //order by difficulty
      //types: tf,multi,fill
      questionBank:{
        columnOne:[
          {
            clickState:false,
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
        columnTwo:[
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
        columnThree:[
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
        columnFour:[
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
        columnFive:[
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
        ]
      }
      
    }
  },
  methods:{
    renderJeopardyModal(col,pos){
      this.currentQuestion = this.questionBank[col][pos];
      this.currentQuestion.clickState = true;
      this.attemptedQuestions++;
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
      if(this.attemptedQuestions >= 25){
        if(this.score > 900){
          this.sharedState.JeopardyScore = this.score;
          this.emitMethod('activity-completed', {activity:"Jeopardy", completed:true});
          console.log('Jeopardy Completed');
        }else{
          this.emitMethod('activity-completed', {activity:"Jeopardy", completed:false});
          console.log('Jeopardy Incomplete')
        }
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
<style lang="scss" scoped>

 h1{
   color:rgba(70, 43, 114,.5);
 }
 .jeopardy-cell{
   text-align: center;
   cursor: pointer;
   border: 1px solid gray;
    border-radius: 4px;
 }
 .clicked{
   cursor: default;
   background-color: lightgray;
 }
 .table{
   th{
     width: 20%;
     font-size: larger;
   }
   td{
     padding-bottom: 1.5rem;
     padding-top: 1.5rem;
     border: 1px solid gray;
  
  >.cell-content{
    
  }
   }
 }

</style>
