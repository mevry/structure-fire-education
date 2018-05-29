<template>
  <div class="container-fluid">
    <h1 class="text-center text-white">About</h1>
    <a id="uwBlurb" class="uwBlurb">
      This website was built as a joint venture between University of Washington Tacoma and the Tacoma Fire Department as a part of the Liveable City Year.
      <br />
      It was built during Spring Quarter 2018 by a team of 4 Information Technology students to aid the TFD in engaging youth in Fire Education and to expand the student's knowledge of various scripting languages (primarily Vue.js).
      <br />
    </a>
    <a class="TFD-contact" id="TFD-Contact">
      <h2>Contact Information</h2>

      Tacoma Fire Department
      <br />
      901 Fawcett Avenue
      <br />
      Tacoma, WA 98402
      <br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.047948540409!2d-122.44519238438163!3d47.254765679162965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490550a71de05bf%3A0xb48bd5a2ec2f9d92!2s901+Fawcett+Ave%2C+Tacoma%2C+WA+98402!5e0!3m2!1sen!2sus!4v1527590081326"
              width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      <br />
      Phone: (253) 591-5737
      <br />
      FAX: (253) 591-5746

      <br />
      Business Hours
      <br />
      Monday - Friday
      <br />
      8 AM - 5 PM
    </a>
    <br />
  </div>
</template>
<script>

export default {
  name: 'about'
};
</script>
<style scoped>
  .container-fluid {
    background-color: rgba(255,255,255,.8);
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(41, 38, 80, .5);
  }

</style>
