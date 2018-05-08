<template>
  <header>
    <nav class="d-flex justify-content-between">
      <router-link to="/" class="nav-item nav-link"><img class="img-fluid" src="../img/iconGame.png" /> Activities</router-link>
      <router-link to="/resources" class="nav-item nav-link"><img class="img-fluid" src="../img/iconRes.png" /> Resources</router-link>
      <router-link to="/about" class="nav-item nav-link"><img src="../img/iconAbout.png" /> About</router-link>

      <a href="#" class="nav-item nav-link disabled"><img src="../img/iconCert.png" alt="Img Cert Icon"> Certificate</a>
    </nav>
  </header>
</template>

<script>

</script>
<style scoped>
  a{
    color:#8affff;

    font-size: x-large;
  }
  img{
    height: 40px;
  }
  .nav-link{
    padding: .5rem 0;
  }
</style>
