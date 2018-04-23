<template>
  <div class="container">
<button class="btn btn-success" v-if="templateType == 'template-one'" @click="templateType = 'template-two'">Change Template Type</button>
<button class="btn btn-success" v-else @click="templateType = 'template-one'">Change Template Type</button>
<br>
<component :is="templateType"></component>

 </div>
</template>

<script>
import TemplateOne from './Template1.vue'
import TemplateTwo from './Template2.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      templateType:"template-one"
    }
  },
  components:{
    'template-one':TemplateOne,
    'template-two':TemplateTwo
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
