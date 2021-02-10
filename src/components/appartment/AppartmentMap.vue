<template>
  <div class="appartment-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.358091299421!2d7.141409015946449!3d50.54611038834814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47befbd854c47fb5%3A0x4ee9007625a92c75!2sRavensberger%20Str.%2021A%2C%2053474%20Bad%20Neuenahr-Ahrweiler!5e0!3m2!1sde!2sde!4v1608758784843!5m2!1sde!2sde" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'AppartmentMap',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-map {
  height: 45vh;
  margin: 10vh 0 12vh 0;
  box-shadow: 10px 20px 20px #888888;

  @include respond(tablet) {
    height: 35vh;
    margin: 8vh 0 10vh 0;
  }

  @include respond(phone) {
    height: 25vh;
    margin: 6vh 0 9vh 0;
  }

  & iframe {
  width: 100%;
  height: 100%;
  }
}
</style>