<template>
  <header>
    <nav class="nav nav-fill">
      <router-link to="/jeopardy" class="nav-item nav-link">Jeopardy</router-link>
      <router-link to="/drag-drop" class="nav-item nav-link">Drag &amp; Drop</router-link>
      <router-link to="/memory" class="nav-item nav-link">Memory</router-link>
      <router-link to="/coloring" class="nav-item nav-link">Coloring</router-link>
      <router-link to="/resources" class="nav-item nav-link">Resources</router-link>
      <a href="#" class="nav-item nav-link disabled">Certificate</a>
    </nav>
  </header>
</template>

<script>
export default {
  name:"site-header",
  data (){
    return {

    }
  }
}
</script>
