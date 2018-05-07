<template>
  <div class="container-fluid">

          <h1>Printables</h1>
          <a :href="Lab5" target="_blank">Lab 5</a>
      </div>
</template>
<script>
import lab5 from '../assets/lab5.pdf'
export default {
  name: 'coloring',
  data(){
    return{
      Lab5:lab5
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
