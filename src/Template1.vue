<template>
  <div class="container-fluid">
          <h1>This is a dynamic component</h1>
          <button type="button" class="btn btn-primary">A button</button>
  </div>
</template>
<script>
export default {
  name: 'template-one',
  data (){
    return {
      "container-type":"fluid"
    }
  }
};
</script>
<style scoped>
  .container,.container-fluid{
    background-color: red;
  }
</style>
