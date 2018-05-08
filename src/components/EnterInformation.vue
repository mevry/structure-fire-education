<template>
  <div class="container-fluid pt-3">
    <h1 class="text-center">Enter Your Name &amp; School</h1>
    <div class="row">
      <div class="col">
        <img class="img-fluid" src="../img/fireman.png" alt="">
      </div>
      <div class="col">
        <div id="firemanDialog" class="p-4">
          <p>Hey there student. Welcome to the Tacoma Fire Department online fire safety activities. Here you will test the fire safety knowledge you have learned in class.</p>
          <p>Tell me your name, your school's name, and your teacher's name so I can print it on your certificate when you complete all the activities!</p>
        </div>
      </div>
    </div>

      <form class="row white-font">
        <div class="col">
          <div class="form-group">
            <label class="form-control-label" for="firstname">First Name</label>
            <input v-model.lazy="sharedState.FirstName" class="form-control form-control-lg" type="text" id="firstname">
          </div>
          <div class="form-group">
            <label class="form-control-label" for="lastname">Last Name</label>
            <input v-model.lazy="sharedState.LastName" class="form-control form-control-lg" type="text" id="lastname">
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-control-label" for="school">School Name</label>
            <input v-model.lazy="sharedState.School" class="form-control form-control-lg" type="text" id="school">
          </div>
          <div class="form-group">
            <label class="form-control-label" for="teachername">Teacher's Name</label>
            <input v-model.lazy="sharedState.Teacher" class="form-control form-control-lg" type="text" id="teacher">
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col">
          <router-link tag="button" to="/" class="btn btn-warning">Save</router-link>
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
<style lang="scss" scoped>
  #firemanDialog{
    background-color: white;
    border-radius: 20px;
  }
  h1{
    color: #e3ff2c;
  }
  .btn-warning{
    background-color: #e3ff2c;
    &:hover{
      background-color: darken(#e3ff2c,15%);
    }
    border-color: darken(#e3ff2c,15%);
  }
</style>
