<template>
  <div class="container-fluid">

          <h1>Resources Component</h1>
          <printables></printables>
      </div>
</template>
<script>
import Printables from './Printables.vue'
export default {
  name: 'resources',
  components:{
    'printables':Printables
  }
};
</script>
<style scoped>

</style>
