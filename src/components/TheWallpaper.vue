<template>
  <div class="wallpaper">
    <div class="wallpaper-heading">
      <h1> Urlaub im Ahrtal </h1>
      <h2> - Wein, Wandern, Wellness - </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallpaper',
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.wallpaper {
  width: 100%;
  height: 70vh;
  margin: 0;
  padding: 0;
  position: relative;
  background-image: url('../assets/images/Weinberg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include respond(tablet) {
    height: 50vh;
  }

  &-heading {
    padding: 50px 90px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    backdrop-filter: blur(4px);
    color: $color-body-background;

    @include respond(tablet) {
      width: 65%;
      margin: 0 auto;
      padding: 45px 0;
    }

    & h1 {
      width: 100%;
      margin: 0 0 10px 0;
      font-size: 2.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;

      @include respond(tablet) {
        font-size: 2rem;
      }
    }

    & h2 {
      margin: 0;
      font-size: 2rem;
      letter-spacing: $letter-spacing;

      @include respond(tablet) {
        font-size: 1.5rem;
      }
    }
  }
}

</style>