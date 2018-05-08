<template>
  <div class="container-fluid">
    <h1>Printables</h1>
    <a :href="EasyDemo" target="_blank">Easy Difficulty Crossword</a>
    <br />
    <a :href="MedCross" target="_blank">Medium Difficulty Crossword</a>
    <br />
  </div>
</template>
<script>
  import lab5 from '../assets/lab5.pdf'
  import easyDemo from '../assets/easy_demo.pdf'
  import medCross from '../assets/medium_cross.pdf'
export default {
  name: 'coloring',
  data(){
    return{
      EasyDemo: easyDemo,
      MedCross: medCross
    }
  }
};
</script>
<style scoped>
 .container-fluid{
   background-color: rgba(255,255,255,.8);
   border-radius: 4px;
   box-shadow: 1px 1px 3px rgba(41, 38, 80, .5);
 }
</style>
