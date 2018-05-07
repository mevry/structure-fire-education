<template>
 <div class="text-center h-100 inline-block">
	 <h1>Memory Component</h1>
	 <p>Match the cards to win a badge.</p>
 	 <div id="rootContainer" class=" h-100 inline-block">
		<link rel="stylesheet" href="./dist/memory.bundle.css">
	    <div class="wrap">
	      <div class="game">

		  </div>
	      <div class="modal-overlay">
	        <div class="modal">
	          <h2 class="winner">Wonderful Job!</h2>
	          <button class="restart">Want to try again?</button>
	        </div>
	      </div>
	      <footer>
	        <p class="disclaimer">All images are property of Jessica S at UWT and other respective owners, No Copyright infringement intended.</p>
	      </footer>
	    </div><!-- End Wrap -->
		
	  </div><!--Container-->
 </div>

  
</template>
<script>
import $ from 'jquery'
import bbq from '../img/mem/bbq.png'
import candle from '../img/mem/candle.png'
import classA from '../img/mem/classA.png'
import classB from '../img/mem/classB.png'
import classc from '../img/mem/classc.png'
import classD from '../img/mem/classD.png'
import classK from '../img/mem/classK.png'
import fire from '../img/mem/fire.png'
import fireman from '../img/mem/fireman.png'
import firetruck from '../img/mem/firetruck.png'
import matches from '../img/mem/matches.png'
import smokedetector from '../img/mem/smokedetector.png'
import stove from '../img/mem/stove.png'
import EventBus from '../event-bus'
import store from '../store'

export default {
  name: 'memory',
  data(){
	  return {
		sharedState:store.state,
		fireman
	  }
  },
  methods:{
	emitMethod(evt,payload){
		EventBus.$emit(evt,payload)
	}
  },
  mounted (){
	let self = this;
    var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards,cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".mem-card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			console.log("cardClicked fired")
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".mem-card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			console.log("win fired");
			self.sharedState.MemoryPass = true;
			self.emitMethod('activity-completed', {activity:"Jeopardy", completed:true});
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="mem-card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src='+ fireman + '\
				alt="firefighter" /></div></div>\
				</div>';
			});
			
			return frag;
		}
	};

	var cards = [
		{
			name: "classa",
			img: classA,
			id: 1,
		},
		{
			name: "classb",
			img: classB,
			id: 2
		},
		{
			name: "classc",
			img: classc,
			id: 3
		},
		{
			name: "classd",
			img: classD,
			id: 4
		},
		{
			name: "classK",
			img: classK,
			id: 5
		},
		{
			name: "bbq",
			img: bbq,
			id: 6
		},
		{
			name: "candle",
			img: candle,
			id: 7
		},
		{
			name: "fire",
			img: fire,
			id: 8
		},
		{
			name: "firetruck",
			img: firetruck,
			id: 9
		},
		{
			name: "matches",
			img: matches,
			id: 10
		},
		{
			name: "smokedetector",
			img: smokedetector,
			id: 11
		},
		{
			name: "stove",
			img: stove,
			id: 12
		},
	];

	Memory.init(cards);
  }
  
};
</script>
<style lang="scss" scoped>
// * {
// 	box-sizing: border-box;
// }

// html, body {
// 	height: 100%;
// }

// #rootContainer {
// 	background: black;
// 	min-height: 100%;
// 	font-family: "Century Gothic", sans-serif;
// }

// .wrap {
//   position: relative;
//   height: 100%;
//   min-height: 500px;
//   padding-bottom: 20px;
// }

// .game {
// 	transform-style: preserve-3d;
// 	perspective: 500px;
// 	min-height: 100%;
//   height: 100%;
// }

// @mixin width($max){
// 	@media (max-width: $max){
// 		@content;
// 	}
// }

// @keyframes matchAnim {
// 	0% {
// 		background: #bcffcc;
// 	}
// 	100% {
// 		background: white;
// 	}
// }

// .mem-card {

//   float: left;
//   width: 16.66666%;
//   height: 25%;
//   padding: 5px;
//   text-align: center;
// 	display: block;
// 	perspective: 500px;
// 	position: relative;
// 	cursor: pointer;
//   z-index: 50;
// 	-webkit-tap-highlight-color: rgba(0,0,0,0);
// 	@include width(800px){
// 		width: 25%;
// 		height: 16.666%;
// 	}
// 	.inside {
// 		width: 100%;
// 		height: 100%;
// 		display: block;
// 		transform-style: preserve-3d;
// 		transition: .4s ease-in-out;
// 		background: white;

// 		&.picked, &.matched {
// 			transform: rotateY(180deg);
// 		}
// 		&.matched {
// 			animation: 1s matchAnim ease-in-out;
// 			animation-delay: .4s;
// 		}
// 	}

//   .front, .back {
//   	border: 1px solid black;
//   	backface-visibility: hidden;
//   	position: absolute;
//   	top: 0;
//   	left: 0;
//   	width: 100%;
//   	height: 100%;
//   	padding: 20px;

//   	img {
//   		max-width: 100%;
//   		display: block;
//   		margin: 0 auto;
//   		max-height: 100%;
//   	}
//   }
//   .front {
//   	transform: rotateY(-180deg);
//   	@include width(800px){
//   		padding: 5px;
//   	}
//   }
//   .back{
// 		transform: rotateX(0); // fix firefox backface-visibility.
// 		@include width(800px){
//   		padding: 10px;
//   	}
//   }
// }

// .modal-overlay {
// 	display: none;
// 	background: rgba(0,0,0,.8);
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// }

// .modal {
// 	display: none;
// 	position: relative;
// 	width: 500px;
// 	height: 400px;
// 	max-height: 90%;
// 	max-width: 90%;
// 	min-height: 380px;
// 	margin: 0 auto;
// 	background: white;
// 	top: 50%;
// 	transform: translateY(-50%);
// 	padding: 30px 10px;
// 	.winner {
// 		font-size: 80px;
// 		text-align: center;
// 		font-family: "Century Gothic", sans-serif;
// 		color: #4d4d4d;
// 		text-shadow: 0px 3px 0 black;
// 		@include width(480px){
// 			font-size: 60px;
// 		}
// 	}
// 	.restart {
// 		font-family: "Century Gothic", sans-serif;
// 		margin: 30px auto;
// 		padding: 20px 30px;
// 		display: block;
// 		font-size: 30px;
// 		border: none;
// 		background: #4d4d4d;
// 		background: linear-gradient(#4d4d4d, #222);
// 		border: 1px solid #222;
// 		border-radius: 5px;
// 		color: white;
// 		text-shadow: 0px 1px 0 black;
// 		cursor: pointer;
// 		&:hover {
// 			background: linear-gradient(#222, black);
// 		}
// 	}
// }

// footer {
// 	height: 20px;
// 	position: absolute;
// 	bottom: 0;
// 	width: 100%;
//   z-index: 0;
// 	.disclaimer {
// 		line-height: 20px;
// 		font-size: 12px;
// 		color: #727272;
// 		text-align: center;
// 		@include width(767px){
// 			font-size: 8px;
// 		}
// 	}
// }
</style>
