<template>
  <div class="container-fluid">

          <h1 class="text-center text-white">Resources</h1>
          <div class="text-center my-3 py-5">
            <a class="btn btn-primary btn-lg" target="_blank" id="survey" href="https://www.surveymonkey.com/r/XGDJPSK">
              <h1>Take Our Survey!</h1>
            </a>
          </div>
          <printables></printables>
      </div>
</template>
<script>
import Printables from './Printables.vue'
export default {
  name: 'resources',
  components:{
    'printables':Printables
  },

};

</script>
<style scoped>
  #survey{

  }
</style>
