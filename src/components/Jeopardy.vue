<template>
  <div class="container-fluid">

      <h1>Jeopardy Component</h1>
      <p>Copying and pasting</p>
      <p>{{message}}</p>
  </div>
</template>
<script>



export default {
  name: 'jeopardy',
  data(){
    return{
      message:"this is a message"
    }
  }
};
</script>
<style scoped>

 h1{
   color:rgba(70, 43, 114,.5);
 }
</style>
