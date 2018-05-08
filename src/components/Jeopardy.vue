<template>
  <div class="container-fluid">
      <jeopardy-modal v-if="showJeopardyModal" :questionObject="currentQuestion" :pointValue="currentQuestionPV" @submission="showJeopardyModal = false">

      </jeopardy-modal>
      <div class="col-8 offset-2">
        <h1 class="text-center">Jeopardy</h1>
        <p class="text-center
        ">Select the tiles below and answer the question. You will get points for a correct answer. Get 6000 points to earn a badge!</p>
      </div>
      <div id="jeopardyHeaderRow" class="row text-center py-1 my-3">
        <div class="jeopardy-header col"><h5>Home<br> Safety</h5></div>
        <div class="jeopardy-header col"><h5>Fire<br> Concepts</h5></div>
        <div class="jeopardy-header col"><h5>Outdoor<br> Safety</h5></div>
        <div class="jeopardy-header col"><h5>Firefighting<br> Methods</h5></div>
        <div class="jeopardy-header col"><h5>Emergency<br> Cases</h5></div>
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

      <h2 class="py-3" @submission="updatePoints()">Current Points: {{score}}</h2>
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
            answer:["two", "2"]
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
            question:"Fire requires heat, fuel and air to continue burning. This referred to as the fire triangle in the US",
            answer:[true],
          },
          {
            type:"multi",
            question:"This is the most common type of fire - consisting of combustible materials",
            answer:[3],
            options:[
              {
                key:0,
                value:"Class B"
              },
              {
                key:1,
                value:"Class D"

              },
              {
                key:2,
                value:"Class F"
              },
              {
                key:3,
                value:"Class A"
              }
            ]
          },
          {
            type:"tf",
            question:"Smoke inhalation is a minor nuisance during fire scenarios.",
            answer:[false]
          },
          {
            type: "tf",
            question: "Fire is threat to very few people.",
            answer: [false]
          },
          {
            type:"multi",
            question:"This type of fire favors liquids and other combustible fluids.",
            answer:[0],
            options:[
              {
                key:0,
                value:"Class B"
              },
              {
                key:1,
                value:"Class C"

              },
              {
                key:2,
                value:"Class Z"
              },
              {
                key:3,
                value:"Class A"
              }
            ]
          }
        ],
        columnThree:[
          {
            type:"tf",
            question:"A lawnmower is best fueled outside a good distance away from any buildings.",
            answer:[true],
          },
          {
            type:"multi",
            question:"This is a good spot to pitch your tent in relation to your campfire.",
            answer:[3],
            options:[
              {
                key:0,
                value:"Upwind"
              },
              {
                key:1,
                value:"Parallel"

              },
              {
                key:2,
                value:"On top of the campfire"
              },
              {
                key:3,
                value:"Downwind"
              }
            ]
          },
          {
            type:"tf",
            question:"Instead of a lit flame, it'd be best to use a flashlight (or battery powered lantern) to light your tent at night",
            answer:[true]
          },
          {
            type:"fill",
            question:{
              partOne:"Propane or charcoal grills should only be used",
              partTwo:" and never used inside.",
            },
            answer:["outside"]
          },
          {
            type:"multi",
            question:"One of these should be present whenever an outdoor grill or fireplace is being used in your home",
            answer:[0],
            options:[
              {
                key:0,
                value:"An adult"
              },
              {
                key:1,
                value:"A dog"

              },
              {
                key:2,
                value:"A cellphone"
              },
              {
                key:3,
                value:"A police officer"
              }
            ]
          }
        ],
        columnFour:[
          {
            type:"tf",
            question:"A fire axe is a tool that can be used by firefighters to break down doors and windows that bar entry.",
            answer:[true],
          },
          {
            type:"multi",
            question:"A small tool that can be used by adults to fight, small contained fires after everyone has evacuated the building",
            answer:[3],
            options:[
              {
                key:0,
                value:"A open soda"
              },
              {
                key:1,
                value:"Dirt"

              },
              {
                key:2,
                value:"Towel"
              },
              {
                key:3,
                value:"Fire extinguisher"
              }
            ]
          },
          {
            type:"tf",
            question:"When a fire alarms sounds, you should quickly and calmly find the nearest exit and evacuate",
            answer:[true]
          },
          {
            type:"fill",
            question:{
              partOne:"A fire",
              partTwo:"is a long hollow tube capped with a nozzle that allows water to be shot onto fires",
            },
            answer:["hose"]
          },
          {
            type:"multi",
            question:"These are automatic firefighting tools that are supposed to trigger automatically in event of a fire",
            answer:[0],
            options:[
              {
                key:0,
                value:"Indoor Sprinkler system"
              },
              {
                key:1,
                value:"Air Conditioning"

              },
              {
                key:2,
                value:"Automatic blast doors"
              },
              {
                key:3,
                value:"Strobe lights"
              }
            ]
          }
        ],
        columnFive: [
          {
            type: "tf",
            question: "The kitchen is the most common space in the home for fires.",
            answer: [true]
          },
          {
            type: "fill",
            question: {
              partOne: "When in public, you should be aware of all the possible",
              partTwo: "of the buildings you enter.",
            },
            answer: ["exits"]
          },
          {
            type: "multi",
            question: "If your clothes catch fire, this is a good response.",
            answer: [0],
            options: [
              {
                key: 0,
                value: "Stop, drop, and roll."
              },
              {
                key: 1,
                value: "Drink Mountain Dew."

              },
              {
                key: 2,
                value: "Dab"
              },
              {
                key: 3,
                value: "Read a book"
              }
            ]
          },
          {
            type:"tf",
            question:"The front of your hand is the best way to test for heat when opening a door during fire.",
            answer:[false],
          },
          {
            type:"multi",
            question:"This is the best time to re-enter a burning building",
            answer:[3],
            options:[
              {
                key:0,
                value:"Any time on Tuesdays"
              },
              {
                key:1,
                value:"Before Sundown"

              },
              {
                key:2,
                value:"12pm"
              },
              {
                key:3,
                value:"Never"
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
.container-fluid{
   background-color: rgba(255,255,255,.8);
   border-radius: 4px;
   box-shadow: 1px 1px 3px rgba(41, 38, 80, .5);
 }

 .jeopardy-cell{
   background-color: white;
   text-align: center;
   cursor: pointer;
   border: 1px solid rgba(180, 180, 180, 0.75);
    border-radius: 6px;
 }
 .clicked{
   cursor: default;
   background-color: lightgray;
 }

 #jeopardyHeaderRow{
   border-bottom: 1px solid gray;
   border-top: 1px solid gray;
 }
 .jeopardy-header{

   >h5{
     font-weight: bold;
   }
 }


</style>
