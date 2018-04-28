<template>
  <div class="container-fluid">
    <h1>Enter Information Component</h1>
    <form>
      <div class="form-group">
        <label class="form-control-label" for="firstname">First Name</label>
        <input v-model="sharedState.FirstName" class="form-control form-control-lg" type="text" id="firstname">
      </div>
      <div class="form-group">
        <label class="form-control-label" for="lastname">Last Name</label>
        <input v-model="sharedState.LastName" class="form-control form-control-lg" type="text" id="lastname">
      </div>
      <div class="form-group">
        <label class="form-control-label" for="school">School Name</label>
        <input v-model="sharedState.School" class="form-control form-control-lg" type="text" id="school">
      </div>
      <div class="form-group">
        <label class="form-control-label" for="teachername">Teacher's Name</label>
        <input v-model="sharedState.Teacher" class="form-control form-control-lg" type="text" id="teacher">
      </div>
      <button @click.prevent="$emit('save-info',this.$data.first)" class="btn btn-primary" type="submit">Save</button>
    </form>
  </div><!--end container-fluid-->
</template>
<script>
import store from '../store.js'
export default {
  
  data(){
    return {
      sharedState: store.state
    }
  }
};
</script>
<style scoped>

</style>
