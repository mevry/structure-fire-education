<template>
  <div class="container-fluid">
    <h1>Enter Information Component</h1>
    <form>
      <div class="form-group">
        <label class="form-control-label" for="firstname">First Name</label>
        <input class="form-control form-control-lg" type="text" id="firstname">
      </div>
      <div class="form-group">
        <label class="form-control-label" for="lastname">Last Name</label>
        <input class="form-control form-control-lg" type="text" id="lastname">
      </div>
      <div class="form-group">
        <label class="form-control-label" for="school">School Name</label>
        <input class="form-control form-control-lg" type="text" id="school">
      </div>
      <div class="form-group">
        <label class="form-control-label" for="teachername">Teacher's Name</label>
        <input class="form-control form-control-lg" type="text" id="teacher">
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  </div><!--end container-fluid-->
</template>
<script>
export default {
  name: 'enter-information'
};
</script>
<style scoped>

</style>
