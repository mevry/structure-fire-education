<template>
  <div class="container-fluid">
    <h1 class="text-center">Enter Your Name &amp; School</h1>
    <div class="row">
      <div class="col">
        <img class="img-fluid" src="../img/fireman.png" alt="">
      </div>
      <div class="col">
        <form>
          <div class="form-group">
            <label class="form-control-label" for="firstname">First Name</label>
            <input v-model.lazy="sharedState.FirstName" class="form-control form-control-lg" type="text" id="firstname">
          </div>
          <div class="form-group">
            <label class="form-control-label" for="lastname">Last Name</label>
            <input v-model.lazy="sharedState.LastName" class="form-control form-control-lg" type="text" id="lastname">
          </div>
          <div class="form-group">
            <label class="form-control-label" for="school">School Name</label>
            <input v-model.lazy="sharedState.School" class="form-control form-control-lg" type="text" id="school">
          </div>
          <div class="form-group">
            <label class="form-control-label" for="teachername">Teacher's Name</label>
            <input v-model.lazy="sharedState.Teacher" class="form-control form-control-lg" type="text" id="teacher">
          </div>
          <button @click.prevent="$emit('save-info',this.$data.first)" class="btn btn-primary" type="submit">Save</button>
        </form>
      </div>
    </div>
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
