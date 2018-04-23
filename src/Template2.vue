<template container-type='fluid'>
  <div class="container-fluid">

          <h1>This is a different component altogether</h1>
          <button type="button" class="btn btn-primary">A button</button>
      </div>
</template>
<script>
export default {
  name: 'template-one',
  props: ['container-type']
};
</script>
<style scoped>
  .container,.container-fluid{
    background-color: blue;
  }
</style>

